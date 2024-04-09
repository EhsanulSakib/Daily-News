import NewsContainer from "../shared/newsContainer/NewsContainer";
import Header from "../shared/header/Header";
import LeftNav from "../shared/leftNav/LeftNav";
import Navbar from "../shared/navbar/Navbar";
import RightNav from "../shared/rightNav/RightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className=" col-span-2">
                    <NewsContainer></NewsContainer>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;