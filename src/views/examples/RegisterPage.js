import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("sugereaza-medic");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("sugereaza-medic");
    };
  }, []);
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/register_bg.png") + ")",
            }}
          ></div>
          <Container className={activeContainer}>
            <div className="form-container sign-up-container">
              <Form>
                <h2>Create Account</h2>
                <FormGroup className={"mb-3 " + signupNameFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Nume"
                      type="nume"
                      onFocus={() => setSignupEmailFocus("focused")}
                      onBlur={() => setSignupEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Prenume"
                      type="prenume"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Specializare"
                      type="specializare"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Spital"
                      type="spital"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Comentariu"
                      type="comentariu"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <Button color="primary">Adauga</Button>
              </Form>
            </div>
            <div className="form-container sign-in-container">
              <Form action="#" role="form">
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Nume"
                      type="nume"
                      onFocus={() => setSignupEmailFocus("focused")}
                      onBlur={() => setSignupEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Prenume"
                      type="prenume"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Specializare"
                      type="specializare"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Spital"
                      type="spital"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Comentariu"
                      type="comentariu"
                      onFocus={() => setSignupPasswordFocus("focused")}
                      onBlur={() => setSignupPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <Button className="mt-3" color="primary">
                  Adauga
                </Button> 
              </Form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                <Button
                    className="btn-neutral"
                    color="default"
                    id="signIn"
                    size="sm"
                    onClick={() => setActiveContainer("")}
                  >
                    Adauga
                  </Button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="text-white">Adauga un medic</h1>
                  <p>Este spre binele tuturor sa aiba ocazia sa cunoasta din experienta pe care ai avut-o cu un medic ce nu este inca in comunitatea noastra</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default RegisterPage;
