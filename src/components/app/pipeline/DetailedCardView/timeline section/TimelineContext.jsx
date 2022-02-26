import React, { useReducer } from 'react';
const TimelineContext = React.createContext({
  data: [],
  DispatchTimeline: () => {}
});
const initialState = [
  {
    type: 'note',
    location: 'pinned',
    date: new Date(),
    note: 'hello this is ahsan',
    id: 'dj364'
  },
  {
    type: 'activity',
    location: 'planned',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toISOString().split('T')[1].slice(0, 5),
    title: 'new year party',
    description: 'A good new year party',
    id: '735dg',
    reminderDate: new Date().toISOString().split('T')[0],
    reminderTime: new Date().toISOString().split('T')[1].slice(0, 5),
    icon: 'faUser'
  },
  {
    type: 'file',
    location: 'all',
    date: new Date(),
    fileName: 'index.js',
    fileSize: '23kb',
    description: 'This is a good file',
    id: '85df'
  }
];
const TimelineReducer = (state, action) => {
  let newState, index;
  switch (action.type) {
    case 'changeLocation':
      newState = [...state];
      index = newState.findIndex(each => each.id === action.payload.data.id);
      newState[index].location = action.payload.newLocation;
      return newState;
    case 'changeNote':
      newState = [...state];
      index = newState.findIndex(each => each.id === action.payload.data.id);
      newState[index].note = action.payload.newNote;
      return newState;
    case 'delete':
      newState = state.filter(each => each.id !== action.payload.id);
      return newState;
    case 'edit':
      newState = [...state];
      index = newState.findIndex(each => each.id === action.payload.id);
      newState[index] = action.payload;
      return newState;
    case 'add':
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case 'AddDescriptionAboutFile':
      newState = [...state];
      index = newState.findIndex(each => each.id === action.payload.id);
      newState[index].description = action.payload.description;
      return newState;
  }
};
export const TimelineContextProvider = props => {
  const [data, DispatchTimeline] = useReducer(TimelineReducer, initialState);
  console.log(data);
  return (
    <TimelineContext.Provider value={{ data, DispatchTimeline }}>
      {props.children}
    </TimelineContext.Provider>
  );
};
export default TimelineContext;
