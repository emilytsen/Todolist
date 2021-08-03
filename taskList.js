const createTask = (event) => {

    event.preventDefault();
    //"event" é um objeto que possui um método chamado "preventDefault()" quer vai ser executado e vai evitar com que a página recaregue ao clicar no botão;

    const listTask = document.querySelector('[data-list]');
    const inputTask = document.querySelector('[data-form-input]');
    //conectar e selecionar o input;
    const valueInputTask = inputTask.value;
    //pegar valor de inputTask;

    const task = document.createElement('li');
    task.classList.add('task');
    const contentTask = `<p class="content">${valueInputTask}</p>`;

    task.innerHTML = contentTask;

    listTask.appendChild(task);
    inputTask.value = " ";
    //Pra ficar vazio o input após o click;

}


const btnTask = document.querySelector('[data-form-button]');

btnTask.addEventListener('click', createTask);