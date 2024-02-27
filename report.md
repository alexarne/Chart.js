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

1. 1.5h
2. 
3. 
4. 2h. Chrome: 1.5h
5. 
6. 
7. 
8. 

**Alex Gunnarsson**

1. 1.5h
2. 
3. 
4. 
5. 
6. 
7. 
8. 

**Hugo Tricot**

1. 1.5h
2. 
3. 
4. 30 min (downloading tools, executing tests before changes)
5. 
6. 1h (preparation for issues)
7. 
8. 

**Juan Lavagnini**

1. 1.5h
2. 
3. 
4. 
5. 
6. 
7. 
8. 

## Overview of issue(s) and work done.

Title: Wrongly positioned bar on the timeline chart (Chart 4.4.1)

[URL](https://github.com/chartjs/Chart.js/issues/11667)

A bar chart of a time line positions the bars for exact dates wrongly relative to the dates on the timeline. In addition, it also visualizes bars for dates that are beyond the min-max values for the timeline.

Scope (functionality and code affected).

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
