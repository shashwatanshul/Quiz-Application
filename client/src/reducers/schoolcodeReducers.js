export const getAllSchoolcodesReducer = (
  state = { schoolcodes: [] },
  action
) => {
  switch (action.type) {
    case "GET_SCHOOLCODES_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SCHOOLCODES_SUCCESS":
      return {
        loading: false,
        schoolcodes: action.payload,
      };
    case "GET_SCHOOLCODES_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addSchoolcodeReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SCHOOLCODE_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_SCHOOLCODE_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_SCHOOLCODE_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getSchoolcodeByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SCHOOLCODEYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SCHOOLCODEBYID_SUCCESS":
      return {
        loading: false,
        schoolcode: action.payload,
      };
    case "GET_SCHOOLCODEBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
