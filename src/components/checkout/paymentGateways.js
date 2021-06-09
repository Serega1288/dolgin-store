import React from "react"
//import { StaticQuery, graphql } from "gatsby"
//import gql from "graphql-tag";

import { gql, useQuery } from '@apollo/client';

const GET_GATEWAYS = gql`
    query MyQuery {
      paymentGateways(where: {all: false}) {
        edges {
          node {
            id
            title
            description
          }
          cursor
        }
      }
    }
`;

//
// const PaymentGateways = gql`
//     query MyQuery {
//       paymentGateways(where: {all: false}) {
//         edges {
//           node {
//             id
//             title
//             description
//           }
//           cursor
//         }
//       }
//     }
// `


const ComponentName = () => {
    const { loading, error, data } = useQuery(GET_GATEWAYS);

    if (loading) return '<option value="">...Загрузка</option>';
    if (error) return `<option value=""> Error! ${error.message} </option>`;


    ( typeof window !== 'undefined' ) && localStorage.setItem('paymentGateways', JSON.stringify( data.paymentGateways.edges ) );

    return (
        <>
            <option value="">Выберите способ оплаты</option>
            {data.paymentGateways.edges.map(item => (
                <option value={item.node.id}>
                    {item.node.title}
                </option>
            ))}
        </>
    );
}
export default ComponentName

// const ComponentName = () => (
//      <>
//          <pre>{JSON.stringify(PaymentGateways, null, 40)}</pre>
//      </>
// )
//
// export default ComponentName