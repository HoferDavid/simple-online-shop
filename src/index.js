import React from "react";
import { createRoot } from "react-dom/client";


const container = document.getElementById('root');


const element = <h1>Hello World</h1>;

createRoot(container).render(element)