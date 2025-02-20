import React from "react";
class MyComponent extends React.Component {
  state = {
    name: " thành vinh",
    adress: "741hv",
    age: 20,
  };
  handleOnClickbutton = (e) => {
    console.log(e.target);
  };
  handleOncChangeinput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    alert("chặn rồi");
  };
  render() {
    let { name, adress, age } = this.state;
    return (
      <>
        <div> tôi tên là {name}</div>
        <button onClick={(e) => this.handleOnClickbutton(e)}>click me</button>
        <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={name}
            onChange={(e) => this.handleOncChangeinput(e)}
          />
          <button>submit</button>
        </form>
      </>
    );
  }
}
export default MyComponent;
