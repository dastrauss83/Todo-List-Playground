import React from "react";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
