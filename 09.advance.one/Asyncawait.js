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
