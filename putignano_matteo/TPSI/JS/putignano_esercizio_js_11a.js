let numeri = [1, 2, 3];

function rev(n){
    let array = Array(numeri.length);
    n.map((num) => {
        let pos = n.length - n.indexOf(num) -  1;
        array.splice(pos, 1, num);
    });
    return array; l
}

console.log(rev(numeri));