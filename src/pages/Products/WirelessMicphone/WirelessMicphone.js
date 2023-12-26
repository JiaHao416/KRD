import React, { useEffect, useState } from "react";
import Layout from "../../../components/CustomLayout/Layout";
import ProductView from "../../../components/ProductView/ProductView";
import { airTable } from "../../../services/AirTable";

function WirelessMicphone() {
  const [product, setProduct] = useState([]);
  let title = "無線麥克風";

  useEffect(() => {
    async function getAllProduct() {
      const response = await airTable("wireless-micphone", "data");
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

export default WirelessMicphone;
