import { Skeleton } from "@mui/material";

function TableSceleton() {
  return (
    <div className="h-[160px] p-5 border-[rgb(230, 230, 230)] border-[1px] rounded-xl">
      <div className="flex justify-between pb-6">
        <div className="flex-grow">
          <Skeleton
            animation={"wave"}
            sx={{ fontSize: "2rem", width: "50%" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ fontSize: "1rem", width: "60%" }}
          />
        </div>
        <Skeleton
          variant="circular"
          animation={"wave"}
          className="!w-16 !h-16 p-2 !rounded-2xl"
        ></Skeleton>
      </div>
      <div className="flex justify-between items-center">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "1rem", width: "30%" }}
        />
        <Skeleton
          variant="circular"
          sx={{ width: "120px", height: "30px", borderRadius: "20px" }}
          animation="wave"
        ></Skeleton>
      </div>
    </div>
  );
}

export default TableSceleton;
