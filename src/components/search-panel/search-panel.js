import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdataSearch = (e) => { // методы можно называть точно также как и в app.js этот мето будет работать локально внутри этого компанента
        const term = e.target.value;
        this.setState({term}); // записываем в состояние то что ввёл пользователь
        this.props.onUpdataSearch(term); // прокидываем состояние наверх в app.js
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdataSearch}/>
        )
    }
}

export default SearchPanel;