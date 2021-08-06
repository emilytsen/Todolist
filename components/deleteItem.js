const DeleteItem = () => {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnItem');
    btnDelete.innerText = '✖';

    btnDelete.addEventListener('click', deleteItemFunction);

    return btnDelete;
    //pois está retornando a função para a linha 28;

}

const deleteItemFunction = (event) => {
    const actionTarget = event.target;
    const deleteItem = actionTarget.parentElement;
    deleteItem.remove();
};

export default DeleteItem;