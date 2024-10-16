import React from "react";

class MyComponent extends React.Component{
state = {
    name: 'huy',
    country: 'Sweden'
}
handleOnChangeName = (event) => {
    this.setState({
        name: event.target.value
    })
}
handleClickButton = () =>{
    alert('Another hello');
}
    render() {
        return (
            <>
                <div className="first"> 
                <input value={this.state.name} type="text" 
                onChange={
                    (event) => this.handleOnChangeName(event)
                    } />
                Hello my name is {this.state.name}.
                </div>
                <div className="second">My country is: {this.state.country}</div>
                <div className="third">
                    <button onClick={() => {alert('Hello')}}>click me</button>
                </div>
                <div className="forth">
                    <button  onClick={() => this.handleClickButton()}>click me again!</button>
                </div>
            </>

        ) 
    }

}

export default MyComponent;