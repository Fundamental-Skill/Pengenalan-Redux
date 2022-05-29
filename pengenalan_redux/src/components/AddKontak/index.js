import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

const AddKontak = () => {
  // 1. Buat State
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  // 12. addKontakResult daimbil ari reducer
  const { addKontakResult } = useSelector((state) => state.KontakReducer);

  //   4. useDispatch
  const dispatch = useDispatch();

  //   3. handlesubmit
  const handleSubmit = (event) => {
    // supaya tidak reload
    event.preventDefault();
    console.log("1. masuk handle submit");
    // 11. Enable dipatch
    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  //13. Manfaatkan useEffect
  useEffect(() => {
    if (addKontakResult) {
      console.log("5. Masuk Component did update");
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>Add Kontak</h4>
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
