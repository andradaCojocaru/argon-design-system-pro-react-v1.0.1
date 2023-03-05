import React, { useState } from 'react';
import {Configuration, OpenAIApi} from 'openai';
import { supabase } from '../../src/supabase';

function ChatGpt() {
  

  // var x = 2;
  // debugger;
  // console.log(openai);
  // openai.api_key = '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';
  
  const configuration = new Configuration({apiKey: "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"}) ;
  const openai = new OpenAIApi(configuration);
  const [userInput, setUserInput] = useState('');
  const [suggestedSpecialty, setSuggestedSpecialty] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const [allSpecialties, setSpecialties] = useState(null);
  const getSpecializari = async () => {
    let { data: test, error } = await supabase
    .from('Specializare')
    .select("Categorie").then((res)=> chatGptFound());
  }

  const chatGptFound = async() => {
    const modelPrompt = `Cauta specializarea medicala care se potriveste cel mai bine: ${userInput}\n{}`;

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
    getSpecializari();
    console.log("submit");
    event.preventDefault();
    // const allSpecialties = ["Ginecologie",
    // "Dermatologie",
    // "Pediatrie",
    // "Urologie",
    // "Neurologie",
    //   "Otorinolaringologie(ORL)",
    //   "Gastroenterologie",
    //   "Ortopedie",
    //   "Cardiologie",
    //   "Oncologie",
    //   "Chirurgie",
    //   "Oftalmologie",
    //   "Medicina generala",
    //   Medicina interna",
    //   Pneumologie",
    //   Boli infectioase",
    //   Alercologie si Imunologie Clinica",
    //   Radiologie si Imagistica Medicala",
    //   Chirurgie plastica",
    //   Chirurgie vasculara",
    //   Anestezie si terapie intensiva",
    //   Endocrinologie",
    //   Hematologie",
    //   Psihiatrie",
    //   Nefrologie",
    //   Reumatologie",
    //   Recuperare Medicala",
    //   Stomatologie",
    //   Genetica Medicala",
    //   Chirurgie Pediatrica",
    //   Anatamoie patologica",
    //   Neonatologie",
    //   Neurologie Pediatrica",
    //   Diabet", Nutritie si Boli Metabolice",
    //   Geriatrie si Gerontologie",
    //   Neurochirurgie];
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit} id="outlined-basic" className='search'
          variant="outlined"
          fullWidth
          label="Search">
        <label>
          Ce simptome ai?
          <input type="text" value={userInput} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {suggestedSpecialty && (
        <p>
          Specializarea sugerata este {suggestedSpecialty}.
        </p>
      )}
    </div>
  );
}

export default ChatGpt;
