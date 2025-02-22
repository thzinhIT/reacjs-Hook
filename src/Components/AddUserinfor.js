import React, { useState } from "react";

// class AddUserinfor extends React.Component {
//   state = {
//     name: " thành vinh",
//     adress: "741hv",
//     age: 20,
//   };
//   handleOnClickbutton = (e) => {
//     console.log(e.target);
//   };
//   handleOncChangeinput = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };
//   handleOncChangeinputAge = (e) => {
//     this.setState({
//       age: e.target.value,
//     });
//   };
//   handleOnSubmit = (e) => {
//     e.preventDefault();

//     this.props.AddUser({
//       id: Math.random() * 1000001 + "vinh",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     let { name, adress, age } = this.state;

//     return (
//       <>
//         <div>
//           {" "}
//           tôi tên là {name}, năm nay tôi {age} tuổi nè!!!
//         </div>
//         <button onClick={(e) => this.handleOnClickbutton(e)}>click me</button>
//         <form action="" onSubmit={(e) => this.handleOnSubmit(e)}>
//           <label htmlFor="">Your name:</label>

//           <input
//             type="text"
//             value={name}
//             onChange={(e) => this.handleOncChangeinput(e)}
//           />

//           <label htmlFor="">Your age:</label>

//           <input
//             type="text"
//             value={age}
//             onChange={(e) => this.handleOncChangeinputAge(e)}
//           />

//           <button>submit</button>
//         </form>
//       </>
//     );
//   }
// }

const AddUserinfor = (props) => {
  const [name, setName] = useState(" thành vinh");
  const [age, setAge] = useState(20);
  const handleOncChangeInput = (e) => {
    //     this.setState({
    //       name: e.target.value,
    //     });
    //   };
    setName(e.target.value);
  };
  const handleOncChangeInputAge = (e) => {
    //     this.setState({
    //       name: e.target.value,
    //     });
    //   };
    setAge(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.AddUser({
      id: Math.random() * 1000001 + "vinh",
      name: name,
      age: age,
    });
  };
  return (
    <>
      <div>
        {" "}
        tôi tên là {name}, năm nay tôi {age} tuổi nè!!!
      </div>

      <form action="" onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="">Your name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => handleOncChangeInput(e)}
        />

        <label htmlFor="">Your age:</label>

        <input
          type="text"
          value={age}
          onChange={(e) => handleOncChangeInputAge(e)}
        />

        <button>submit</button>
      </form>
    </>
  );
};
export default AddUserinfor;
