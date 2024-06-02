function getDayOfWeek() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Проверка корректности введенных данных
    if (!day || !month || !year) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Создание даты
    const date = new Date(year, month - 1, day); // Месяц в JS начинается с 0
    const dayOfWeek = date.getDay();
    
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    document.getElementById('result').textContent = `День недели: ${days[dayOfWeek]}`;
}