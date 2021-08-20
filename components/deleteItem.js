const deleteItemFunction = (update, id) => {

    const index = id; 
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'));

    registeredTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(registeredTasks));
    update();
};

const DeleteItem = (update, id) => {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnItem');
    btnDelete.innerText = '✖';

    btnDelete.addEventListener('click', () => deleteItemFunction(update, id));

    return btnDelete;
    //pois está retornando a função

}



export default DeleteItem;