import React from "react";

class MyComponent extends React.Component{
state = {
    name: 'huy',
    country: 'Sweden'
}
    render() {
        let name = 'Huy';

        return (
            <>
                <div className="first"> hello my component, my name is {this.state.name}.</div>
                <div className="second">My country is: {this.state.country}</div>
            </>

        ) 
    }

}

export default MyComponent;