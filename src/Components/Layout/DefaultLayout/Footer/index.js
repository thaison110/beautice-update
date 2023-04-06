import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("contact")}>
                    <div className={cx("logo-footer")}>
                        <img
                            className={cx("logo-f")}
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo.png"
                            alt="logo"
                        />
                        <p className={cx("text-01")}>
                            <strong>Beautice</strong> is a Beauty Clinic
                            WordPress Theme.
                        </p>
                        <em className={cx("text-02")}>
                            Baker Steet 101, NY, United States.
                        </em>
                        <br />
                        <em className={cx("text-34")}>
                            <a className={cx("text-03")} href="tel:5215698966">
                                +521 569 8966.
                            </a>
                            <a
                                className={cx("text-04")}
                                href="mailto:mail@company.com"
                            >
                                mail@company.com.
                            </a>
                        </em>
                    </div>
                </div>
                <div className={cx("page-infor")}>
                    <div className={cx("page")}>
                        <h2 className={cx("text-page-1")}>Pages</h2>

                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Home
                        </a>
                        <br />
                        <br />
                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            About
                        </a>
                        <br />
                        <br />
                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />{" "}
                            Service
                        </a>
                        <br />
                        <br />

                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Gallery
                        </a>
                        <br />
                        <br />

                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Team
                        </a>
                    </div>
                    <div className={cx("infor")}>
                        <h2 className={cx("text-page-1")}>Pages</h2>

                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Terms & conditions
                        </a>
                        <br />
                        <br />
                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Privacy policy
                        </a>
                        <br />
                        <br />
                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />{" "}
                            Blog
                        </a>
                        <br />
                        <br />

                        <a className={cx("text-01")}>
                            <FontAwesomeIcon
                                className={cx("play-footer")}
                                icon={faCircleArrowRight}
                            />
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <div className={cx("footer-left")}>
                    <div className={cx("icon-socical")}>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faFacebookF}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faInstagram}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faTwitter}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faYoutube}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faLinkedinIn}
                                size="2x"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("footer-right")}>
                    <div className={cx("footer-right-text")}>
                        <p className={cx("text-right")}>
                            © AltDesain Studio 2021 – All right reserved.
                        </p>
                    </div>
                    <div className={cx("footer-right-button")}>
                        <button className={cx("footer-btn")}>
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className={cx("icon-footer")}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
