import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <>
      <div className="manage-user-container">
        <div className="title">quản lý</div>
      </div>
      <div className="user-content">
        <div>
          <button>Add new user</button>
          <div>table user</div>
          <ModalCreateUser />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
