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