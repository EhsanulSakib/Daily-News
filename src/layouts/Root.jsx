import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-11/12 2xl:max-w-6xl m-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;