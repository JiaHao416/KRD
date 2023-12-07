import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import css from "./navbar.module.css";
import { airTable } from "../../services/AirTable";

function NavBar() {
  const navigate = useNavigate();
  const [navigationData, setNavigationData] = useState([]);

  useEffect(() => {
    async function getNavigation() {
      const response = await airTable("導覽列", "data");
      console.log("navigationData", response);
      setNavigationData(response);
    }

    getNavigation();
  }, []);

  return (
    <>
      <Navbar expand="xl" className={`${css.navBarView} w-100`} sticky>
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="https://imgur.com/vG5oafk.png"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {navigationData.map((item, index) => (
                  <Nav.Link
                    key={index}
                    className={`d-flex justify-content-center`}
                    onClick={() => {
                      navigate(item.fields.path);
                    }}
                  >
                    {item.fields.title}
                  </Nav.Link>
                ))}
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className={`d-flex justify-content-center`}>
                  商店介紹
                </Nav.Link>
                <Nav.Link className={`d-flex justify-content-center`}>
                  聯絡我們
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
