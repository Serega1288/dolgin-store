import {Link} from "gatsby";
import React from "react";

const menu = () => {
        return (
            <div className="box-menu-2">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <Link className="icon" to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g><path fill="#888888" d="M7.1 11L6 13h12v2H6c-1.52 0-2.48-1.63-1.75-2.97L5.6 9.59 2 2H0V0h3.27l.94 2h14.8c.76 0 1.24.82.87 1.48L16.3 9.97c-.34.62-1 1.03-1.75 1.03zm.43-2h7.02l2.76-5H5.16zM8 18c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S4.9 16 6 16s2 .9 2 2zm10 0c0 1.1-.9 2-2 2s-1.99-.9-1.99-2 .89-2 1.99-2 2 .9 2 2z"></path></g></g></svg>
                                <span>Корзина</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="icon" to="/save">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19"><g><g><path fill="#888888" d="M20 5.5c0 3.78-3.4 6.86-8.55 11.53L10 18.35l-1.45-1.31C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5zm-9.9 10.05C14.86 11.24 18 8.39 18 5.5c0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36H9.07C8.54 2.99 7.04 2 5.5 2 3.5 2 2 3.5 2 5.5c0 2.89 3.14 5.74 7.9 10.05l.1.1z"></path></g></g></svg>
                                <span>Избранное</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
export default menu