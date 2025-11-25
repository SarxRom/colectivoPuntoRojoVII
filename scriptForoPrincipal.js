setTimeout(() => {
    document.getElementById("notificacion").classList.remove("oculto");
}, 60000);

document.getElementById("aceptar").addEventListener("click", () => {
    window.location.href = "inPerfilCompu.html"; 
});

document.getElementById("ver").addEventListener("click", () => {
    window.location.href = "inPerfilCompu.html"; 
});

document.getElementById("rechazar").addEventListener("click", () => {
    document.getElementById("notificacion").classList.add("oculto");
});