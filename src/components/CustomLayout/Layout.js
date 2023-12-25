import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout(props) {
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
      <div className="h-100 w-100 d-flex row justify-content-center">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
