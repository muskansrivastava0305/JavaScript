// highr order array loops

// for of loop
// ["" , "" , ""]
///[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}

const greeting = 'Hello JavaScript'
for(const greet of greeting){
    console.log(greet);
}

//Maps 

const map =new Map()
map.set('USA' , "United states of America")//(key,value)
map.set('IN' , "India")
map.set('Fr', "France")
map.set('IN' , "India")
 
console.log(map);
//Map in Loop------------------------------------

for(const [key , value] of map){
    console.log(key, ":=" ,value);
}


// const myobject = {
//     'game1' : 'Nfs',
//     'game2' : 'Ludo'
// }

// for (const [key , value] of Object){
//      console.log(key , ":-" ,value);
// }