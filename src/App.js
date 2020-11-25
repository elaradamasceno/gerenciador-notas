import React, { Component } from 'react';
import NoteList from './components/NoteList/NoteList';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import ListCategories from './components/ListCategories/ListCategories';

import './assets/App.css';
import './assets/index.css';
import Categories from './data/Categories';
import ArrayNotes from './data/ArrayNotes';

class App extends Component {
    constructor(){
        super();
        this.categories = new Categories();
        this.notes = new ArrayNotes();
    }

    render(){
        return (
            <section className="content">
                <RegistrationForm 
                    createNote={this.notes.createNote.bind(this.notes)}
                    categories={this.categories}>
                </RegistrationForm>

                <main className="main-content">
                    <ListCategories 
                        categories={this.categories} 
                        addCategorie={this.categories.createCategory.bind(this.categories)}>
                    </ListCategories>

                    <NoteList 
                        deleteNote={this.notes.deleteNote.bind(this.notes)}
                        notes={this.notes}>
                    </NoteList>
                </main>

            </section>
        );
    }
}

export default App;