import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListNotesHome extends React.PureComponent {
    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
        this.deletItem = this.deletItem.bind(this);
    }
    updateItem(list) {
        this.props.updateItem(list);
    }
    deletItem(list) {
        this.props.deletItem(list);
    }
    render() {
        return (
            <div className="text-left">
                <div className="row border-bottom pl-3">
                    <h5>Notes List</h5>
                </div>
                
                {
                    this.props.notesList.map((list) => (
                    <div className="row border-bottom" 
                        key={String(list.noteId)}>
                        <div onClick={() => this.updateItem(list)}
                            className="col-sx-9 col-sm-9 col-md-9 col-lg-9">
                            <div>{list.title}</div>
                            <div>{list.body}</div>
                        </div>
                        <div className="col-sx-3 col-sm-3 col-md-3 col-lg-3 text-right" 
                            onClick={() => this.deletItem(list)}>X
                        </div>
                    </div>
                    
                ))
                }
            </div>
        )
    }    
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