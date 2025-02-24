import "./App.css";

import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <div>
//           <MyComponent />
//         </div>
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>

        <div className="app-content">
          {/* outlet là để phần hiển thị component con khi chuyển trang á , giống như cái thế thân z á
           */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
