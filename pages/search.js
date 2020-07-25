import Footer from "../component/footer";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
function Search() {
  const [word, setWord] = useState("");
  return (
    <div>
      <InputBase placeholder="検索" onChange={(e) => setWord(e.target.value)} />
      <IconButton
        type="submit"
        onClick={(e) => {
          const response = await fetch(`http://localhost:3000/api/search`);
        }}
      >
        <SearchIcon />
      </IconButton>
      <Footer></Footer>
    </div>
  );
}

export default Search;
