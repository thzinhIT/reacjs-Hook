import React from "react";
class MyComponent extends React.Component {
  state = {
    name: " thành vinh",
    adress: "741hv",
    age: 20,
  };
  render() {
    return (
      <>
        <div> tôi tên là {this.state.name}</div>
      </>
    );
  }
}
export default MyComponent;
