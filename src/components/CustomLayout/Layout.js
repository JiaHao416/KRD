import React from "react";
import NavBar from "../NavBar/NavBar";

function Layout(props) {
  function Header() {}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <NavBar />
    </div>
  );
}

export default Layout;
