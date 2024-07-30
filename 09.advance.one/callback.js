
//---------Callback=---------------------------------------

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

//----------------Asyncrounous-----------------------------

function doTask(callback) {
    setTimeout(() => {
        console.log("Task completed");
        callback();
    }, 2000); // Simulates a task that takes 2 seconds
}

function afterTask() {
    console.log("This runs after the task is completed");
}

doTask(afterTask);

