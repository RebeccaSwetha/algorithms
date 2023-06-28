function rfactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * rfactorial(n-1);
}

console.log(rfactorial(3));