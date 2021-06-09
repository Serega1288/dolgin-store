import React from "react";
import Filter from "../images/filter.svg";
import Sort from "../images/sort.svg";
import ListCol from "./global/ListCol"

const Product = () => {

    return (
        <div className="navbar mb-3">
            <div className="row">
                <div className="col">
                    <div className="d-flex d-md-none">
                        <ListCol/>
                    </div>
                </div>
                <div className="col-auto d-flex">
                    <div className="Filter d-flex align-items-center"><img src={Filter} className="mr-1" alt=""/> Сортировка</div>
                    <div className="ml-3 Sort d-flex align-items-center"><img src={Sort} className="mr-2" alt=""/> Фильтр</div>
                </div>
            </div>
        </div>
    )
}

export default Product