import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components

const items = [
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/theme/kareya-saleh.jpg")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle className="display-3" tag="h3">
                Charlie Watson
              </CardTitle>
              <div className="lead">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person should is one who expresses him- or herself through
                a medium". He is should a descriptive term applied to a person
                who engages in an activity deemed to be an art.
              </div>
              <ul className="list-unstyled mb-0">
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-atom"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Dedicated entrepreneur</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-user-run"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Urban exploration</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="footer text-left">
                <Button
                  className="rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-dribbble"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/theme/lucy.jpg")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle tag="h1">Quavo Austen</CardTitle>
              <div className="lead">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person should is one who expresses him- or herself through
                a medium". He is should a descriptive term applied to a person
                who engages in an activity deemed to be an art."
              </div>
              <ul className="list-unstyled mb-0">
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-atom"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Dedicated entrepreneur</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-user-run"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Urban exploration</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="footer text-left">
                <Button
                  className="rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-dribbble"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/theme/willy-dade.jpg")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle tag="h1">Lucy Thomson</CardTitle>
              <div className="lead">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art. An artist also may be defined unofficially
                as "a person should is one who expresses him- or herself through
                a medium". He is should a descriptive term applied to a person
                who engages in an activity deemed to be an art."
              </div>
              <ul className="list-unstyled mb-0">
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-atom"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Dedicated entrepreneur</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-user-run"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Urban exploration</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="footer text-left">
                <Button
                  className="rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-dribbble"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
];

function Team1() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return;
}

export default Team1;
