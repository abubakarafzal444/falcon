import React, { useContext, useEffect, useState } from 'react';
import AppContext from 'context/Context';
import PipelineKanbanProvider from './PipelineKanbanProvider';
import PipelineKanbanContainer from './PipelineKanbanContainer';

const PipelineKanban = props => {
  const {
    config: { isFluid, isNavbarVerticalCollapsed },
    setConfig
  } = useContext(AppContext);
  const [kanbanIsFluid] = useState(isFluid);
  const [kanbanIsNavbarVerticalCollapsed] = useState(isNavbarVerticalCollapsed);

  useEffect(() => {
    setConfig('isFluid', true);
    setConfig('isNavbarVerticalCollapsed', true);

    return () => {
      setConfig('isFluid', kanbanIsFluid);
      setConfig('isNavbarVerticalCollapsed', kanbanIsNavbarVerticalCollapsed);
    };
  }, []);

  return (
    <>
      <PipelineKanbanProvider kanbanItems={props.kanbanItems}>
        <PipelineKanbanContainer />
      </PipelineKanbanProvider>
    </>
  );
};

export default PipelineKanban;
