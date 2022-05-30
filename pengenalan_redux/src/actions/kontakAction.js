import axios from "axios";

export const GET_LIST_KONTAK = "GIT_LIST_KONTAK";
// 5. Buat const
export const ADD_KONTAK = "ADD_KONTAK";
//4.1 Const Delete
export const DELETE_KONTAK = "DELETE_KONTAK";
// 5.1 Const Detail Kontak
export const DETAIL_KONTAK = "DETAIL_KONTAK";
// 5.9 Const Update Kontak
export const UPDATE_KONTAK = "UPDATE_KONTAK";

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

// 4.2 Delete Kontak
export const deleteKontak = (id) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // Loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // GET API
    axios({
      method: "DELETE",
      url: "http://localhost:3004/kontaks/" + id,
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data : ", response.data);
        // berhasil get API
        dispatch({
          type: DELETE_KONTAK,
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
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// 5.2 Detail Kontak
export const detailKontak = (data) => {
  return (dispatch) =>
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
};

//5.10 update
export const updateKontak = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // Loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // GET API
    axios({
      method: "PUT",
      url: "http://localhost:3004/kontaks/" + data.id,
      timeout: 120000,
      // 7. tambah parameter data
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data : ", response.data);
        // berhasil get API
        dispatch({
          type: UPDATE_KONTAK,
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
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
