import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import boundActions from "../state/actions";
import ListNotesHome from './notes/list-notes-home';
import AddNotes from './notes/add-update-notes';
import TextInput from './notes/input-field';
import TextAreaField from './notes/textarea-field';


class AppHome extends React.Component {
    constructor(props) {
        super(props);
        this.deleteNotes = this.deleteNotes.bind(this);
        this.updateNotes = this.updateNotes.bind(this);
        this.saveNotes = this.saveNotes.bind(this);
        this.addNotes = this.addNotes.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeBody = this.changeBody.bind(this);

        this.state = {
            selectedItem: {
                noteId: null,
                title: "",
                body: ""
            },
            enableSave: false
        }
    }
    deleteNotes(value) {
        this.props.deleteNotes(value);
    }
    updateNotes(value) {
        this.setState({
            selectedItem: {
                noteId: value.noteId,
                title: value.title,
                body: value.body
            },
            enableSave: true         
        })
    }
    changeTitle(event) {
        const newState = Object.assign({}, this.state.selectedItem, { title: event.target.value });
        this.setState({
            selectedItem: newState
        }, () => {
            this.validateSave();
        });
    }
    changeBody(event) {
        const newState = Object.assign({}, this.state.selectedItem, { body: event.target.value });
        this.setState({
            selectedItem: newState
        }, () => {
            this.validateSave();
        });        
    }
    validateSave() {
        if(this.state.selectedItem.title !== "" && this.state.selectedItem.body !== "" ) {
            this.setState({
                enableSave: true
            });
        } else {
            this.setState({
                enableSave: false
            });
        }
    }
    saveNotes() {
        if(this.state.selectedItem.noteId) {
            this.props.updateNotes({
                noteId: this.state.selectedItem.noteId,
                title: this.state.selectedItem.title,
                body: this.state.selectedItem.body
            });
        } else {
            this.props.saveNotesSubmit({
                title: this.state.selectedItem.title,
                body: this.state.selectedItem.body
            });
        }
        
    }
    addNotes() {
        this.setState({
            selectedItem: {
                noteId: null,
                title: "",
                body: ""
            },
            updateItem: false
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 border-right">
                        <ListNotesHome notesList={this.props.notesList}
                            deletItem={this.deleteNotes}
                            updateItem={this.updateNotes}>
                        </ListNotesHome>
                            
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <AddNotes 
                            enableSave={this.state.enableSave}
                            saveNotes={this.saveNotes}
                            addNotes={this.addNotes}
                            updateItem={this.state.updateItem}
                        >
                            <TextInput 
                                fieldValue={this.state.selectedItem.title}
                                fieldLabel={"Title:"}
                                changeValue={this.changeTitle}></TextInput>
                            <TextAreaField 
                                fieldValue={this.state.selectedItem.body}
                                fieldLabel={"Body:"}
                                changeValue={this.changeBody}></TextAreaField>
                        </AddNotes>
                    </div>
                </div>
            </div>
    )}
}
AppHome.propTypes = {
    notesList: PropTypes.arrayOf(
        PropTypes.shape({
            noteId: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string
        }).isRequired
    )
}
const mapStateToProps = state => {
    return {
        notesList: state.notesList
    }
  }
const mapDispatchToProps = () => {
    return {
        saveNotesSubmit: boundActions.boundAddNotes,
        deleteNotes: boundActions.boundDeleteNotes,
        updateNotes: boundActions.boundUpdateNotes
    }
}
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppHome)
export default Home;
