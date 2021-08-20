export const removeRepeatedData = (dates) => {

    const uniqueDates = []
    dates.forEach(date => {
        if (uniqueDates.indexOf(date.formatImputCalendar) === -1){
            uniqueDates.push(date.formatImputCalendar);
        }
    })
    return uniqueDates; 
}


export const orderDates = (date) => {
    date.sort((a, b) => {
        const fistDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
       return fistDate - secondDate
    })
}