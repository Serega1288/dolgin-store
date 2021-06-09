import React from "react"
import {Link} from "gatsby";
import get_image_size from "./global/get_image_size"
import SaveProduct from "./save/SaveProduct"
import OneClick from './global/oneClick'

const Product = ({ article , col }) => {
    function colClass(item) {
        if (item == 1) {
            return 'col-12'
        } else if(item == 2) {
            return 'col-6'
        } else {
            return item
        }
        console.log('colClass', item);
    }
    return (
        // <div className={`productItem col-xl-3 col-lg-3 col-md-4 ${ colClass(col)} `} key={article.id} >
        <div className={`productItem col-xl-3 col-lg-3 col-md-4`} key={article.id} >

            <div className="box-img">
                <Link to={`/shop/${article.productCategories.slug}/${article.slug}`} >
                    {/*<span className="sale"> -30% </span>*/}
                    <img src={  get_image_size(article.image, 'catalog-product') } alt=""/>
                </Link>
                <SaveProduct
                    id={article.id}
                    name={article.name}
                />
            </div>

            <Link to={`/shop/${article.productCategories.slug}/${article.slug}`} >
                <h3 className="product-title">{article.name}</h3>
            </Link>

            <div>
                <div>Цена:</div>
                <div className="box-price" dangerouslySetInnerHTML={{__html: article.price}} />
            </div>
            {/*onClick={this.handleClick}*/}



            <OneClick nameProduct={article.name}
                      id={article.databaseId}
                      dataClass="buy-one-click btn style-1 w100" />

        </div>
    )
}

export default Product