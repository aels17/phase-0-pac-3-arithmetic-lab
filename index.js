let n = 5;

function add (a, b) {
    return (a += b)
}

function subtract (a, b) {
    return (a -= b)
}

function multiply (a, b) {
    return (a *= b)
}

function divide (a, b) {
    return (a /= b)
}

function increment(n) {
++n;
n;
return (n)
}

function decrement(n) {
    --n;
    n;
    return (n)
    }

function makeInt(n){
    parseInt(n, 10);
    n;
    return parseInt(n, 10);
}

function preserveDecimal(n){
    return parseFloat(n);
}