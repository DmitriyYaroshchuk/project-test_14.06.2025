import {links} from "../../../engine/config/routers.jsx";
import {Link} from "react-router-dom";
import LogoImg from './../../../assets/images/Logo.png';
import {Img} from "./styles.js";

function Logo() {
    return (
        <Link to={links.main}>
            <Img src={LogoImg} alt="Logo" />
        </Link>
    )
}
export default Logo;