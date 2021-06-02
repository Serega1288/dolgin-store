import React, {useContext} from "react";
import {Link} from "gatsby";
import GetInfoResult from "../InfoBox";
import { StateContext } from './layout'
export default () => {

    const state = useContext(StateContext)

    function shadowOffPop() {
        document.getElementById("miniCart").classList.remove("active");
    }


    function sumTotal() {
        return state.items?state.items.reduce((acc, curr) => acc + curr.count, 0):0
    }

    function sumPrice() {
        return state.items?state.items.reduce((acc, curr) => acc + curr.count*curr.price, 0):0
    }

    return (
        <>
            <div id="miniCart" className="miniCart">
                <div className="container d-flex justify-content-end">
                    <div className="boxMiniCart">
                        <div className="box">
                            {state.items && state.items.length>0 ? (
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Сумма заказа:</strong> <br/>
                                        <div className="box-result-text">{sumPrice()} грн</div>
                                    </div>
                                    <div className="col-6">
                                        <strong>Количество товаров:</strong> <br/>
                                        <div className="box-result-text">
                                            {sumTotal()}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Link className="btn style-1 w100 mt-4" to='/cart'>перейти в корзину</Link>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <GetInfoResult info="save" title="Корзина пустая" text="Вы пока не добавили ниодного товара в корзину" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={shadowOffPop} className="shadow"></div>
            </div>
        </>
    );
};


