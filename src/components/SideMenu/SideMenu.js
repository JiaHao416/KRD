import React, { useEffect, useState } from "react";
import css from "./sidemenu.module.css";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button, Nav } from "react-bootstrap";
import { airTable } from "../../services/AirTable";

function SideMenu(props) {
  const navigate = useNavigate();
  const [navigationData, setNavigationData] = useState([]);

  useEffect(() => {
    async function getNavigation() {
      const response = await airTable("navigation", "data");
      setNavigationData(response);
    }

    getNavigation();
  }, []);

  function SideMenuTitle() {
    function handleAllProductClick() {
      navigate("/all-products");
    }

    function handleTitleClick() {
      window.location.reload();
    }

    return (
      <div className={`d-flex col mb-2 ${css.sideMenuTitleContainer}`}>
        <Nav.Link
          className={css.sideMenuTitle}
          onClick={() => handleAllProductClick()}
        >
          全部商品&nbsp;
        </Nav.Link>
        <p className={css.sideMenuTitle}>/</p>
        <Nav.Link
          className={css.sideMenuTitle}
          onClick={() => handleTitleClick()}
        >
          &nbsp;{props.title}
        </Nav.Link>
      </div>
    );
  }

  function SideMenuItem() {
    return (
      <>
        {navigationData.map((item, index) => (
          <Nav.Link
            key={index}
            className={`${css.sideMenuItemText} d-flex justify-content-center my-2`}
            onClick={() => {
              navigate(item.fields.path);
            }}
          >
            {item.fields.title}
          </Nav.Link>
        ))}
      </>
    );
  }

  return (
    <div className={`${css.sideMenu} d-lg-block d-none mt-5`}>
      <ButtonGroup vertical>
        <SideMenuTitle />
        <SideMenuItem />
      </ButtonGroup>
    </div>
  );
}

export default SideMenu;
