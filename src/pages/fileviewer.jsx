import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function FileViewer() {
  //   const [filenames, setfilenames] = useState([]);
  //   const mockdata = [
  //     { name: "john", id: 49 },
  //     { name: "a", id: 50 },
  //     { name: "b", id: 51 },
  //   ];
  //   setfilenames(mockdata);
  const filenames = [
    { name: "john", id: 49 },
    { name: "a", id: 50 },
    { name: "b", id: 51 },
  ];
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
