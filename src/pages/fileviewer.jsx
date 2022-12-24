import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import html from "../api/config";

export default function FileViewer() {
  const [filenames, setfilenames] = useState([]);
  const [directory_path, setdirectory_path] = useState("/");

  useEffect(() => {
    html
      .filename_get("api/v1/ls", {
        directory_path: directory_path,
        db: "sql",
      })
      .then((val) => {
        console.log(val);
        setfilenames(val.data.children.map((name, id) => ({ name: name, id: id })));
      });
  },[directory_path]);

  const navigate = useNavigate();
  return (
    <>
      <nav>
        {filenames.length ? (
          <>
            <ul>
              {filenames.map((filename) => (
                <li key={filename.id}>{filename.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <>The Folder is empty</>
        )}
      </nav>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
}
