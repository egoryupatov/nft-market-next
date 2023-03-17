"use client";

import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function Searchbar() {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  //не выводится галка drop down у выбора категорий
  //выбор категорий выводится со стандартным стилем

  return (
    <form className="searchbar">
      <select
        className="searchbar__categories"
        value={category}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setCategory(event.target.value)
        }
      >
        <option value="all">All Categories</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input
        type="text"
        className="searchbar__input"
        placeholder="Enter your search here..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(event.target.value)
        }
      />
      <button
        type="submit"
        className="searchbar__button"
        onClick={handleSearchClick}
      >
        <Image
          src="/svg/search-white.svg"
          alt="search"
          width={"17"}
          height={"17"}
        />
      </button>
    </form>
  );
}
