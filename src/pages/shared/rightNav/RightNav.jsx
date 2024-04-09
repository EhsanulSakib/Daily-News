import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import './RightNav.css'


const RightNav = () => {

    return (
        <div>
            <h2 className="text-lg md:text-xl lg:text-2xl">Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn btn-outline w-full text-blue-500 rounded-md border-blue-500 text-base lg:text-lg">
                    <FaGoogle></FaGoogle>Login with Google
                </button>
                <button className="btn btn-outline border-black w-full text-base lg:text-lg">
                    <FaGithub></FaGithub>Login with GitHub
                </button>
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl">Find Us On</h2>
            <a href="" className=" text-black no-underline flex pl-4 items-center gap-2 border-b bg-[#F3F3F3] rounded-t-lg  py-2 text-xl">
                <FaFacebook></FaFacebook> <span>Facebook</span>
            </a>
            <a href="" className="  text-black no-underline flex pl-4 items-center gap-2 border py-2 bg-[#F3F3F3] text-xl">
                <FaTwitter></FaTwitter>  <span>Twitter</span>
            </a>
            <a href="" className="  text-black no-underline flex pl-4 items-center gap-2 border rounded-b-lg  py-2 text-xl bg-[#F3F3F3]">
                <FaInstagram></FaInstagram> <span>Instagram</span>
            </a>

            <div className="bg-[#F3F3F3] flex flex-col mt-4 items-center pb-4">
                <h2 className=" self-start ml-2 text-lg md:text-xl lg:text-2xl">Q-Zone</h2>

                <img src={qzone1} className="border border-dashed  border-stone-600 w-11/12 " />

                <img src={qzone2} className="mt-2 border border-dashed  border-stone-600 w-11/12 " />

                <img src={qzone3} className="border border-dashed  border-stone-600 w-11/12 " />

            </div>

            <div className="background text-white flex flex-col gap-2 p-4 items-center text-center my-4 h-96 justify-center">
                <h2 className=" self-start ml-2 text-lg md:text-xl lg:text-2xl">Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                <button className="btn bg-[#D72050] p-4">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;