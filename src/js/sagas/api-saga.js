import { takeEvery, call, put, all } from "redux-saga/effects";
import { FETCHED_LAUNCHES } from "../constant/index";
import {
  requestLaunchesError,
  requestLaunchesSuccess,
  requestLaunches,
} from "../actions/index";

import { getRequest } from "../service";

function* fetchLaunchesAsync(action) {
  try {
    yield put(requestLaunches());
    const payload = yield call(getRequest, action.url);
    yield put(requestLaunchesSuccess(payload));
  } catch (error) {
    yield put(requestLaunchesError());
  }
}

export default function* () {
  yield all([takeEvery(FETCHED_LAUNCHES, fetchLaunchesAsync)]);
}
