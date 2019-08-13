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

export default todoReducer;