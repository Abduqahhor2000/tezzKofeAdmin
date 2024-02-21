import { useEffect, useState } from "react";
import { usePost, usePostPhoto } from "../../api";

function ImageInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      handleFileUpload();
    }
  }, [selectedFile]);

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const chunkSize = 5 * 1024 * 1024; // 5MB (adjust based on your requirements)
    const totalChunks = Math.ceil(selectedFile.size / chunkSize);
    const chunkProgress = 100 / totalChunks;
    let chunkNumber = 0;
    let start = 0;
    let end = 0;

    const uploadNextChunk = async () => {
      console.log(selectedFile);
      if (end <= selectedFile.size) {
        const chunk = selectedFile.slice(start, end)
        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("chunkNumber", chunkNumber);
        formData.append("totalChunks", totalChunks);
        formData.append("originalname", selectedFile.name);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePost("/upload", formData)
          .then(({ data }) => {
            console.log(data);
            const temp = `Chunk ${
              chunkNumber + 1
            }/${totalChunks} uploaded successfully`;
            setStatus(temp);
            setProgress(Number((chunkNumber + 1) * chunkProgress));
            console.log(temp);
            chunkNumber++;
            start = end;
            end = start + chunkSize;
            uploadNextChunk();
          })
          .catch((error) => {
            console.error("Error uploading chunk:", error);
          });
      } else {
        setProgress(100);
        setSelectedFile(null);
        setStatus("File upload completed");
      }
    };

    uploadNextChunk();
  };

  return (
    <div>
      <div className="text-xs leading-tight pb-1 font-clashDispley pl-2.5">
        Rasm joylang!
      </div>
      <div className="w-[156px] h-20 relative bg-dashed bg-gray-100 rounded-lg p-0.5">
        <div className="relative w-full h-full">
          {true ? (
            <img
              className="absolute rounded-lg object-contain w-full h-full cursor-pointer"
              alt=""
              src=""
            />
          ) : (
            <img
              src="/photo.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}

          <input
            onChange={handleFileChange}
            type="file"
            accept="image/*"
            className="w-full file:opacity-0 absolute h-full top-0 left-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageInput;
