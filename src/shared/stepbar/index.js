import React from 'react';

export default function StepComponent(){
    return(
            <ol className="stepped-progress-bar">
                <li className="stepped-progress-bar__step stepped-progress-bar__step--done">
                    <span className="stepped-progress-bar__step-text">1/3 Cotação</span>
                </li>
                <li className="stepped-progress-bar__step stepped-progress-bar__step--current">
                    <span className="stepped-progress-bar__step-text">2/3 Coberturas/Assistências</span>
                </li>
                <li className="stepped-progress-bar__step">
                    <span className="stepped-progress-bar__step-text">3/3 Pagamento</span>
                </li>
            </ol>
    )
}