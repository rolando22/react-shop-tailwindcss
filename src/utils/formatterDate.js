export const getDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    day.toString().length === 1 ? day = `0${day}` : '';
    month.toString().length === 1 ? month = `0${month}`: '';

    return `${day}.${month}.${year}`;
};
