import React from "react";
import {Link} from "gatsby";
import SaveOk from "../../images/save-ok.svg";
import Save from "../../images/save.svg";


/*

<div className="list-line list-line-1"></div>
<div className="list-line list-line-2 active">
   <span></span> <span></span> <span></span> <span></span>
</div>

 */
/*
function ColProduct() {


    // const [active, setSaveProduct] = React.useState(localStorage.getItem('active-save') === 'true');
    //
    // React.useEffect(() => {
    //     localStorage.setItem('active-save', active);
    //     if ( active === false ) {
    //         localStorage.removeItem('active-save');
    //     }
    // }, [active]);


    const is = React.useState( localStorage.getItem('colProduct') )

    const active = localStorage.getItem('colProduct')
    console.log('active', active, is[0])

    React.useEffect(() => {
        localStorage.setItem('active-save', active);
        if ( active === false ) {
            localStorage.removeItem('active-save');
        }
    }, [is]);

    function colProduct(item) {
        console.log('active', item )

        localStorage.setItem('colProduct', item);
        //document.querySelector(".body .list-line").classList.remove('active')
        //document.querySelector(".body .list-line-" + item + " ").classList.add('active')
    }

    return (
        <>
            <div className={`list-line list-line-1 ${ active == 1 && 'active' } `} onClick={ colProduct(1) } ></div>

            <div className={`list-line list-line-2 ${ active == 2 && 'active' } `} onClick={ colProduct(2) } >
                <span></span> <span></span> <span></span> <span></span>
            </div>
        </>
    )
}
export default ColProduct
*/



const ColProduct = () => {

    const [active, setCol] = React.useState( typeof window !== 'undefined' && ( localStorage.getItem('colProduct') ) );

    React.useEffect(() => {
        typeof window !== 'undefined' && ( localStorage.setItem('colProduct', active) );
    }, [active]);

    const colProduct = (item) => {
        setCol(item);
        console.log(item);

        var buttons = document.querySelector(".navbar + .box-products .productItem"),
            len = buttons != null ? buttons.length : 0,
            i = 0;
        for(i; i < len; i++){
            buttons[i].className += " btn";
        }

        if ( item == 1 ) {
            document.querySelector(".navbar + .box-products").classList.remove('row-cols-2')
            document.querySelector(".navbar + .box-products").classList.add('row-cols-1')
        } else {
            document.querySelector(".navbar + .box-products").classList.remove('row-cols-1')
            document.querySelector(".navbar + .box-products").classList.add('row-cols-2')
        }

    };




    return (
    <>
        <div className={`list-line list-line-1 ${ active == 1 && 'active' } `} onClick={ () => colProduct(1) } ></div>
        <div className={`list-line list-line-2 ${ active == 2 && 'active' } `} onClick={ () => colProduct(2) } >
            <span></span> <span></span> <span></span> <span></span>
        </div>
    </>
    );

}
export default ColProduct


/*

<div className={`app-wrapper ${dark ? 'dark' : ''}`}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                <img src="https://felixgerschau.com/logos/lightbulb.svg" height="100px" width="100px"/>
                <h2>Click me!</h2>
            </button>
        </div>
 */


// npm i apollo-boost graphql-tag --save
// react-apollo
