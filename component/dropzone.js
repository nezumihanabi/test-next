import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function CustomDropzone(props) {
  const [fileList, setFileList] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    props.setFiles(acceptedFiles);
    const tmp = acceptedFiles.map((file, idx) => (
      <li key={idx}>{file.path}</li>
    ));
    setFileList(tmp);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ファイルをドロップしてください</p>
      ) : (
        <p>ファイルをドロップするか、クリックしてファイルを選択して下さい</p>
      )}
      {fileList}
    </div>
  );
}
