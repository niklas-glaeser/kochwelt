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
  window.location.href="/recipe-pages/taco-salat.html"
}

function frontpage(){
  window.location.href="index.html"
}

function goMenuCrossi() {
  window.location.href="/recipe-pages/crossaints.html"
}

function goMenuTortellini() {
  window.location.href="/recipe-pages/tortellini-erbsen-auflauf.html"
}

function goMenuLasagne() {
  window.location.href="/recipe-pages/italienische-lasagne.html"
}


/* ALTER CODE
  function Calculate(){
    let amount1= 500;
    let amount2= 1;
    let amount3= 3;
    let amount4= 1;
    let amount5= 4;
    let amount6= 1;
    let amount7= 2;
    let amount8= 100;
    let amount9= 1;
  
    let i = +document.getElementById('inputField').value;
  
    if(i<1){
      i = 1;
      document.getElementById('inputField').value = 1;
    }
  
    document.getElementById('amount1').innerHTML = `${i * amount1 / 4} `;
    document.getElementById('amount2').innerHTML = `${i * amount2 / 4} `;
    document.getElementById('amount3').innerHTML = `${i * amount3 / 4} `;
    document.getElementById('amount4').innerHTML = `${i * amount4 / 4} `;
    document.getElementById('amount5').innerHTML = `${i * amount5 / 4} `;
    document.getElementById('amount6').innerHTML = `${i * amount6 / 4} `;
    document.getElementById('amount7').innerHTML = `${i * amount7 / 4} `;
    document.getElementById('amount8').innerHTML = `${i * amount8 / 4} `;
    document.getElementById('amount9').innerHTML = `${i * amount9 / 4} `;
  }
  */ 

