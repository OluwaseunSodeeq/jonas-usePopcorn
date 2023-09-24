import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./Star/StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="green"
//         maxRating={10}
//         onsetMovieRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <>
//       <StarRating
//         maxRaing={5}
//         message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       />
//       <StarRating color="blue" size="24" defaultRating={3} />
//       {/* //this uses the default max of Rate/Stars */}
//       <StarRating maxRaing={7} color="red" size="60" className="myStarStyles" />
//       <Test />
//     </>
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
