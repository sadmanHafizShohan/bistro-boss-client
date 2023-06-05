
const RecommendItem = ({item}) => {
    const {name, recipe, image} = item;
    return (
        <div className="text-center mb-12">
            
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="p-8 rounded-t-lg" src={image} alt="product image" />
                </div>
                <div className="px-5 pb-5">
                    <div>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <span className=" text-gray-900 dark:text-white">{recipe}</span>
                        <button className="btn btn-outline border-0 border-b-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendItem;