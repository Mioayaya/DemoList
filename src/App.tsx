import { Outlet } from "react-router";
import "./App.css";
import "@arco-design/web-react/dist/css/arco.css";

import Navigation from "./Pages/Frame/navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="contain">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
