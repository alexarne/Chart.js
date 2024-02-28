# Report for assignment 4

## Project

Name: Chart.js

[URL](https://github.com/alexarne/Chart.js)

The project a javascript library that provides functionality to create highly customizable charts.

## Onboarding experience

We chose a new project, since we had trouble finding reasonable issues to work in in our previous project, Mockito.
The onboarding experience with Chart.js was a bit more demanding than for Mockito. It required downloading pnpm, which did not cause much trouble. However, several of the team members had trouble building the project and running the tests, since it runs the tests in both Google Chrome and Firefox. If none of those are downloaded on the machine running the tests, the all tests will fail. For the members using WSL, there was some trouble with finding the correct binaries from the underlying windows OS, as well as some trouble with the browser crashing if it was already running before running the tests.

## Effort spent

For each team member, how much time was spent in

1. plenary discussions/meetings;
2. discussions within parts of the group;
3. reading documentation;
4. configuration and setup;
5. analyzing code/output;
6. writing documentation;
7. writing code;
8. running code?

For setting up tools and libraries (step 4), enumerate all dependencies
you took care of and where you spent your time, if that time exceeds
30 minutes.

**Anne Haaker**

1. 2.5h
2. 
3. 0.5h (reading documentation specific for testing)
4. 2h. Chrome: 1.5h
5. 2h (understanding how tests are created, finding which requirements are not tested, analyze output from tests)
6. 0.5h (report)
7. 1.5h (writing tests)
8. 

**Alex Gunnarsson**

1. 2.5h
2. 
3. 
4. 
5. 
6. 
7. 
8. 

**Hugo Tricot**

1. 2.5h
2. 
3. 2.5h (0.5h understanding the different aspects of the code and options; 2h finding relevnt classes, fields and methods for the UML class diagram)
4. 30 min (downloading tools, executing tests before changes)
5. 30 min (finding the code responsible for the error)
6. 
7. 

**Juan Lavagnini**

1. 2.5h
2. 
3. 0.5h (reading documentation specific for testing)
4. 2h (Firefox was causing some troubles)
5. 1.5h (understanding how tests are created, finding which requirements are not tested, analyze output from tests)
6. 0.5h (report, tests)
7. 1.5h (writing tests)
8. 

## Overview of issue(s) and work done.

Title: Wrongly positioned bar on the timeline chart (Chart 4.4.1)

[URL](https://github.com/chartjs/Chart.js/issues/11667)

The issue concerns a bar chart of a time line, where the bars for exact dates are positioned incorrectly relative to the dates on the timeline. The bars for such data should be centered to the specific date, and not start at that date and continue away from it. In addition, it also visualizes bars for dates that are beyond the min-max values for the timeline.

The scope of the issue, regarding functionality and code affected, is vizualisation of bar chart data for data that concerns one exact point, as well as data that is outside of the given range for the bar chart. 

## Requirements for the new feature or requirements affected by functionality being refactored

Optional (point 3): trace tests to requirements.

## Code changes

### Patch

(copy your changes or the add git command to show them)

git diff ...

Optional (point 4): the patch is clean.

Optional (point 5): considered for acceptance (passes all automated checks).

## Test results

Overall results with link to a copy or excerpt of the logs (before/after
refactoring).

In order to solving the issue we decide to add five test cases before to start working on the code. One test focus on check if the bar is centered on the exact date considering if there is a minBarLength specified. The other four test cases had been implemented to check if a exact date or a span out of the range of the chart is not shown. 

Previus to the changes to code was working like that:
- Specific dates like `1999-12-31` typed as span `[1999-12-31 - 1999-12-31]` with a small minBarLength had displayed like if this date was after `2000-01-01`. That was because the minimal length was took from the begining to the rigth, and not half to each side.
- Specific date but out of range (value < min) was displayed even though it wasn't supposed to be shown.
- If the minBarLength of a span was larger than the actual span, the span out of range was displayed even though it wasn't supposed to be shown.

For being able to see that all the test that was supposed to fail actualy was failing a configuration should be changed:

in `karma.conf.cjs` line 59, should change eventually:
`stopOnSpecFailure: !!karma.autoWatch`
And instead add:
`stopOnSpecFailure: false`

## UML class diagram and its description

### Key changes/classes affected

Optional (point 1): Architectural overview.

Optional (point 2): relation to design pattern(s).

## Overall experience

What are your main take-aways from this project? What did you learn?

How did you grow as a team, using the Essence standard to evaluate yourself?

Optional (point 6): How would you put your work in context with best software
engineering practice?

Optional (point 7): Is there something special you want to mention here?
