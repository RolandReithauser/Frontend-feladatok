function teszt01() {
    try {
        let tesztElem = document.querySelector("div");
        if (tesztElem.classList == "container") {
            document.write("<tr><td>Oldal fő tartalmának igazítása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Oldal fő tartalmának igazítása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Oldal fő tartalmának igazítása</td><td>HIBA</td>");
    }
}
function teszt02() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.classList.contains("text-center")) {
            document.write("<tr><td>Címsor szövegének igazítása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Címsor szövegének igazítása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Címsor szövegének igazítása</td><td>HIBA</td>");
    }
}
function teszt03() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.classList.contains("mt-1")) {
            document.write("<tr><td>Címsor felső margója</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Címsor felső margója</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Címsor felső margója</td><td>HIBA</td>");
    }
}
function teszt04() {
    try {
        let tesztElem = document.querySelector("h1");
        if (tesztElem.classList.contains("mb-5")) {
            document.write("<tr><td>Címsor alsó margója</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Címsor alsó margója</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Címsor alsó margója</td><td>HIBA</td>");
    }
}

function teszt05() {
    try {
        let tesztElem = document.querySelector("table");
        if (tesztElem.classList.contains("table")) {
            document.write("<tr><td>Tábla alap bootstrap formázása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tábla alap bootstrap formázása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tábla alap bootstrap formázása</td><td>HIBA</td>");
    }
}
function teszt06() {
    try {
        let tesztElem = document.querySelector("table");
        if (tesztElem.classList.contains("table-sm")) {
            document.write("<tr><td>Tábla sormagasságának csökkentése</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tábla sormagasságának csökkentése</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tábla sormagasságának csökkentése</td><td>HIBA</td>");
    }
}
function teszt07() {
    try {
        let tesztElem = document.querySelector("table");
        if (tesztElem.classList.contains("table-hover")) {
            document.write("<tr><td>Tábla sor kiemelése ha felé megyünk egérrel</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tábla sor kiemelése ha felé megyünk egérrel</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tábla sor kiemelése ha felé megyünk egérrel</td><td>HIBA</td>");
    }
}
function teszt08() {
    try {
        let tesztElem = document.querySelector("table");
        if (tesztElem.classList.contains("table-striped")) {
            document.write("<tr><td>Tábla csíkozása</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tábla csíkozása</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tábla csíkozása</td><td>HIBA</td>");
    }
}
function teszt09() {
    try {
        let tesztElem = document.querySelector("thead");
        if (tesztElem.classList.contains("table-dark")) {
            document.write("<tr><td>Fejléc színezése</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Fejléc színezése</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Fejléc színezése</td><td>HIBA</td>");
    }
}
function teszt10() {
    try {
        let tesztElem = document.querySelector("tbody");
        if (tesztElem.classList.contains("table-info")) {
            document.write("<tr><td>Tartalom rész színezése</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tartalom rész színezése</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tartalom rész színezése</td><td>HIBA</td>");
    }
}
function teszt11() {
    try {
        let tesztElem = document.querySelectorAll("th");
        if (tesztElem.length == 3) {
            document.write("<tr><td>Tábla fejléc elemeinek száma</td><td>Megfelelő</td>");
        }
        else {
            document.write("<tr><td>Tábla fejléc elemeinek száma</td><td>NEM megfelelő</td>");
        }
    }
    catch {
        document.write("<tr><td>Tábla fejléc elemeinek száma</td><td>HIBA</td>");
    }
}
function allTeszt() {
    document.write("<table class=\"table table-dark\">");
    document.write("<caption>Egységtesztek eredményei</caption>")
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    document.write("</table>");
}
allTeszt();
