import React from 'react';

export default function MenuComponent(){
return(
    <section className="container__sidebar">
        <div className="container__sidebar-content">




            <header className="main-header home main-header--negative main-header--scrolled">

                <div className="wrapper-logos">
                    <a className="main-header-logo" href="/"></a>

                </div>

                <div className="main-header__title" data-header-title="">
                    Seguro Residencial
                </div>

                <div className="main-header__actions">

                    <div className="display-payment-monthly">
                        <i className="icon icon-chevron_down main-header__trigger" data-header-trigger=""></i>

                        <div className="main-header__original-price hidden" data-insurance-original-pricing="container">
                            <span className="price-currency_symbol">R$</span>
                            <span data-insurance-pricing="whole-number">26</span>
                            <span data-insurance-pricing="fractional-part">,01</span>
                        </div>

                        <div className="main-header__price main-header__price-height"
                            data-insurance-pricing="container">
                            <span className="price-value">
                                R$
                                <span className="main-header__price-value whole-number"
                                    data-insurance-pricing="whole-number">26</span>
                                <span className="main-header__price-value fractional-part"
                                    data-insurance-pricing="fractional-part">,01</span>
                                <span className="payment-frequency">/mês</span>
                            </span>
                        </div>
                    </div>


                </div>

            </header>

            <section className="quote-summary  quote-summary-home">

                <div className="info-main">

                    <h2 className="title-insurance insurance-home">Seguro Residencial</h2>


                    <ul className="resume">
                        <li className="resume__item">
                            <div className="resume__item__wrap">
                                <span className="t2b resume__count t--negative t2b-size"
                                    data-coverages-count="quantity">4</span>
                                <span className="t2b resume__label t--negative t2b-size"
                                    data-coverages-count="label">Coberturas</span>
                                <div className="resume__pricing resume__price__whole-number">
                                    <span data-coverages-pricing-value-wrapper="">
                                        <span className="t2b resume__discount__whole-currency t--negative"
                                            data-coverages-pricing="currency">R$</span>
                                        <span className="t2b resume__price__whole-number t--negative"
                                            data-coverages-pricing="whole-number">26</span>
                                        <span className="t3 resume__price__fractional-part t--negative t3-size"
                                            data-coverages-pricing="fractional-part">,01</span>
                                    </span>
                                </div>
                            </div>
                        </li>


                    </ul>

                    <div className="quote-summary__price__sidebar">
                        <h2 className="quote-summary__price__total">Total</h2>

                        <div>
                            <div className="quote-summary__original-price hidden"
                                data-insurance-original-pricing="container">
                                <div className="quote-summary__price__original-price">
                                    <span>R$</span>
                                    <span data-insurance-pricing="whole-number">26</span>
                                    <span data-insurance-pricing="fractional-part">,01</span>
                                </div>
                            </div>

                            <div className="quote-summary__price" data-insurance-pricing="container">
                                <span className="quote-summary__price__currency t--accent">R$</span>
                                <span className="quote-summary__price__whole-number t--accent"
                                    data-insurance-pricing="whole-number">26</span>
                                <span className="quote-summary__price__fractional-part t--accent"
                                    data-insurance-pricing="fractional-part">,01</span>
                                <span className="quote-summary__price__frequency">
                                    /mês
                                </span>
                            </div>
                        </div>
                    </div>



                </div>
            </section>


        </div>
        </section>
)
}