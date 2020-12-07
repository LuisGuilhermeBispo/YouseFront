import React, { useState } from 'react';
import { StepComponent } from '../../shared';



export default function Landing(){

const [fader2, setFader2] = useState(0)
const [ cotacao, setCotacao ] = useState(0)

const RangeInput = (event) => {
    console.log("ENTROU");
    console.log("Fader2 =" + fader2);

    setFader2(event.target.value);

    setTimeout( () => {
        let ctt = fader2;
        setCotacao(ctt++)
    }, 2000);
   

}


return(

<div className="pg-home-coverages-selection">
    <div
        className="container-fluid__centered container-fluid__content container-fluid__content--centered section__with-sidebar">
        <StepComponent />

        <div className="welcomeText">
            <h2 className="welcomeText__title">Pronto, <span className="highlight">Luis Guilherme</span>!</h2>
            <p className="welcomeText__subTitle">Essas são as coberturas que mais combinam com o seu imóvel. Agora
                escolha qual o valor de indenização que quiser <strong>começando pela cobertura de incêndio que é base
                    para calcular as demais :)</strong></p>
        </div>
        <div className="container">
            <h2>TESTE</h2>
            <p id="valor-fontSize">40</p>
            <input className="none" type="range" min="4" max="40" value="0" id="fader" step="1" />
            <p id="v-28">Após uma viagem que se prolongou por mais de nove anos e em que percorreu <span
                    id="fader2">4</span>,8 mil milhões de quilómetros a New Horizons passou o mais perto de Plutão às
                11:49 TMG (12:49 em Lisboa) em piloto automático, divulgou a NASA na rede social Twitter.</p>
            <form>
                <h2>TESTE 2</h2>
                <div className="form-group">
                    <label htmlFor="formControlRange">Example Range input</label>
                    <p id="valor-fontSize">{fader2}</p>
                    <h2> {cotacao} </h2>
                    <input type="range" className="form-control-range" value={fader2} id="formControlRange" min="0" max="40" 
                        step="1" onChange={event => RangeInput(event)} />
                    <p id="v-28">Após uma viagem que se prolongou por mais de nove anos e em que percorreu
                        4,8 mil milhões de quilómetros a New Horizons passou o mais perto de Plutão
                        às 11:49 TMG (12:49 em Lisboa) em piloto automático, divulgou a NASA na rede social Twitter.</p>
                </div>
            </form>
        </div>
    </div>
</div>

)}