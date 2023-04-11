import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo-header")}>
                    <img
                        className={cx("logo")}
                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo-common.png"
                        alt="logo"
                    />
                </div>
                <div className={cx("menu-header")}>
                    <FontAwesomeIcon
                        className={cx("menu-icon")}
                        icon={faBars}
                    />
                </div>
                <nav className={cx("navi")}>
                    <Link className={cx("text", "blue")} to="/">
                        Home+
                    </Link>
                    <Link className={cx("text")} to="/about">
                        About
                    </Link>
                    <Link className={cx("text")} to="/services">
                        Service
                    </Link>
                    <Link className={cx("text")} to="/gallery">
                        Gallery
                    </Link>
                    <Link className={cx("text")} to="/blog">
                        Blog
                    </Link>
                </nav>
                <div className={cx("btn-header")}>
                    <Link to="/contact">
                        <button className={cx("btn")} href="./contact">
                            <span className={cx("btn-text")}>Contact</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
