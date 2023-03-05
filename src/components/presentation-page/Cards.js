import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Cards() {
  React.useEffect(() => {
    new Glide(".presentation-cards", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 5,
    }).mount();
  }, []);
  return (
    <>
      <section className="section-cards mb-5">
        <div className="content-center">
          <Container fluid>
            <Row>
              <Col className="mx-auto text-center" lg="5" md="10" xs="12">
                <h1 className="display-3">
                  Coltul povestilor
                  <span className="text-primary">
                    Fiecare experienta conteaza
                  </span>
                </h1>
                <p className="lead">
                  Tot ce traim este unic si irepetabil, Cu toate acestea, chiar si in cele mai neplacute momente ale vietii
                  sau atunci cand simtim ca nimeni si nimic nu ne poate ajuta, experienta celor din jurul nostru reprezinta un
                  ajutor nepretuit. Astfel, speram ca mica noastra galerie de momente din viata unor oameni ca tine te vor ajuta
                  sa te simti mai putin singur si te vor incuraja si te vor ghida spre gasirea solutie potrivite nevoilor tale.
                </p>
              </Col>
              <Col md="12">
                <div className="presentation-cards">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-blog.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-1.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-background.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-2.png")}
                          width="350"
                        ></img>
                      </li>
                      <li className="glide__slide">
                        <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-profile-2.png")}
                          width="350"
                        ></img>
                      </li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button
                      className="glide__arrow glide__arrow--left text-default"
                      data-glide-dir="<"
                    >
                      <i className="ni ni-bold-left"></i>
                    </button>
                    <button
                      className="glide__arrow glide__arrow--right text-default"
                      data-glide-dir=">"
                    >
                      <i className="ni ni-bold-right"></i>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Cards;
