import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function BasicComponents() {
  return (
    <>
      <section className="section-basic-components">
        <Container>
          <Row>
            <Col className="mb-md-5" lg="5" md="10">
              <h1 className="display-3">
                Recomanda un medic
                <span className="text-primary">
                Spune tuturor despre experienta pe care ai avut-o
                </span>
              </h1>
              <p className="lead">
              Experienta personala este una dintre cele mai bune surse de informare. Poveste despre experienta ta si ajuta-i pe cei care sunt in cautarea unui medic potrivit nevoilor acestora
              </p>

              <Link className="text-primary" to="/sugereaza-medic" tag={Link}>
                  Recomanda un medic{" "}
                  <i className="ni ni-bold-right text-primary"></i>
              </Link>

            </Col>
            <Col lg="6" md="12">
              {/* <div className="image-container">
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/table.png")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/card-btn.png")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/card-orange.png")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/slack-btn.png")}
                ></img>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/ill/example-3.svg").default}
                ></img>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BasicComponents;
