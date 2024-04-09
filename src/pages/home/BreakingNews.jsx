import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex w-full gap-2 my-2 md:my-4 lg:my-8 bg-[#F3F3F3]">
            <button className="btn bg-[#D72050] rounded-none text-white text-lg ">Latest</button>
            <Marquee speed={70} pauseOnHover={true}>
                <Link className="mr-8 no-underline text-[#403F3F]">React Components... Here link will come...</Link>
                <Link className="mr-8 no-underline">React Components... Here link will come...</Link>
                <Link className="mr-8 no-underline">React Components... Here link will come...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;