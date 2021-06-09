import React from "react"




export default class IndexPage extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        address1:  "",
    }

    componentDidMount() {

        const payment = typeof window !== 'undefined' && JSON.parse( localStorage.getItem('payment') );
        if ( payment ) {
            this.setState({
                firstName: payment.firstName || "",
                lastName: payment.lastName || "",
                phone: payment.phone || "",
                city: payment.city || "",
                address1: payment.address1 || "",
            })
        }
    }

    handleInputChange = event => {

        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        //alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
        this.props.setStep(3);

        ( typeof window !== 'undefined' ) && localStorage.setItem('payment', JSON.stringify(this.state) );
        console.log('payment', ( typeof window !== 'undefined' ) && JSON.parse( localStorage.getItem('payment') ) )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="box-checkout-title text-center">
                    <strong>получатель</strong>
                </div>
                <div id="payment" className="payment line-bottom pt-3 pb-3">
                    <div className="input-group">
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Имя"
                            className={this.state.firstName.length == 0 ? ( `input error` ) : ( `input valid` ) }
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            className="input"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            required
                            type="phone"
                            name="phone"
                            placeholder="Ваш телефон"
                            className="input"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                <div className="box-checkout-title text-center pt-3">
                    <strong>адрес получения</strong>
                </div>
                <div id="delivery" className="delivery pt-3 pb-3">
                    <div className="input-group">
                        <input
                            required
                            type="text"
                            name="city"
                            placeholder="Город"
                            className="input"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            required
                            type="text"
                            name="address1"
                            placeholder="Выберите отделение новой почты"
                            className="input"
                            value={this.state.address1}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <button className="btn style-3 w100">
                            Продолжить
                        </button>
                    </div>
                </div>

            </form>
        )
    }
}
//
// <form action="">
//     <div className="box-checkout-title text-center">
//         <strong>получатель</strong>
//     </div>
//     <div id="payment" className="payment line-bottom pt-3 pb-3">
//         <div className="input-group">
//             <input required placeholder="Имя" name="name" className="input" type="text"/>
//         </div>
//         <div className="input-group">
//             <input required placeholder="Фамилия" name="lastname" className="input" type="text"/>
//         </div>
//         <div className="input-group">
//             <input required placeholder="Ваш телефон" name="phone" className="input" type="phone"/>
//         </div>
//     </div>
//     <div className="box-checkout-title text-center pt-3">
//         <strong>адрес получения</strong>
//     </div>
//     <div id="delivery" className="delivery pt-3 pb-3">
//         <div className="input-group">
//             <input required placeholder="Город" name="city" className="input" type="text"/>
//         </div>
//         <div className="input-group">
//             <input required placeholder="Выберите отделение новой почты" name="newmail" className="input" type="text"/>
//         </div>
//         <div className="input-group">
//             <button className="btn style-3 w100" onClick={()=>Step(3)}>
//                 Продолжить
//             </button>
//         </div>
//     </div>
// </form>