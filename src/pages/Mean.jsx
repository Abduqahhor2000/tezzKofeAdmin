import Header from "../components/Header";
import SideBar from "../components/SideBar";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Mean({children}) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow overflow-auto flex">
          <div className="min-w-[244px] bg-gray-100">
            <SideBar />
          </div>
          <div className="flex-grow overflow-x-hidden overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
}

export default function withLayout(WrappedComponent) {
  return function wrapper(props) {
    return (
      <Mean>
        <WrappedComponent {...props} />
      </Mean>
    );
  };
}
