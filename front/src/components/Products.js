import { Outlet } from "react-router-dom";

export default function Products () {

  return(
    <>
      <h1>Product Management</h1>
      <Outlet />
    </>
  );

}