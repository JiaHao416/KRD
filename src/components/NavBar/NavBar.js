import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import css from "./navbar.module.css";

function NavBar() {
  const navigate = useNavigate();
  const navItems = [
    { text: "所有商品", path: "/all-products" },
    { text: "最新商品", path: "/new-products" },
    { text: "MICGO", path: "/micgo-products" },
    { text: "KRD", path: "/krd-products" },
    { text: "有線麥克風", path: "/wired-micphone" },
    { text: "無線麥克風", path: "/wireless-micphone" },
    { text: "喇叭", path: "/trumpet" },
    { text: "配件", path: "/accessories" },
  ];

  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary w-100" sticky>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={css.navCollapse}>
            <Nav className="me-auto">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  className={css.navLink}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">商店介紹</Nav.Link>
              <Nav.Link href="#memes">聯絡我們</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
