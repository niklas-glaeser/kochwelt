async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function goMenuTacco(){
  window.location.href="recipe-pages/taco-salat.html"
}

function frontpage(){
  window.location.href="/index.html"
}

function goMenuCrossi() {
  window.location.href="/recipe-pages/crossaints.html"
}

function goMenuTortellini() {
  window.location.href="recipe-pages/tortellini-erbsen-auflauf.html"
}

function goMenuLasagne() {
  window.location.href="/recipe-pages/italienische-lasagne.html"
}


