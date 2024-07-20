const pname = ['djkjk', 'jdhk', 'jksjdk']

//forEach in callback function
pname.forEach(function (val) {
    console.log(val);
})

//forEach in arrow function

pname.forEach( (item) => {
   console.log(item);
})

// pname.forEach((item , index, arr) => {
//     console.log(item , index, arr);
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
      languageName: "java",
      languageFileName: "java"  
    },
    {
    languageName: "python",
    languageFileName: "py"
    }
]

mycoding.forEach((item) => {
    //console.log(item.languageName);
    console.log(item)
});