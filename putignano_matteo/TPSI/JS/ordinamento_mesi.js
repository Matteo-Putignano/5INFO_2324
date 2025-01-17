let mesi = ["Marzo", "Giugno", "Gennaio", "Dicembre", "Aprile"];

mesi.sort((m1, m2) => {
    const ordine = {
        "Gennaio": 1,
        "Febbraio": 2,
        "Marzo": 3,
        "Aprile": 4,
        "Maggio": 5,
        "Giugno": 6,
        "Luglio": 7,
        "Agosto": 8,
        "Settembre": 9,
        "Ottobre": 10,
        "Novembre": 11,
        "Dicembre": 12
    };
    return(ordine[m2] - ordine[m1]);
});

console.log(mesi);