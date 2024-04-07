import Header from "../shared/header/Header";
import LeftNav from "../shared/leftNav/LeftNav";
import Navbar from "../shared/navbar/Navbar";
import RightNav from "../shared/rightNav/RightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className='text-2xl'>This is Home</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div>
                    <h2>News Coming Soon....</h2>
                </div>
                <div>
                    <RightNav></RightNav>

                </div>
            </div>
        </div>
    );
};

export default Home;