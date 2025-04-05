import { FC, memo } from "react";
import { Outlet } from "react-router";

const CssHome: FC = memo(() => {
  return (
    <div>
      <h1>CSS</h1>
      <Outlet />
    </div>
  )
});

export default CssHome;
