function parseDate(dateString) {
    const months = {
        'января': 0,
        'февраля': 1,
        'марта': 2,
        'апреля': 3,
        'мая': 4,
        'июня': 5,
        'июля': 6,
        'августа': 7,
        'сентября': 8,
        'октября': 9,
        'ноября': 10,
        'декабря': 11
    };

    // Разделяем строку на компоненты
    const [day, month, year] = dateString.replace(',', '').split(' ');

    // Создаем и возвращаем объект Date
    return new Date(year, months[month], parseInt(day));
}

export {parseDate};