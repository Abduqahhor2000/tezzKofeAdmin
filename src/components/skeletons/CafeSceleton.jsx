import { Skeleton } from "@mui/material";

// eslint-disable-next-line react/prop-types
function CafeSceleton() {
  return (
    <div className="rounded-xl border-2 border-gray-100 h-[237px] p-5">
      <div className="flex justify-between mb-7">
        <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem", width: "30%" }} />
        <Skeleton variant="circular" animation="wave"  sx={{  width: "24px", height: "24px" }} />
      </div>
      <div className="flex justify-between items-start mb-7">
        <div className="flex-grow">
          <Skeleton variant="text" animation="wave"  sx={{ fontSize: "2rem", width: "50%" }} />
          <Skeleton variant="text" animation="wave"  sx={{ fontSize: "1rem", width: "80%" }} />
          <Skeleton variant="text" animation="wave"  sx={{ fontSize: "1rem", width: "80%" }} />
        </div>
        <Skeleton
          variant="circular"
          className="!w-16 !h-16 p-2 !rounded-2xl"
          animation="wave" 
        ></Skeleton>
      </div>
      <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
    </div>
  );
}

export default CafeSceleton;
