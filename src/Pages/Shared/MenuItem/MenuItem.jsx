
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <section >
            <div className="flex space-x-5">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}$</p>
            <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
            </div>
        </section>
        
    );
};

export default MenuItem;