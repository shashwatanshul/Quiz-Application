import axios from "axios";
export const getAllSubjects = () => async (dispatch) => {
  dispatch({ type: "GET_SUBJECTS_REQUEST" });

  try {
    const response = await axios.get(`/api/subjects/getallsubjects`);
    console.log(response);
    dispatch({ type: "GET_SUBJECTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SUBJECTS_FAILED", payload: error });
  }
};

export const addSubject = (subject) => async (dispatch) => {
  dispatch({ type: "ADD_SUBJECT_REQUEST" });
  try {
    const response = await axios.post(`/api/subjects/addsubject`, {
      subject,
    });
    console.log(response);
    dispatch({ type: "ADD_SUBJECT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_SUBJECT_FAILED", payload: error });
  }
};

export const getSubjectById = (subjectid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post(`/api/subjects/getsubjectbyid`, {
      subjectid,
    });
    console.log(response);
    dispatch({ type: "GET_SUBJECTBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SUBJECTBYID_FAILED", payload: error });
  }
};

export const deleteSubject = (subjectid) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/subjects/deletesubject`, {
      subjectid,
    });
    alert("Subject Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
