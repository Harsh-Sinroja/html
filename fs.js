const fs = require("fs");

const writeFile = () => {
    fs.writeFile("temp.txt", "Hello World!", (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("File created successfully");
        }
    });
}

const appendFile = () => {
    fs.appendFile("temp.txt", "\nHello Harsh", (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Data appended successfully!");
        }
    });
}

const readFile = () => {
    fs.readFile("temp.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(data);
        }
    });
}

const renameFile = () => {
    fs.rename("temp.txt", "text.doc", (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("File renamed successfully!");
        }
    });
}

const deleteFile = () => {
    fs.unlink("text.doc", (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("File deleted successfully");
        }
    });
}

module.exports = { writeFile, appendFile, readFile, renameFile, deleteFile }