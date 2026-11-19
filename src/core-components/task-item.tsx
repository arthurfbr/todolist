import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import InputText from "../components/input-text";
import { Task, TaskState } from "../models/task";
import {cx} from "class-variance-authority";
 
interface TaskItemProps{
    task: Task;
}

export default function TaskItem({task}: TaskItemProps){
    const [isEditing, setIsEditing] = React.useState(
        task?.state === TaskState.Creating
    );

    function handleEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTaskt(){
        setIsEditing(false);
    }

    return ( <Card size="md" className="flex items-center gap-4">
        {!isEditing ? (
        <>
            <InputCheckbox value={task?.concluded?.toString()}
            checked={task?.concluded} />
            <Text className={cx("flex-1", {
                'line-through': task?.concluded,

            })}>{task?.title}</Text>
            <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon} variant="tertiary" />
                <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
            </div>
        </> 
        ): (
        <>
        <InputText/>
        <div className="flex gap-1">
          <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTaskt}/>
          <ButtonIcon icon={CheckIcon} variant="primary"/>
        </div>
        </>
         )}
    </Card>
    );
}