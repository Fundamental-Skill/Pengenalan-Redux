import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

const ListKontak = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getListKontak
    console.log("1. use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
    </div>
  );
};

export default ListKontak;
