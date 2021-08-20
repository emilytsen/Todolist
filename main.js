// “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”
// Serve para deixar o código mais seguro.
//   (() => { código })()
import{handleNewItem} from './components/createItem.js'
import{chargeItem} from './components/chargeItem.js'


const btnTask = document.querySelector('[data-form-button]');
btnTask.addEventListener('click', handleNewItem);

chargeItem(); 