import React from "react"

function get_image_size(imgItem, size) {
    try {
        var index, src;
        for (index = 0; index < imgItem.mediaDetails.sizes.length; ++index) {
            if ( imgItem.mediaDetails.sizes[index].name === size) {
                src = imgItem.mediaDetails.sizes[index].sourceUrl;
            }
        }
        if ( src ) {
            return src;
        } else {
            return imgItem.mediaItemUrl;
        }
    } catch (error) {
        console.warning('error image', error)
        return ''
    }
}

export default get_image_size