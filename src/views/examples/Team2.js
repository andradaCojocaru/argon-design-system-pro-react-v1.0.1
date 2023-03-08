import color from "material-ui/colors/orange";
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Team2() {
  React.useEffect(() => {
    document.body.classList.add("medici");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("medici");
    };
  });
  return (
    <>
      <div className="team-2">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-5" md="8">
              <h3 className="display-3">Echipa de medici</h3>
              <h4 className="lead">
                Echipa de medici de pe site-ul nostru este atent aleasa pentru a face fata nevoilor fiecaruia dintre noi
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Vezi Profil
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Adauga review
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/Doctor3.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Anca Moldovan</h4>
                  <p className="lead">Medic Ginecolog</p>
                  <div class="rating">
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                  </div>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">atenta la detalii</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Spitalul Clinic de Boli Infectioase, Cluj-Napoca</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Rating: 4.7 
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Vezi Profil
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Adauga review
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/Doctor2.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Amina Venter</h4>
                  <p className="lead">Dermatologie</p>
                  <div class="rating">
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                  </div>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">friendly, comunicativ</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Spitalul Clinic Municipal de Urgenta, Timisoara</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Rating: 4.9
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-image="profile-image">
                <CardHeader>
                  <div className="card-image">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon-only"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Vezi Profil
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Adauga review
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/Doctor1.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h4 className="display-4 mb-0">Lucian Dochia</h4>
                  <p className="lead">Medicina generala</p>
                  <div class="rating">
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                        <i class="fa fa-star" style={{color: "gold"}}></i>
                  </div>
                  <div className="table-responsive">
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-atom"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">empatic, ofera sprijin refugiatilor</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-user-run"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">Spitalul Sf. Spiridon, Iasi</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-chart-bar-32"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-1">
                              Rating: 4.6
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team2;
