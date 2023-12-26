import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import css from "./navbar.module.css";
import { airTable } from "../../services/AirTable";

function NavBar() {
  const navigate = useNavigate();
  const [navigationData, setNavigationData] = useState([]);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    async function getLogo() {
      const response = await airTable("logo", "data");
      setLogo(response[0].fields.img);
    }

    async function getNavigation() {
      const response = await airTable("navigation", "data");
      setNavigationData(response);
    }

    getLogo();
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
            {logo !== "" && (
              <Nav.Link>
                <img
                  src={logo}
                  className={`${css.logoView} d-inline-block align-top`}
                  alt="logo"
                />
              </Nav.Link>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start"
            className={css.offcanvasView}
          >
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {navigationData.map((item, index) => (
                  <Nav.Link
                    key={index}
                    className={`${css.navLinkText} d-flex justify-content-center`}
                    onClick={() => {
                      navigate(item.fields.path);
                    }}
                  >
                    {item.fields.title}
                  </Nav.Link>
                ))}
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className={`${css.navLinkText} d-flex justify-content-center`}
                  onClick={() => {
                    navigate("/abouts");
                  }}
                >
                  商店介紹
                </Nav.Link>
                <Nav.Link
                  className={`${css.navLinkText} d-flex justify-content-center`}
                  onClick={() => {
                    navigate("/abouts");
                  }}
                >
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
