import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature3() {
  return (
    <>
      <div
        className="section features-3 my-5"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/p31.svg") + ")",
        }}
      >
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="8">
              <h3 className="display-3 text-white">
                {/* Build something great */}
                {/* <span className="text-success">with our products</span> */}
              </h3>
              {/* <p className="lead text-white">
                We’re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game of life
                you need to appreciate every moment.
              </p> */}
            </Col>
          </Row>
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
          <Row className="row-grid">
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature3;
