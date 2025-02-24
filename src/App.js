import "./App.css";

import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Link } from "react-router-dom";

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
    <div className="App">
      <Header />
      <div>test link</div>
      <div>
        <button>
          <Link to="/users"> đến trang user cho tôi</Link>
        </button>
        <button>
          <Link to="/admin"> đến trang admin cho tôi</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
