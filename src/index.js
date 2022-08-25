import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Posts/>
  </>
);