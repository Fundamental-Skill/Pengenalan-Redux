import axios from "axios";

export const GET_LIST_KONTAK = "GIT_LIST_KONTAK";

export const getListKontak = () => {
  console.log("2. Masuk Action");
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
        console.log("3. Berhasil dapet Data : ", response);
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
        console.log("3. Gagal dapet Data : ", error);
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
