// action types
export const MODE_SET = 'MODE_SET'
export const MODE_CREATE = 'MODE_CREATE'
export const MODE_READ = 'MODE_READ'

// Action Methods
export const setMode = (mode) => ({
    type: MODE_SET,
    mode: mode
});

const initialState = {
    create_visible: false,
    list_visible: true,
    toolbox_visible: true
}

// reducer
export function clientReducer(state = initialState, action) {
    switch (action.type) {
        case MODE_SET:
            {
                switch (action.mode) {
                    case MODE_CREATE:
                        return Object.assign({}, state, {
                            create_visible: true,
                            list_visible: false,
                            toolbox_visible: false
                        });
                    case MODE_READ:
                        return Object.assign({}, state, {
                            create_visible: false,
                            list_visible: true,
                            toolbox_visible: true
                        });
                    default:
                        return state;
                }
            }
        default:
            return state;
    }
}