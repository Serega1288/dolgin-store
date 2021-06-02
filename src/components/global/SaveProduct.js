import SaveOk from "../../images/save-ok.svg";
import Save from "../../images/save.svg";
import React from "react";
import {Link} from "gatsby";

const SaveProduct = ({ id, htmlStyle }) => {

    const [active, setSaveProduct] = React.useState(typeof window !== 'undefined' && (localStorage.getItem('active-save[' + id + ']')) === 'true');

    React.useEffect(() => {


        typeof window !== 'undefined' && localStorage.setItem('active-save[' + id + ']', active);
        if ( active === false ) {
            typeof window !== 'undefined' && localStorage.removeItem('active-save[' + id + ']');
        }

        const arrayOfKeys = Object.keys( typeof window !== 'undefined' && (localStorage) );
        let name, result, array = [];
        {
            arrayOfKeys.forEach((el) => {
                name = el[0]+el[1]+el[2]+el[3]+el[4]+el[5]+el[6]+el[7]+el[8]+el[9]+el[10]
                if ( name == 'active-save' ) {
                    result = el.replace('active-save[','').replace(']','');
                    console.log( result );
                    array.push( result )
                }
            })
            typeof window !== 'undefined' && localStorage.setItem('array-active-save', JSON.stringify(array) )
            console.log( array, array.length )
            if ( array.length == 0 ) {
                document.querySelector(".body .page-save span").classList.remove('active')
            } else {
                document.querySelector(".body .page-save span").classList.add('active')
            }
        }

    }, [active]);


    const toggleSaveProduct = () => {
        setSaveProduct(!active);

    };

    return (
        <>
            {htmlStyle === 'remove' ? (
                <Link to="/save" id={`product-${id}`} className={`save ${active ? 'active' : ''}`} onClick={toggleSaveProduct} className="btn style-2 w100 mt-auto">
                    удалить
                </Link>
            ) : (
                <span id={`product-${id}`} className={`save ${active ? 'active' : ''}`} onClick={toggleSaveProduct}>
                    {  active ? ( <img src={SaveOk} alt=""/> ) : ( <img src={Save} alt=""/> ) }
                </span>
            )}
        </>
    )
}
export default SaveProduct
