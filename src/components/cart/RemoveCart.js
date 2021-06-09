import React, { useContext} from 'react';
import { DispatchContext } from '../global/layout'

function OneClick( {id} ) {

    const dispatch = useContext(DispatchContext)

    const remove = () => {


        dispatch({
            type: 'removeCart',
            payload: {
                id: id
            }
        })

        // const cartProducts = product.variations.nodes.map((item, i) => ({
        //     id: item.id,
        //     price: parseFloat(item.price),
        //     count: count[i],
        //     img: img,
        //     url: url,
        //     name: product.name,
        //     sku: product.sku,
        //     attr: item.attributes.nodes[0].value,
        //     max: item.stockQuantity,
        // }))
        //
        //
        // cartProducts.forEach(item => {
        //     if (item.count>0)
        //         dispatch({
        //             type: 'addCart',
        //             payload: item
        //         })
        //
        //     /**
        //      * remove
        //      *
        //      * dispatch({
        //             type: 'removeCart',
        //             payload: {
        //                 id: item.id
        //             }
        //         })
        //      */
        // })
    };

    return (
        <button onClick={ remove } className="btn style-2 w100 mt-auto">
            Удалить
        </button>
    )
}
export default OneClick