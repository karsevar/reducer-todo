function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
           return [
                ...state, {
                   id: Date.now(),
                   todo: action.payload.todo,
                   time: action.payload.time,
                   completed: false
                }
           ];

        case 'TOGGLE_TODO': 
           return [
               ...state.map(todoObject => {
                   if (todoObject.id === action.payload) {
                       return {
                           ...todoObject,
                           completed: !todoObject.completed
                       };
                   } else {
                       return todoObject;
                   }
               })
           ];

        case 'DELETE_COMPLETED':
            return [
                ...state.filter(todoObject => todoObject.completed !== true)
            ];

        
        default: 
           return state;
    }
}

export const initialState = [
    {
        id: 1,
        todo: 'eat lunch',
        time: '5',
        completed: false
    },
    {
        id: 2,
        todo: 'read a book',
        time: '5',
        completed: true
    },
    {
        id: 3,
        todo: 'eat dinner',
        time: '5',
        completed: false
    }
];

export default todoReducer;