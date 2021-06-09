import React from "react";
import save from "../images/info-save.png"
import {Link} from 'gatsby';

const InfoBox = ({ info , title , text , classBox, homeBtn, html }) => {



    return (
       <>
           <div page={info} className={`boxpage d-flex flex-column justify-content-center align-items-center ${classBox}  ${ homeBtn == true && ( `homeBtn` ) }`}>
               <div>
                   <img src={save} alt=""/>
               </div>
               <div className="title">
                   {title}
               </div>
               <div className="text">
                   {text}
               </div>

               {
                   html && (
                       <div className="html" dangerouslySetInnerHTML={{__html: html }} />
                   )
               }



               {
                   homeBtn == true && (
                   <div className="box-btn">
                       <Link to={`/`} className="btn style-3 w100">
                           вернуться на главную
                       </Link>
                   </div>
                   )
               }

           </div>
       </>
    )

}
export default InfoBox