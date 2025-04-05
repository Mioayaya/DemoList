import { NavLink, Outlet } from "react-router";
import "./App.css";
import { CSSLinks } from "./Router";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <div className="CSS">
          { Object.keys(CSSLinks).map(key => {
            const validKey = key as keyof typeof CSSLinks;
            return( 
              <NavLink to={CSSLinks[validKey]} key={validKey}>{validKey}</NavLink>
            )
          })}          
        </div>
        <div className="JS"></div>
        <div className="TS"></div>
        <div className="React">
          <NavLink to={"/react"}>React</NavLink>
        </div>
      </div>
      <div className="contain">
        内容
        <Outlet />
      </div>
    </div>
  );
}

export default App;
