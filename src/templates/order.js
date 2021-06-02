import React from "react"
import Layout from "../components/global/layout";
import GetInfoResult from "../components/InfoBox";


export default ({pageContext}) => {
    const order = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('lastOrder') )
    return (
        <Layout page='order'>
            <div className="container">
                {/*<pre>*/}
                {/*    {JSON.stringify(order, null, 10)}*/}
                {/*</pre>*/}

                <GetInfoResult info="save" title={`спасибо за ваш заказ. № ${ order && ( order.createOrder.orderId ) }`} text="Мы свяжемся с Вами в ближайшее время." classBox='h-100' homeBtn={true} />
            </div>
        </Layout>
    );
}