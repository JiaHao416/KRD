import React, { useEffect, useState } from "react";
import Layout from "../../components/CustomLayout/Layout";
import css from "./abouts.module.css";
import { Col, Row } from "react-bootstrap";
import { airTable } from "../../services/AirTable";

function Abouts() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getAllProduct() {
      const response = await airTable("abouts", "data");
      setProduct(response);
    }

    getAllProduct();
  }, []);

  return (
    <Layout>
      <div className="w-100 h-100 row justify-content-center align-items-center">
        <div
          className={`${css.contentView} d-flex row justify-content-center align-items-center mt-5 mx-0`}
        >
          <p className={`${css.textStyle} text-center`}>商店介紹</p>

          <div className={`${css.contentStyle}`}>羽程企業社</div>
          <div className={`${css.contentStyle} mb-5`}>KRD MICGO </div>
          <div className="w-100 m-0">
            <p className={`${css.contentStyle}`}>服務項目</p>
            <Row sm={2} lg={3}>
              {product.length !== 0 &&
                product.map((products, index) => (
                  <Col
                    key={index}
                    xs={6}
                    lg={3}
                    className="d-flex row justify-content-center align-items-center"
                  >
                    <img
                      src={products.fields.img_url}
                      className={`${css.imgView} d-inline-block align-top`}
                      alt=""
                    />
                    <p className={`${css.contentStyle} text-center`}>
                      {products.fields.icon_name}
                    </p>
                  </Col>
                ))}
            </Row>
          </div>
          <div className={`${css.contentStyle} mt-5`}>
            地址 ： 台中市太平區永平路二段320之1號
          </div>
          <div className={css.contentStyle}>電話 ： 04-22798787</div>
        </div>
      </div>
    </Layout>
  );
}

export default Abouts;
