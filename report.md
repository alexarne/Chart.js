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
2. 1h
3. 0.5h (reading documentation specific for testing)
4. 2h. Chrome: 1.5h
5. 3.5h (understanding how tests are created, finding which requirements are not tested, analyze output from tests)
6. 0.5h (report)
7. 3h (writing tests)
8. 

**Alex Gunnarsson**

1. 2.5h
2. 1h
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

Five tests were added. One test focuses on checking if the bar is centered on the exact date considering if minBarLength is specified. The other four test cases were implemented to check if a bar corresponding to a date or a span of dates that is out of range of the chart is hidden from view. 

Previus to the changes to code was working as follows:

- Specific dates like `1999-12-31`, typed as span `[1999-12-31 - 1999-12-31]`, were shown as a bar starting from the specific date. For large values on minBarLength compared to the scale of the chart, the bar can be perceived as representing other values. Instead, the bar should be centered to the value (or the span).
- Specific date but out of range (value < min) was displayed even though it wasn't supposed to be shown.
- If the minBarLength of a span was larger than the bar for the actual span, the span out of range was displayed even though it wasn't supposed to be shown.

To make sure all the tests that were supposed to fail were actually failing, a testing configuration was changed in `karma.conf.cjs` on line 59 from `stopOnSpecFailure: !!karma.autoWatch` to `stopOnSpecFailure: false`. 

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

Optional (point 8): How does the project compare to other open and closed-source software? Has it replaced or can it replace proprietary code? Why (not)?

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
