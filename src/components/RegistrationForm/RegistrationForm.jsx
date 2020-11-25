import React, { Component } from 'react';
import './style.css';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.title = '';
        this.text = '';
        this.category = 'Sem categoria';
        this.state = {
            categories: []
        }

        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount(){
        this.props.categories.register(this._newCategories)
    }

    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newCategories)
    }

    _newCategories(categories){
        this.setState({...this.state, categories});
    }

    _handleTitleChange(event){
        // stopPropagation - evitar a propagação do evento na arvore do html, no DOM.
        event.stopPropagation();
        this.title = event.target.value; 
    }

    _handleTextChange(event){
        event.stopPropagation();
        this.text = event.target.value;
    }

    _handleCategoryChange(event){
        event.stopPropagation();
        this.category = event.target.value;
    }

    _createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render(){
        return(
            <form className="registration-form" onSubmit={this._createNote.bind(this)}>
                <select className="registration-form_input" onChange={this._handleCategoryChange.bind(this)}>
                    <option>Sem Categoria</option>
                    {
                        this.state.categories.map((item, index) => {
                            return ( <option value={item} key={index}>{item}</option> );     
                        })
                    }
                </select>

                <input 
                    type="text" 
                    placeholder="Título"
                    className="registration-form_input"
                    onChange={this._handleTitleChange.bind(this)}>
                </input>

                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota.."
                    className="registration-form_input"
                    onChange={this._handleTextChange.bind(this)}>    
                </textarea>
                
                <button className="registration-form_input registration-form_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default RegistrationForm;