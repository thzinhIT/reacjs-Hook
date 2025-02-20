import React from "react";

class Userinfor extends React.Component {
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
  handleOncChangeinputAge = (e) => {
    this.setState({
      age: e.target.value,
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
        <div>
          {" "}
          tôi tên là {name}, năm nay tôi {age} tuổi nè!!!
        </div>
        <button onClick={(e) => this.handleOnClickbutton(e)}>click me</button>
        <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
          <label htmlFor="">Your name:</label>

          <input
            type="text"
            value={name}
            onChange={(e) => this.handleOncChangeinput(e)}
          />

          <label htmlFor="">Your age:</label>

          <input
            type="text"
            value={age}
            onChange={(e) => this.handleOncChangeinputAge(e)}
          />

          <button>submit</button>
        </form>
      </>
    );
  }
}
export default Userinfor;
