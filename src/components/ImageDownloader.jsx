import { useEffect, useState } from "react";
import { useGetPhoto } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../store/reducer/images";

export default function ImageDownloader({ url, ...props }) {
  const {images} = useSelector(state=> state.images)
  const dispatch = useDispatch()
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!url) {
      return;
    }
    
    if(images[url]){ 
      setImageSrc(images[url])
      return
    } 

    const fetchImage = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useGetPhoto("/uploads/" + url, {
          responseType: "arraybuffer",
        });

        // Convert the binary data to a blob
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });

        // Create a blob URL
        const imageUrl = URL.createObjectURL(blob);

        // const response = await data.blob();
        // const imageUrl = URL.createObjectURL(response);

        // Assuming the image is in blob format
        // const blob = await response.blob();
        // const imageUrl = URL.createObjectURL(blob);

        setImageSrc(imageUrl);
        dispatch(addImage({url, imageUrl}))
      } catch (error) {
        console.error("Error fetching image:", error.message);
      }
    };

    fetchImage();
  }, [url]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return <img src={images[url] || imageSrc || "/Bg_Gray.png"} alt="" {...props} />
}
