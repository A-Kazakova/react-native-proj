import { ListActionsNames as types } from '../actionsList/list';
import { ListActionTypes, ListState } from './types';

const INITIAL_STATE: ListState = {
  isLoading: false,
  list: [],
  curretnItem: null,
  isCurrentItemLoading: false,
};

function reducer(state = INITIAL_STATE, action: ListActionTypes): ListState {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.FETCH_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: [...state.list, ...payload],
      };
    }
    case types.FETCH_LIST_REJECTED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.CLEAR_LIST: {
      return {
        ...state,
        list: INITIAL_STATE.list,
      };
    }
    case types.FETCH_LIST_ITEM_REQUEST: {
      return {
        ...state,
        isCurrentItemLoading: true,
      };
    }
    case types.FETCH_LIST_ITEM_SUCCESS: {
      return {
        ...state,
        isCurrentItemLoading: false,
        curretnItem: payload,
      };
    }
    case types.FETCH_LIST_ITEM_REJECTED: {
      return {
        ...state,
        isCurrentItemLoading: false,
      };
    }
    case types.CLEAR_CURRENT_LIST_ITEM: {
      return {
        ...state,
        curretnItem: null,
      };
    }
    default: return state;
  }
}

export default reducer;
