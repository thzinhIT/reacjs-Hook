import React from "react";
class Displayinfor extends React.Component {
  state = {
    check: false,
  };

  handleShowHide = () => {
    this.setState({
      check: !this.state.check,
    });
  };
  handleDelete = (item) => {
    this.props.DeleteUser(item);
  };
  render() {
    let { listUsers } = this.props;
    console.log(listUsers);
    let { check } = this.state;

    return (
      <>
        {!check && <button onClick={() => this.handleShowHide()}>show</button>}

        {check && (
          <>
            <div>list user:</div>
            {listUsers.map((item, index) => {
              return (
                <>
                  <div
                    key={item.id}
                    className={+item.age > 18 ? "green" : "red"}
                  >
                    tôi tên là {item.name} , tôi nam nay {item.age}
                    <br />
                    <button onClick={() => this.handleDelete(item)}>
                      Delete
                    </button>
                    <hr />
                  </div>
                </>
              );
            })}
            <button onClick={() => this.handleShowHide()}>hide</button>
          </>
        )}
      </>
    );
  }
}
export default Displayinfor;
