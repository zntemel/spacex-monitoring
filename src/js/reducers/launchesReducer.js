import {
  REQUESTED_LAUNCHES,
  REQUESTED_LAUNCHES_SUCCEEDED,
  REQUESTED_LAUNCHES_FAILED,
} from '../constant/index';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_LAUNCHES:
      return {
        loading: true,
        error: false,
      };
    case REQUESTED_LAUNCHES_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case REQUESTED_LAUNCHES_FAILED:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default launchesReducer;
