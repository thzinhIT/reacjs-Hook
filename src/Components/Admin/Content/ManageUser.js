import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services//ApiService";
import { useEffect } from "react";
import "./ManageUser.scss";
const ManageUser = (props) => {
  const [showModal, SetShowModal] = useState(false);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fectchListUser();
  }, []);
  const fectchListUser = async () => {
    let res = await getAllUser();

    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };
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
          <div className="table-user-container">
            <TableUser listUser={listUser} />
          </div>
          <ModalCreateUser
            show={showModal}
            setShow={SetShowModal}
            fectchListUser={fectchListUser}
          />
        </div>
      </div>
    </>
  );
};
export default ManageUser;
