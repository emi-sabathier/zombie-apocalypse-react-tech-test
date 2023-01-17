import { Mate } from '../Model/MateModel';

export type MatesListState = {
    matesList: Mate[];
};

export type ActionType = {
    type: string;
    payload: Mate;
};

export const initialState = {
    matesList: [],
};

export function storeReducer(state: MatesListState, action: ActionType) {
    switch (action.type) {
        case 'ADD_MATE':
            return {
                ...state,
                matesList: [...state.matesList, action.payload],
            };

        case 'DELETE_MATE': {
            const updatedList: Mate[] = state.matesList.filter(mate => mate.id !== action.payload.id);
            return {
                ...state,
                matesList: updatedList,
            };
        }
        default:
            return state;
    }
}
