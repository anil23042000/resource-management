import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.scss";
import { connect } from "react-redux";
import { LOGOUT_STATUS_SUCCESS } from "../../actions/types";
import { useHistory } from "react-router-dom";

const Sidebar = (props) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const { onlogout, tabActive } = props;
  const history = useHistory();

  const onClickLogout = () => {
    onlogout();
    history.push("/");
  };

  const onClickMenuTab = (url) => {
    history.push(url);
  };

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" >
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
              <p>{menuCollapse ? "Accion" : "Accionlabs"}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={tabActive === "projects" ? true : false}
                icon={<FiHome />}
                onClick={() => {
                  if(tabActive !== 'projects'){
                    onClickMenuTab("/projects");
                  }
                }}
              >
                Projects
              </MenuItem>
              <MenuItem
                active={tabActive === "employees" ? true : false}
                icon={<FaList />}
                onClick={() => {
                  if(tabActive !== 'employees'){
                    onClickMenuTab("/employees");
                  }
                }}
              >
                Employees
              </MenuItem>
              <MenuItem
                active={tabActive === "projectResource" ? true : false}
                icon={<FaRegHeart />}
                onClick={() => {
                  if(tabActive !== 'projectResource'){
                    onClickMenuTab("/projectResource");
                  }
                }}
              >
                Project Resource
              </MenuItem>
              <MenuItem
                active={tabActive === "monthlybill" ? true : false}
                icon={<RiPencilLine />}
                onClick={() => {
                  if(tabActive !== 'monthlybill'){
                    onClickMenuTab("/monthlybill");
                  }
                }}
              >
                Monthly bill
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={onClickLogout}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onlogout: () =>
    dispatch({
      type: LOGOUT_STATUS_SUCCESS,
    }),
});

export default connect(null, mapDispatchToProps)(Sidebar);
