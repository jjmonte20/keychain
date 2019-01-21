import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function friendsList({ children }) {
  return ( <div className={`container`}>{children}</div>
 
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

