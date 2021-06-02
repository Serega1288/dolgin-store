import React, { useContext} from 'react';
import {Link} from "gatsby";
import { DispatchContext } from './layout'

function OneClick( {dataClass, product, count, clearCount, url, img} ) {

    const dispatch = useContext(DispatchContext)

    const toggleSaveProduct = () => {

        const cartProducts = product.variations.nodes.map((item, i) => ({
            id: item.id,
            price: parseFloat(item.price),
            count: count[i],
            img: img,
            url: url,
            name: product.name,
            sku: product.sku,
            attr: item.attributes.nodes[0].value,
            max: item.stockQuantity,
            databaseId: item.databaseId,
        }))


        cartProducts.forEach(item => {
            if (item.count>0)
                dispatch({
                    type: 'addCart',
                    payload: item
                })

            /**
             * remove
             * 
             * dispatch({
                    type: 'removeCart',
                    payload: {
                        id: item.id
                    }
                })
             */
        })

        clearCount()

        document.querySelector("#miniCart.miniCart").classList.add('active');
    };

    return (
        <button onClick={ toggleSaveProduct } className={dataClass}>
            Добавить в корзину
        </button>
    )
}
export default OneClick