export default class ArrayNotes{
    constructor(){
        this.notes = [];
        this._subscribers = []; 
    }

    register(func){
        // o inscrito será uma função: func
        this._subscribers.push(func);
    }

    unsubscribe(func){
        this._subscribers = this._subscribers.filter(f => f != func);
    }

    notify(){
        this._subscribers.forEach(func => {
            // passando as informações novas
            func(this.notes);
        });
    }

    createNote(title, text, category){
        // create new nota
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(index){
        this.notes.splice(index, 1);
        this.notify();
    }
}

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
}