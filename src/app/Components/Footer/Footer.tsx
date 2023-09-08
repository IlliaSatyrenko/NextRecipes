import "./Footer.css";

import { Box, Link, Container } from "@mui/material";

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Box className="footer-block">
                    <h2>Usefull links</h2>
                    <Link href="https://fictadvisor.com/" color="inherit">Fict advisor</Link>
                    <Link href="https://www.instagram.com/sr_fiot/" color="inherit">Fice instargram</Link>
                </Box>
                <Box className="footer-block">
                    <h2>Contacts</h2>
                    <span>Obolonska St, 34, Kyiv, 04071</span>
                    <span>+380(50)123-45-67</span>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;
