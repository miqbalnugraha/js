// Proses Argv : bisa mengambil input dari terminal
// Command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
// console.log(command);
// console.log(params);

switch (command) {
    case 'show':
        console.log("command show");
        break;
    case 'add':
        console.log("command add");
        break;
    case 'delete':
        console.log("command delete");
        break;
    case 'update':
        console.log("command update");
        break;
    default:
        console.log("command tidak sesuai");
        break;
}