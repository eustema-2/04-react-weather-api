import style from "./style.module.css";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";

export default function WeatherHeader({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search).then(() => {
      setSearch("");
    });
  }

  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Il Meteo</h1>
      <form className={style.header__form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci la città..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button className={style.header__button}>
          <FcSearch size="22" />
        </button>
      </form>
    </header>
  );
}
