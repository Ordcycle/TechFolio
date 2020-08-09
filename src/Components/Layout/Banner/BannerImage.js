import React from "react";
import { Col } from "react-flexbox-grid";

function BannerImage({ bannerSection }) {
  return (
    <>
      <Col lg={3} xs={12}>
        <div className="hero-image shape">
          <div
            className={
              bannerSection.bannerAvatar === "defaultAvatar.svg"
                ? "wrap-default"
                : "wrap-image"
            }
          >
            <img
              src={bannerSection.bannerAvatar}
              alt=""
              className="hero-image_img"
            />
          </div>
        </div>
      </Col>
    </>
  );
}

export default BannerImage;
