# Report for assignment 4

## Project

Name: Chart.js

[URL](https://github.com/alexarne/Chart.js)

The project a javascript library that provides functionality to create highly customizable charts.

## Onboarding experience

We chose a new project, since we had trouble finding reasonable issues to work in in our previous project, Mockito. Chart.js uses `pnpm` for easy, one-line configurations and automatic dependency resolution. However, their choice of testing framework revolves around comparing pixel values in image outputs, which caused significant trouble for all members where it was either working on Chrome but not Firefox, or the other way around, and was overall inconsistent with no documentation acknowledging this. Issues included errors if the browser was open prior to testing, if the browser was interacted with during testing, if either Chrome or Firefox was not installed, or if the Chrome binary was not configured as a WSL environment variable.

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
2. 1h
3. 0.5h (reading documentation specific for testing)
4. 2h. Chrome: 1.5h
5. 3.5h (understanding how tests are created, finding which requirements are not tested, analyze output from tests)
6. 0.5h (report)
7. 4.5h (writing tests)
8. 

Total: 9h

**Alex Gunnarsson**

1. 2.5h
2. 0.5h
3. 2h
4. 3h
5. 6h
6. 1h
7. 4h
8. 1h

Total: 20h

**Hugo Tricot**

1. 2.5h
   
   - 1.5h searching in group for project and issue
   
   - 1h dividing tasks

2- 

3. 3.25h
   
   - 30 min understanding the different aspects of the code and options
   
   - 1h finding relevent classes, fields and methods for the UML class diagram
   
   - 30 min reading documentation for essence standard
   
   - 45 min Internet browsing for the project's environment

4. 30 min (downloading tools, executing tests before changes)

5. 1.5h
   
   - 30 min finding the code responsible for the error
   
   - 30 min looking at tests to identify requirements
   
   - 30 min analyzing new tests to update requirements

6. 3h
   
   - 1h writing UML class diagram
   
   - 1h writing requirements and tracing them to tests
   
   - 30 min writing essence paragraph
   
   - 30 min writing about the open and closed-source ecosystem of the project
   
   - 

8. 30 min checking test outputs on Linux+Firefox

Total: 11h

**Juan Lavagnini**

1. 2.5h
2. 1.5h
3. 1.5h (reading documentation specific for testing)
4. 2.5h (Firefox was causing some troubles)
5. 2.5h (understanding how tests are created, finding which requirements are not tested, analyze output from tests)
6. 0.5h (report, tests)
7. 1.5h (writing tests)
8. 1h

Total: 13.5h

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

- **#4**: `bar-centered`, `bar-partially-shown-on-lower-bound`, `bar-partially-shown-on-upper-bound`, `codepen`

- **#5**: `bar-hide-far-above-range`, `bar-hide-far-below-range`, `bar-partially-shown-on-lower-bound`, `bar-partially-shown-on-upper-bound`, `bar-partially-shown-small-span-partially-above-range`, `bar-partially-shown-small-span-partially-below-range`, `bar-partially-shown-small-span-small-part-below-range`, `bar-partially-shown-span-partially-above-range`, `bar-partially-shown-span-partially-below-range`, `bar-span-big-hide-out-of-range`, `bar-span-small-hide-out-of-range`, `codepen`

The high number of tests for requirement **#5** reflects the number of possible behaviour we identified. The `codepen` test is the expected behaviour of the code snippet provided by the author of the [issue](https://github.com/chartjs/Chart.js/issues/11667), which can be compared to the [original codepen](https://codepen.io/BabSick/pen/yLwQKQg) with incorrect behaviour.

## Code changes

### Patch

(copy your changes or the add git command to show them)

git diff ...

Optional (point 4): the patch is clean. It is.

Optional (point 5): considered for acceptance (passes all automated checks).

## Test results

Overall results with link to a copy or excerpt of the logs (before/after
refactoring).

[Before](./logs-before.png)

[After](./logs-after.png)

Multiple tests were added. One test focuses on checking if the bar is centered on the exact date considering if minBarLength is specified. Four test cases were implemented to check if a bar corresponding to a date or a span of dates that is out of range of the chart is hidden from view.

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

**What are your main take-aways from this project? What did you learn?**

To dive into the code and identify its components in order to provide a solution. Also, to engineer requirements in order to satisfy the given issue, sometimes not exactly as it was intended since some aspects are up for interpretation. 

**How did you grow as a team, using the Essence standard to evaluate yourself?**

We believe our team is currently in the *Performing* state. We have been able to change from Mockito, the project on which we worked on for assignment 3 to Chart.js for which we found a suitable issue in short order, with meetings for the setup and initial tasks allocation. We also adapted to the changes in how we view the requirements as new behaviours to be considered appear. For the first assignment we considered ourselves in the *In place* category and mentioned we still lacked experience on the tools to be more efficient. Through the course we gained this experience and we now use them efficiently without thinking about it. In the second assignment we placed ourselves between the *Collaborating* and *Performing* states, with both planning and independent work preparation being our problems. For this last assignment we planned setup meetings so that everyone could work properly from the beginning and so that we are clear between ourselves. This is the same obstacle that we faced in assignment 3 and overcame this time. With the end of the course we will finally reach the state *Adjourned*.

**Optional (point 6): How would you put your work in context with best software engineering practice?**

We believe to be in the *Under control* state of the Work Alpha, following the SEMAT kernel. Most points before this state are either covered by the assignment instructions or are non-applicable (e.g. there is no budget, and the resources only concern the amount of time we can dedicate to work on this project). One point in the *Under control* state is not fully achieved: "Estimates are revised to reflect the team’s performance.", this is in part due to the fact that we have not enough time nor much more work to do on this assignment to revise the estimated work to be done. Overall our methods to work could be evolved into an agile framework such as SCRUM with sprints of one week, we effectively had our sprint planning (carried out in two parts) with our first meetings, daily updates on how our work is carrying on, defined tasks and we usually make a small meeting to end our assignments before the presentation, which can be thought as a sprint review. We would mostly need to define a SCRUM master and a Product Owner to be fully using this framework. When it comes to work, our methods worked well with the limited scope and available time of the assignments, but on larger project we would need to think collectively of the architecture of our projects, and the best software engineering practice to structure and carry out the work, such as design patterns.

**Optional (point 7): Is there something special you want to mention here?**

# P+ Point 8

**In the context of Jonas Öberg's lecture last week, where do you put the project that you have chosen in an ecosystem of open-source and closed-source software? Is your project (as it is now) something that has replaced or can replace similar proprietary software? Why (not)?**

We have found no mention of proprietary software being replaced by Chart.js. This is porbably due to the private aspect of proprietary software company . On the other hand we found reasons to believe the project can replace legacy software as explained by Jonas Öberg's guest lecture:

- Chart.js has adapters for most well-known JavaScript frameworks such as Angular, React, Vue.js, SolidJs, and more. There are also some adapters for other languages such as Python or Java (for the latter, not all versions of Chart.js are supported).

- Chart.js uses a system of plugins to fine-tune the charts. The community has made a number of custom plugins that are listed [here](https://github.com/chartjs/awesome) (non-exhaustive). Proprietary software companies can also create their own custom plugins to tune their charts and would only need to maintain said custom plugins, instead of a whole legacy code brick. These plugins could even be trending features that drive sales.

- The community is large and the project widely-used, with between 2,700,000 and 3,300,00 weekly downloads over the last year. The project also has 63k GitHub stars at the time of writing.

- The project is under the MIT license, which is very permissive and allow commercial use for example. Most of the published plugins are also under the MIT license.

We also found a handful of open-source and closed-source alternatives, and will list here those who seem to be the most competitive:

- [ShieldUI](https://www.shieldui.com/) is a proprietary framework that offers a large number of charts and wrappers for the .NET framework. It also boasts chart combining.

- [AnyChart](https://www.anychart.com/products/anychart/overview/) is a flexible and extensive chart framework that does not rely on other js libraries such as jQuery and has been available for a long time.

- KoolChart is another proprietary framework with the highest amount of available charts of the framework listed here. It is als easy to use.

- [d3.js](https://d3js.org/) is an open-source framework with a large community boasting beautiful diagrams. Although a large number of examples is available online, its main drawback is the steep learning curve. Available under ISV license (very close to MIT).

- [Chartist](https://github.com/chartist-js/chartist) is a minimal charting library built with SVG and published under the MIT and  WTFPL-2 licenses. It has a limited number of charts and options but offers responsive charts on a lightweight solution.

ShieldUI, AnyChart and KoolChart give more options than Chart.js but are expensive. d3.js is harder to use but offers more options without having to add more code, while Chartist is a much simpler option with less choice but an easier learning curve.

As a conclusion, we believe Chart.js is amply capable of replacing proprietary software. Other open-source frameworks exist and offer more options with a steeper learning curve or les options with a light framework. Chart.js' plugins can enable it to be improved for proprietary use with little maintaining to be done by companies.
