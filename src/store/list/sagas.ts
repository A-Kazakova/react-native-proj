import {
  call,
  put,
  takeLatest,
} from 'typed-redux-saga';
import { StrictEffect } from 'redux-saga/effects';

import { ListItem, GetListItemRequest } from 'models/List';
import { fetchList, fetchListItem } from 'api/list';
import { ListActionsNames as types } from '../actionsList/list';
import { ListActionTypes } from './types';
import {
  fetchListSuccess,
  fetchListRejected,
  fetchListItemSuccess,
  fetchListItemRejected,
} from './actions';

type WatchFetchListReq = ActionType<ListActionTypes, types.FETCH_LIST_REQUEST>;
type WatchFetchListItemReq = ActionType<ListActionTypes, types.FETCH_LIST_ITEM_REQUEST>;


function* fetchListSaga({ payload }: any): Generator<StrictEffect, void, string> {
  try {
    const data: ListItem[] = yield* call<typeof fetchList>(fetchList, payload);

    yield* put(fetchListSuccess(data));
  } catch (e) {
    yield* put(fetchListRejected());
  }
}

function* fetchListItemSaga({ payload }: { payload: GetListItemRequest}): Generator<StrictEffect, void, string> {
  try {
    const data: ListItem = yield* call<typeof fetchListItem>(fetchListItem, payload);

    yield* put(fetchListItemSuccess(data));
  } catch (e) {
    yield* put(fetchListItemRejected());
  }
}

function* watch(): Generator {
  yield takeLatest<WatchFetchListReq>(types.FETCH_LIST_REQUEST, fetchListSaga);
  yield takeLatest<WatchFetchListItemReq>(types.FETCH_LIST_ITEM_REQUEST, fetchListItemSaga);
}

export default watch;
