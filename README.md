# GAINS ON <!-- omit in toc -->

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

I am planning to build a workout app using the Wger API. My app will include a simple dropdown menu of muscle groups to list exercises that target the specified muscle group. When an exercise is selected, further details such as description and image will be rendered. 

<br>

### Overview

**GAINS ON** 

**Project Description** GAINS ON is a simple and easy to use web-based application designed to get you in the best shape of your life. Find a library of exercises with descriptions and photos. Select a specific muscle group you wish to target and get to work. Let's do this!

<br>

### Wireframes

![Gains On - Home] (https://wireframe.cc/37CkiM)

- Home Page

![Gains On - Exercise List] (https://wireframe.cc/37CkiM)

- ExerciseList.js

![Gains On - Single Exercise] (https://wireframe.cc/37CkiM)

- Exercise.js

<br>

### MVP

_The **GAINS ON** MVP 

<br>

#### Goals

- Allow users to render a list of exercises.
- Display list of exercises by muscle group focus. 
- Render further details regarding an exercise, including description and image. 

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Allows for Linking within application |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| wger API |      yes      |   https://wger.de/api/v2/ |

```
"results": [
        {
            "id": 343,
            "license_author": "sevae",
            "status": "2",
            "description": "<p>Place a barbell on the floor at your feet.</p>\n<p>Bending at the waist, grip the barbell with a shoulder with overhand grip.</p>\n<p>With a slow controlled motion, roll the bar out so that your back is straight.</p>\n<p>Roll back up raising your hips and butt as you return to the starting position.</p>",
            "name": "Barbell Ab Rollout",
            "name_original": "Barbell Ab Rollout",
            "creation_date": "2015-07-27",
            "uuid": "1b9dc5bc-790b-4e21-a55d-f8b3115e94c5",
            "license": 2,
            "category": 10,
            "language": 2,
            "muscles": [
                14,
                6
            ],
            "muscles_secondary": [
                2,
                12
            ],
            "equipment": [
                1
            ]
        },
        {
            "id": 581,
            "license_author": "Louis",
            "status": "1",
            "description": "Bench pressing heavy things using heavy objects",
            "name": "Barbell Bench Press",
            "name_original": "Barbell Bench Press",
            "creation_date": "2018-07-29",
            "uuid": "fee2c240-9890-4de0-9395-b481eda3bf2d",
            "license": 1,
            "category": 8,
            "language": 2,
            "muscles": [
                4
            ],
            "muscles_secondary": [],
            "equipment": []
        },
        {
            "id": 407,
            "license_author": "BePieToday",
            "status": "2",
            "description": "<p>Perform leg squats with barbell behind your legs</p>",
            "name": "Barbell Hack Squats",
            "name_original": "Barbell Hack Squats",
            "creation_date": "2016-07-30",
            "uuid": "1215dad0-b7e0-42c6-80d4-112f69acb68a",
            "license": 2,
            "category": 9,
            "language": 2,
            "muscles": [
                10
            ],
            "muscles_secondary": [
                8
            ],
            "equipment": [
                1
            ]
        },
        {
            "id": 658,
            "license_author": "https://fitnessvolt.com/author/malik/",
            "status": "1",
            "description": "<ol>\n<li>With a loaded barbell on the long side of the bench, sit on the floor so your legs are straight, and roll the barbell over your legs up to your hip crease. Make sure your back is against the bench. </li>\n<li>Then, grab the barbell and plant your feet flat on the floor.</li>\n<li>Thrust your hips up so the bar is on your hip crease and lean your upper back onto the bench.</li>\n<li>Now, lower your butt down to a few inches from the floor.</li>\n<li>Then, thrust your hips back up while squeezing your glutes.</li>\n<li>Complete the preferred number of reps.</li>\n</ol>",
            "name": "Barbell Hip Thrust",
            "name_original": "Barbell Hip Thrust",
            "creation_date": "2019-10-13",
            "uuid": "0f2c5bc9-4dde-4160-a693-704bd2bd029c",
            "license": 2,
            "category": 9,
            "language": 2,
            "muscles": [
                8
            ],
            "muscles_secondary": [],
            "equipment": [
                1
            ]
        },
```

<br>

#### Component Hierarchy


```
src
|__ assets/
      |__ graphics
      |__ fonts
|__ components/
      |__ Home.js
      |__ Header.js
      |__ Navigation.js
      |__ ExerciseList.js
      |__ Form.js
      |__ Exercise.js
      |__ Footer.js
```

<br>

#### Component Breakdown



|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | The header will contain logo and naigation.
|  Navigation  | functional |   n   |   n   | The navigation will contain a link to home and dropdown form.    |
|   Exercise    |   class    |   y   |   n   | This will display a single exercise with description and image.
| Exercise List | functional |   y   |   y   | The exercise list will display a list of exercises.
|    Footer    | functional |   n   |   n   | The footer will show info about me and a link to my portfolio. |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Nav Component   |    H     |     3 hrs      |          |      |
| Create Form Component |    H     |     3 hrs      |          |         |
| Create ExerciseList Component |   H   |     3 hrs     |         |       |
| Create Exercise Component |   H    |    3 hrs   |       |         |
| Home Page Component |   M     |     3 hrs   |         |           |
| Footer |    L     |   1hr   |         |         | 
| CSS and styling |   H     |   5 hrs     |         |         |
| Basic HTML |    L     |     2 hrs     |         |         |
| TOTAL               |          |     25 hrs      |         |         |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| TBD | TBD |

<br>

### Post-MVP

- Create an exercise program that lists exercises for a full-body workout.

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
