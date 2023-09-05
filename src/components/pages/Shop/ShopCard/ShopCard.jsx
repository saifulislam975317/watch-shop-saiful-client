const ShopCard = ({ item }) => {
  const { name, image, price, details } = item;
  return (
    <div>
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className=" pt-2 px-4">
          <img
            src={image}
            alt="watches"
            className="rounded-xl w-[300px] h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <h3 className="text-orange-500 font-bold ">Price ${price}</h3>
          <div className="card-actions">
            <button className="btn btn-info">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
