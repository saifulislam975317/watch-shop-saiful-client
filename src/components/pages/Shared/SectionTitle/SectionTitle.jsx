const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center  py-8">
      <h2 className=" font-bold  text-3xl">{heading}</h2>
      <p className="text-green-500 text-xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
