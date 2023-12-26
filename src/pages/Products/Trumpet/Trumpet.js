import React, { useEffect, useState } from "react";
import Layout from "../../../components/CustomLayout/Layout";
import ProductView from "../../../components/ProductView/ProductView";
import { airTable } from "../../../services/AirTable";

function Trumpet() {
  const [product, setProduct] = useState([]);
  let title = "擴大機 / 喇叭";

  useEffect(() => {
    async function getAllProduct() {
      const response = await airTable("trumpet", "data");
      setProduct(response);
    }

    getAllProduct();
  }, []);

  return (
    <Layout title={title} showSideMenu={true}>
      <ProductView title={title} products={product} />
    </Layout>
  );
}

export default Trumpet;
