import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Login = () => {
    const handleSubmit = e => {


    }

    return (
        <div className=" bg-slate-100 pb-4 md:pb-8 lg:pb-12">
            <Navbar></Navbar>
            <div className="flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 m-auto py-4 md:py-8 lg:py-12 bg-white shadow-md">
                <h2>Please Login</h2>
                <form onSubmit={handleSubmit} className="w-11/12 md:w-3/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white text-lg font-bold">Login</button>
                    </div>
                </form>
                <div>
                    <p>Does not have any account? <Link to='/register' className="no-underline text-red-500 font-bold">Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;