// export const getAllQuizsReducer = (state = { quizs: [] }, action) => {
//   switch (action.type) {
//     case "GET_QUIZS_REQUEST":
//       return {
//         loading: true,
//         ...state,
//       };
//     case "GET_QUIZS_SUCCESS":
//       return {
//         loading: false,
//         quizs: action.payload,
//       };
//     case "GET_QUIZS_FAILED":
//       return {
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const addQuizReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "ADD_QUIZ_REQUEST":
//       return {
//         loading: true,
//         ...state,
//       };
//     case "ADD_QUIZ_SUCCESS":
//       return {
//         loading: false,
//         success: true,
//       };
//     case "ADD_QUIZ_FAILED":
//       return {
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const editQuizReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "EDIT_QUIZ_REQUEST":
//       return {
//         editloading: true,
//         ...state,
//       };
//     case "EDIT_QUIZ_SUCCESS":
//       return {
//         editloading: false,
//         editsuccess: true,
//       };
//     case "EDIT_QUIZ_FAILED":
//       return {
//         editerror: action.payload,
//         editloading: false,
//       };
//     default:
//       return state;
//   }
// };

// export const getQuizByIdReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "GET_QUIZBYID_REQUEST":
//       return {
//         loading: true,
//         ...state,
//       };
//     case "GET_QUIZBYID_SUCCESS":
//       return {
//         loading: false,
//         quiz: action.payload,
//       };
//     case "GET_QUIZBYID_FAILED":
//       return {
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };
//--------------------------------------------------------------------------------------------------
export const getAllQuizsReducer = (state = { quizs: [] }, action) => {
  switch (action.type) {
    case "GET_QUIZS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_QUIZS_SUCCESS":
      return {
        loading: false,
        quizs: action.payload,
      };
    case "GET_QUIZS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addQuizReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_QUIZ_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_QUIZ_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_QUIZ_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editQuizReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_QUIZ_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_QUIZ_SUCCESS":
      return {
        editloading: false,
        editsuccess: true,
      };
    case "EDIT_QUIZ_FAILED":
      return {
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};

export const getQuizByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_QUIZBYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_QUIZBYID_SUCCESS":
      return {
        loading: false,
        quiz: action.payload,
      };
    case "GET_QUIZBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
