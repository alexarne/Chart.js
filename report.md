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

   - 1.5h searching in group for project and issue

   - 1h dividing tasks

2.

3. 2h

   - 0.5h understanding the different aspects of the code and options

   - 1h finding relevent classes, fields and methods for the UML class diagram)

4. 30 min (downloading tools, executing tests before changes)

5. 1h

   - 30 min finding the code responsible for the error

   - 30 min looking at tests to identify requirements

6. 2h

   - 1h writing UML class diagram

   - 1h writing requirements and tracing them to tests

7.

8.

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

There was no requirement explicitly defined other than **#1**, which has been refined to improve the definition. The other requirements are either extracted from tests (**#2**, **#3**, and the refinement of **#1**) of from the issue (**#4**, **#5**).

| Id     | Title                                                    | Description                                                                                                                                                                         |
| ------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **#1** | Size is at least minBarLength                            | The size of the bar in a barchart is at least the value of minBarLength in pixels if the option is set to a positive value, whether the bar represents negative or positive values. |
| **#2** | Size is at most the maximum of the span and minBarLength | The size of the bar in a barchart is at most the maximum between the value of the span and minBarLength.                                                                            |
| **#3** | No overlaps in stacked bars with minBarLength            | In the case of a barchart with stacked bars and the minBarLength option is set, the bars should not overlap.                                                                        |
| **#4** | Centered unique dates                                    | If the barchart represent dates, the bars for a single day should be centered around the date.                                                                                      |
| **#5** | Bar out of range not shown                               | A bar that represent a value out of range should not be displayed. If only a fraction of the bar is in the range (possibly due to minBarLength), only this fraction is displayed.   |

Optional (point 3): trace tests to requirements.

- **#1** and **#2**: `horizontal-neg`, `horizontal-pos`, `horizontal`, `vertical-neg`, `vertical-pos`, `vertical`

- **#3**: `horizontal-stacked-no-overlap`, `vertical-stacked-no-overlap`

- **#4**: `bar-centered`

- **#5**: `bar-hide-above-range`, `bar-hide-below-range`, `bar-span-big-hide-out-of-range`, `bar-span-small-hide-out-of-range`

## Code changes

### Patch

(copy your changes or the add git command to show them)

git diff ...

Optional (point 4): the patch is clean.

Optional (point 5): considered for acceptance (passes all automated checks).

## Test results

Overall results with link to a copy or excerpt of the logs (before/after
refactoring).

Five tests were added. One test focuses on checking if the bar is centered on the exact date considering if minBarLength is specified. The other four test cases were implemented to check if a bar corresponding to a date or a span of dates that is out of range of the chart is hidden from view.

Previus to the changes to code was working as follows:

- Specific dates like `1999-12-31`, typed as span `[1999-12-31 - 1999-12-31]`, were shown as a bar starting from the specific date. For large values on minBarLength compared to the scale of the chart, the bar can be perceived as representing other values. Instead, the bar should be centered to the value (or the span).
- Specific date but out of range (value < min) was displayed even though it wasn't supposed to be shown.
- If the minBarLength of a span was larger than the bar for the actual span, the span out of range was displayed even though it wasn't supposed to be shown.

To make sure all the tests that were supposed to fail were actually failing, a testing configuration was changed in `karma.conf.cjs` on line 59 from `stopOnSpecFailure: !!karma.autoWatch` to `stopOnSpecFailure: false`.

## UML class diagram and its description

![UML class diagram](./report_assets/UML%20diagram.jpg)

The main issue appears in the BarController class, private method \_calculateBarValuePixels(), which computes the length of the bars, including when the option `minBarLength` is set. It is itself called by the updateElements() method.

The general workflow of Chart.js is to create a Chart object controlled by a class extending DatasetController, such as BarController (custom dataset controllers can be made). The data to be modelized is managed by the Config class, in its `data` field. The charts use the Scale class and its children to handle the scales of the charts, and to get the pixel place for an element given as parameter of the Scale classes element.

### Key changes/classes affected

Optional (point 1): Architectural overview.

Optional (point 2): relation to design pattern(s).

## Overall experience

What are your main take-aways from this project? What did you learn?

How did you grow as a team, using the Essence standard to evaluate yourself?

Optional (point 6): How would you put your work in context with best software
engineering practice?

Optional (point 7): Is there something special you want to mention here?
