import React from 'react';
import { MenuComponent, StepComponent } from '../../shared';



export default function Landing(){
return(
    
    <div className="pg-home-coverages-selection">
        <div className="container-fluid__centered container-fluid__content container-fluid__content--centered section__with-sidebar">
            <StepComponent/>
            
            <div className="welcomeText">
                <h2 className="welcomeText__title">Pronto, <span className="highlight">Luis Guilherme</span>!</h2>
                <p className="welcomeText__subTitle">Essas são as coberturas que mais combinam com o seu imóvel. Agora escolha qual o valor de indenização que quiser <strong>começando pela cobertura de incêndio que é base para calcular as demais :)</strong></p>
            </div>
        </div>
    </div>
    
)}