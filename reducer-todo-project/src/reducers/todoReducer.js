function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
           return [
                ...state, {
                   id: Date.now(),
                   todo: action.payload,
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
           ]

        
        default: 
           return state;
    }
}

export const initialState = [
    {
        id: 1,
        todo: 'eat lunch',
        completed: false
    },
    {
        id: 2,
        todo: 'read a book',
        completed: true
    },
    {
        id: 3,
        todo: 'eat dinner',
        completed: false
    }
];

export default todoReducer;