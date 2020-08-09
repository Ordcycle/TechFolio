import React from "react";

import { Row, Col } from "react-flexbox-grid";

function Footer() {
  return (
    <footer>
      <div className="content" style={{ padding: "20px 0" }}>
        <Row center="xs" middle="xs" className="">
          <Col xs={4}>Design by TechFolio</Col>
          <Col xs={8} className="techfolio_copyright">
            Jonathan © {new Date().getFullYear()}{" "}
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
