import Footer from "../component/footer";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import Router from "next/router";

function Search() {
  const [word, setWord] = useState("");
  return (
    <div>
      <InputBase placeholder="検索" onChange={(e) => setWord(e.target.value)} />
      <IconButton
        type="submit"
        onClick={async (e) => {
          try {
            Router.push({ pathname: "/list", query: { word: word } });
          } catch (e) {
            console.error(e);
          }
        }}
      >
        <SearchIcon />
      </IconButton>
      <Footer></Footer>
    </div>
  );
}

export default Search;
