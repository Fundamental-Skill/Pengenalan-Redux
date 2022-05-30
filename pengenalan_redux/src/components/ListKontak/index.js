import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListKontak,
  deleteKontak,
  detailKontak,
} from "../../actions/kontakAction";

const ListKontak = () => {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);

  // dispatch sebagai penghubung
  const dispatch = useDispatch();

  //1. useEffect untuk get contact ambil dari action
  useEffect(() => {
    // panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);

  // 4.6 Delete use effect untuk reload
  useEffect(() => {
    if (deleteKontakResult) {
      console.log("5. Masuk Component did update");
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -{/* 4.5 delete button */}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(detailKontak(kontak))}>
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
};

export default ListKontak;
