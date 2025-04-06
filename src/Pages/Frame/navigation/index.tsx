import { FC, memo } from "react";
import { Menu } from "@arco-design/web-react";
import { NavigationDiv } from "./styled";
import { CSSLinks, ReactLinks, IRouter } from "../../../Router";
import { NavLink } from "react-router";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const TitleComponent: FC<{ title: string }> = (props) => (
  <div>{props.title}</div>
);

const Navigation: FC = memo(() => {
  const GenerateNavLink = (key: keyof IRouter, obj: IRouter) => {
    return (
      <MenuItem key={obj[key]}>
        <NavLink to={obj[key]}>{key}</NavLink>
      </MenuItem>
    );
  };

  return (
    <NavigationDiv>
      <Menu defaultOpenKeys={["CSS","React"]} defaultSelectedKeys={[CSSLinks.waterfall]}>
        {/* CSS */}
        <SubMenu key="CSS" title={<TitleComponent title="CSS" />}>
          {Object.keys(CSSLinks).map((key) => GenerateNavLink(key, CSSLinks))}
        </SubMenu>

        {/* TODO: JS */}
        {/* TODO: TS */}

        {/* React */}
        <SubMenu key="React" title={<TitleComponent title="React" />}>
          {Object.keys(ReactLinks).map((key) =>
            GenerateNavLink(key, ReactLinks)
          )}
        </SubMenu>
      </Menu>
    </NavigationDiv>
  );
});

export default Navigation;
