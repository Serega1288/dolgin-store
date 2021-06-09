import React, {useContext} from "react";
import {Link} from "gatsby";
import GetInfoResult from "../InfoBox";
import { StateContext } from '../global/layout'
import "./checkout.css"
export default () => {

    const state = useContext(StateContext)

    function sumPrice() {
        return state.items?state.items.reduce((acc, curr) => acc + curr.count*curr.price, 0):0
    }

    console.log(state);

    return (
        <>
            <div className="mb-3">
                <div className="resultPrice mb-3">
                    {state.items && state.items.length>0 && (
                        <>
                            <div className="pb-3">
                                <strong>ВАШ ЗАКАЗ:</strong>
                            </div>

                            <div className="row  pb-3 d-flex align-items-center">
                                <div className="col"><span>Товаров на сумму:</span></div>
                                <div className="col-auto">
                                    <div className="box-result">{sumPrice()} грн</div>
                                </div>
                            </div>

                            <div className="row line-bottom  pb-3 d-flex align-items-center">
                                <div className="col"><span>Ваша скидка:</span></div>
                                <div className="col-auto">
                                    <div className="box-result">0 грн</div>
                                </div>
                            </div>

                            <div className="row  pt-3 d-flex align-items-center">
                                <div className="col"><span>Сумма к оплате:</span></div>
                                <div className="col-auto">
                                    <div className="box-result">{sumPrice()} грн</div>
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </div>
        </>
    );
};


