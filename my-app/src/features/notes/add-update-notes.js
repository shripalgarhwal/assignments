import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
                        {props.children}
                        <div className="form-group text-right">
                            <input className="btn btn-primary"
                                disabled={!props.enableSave}
                                type="submit" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
AddNotes.propTypes = {
    enableSave: PropTypes.bool,
    saveNotes: PropTypes.func,
    addNotes: PropTypes.func,
    updateItem: PropTypes.bool,
}
export default AddNotes;