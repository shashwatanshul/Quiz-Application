import axios from "axios";
export const getAllClassss = () => async (dispatch) => {
  dispatch({ type: "GET_CLASSSS_REQUEST" });

  try {
    const response = await axios.get(`/api/classss/getallclassss`);
    console.log(response);
    dispatch({ type: "GET_CLASSSS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CLASSSS_FAILED", payload: error });
  }
};

export const addClasss = (classs) => async (dispatch) => {
  dispatch({ type: "ADD_CLASSS_REQUEST" });
  try {
    const response = await axios.post(`/api/classss/addclasss`, {
      classs,
    });
    console.log(response);
    dispatch({ type: "ADD_CLASSS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_CLASSS_FAILED", payload: error });
  }
};

export const getClasssById = (classsid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post(`/api/classss/getclasssbyid`, {
      classsid,
    });
    console.log(response);
    dispatch({ type: "GET_CLASSSBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CLASSSBYID_FAILED", payload: error });
  }
};

export const deleteClasss = (classsid) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/classss/deleteclasss`, {
      classsid,
    });
    alert("Classs Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
