import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* <div className={cx("background-001")}> */}
                <div className={cx("section001")}>
                    <div className={cx("left")}>
                        <h1 className={cx("title")}>
                            Clinic & beauty consultant
                        </h1>
                        <p className={cx("description")}>
                            It is a long established fact that a reader will be
                            by the readable content of a page.
                        </p>
                        <div className={cx("btn-01")}>
                            <Link className={cx("link")} to="">
                                <button className={cx("btn-contact")}>
                                    More Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={cx("right")}>
                        <img
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Frame-1.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* </div> */}
                {/* <div className={cx("section002")}>
                    <div className={cx("Main-Services")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>Main Services</h2>
                            <h1 className={cx("description-main")}>
                                Learn services to focus
                                <br />
                                on your beauty
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
                <div className={cx("section003")}>
                    <div className={cx("box-section")}>
                        <div className={cx("box-01")}>
                            <div className={cx("header-box")}>
                                <div className={cx("box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("box-body")}>
                                <h4 className={cx("box-title")}>
                                    Beauty consultation
                                </h4>
                                <p className={cx("box-description")}>
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </div>
                        <div className={cx("box-01")}>
                            <div className={cx("header-box")}>
                                <div className={cx("box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("box-body")}>
                                <h4 className={cx("box-title")}>
                                    Skin treatments
                                </h4>
                                <p className={cx("box-description")}>
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </div>
                        <div className={cx("box-01")}>
                            <div className={cx("header-box")}>
                                <div className={cx("box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation3.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("box-body")}>
                                <h4 className={cx("box-title")}>
                                    Beauty product
                                </h4>
                                <p className={cx("box-description")}>
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("background-002")}></div>
                <div className={cx("section004")}>
                    <div className={cx("left-aboutus-total")}>
                        <div className={cx("left-aboutus-text")}>
                            <h2 className={cx("title-main")}>About Us</h2>
                            <h1 className={cx("description-main")}>
                                We are the best beauty clinic
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero. Nunc,
                                ipsum ornare mauris sit quam quis enim. Varius
                                tellus in suspendisse placerat.
                                <br /> <br /> Id dui erat sed quam tellus in
                                purus. Pellentesque congue fringilla cras tellus
                                enim.
                            </p>
                        </div>
                        <div className={cx("left-button")}>
                            <div className={cx("btn-learnmore")}>
                                <Link
                                    className={cx("link")}
                                    to=""
                                    href="./Service"
                                >
                                    <button className={cx("btn-aboutus-more")}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                            <div className="btn-icon-watch">
                                <button className={cx("btn-play")}>
                                    <FontAwesomeIcon
                                        className={cx("icon-play")}
                                        icon={faPlayCircle}
                                    />
                                    What Video
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("right-aboutus")}>
                        <img
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_LRXYS0tSyGc.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className={cx("section005")}>
                    <div className={cx("section005-team")}>
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
                </div>
                <div className={cx("section006")}>
                    <div className={cx("Professional-section")}>
                        <div className={cx("Professional-box-01")}>
                            <div className={cx("Professional-header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation1.png"
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
                        <div className={cx("Professional-box-02")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation1.png"
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
                        <div className={cx("Professional-box-03")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Animation1.png"
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
                <div className={cx("background-003")}></div>
                <div className={cx("section007")}>
                    <div className={cx("section-form")}>
                        <div className={cx("img-form")}>
                            <img
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/animation-contacts.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("input-form")}>
                            <div className={cx("title-form")}>
                                <h2 className={cx("title-contactus")}>
                                    Contact us
                                </h2>
                                <h1 className={cx("description-main-us")}>
                                    Send your inquiry to our
                                    <br />
                                    expert team
                                </h1>
                                <p className={cx("description-main-us-1")}>
                                    Lorem ipsum dolor sit amet nulla turapis
                                    tellus
                                </p>
                            </div>
                            <div className={cx("form-data")}>
                                <div className={cx("form01")}>
                                    <div className={cx("first-name")}>
                                        <input
                                            id="first-name"
                                            type="text"
                                            placeholder="First Name"
                                        ></input>
                                    </div>
                                    <div className={cx("last-name")}>
                                        <input
                                            id="last-name"
                                            placeholder="Last Name"
                                        ></input>
                                    </div>
                                </div>
                                <div className={cx("form02")}>
                                    <input placeholder="Email adress"></input>
                                </div>
                                <div className={cx("form02")}>
                                    <input placeholder="Subject message"></input>
                                </div>
                                <div className={cx("form03")}>
                                    <input placeholder="Your inquiry here"></input>
                                </div>
                            </div>
                            <div className={cx("btn-form")}>
                                <button className={cx("btnform")}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
