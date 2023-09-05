import ShopCard from "../ShopCard/ShopCard";

const ShopTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 justify-center items-center p-4">
      {items.map((item) => (
        <ShopCard key={item._id} item={item}></ShopCard>
      ))}
    </div>
  );
};

export default ShopTab;
