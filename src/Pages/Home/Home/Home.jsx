import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Fetured from "../Featured/Fetured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";
import RecommendMenu from "./RecommendMenu/RecommendMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <RecommendMenu></RecommendMenu>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;