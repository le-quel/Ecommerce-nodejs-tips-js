const app = require("./src/app");
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`MVS eCommerce started successfully on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('Express server has been closed.'));
});
