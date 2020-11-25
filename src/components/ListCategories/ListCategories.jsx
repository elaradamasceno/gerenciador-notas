import React, { Component } from 'react';
import './style.css';

class ListCategories extends Component {
    constructor(props){
        super(props)
        this.state = { 
            categories: []
        }

        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount(){
        this.props.categories.register(this._newCategories);
    }

    componentWillUnmount(){
        this.props.categories.unsubscribe(this._newCategories)
    }

    _newCategories(categories){
        this.setState({...this.state, categories})
    }

    _handleEventInput(event){
        event.key == 'Enter' && (
            this.props.addCategorie(event.target.value)
        )
    }

    render() { 
        return ( 
            <section className="list-categories">
                <ul className="list-categories_list">
                    {
                        this.state.categories.map((item, index) => {
                            return (
                                <li key={index} className="list-categories_item">{item}</li>
                            );     
                        })
                    }
                </ul>

                <input 
                    className="list-categories_input" 
                    type="text"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        );
    }
}
 
export default ListCategories;