import { useState } from "react";

function ImageInput() {
  const [image, setImage] = useState("");

  function imageSelectHandler(image) {
    var reader = new FileReader();
    if (image) {
      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(image);
    }
  }

  return (
    <div>
      <div className="text-xs leading-tight pb-1 font-clashDispley pl-2.5">
        Rasm joylang!
      </div>
      <div className="w-[156px] h-20 relative bg-dashed bg-gray-100 rounded-lg p-0.5">
        <div className="relative w-full h-full">
          {image ? (
            <img
              className="absolute rounded-lg object-contain w-full h-full cursor-pointer"
              alt=""
              src={image}
            />
          ) : (
            <img
              src="/src/assets/photo.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}

          <input
            onChange={(e) => imageSelectHandler(e.target.files[0])}
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
