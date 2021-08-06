// “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”
// Serve para deixar o código mais seguro.
//   (() => { código })()

import CheckItem from './components/checkItem.js';
import DeleteItem from './components/deleteItem.js';

const createTask = (event) => {

    event.preventDefault();
    //"event" é um objeto que possui um método chamado "preventDefault()" quer vai ser executado e vai evitar com que a página recaregue ao clicar no botão;

    const listTask = document.querySelector('[data-list]');
    const inputTask = document.querySelector('[data-form-input]');
    //conectar e selecionar o input;
    const valueInputTask = inputTask.value;
    //pegar valor de inputTask;

    const item = document.createElement('li');
    item.classList.add('item');
    //adicionar a class para a estilização;
    const contentTask = `<p data-task>${valueInputTask}</p>`;
    item.innerHTML = contentTask;
    listTask.appendChild(item);
    //coloca também coloca um item abaixo do outro;

    item.appendChild(CheckItem());
    item.appendChild(DeleteItem());

    inputTask.value = " ";
    //Pra ficar vazio o input após o click;
}

const btnTask = document.querySelector('[data-form-button]');
btnTask.addEventListener('click', createTask);