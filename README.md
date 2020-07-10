## SpaceX Web Application

A simple application for launches data for SpaceX. This application is deployed to Heroku. Please visit [live](https://sleepy-hopper-7c151b.netlify.app/) website.
 
## Getting Started


The app includes one pages:

- Launches page consists filter area, launches' photo, title, launch date, and some related information. 
- In the filter area, you can filter launches data according to date, name, and success status of launch.
Each filter function works independently. (example: you cannot filter launches according to name and date together) 


All project data fetched from the SpaceX API endpoints.


## Installing


  ```sh
  git clone git@github.com:zntemel/spacex-monitoring.git
  cd spacex-monitoring
   ```
In the project directory, you can run:

 ```sh 
 yarn install 
 yarn start 
  ```

Runs the app in the development mode.<br>
[http://localhost:3000](http://localhost:3000) will directly open to view it in the browser.<br>

## Architecture

- This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).
- [Redux](https://redux.js.org/) is used as a state container.
- [Redux-Saga](https://redux.js.org/) library is used as a Redux middleware.
- [React Router](https://reacttraining.com/react-router/) is used for routing.
- [Sass](https://sass-lang.com/) is used as a CSS extension language.
- [Moment](https://momentjs.com/) library is used as a CSS extension language.
- [Eslint](https://eslint.org/) is used for consistent code base.
- Prop Types library is used.
- Fetch API is used as a HTTP client.
- No framework is used as UI framework just HTML5 is used .
- Node version ```14.5.0 ``` is used.

## Something Missing?

- There is no test in the application
- The app is not responsive.
- Please contact me, I am open to any feedback.
