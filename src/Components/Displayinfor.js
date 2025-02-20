import React from "react";
class Displayinfor extends React.Component {
  render() {
    let { listUsers } = this.props;
    return (
      <>
        {listUsers.map((item, index) => {
          return (
            <>
              <div key={item.id}>
                tôi tên là {item.name} , tôi nam nay {item.age}
                <hr />
              </div>
            </>
          );
        })}
      </>
    );
  }
}
export default Displayinfor;
