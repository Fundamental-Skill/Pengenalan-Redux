import "./App.css";
import { useState } from "react";
import ListKontak from "./components/ListKontak";

function App() {
  const [name, setName] = useState("Ade");
  return (
    <div className='App'>
      <h2>Aplikasi Kontak App {name}</h2>
      <ListKontak name={name} />
    </div>
  );
}

export default App;
