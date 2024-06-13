export const getAllClassssReducer = (state = { classss: [] }, action) => {
  switch (action.type) {
    case "GET_CLASSSS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CLASSSS_SUCCESS":
      return {
        loading: false,
        classss: action.payload,
      };
    case "GET_CLASSSS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addClasssReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CLASSS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_CLASSS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_CLASSS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getClasssByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CLASSSYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CLASSSBYID_SUCCESS":
      return {
        loading: false,
        classs: action.payload,
      };
    case "GET_CLASSSBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
