
//create a fib function

/*
const fib = function (n) {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(1), fib(2), fib(3), fib(4), fib(5)); */

let mem = {};
const fibWithMemorization = function (n) {
    if (n in mem) return mem[n];
    else if (n <= 0) mem[0] = 0;
    else if (n == 1) mem[1] = 1;
    else
      mem[n] = fibWithMemorization(n - 1) + fibWithMemorization(n - 2);
    return mem[n];
}
 console.log(`first ${10} Fibonacci numbers`)

fibWithMemorization(9);
for(n of Object.values(mem))
{
    console.log(n);
}

