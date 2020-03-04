const initialState = {
  tasks: [],
}

export default function taskReducer(state = initialState, action){
    switch(action.type)
    {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, action.task]};
            // return state.push(action.task); FEO
        default:
            return state;
    }
}