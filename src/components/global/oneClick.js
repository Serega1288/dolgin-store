import React from "react"

const  oneClick = ({id, dataClass, nameProduct}) => {
    function BuyOneClick() {
        document.querySelector(".PopBox.BuyOneClick").classList.add('active');
        //document.querySelector(".PopBox.BuyOneClick .idProduct").setAttribute('value', id)
        document.querySelector(".PopBox.BuyOneClick .nameProduct").innerHTML = nameProduct;
        //console.log(nameProduct);
    }
    return (
        <div onClick={ BuyOneClick } id={id} className={dataClass} >
            Купить в 1 клик
        </div>
    )
}
export default oneClick