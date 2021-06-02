import React, {useContext} from "react"
import Layout from "../components/global/layout";
import BoxMenu2 from "../components/cart/BoxMenu2";

import GetCartAll from "../components/cart/GetCartAll";

export default ({pageContext}) => {
    return (
        <Layout page="cart">
            <BoxMenu2 />
            <div className="container pt-1">
                <div className="row">
                    <GetCartAll />
                </div>
            </div>
        </Layout>
    )
};