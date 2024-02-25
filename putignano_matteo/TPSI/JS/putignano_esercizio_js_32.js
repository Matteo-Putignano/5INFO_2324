let arr = Array('omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione');

function senza_anagrammi(a){
    function ordina(p){
        return p.split('').sort().join('');
    }

    let set = new Set();
    a.forEach(item => {
        set.add(ordina(item));
    });
    
    let risultato = Array();

    set.forEach(set_item => {
        let it_usato = 0;
        a.forEach(a_item => {
            if(set_item == ordina(a_item) && it_usato == 0)
            {
                risultato.push(a_item);
                it_usato = 1;
            }
        })
    })

    return risultato;
}


console.log(senza_anagrammi(arr));