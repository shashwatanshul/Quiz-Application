import axios from "axios";
export const getAllSchoolcodes = () => async (dispatch) => {
  dispatch({ type: "GET_SCHOOLCODES_REQUEST" });

  try {
    const response = await axios.get(`/api/schoolcodes/getallschoolcodes`);
    console.log(response);
    dispatch({ type: "GET_SCHOOLCODES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SCHOOLCODES_FAILED", payload: error });
  }
};

export const addSchoolcode = (schoolcode) => async (dispatch) => {
  dispatch({ type: "ADD_SCHOOLCODE_REQUEST" });
  try {
    const response = await axios.post(`/api/schoolcodes/addschoolcode`, {
      schoolcode,
    });
    console.log(response);
    dispatch({ type: "ADD_SCHOOLCODE_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_SCHOOLCODE_FAILED", payload: error });
  }
};

export const getSchoolcodeById = (schoolcodeid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post(`/api/schoolcodes/getschoolcodebyid`, {
      schoolcodeid,
    });
    console.log(response);
    dispatch({ type: "GET_SCHOOLCODEBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_SCHOOLCODEBYID_FAILED", payload: error });
  }
};

export const deleteSchoolcode = (schoolcodeid) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/schoolcodes/deleteschoolcode`, {
      schoolcodeid,
    });
    alert("School Code Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
