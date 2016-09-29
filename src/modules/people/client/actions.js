// action types
export const SET_VISIBILITY = 'SET_VISIBILITY'
export const CREATE_COMPONENT = "CREATE_COMPONENT"
export const LIST_COMPONENT = "LIST_COMPONENT"
export const TOOLBOX_COMPONENT = "TOOLBOX_COMPONENT"

// Action Methods
export const setVisibility = (item, visible) => ({
    type: SET_VISIBILITY,
    item: item,
    visible: visible
});

const initialState = {
    create_visible: false,
    list_visible: true,
    toolbox_visible: true
}

// reducer
export function clientReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY:
            {
                switch (action.item) {
                    case CREATE_COMPONENT:
                        return Object.assign({}, state, {
                            create_visible: action.visible
                        });
                    case LIST_COMPONENT:
                        return Object.assign({}, state, {
                            list_visible: action.visible
                        });
                    case TOOLBOX_COMPONENT:
                        return Object.assign({}, state, {
                            toolbox_visible: action.visible
                        });
                    default:
                        return state;
                }
            }
        default:
            return state;
    }
}