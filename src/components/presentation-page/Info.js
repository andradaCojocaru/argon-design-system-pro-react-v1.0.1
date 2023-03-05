import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Info() {
  return (
    <>
      <section className="section-info">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                  <i className="ni ni-satisfied"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary pl-0">
                  Gaseste un medic
                </h6>
                <p className="description opacity-8">
                  Cauta doctorul de care ai nevoie
                </p>
                {/* <Link className="text-primary" to="/index"> */}
                <Link className="text-primary" to="/sugereaza-medic" tag={Link}>
                
                  Cauta{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left" style={{ marginTop: "-50px" }}>
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                  <i className="ni ni-collection"></i>
                </div>
                <h6 className="info-title text-uppercase text-success pl-0">
                  Afla povestile altora
                </h6>
                <p className="description opacity-8">
                  Lasa-te inspirat de povestile oamenilor care au trecut prin experiente asemanatoare
            
                </p>
                <Link className="text-primary" to="/sections">
                  Citeste experientele altora{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="info text-left">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                  <i className="ni ni-single-copy-04"></i>
                </div>
                <h6 className="info-title text-uppercase text-warning pl-0">
                  Povestea ta
                </h6>
                <p className="description opacity-8">
                  Simte-te liber sa povesti prin ceea ce ai trecut
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Scrieti povestea{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Info;
