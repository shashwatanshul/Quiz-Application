export const getAllDifficultysReducer = (
  state = { difficultys: [] },
  action
) => {
  switch (action.type) {
    case "GET_DIFFICULTYS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_DIFFICULTYS_SUCCESS":
      return {
        loading: false,
        difficultys: action.payload,
      };
    case "GET_DIFFICULTYS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addDifficultyReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DIFFICULTY_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_DIFFICULTY_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_DIFFICULTY_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getDifficultyByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DIFFICULTYYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_DIFFICULTYBYID_SUCCESS":
      return {
        loading: false,
        difficulty: action.payload,
      };
    case "GET_DIFFICULTYBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
