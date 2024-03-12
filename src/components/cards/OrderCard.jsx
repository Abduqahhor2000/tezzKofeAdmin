import ImageDownloader from "../ImageDownloader";

function OrderCard({ order, type = true, time }) {
  return (
    <>
      <div
        className={`rounded-xl p-4 ${
          type ? "bg-gray-100" : "bg-rose-50"
        } font-SFProDisplay`}
      >
        <div className="pb-2 flex justify-between border-b-[1px] border-gray-200">
          <div className="flex items-center font-normal">
            <span
              className={`block w-3 h-3 rounded-full bg-green-500 ${
                type ? "bg-green-500" : "bg-red"
              }`}
            ></span>
            <span className="px-2 text-gray-500 text-base ">Chaqiruv</span>
            <span className="text-xs leading-tight text-gray-400 pt-1">
              /{" "}
              {new Date(time).getUTCHours() < 10
                ? `0${new Date(time).getUTCHours()}`
                : new Date(time).getUTCHours()}
              :
              {new Date(time).getUTCMinutes() < 10
                ? `0${new Date(time).getUTCMinutes()}`
                : new Date(time).getUTCMinutes()}
            </span>
          </div>
          {/* <img src="/x.svg" alt="" /> */}
        </div>
        <div className="pt-3 flex">
          <ImageDownloader
            className="w-20 h-20 rounded-[10px] object-cover"
            url={order?.product?.photo}
            alt=""
          />
          <div className="pl-3">
            <div className="pb-2 text-sm font-semibold font-unbounded">
              {order?.product?.name}
            </div>
            <div className="text-xs text-gray-400 font-medium">
              {order?.product?.price} uzs
            </div>
            <div className="pt-1 text-sm font-semibold text-gray-500">
              <span className="text-primary"> {order?.quantity} ta : </span>{" "}
              {order.price} uzs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
