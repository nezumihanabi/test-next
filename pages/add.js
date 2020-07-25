import Footer from "../component/footer";
import CustomDropZone from "../component/dropzone";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
function Add() {
  const [memo, setMemo] = useState('');
  const [file, setFile] = useState([]);
  return (
    <div>
      <TextField multiline rows="4" placeholder="メモ"
       variant="outlined" onChange={(e) => setMemo(e.target.value)}/>
      <CustomDropZone setFile={setFile}/>
      <Button type="submit" variant="outlined" onClick={(e) => {
        const obj = {memo: memo};
        const method = "POST";
        const body = JSON.stringify(obj);
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };
         await fetch(`http://localhost:3000/api/search`,  {method, headers, body});
      }}>
        送信
      </Button>
      <Footer></Footer>
    </div>
  );
}

export default Add;
