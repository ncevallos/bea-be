import {
    GET_MOTIVATE_RESULTS,
    GET_TODAY_MOTIVATE_RESULTS,
    GET_SUMMARY_MOTIVATE_RESULTS,
    MOTIVATE_RESULTS_ERROR
  } from '../actions/types';
  
  const initialState = {
    motivateResults: [],
    todayPlanResults: [],
    todayMotivateResults: [],
    summaryMotivateResults: [],
    motivateResult: null,
    todayMotivateResult: null,
    summaryMotivateResult: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TODAY_MOTIVATE_RESULTS:
        return {
          ...state,
          todayMotivateResults: payload,
          loading: false
        };
      case GET_MOTIVATE_RESULTS:
        return {
          ...state,
          motivateResults: payload,
          loading: false
        };
      case GET_SUMMARY_MOTIVATE_RESULTS:
        return {
          ...state,
          summaryMotivateResults: payload,
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
      case MOTIVATE_RESULTS_ERROR:
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
  