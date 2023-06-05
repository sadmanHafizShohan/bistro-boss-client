import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Fetured = () => {
    return (
        <div className="featured-item bg-fixed  text-white py-8 mb-12">
            <SectionTitle heading={'check it out'}
                subHeading={'Featured Items'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 py-20 px-10 mx-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>20 may, 2023</p>
                    <p className="uppercase">Where i can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea architecto sint, quibusdam illum similique dicta maiores tempore quasi fugiat, quos molestiae aperiam impedit debitis libero nihil autem veritatis beatae. Architecto!</p>
                    <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Fetured;