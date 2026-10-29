const parent = document.getElementById('parent');

parent.addEventListener('click', (e) => {
    // Yeh check karega ki click sirf button par hi hua hai ya nahi
    if (e.target.tagName === 'BUTTON') {
        const child = e.target;
        const body = document.querySelector('body');
        body.style.backgroundColor = child.id;
    }
});