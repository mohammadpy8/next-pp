import { HeaderHomePage, MenuHomePage, SliderHomePage } from "@/components/module";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderHomePage />
      </div>
      <div>
        <SliderHomePage />
      </div>
      <div>
        <MenuHomePage />
      </div>
    </div>
  );
};

export default HomePage;
