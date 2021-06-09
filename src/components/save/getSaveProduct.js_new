import React from "react"
import reviewsCom from '../../images/reviewsCom.svg';
import get_image_size from "../global/get_image_size";
import {Link} from "gatsby";
import SaveProduct from "./SaveProduct";

const getSaveProduct = ({article, ids}) => {

    // function Greeting(props) {
    //     const isLoggedIn = props.isLoggedIn;
    //     if (isLoggedIn) {
    //         return <UserGreeting />;
    //     }
    //     return <GuestGreeting />;
    // }

    return (
        <div className="col-12 col-lg-6 col-xl-6 pt-3 pb-3 line-bottom">
            <div className="row">
                <div className="col-6">
                    <div className="box-img">
                        <Link to={`/shop/${article.productCategories.slug}/${article.slug}`} >
                            {/*<span className="sale"> -30% </span>*/}
                            <img src={  get_image_size(article.image, 'catalog-product') } alt=""/>
                        </Link>

                    </div>
                </div>

                <div className="col-6 d-flex d-flex align-items flex-column">
                    <h3 className="product-title">{article.name}</h3>
                    <div className="sku">{article.slug}</div>
                    <div className="box-price" dangerouslySetInnerHTML={{__html: article.price}} />

                    <SaveProduct id={article.id} htmlStyle={'remove'} />

                </div>
            </div>
        </div>

    )
}
export default getSaveProduct
