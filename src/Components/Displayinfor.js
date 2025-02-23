import React, { useEffect, useState } from "react";
// class Displayinfor extends React.Component {
//   render() {
//     let { listUsers } = this.props;
//     console.log(listUsers);

//     console.log(">>>> render");

//     return (
//       <>
//         {true && (
//           <>
//             <div>list user:</div>
//             {listUsers.map((item, index) => {
//               return (
//                 <>
//                   <div
//                     key={item.id}
//                     className={+item.age > 18 ? "green" : "red"}
//                   >
//                     tôi tên là {item.name} , tôi nam nay {item.age}
//                     <br />
//                     <button onClick={() => this.props.DeleteUser(item)}>
//                       Delete
//                     </button>
//                     <hr />
//                   </div>
//                 </>
//               );
//             })}
//           </>
//         )}
//       </>
//     );
//   }
// }

const Displayinfor = (props) => {
  let { listUsers } = props;
  const [ShowHide, setShowHide] = useState(true);
  const handleShowHide = () => {
    setShowHide(!ShowHide);
  };
  // giá trị [listUsers] là dùng để kiểm tra thay đổi của listuser. nếu như để [] thì hàm useeffrct chạy có 1 lần ko chạy nx .
  useEffect(() => {
    if (listUsers.length === 0) alert("bạn đã xóa hết rồi");
    setTimeout(() => {
      document.title = "thành vinh app";
    }, 3000);
    console.log("<<< call me useeffect");
  }, [listUsers]);
  return (
    <>
      <button onClick={() => handleShowHide()}>show</button>
      {ShowHide && (
        <>
          <div>list user:</div>
          {listUsers.map((item, index) => {
            return (
              <>
                <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                  tôi tên là {item.name} , tôi nam nay {item.age}
                  <br />
                  <button onClick={() => props.DeleteUser(item)}>Delete</button>
                  <hr />
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
};
export default Displayinfor;
