import React from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "thành vinh", age: 16 },
      { id: 2, name: "thành vinh", age: 26 },
      { id: 3, name: "thành vinh", age: 20 },
    ],
  };
  render() {
    return (
      <>
        <Userinfor />
        <Displayinfor listUsers={this.state.listUsers} />
      </>
    );
  }
}
export default MyComponent;
