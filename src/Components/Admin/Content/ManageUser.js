import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";

import "./ManageUser.scss";
const ManageUser = (props) => {
  const [showModal, SetShowModal] = useState(false);
  return (
    <>
      <div className="manage-user-container">
        <div className="title">quản lý</div>
      </div>
      <div className="user-content">
        <div className="btn-add-user">
          <button
            className="btn btn-primary"
            onClick={() => SetShowModal(true)}
          >
            <FcPlus />
            Add new user
          </button>
          <div className="table-user-container">table user</div>
          <ModalCreateUser show={showModal} setShow={SetShowModal} />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
