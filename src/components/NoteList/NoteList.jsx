import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './style.css';

class NoteList extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes: []
        }

        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount(){
        this.props.notes.register(this._newNotes);
    }

    componentWillUnmount(){
        this.props.notes.unsubscribe(this._newNotes)
    }

    _newNotes(notes){
        this.setState({...this.state, notes})
    }

    render(){
        return(
            <ul className="note-list">
                {
                    this.state.notes.map((item, index) => {
                        return(
                            <li key={index} className="note-list_item">
                                {/* <span>{item}</span> */}
                                <NoteCard 
                                    index={index}
                                    title={item.title} 
                                    text={item.text}
                                    deleteNote={this.props.deleteNote}
                                    category={item.category}>    
                                </NoteCard>
                            </li>
                        ); 
                    })
                }
            </ul>
        )
    }
}

export default NoteList;