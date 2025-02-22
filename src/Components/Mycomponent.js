import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "thành vinh", age: 16 },
//       { id: 2, name: "thành vinh", age: 26 },
//       { id: 3, name: "thành vinh", age: 20 },
//     ],
//   };
//   AddUser = (user) => {
//     this.setState({
//       listUsers: [...this.state.listUsers, user],
//     });
//   };
//   DeleteUser = (user) => {
//     let current = this.state.listUsers;
//     current = current.filter((item) => item.id !== user.id);
//     this.setState({
//       listUsers: current,
//     });
//   };
//   render() {
//     return (
//       <>
//         <AddUserinfor AddUser={this.AddUser} />
//         <Displayinfor
//           listUsers={this.state.listUsers}
//           DeleteUser={this.DeleteUser}
//         />
//       </>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "thành vinh", age: 16 },
    { id: 2, name: "thành vinh", age: 26 },
    { id: 3, name: "thành vinh", age: 20 },
  ]);
  const AddUser = (user) => {
    //     this.setState({
    //       listUsers: [...this.state.listUsers, user],
    //     });
    //   };
    setListUsers([...listUsers, user]);
  };
  const DeleteUser = (user) => {
    let current = listUsers;
    current = current.filter((item) => item.id !== user.id);
    setListUsers(current);
  };
  return (
    <>
      <AddUserinfor AddUser={AddUser} />
      <Displayinfor listUsers={listUsers} DeleteUser={DeleteUser} />
    </>
  );
};
export default MyComponent;
