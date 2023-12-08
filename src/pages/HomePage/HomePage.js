import React, { useEffect } from "react";
import css from "./homepage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/CustomLayout/Layout";
import { airTable } from "../../services/AirTable";

function Home() {
  let { id } = useParams();
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
}

export default Home;
