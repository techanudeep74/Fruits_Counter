import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
    state = {mango_count: 0, banana_count: 0}
    onMangoIncrement = () => {
        this.setState(prevState => {
            return {mango_count: prevState.mango_count + 1}
        })
    }
    onBananaIncrement = () => {
        this.setState(prevState => {
            return {banana_count: prevState.banana_count + 1}
        })
    }
    render() {
        const {mango_count, banana_count} = this.state
        return (
            <div className="counter-container">
                <div className="card-container">
                    <h1 className="main-heading">
                        Bob ate <span className="count">{mango_count}</span> mangoes <span className="count">{banana_count}</span> bannanas
                    </h1>
                    <div className="image-container">
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className="fruit-img" 
                            alt="mango"/>
                        </div>
                        
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className="fruit-img" 
                            alt="banana"/>
                        </div>  
                    </div>
                    <div className="buttons-container">
                        <button className="button" onClick={this.onMangoIncrement}>Eat Mango</button>
                        <button className="button" onClick={this.onBananaIncrement}>Eat Banana</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default FruitsCounter