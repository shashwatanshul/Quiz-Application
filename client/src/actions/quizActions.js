import axios from "axios";

export const getAllQuizs = () => async (dispatch) => {
  dispatch({ type: "GET_QUIZS_REQUEST" });

  try {
    const response = await axios.get(`/api/quizs/getallquizs`);
    console.log(response);
    dispatch({ type: "GET_QUIZS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_QUIZS_FAILED", payload: error });
  }
};

export const addQuiz = (quiz) => async (dispatch) => {
  dispatch({ type: "ADD_QUIZ_REQUEST" });
  try {
    const response = await axios.post(`/api/quizs/addquiz`, { quiz });
    console.log(response);
    dispatch({ type: "ADD_QUIZ_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_QUIZ_FAILED", payload: error });
  }
};

export const editQuiz = (editedquiz) => async (dispatch) => {
  dispatch({ type: "EDIT_QUIZ_REQUEST" });
  try {
    const response = await axios.post(`/api/quizs/editquiz`, { editedquiz });
    console.log(response);
    dispatch({ type: "EDIT_QUIZ_SUCCESS" });
    window.location.href = "/adminpanel/quizslist";
  } catch (error) {
    dispatch({ type: "EDIT_QUIZ_FAILED", payload: error });
  }
};

export const getQuizById = (quizid) => async (dispatch) => {
  dispatch({ type: "GET_QUIZBYID_REQUEST" });

  try {
    const response = await axios.post(`/api/quizs/getquizbyid`, { quizid });
    console.log(response);
    dispatch({ type: "GET_QUIZBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_QUIZBYID_FAILED", payload: error });
  }
};

export const deleteQuiz = (quizid) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/quizs/deletequiz`, { quizid });
    alert("Quiz Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};

export const updateQuizEnabledStatus =
  (quizId, enabled) => async (dispatch) => {
    try {
      const response = await axios.post(`/api/quizs/updateenabledstatus`, {
        quizId,
        enabled,
      });
      console.log(response);
      dispatch(getAllQuizs()); // Refresh the quiz list
    } catch (error) {
      console.log(error);
    }
  };
