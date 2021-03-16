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
      taskTitle: "Start a new pen",
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
  const [tasks, setTasks] = useState(initTasks);
  const [title, setTitle] = useState("");
  const changeTitle = e => setTitle(e.target.value);

  const addTask = () => {
    if (title === "") return;
    const newTask = {
      id: new Date().getTime(),
      taskTitle: title
    };
    const newList = [...tasks, newTask];
    setTasks(newList);
    setTitle("");
  };

  const removeTask = id => {
    const newList = tasks.filter(tasks => tasks.id !== id);
    setTasks(newList);
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
        {tasks.map(tasksBox => {
          return (
            <TasksBox remove={removeTask} {...tasksBox} key={tasksBox.id} />
          );
        })}
      </TasksList>
    </Container>
  );
};

const TasksBox = React.memo(props => {
  const { taskTitle, active, remove, id } = props;
  return (
    <Tasks>
      <TitleTask>
        <input type="checkbox" checked={active} readOnly />
        <TaskTitle>{taskTitle}</TaskTitle>
        <span>
          <BsTrash onClick={() => remove(id)} />
        </span>
      </TitleTask>
    </Tasks>
  );
});

export default Todo;
