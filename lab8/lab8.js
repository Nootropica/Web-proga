function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Египта: ${today.toLocaleString('ar-EG')}</div>
            <div>Дата и время для локали Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <div>Дата и время для локали Албании: ${today.toLocaleString('sq-AL')}</div>
            <div>Дата и время для локали Германии: ${today.toLocaleString('de-DE')}</div>
            <div>Дата и время для локали Канады: ${today.toLocaleString('en-CA')}</div>
        </div>
    `;
}

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