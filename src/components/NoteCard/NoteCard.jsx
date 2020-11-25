import React, { Component } from 'react';
import "./style.css";
import { ReactComponent as DeleteSVG} from '../../assets/img/delete-black.svg';

class NoteCard extends Component {
    delete(){
        const indice = this.props.index;
        this.props.deleteNote(indice);
    }
    render() { 
        return (
            <section className="note-card">
                <header className="note-card_header">
                    <h3 className="note-card_title">{this.props.title}</h3>
                    <DeleteSVG onClick={this.delete.bind(this)}></DeleteSVG>
                    <h4>{this.props.category}</h4>
                </header>
                <p className="note-card_text">{this.props.text}</p>
            </section>
        );
    }
}
 
export default NoteCard;