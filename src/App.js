import React from "react";
import Accordian from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "It is a front end javascript Framework",
  },
  {
    title: "Why react is so popular?",
    content:
      "ReactJS has become highly popular because of its extra simplicity and flexibility.",
  },
  {
    title: "Why react hooks are bad?",
    content:
      "React uses lint rules and will throw errors to try to prevent developers from violating this detail of Hooks. ",
  },
];

const App = () => {
  return (
    <div>
      <Accordian items={items} />
    </div>
  );
};

export default App;
