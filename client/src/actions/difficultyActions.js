import axios from "axios";
export const getAllDifficultys = () => async (dispatch) => {
  dispatch({ type: "GET_DIFFICULTYS_REQUEST" });

  try {
    const response = await axios.get(`/api/difficultys/getalldifficultys`);
    console.log(response);
    dispatch({ type: "GET_DIFFICULTYS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_DIFFICULTYS_FAILED", payload: error });
  }
};

export const addDifficulty = (difficulty) => async (dispatch) => {
  dispatch({ type: "ADD_DIFFICULTY_REQUEST" });
  try {
    const response = await axios.post(`/api/difficultys/adddifficulty`, {
      difficulty,
    });
    console.log(response);
    dispatch({ type: "ADD_DIFFICULTY_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_DIFFICULTY_FAILED", payload: error });
  }
};

export const getDifficultyById = (difficultyid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post(`/api/difficultys/getdifficultybyid`, {
      difficultyid,
    });
    console.log(response);
    dispatch({ type: "GET_DIFFICULTYBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_DIFFICULTYBYID_FAILED", payload: error });
  }
};

export const deleteDifficulty = (difficultyid) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/difficultys/deletedifficulty`, {
      difficultyid,
    });
    alert("Difficulty Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
