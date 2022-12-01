// import {Component} from 'react'
import './employees-list-item.css';

    const EmployeesListItem = (props) => {
// class EmployeesListItem extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         rise: false
    //         // теперь состояния этого компанента контралируются методами onToggleIncrease onToggleRise каторые находятся в app.js
    //         // и методы onIncrease onRise и конструктор уже не нужны
    //         // можно переделать этот компанент из клссового в функциональный
    //     }

    // }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({ // колбек в себя принимает 1 аргумент (state) 
    //         //и мы его диструктуризируем {increase} что бы не псать state.increase 
    //         increase: !increase
    //     }))
    // }

    // onRise = () => {
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }
    
    
    // const {name, salary, onDelete, onToggleIncrease, onToggleRise} = this.props;  // достаём из пропсов и функцю удаления
    // const {increase, rise} = this.state;
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let className = 'list-group-item d-flex justify-content-between';

    if (increase) {
        className += ' increase';
    }

    if (rise) {
        className += ' like';
    }


    return (
        // <li className="list-group-item d-flex justify-content-between">
        <li className={className}>
            {/* <span className="list-group-item-label" onClick={this.onRise}>{name}</span> */}
            <span className="list-group-item-label"
                onClick={onToggleProp} 
                data-toggle="rise"
                // Inline назначаются через атрибут style={} в реакте он принимает в себя объект со стилями
                // px можно не прописывать реакт подставляет их сам но только пиксели другие значения помещаем в кавычки как строку
                // это удобно если нам приходит объект с готовыми стилями его так же можно вынести в отдельную переменную
                // но если использовать тольк оинлайн стили есть одно проблема
                // вендерные префиксы автоматически подставляться не будут это стили каторые позволяют нрмально отрисовывать 
                // элимент во всех браузерах
                // style={{fontSize: 40, color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all'}}
                // style={{fontSize: '40em'}}
                >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    // onClick={this.onIncrease}>
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    
}

export default EmployeesListItem;