import { orderDates, removeRepeatedData } from  '../service/data.js'
import { createDate } from './createDate.js';
export const chargeItem = () => {
    const list = document.querySelector('[data-list]');

    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = " ";
    const uniqueDates = removeRepeatedData(registeredTasks);
    orderDates(uniqueDates);
    uniqueDates.forEach((day) => {
        
        list.appendChild(createDate(day));
    })
}