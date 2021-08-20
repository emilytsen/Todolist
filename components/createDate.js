import {CreateTask} from './createItem.js'

export const createDate = (date) => {
    const tasks = JSON.parse( localStorage.getItem('tasks')) || [];
    const dataMoment =  moment(date, 'DD/MM/YYYY');
    const topDate = document.createElement ('li');
    const content = `<P class="contentData"> ${dataMoment.format('DD/MM/YYYY')} </P>`;


    topDate.innerHTML = content;

    tasks.forEach(((task, id) => {
        const day = moment(task.formatImputCalendar, 'DD/MM/YYYY');

        const diff = dataMoment.diff(day);
        if (diff === 0){
            topDate.appendChild(CreateTask(task, id ));
        }
      
    }))

    return topDate;
} 