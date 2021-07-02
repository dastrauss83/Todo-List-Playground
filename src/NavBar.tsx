import { useEffect, useState } from "react";
import { todo } from "./Todo";

export type NavBarProps = {
  onClick: (variant: string) => void;
  setActiveTodoList: any;
  todoList: Array<todo>;
};

export const NavBar: React.FC<NavBarProps> = ({
  onClick,
  setActiveTodoList,
  todoList,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setActiveTodoList(todoList);
    }
    const tempTodos = todoList.filter(
      (todo: todo) =>
        todo.schoolName.substr(0, searchValue.length) === searchValue
    );
    setActiveTodoList(tempTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, setSearchValue]);

  return (
    <div className="NavBar">
      <div className="NavBarButtons">
        <button className="Button" onClick={() => onClick("new")}>
          New Todo
        </button>
        <button className="Button" onClick={() => onClick("list")}>
          List of Todos
        </button>
      </div>
      <input
        type="text"
        placeholder="Search List"
        className="SchoolInfoInput"
        id="Search"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
