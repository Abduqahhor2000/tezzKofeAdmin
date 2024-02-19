import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ItemMenu({ data }) {
  const [direct, setDirect] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setDirect(
      "/" + location.pathname.split("/")[1] === data.url ? true : false
    );
    // eslint-disable-next-line react/prop-types
  }, [data.url, location.pathname]);

  return (
    // eslint-disable-next-line react/prop-types
    <Link to={data.url}>
      <div
        className={`group rounded-lg px-5 py-3 font-roboto mb-1 text-base leading-5 flex items-start cursor-pointer ${
          direct ? "bg-[#EBEBEB]" : ""
        }`}
      >
        <img
          src={
            direct ? data.svg.active : data.svg.inactive
          }
        />
        <span
          className={
            direct
              ? "text-blue-500 pl-1"
              : "text-[#322E38] pl-1 group-hover:text-blue-500 duration-150"
          }
        >
          {data.text}
        </span>
      </div>
    </Link>
  );
}

export default ItemMenu;
