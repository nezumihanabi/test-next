import Footer from "../component/footer";
import CustomDropZone from "../component/dropzone";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
function Add() {
  const [memo, setMemo] = useState("");
  const [files, setFiles] = useState([]);
  return (
    <div>
      <TextField
        multiline
        rows="4"
        placeholder="メモ"
        variant="outlined"
        onChange={(e) => setMemo(e.target.value)}
      />
      <CustomDropZone setFiles={setFiles} />
      <Button
        type="submit"
        variant="outlined"
        onClick={async (e) => {
          const file = files[0];
          const obj = { memo: memo, file: file, filename: file.path };
          const method = "POST";
          const body = JSON.stringify(obj);
          const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          try {
            await fetch(`http://localhost:3000/api/add`, {
              method,
              headers,
              body,
            });
          } catch (e) {
            console.error(e);
          }
        }}
      >
        送信
      </Button>
      <Footer></Footer>
    </div>
  );
}

export default Add;
