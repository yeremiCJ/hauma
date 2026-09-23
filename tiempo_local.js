const pronostico = document.querySelector("#pronostico");
const ciudad = document.querySelector("#ciudad");
const unidad = document.querySelector("#unidad");
const cookies = document.querySelector("#cookies");
const aceptarCookies = document.querySelector("#aceptar-cookies");

const datos = {
    Santiago: [
        ["Hoy", "🌧️", "lluvia", 18, 24],
        ["Mañana", "☀️", "soleado", 19, 27],
        ["Jueves", "☁️", "nublado", 16, 21],
        ["Viernes", "☀️", "soleado", 21, 26]
    ],
    Arica: [
        ["Hoy", "☀️", "soleado", 20, 28],
        ["Mañana", "☀️", "soleado", 21, 29],
        ["Jueves", "☁️", "nublado", 20, 27],
        ["Viernes", "☀️", "soleado", 22, 30]
    ],
    Valparaíso: [
        ["Hoy", "☁️", "nublado", 14, 20],
        ["Mañana", "🌧️", "lluvia", 13, 19],
        ["Jueves", "☁️", "nublado", 15, 21],
        ["Viernes", "☀️", "soleado", 16, 23]
    ],
    Valdivia: [
        ["Hoy", "🌧️", "lluvia", 10, 17],
        ["Mañana", "🌧️", "lluvia", 11, 18],
        ["Jueves", "☁️", "nublado", 12, 19],
        ["Viernes", "☀️", "soleado", 13, 21]
    ]
};

let ciudadActual = "Santiago";

function convertirTemperatura(temperatura) {
    if (unidad.value === "F") {
        return Math.round((temperatura * 9) / 5 + 32);
    }

    return temperatura;
}

function mostrarPronostico() {
    pronostico.innerHTML = "";

    datos[ciudadActual].forEach((dia) => {
        const [nombre, icono, estado, minima, maxima] = dia;

        pronostico.innerHTML += `
            <article class="tarjeta-tiempo">
                <h3>${nombre}</h3>
                <div class="icono">${icono}</div>
                <div class="estado">${estado}</div>

                <div class="temperaturas">
                    <span class="minima">
                        ${convertirTemperatura(minima)}°
                    </span>
                    <span class="maxima">
                        ${convertirTemperatura(maxima)}°
                    </span>
                </div>
            </article>
        `;
    });
}

document.querySelectorAll("[data-ciudad]").forEach((boton) => {
    boton.addEventListener("click", () => {
        ciudadActual = boton.dataset.ciudad;
        ciudad.textContent = ciudadActual;
        mostrarPronostico();
    });
});

unidad.addEventListener("change", mostrarPronostico);

aceptarCookies.addEventListener("click", () => {
    cookies.classList.add("oculto");
});

mostrarPronostico();