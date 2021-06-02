import React from "react";


function FunctionClickMenu() {
    function clickOpenMenu() {
        console.log('click open menu');
        const menu_open = document.querySelector(".menu-open");
        menu_open.classList.toggle("active");
        document.querySelector(".body").classList.toggle('open-menu-box');
    }
    return (
        <div onClick={clickOpenMenu}
             className="menu-open d-xl-none">
            <span></span>
        </div>
    )
}

export default FunctionClickMenu