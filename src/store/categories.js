const initialState = {
     categories: [
        {name: 'Illegal Drugs'},
        {name: 'Illegal Weapons'},
        {name: 'State Secrets'},
        {name: 'Beanie Babies'},
    ]
};

const categoryReducer = (state = initialState, action) => {
    let {type, payload } = action;

    switch(type) {
        case "CHANGE_CATEGORY":
            return {...state, categories: [...state.categories, payload]}
        default:
            return state
    }
}

export const changeCategory = (category) => {
    console.log('Change category to: ', category);
    return {
        type: "CHANGE_CATEGORY",
        payload: category
    }
}

export default categoryReducer;