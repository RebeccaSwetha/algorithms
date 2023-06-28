function rfibonacci(n) {
    if (n < 2) {
        return n;
    }
    return rfibonacci(n-1) + rfibonacci(n-2);
}

console.log(rfibonacci(6));