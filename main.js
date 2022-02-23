function factorial(n) {
    if (Number(n) == 0) {
        return 1; 
    }
    return n * factorial(Number(n)-1);
}