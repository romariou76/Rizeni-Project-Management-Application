import React, { useState } from 'react';
import styled from '@emotion/styled';
import { columnsFromBackend } from './KanbanData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import "../../styles/TaskCard.css"
import { GrAddCircle } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TaskNewCard from '../TaskNewCard';

const Container = styled.div`
  display: flex;
  height: auto;
  padding: 1rem;
`;

// COlumna column
const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: ;
  min-width: 300px;
  border-radius: 5px;
  padding: 15px;
  margin-right: 15px;
  Overflow: auto;
  ::-webkit-scrollbar {
    display: none;  /* Ocultar scroll */
}
`;

// Columna Row general
const TaskColumnStyles = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 80vh;
  height: 84vh;
  overflow-x: auto;
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const Kanban = () => {

// CODIGO MODAL TAREA
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundcolor: 'white',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <div>
      <Modal
        open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TaskNewCard />
          </Box>
      </Modal>
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container className="Draggable-container">
        <TaskColumnStyles className="column-container">
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className='TaskList'>
                      <Title>{column.title}</Title>
                      <IoMdAdd onClick={handleOpen} className='Title-Task'/>
                    </div>
                    {column.items.map((item, index) => (
                      <TaskCard key={item} item={item} index={index}
                       />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
    </div>
  );
};

export default Kanban;