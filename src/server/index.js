const server = require("server");
const tasksMethods = require("./tasks/methods")
const {error} = server.router;
const {status, header} = server.reply;

const cors = [
    () => header("Access-Control-Allow-Origin", "*"),
    () => header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    () => header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, HEAD"),
    ctx => ctx.method.toLowerCase() === 'options' ? 200 : false
];

server({port: 8000, security: {csrf: false}}, cors, [
    ...tasksMethods,
    error((ctx) => {
        console.log(ctx.error.message);
        return status(500).send(ctx.error.message)
    }),
]).then(() => console.log('server started'));
