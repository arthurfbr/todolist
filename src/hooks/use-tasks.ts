import useLocalStorageState from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import {delay} from "../helpers/utils";
import React from "react";

export default function useTasks() {
    const [tasksData] = useLocalStorageState<Task[]>(TASKS_KEY, {
        defaultValue: []
    });

    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks () {
        console.time("Carregando tarefas...");
        if(isLoadingTasks){
            await delay(2000);
            setIsLoadingTasks(false)
        }
       setTasks(tasksData);
       console.time("Carregando tarefas...");
    }


    React.useEffect(() => {
        fetchTasks();
    }, [tasksData]);

    return {
        tasks,
        createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length, isLoadingTasks,
    };
}