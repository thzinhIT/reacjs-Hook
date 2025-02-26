import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bg2 from "../../../assets/bg2.jpg";
import { FcPlus } from "react-icons/fc";

import { ToastContainer, toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/ApiService";
const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  // const [show, setShow] = useState(false);
  // console.log(show);
  const handleClose = () => {
    setShow(false);

    SetEmail("");
    SetPassWord("");
    SetUerName("");
    SetRole("");
    SetImg("");
    SetPreview("");
  };

  const [email, SetEmail] = useState("");
  const [password, SetPassWord] = useState("");
  const [username, SetUerName] = useState("");
  const [role, SetRole] = useState("User");
  const [img, SetImg] = useState("");
  const [preview, SetPreview] = useState("");
  const handleUpdateImg = (e) => {
    if (e && e.target && e.target.value && e.target.files[0]) {
      console.log("up tc");
      SetPreview(URL.createObjectURL(e.target.files[0]));
      SetImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitCreateUser = async () => {
    // validate

    // const isValidateEmail = validateEmail(email);
    // if (!isValidateEmail) {
    //   toast.error("invalid email.");

    //   return;
    // }
    if (!password) {
      toast.error("invalid password");
    }
    // call api
    // let datas = {
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   userImage: img,
    // };

    // console.log(datas);

    let data = await postCreateNewUser(email, password, username, role, img);
    console.log("<<<<< res data", data);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      handleClose();
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label" value={email}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" value={password}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                onChange={(e) => SetPassWord(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label" value={username}>
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                onChange={(e) => SetUerName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(e) => SetRole(e.target.value)}
              >
                <option selected value="user">
                  Users
                </option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-lable lable-update" htmlFor="lable-upload">
                {" "}
                <FcPlus /> Update Img{" "}
              </label>
              <input
                type="file"
                hidden
                id="lable-upload"
                onChange={(e) => handleUpdateImg(e)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {preview ? (
                <img src={preview} alt="" />
              ) : (
                <span>show preview</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreateUser;
