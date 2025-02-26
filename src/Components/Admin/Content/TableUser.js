import { useEffect, useState } from "react";

// useEffect chạy sau khi return chạy
//  có dấu [] là useffect chạy 1 lần thôi
const TableUser = (props) => {
  const { listUser } = props;
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
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
                    {/* <th scope="row">{index + 1}</th> */}
                    <td>{item.id}</td>
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
