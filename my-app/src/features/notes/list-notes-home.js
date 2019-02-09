import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListNotesHome = (props) => {
    return (
            <div className="text-left">
                <h5>Notes List</h5>
                {
                    props.notesList.map((list) => (
                    <div className="row border-bottom" 
                        key={String(list.noteId)}>
                        <div onClick={props.updateItem.bind(null, list)}
                            className="col-sx-9 col-sm-9 col-md-9 col-lg-9">
                            <div>{list.title}</div>
                            <div>{list.body}</div>
                        </div>
                        <div className="col-sx-3 col-sm-3 col-md-3 col-lg-3 text-right" 
                            onClick={props.deletItem.bind(null, list)}>X
                        </div>
                    </div>
                    
                ))
                }
            </div>
    )
}
ListNotesHome.propTypes = {
    notesList: PropTypes.arrayOf(
        PropTypes.shape({
            noteId: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string
        }).isRequired
    ),
    deletItem: PropTypes.func,
    updateItem: PropTypes.func
}
export default ListNotesHome;