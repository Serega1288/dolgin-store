import React, {useState} from "react"
import Layout from "../components/global/layout";
import {Link} from "gatsby";
import FormRegister from "../components/checkout/FormRegister"
import ResultPrice from "../components/checkout/ResultPrice"
import Payment from "../components/checkout/payment"
import Pay from "../components/checkout/pay"
import GetInfoResult from "../components/InfoBox";
import SEO from "../components/global/seo";



export default ({pageContext}) => {

    const cart = typeof window !== 'undefined' &&  JSON.parse( localStorage.getItem('AddCart' ) );

    const [step, setStep] = useState(2)


    return (
        <Layout page="checkout">
            <SEO title={pageContext.title} />
            {/*{JSON.stringify(cart)}*/}
            {
                cart && cart.length>0 ? (
                    <div className="container pt-1">
                        <div className="box-checkout-list row">
                            {/*<div id="box-checkout-list-1" onClick={()=>checkoutList(1) } className="list-item col-4 ">*/}
                            {/*    Вход*/}
                            {/*</div>*/}
                            <div id="box-checkout-list-2"
                                // onClick={()=>checkoutList(2) }
                                 className={`list-item col ${step === 1 ?? 'active'}`}>
                                Доставка
                            </div>
                            <div id="box-checkout-list-3"
                                // onClick={()=>checkoutList(3) }
                                 className={`list-item col ${step === 2 ?? 'active'}`}>
                                Оплата
                            </div>
                        </div>
                        <div className="box-checkout-result">

                            {/*<div id="box-checkout-list-1-result" className=" result">*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="col">*/}
                            {/*            <div className="box-checkout-title">*/}
                            {/*                <strong>Регистрация</strong>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-auto">*/}
                            {/*            <Link className="btn style-6" to="/user">У меня есть аккаунт</Link>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-12">*/}
                            {/*            <FormRegister />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {step === 2 && <div id="box-checkout-list-2-result" className="result active">
                                <div className="col-12">
                                    <Payment setStep={setStep} />
                                </div>
                            </div>
                            }
                            {step === 3 &&
                            <div id="box-checkout-list-3-result" className="result active">
                                <div className="box-checkout-title text-center pt-3">
                                    <strong>Оплата</strong>
                                </div>
                                <Pay setStep={setStep}/>
                            </div>
                            }


                        </div>
                        <ResultPrice />
                    </div>
                ) : (
                    <GetInfoResult info="save" title="Корзина пустая" text="Вы не добавили в корзину ни одного товара" classBox='h-100 ' homeBtn={true} />
                )
            }
        </Layout>


    )
};