// Function returning a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000); // Simulate a 2-second delay
    });
}

// Async function using await
async function getData() {
    console.log("Fetching data...");
    let result = await fetchData(); // Waits for fetchData() to resolve
    console.log(result); // "Data received"
}

getData();



//---------------------Error handling Async/Await----------------------------

function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data received");
            } else {
                reject("Error fetching data");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

async function getData(success) {
    try {
        console.log("Fetching data...");
        let result = await fetchData(success); // Waits for fetchData() to resolve or reject
        console.log(result); // "Data received" or nothing if there's an error
    } catch (error) {
        console.error(error); // Handle error
    }
}

getData(true);  // Will log "Data received"
getData(false); // Will log "Error fetching data"
