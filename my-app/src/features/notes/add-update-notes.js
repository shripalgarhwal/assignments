import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import boundActions from "../../state/actions";



const AddNotes = (props) => {
        return (
            <div>
                <div className="col-sm-12 col-md-12 col-lg-12 text-right">
                    <br/>
                    <button className="btn btn-default"
                        onClick={ props.addNotes }>
                        +Add Notes
                    </button>
                </div>
                <div className="text-left">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        props.saveNotes();
                    }}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text"
                                value={props.title} 
                                className="form-control" 
                                onChange={props.changeTitle} />
                        </div>
                        <div className="form-group">
                            <label>Body:</label>
                            <textarea type="text" 
                                value={props.body} 
                                className="form-control" 
                                onChange={props.changeBody} ></textarea>
                        </div>
                        <div className="form-group text-right">
                            <input className="btn btn-primary"
                                type="submit" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
AddNotes.propTypes = {
    body: PropTypes.string,
    title: PropTypes.string,
    saveNotes: PropTypes.func,
    addNotes: PropTypes.func,
    changeTitle: PropTypes.func,
    changeBody: PropTypes.func,
    updateItem: PropTypes.bool,
}
export default AddNotes;