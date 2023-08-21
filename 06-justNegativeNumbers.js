// Faça uma função chamada justNegativeNumbers que receba um número e 
// retorne apenas números negativos. Se o número for zero, retorne apenas zero.

function justNegativeNumbers(num) {

    if(num < 0) {
        return num;
    } else if (num === 0) {
        return 0;
    } else {
        return -num
    }

}



// ________________________ TEST ________________________
console.log('TEST:');
const exampleNumber1 = -2;
const exampleNumber2 = 4;
const exampleNumber3 = 0;
if (justNegativeNumbers(exampleNumber1) === -2 && justNegativeNumbers(exampleNumber2) === -4 && justNegativeNumbers(exampleNumber3) === 0) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________