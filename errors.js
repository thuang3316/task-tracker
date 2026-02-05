import fs from "fs";

export function handleNoTasksError(jsonPath) {
    if (!fs.existsSync(jsonPath)) {
        throw new Error("No tasks available, use node index.js create to create tasks");
    }
}

export function handleIndexError(index, tasks) {
    if (!Number.isInteger(index)) {
        throw new Error("Index must be an integer");
    } else if (index < 0 || index >= tasks.length) {
        throw new Error("Index out of range");
    }
}