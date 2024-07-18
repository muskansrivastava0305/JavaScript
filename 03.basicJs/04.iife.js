// immediately invoked function expressions (IIFE)

// function hello(){
//     console.log(`DB connected`);

// }
// hello();

//-------Named iife
(function hello(){
    console.log(`DB connected`);
})();

//-----unNamed/Parameter iife
( (name) =>  {
    console.log(`db connected two ${name}`);

} )('komal')
