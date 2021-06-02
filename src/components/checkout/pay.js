import React, {useState, useContext} from "react";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {Link, navigate} from "gatsby";
import {Step} from "../../templates/checkout"
import { StateContext } from '../global/layout'
// lineItems:{productId: 210, quantity: 1}



const CONTACT_MUTATION = gql`
    mutation createOrderMutation( $clientMutationId: String!, $firstName: String!,$lastName: String!, $phone: String!, $city: String!, $address1: String!, $lineItems: [LineItemInput] ){
    createOrder(input: {clientMutationId: $clientMutationId, billing: {firstName: $firstName, lastName: $lastName, phone: $phone, city: $city, address1: $address1}, lineItems: $lineItems }) {
      clientMutationId
      order {
        id
        billing {
          firstName
          lastName
          phone
          city
          address1
        }
      }
      orderId
    }
  }
`

export default () => {

    const state = useContext(StateContext)

    //const payment = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('payment') );
    //console.log('firstName', payment, payment.firstName );

    //const [firstNameValue, setFirstNameValue] = useState( '' )
    const [payMetodValue, setPayMetodValue] = useState( '' )

    return (
        <>

            <div className="pay pt-3 pb-3">

                <Mutation mutation={CONTACT_MUTATION}>
                    {(createOrder, { loading, error, data }) => (
                        <React.Fragment>

                            <form
                                onSubmit={
                                    async event => {
                                        event.preventDefault()
                                        Step(3);
                                        const payment = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('payment') );
                                        console.log('firstName', payment, payment.firstName );
                                        createOrder({
                                            variables: {
                                                clientMutationId: 'Checkout',
                                                //firstName: 'serega', // наніше було firstNameValue - тестував, все ок
                                                //phone: '+380961530713',
                                                firstName: payment.firstName,
                                                lastName: payment.lastName,
                                                phone: payment.phone,
                                                city: payment.city,
                                                address1: payment.address1,
                                                //lineItems: '[' + [{variationId: 216, quantity: 1}, {variationId: 211, quantity: 2}].map(item => `{variationId: ${item.variationId}, quantity: ${item.quantity}}`).join(', ') + ']'
                                                //lineItems: [{variationId: 216, quantity: 1}, {variationId: 211, quantity: 2}].map(item => `{variationId: ${item.variationId}, quantity: ${item.quantity}}`)
                                                //lineItems: [{variationId: 216, quantity: 1}, {variationId: 211, quantity: 2}],
                                                lineItems: state.items.map(item => (
                                                    {variationId: item.databaseId, quantity: item.count }
                                                ))
                                                //productId: productIdValue,
                                                //product: ProductValue
                                            }
                                        })

                                        typeof window !== 'undefined' && JSON.parse( localStorage.getItem('payment') );
                                    }
                                }
                            >

                                {/*<input type="text" id='firstNameInput' required*/}
                                {/*placeholder="Ваше имя" className="input" value={firstNameValue}*/}
                                {/*onChange={ event => { setFirstNameValue(event.target.value) } } />*/}

                                {/*<input type="text" id='PhoneInput' required maxLength="12"*/}
                                {/*       placeholder="Ваш телефон" className="input" value={PhoneValue}*/}
                                {/*       onChange={event => {*/}
                                {/*           setPhoneValue(event.target.value)*/}
                                {/*       }}/>*/}

                                {/*<input type="text" id='PhoneInput' required maxLength="12"*/}
                                {/*       placeholder="Ваш товар" className="input" value={PhoneValue}*/}
                                {/*       onChange={event => {*/}
                                {/*           setPhoneValue(event.target.value)*/}
                                {/*       }}/>*/}

                                <div className="input-group">
                                    <select required size="1" className="input" name="payMetod"
                                    value={payMetodValue}
                                    onChange={ event => { setPayMetodValue(event.target.value) } }
                                    >
                                        {}
                                        <option value="">Выберите способ оплаты</option>
                                        <option value="На банковскую карточку">На банковскую карточку</option>
                                        <option value="Наложеным платежом">Наложеным платежом</option>
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button className="btn style-3 w100">{loading ? ( 'Отправка...' ) : ( 'подтвердить заказ' ) } </button>
                                </div>
                            </form>

                            <div className="d-none">
                                {data &&
                                <>
                                    {console.log('form send ', data)}
                                    data.createOrder.orderId && (
                                    { typeof window !== 'undefined' &&  localStorage.setItem('lastOrder', JSON.stringify(data) ) }
                                    { typeof window !== 'undefined' &&  localStorage.setItem('AddCart', '' ) }
                                    { navigate('/order') }
                                    )

                                    {/*<pre>{JSON.stringify(data, null, 4)}</pre>*/}
                                </>
                                }
                            </div>

                        </React.Fragment>
                    )}
                </Mutation>

                <div className="text text-center pt-4 pb-1">
                    Нажимая кнопку “оформить покупку/оплатить”, я подтверждаю согласие с условиями
                    <Link className="btn style-6" to="/">электронного договора купли-продажи товаров  </Link>
                </div>
                <div className="text-center mt-2">
                    <div onClick={()=>Step(2)} className="box-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"><g><g>
                            <path fill="#888" d="M4.997 9.663l.94-.94-3.054-3.06h10.78V4.33H2.883l3.06-3.06-.946-.94L.33 4.997z"/></g></g></svg>
                        <span className="btn style-6 ml-1">Назад к доставке</span>
                    </div>
                </div>

            </div>

            {/*<form*/}
            {/*    onSubmit={*/}
            {/*        async event => {*/}
            {/*            event.preventDefault()*/}
            {/*            createOrder({*/}
            {/*                variables: {*/}
            {/*                    clientMutationId: 'BuyOneClick',*/}
            {/*                    firstName: firstNameValue,*/}
            {/*                    phone: PhoneValue,*/}
            {/*                    //productId: productIdValue,*/}
            {/*                    //product: ProductValue*/}
            {/*                }*/}
            {/*            })*/}
            {/*        }*/}
            {/*    }*/}
            {/*>*/}


            {/*    <div className="input-group">*/}
            {/*        <input type="text" id='firstNameInput' value={firstNameValue}*/}
            {/*               required*/}
            {/*               className="input"*/}
            {/*               placeholder="Ваше имя"*/}
            {/*               onChange={event => {*/}
            {/*                   setFirstNameValue(event.target.value)*/}
            {/*               }}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="input-group">*/}
            {/*        <input type="tel" id='PhoneInput'*/}
            {/*               required*/}
            {/*               maxlength="12"*/}
            {/*               placeholder="Ваш телефон"*/}
            {/*               className="input"*/}
            {/*               value={PhoneValue}*/}
            {/*               onChange={event => {*/}
            {/*                   setPhoneValue(event.target.value)*/}
            {/*               }}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <button type="submit" className="btn style-3 w100">{loading ? ( 'Отправка...' ) : ( 'Купить' ) } </button>*/}
            {/*</form>*/}




        </>
    )

}