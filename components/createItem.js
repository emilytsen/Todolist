import {
    chargeItem
} from './chargeItem.js';
import CheckItem from './checkItem.js';
import DeleteItem from './deleteItem.js';

export const handleNewItem = (event) => {
    event.preventDefault();
    //"event" é um objeto que possui um método chamado "preventDefault()" quer vai ser executado e vai evitar com que a página recaregue ao clicar no botão;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    // "|| []" significa que se o local storage estiver vazio, o tasks iniciará como um array vazio;

    const inputTask = document.querySelector('[data-form-input]');
    //conectar e selecionar o input;
    const valueInputTask = inputTask.value;
    //pegar valor de inputTask;

    const inputCalendar = document.querySelector('[data-date-input]');
    const valueImputCalendar = moment(inputCalendar.value);
    const time = valueImputCalendar.format('HH:mm');
    const formatImputCalendar = valueImputCalendar.format('DD/MM/YYYY');
    const completed = false;

    const data = {
        valueInputTask,
        formatImputCalendar,
        time,
        completed
    }

    const updatedTasks = [...tasks, data];

    //informações sobre o Web Storage: (recurso do navegador)
    //https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API

    //SESSION TORAGE:
    //sessionStorage.setItem("tarefas", JSON.stringify(data)); 
    //chave, valor (em formato de string)
    //"setItem": método que armazena dados pelo sessionStorage;
    //objeto JASON para converter formatos de valores;
    //informações sobre JASON:
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON

    //LOCAL STORAGE:
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    inputTask.value = " ";
    //Pra ficar vazio o input após o click;

    chargeItem();

}

export const CreateTask = ({
    valueInputTask,
    time,
    completed
}, id) => {

    const item = document.createElement('li');
    item.classList.add('item');
    //adicionar a class para a estilização;
    const contentTask = `<p data-task>${time} ${valueInputTask}</p>`;
    if(completed){
        item.classList.add('done');
    }

    item.innerHTML = contentTask;

    item.appendChild(CheckItem(chargeItem, id));
    item.appendChild(DeleteItem(chargeItem, id));

    return item;

}