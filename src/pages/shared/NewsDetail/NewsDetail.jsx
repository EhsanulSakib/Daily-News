import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";


const NewsDetail = ({ category }) => {
    const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = category

    return (
        <div className="rounded-lg shadow-lg mb-8">
            <div className=" bg-[#F3F3F3] p-2">
                <div className="flex justify-between">
                    <div className="flex">
                        <img src={author.img} alt="" className="w-12 rounded-full" />
                        <div>
                            <h2 className="text-base font-semibold m-0">{author.name}</h2>
                            <h3 className="text-sm font-medium m-0">{author.published_date}</h3>
                        </div>
                    </div>

                    <div className="text-lg">
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="text-xl font-bold">{title}</h2>
                <img src={image_url} alt="" className="w-full" />
                <p className="text-sm text-[#706F6F]">{details.slice(0 - 200)}</p>
                <Link className="no-underline text-[#FF8C47]">Read More</Link>
                <hr className="border-dashed border-[#E7E7E7]" />
                <div className="flex justify-between px-2">
                    <div className="flex items-center gap-4">
                        <div className="text-xl text-[#FF8C47]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="text-[#706F6F] text-lg">{rating.number}</h2>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye className="text-xl" />
                        <h2 className="text-[#706F6F] text-lg">{total_view}</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetail;