// 4.3 Import DELETE_KONTAK
import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
  DETAIL_KONTAK,
  UPDATE_KONTAK,
} from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  //4.4 Buat State Delete kontak
  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  //5.3 State untuk Detail Kontak
  detailKontakResult: false,

  //5.11 Buat State update kontak
  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage,
      };

    // 10. AddKontak
    case ADD_KONTAK:
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMessage,
      };

    //4.4 DeleteKontak
    case DELETE_KONTAK:
      return {
        ...state,
        deleteKontakResult: action.payload.data,
        deleteKontakLoading: action.payload.loading,
        deleteKontakError: action.payload.errorMessage,
      };

    //5.4 DetailKontak
    case DETAIL_KONTAK:
      return {
        ...state,
        detailKontakResult: action.payload.data,
      };

    //5.12 UpdateKontak
    case UPDATE_KONTAK:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        updateKontakResult: action.payload.data,
        updateKontakLoading: action.payload.loading,
        updateKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
