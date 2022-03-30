// Proses Argv : bisa mengambil input dari terminal
// Command : show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController =  require('./controller/TodoController');
// console.log(command);
// console.log(params);

switch (command) {
    case 'show':        
        TodoController.show();
        break;
    case 'add':
        // console.log("command add");
        TodoController.add(params);
        break;
    case 'delete':
        // console.log("command delete");
        TodoController.delete(params);
        break;
    case 'update':
        // console.log("command update");
        TodoController.update(params);
        break;
    default:
        // console.log("command tidak sesuai");
        TodoController.message("Command tidak tersedia");
        break;
}