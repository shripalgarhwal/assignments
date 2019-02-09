import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form-group">
                <label>{this.props.fieldLabel}</label>
                <input type="text"
                    value={this.props.fieldValue} 
                    className="form-control"
                    onChange={this.props.changeValue} />
            </div>
        )
    }    
}
TextInput.propTypes = {
    fieldValue: PropTypes.string,
    changeValue: PropTypes.func,
    fieldLabel: PropTypes.string,
}
export default TextInput;