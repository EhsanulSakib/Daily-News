import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-11/12 xl:max-w-6xl m-auto font-poppins text-xs md:text-sm lg:text-base font-light">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;