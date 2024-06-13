export const getAllSubjectsReducer = (state = { subjects: [] }, action) => {
  switch (action.type) {
    case "GET_SUBJECTS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SUBJECTS_SUCCESS":
      return {
        loading: false,
        subjects: action.payload,
      };
    case "GET_SUBJECTS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addSubjectReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SUBJECT_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_SUBJECT_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_SUBJECT_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getSubjectByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SUBJECTYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_SUBJECTBYID_SUCCESS":
      return {
        loading: false,
        subject: action.payload,
      };
    case "GET_SUBJECTBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
