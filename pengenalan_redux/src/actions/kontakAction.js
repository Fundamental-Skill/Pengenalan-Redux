import axios from "axios";

export const GET_LIST_KONTAK = "GIT_LIST_KONTAK";
// 5. Buat const
export const ADD_KONTAK = "ADD_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // GET API
    axios({
      method: "GET",
      url: "http://localhost:3004/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil get API
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// 6. Buat add kontak, parameter "data" operan dari index addkontak dispatch
export const addKontak = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // GET API
    axios({
      method: "POST",
      url: "http://localhost:3004/kontaks",
      timeout: 120000,
      // 7. tambah parameter data
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data : ", response.data);
        // berhasil get API
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapet Data : ", error.message);
        // gagal get api
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
