import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // приложение подобное CRUD создание (англ. create), чтение (read), модификация (update), удаление (delete)
  // 4 базовых операции которые будут присутствовать в этом приложении
  // часто дают как тестовое задание

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
