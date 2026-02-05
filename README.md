# task-tracker
Javascript implementation of the task tracker project based on [roadmap.sh](roadmap.sh/projects/task-tracker).

The tasks are stored in the `tasks.json` file. The json file will be automatically created when you add task to it.

## Usage
Make sure you installed `node`. You can check that out by typing `node -v` in you cli.

### Manipulating task tracker
`node index.js add <content>`: add task
`node index.js update <index> <content>`: update task
`node index.js delete <index>`: delete task

### Get tasks
`node index.js list`: get all tasks
`node index.js list todo`: get all todo tasks
`node index.js list in-progress`: get all in-progress tasks
`node index.js list done`: get all done tasks
