import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai';

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
import Textarea from "components/index-page/Textarea";

function RegisterPage2() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  React.useEffect(() => {
    document.body.classList.add("povestea-mea");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("povestea-mea");
    };
  }, []);

  const configuration = new Configuration({apiKey: "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"}) ;
  const openai = new OpenAIApi(configuration);
  const [userInput, setUserInput] = useState('');
  const [suggestedSpecialty, setSuggestedSpecialty] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  // const [allSpecialties, setSpecialties] = useState(null);
  // const getSpecializari = async () => {
  //   let { data: test, error } = await supabase
  //   .from('Specializare')
  //   .select("Categorie").then((res)=> chatGptFound());
  // }

  const chatGptFound = async() => {
    const modelPrompt = `Cauta simptomele care se potrivesc cel mai bine: ${userInput}\n{}`;

    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: modelPrompt,
        max_tokens: 7,
        n: 1,
        temperature: 0.5,
        stream: false,
        stop: ["{}"]
      });

      const suggestedSpecialty = response.data.choices[0].text;
      setSuggestedSpecialty(suggestedSpecialty);
      var x = 0;
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleSubmit = async (event) => {
    console.log("submit");
    event.preventDefault();
  };
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
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      </InputGroupText>
                    </InputGroupAddon>
                    <textarea id="exampleFormControlTextarea1" placeholder="Aici iti poti lasa povestea" rows="12" spellcheck="false" class="form-control"></textarea>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    onClick={handleChange}
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span>Posteaza povestea mea</span>
                  </label>
                </div>
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
                    <textarea id="exampleFormControlTextarea1" placeholder="Aici iti poti lasa povestea" rows="12" spellcheck="false" class="form-control"></textarea>
                  </InputGroup>
                </FormGroup>
                
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    onClick={handleChange}
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  ></input>
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span>Posteaza povestea mea</span>
                  </label>
                </div>
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
                  <h1 className="text-white">Povestea ta</h1>
                  <p>Este spre binele tuturor sa aiba ocazia sa cunoasta din experienta pe care ai avut-o</p>
                </div>
              </div>
              {suggestedSpecialty && (
                <p>
                  Specializarea sugerata este {suggestedSpecialty}.
                </p>
              )}
            </div>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default RegisterPage2;
