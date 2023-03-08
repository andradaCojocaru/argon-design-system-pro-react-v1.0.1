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

              <Row className="row-grid mt-5">
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-hat-3 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-info">Anonim</h5>
                  <p>
                  La scoala aveam parte de marginalizare din partea colegilor, profesorii aveau un comportament cel putin indiferent fata de mine, in timp ce
                  pe strada, oamenii ma ptiveau mereu de parca le-as fi facut vreun. Cu atat de multe neplaceri in viata mea am ajuns sa cred chiar si eu ca nu
                  sunt bun de nimic, ca pentru mine viitorul nu are culoare, toate acestea fiind datorate doar familiei in care m-am nascut. 
                  Din fericire, cu ajutorul unor asociatii am ajuns sa lucrez cu doamna psiholog care m-a ajutat sa imi redescopar valoare si sa imi colorez
                  viitorul in ce nuante imi place.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    anxietate, depresie
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-warning rounded-circle text-white">
                  <i className="ni ni-istanbul text-warning"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-warning">Anonim</h5>
                  <p>
                Fiind un om care sufera de SIDA, orice vizita medicala a fost mereu un cosmar. Cei mai multi doctori imi decalau tratamentul, din cauza stigmei si am ajuns
                sa treaca 5 luni fara a gasi un doctor care sa ma ingrijeasca. Ma bucur ca am gasit o platforma care sa ma ajute sa-mi gasesc un doctor fara prejudecati.
                  </p>
                  <a
                    className="text-warning"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    SIDA
                  </a>
                </div>
              </div>
            </Col>
          </Row>


              <Col md="12">
                <div className="presentation-cards">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                      <li className="glide__slide">
                        {/* <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-blog.png")}
                          width="350"
                        ></img> */}
                      </li>
                      <li className="glide__slide">
                        {/* <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-1.png")}
                          width="350"
                        ></img> */}
                      </li>
                      <li className="glide__slide">
                        {/* <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-background.png")}
                          width="350"
                        ></img> */}
                      </li>
                      <li className="glide__slide">
                        {/* <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-pricing-2.png")}
                          width="350"
                        ></img> */}
                      </li>
                      <li className="glide__slide">
                        {/* <img
                          alt="..."
                          height="400"
                          src={require("assets/img/presentation-page/card-profile-2.png")}
                          width="350"
                        ></img> */}
                      </li>
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    {/* <button
                      className="glide__arrow glide__arrow--left text-default"
                      data-glide-dir="<"
                    >
                      <i className="ni ni-bold-left"></i>
                    </button> */}
                    {/* <button
                      className="glide__arrow glide__arrow--right text-default"
                      data-glide-dir=">"
                    >
                      <i className="ni ni-bold-right"></i>
                    </button> */}
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
