import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const BreakingNews = () => {
    const { news } = useContext(AuthContext)

    return (
        <div className="flex w-full gap-2 my-2 md:my-4 lg:my-8 bg-[#F3F3F3]">
            <button className="btn bg-[#D72050] rounded-none text-white text-lg ">Latest</button>
            <Marquee speed={70} pauseOnHover={true}>
                {
                    news?.map((flow, idx) => <Link key={idx} className="text-[#403F3F] mr-6 no-underline">{flow.title}</Link>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;