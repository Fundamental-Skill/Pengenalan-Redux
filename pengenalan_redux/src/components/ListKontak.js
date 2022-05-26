import React from "react";
import CardKontak from "./CardKontak";

const ListKontak = ({ name }) => {
  return (
    <div>
      <h2>List Kontak</h2>
      <CardKontak name={name} />
    </div>
  );
};

export default ListKontak;
