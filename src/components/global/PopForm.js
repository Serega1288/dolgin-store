import React, {useState, useContext} from "react";
import Buy from '../../images/buy.svg';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {Link} from "gatsby";
import { StateContext } from './layout'
import { DispatchContext } from './layout'

const CONTACT_MUTATION = gql`
  mutation createOrderMutation( $clientMutationId: String!, $firstName: String!, $phone: String! ){
    createOrder(input: {clientMutationId: $clientMutationId, billing: {firstName: $firstName, phone: $phone}, lineItems:{productId: 210, quantity: 1} }) {
      clientMutationId
      order {
        id
        billing { 
          firstName
          phone
        }
      }
      orderId
    }
  } 
`



export default () => {

    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    function offPop() {
        dispatch({
            type: 'toggleFormStatus',
            payload: false
        })



        document.querySelector(".PopBox.popThenks").classList.remove('active');
        document.querySelector(".PopBox.popError").classList.remove('active');
    }

    function popError(error) {
        offPop()
        document.querySelector(".PopBox.popError").classList.add('active');
        //document.querySelector(".PopBox.popError .order-n").innerHTML = error;
    }

    function popThenks(data) {
        offPop()
        document.querySelector(".PopBox.popThenks").classList.add('active');
        //document.querySelector(".PopBox.popThenks .order-n").innerHTML = JSON.stringify(data["CREATEORDER"], null, 4);
        //document.querySelector(".PopBox.popThenks .order-n").innerHTML = JSON.stringify(data, null, 4);
    }
    //<pre>{JSON.stringify(data, null, 4)}</pre>
    const [firstNameValue, setFirstNameValue] = useState('')
    const [PhoneValue, setPhoneValue] = useState('')
    //const  [productIdValue, setproductIdValue] = useState('')
    //const [ProductValue, setProductValue] = useState('')

    return (
        <>

            <div className="PopBox popError">
                <div className="PopForm">
                    <span onClick={offPop} className="exit"></span>
                    <div className="boxImg text-center">
                        <img src={Buy} alt=""/>
                    </div>
                    <div className="title">
                        Извените покупка не удалася... <span className="order-n"></span>
                    </div>
                    <div className="text">
                        Попробуйте немного позже....
                    </div>
                    {/*<div className="">*/}
                    {/*    <Link onClick={offPop} className="w100 btn style-1" to="/">перейти на главную</Link>*/}
                    {/*</div>*/}
                </div>
                <div onClick={offPop} className="shadow"></div>
            </div>

            <div className="PopBox popThenks">
                <div className="PopForm">
                    <span onClick={offPop} className="exit"></span>
                    <div className="boxImg text-center">
                        <img src={Buy} alt=""/>
                    </div>
                    <div className="title">
                        спасибо за ваш заказ. <span className="order-n"></span>
                    </div>
                    <div className="text">
                        Мы свяжемся с Вами в ближайшее время
                    </div>
                    {/*<div className="">*/}
                    {/*    <Link onClick={offPop} className="w100 btn style-1" to="/">перейти на главную</Link>*/}
                    {/*</div>*/}
                </div>
                <div onClick={offPop} className="shadow"></div>
            </div>

            <div className={`PopBox BuyOneClick ${state.popFormStatus?'active':''}`}>
                <div className="PopForm">
                    <span onClick={offPop} className="exit"></span>
                    <div className="boxImg text-center">
                        <img src={Buy} alt=""/>
                    </div>
                    <div className="title">
                        Купить: <span className="nameProduct">{state.popFormProduct?.title}</span>
                        { /*
                            analog code

                            const productTitle = ''
                            if (state.popFormProduct && state.popFormProduct.title){
                                productTitle = state.popFormProduct.title
                            }

                            Купить: <span className="nameProduct">{productTitle}</span>

                            Если state.popFormProduct === null  то при обращении без проверки на существование обекта будет Fatel error

                        */}
                    </div>
                    <Mutation mutation={CONTACT_MUTATION}>
                        {(createOrder, { loading, error, data }) => (
                            <React.Fragment>
                                <form
                                    onSubmit={
                                        async event => {
                                            event.preventDefault()
                                            createOrder({
                                                variables: {
                                                    clientMutationId: 'BuyOneClick',
                                                    firstName: firstNameValue,
                                                    phone: PhoneValue,
                                                    //productId: productIdValue,     #####    state.popFormProduct.id
                                                    //product: ProductValue
                                                }
                                            })
                                        }
                                    }
                                >


                                    <div className="input-group">
                                        <input type="text" id='firstNameInput' value={firstNameValue}
                                               required
                                               className="input"
                                               placeholder="Ваше имя"
                                               onChange={event => {
                                                   setFirstNameValue(event.target.value)
                                               }}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" id='PhoneInput'
                                               required
                                               maxlength="12"
                                               placeholder="Ваш телефон"
                                               className="input"
                                               value={PhoneValue}
                                               onChange={event => {
                                                   setPhoneValue(event.target.value)
                                               }}
                                        />
                                    </div>
                                    <button type="submit" className="btn style-3 w100">{loading ? ( 'Отправка...' ) : ( 'Купить' ) } </button>
                                </form>

                                {error && popError(error) }
                                {data && popThenks(data) }

                            </React.Fragment>
                        )}
                    </Mutation>
                </div>
                <div onClick={offPop} className="shadow"></div>
            </div>
        </>
    )

}

