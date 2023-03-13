import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "darkcyan" }}>
        <Container>
          <Link to="/">
            <img
              width={30}
              src="https://cdn-icons.flaticon.com/svg/3917/3917032.svg?token=exp=1678702105~hmac=86a57b2cc99e0c7f2a1d394b4fc530c4"
              alt="error"
            />
          </Link>

          <Link to="/add-blog">
            <NavbarBrand>AddBlog</NavbarBrand>
          </Link>
          <Link to="/about-us">
            <NavbarBrand>AboutUs</NavbarBrand>
          </Link>
          <Link to="/contacts">
            <img
              width={30}
              src="https://www.flaticon.com/svg/vstatic/svg/5069/5069169.svg?token=exp=1678702402~hmac=356bbc163147b73c11fdad4f8df6870d"
              alt="error"
            />
          </Link>
          <Link to="/select">
            <NavbarBrand>Select</NavbarBrand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
