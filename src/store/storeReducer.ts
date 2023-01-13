// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const initialState = {
    matesList: [],
};

export function storeReducer(state, action) {
    switch (action.type) {
        case 'ADD_MATE':
            return {
                ...state,
                matesList: [...state.matesList, action.payload],
            };

        case 'DELETE_MATE': {
            const updatedList = state.matesList.filter(mate => mate.id !== action.payload);
            return {
                ...state,
                matesList: updatedList,
            };
        }
        default:
            return state;
    }
}
