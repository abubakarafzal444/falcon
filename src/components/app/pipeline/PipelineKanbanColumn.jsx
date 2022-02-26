import React from 'react';
import KanbanColumnHeader from 'components/app/kanban/KanbanColumnHeader';
import { Droppable } from 'react-beautiful-dnd';
import PipelineTaskCard from './PipelineTaskCard';

const PipelineKanbanColumn = ({ kanbanColumnItem }) => {
  const { id, name, items } = kanbanColumnItem;

  return (
    <div className="kanban-column ">
      <KanbanColumnHeader id={id} title={name} itemCount={items.length} />
      <Droppable droppableId={`${id}`} type="KANBAN">
        {provided => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              id={`container-${id}`}
              className="kanban-items-container scrollbar "
            >
              {items.map((task, index) => (
                <PipelineTaskCard key={task.id} index={index} data={task} />
              ))}
            </div>
          </>
        )}
      </Droppable>
    </div>
  );
};

export default PipelineKanbanColumn;
