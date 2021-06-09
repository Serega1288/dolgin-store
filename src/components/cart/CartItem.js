import React, {useContext} from "react"
import reviewsCom from '../../images/reviewsCom.svg';
import get_image_size from "../global/get_image_size";
import {Link} from "gatsby";
import SaveProduct from "../save/SaveProduct";
import InputNumber from "../global/step-input";
import RemoveCart from "./RemoveCart"
import { DispatchContext } from '../global/layout'

export default ({item}) => {

    console.log('sssitem', item);
    const dispatch = useContext(DispatchContext)

    // const [count, setCount] = useState( item.count )

    // function Greeting(props) {
    //     const isLoggedIn = props.isLoggedIn;
    //     if (isLoggedIn) {
    //         return <UserGreeting />;
    //     }
    //     return <GuestGreeting />;
    // }

    // function find(arr, value) {
    //     for (let i = 0; i < arr.length; i++)
    //         if (arr[i]['idProduct'] == value)
    //             return i;
    // }
    //
    // function remove(idProduct) {
    //     // const getCartItem = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('AddCart') );
    //     // let index = find(getCartItem, idProduct);
    //     // getCartItem.splice(index);
    //     // typeof window !== 'undefined' && localStorage.setItem('AddCart', JSON.stringify( getCartItem ) );
    // }

    return (
        <div className="col-12 col-lg-6 col-xl-6 pt-3 pb-3 line-bottom cartItem">
            <div className="row">
                <div className="col-6">
                    <div className="box-img">
                        <Link to={item.url}>
                            {/*<span className="sale"> -30% </span>*/}
                            <img className="w100" src={item.img} alt=""/>
                        </Link>

                    </div>
                </div>

                <div className="col-6 d-flex d-flex align-items flex-column">
                    <h3 className="product-title">{item.name}</h3>
                    <div className="sku">{item.sku}</div>
                    <div className="attrs">Размер: <span className="ttu">{item.attr}</span></div>
                    <div className="step">
                        <InputNumber max={item.max} value={item.count} onChange={ (v)=>{
                            if (v > 0)
                                dispatch({
                                    type: 'updateItem',
                                    payload: {...item,count:v}
                                })
                            else {
                                dispatch({
                                    type: 'removeCart',
                                    payload: {
                                        id:item.id
                                    }
                                })
                            }
                        } }   />

                        {/*<InputNumber id={item.id} InputMax={item.max} value={item.count} Price={item.price} BoxId={1} />*/}

                    </div>

                    <div className="mt-auto">
                        <div><strong>Цена:</strong></div>
                        <div className="box-price">{item.price} грн</div>
                        <div> <strong>Сумма:</strong> </div>
                        <div className="box-price">{item.price * item.count} грн</div>
                    </div>
                </div>

                <div className="col-12 pt-3">
                    <div className="row">
                        <div className="col-6">
                            <div className="btn style-3 w100">
                                в избранное
                            </div>
                        </div>
                        <div className="col-6">
                            <RemoveCart id={item.id} />
                            {/*<Link to="/cart" onClick={remove(item.idProduct)} className="btn style-2 w100 mt-auto">*/}
                            {/*    удалить*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
