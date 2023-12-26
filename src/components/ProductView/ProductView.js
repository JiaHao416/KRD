import React, { useEffect, useState } from "react";
import css from "./productview.module.css";
import { Row, Col, Card } from "react-bootstrap";
import ImageModal from "../Modal/ImageModal/ImageModal";

const SetImageModal = ({ show, onHide, img }) => {
  return <ImageModal show={show} onHide={onHide} img={img} />;
};

function ProductView(props) {
  const [isShowImageModal, setIsShowImageModal] = useState(false);
  const [productImage, setproductImage] = useState("");

  useEffect(() => {
    productImage !== "" && setIsShowImageModal(true);
  }, [productImage]);

  return (
    <div className={`${css.productContainer}`}>
      <div className={`${css.productTitle} mb-5`}>{props.title}</div>
      <Row sm={2} lg={3}>
        {props.products.length !== 0 &&
          props.products.map((product, index) => (
            <Col key={index} xs={6} md={4} className="mb-4">
              <Card
                className={`${css.card} p-0 border border-5 d-flex row align-items-center text-center mx-2 h-100`}
              >
                <Card.Img
                  variant="top"
                  src={product.fields.img_url}
                  className={`${css.cardImg} p-0`}
                  onClick={() => {
                    setproductImage(product.fields.img_url);
                  }}
                />
                <Card.Body>
                  <Card.Text className={`${css.cardText}`}>
                    {product.fields.product_name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <SetImageModal
        show={isShowImageModal}
        onHide={() => setIsShowImageModal(false)}
        img={productImage !== undefined && productImage}
      />
    </div>
  );
}

export default ProductView;
