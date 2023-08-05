import React from "react";
import NavBar from "./Navbar/Navbar";
import Navpage from "./Navbar/Navpage";

export interface Props {
  onClick: () => void;
}

const Header = () => {
  const [searchPage, setSearchPage] = React.useState(false);

  const handleSearchPage = () => {
    setSearchPage(!searchPage);
  };

  return (
    <div>
      {searchPage ? (
        <Navpage onClick={handleSearchPage} />
      ) : (
        <NavBar onClick={handleSearchPage} />
      )}
    </div>
  );
};

export default Header;
