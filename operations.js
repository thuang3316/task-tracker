import fs from "fs";
import { handleIndexError, handleNoTasksError } from "./errors.js";

const jsonPath = "./tasks.json";

export function readTasks() {
    if (fs.existsSync(jsonPath)) {
        const data = fs.readFileSync(jsonPath, "utf-8");
        return JSON.parse(data);
    }
    return [];
}

export function writeTasks(tasks) {
    fs.writeFileSync(jsonPath, JSON.stringify(tasks));
}

// Methods that change tasks.json
export function addTask(content) {
    const tasks = readTasks();
    const id = crypto.randomUUID();
    if (!content) {
        throw new Error("Please enter content.");
    }
    tasks.push({id, content, status: "todo"});
    writeTasks(tasks);
}

export function updateTask(index, content) {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    handleIndexError(index, tasks);

    tasks[index].content = content;
    writeTasks(tasks);
}

export function deleteTask(index) {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    handleIndexError(index, tasks);

    tasks.splice(index, 1);
    writeTasks(tasks);
}

export function markDone(index) {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    handleIndexError(index, tasks);

    tasks[index].status = "done";
    writeTasks(tasks);
}

export function markInProgress(index) {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    handleIndexError(index, tasks);

    tasks[index].status = "in-progress"
    writeTasks(tasks);
}

// 'GET' methods
export function getAllTasks() {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    console.log(tasks)
}

export function getDoneTasks() {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    const doneTasks = tasks.filter((task) => task.status === 'done');
    console.log(doneTasks);
}

export function getTodoTasks() {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    const todoTasks = tasks.filter((task) => task.status === 'todo');
    console.log(todoTasks);
}

export function getInProgressTasks() {
    handleNoTasksError(jsonPath);

    const tasks = readTasks();
    const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
    console.log(inProgressTasks);
}
