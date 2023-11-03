function getFibonacci (number) {
    if(number == 1) return 0;
    if(number == 2) return 1;

    return getFibonacci(number - 1) + getFibonacci(number - 2);
}

function iterativeFib (number) {
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < number; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[number - 1];
}

module.exports = {getFibonacci, iterativeFib};