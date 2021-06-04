import { ListActionsNames as types } from '../actionsList/list';
import { ListActionTypes } from './types';

type Payload<T> = PayloadAction<ListActionTypes, T>;

export const fetchListRequest = (page: number): ListActionTypes => ({
  payload: page,
  type: types.FETCH_LIST_REQUEST,
});

export const fetchListSuccess = (
  payload: Payload<types.FETCH_LIST_SUCCESS>,
): ListActionTypes => ({
  type: types.FETCH_LIST_SUCCESS,
  payload,
});

export const fetchListRejected = (): ListActionTypes => ({
  type: types.FETCH_LIST_REJECTED,
});

export const clearList = (): ListActionTypes => ({
  type: types.CLEAR_LIST,
});

export const fetchListItemRequest = (
  payload: Payload<types.FETCH_LIST_ITEM_REQUEST>,
): ListActionTypes => ({
  type: types.FETCH_LIST_ITEM_REQUEST,
  payload,
});

export const fetchListItemSuccess = (
  payload: Payload<types.FETCH_LIST_ITEM_SUCCESS>,
): ListActionTypes => ({
  type: types.FETCH_LIST_ITEM_SUCCESS,
  payload,
});

export const fetchListItemRejected = (): ListActionTypes => ({
  type: types.FETCH_LIST_ITEM_REJECTED,
});

export const clearCurrentListItem = (): ListActionTypes => ({
  type: types.CLEAR_CURRENT_LIST_ITEM,
});
