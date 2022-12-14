import React, { useState, useEffect } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  // console.log(props.board.cards.length)


 const Datos = props.board.cards
  // console.log(Datos.length)

  // devolvemos la cantidad de tareas que hay en undefined por solucionar

const fullnames = []

  Datos.forEach((dato) => {
    fullnames.push(dato.title)
  })

  console.log(fullnames)
  
  // Devolvemos el nombre de cada tarea sevira para listado de tareas
  Datos.forEach((dato) => {console.log(dato.title)})


// const saveDatos = () => {
//   localStorage.setItem('tareas', Datos);
//   alert('Has guardado pe');
// }

// saveDatos()

  return (
    <div className="board-kanban">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal/>
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Agregar tarea"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
