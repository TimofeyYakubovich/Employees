import './app-filter.css';

const AppFilter = (props) => {
    // когда кнопок много они чаще всего приходят не в качестве готовой верстки а массивом с данными так намного удобней
    // переделаем всё через массив, name это сам филтр
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => { // сразу диструктурируем каждый отдельный объект массива buttonsData
        const active = props.filter === name; // такой записью можно заменить проверку через if 
        const clazz = active ? 'btn-light' : 'btn-outline-light'; 
        // тернарный оператор если active = true то в clazz записывается 'btn-light' если active = false то 'btn-outline-light'
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;