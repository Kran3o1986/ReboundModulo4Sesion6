function mostrarHora(country, element) {
    let d = new Date();

    let timezoned = d.toLocaleString("es-CL", {
        timeZone: country,
        timeStyle: "medium",
        hourCycle: "h24",
    });

    timezoned = timezoned.split(":");
    if (timezoned[0] === "24") timezoned[0] = "00";

    document.getElementById(element).innerHTML = timezoned.join(":");
}

//SANTIAGO
mostrarHora("America/Santiago", "horaCL");

setInterval(function () {
    mostrarHora("America/Santiago", "horaCL");
}, 1000);

//PARIS
setTimeout(function () {
    mostrarHora("Europe/Paris", "horaFR");

    setInterval(function () {
        mostrarHora("Europe/Paris", "horaFR");
    }, 1000);
}, 4000);

//LONDRES
setTimeout(function () {
    mostrarHora("Europe/London", "horaGB");

    setInterval(function () {
        mostrarHora("Europe/London", "horaGB");
    }, 1000);
}, 8000);

//NEW YORK
setTimeout(function () {
    mostrarHora("America/New_York", "horaUS");

    setInterval(function () {
        mostrarHora("America/New_York", "horaUS");
    }, 1000);
}, 12000);

//ST PETERSBURG
setTimeout(function () {
    mostrarHora("Europe/Moscow", "horaRU");

    setInterval(function () {
        mostrarHora("Europe/Moscow", "horaRU");
    }, 1000);
}, 16000);

//BEIJING
setTimeout(function () {
    mostrarHora("Asia/Singapore", "horaCN");

    setInterval(function () {
        mostrarHora("Asia/Singapore", "horaCN");
    }, 1000);
}, 20000);

//SEOUL
setTimeout(function () {
    mostrarHora("Asia/Seoul", "horaKR");

    setInterval(function () {
        mostrarHora("Asia/Seoul", "horaKR");
    }, 1000);
}, 24000);