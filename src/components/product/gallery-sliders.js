import React from "react";
import get_image_size from "../global/get_image_size";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySliders = ({ gallery }) => {
    const settings = {
        className: "slider variable-width",
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        swipeToSlide: true,
    };

    return (
        <div className='BoxCarousel'>
            <Slider {...settings}>
                <div>
                    <img className="fistImageProduct" src={get_image_size(gallery.image, 'single-product')} alt=""/>
                </div>
                {
                    gallery.galleryImages.nodes.map((node, i) => {
                        return <div><img src={get_image_size(node, 'single-product')} alt=""/></div>
                    })
                }
                <div>
                    <img src={get_image_size(gallery.image, 'single-product')} alt=""/>
                </div>
            </Slider>
        </div>

    )
}
export default GallerySliders