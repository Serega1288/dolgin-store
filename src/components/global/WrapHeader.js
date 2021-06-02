import React, {useContext} from "react";
import MainMenu from "../MainMenu";
import Logo from "../../images/logo.svg";
import {Link} from "gatsby";
import FunctionClickMenu from "./FunctionClickMenu";
import { StateContext } from './layout'


const WrapHeader = ({ children }) => {

    const state = useContext(StateContext)

    function clickMiniCart() {
        document.getElementById("miniCart").classList.toggle("active");
    }
    return (
    <>

        <header className="wrap-header d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-auto d-flex align-items-center">
                    <div className="box-menu d-flex align-items-center">
                        <FunctionClickMenu />
                        <Link
                            className="box-logo" to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="box-menu-open wrap-menu d-none d-xl-flex">
                        <MainMenu />
                    </div>
                </div>
                <div className="col-auto box-icon d-flex align-items-center">
                    <Link
                        className="icon" to="/search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g><g><path fill="#fff" d="M17.49 16L16 17.49l-5-4.99v-.79l-.27-.28A6.471 6.471 0 0 1 6.5 13 6.5 6.5 0 1 1 13 6.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79zM11 6.5C11 4.01 8.99 2 6.5 2S2 4.01 2 6.5 4.01 11 6.5 11 11 8.99 11 6.5z"/></g></g></svg>
                    </Link>
                    <Link
                        className="icon page-save" to="/save">
                        <span></span>
                        {/*{ ( typeof window !== 'undefined' ) && localStorage.getItem('array-active-save').length !== 2 ? ( <span className='active'></span> ) : ( <span></span> ) }*/}



                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19"><g><g><path fill="#fff" d="M20 5.5c0 3.78-3.4 6.86-8.55 11.53L10 18.35l-1.45-1.31C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5zm-9.9 10.05C14.86 11.24 18 8.39 18 5.5c0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36H9.07C8.54 2.99 7.04 2 5.5 2 3.5 2 2 3.5 2 5.5c0 2.89 3.14 5.74 7.9 10.05l.1.1z"/></g></g></svg>
                    </Link>
                    <Link
                        className="icon" to="/user">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g><g><path fill="#fff" d="M8 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H2c.23-.72 3.31-2 6-2zM8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></g></g></svg>
                    </Link>
                    <div className="icon clickMiniCart" onClick={clickMiniCart}>
                        {

                            state.items && state.items.length>0 ? (
                                <span className='active'></span>
                            ) : (
                                <span></span>
                            )

                            // ( (typeof window !== 'undefined' ) && localStorage['AddCart'] !== 'undefined' ) ? (
                            //     ( typeof window !== 'undefined' ) && localStorage.getItem('AddCart').length !== 2 ? (
                            //         <span className='active'></span>
                            //     ) : (
                            //         <span></span>
                            //     )
                            // ) : (
                            //     ( typeof window !== 'undefined' ) && localStorage.setItem('AddCart','[]')
                            // )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g><path fill="#fff" d="M7.1 11L6 13h12v2H6c-1.52 0-2.48-1.63-1.75-2.97L5.6 9.59 2 2H0V0h3.27l.94 2h14.8c.76 0 1.24.82.87 1.48L16.3 9.97c-.34.62-1 1.03-1.75 1.03zm.43-2h7.02l2.76-5H5.16zM8 18c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S4.9 16 6 16s2 .9 2 2zm10 0c0 1.1-.9 2-2 2s-1.99-.9-1.99-2 .89-2 1.99-2 2 .9 2 2z"/></g></g></svg>
                    </div>
                </div>
            </div>
        </div>
    </header>


    </>
)}

export default WrapHeader