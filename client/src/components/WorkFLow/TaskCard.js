import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';


const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 80px;
  border-radius: 5px;
  max-width: 311px;

  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }

`;

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index} >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <span>feature</span>
            <p>{item.Task}</p>
            <div className="secondary-details">
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString('es-pe', {
                    month: 'short',
                    day: '2-digit',
                  })}
                </span>
                <p>Juan</p>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
