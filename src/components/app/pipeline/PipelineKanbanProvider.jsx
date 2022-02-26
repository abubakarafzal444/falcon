import React, { useReducer } from 'react';
import { KanbanContext } from 'context/Context';
import { kanbanReducer } from 'reducers/kanbanReducer';

const PipelineKanbanProvider = props => {
  const initData = {
    kanbanItems: props.kanbanItems
  };

  const [kanbanState, kanbanDispatch] = useReducer(kanbanReducer, initData);

  return (
    <KanbanContext.Provider value={{ kanbanState, kanbanDispatch }}>
      {props.children}
    </KanbanContext.Provider>
  );
};

export default PipelineKanbanProvider;
