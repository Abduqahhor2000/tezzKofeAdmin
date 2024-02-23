import { useEffect, useState } from "react";
import { usePost } from "../../api";
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from "@mui/material";
import ImageDownloader from "../ImageDownloader";
// import ImageDownloader from "../ImageDownloader";

function ImageInput({ file, setFile }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(!file) return
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
    setProgress(0)
    setLoading(true)
    const fileId = `photo-${uuidv4()}`;
    const chunkSize = 0.1 * 1024 * 1024; // 5MB (adjust based on your requirements)
    const totalChunks = Math.ceil(selectedFile.size / chunkSize);
    const chunkProgress = 100 / totalChunks;
    let chunkNumber = 0;
    let start = 0;
    let end = Math.min(chunkSize, selectedFile.size);

    const uploadNextChunk = async () => {
      console.log(selectedFile);
      if (end <= selectedFile.size && chunkNumber < totalChunks) {
        const chunk = selectedFile.slice(start, end);
        console.log(start, end, chunkNumber, selectedFile.size);
        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("fileId", fileId);
        formData.append("chunkNumber", chunkNumber);
        formData.append("totalChunks", totalChunks);
        formData.append("originalname", selectedFile.name);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePost("/upload", formData)
          .then((data) => {
            const temp = `Chunk ${
              chunkNumber + 1
            }/${totalChunks} uploaded successfully`;
            setStatus(temp);
            setProgress(Number((chunkNumber + 1) * chunkProgress));
            console.log(temp);
            chunkNumber++;
            start = end;
            end = Math.min(end + chunkSize, selectedFile.size);
            if (data.status === 201) {
              setFile(data.data);
            }
            uploadNextChunk();
          })
          .catch((error) => {
            setLoading(false)
            console.error("Error uploading chunk:", error);
          });
      } else {
        setProgress(100);
        getBaseURL(selectedFile)
        setSelectedFile(null)
        setStatus("File upload completed");
        setLoading(false)
      }
    };

    uploadNextChunk();
  };

  function getBaseURL (file) {
    if(!file) return ""

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result)
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div className="text-xs leading-tight pb-1 font-SFProDisplay font-normal pl-2.5">
        Rasm joylang!
      </div>
      <div className="w-[156px] h-20 relative bg-dashed bg-gray-100 rounded-lg p-0.5">
        <div className="relative w-full h-full">
          {file && selectedImage ? (
            <img
              src={selectedImage}
              className="absolute rounded-lg object-contain w-full h-full cursor-pointer"
            />
          ) :
          file ? (
           <ImageDownloader url={file} className="absolute rounded-lg object-contain w-full h-full cursor-pointer"/>
          ) :
          (
            <img
              src="/photo.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}
 
          <input
            onChange={handleFileChange}
            type="file"
            disabled={loading}
            accept="image/*"
            className="w-full file:opacity-0 absolute h-full top-0 left-0 cursor-pointer text-transparent"
          />
        </div>
      </div>
      {
         loading ? <LinearProgress className="mt-2" variant="determinate" value={progress} /> : null
      }
    </div>
  );
}

export default ImageInput;
