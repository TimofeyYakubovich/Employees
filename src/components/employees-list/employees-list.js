import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => { // data приходит массив с объектами 

    const elements = data.map(item => {
    // const elements = data.map((item, i ) => { // i индекс элемента в массиве 
        // map берет исходный массив и изменяет каждый элмент внутри его на выходе получается новый массив
        // item каждый элимент массива
        const {id, ...itemProps} = item;
        // диструктуризация по остаточному принципу отдельно вытаскиваем свойство id а все остальные объединяем в свойство ...itemProps
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            // <EmployeesListItem {...item}/> // можно и так спрет оператор разварачивает объект на отдельные элименты
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                // onDelete={() => console.log('Deleted')}/>  // передаём функцию как пропс таким образом можно связывать несклько 
                // компанентов на разных уровнях из корневого компанента прокидываь ниже функцию
                onDelete={() => onDelete(id)} // передаём функцию onDelete как пропс и в нее 
                // помещаем функцию onDelete которая пришла из app.js и так как в app.js onDelete принимает в себя 1 аргумент id
                // то и сдесь мы можем вызвать ее с аргументом id
            // <EmployeesListItem key={i} {...itemProps}/>
            // запись {...item} то же самое что и name={item.name} salary={item.salary}
        // получается в elements лежит массив с компанентами EmployeesListItem 
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onToggleRise={() => onToggleRise(id)}/>
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
                // сдесь после id надо передать название проперти что конкретно будет менять метод onToggleProp в массиве data в app.js
                // это должна быть строка и она должна быть получена с того элимента на котором происходит событие
                // как вариант можно использовать data- атрибуты их можно назначить со значением строкой которой нам нужно rise и increase
                // они попадут в массив data в нужный объект и буду менять значение на противоположное
                // что бы получить data- атрибут используем объект события e, currentTarget вместо обычного target используем
                // что бы невелировать всплытие событий и получить именно тот элимент который сейчас нужен 
                // getAttribute получаем значение атрибута data-toggle это строка и она передаётся в метод onToggleProp
        )
        
    })
    // console.log(elements);

    return (
        <ul className="app-list list-group">
            {/* <EmployeesListItem name={data[0].name} salary={data[0].salary} />
            <EmployeesListItem name="Alex M." salary={3000} />
            <EmployeesListItem name="Carl W." salary={5000} /> */}
            {elements}
        </ul>
    )
}

export default EmployeesList;

// Lesson 129

// ошибка в консоле Each child in a list should have a unique "key" prop
// это значит что каждый элимент списка EmployeesList должен иметь свой уникальный ключ (свойство) атрибут "key"
// при постоянно изменении DOM структуры в приложении React постоянно перестравивает такие списки 
// внутри Реакта есть алгоритм который позволяет отслеживать какие части приложения изменились и обновоить только их а не все приложение
// Reconciliation алгоритм

// допустим если в этом приложении тег ul поменяется div <ul className="app-list list-group"> 
// то React видя что поменялася корневой элимент перестроет его и всё что внутри его
// если в корневом элименте меняются только какие то атрибуты или классы и тд. то React изменит тольок корневой элимент
// дальше в дочерних элементах алгоритм реконкуляции пойдёт рекурсивно там он смотрит есть ли отличая 
// между старыми каторые удаляются и новыми которые создаются дочерними элиментами
// если он находт отличая в каких то элмента он их перестраивает а остальные останутся нетронутыми
// сравнение идёт просто по порядку если добавился 4 элимент то первые 3 изменены не будут
// но если новый элмент добавлся на 1 позицию то реакт будет думать что весь список элиментов поиенялся потому что то что был 1 стал 2 и тд.
// для этого и нужен атрибут "key" уникальный идентификатор по каторому React будет видить изменился атрбуи или нет

// атрибуты "key" должны быть уникальными только среди их соседий а не глобально
// атрибут "key" необходим только в контексте списков когда испльзуются почти одинаковые элименты
// в других элиментах интерфейса он не нужен

// иногда случается ситуация на бекенде не написали эти уникальные идентификаторы тогда допускается использование индекса элмента 
// в массиве такое допускается только если порядок элиментов меняться не будет

// атрибут "key" нужен для оптимизации скорост работы приложеня