import { all } from 'typed-redux-saga';

import list from './list/sagas';

function* rootSaga(): any {
  yield all([
    ...list(),
  ]);
}

export default rootSaga;
