import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';
// в середине 21 года пакет node-sass каторый нужен был для работы препроцессора scss в реакте стал deprecated неподдерживаемый
// сейчас нужно ставить просто пакет sass
// останавливаем сборку ctrl c и устанавливаем пакет sass npm   i sass --save

class EmployeesAddForm extends Component {
    // синтаксис полей классов (class fields)
    // одна из возможностей полей классов записывать методы ввиде стрелочной фенкции что бы закрепить за ними контекст вызыва
    // а не каждый раз биндить методы к экзепляру класса
    // еще одна возможность полей классов создане свойст state без конструктора и без указания this

    // методы и свойства которые можно использовать без создания класса через new называются статическими
    // пока что все методы и свойства которые ми использовали внутри копанента статическими не будут 
    // если вызвать какой нибудь метод EmployeesAddForm.onValueChange() то будет ошибка
    // вызыв метода EmployeesAddForm.onLog(); пройдёт без ошибки потому то он статичный
    // так же можно создавать и статичные свойства и использвать их при вызыве класса console.log(EmployeesAddForm.logged)

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         salary: ''
    //     }
    // }

    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            // prop: e.target.value  // e.target.value значение инпута на котором срабатывает событие
            [e.target.name] : e.target.value 
            // Lesson 134 
            // Управляемые компаненты 
            
            // так можно достучаться до атрибута name [e.target.name] в каждом конкретном интпуте 
            // на котором сработает событие и оно будет записано в стейт

            // у инпутов если мы хотим что бы реакт рендерил форму и кнтралировал ее поведение в ответ на пользовательский ввод
            // то мы должны добовлять атрибут value  в него помещать значение стейта 

            // теперь когда запускается событие onChange метод onValueChange и setState изменяет состояние по совпадение атрибута name
            // и записывает его в state, после setState вызывает render и так как значение value совпадает с значение в state
            // то в value записывается это значение со state
            // тоесть значение value формы в этом случае будет контралироваться реактом 
            // и сам элимент будет называться управляемым компанентом ну в данном случае это управляемый элемент input

            // главное приемущесвто что state синхронизирован с интерфейсом и это даёт нам то что на все изменения интерфейс
            // будет реагировать мгновенно

            // особенно это полезно при валидации данных
            // мы определённое значение провалидировали и зразу его отрпавили в value ну и попутно можно сделать какие то операции

            // существуют и не управляемые компаненты значене полей которых хроняться прямо в дом дереве
            // это плохо потому что мы теряем возможно по правильному использованию инпутов и форм

            // не управляемые компаненты хуже по функционалу чем управляемые компаненты

            // единственный инпут который всегда будет неуправляемый это инпут тайпфаил в него пользователь загружает фаил
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    static onLog = () => { // static теперь этот метод стал статичным
        console.log('Hey')
    }

    static logged = 'on';

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name' // главное что бы значение этих атрибутов совпадали со стейтом
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary' 
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

// EmployeesAddForm.onLog();
// console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;