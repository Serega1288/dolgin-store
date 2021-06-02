import React from 'react';
//import {Link} from "gatsby";
//import { DispatchContext } from '../components/layout'
import { Step } from '../../templates/checkout'

function FormRegister() {

    return (
        <form action="" className="mt-3 mb-3">
            <div className="input-group">
                <input required placeholder="Имя" name="name" className="input" type="text"/>
            </div>
            <div className="input-group">
                <input required placeholder="Фамилия" name="lastname" className="input" type="text"/>
            </div>
            <div className="input-group">
                <input required placeholder="Ваш телефон" name="phone" className="input" type="phone"/>
            </div>
            <div className="input-group">
                <input required placeholder="Ваш email" name="email" className="input" type="email"/>
            </div>
            <div className="input-group">
                <input required placeholder="Ваш пароль" name="password" className="input" type="password"/>
            </div>
            <button onClick={()=>Step(2)} className="btn style-3 w100">зарегистрироваться</button>
        </form>
    )
}
export default FormRegister


