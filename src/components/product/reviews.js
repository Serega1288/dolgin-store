import React from "react"
import reviewsCom from '../../images/reviewsCom.svg';

const Reviews = ({value}) => {
    return (
        <div className="reviews-box">
            {value.map((node) => {
                return (
                    <div className="reviews-list">
                        <div className="row">
                            <div className="col-auto">
                                {
                                    <img className="avatar" src="http://0.gravatar.com/avatar/c2b06ae950033b392998ada50767b50e?s=96&r=g" alt=""/>
                                    /*<img src={node.author.avatar.url} alt=""/>*/
                                }
                            </div>
                            <div className="col">
                                <p className="name"><strong>{node.author.node.name}</strong></p>
                                <p className="data">
                                    {node.date}
                                </p>
                            </div>
                        </div>
                        <div className="boxContent">
                            <div dangerouslySetInnerHTML={{__html: node.content}} />
                            <div className="reviewsCom">
                                <img src={reviewsCom} alt=""/>
                                <span>Ответить</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Reviews