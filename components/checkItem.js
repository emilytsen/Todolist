const checkFunction = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    registeredTasks[id].completed = !registeredTasks[id].completed;
    //! oposto ao que está (true or false)

    localStorage.setItem('tasks', JSON.stringify(registeredTasks));

    update();
}

 const CheckItem = (update, id) => {
    const btnCheck = document.createElement('button');
    btnCheck.classList.add('btnItem');

    btnCheck.innerText = '✷';

    btnCheck.addEventListener('click', () => checkFunction(update, id));

    return btnCheck;
}



//encapsolar apenas o componente (segurança) para a formação de módulos ( Módulos são pequenas partes do código que juntas formam um todo.):

export default CheckItem;