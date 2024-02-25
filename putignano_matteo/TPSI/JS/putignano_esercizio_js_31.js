let arr = Array(1, 2, 1, 3, 2, 4);

function nr(a) {
    let set = new Set();
    a.forEach(item => {
        set.add(item);
    });
    return set;
}

console.log(nr(arr));