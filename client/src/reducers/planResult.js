import {
  GET_PLAN_RESULTS,
  GET_TODAY_PLAN_RESULTS,
  GET_PREVIOUSDAY_PLAN_RESULTS,
  GET_SUMMARY_PLAN_RESULTS,
  PLAN_RESULTS_ERROR
} from '../actions/types';

const initialState = {
  previousPlanResults: [],
  todayPlanResults: [],
  planResults: [],
  planResults2: [],
  previousPlanResult: null,
  planResult: null,
  planResult2: null,
  todayPlanResult: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY_PLAN_RESULTS:
      return {
        ...state,
        todayPlanResults: payload,
        loading: false
      };
      case GET_PREVIOUSDAY_PLAN_RESULTS:
        return {
          ...state,
          previousPlanResults: payload,
          loading: false
        };
    case GET_PLAN_RESULTS:
      return {
        ...state,
        planResults: payload,
        loading: false
      };

      case GET_SUMMARY_PLAN_RESULTS:
        return {
          ...state,
          planResults2: payload,
          loading: false
        };
  
  //   case GET_POST:
  //     return {
  //       ...state,
  //       post: payload,
  //       loading: false
  //     };
  //   case ADD_POST:
  //     return {
  //       ...state,
  //       posts: [payload, ...state.posts],
  //       loading: false
  //     };
  //   case DELETE_POST:
  //     return {
  //       ...state,
  //       posts: state.posts.filter(post => post._id !== payload),
  //       loading: false
  //     };
    case PLAN_RESULTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
  //   case UPDATE_LIKES:
  //     return {
  //       ...state,
  //       posts: state.posts.map(post =>
  //         post._id === payload.id ? { ...post, likes: payload.likes } : post
  //       ),
  //       loading: false
  //     };
  //   case ADD_COMMENT:
  //     return {
  //       ...state,
  //       post: { ...state.post, comments: payload },
  //       loading: false
  //     };
  //   case REMOVE_COMMENT:
  //     return {
  //       ...state,
  //       post: {
  //         ...state.post,
  //         comments: state.post.comments.filter(
  //           comment => comment._id !== payload
  //         )
  //       },
  //       loading: false
  //     };
    default:
      return state;
  }
}
