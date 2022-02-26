export const PipelinekanbanReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_SINGLE_COLUMN':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem =>
          kanbanItem.id === payload.column.id
            ? {
                ...kanbanItem,
                items: [...payload.reorderedItems]
              }
            : kanbanItem
        )
      };

    case 'UPDATE_DUAL_COLUMN':
      return {
        ...state,
        kanbanItems: state.kanbanItems.map(kanbanItem =>
          kanbanItem.id === payload.sourceColumn.id ||
          kanbanItem.id === payload.destColumn.id
            ? {
                ...kanbanItem,
                items:
                  (kanbanItem.id === payload.sourceColumn.id &&
                    payload.updatedSourceItems) ||
                  (kanbanItem.id === payload.destColumn.id &&
                    payload.updatedDestItems)
              }
            : kanbanItem
        )
      };

    default:
      return state;
  }
};
