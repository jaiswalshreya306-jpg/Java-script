const div = document.getElementById('time');

function updateTime() {
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);