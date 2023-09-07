import ShopCard from "../ShopCard/ShopCard";

const ShopTab = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 justify-center items-center p-2">
      {items.map((item) => (
        <ShopCard key={item._id} item={item}></ShopCard>
      ))}
    </div>
  );
};

export default ShopTab;
