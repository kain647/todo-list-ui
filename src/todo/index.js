import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import {
  Container,
  Title,
  InputContainer,
  TasksList,
  Tasks,
  TitleTask,
  AddBox,
  TaskTitle
} from "./styles";

const Todo = () => {
  const initTasks = [
    {
      id: "1",
      taskTitle: "Start a new task",
      active: true
    },
    {
      id: "2",
      taskTitle: "Read a book"
    },
    {
      id: "3",
      taskTitle: "Meeting with team"
    }
  ];
  const [idList, setIdList] = useState(initTasks.map(task => task.id));
  const [tasks, setTasks] = useState(
    initTasks.reduce((acc, task) => {
      acc[task.id] = task;
      return acc;
    }, {})
  );
  const [title, setTitle] = useState("");
  const changeTitle = e => setTitle(e.target.value);

  const checkBox = id => {
    const newTasks = {
      ...tasks,
      [id]: {
        ...tasks[id],
        active: !tasks[id].active
      }
    };
    setTasks(newTasks);
  };

  const addTask = () => {
    if (title === "") return;
    const id = new Date().getTime();
    const newTask = {
      id,
      taskTitle: title
    };
    const newList = [...idList, id];
    const newTasks = {
      ...tasks,
      [id]: newTask
    };
    setIdList(newList);
    setTasks(newTasks);
    setTitle("");
  };

  const removeTask = taskId => {
    const newList = idList.filter(id => taskId !== id);
    setIdList(newList);
  };

  return (
    <Container>
      <Title>TO DO LIST</Title>
      <InputContainer>
        <input
          type="text"
          placeholder="Add New Task"
          value={title}
          onChange={changeTitle}
        />
        <AddBox>
          <FcPlus onClick={addTask} />
        </AddBox>
      </InputContainer>
      <TasksList>
        {idList.map(id => {
          const task = tasks[id];
          return (
            <TasksBox
              remove={removeTask}
              {...task}
              key={id}
              checkBox={checkBox}
            />
          );
        })}
      </TasksList>
    </Container>
  );
};

const TasksBox = React.memo(props => {
  const { taskTitle, remove, id, active = false, checkBox } = props;
  return (
    <Tasks onClick={() => checkBox(id)}>
      <TitleTask>
        <input type="checkbox" checked={active} onChange={() => checkBox(id)} />
        <TaskTitle active={active}>{taskTitle}</TaskTitle>
        <span>
          <BsTrash onClick={() => remove(id)} />
        </span>
      </TitleTask>
    </Tasks>
  );
});

export default Todo;
