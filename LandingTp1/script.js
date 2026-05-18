
if (document.getElementById("enviar")) {
    var input_nombre = document.getElementById("nombre")
    var input_experiencia = document.getElementById("exp")
    var input_edad = document.getElementById("edad")
    var input_mail = document.getElementById("mail")
    var input_submit = document.getElementById("enviar")


    input_submit.addEventListener("click", guardarDatos);

function guardarDatos(event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value;
    var valor_mail = input_mail.value;

    console.log(valor_nombre);
    console.log(valor_mail);

    localStorage.setItem("nombre", valor_nombre);
    localStorage.setItem("mail", valor_mail);

    window.location.href = "feedback.html";
}
} else {

if (document.getElementById("nombrefb")) {

    const nombre = localStorage.getItem("nombre");
    const mail = localStorage.getItem("mail");

    document.getElementById("nombrefb").textContent = nombre;
    document.getElementById("mailfb").textContent = mail;
}

    const slides = document.querySelectorAll(".slide");
    const btnPrev = document.querySelector(".anterior");
    const btnNext = document.querySelector(".siguiente");
    const contenedor = document.querySelector(".carrusel-imagenes");

    let indice = 0;

    function actualizarCarrusel() {

        slides.forEach(slide => slide.classList.remove("activa"));

        slides[indice].classList.add("activa");

        const anchoSlide = slides[indice].offsetWidth + 50;

        contenedor.style.transform =
            `translateX(-${indice * anchoSlide}px)`;
    }

    btnNext.addEventListener("click", () => {
        indice++;
        if (indice >= slides.length) indice = 0;
        actualizarCarrusel();
    });

    btnPrev.addEventListener("click", () => {
        indice--;
        if (indice < 0) indice = slides.length - 1;
        actualizarCarrusel();
    });

    actualizarCarrusel();
}