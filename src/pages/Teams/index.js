import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section001")}>
                    {/* About */}
                    <div className={cx("Main-Services")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>About</h2>
                            <h1 className={cx("description-main")}>
                                We are a leading beauty clinic that has
                                <br />
                                been around since 2002
                            </h1>
                            <p className={cx("description-main-1")}>
                                Porta rhoncus orci condimentum vitae lobortis eu
                                dignissim non massa. Non parturient amet,
                                <br /> feugiat tellus sagittis, scelerisque eget
                                nulla turpis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("section002")}>
                    <div className={cx("watch-background")}></div>
                </div>
                <div className={cx("background")}></div>
                <div className={cx("section003")}>
                    <div className={cx("Teams")}>
                        <div className={cx("Teams-text")}>
                            <h2 className={cx("title-Teams")}>
                                Professional Teams
                            </h2>
                            <h1 className={cx("description-Teams")}>
                                The Professional expert
                            </h1>
                            <p className={cx("description-Teams-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("section004")}>
                    <div className={cx("Professional-section")}>
                        <div className={cx("Professional-box-01")}>
                            <div className={cx("Professional-header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_pTrhfmj2jDA.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                            </div>
                            <div className={cx("icon-socical")}>
                                <div className={cx("blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("blue-icon")}
                                        icon={faFacebookF}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("pink-media")}>
                                    <FontAwesomeIcon
                                        className={cx("pink-icon")}
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("light-blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("light-blue-icon")}
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("Professional-box-01")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_FVh_yqLR9eA.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                            </div>
                            <div className={cx("icon-socical")}>
                                <div className={cx("blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("blue-icon")}
                                        icon={faFacebookF}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("pink-media")}>
                                    <FontAwesomeIcon
                                        className={cx("pink-icon")}
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("light-blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("light-blue-icon")}
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("Professional-box-01")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_mEZ3PoFGs_k.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                                <div className={cx("icon-socical")}>
                                    <div className={cx("blue-media")}>
                                        <FontAwesomeIcon
                                            className={cx("blue-icon")}
                                            icon={faFacebookF}
                                            size="2x"
                                        />
                                    </div>
                                    <div className={cx("pink-media")}>
                                        <FontAwesomeIcon
                                            className={cx("pink-icon")}
                                            icon={faInstagram}
                                            size="2x"
                                        />
                                    </div>
                                    <div className={cx("light-blue-media")}>
                                        <FontAwesomeIcon
                                            className={cx("light-blue-icon")}
                                            icon={faTwitter}
                                            size="2x"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section005")}>
                    <div className={cx("slogan-background")}></div>
                    <div className={cx("slogan-background-color")}></div>
                    <div className={cx("slogan", "center-center")}>
                        <div className={cx("slogan-title-des")}>
                            <h4 className={cx("subtitle", "mt0", "")}>
                                Business Slogan
                            </h4>
                            <h1 className={cx("title")}>
                                Best responsibility and service for our
                                customers
                            </h1>
                            <div className={cx("description")}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section006")}>
                    <div className={cx("left-section006")}>
                        <div className={cx("img-section04-left")}>
                            <img
                                className={cx("img-section04-left")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Illustration-about-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("right-section006")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Our Vision
                                <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                Be the best and go international
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br /> <br /> Nunc, ipsum ornare mauris sit quam
                                quis enim. Varius
                                <br /> tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("section007")}>
                    <div className={cx("left-section007")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Our Vision
                                <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                Be the best and go international
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br /> <br /> Nunc, ipsum ornare mauris sit quam
                                quis enim. Varius
                                <br /> tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                    <div className={cx("right-section007")}>
                        <div className={cx("img-section04-left")}>
                            <img
                                className={cx("img-section04-left")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Illustration-about-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("section008-background")}></div>
                <div className={cx("section009")}>
                    <div className={cx("section009-text")}>
                        <h2 className={cx("section009-title")}>
                            Our Clients
                            <br />
                        </h2>
                        <h1 className={cx("section009-description-main")}>
                            Well-known agencies
                        </h1>
                        <p className={cx("section006-description-main-1")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className={cx("section0010")}>
                    <slider
                        className={cx("section007-logo")}
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={5}
                    >
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img", "logo01")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO1.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO2.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO3.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO4.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO5.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img", "logo05")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO6.png"
                                alt=""
                            />
                        </div>
                    </slider>
                </div>
            </div>
        </div>
    );
}

export default About;
