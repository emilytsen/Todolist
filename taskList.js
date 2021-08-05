// “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”
// Serve para deixar o código mais seguro.



(() => {
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
        //adicionar a class para a estilização;
        const contentTask = `<p data-task>${valueInputTask}</p>`;
        task.innerHTML = contentTask;

        task.appendChild(check());

        listTask.appendChild(task);

        //coloca também coloca um item abaixo do outro;
        inputTask.value = " ";
        //Pra ficar vazio o input após o click;

    }


    const btnTask = document.querySelector('[data-form-button]');
    btnTask.addEventListener('click', createTask);

    //componente Botão:
    const check = () => {
        const btnCheck = document.createElement('button');
        btnCheck.classList.add('btnCheck');

        btnCheck.innerText = '✿';

        btnCheck.addEventListener('click', finish);

        return btnCheck;
    }

    const finish = (event) => {

        const btnCheck = event.target;

        const finishedTask = btnCheck.parentElement;

        finishedTask.classList.toggle('done'); //true or false
    }
})()