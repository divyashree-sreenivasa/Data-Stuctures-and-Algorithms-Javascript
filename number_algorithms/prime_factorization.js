function primeFactors(number) {
    primeFactorsArr = [];

    while(number % 2 == 0) {
        primeFactorsArr.push(2);
        number /= 2;
    }

    for(let i = 3; i*i<=number; i+=2) {
        while(number % i == 0) {
            primeFactorsArr.push(i);
            number /= i;
        }
    }

    if(number > 2) {
        primeFactorsArr.push(number);
    }

    return primeFactorsArr;
}