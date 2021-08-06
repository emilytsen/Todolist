 //Componente (começa com maiúscula):
 const CheckItem = () => {
    const btnCheck = document.createElement('button');
    btnCheck.classList.add('btnItem');

    btnCheck.innerText = '✷';

    btnCheck.addEventListener('click', checkFunction);

    return btnCheck;
}

//Função (começa com minúscula):
const checkFunction = (event) => {

    const actionTarget = event.target;
    //selecionar um alvo de ação;

    const finishedTask = actionTarget.parentElement;
    //vai atingir diretamente o elemento pai;

    finishedTask.classList.toggle('done');
    //true or false
}

//encapsolar apenas o componente (segurança) para a formação de módulos ( Módulos são pequenas partes do código que juntas formam um todo.):

export default CheckItem;