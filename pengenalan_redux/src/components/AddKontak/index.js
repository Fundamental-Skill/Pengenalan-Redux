import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";

const AddKontak = () => {
  // 1. Buat State
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  //5.5 State untuk detailKontak
  const [id, setId] = useState("");

  // 12. addKontakResult daimbil dari reducer
  // 5.6 detailKontakResult daimbil dari reducer
  // 5.13 updateKontakResult daimbil dari reducer
  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);

  //   4. useDispatch
  const dispatch = useDispatch();

  //   3. handlesubmit
  const handleSubmit = (event) => {
    // supaya tidak reload
    event.preventDefault();
    //5.8 Update dan add
    if (id) {
      //update kontak
      dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }));
    } else {
      // add kontak
      dispatch(addKontak({ nama: nama, nohp: nohp }));
    }
  };

  //13. Manfaatkan useEffect
  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  //5.7. detailKontak useEffect
  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  //5.14 Manfaatkan useEffect
  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
      {/* 2. Buat Form */}
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type='text'
          name='nama'
          placeholder='Nama...'
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type='nohp'
          name='nphp'
          placeholder='No HP...'
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
