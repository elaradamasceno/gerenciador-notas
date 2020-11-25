export default class Categories{
    constructor(){
        this.categories = [];
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
            func(this.categories);
        });
    }

    createCategory(newCategory){
        this.categories.push(newCategory);
        this.notify();
    }
}