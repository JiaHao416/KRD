import React, { useEffect, useState, useRef, forwardRef } from "react";
import css from "./home.module.css";
import Layout from "../../components/CustomLayout/Layout";
import { allProducts } from "../../DummyData";
import { airTable } from "../../services/AirTable";

function Home() {
  useEffect(() => {
    async function getNavigation() {
      const navigationData = await airTable("無線");
      console.log("navigationData", navigationData);
    }
    getNavigation();
  }, []);
  return <div>Home</div>;
}

export default Home;
