import { useEffect, useState } from "react";
import axios from "axios";
import { getAllUser } from "../../../services//ApiService";
// useEffect chạy sau khi return chạy
//  có dấu [] là useffect chạy 1 lần thôi
const TableUser = () => {
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
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser && listUser.length > 0 ? (
            listUser.map((item, index) => {
              return (
                <>
                  <tr key={`table -user -${index}`}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <button className="btn btn-secondary">View</button>
                      <button className="btn btn-warning mx-3">Update</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <>
              <tr>
                <td colSpan={4}>không có dữ liệu của người dùng</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
