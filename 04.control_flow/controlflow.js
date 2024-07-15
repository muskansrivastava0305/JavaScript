// // Current Date
// let g1 = new Date(6);
// let g2 = new Date();
// if (g1.getTime() === g2.getTime())
//     console.log("Both  are equal");
// else
//     console.log("Not equal");


let g1 = new Date("2019-08-03");

// (YYYY-MM-DD)
let g2 = new Date("2019-08-03");
if (g1.getTime() < g2.getTime())
    console.log("g1 is lesser than g2");
else if (g1.getTime() > g2.getTime())
    console.log("g1 is greater than g2");
else
    console.log("both are equal");
