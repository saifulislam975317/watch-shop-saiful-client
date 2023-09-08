import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../hooks/useProducts";
import ShopTab from "./ShopTab/ShopTab";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products] = useProducts();

  const casio = products.filter((product) => product.category === "casio");
  const classic = products.filter((product) => product.category === "classic");
  const modern = products.filter((product) => product.category === "modern");
  const sports = products.filter((product) => product.category === "sports");
  return (
    <div className="mt-8">
      <SectionTitle heading={"Order your favourite watch"}></SectionTitle>
      <Tabs
        className="text-center"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Casio</Tab>
          <Tab>Classic</Tab>
          <Tab>Modern</Tab>
          <Tab>Sports</Tab>
        </TabList>
        <TabPanel>
          <ShopTab items={casio} key={casio._id}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={classic} key={classic._id}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={modern} key={modern._id}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={sports} key={sports._id}></ShopTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
