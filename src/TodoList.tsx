import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { NavBar } from "./NavBar";
import { todo } from "./Todo";
import {
  DragDropContext,
  Droppable,
  DropResult,
  Draggable,
} from "react-beautiful-dnd";

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Array<todo>>([]);
  const [activeTodoList, setActiveTodoList] = useState<Array<todo>>([]);
  const [screenState, setScreenState] = useState<string>("list");
  const [activeTodo, setActiveTodo] = useState<todo>({
    id: -1,

    schoolName: "",

    contactName: "",
    contactEmail: "",
    contactPhone: "",

    Students: "",
    StudentsChecked: false,
    Staff: "",
    StaffChecked: false,
    Date: "",
    DateChecked: false,

    Emails: "",
    "Phone Calls": "",
    "General Notes": "",
  });

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todoList") || "[]"));
    if (JSON.parse(localStorage.getItem("todoList") || "[]").length === 0) {
      setScreenState("new");
    }
  }, []);

  useEffect(() => {
    setActiveTodoList(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList, setTodoList]);

  const newTodo = (): todo => {
    return {
      id: Math.floor(Math.random() * 9999) + 1,

      schoolName: "",

      contactName: "",
      contactEmail: "",
      contactPhone: "",

      Students: "",
      StudentsChecked: false,
      Staff: "",
      StaffChecked: false,
      Date: "",
      DateChecked: false,

      Emails: "",
      "Phone Calls": "",
      "General Notes": "",
    };
  };

  const handleChange = (variant: string, id: number, value: string) => {
    let index = todoList.findIndex((todo: todo) => todo.id === id);
    const tempTodos = [...todoList];
    if (
      variant === "StudentsChecked" ||
      variant === "StaffChecked" ||
      variant === "DateChecked"
    ) {
      tempTodos[index] = {
        ...tempTodos[index],
        [variant]: !tempTodos[index][variant],
      };
      setTodoList(tempTodos);
    } else {
      tempTodos[index] = {
        ...tempTodos[index],
        [variant]: value,
      };
      setTodoList(tempTodos);
    }
  };

  const newTodoButton = (variant: string): void => {
    if (variant === "new") {
      const tempTodos = [...todoList];
      tempTodos.push(newTodo());
      setTodoList(tempTodos);
      setScreenState("new");
    } else if (variant === "list") {
      setActiveTodoList(todoList);
      setScreenState("list");
    }
  };

  const handleExpandedTodo = (e: any, variant: string, id: number) => {
    if (variant === "delete") {
      e.stopPropagation();
      if (window.confirm("Are you sure you want to delete?")) {
        let index = todoList.findIndex((todo: todo) => todo.id === id);
        const tempTodos = [...todoList];
        tempTodos.splice(index, 1);
        setScreenState("list");
        setTodoList(tempTodos);
      }
    } else if (variant === "expand") {
      if (screenState === "list" || screenState === "new") {
        const tempActiveTodo = todoList.find((todo: todo) => todo.id === id);
        if (tempActiveTodo) setActiveTodo(tempActiveTodo);
        setScreenState("full");
      } else if (screenState === "full") {
        setScreenState("list");
      }
    }
  };

  if (todoList.length === 0) {
    return (
      <div>
        <NavBar
          onClick={newTodoButton}
          setActiveTodoList={setActiveTodoList}
          todoList={todoList}
        />
        <div className="Header" id="StartingMessage">
          Click New Todo to get started!
        </div>
      </div>
    );
  }

  if (screenState === "new") {
    return (
      <div>
        <NavBar
          onClick={newTodoButton}
          setActiveTodoList={setActiveTodoList}
          todoList={todoList}
        />
        <div className="TodoList">
          {todoList.slice(todoList.length - 1).map((i) => (
            <Todo
              onChange={handleChange}
              todo={i}
              screenState={screenState}
              setScreenState={setScreenState}
              activeTodos={todoList}
              setActiveTodos={setTodoList}
              onClick={handleExpandedTodo}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      </div>
    );
  }

  if (screenState === "full") {
    return (
      <div>
        <NavBar
          onClick={newTodoButton}
          setActiveTodoList={setActiveTodoList}
          todoList={todoList}
        />
        <Todo
          onChange={handleChange}
          todo={activeTodo}
          screenState={screenState}
          setScreenState={setScreenState}
          activeTodos={todoList}
          setActiveTodos={setTodoList}
          onClick={handleExpandedTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
    );
  }

  const handleOnDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoList(items);
  };

  return (
    <div>
      <NavBar
        onClick={newTodoButton}
        setActiveTodoList={setActiveTodoList}
        todoList={todoList}
      />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="TodoList" direction="vertical">
          {(droppableProvided) => (
            <ul
              className="TodoList"
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {activeTodoList.map((i: todo, index: number) => (
                <Draggable
                  key={i.id.toString()}
                  draggableId={i.id.toString()}
                  index={index}
                >
                  {(draggableProvided) => {
                    return (
                      <li
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <Todo
                          onChange={handleChange}
                          todo={i}
                          screenState={screenState}
                          setScreenState={setScreenState}
                          activeTodos={todoList}
                          setActiveTodos={setTodoList}
                          onClick={handleExpandedTodo}
                          todoList={todoList}
                          setTodoList={setTodoList}
                        />
                      </li>
                    );
                  }}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
