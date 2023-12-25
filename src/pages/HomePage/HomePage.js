import React, { useEffect, useState } from "react";
import css from "./homepage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/CustomLayout/Layout";
import { airTable } from "../../services/AirTable";
import { Carousel } from "react-bootstrap";

function Home() {
  let { id } = useParams();
  const [hotProduct1, setHotProduct1] = useState([]);
  const [hotProduct2, setHotProduct2] = useState([]);

  useEffect(() => {
    async function getHotProduct1() {
      const response = await airTable("hot-products-1", "data");
      setHotProduct1(response);
      console.log("getHotProduct1", response);
    }

    async function getHotProduct2() {
      const response = await airTable("hot-products-2", "data");
      setHotProduct2(response);
      console.log("getHotProduct2", response);
    }

    getHotProduct1();
    getHotProduct2();
  }, []);

  return (
    <Layout>
      <div
        className={`${css.carousel} h-100 d-flex row justify-content-center`}
      >
        <Carousel
          controls={false}
          indicators={false}
          className="h-25 w-100 my-5"
        >
          {hotProduct1.map((product, index) => (
            <Carousel.Item
              key={index}
              className={`${css.carouselImg}d-flex row justify-content-center bg-dark`}
            >
              <div
                className={`w-100 d-flex row justify-content-center bg-dark m-0`}
              >
                <img className={`w-50`} src={product.fields.img_url} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Carousel
          controls={false}
          indicators={false}
          className="h-25 w-100 my-5"
        >
          {hotProduct2.map((product, index) => (
            <Carousel.Item
              key={index}
              className={`${css.carouselImg}d-flex row justify-content-center bg-dark`}
            >
              <div
                className={`w-100 d-flex row justify-content-center bg-dark m-0`}
              >
                <img className={`w-50`} src={product.fields.img_url} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}

export default Home;
