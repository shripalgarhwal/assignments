import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaField extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form-group">
                <label>{this.props.fieldLabel}</label>
                <textarea type="text"
                    value={this.props.fieldValue} 
                    className="form-control"
                    onChange={this.props.changeValue} ></textarea>
            </div>
        )
    }    
}
TextAreaField.propTypes = {
    fieldValue: PropTypes.string,
    changeValue: PropTypes.func,
    fieldLabel: PropTypes.string,
}
export default TextAreaField;