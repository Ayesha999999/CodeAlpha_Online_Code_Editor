const html = document.querySelector('.html textarea');
const css = document.querySelector('.css textarea');
const js = document.querySelector('.js textarea');
const result = document.querySelector('#result');

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html', html.value);
    localStorage.setItem('css', css.value);
    localStorage.setItem('js', js.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css}</style>` + localStorage.html;
    result.contentWindow.eval(localStorage.js);
}

// Checking for typing in input field
html.onkeyup = () => run();
css.onkeyup = () => run();
js.onkeyup = () => run();

// Accessing data stored in Local Storage.
html.value = localStorage.html;
css.value = localStorage.css;
js.value = localStorage.js;
