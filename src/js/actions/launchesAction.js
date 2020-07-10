import {
  FETCHED_LAUNCHES,
  REQUESTED_LAUNCHES,
  REQUESTED_LAUNCHES_SUCCEEDED,
  REQUESTED_LAUNCHES_FAILED,
} from "../constant/index";

export function fetchLaunches(url) {
  return { type: FETCHED_LAUNCHES, url };
}

export function requestLaunches() {
  return { type: REQUESTED_LAUNCHES };
}

export function requestLaunchesSuccess(payload) {
  return { type: REQUESTED_LAUNCHES_SUCCEEDED, payload };
}

export function requestLaunchesError() {
  return { type: REQUESTED_LAUNCHES_FAILED };
}
