import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { stringify } from 'uuid';
import { TiMessages } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";

const TaskInformation = styled.div`
  display: flex;
  align-items: flex-start;
  height: 140px;
  border-radius: 5px;
  max-width: 311px;
  background-color: rgb(51,60,95);
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 2rem;
    font-size: 12px;
    font-weight: 400px;
    color: white;
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
            <div>
              <div className='task-span-color'></div>
            </div>
            <div className='task-content'>
              <div className='primary-details'>
                <p className='title-task'>{item.Task}</p>
                <p className='task-asigned'>Asigned to you</p>
                <p className='task-info'>Find 3 ideal clients and send them a detailed proposal</p>
              </div>
           
              <div className="secondary-details">
                <TiMessages className='icon-task-TiMessages'/>
                <BsListTask className='icon-task-BsListTask'/>
                <FaRegUser className='icon-task-FaRegUser'/>
                <HiOutlineEye className='icon-task-HiOutlineEye'/>   
              </div>

              {/* <span>
                  {new Date(item.Due_Date).toLocaleDateString('es-pe', {
                    month: 'short',
                    day: '2-digit',
                  })}
                </span> */}

          </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
