
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const boy = document.getElementById("Boy").value.trim();
    const girl = document.getElementById("Girl").value.trim();

    if (boy === "" || girl === "") {
        document.querySelector('h2').textContent = "Please enter both names!";
        return;
    }

    const l1 = boy.length;
    const l2 = girl.length;

    const result = Math.pow(l1 + l2, 3) % 101;

    document.querySelector('h2').textContent = `Result: ${result}%`;

    form.reset();
});
