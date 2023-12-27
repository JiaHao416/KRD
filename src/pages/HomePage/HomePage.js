import React, { useEffect, useState } from "react";
import css from "./homepage.module.css";
import Layout from "../../components/CustomLayout/Layout";
import { airTable } from "../../services/AirTable";
import { Carousel } from "react-bootstrap";

function Home() {
  const [hotProduct1, setHotProduct1] = useState([]);
  const [hotProduct2, setHotProduct2] = useState([]);

  useEffect(() => {
    async function getHotProduct1() {
      const response = await airTable("hot-products-1", "data");
      setHotProduct1(response);
    }

    async function getHotProduct2() {
      const response = await airTable("hot-products-2", "data");
      setHotProduct2(response);
    }

    getHotProduct1();
    getHotProduct2();
  }, []);

  function renderCarousel(products) {
    return (
      <Carousel
        controls={false}
        indicators={false}
        interval={3000}
        className="h-25 w-100 my-5"
      >
        {products.map((product, index) => (
          <Carousel.Item
            key={index}
            className={`${css.carouselImg}d-flex row justify-content-center bg-dark`}
          >
            <div
              className={`w-100 d-flex row justify-content-center bg-dark m-0`}
            >
              <img className={`w-50`} src={product.fields.img_url} alt="" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  return (
    <Layout showSideMenu={false}>
      <div
        className={`${css.carousel} h-100 d-flex row justify-content-center`}
      >
        {renderCarousel(hotProduct1)}
        {renderCarousel(hotProduct2)}
      </div>
    </Layout>
  );
}

export default Home;
