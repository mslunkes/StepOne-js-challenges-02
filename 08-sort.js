// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

let exampleArray = [573, 105, 13, 10, 52];

function sort(array) {
    for(let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length - i - 1; x++) {
            if(array[x] > array[x + 1]) {
                let temp = array[x];
                array[x] = array[x + 1];
                array[x + 1] = temp;
            }
        }
    }

    return array
}



// ________________________ TEST ________________________
console.log('TESTS:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if(compareArrays(sort(exampleArray), exampleArray.sort())) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}

// ________________________ TEST ________________________