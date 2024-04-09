import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (

        <div>
            <h2 className="text-lg md:text-xl lg:text-2xl">All Category</h2>
            <div className="py-4 nav">
                {
                    categories?.map(category =>
                        <NavLink to={`category/${category.id}`} className="block text-2xl no-underline p-3 text-[#9F9F9F]" key={category.id} >
                            {category.name}
                        </NavLink>)
                }
            </div>

            <div className="my-4">
                <img src={image1} alt="" />
                <h2 className="text-lg md:text-xl m-0 lg:text-2xl">New Study Reveals Surprising Impact of Art Education on Children's Academic Success</h2>
                <div className="flex gap-4">
                    <h2 className="text-lg">Education</h2>
                    <h2 className="flex gap-2 items-center text-lg text-[#9F9F9F]"><SlCalender></SlCalender> <span>Jan 4, 2024</span></h2>
                </div>
            </div>

            <div className="my-4">
                <img src={image2} alt="" />
                <h2 className="text-lg md:text-xl m-0 lg:text-2xl">Tech Dominates: Top Rated Jobs in 2024 Driven by Technology and Innovations</h2>
                <div className="flex gap-4">
                    <h2 className="text-lg">Career</h2>
                    <h2 className="flex gap-2 items-center text-lg text-[#9F9F9F]"><SlCalender></SlCalender> <span>Jan 4, 2024</span></h2>
                </div>
            </div>

            <div className="my-4">
                <img src={image3} alt="" />
                <h2 className="text-lg md:text-xl m-0 lg:text-2xl">Thrilling Showdown: Intense Matchup Between Rivals Ends in Nail-Biting Draw</h2>
                <div className="flex gap-4">
                    <h2 className="text-lg">Sports</h2>
                    <h2 className="flex gap-2 items-center text-lg text-[#9F9F9F]"><SlCalender></SlCalender> <span>Jan 4, 2024</span></h2>
                </div>
            </div>

        </div >
    );
};

export default LeftNav;