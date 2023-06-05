import { useEffect, useState } from "react";;

import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import RecommendItem from "../../../Shared/RecommendItem/RecommendItem";

const RecommendMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
             <SectionTitle
                heading={"---should try---"}
                subHeading={"CHEF RECOMMENDS"}
            ></SectionTitle>
             <div className="grid md:grid-cols-4 gap-4 mx-4">
                {
                    menu.map(item => <RecommendItem
                    key={item._id}
                    item={item}
                    ></RecommendItem>)
                }
            </div>
        </section>
    );
};

export default RecommendMenu;