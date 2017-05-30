import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <div>
                <input id="name" className="input-name" type="text" onChange={this.props.name}/>
                <input id="mail" className="input-mail" type="text" onChange={this.props.mail}/>
            </div>
        )
    }
}

export default Form;









