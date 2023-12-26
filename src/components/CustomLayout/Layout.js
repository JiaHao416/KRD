import React from "react";
import css from "./layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";

function Layout(props) {
  function Main() {
    return (
      <>
        {props.showSideMenu ? (
          <div className="h-100 w-100 d-flex row justify-content-center">
            <div className={`${css.main} h-100 d-flex row`}>
              <SideMenu title={props.title} />
              <div className={`${css.productPage}`}>{props.children}</div>
            </div>
          </div>
        ) : (
          <>{props.children}</>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
