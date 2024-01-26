const server = require("server");
const fs = require("fs");
const {generateId} = require("../utils");
const {get, post, del, put} = server.router;
const {json, status} = server.reply;
const dataURI = "./src/server/data.json";
const tasksURI = "/tasks";


const tasksMethods = [
    get(tasksURI, () => {
        const data = JSON.parse(fs.readFileSync(dataURI, 'utf8'))
        return json(data);
    }),
    post(tasksURI, context => {
        const data = JSON.parse(fs.readFileSync(dataURI, 'utf8'))
        data.push({id: generateId(), text: context.data.text})
        fs.writeFileSync(dataURI, JSON.stringify(data))
        return status(201);
    }),
    put(tasksURI, context => {
        const data = JSON.parse(fs.readFileSync(dataURI, 'utf8'))
        const id = context.data.id;
        const index = data.findIndex(item => item.id === id);
        data[index] = {id, text: context.data.text};
        fs.writeFileSync(dataURI, JSON.stringify(data))
        return status(200);
    }),
    del(tasksURI, context => {
        const data = JSON.parse(fs.readFileSync(dataURI, 'utf8'))
        const id = context.data.id;
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1);
        fs.writeFileSync(dataURI, JSON.stringify(data))
        return status(204);
    })
]


module.exports = tasksMethods

