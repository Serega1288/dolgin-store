import React from "react"
import Layout from "../components/global/layout";
import GetInfoResult from "../components/InfoBox";
import SEO from "../components/global/seo";


export default ({pageContext}) => {
    const order = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('lastOrder') )
    const paymentGateways = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('paymentGateways') )
    const payMetodIndex = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('payMetodIndex') )

    const messageTitle = JSON.stringify( paymentGateways[payMetodIndex-1]?.node.title )
    const messageDescription = JSON.stringify( paymentGateways[payMetodIndex-1]?.node.description )

    return (
        <Layout page='order'>
            <SEO title={pageContext.title} />
            <div className="container">
                {/*<pre>*/}
                {/*    {JSON.stringify(order, null, 10)}*/}
                {/*</pre>*/}
                {/*{payMetodIndex}*/}
                {/*<pre>*/}
                {/*    {JSON.stringify(paymentGateways[payMetodIndex-1].node, null, 10)}*/}
                {/*</pre>*/}

                <GetInfoResult info="save" title={`спасибо за ваш заказ. № ${ order && ( order.createOrder.orderId ) }`}
                               text='Мы свяжемся с Вами в ближайшее время.'
                               html={ `<br><strong>Метод оплаты</strong>: ${messageTitle} <br> <strong>Описаине</strong>: ${messageDescription} ` }
                               classBox='h-100' homeBtn={true} />
            </div>
        </Layout>
    );
}