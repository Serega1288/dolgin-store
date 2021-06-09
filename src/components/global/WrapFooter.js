import React from "react";
import {Link} from "gatsby";
import Logo from "../../images/logo.svg";

const WrapFooter = ( ) => (
    <footer className="d-flex align-items-center justify-content-center wrap-footer">
        <Link to="/">
            <img src={Logo} alt=""/>
        </Link>
    </footer>
)

export default WrapFooter