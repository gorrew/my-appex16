import React from 'react';

class Button extends React.Component{
render(){
    return(
        <div>
            <button type="button" className="buttonClass" onClick={this.props.btn}>BTN</button>
        </div>
    )
}
}

export default Button;