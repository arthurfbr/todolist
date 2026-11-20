import useLocalStorage from 'use-local-storage-state'
import { TASKS_KEY,type Task,TaskState  } from '../models/task'

//use-local-storage-state espera um objeto de opções com defaultValue. Por isso tasks não fica tipado como uma lista garantida, e os usos de tasks e task dentro do .map() também podem apresentar erros.
export default function useTask(){
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, { defaultValue: [],});

    function prepareTask(){
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    function updateTask (id: string, payload: {title: Task["title"]}){
        setTasks(
            tasks.map((task) => task.id === id ? {...task, state: TaskState.Created, ...payload}: task)
        )
    }

    function updateTaskStatus(id: string, concluded: boolean){
        setTasks(
            tasks.map((task) => task.id === id? {...task, concluded}: task)
        );
    }

    function deleteTask(id: string){
        setTasks(tasks.filter((tasks) => tasks.id !== id))
    }

    return{
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask
    }
}