function showDate() {
    var now = new Date();
    var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    document.getElementById('year').textContent = 'Текущий год: ' + now.getFullYear();
    document.getElementById('month').textContent = 'Текущий месяц: ' + months[now.getMonth()];
    document.getElementById('date').textContent = 'Текущая дата: ' + now.getDate();
    document.getElementById('day').textContent = 'День недели: ' + days[now.getDay()];
}