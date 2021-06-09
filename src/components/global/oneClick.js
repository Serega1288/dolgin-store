import React, {useContext} from "react"
import { DispatchContext } from './layout'

const  OneClick = ({id, dataClass, nameProduct}) => {
    const dispatch = useContext(DispatchContext);

    const onBuyOneClick = () => {
        dispatch({
            type: 'setFormProduct',
            payload: {
                id,
                title: nameProduct
            }
        })

        dispatch({
            type: 'toggleFormStatus',
            payload: true
        })
    }

    return (
        <button onClick={ onBuyOneClick } className={dataClass} >
            Купить в 1 клик
        </button>
    )
}
export default OneClick