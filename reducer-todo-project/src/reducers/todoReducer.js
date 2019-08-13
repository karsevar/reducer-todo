function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
           return [
               ...state, {
                   id: Date.now(),
                   todo: action.payload,
                   completed: false
                }
           ] 
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