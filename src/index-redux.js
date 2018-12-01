
const MY_APP_TYPE = {
    ADD_TODO: 'ADD_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

const initialState = {};

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case MY_APP_TYPE.SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            }
        case MY_APP_TYPE.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        default:
            return state
    }
};

export const actions = {
    addTodo: (text) => ({ type: MY_APP_TYPE.ADD_TODO, text }),
    toggleTodo: (index) => ({ type: MY_APP_TYPE.TOGGLE_TODO, index }),
    setVisibilityFilter: (filter) => ({ type: MY_APP_TYPE.SET_VISIBILITY_FILTER, filter })
};