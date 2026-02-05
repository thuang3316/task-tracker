import * as operations from "./operations.js";

function main() {
    const op = process.argv[2];
    if (op === "add") {
        if (process.argv[3]) {
            operations.addTask(process.argv[3]);
        } else {
            throw new Error("Missing argument: content");
        }
        return; 
    } else if (op === "delete") {
        if (process.argv[3]) {
            operations.deleteTask(Number.parseInt(process.argv[3], 10));
        } else {
            throw new Error("Missing argument: index");
        }
        return;
    } else if (op === "update") {
        if (process.argv[3] && process.argv[4]) {
            operations.updateTask(Number.parseInt(process.argv[3], 10), process.argv[4]);
        } else {
            throw new Error("Missing argument, example: node update 1 'do this'");
        }
        return;
    } else if (op === "mark-in-progress") {
        if (process.argv[3]) {
            operations.markInProgress(Number.parseInt(process.argv[3], 10));
        } else {
            throw new Error("Missing argument: index");
        }
    } else if (op === "mark-done") {
        if (process.argv[3]) {
            operations.markDone(Number.parseInt(process.argv[3], 10));
        } else {
            throw new Error("Missing argument: index");
        }
    } else if (op === "list") {
        if (!process.argv[3]) {
            operations.getAllTasks();
        } else {
            if (process.argv[3] === "todo") {
                operations.getTodoTasks();
            } else if (process.argv[3] === "in-progress") {
                operations.getInProgressTasks();
            } else if (process.argv[3] === "done") {
                operations.getDoneTasks();
            } else {
                throw new Error("Options: todo, in-progress, done");
            }
        }
    }
}

main();