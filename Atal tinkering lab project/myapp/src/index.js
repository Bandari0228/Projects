import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// import Expform from "./composnents/Expform"
// import Studentform from "./composnents/studentform"
// import Schoolform from "./composnents/schoolform"
// import Teamform from "./composnents/teamform"
// import Eventform from "./composnents/events"
// import{createBrowserRouter,RouterProvider, }from 'react-router-dom';

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>
//   },
//   {
//     path:'expform',
//     element:<Expform/>
//   },
//   {
//     path:'studentform',
//     element:<Studentform/>
//   },
//   {
//     path:'school',
//     element:<Schoolform/>
//   },
//   {
//     path:'event',
//     element:<Eventform/>
//   },
//   {
//     path:'team',
//     element:<Teamform/>
//   },

// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router}/>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
