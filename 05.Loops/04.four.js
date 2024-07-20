// map using for in loop---------------------
//for in loop for objects

const myobject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby'
}

for (const key in myobject) {
    //console.log((myobject[key]));
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

//in aaray---------

const programming = ['js','c','rb']
    for(const key in programming){
        console.log(key);
    }
