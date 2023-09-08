import "./Header.css";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import { Container } from "@mui/material";
import Image from "next/image";

function Header() {
    const logo = require("../../../assets/logo.png");

    return (
        <header>
            <Container maxWidth="xl">
                <Image className="logo" src={logo} alt="Recipes.com Logo" />
                <HeaderProfile />
            </Container>
        </header>
    );
}

export default Header;
