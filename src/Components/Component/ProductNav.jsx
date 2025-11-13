

const ProductNav =({ categories, selectCategory, setSelectCategory }) => {
    return (
        <div className="flex flex-wrap  justify-start ">
            {
                categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() =>setSelectCategory(cat)}
                        className={`px-1.5 py-1   rounded-full font-sm transition-all duration-300  
                  ${selectCategory === cat ? "bg-[#3BB77E] text-black" : " text-gray-300 hover:bg-[#3BB77E] hover:text-black"}  
                    `} >{cat} </button>))
            }
        </div>
    );
};

export default ProductNav;