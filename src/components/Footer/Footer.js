import React from "react";
import css from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className="mt-auto w-100 d-flex row justify-content-center align-items-center">
        <div className="d-flex row justify-content-center align-items-center w-75">
          <hr className={`${css.hrStyle} my-4`} />
          <p className={`${css.textStyle} text-center`}>聯絡我們</p>
          <div
            className={`${css.informationView} d-flex row justify-content-center align-items-center mt-2 mb-5`}
          >
            <div className="">地址 / 411 台中市太平區宜安街31號1樓</div>
            <div className="">電話 / (04) 22798787</div>
            <div className="">
              服務時間 / 09:00 AM ~ 17:30 PM (例、假日休息)
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
