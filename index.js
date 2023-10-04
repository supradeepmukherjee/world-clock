setInterval(() => {
    d = new Date()
    ind.innerHTML = d.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(', ')[1]

    tw.innerHTML = d.toLocaleString('en-IN', { timeZone: 'Asia/Taipei' }).split(', ')[1]
    jp.innerHTML = d.toLocaleString('en-IN', { timeZone: 'Asia/Tokyo' }).split(', ')[1]
    if (d.getHours() == alarm.value.split(':')[0] && d.getMinutes() == alarm.value.split(':')[1]) {
        new Audio('D:/YTD/Sia - Unstoppable (Lyrics)').play()
    }
}, 1000);