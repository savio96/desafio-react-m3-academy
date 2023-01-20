import { NavigationBar } from "../../../components/NavigationBar/NavigationBar";
import { SearchBox } from "../../../components/SearchBox/SearchBox";
const BottomHeader = () => {
  return (
    <div className="bottom_header">
      <NavigationBar></NavigationBar>
      <div className="search-wrapper">
        <SearchBox></SearchBox>
      </div>
    </div>
  );
};

export { BottomHeader };
