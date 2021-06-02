import React, { useState } from "react"
import Layout from "../components/global/layout"
import GallerySliders from "../components/product/gallery-sliders"
import InputNumber from "../components/global/step-input"
import './product.css'
import AttrOn from "../images/attr-on"
import AttrOff from "../images/attr-off"
import svgCalc from "../images/calc.svg"
import svgTable from "../images/table.svg"
import {Link} from "gatsby"
import TabArrow from '../images/arrow.svg'
import Reviews from '../components/product/reviews'
import GetProduct from '../components/get-product'
import SaveProduct from "../components/global/SaveProduct";
import OneClick from "../components/global/oneClick";
import AddCart from "../components/global/addCart";
import get_image_size from "../components/global/get_image_size";


function Accordion(name) {
    // document.querySelector(".tab-title").classList.remove('active');
    document.querySelector("#tab-" + name + "-title").classList.toggle('active');
    document.querySelector("#tab-" + name + "-text").classList.toggle('active');
    var height = document.querySelector("#tab-" + name + "-text .box > div").offsetHeight;
    document.querySelector("#tab-" + name + "-text").setAttribute("style", "height:" + height + "px");
}

export default ({pageContext}) => {

    const [count, setCount] = useState(pageContext.variations.nodes.map(i=> 0))
    console.log(pageContext)


    const clearCount =() => {
        setCount(pageContext.variations.nodes.map(i=> 0))
    }

    console.log('Count', count)

return (

    <Layout page="product">
        {/*{<pre>{JSON.stringify(pageContext, null, 4)}</pre>}*/}
        {/*{localStorage.clear()}*/}
        <div className="container product-page">
            <div className="boxImgProduct box-img">
                <GallerySliders gallery={pageContext} />
                <SaveProduct id={pageContext.id}/>
            </div>


            <div className="row product-box-title d-flex align-items-center">
                <div className="col">
                    <h2 className="urlProduct title titleProduct" dangerouslySetInnerHTML={{__html: pageContext.name}} />
                </div>
                <div className="col-auto">
                    <div sku={pageContext.sku} className="sku">
                        {pageContext.sku}
                    </div>
                </div>
            </div>

            <div className="product-box-price row">
                <div className="col">
                    <p className="title-price">Розница:</p>
                    {<div className="box-price" dangerouslySetInnerHTML={{__html: pageContext.variations.nodes[0].price}} />}
                </div>
                <div className="col">

                </div>
                <div className="col">

                </div>
            </div>

            <div parentProduct={pageContext.id} className="product-box-variable-buy" step={pageContext.variations.nodes.length} >
                {/*{<pre>{JSON.stringify( typeof window !== 'undefined' && localStorage , null, 4)}</pre>}*/}
                {/*{localStorage.clear()}*/}
                {pageContext.variations.nodes.map((node, i) => (

                    <div id={'product-variable-' + (i + 1)} className={[( node.stockQuantity === 0 || node.stockQuantity === null ) ? 'box-list status-off row' : ( 'box-list status-on row' ), count[i]>0?'active':''].join(' ') }  >
                        { console.log( 'node.stockQuantity', node.stockQuantity ) }

                        <div className="col d-flex align-items-center w100">
                            <div className="box">
                                <div className="row">
                                    <div className="col-auto">
                                        <div attr={node.attributes.nodes[0].value} variable-buy className={'attr ' + node.attributes.nodes[0].value}>
                                            {node.attributes.nodes[0].value}
                                        </div>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        {( node.stockQuantity === 0 || node.stockQuantity === null )
                                            ? <div><AttrOff /> Нет в наличии</div>
                                            : (
                                                <div><AttrOn /> Есть в наличии </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <InputNumber max={node.stockQuantity} value={count[i]} onChange={(v) => {
                                const oldCounts = [...count]
                                oldCounts[i] = v
                                setCount(oldCounts)
                            }}   />
                        </div>
                    </div>
                ))}
            </div>

            <div className="row pt-2 pb-2 d-flex align-items-center desc-product-link">
                <div className="col">
                    <Link to={`/calc/`} >
                        <img src={svgCalc} /><span>Калькулятор размера</span>
                    </Link>
                </div>
                <div className="col-auto">
                    <Link to={`/table/`} >
                        <img src={svgTable} /> <span>Размерная сетка</span>
                    </Link>
                </div>
            </div>

            <div className="product-box-buy row d-flex align-items-center mb-3">
                <div className="col-md-6 col-12">
                    <AddCart clearCount={clearCount} img={get_image_size(pageContext.image, 'single-product')} url={`/shop/${pageContext.productCategories.slug}/${pageContext.slug}`} product={pageContext} count={count}  dataClass='add-cart btn style-3 w100 mt-3 mb-3' />
                </div>
                <div className="col-md-6 col-12">
                    <OneClick nameProduct={pageContext.name} id={pageContext.databaseId} dataClass='buy-one-click btn style-2 w100 mt-2 mb-2' />
                </div>
            </div>

            <div className="box-content">
                <div className="tab tab-desc">
                    <div id="tab-option-title" className="tab-title" onClick={() => Accordion("option")}>
                        Характеристики <img className="arrow" src={TabArrow} />
                    </div>
                    <div id="tab-option-text" className="tab-text">
                        <div className="box">
                            <div className="table-desc">

                                {pageContext.attributes.nodes.map((node) => (
                                    <div className="attributes d-flex align-items-center">
                                        <div className="row d-flex align-items-center w100">
                                            <div className="col-6 col-left">
                                                {node.name}
                                            </div>
                                            <div className="col-6 col-right">
                                                {node.options.map((node) => (
                                                    <span>{node}<span>;</span> </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab tab-option">
                    <div id="tab-desc-title" className="tab-title" onClick={() => Accordion("desc")}>
                        Описание <img className="arrow" src={TabArrow} />
                    </div>
                    <div id="tab-desc-text" className="tab-text">
                        <div className="box">
                            <div className="pt-2 pb-3" dangerouslySetInnerHTML={{__html: pageContext.description}} />
                        </div>
                    </div>
                </div>

                <div className="tab tab-review">
                    <div id="tab-review-title" className="tab-title" onClick={() => Accordion("review")}>
                        Отзывы <img className="arrow" src={TabArrow} />
                    </div>
                    <div id="tab-review-text" className="tab-text">
                        <div className="box">
                            <div>
                                {(pageContext.reviewCount === 0 ?
                                        (
                                            <>
                                                <h2>Пока нет отзывов</h2>
                                                <div className="BoxBtn">
                                                    <span className="btn style-4 w100">оставить отзыв</span>
                                                </div>
                                            </>

                                        )
                                        : (
                                            <>
                                                <Reviews value={pageContext.reviews.nodes} />
                                                <div className="BoxBtn">
                                                    <span className="btn style-4 w100">оставить отзыв</span>
                                                </div>
                                            </>

                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get-product">
                <div className="title">Часто покупаемые</div>
                <div className="row row-cols-2">
                    <GetProduct ids={"cHJvZHVjdDoyOA=="}/>
                </div>
            </div>

        </div>
    </Layout>
);
}