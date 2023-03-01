var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id=check.checked;
    if (id==true) {
        location.href="Espanol.html";
    } else {
        location.href="Index.html";
    }
}