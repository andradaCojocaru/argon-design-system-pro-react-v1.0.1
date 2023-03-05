import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
import ChatGpt from '../ChatGpt';

// Core Components

function HeaderPresentation() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/presentation_bg.png") + ")",
            }}
          ></div>
          <Container
            className="shape-container d-flex align-items-center py-lg"
            fluid
          >
            <div className="col px-0">
              <Row>
                <Col className="ml-5" lg="4">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  ></img>{" "}
                  
                  <p className="lead">
                    Ai o problema medicala si nu stii la cine sa apelezi pentru ajutor? <br></br>
                    <b>Introdu mai jos simptomele tale si afla la ce cabinet ar trebui sa mergi</b>
                  </p>
                  <ChatGpt></ChatGpt>
                  {/* <div className="mt-5">
                    <small className="font-weight-bold mb-0 mr-2">
                      *proudly coded by
                    </small>
                    <img
                      alt="..."
                      src={require("assets/img/brand/creativetim-black-slim.png")}
                      style={{ height: "28px" }}
                    ></img>
                  </div> */}
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeaderPresentation;
