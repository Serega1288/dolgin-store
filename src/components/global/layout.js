import React, { useEffect, useReducer } from "react"
import "../../css/bootstrap-reboot.css"
import "../../css/bootstrap-grid.css"
import "./layout.css"
import WrapFooter from './WrapFooter'
import WrapHeader from "./WrapHeader"
//import {graphql, useStaticQuery} from "gatsby";

import PopForm from './PopForm'
import MiniCart from "./miniCart";

/*
import styled, {createGlobalStyle} from 'styled-components';
const GlobalStyles = createGlobalStyle`

`
*/

/**
 * 
 * 
 * {idProduct, value, price, parentIdProduct, attr, sku, titleProduct, fistImageProduct, urlProduct }
 */

const initialState = {
    items: [],
    saveProduct: [],
    popFormStatus: false, // boolean true | false
    popFormProduct: null,  // ONE PRODUCT { title: 'Product', id: 'string' } || null
    popFormThenks: false,
};



function reducer(state, action) {
    switch (action.type) {

        case 'addSave':
            let elemSave = state.saveProduct.find(item => item.id === action.payload.id)
            if (elemSave){
                elemSave.count += action.payload.count
            } else {
                elemSave = action.payload
            }

            return {...state, saveProduct: [...state.saveProduct.filter(item => item.id !== action.payload.id), elem] };


        case 'addCart':
            let elem = state.items.find(item => item.id === action.payload.id)
            if (elem){
                elem.count += action.payload.count
            } else {
                elem = action.payload
            }

            return {...state, items: [...state.items.filter(item => item.id !== action.payload.id), elem] };
        case 'removeCart':

            return {
                ...state,
               items: state.items.filter(item => item.id !== action.payload.id)
            }
        case 'saveItems':
            return {
               ...state,
               items: action.payload
            }
        case 'updateItem':
            console.log('!!!', action)
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id===action.payload.id) {
                        return {...item,count:action.payload.count}
                    } else {
                        return item
                    }
                })
            }
        case 'toggleFormStatus':
            return {
                ...state,
                popFormStatus: action.payload
            }
        case 'setFormProduct':
            return {
                ...state,
                popFormProduct: action.payload
            }
        case 'toggleFormThenks':
            return {
                ...state,
                popFormThenks: action.payload
            }
        default:
            throw new Error();
        }
}

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(() => {})

const Layout = ({ children, page }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('STATE: ----' , state)

    useEffect(() => {
        if (typeof window !== 'undefined' ){
            try {
                const items = JSON.parse(localStorage.getItem('AddCart'))

                console.log('MY SAVED', items)
                if (items) {
                    dispatch({
                        type: 'saveItems',
                        payload: items
                    })
                }
            } catch (error) {
                console.log('error in read cart', error)
            }
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined' ) {
            localStorage.setItem('AddCart', JSON.stringify(state.items))
        }
    }, [state.items])

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <div className={`body page-` +  page }>
                    <WrapHeader />
                    <div className="LayoutWrapper">
                        <MiniCart />
                        {children}
                    </div>
                    <WrapFooter />
                    <PopForm />
                </div>
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default Layout