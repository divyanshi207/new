
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static propTypes = {
    // Define propTypes here if necessary
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   static propTypes = {
//     // Define propTypes here if necessary
//   };

//   render() {
//     const styles = `
//       .nav-link.animated-link {
//         color: white; /* Default color */
//         transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; /* Animation for color and transform */
//       }

//       .nav-link.animated-link:hover {
//         color: #ff9800; /* Color on hover */
//         transform: scale(1.1); /* Slightly increase size on hover */
//       }
//     `;

//     return (
//       <>
//         <style>{styles}</style>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">News App</Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/home">Home <span className="sr-only">(current)</span></Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/business">Business</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/entertainment">Entertainment</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/general">General</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/health">Health</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/science">Science</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/sports">Sports</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link animated-link" to="/technology">Technology</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import './Navbar.css'; // Import the CSS file

// export default class Navbar extends Component {
//   static propTypes = {
//     // Define propTypes here if necessary
//   };

//   render() {
//     return (
//       <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">React-Headlines</Link>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               {['home', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'].map((item) => (
//                 <li className="nav-item" key={item}>
//                   <Link
//                     className="nav-link animated-link"
//                     to={`/${item}`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
