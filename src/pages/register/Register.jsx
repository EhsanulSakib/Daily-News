import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className=" bg-slate-100 pb-4 md:pb-8 lg:pb-12">
            <Navbar></Navbar>
            <div className="flex gap-4 rounded-xl flex-col items-center justify-center w-11/12 md:w-1/2 m-auto py-4 md:py-8 lg:py-12 bg-white shadow-md">
                <h2>Please Register</h2>
                <form onSubmit={handleSubmit} className="w-11/12 md:w-3/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <div className="flex gap-2">
                                <input type="checkbox" required name="terms" id="terms" />
                                <p>Accept <Link className="font-bold no-underline text-black">Term & Conditions</Link></p>
                            </div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white text-lg font-bold">Login</button>
                    </div>
                </form>
                <div>
                    <p>Already have any account? <Link to='/login' className="no-underline text-red-500 font-bold">Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;