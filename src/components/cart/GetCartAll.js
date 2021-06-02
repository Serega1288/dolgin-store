import React, {useContext} from "react"
import {Link} from "gatsby"
import GetInfoResult from "../InfoBox"
import { StateContext } from '../global/layout'
import CartItem from '../cart/CartItem'
export default () => {

    const state = useContext(StateContext)

    function sumPrice() {
        return state.items?state.items.reduce((acc, curr) => acc + curr.count*curr.price, 0):0
    }

    return (
        <>
            {/*<pre>{JSON.stringify(state, null, 90)}</pre>*/}
            {

                state.items && state.items.length>0 ? (
                    <>
                        {state.items.map((item, i ) => ( <CartItem item={item} /> ))}

                        <div className="col-12 box-result-cart">
                            <div className="pt-3 pb-0">
                                <span className="title-box">Товаров на сумму: </span>
                                <span className="result-box"> {sumPrice()} грн</span>
                            </div>
                        </div>

                        <div className="col-12 box-btn mb-3 mt-3 pt-3 pb-3 ">
                            <Link className="btn style-3 w100" to="/checkout">оформить заказ</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-12">
                            <GetInfoResult info="save" title="Корзина пустая" text="Вы не добавили в корзину ни одного товара" classBox='h-100 ' homeBtn={true} />
                        </div>
                    </>
                )
            }
        </>
    );
};


