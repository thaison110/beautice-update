import styles from "./Services.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Services() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section001")}>
                    <div className={cx("Main-Services")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>Our Services</h2>
                            <h1 className={cx("description-main")}>
                                We focus on your beauty
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("section002")}>
                    <div className={cx("left-section002")}>
                        <img
                            className={cx("img-left-section002")}
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_5TJ0Hoy5FLY.png"
                            alt=""
                        />
                    </div>
                    <div className={cx("right-section002")}>
                        <img
                            className={cx("img-right-section002")}
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_ZOT2Mewzmh8.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className={cx("section003")}>
                    <div className={cx("left-section003")}>
                        <img
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_gzfIO69Q6eM.png"
                            alt=""
                        />
                    </div>
                    <div className={cx("right-section003")}>
                        <img
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_pTrhfmj2jDA-1.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className={cx("section004-background")}></div>
                <div className={cx("section005")}>
                    <div className={cx("left-section005")}>
                        <div className={cx("img-section05-left")}>
                            <img
                                className={cx("img-section04-left")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/services-animation1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("right-section005")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Beauty Consultation <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                We services beauty <br /> consultation
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br />
                                <br />
                                <br />
                            </p>
                            <a
                                className={cx("Get-the-Serviecs")}
                                href="./contact"
                            >
                                {" "}
                                Get the Serviecs >>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx("section006")}>
                    <div className={cx("left-section006")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Skin Treatements
                                <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                Skin care and <br /> treatment by expert
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero
                                <br />
                                <br />
                            </p>
                            <a
                                className={cx("Get-the-Serviecs")}
                                href="./contact"
                            >
                                {" "}
                                Get the Serviecs >>
                            </a>
                        </div>
                    </div>
                    <div className={cx("right-section006")}>
                        <div className={cx("img-section04-left")}>
                            <img
                                className={cx("img-section04-left")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/services-animation2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("section007")}>
                    <div className={cx("left-section007")}>
                        <div className={cx("img-section05-left")}>
                            <img
                                className={cx("img-section04-left")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/services-animation1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("right-section007")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Beauty Consultation <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                We services beauty <br /> consultation
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br />
                                <br />
                                <br />
                            </p>
                            <a
                                className={cx("Get-the-Serviecs")}
                                href="./contact"
                            >
                                {" "}
                                Get the Serviecs >>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx("section008")}>
                    <div className={cx("slogan-background")}></div>
                    <div className={cx("slogan-background-color")}></div>
                    <div className={cx("slogan")}>
                        <div className={cx("slogan-title-des")}>
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
                        <div className={cx("slogan-btn")}>
                            <FontAwesomeIcon
                                className={cx("slogan-icon")}
                                icon={faCirclePlay}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className={cx("section009")}>
                    <div className={cx("FAQ")}>
                        <div className={cx("faq-center")}>
                            <div className={cx("faq-title-des")}>
                                <h1 className={cx("title")}>Services FAQ’s</h1>
                                <div className={cx("hr", "center-center")}>
                                    <div className={cx("pink")}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("FAQ-collapse")}>
                            <div className={cx("ques-collapse")}>
                                <Link
                                    className={cx("w100", "decoration-none")}
                                    data-toggle="collapse"
                                    data-target="#FAQ1"
                                >
                                    <div
                                        className={cx(
                                            "space-between",
                                            "FAQ-text",
                                            "mt1"
                                        )}
                                    >
                                        <span>
                                            Is beauty consultation handled
                                            thoroughly?
                                        </span>
                                    </div>
                                    <div id="FAQ1" className="collapse">
                                        <div className={cx("content-collapse")}>
                                            <div className={cx("des-collapse")}>
                                                <p
                                                    className={cx(
                                                        "des-collapse"
                                                    )}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                    ut aliquam, purus sit amet
                                                    luctus venenatis, lectus
                                                    magna fringilla urna
                                                </p>
                                                <p
                                                    className={cx(
                                                        "des-collapse"
                                                    )}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                    ut aliquam, purus sit amet
                                                    luctus venenatis, lectus
                                                    magna fringilla urna
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className={cx("w100", "decoration-none")}
                                    data-toggle="collapse"
                                    data-target="#FAQ2"
                                >
                                    <div
                                        className={cx(
                                            "space-between",
                                            "FAQ-text",
                                            "mt1"
                                        )}
                                    >
                                        <span>
                                            Can I be beautiful in an instant
                                            time?
                                        </span>
                                    </div>
                                    <div id="FAQ2" className="collapse">
                                        <div className={cx("content-collapse")}>
                                            <div className={cx("des-collapse")}>
                                                <p
                                                    className={cx(
                                                        "des-collapse"
                                                    )}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                    ut aliquam, purus sit amet
                                                    luctus venenatis, lectus
                                                    magna fringilla urna
                                                    porttitor rhoncus dolor
                                                    purus non enim praesent
                                                    elementum facilisis leo, vel
                                                    fringilla est ullamcorper
                                                    eget nulla
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className={cx("w100", "decoration-none")}
                                    data-toggle="collapse"
                                    data-target="#FAQ3"
                                >
                                    <div
                                        className={cx(
                                            "space-between",
                                            "FAQ-text",
                                            "mt1"
                                        )}
                                    >
                                        <span>
                                            Are there any side effects to the
                                            treatment methods or treatments at
                                            this clinic?
                                        </span>
                                    </div>
                                    <div id="FAQ3" className="collapse">
                                        <div className={cx("content-collapse")}>
                                            <div className={cx("des-collapse")}>
                                                <p
                                                    className={cx(
                                                        "des-collapse"
                                                    )}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                    ut aliquam, purus sit amet
                                                    luctus venenatis, lectus
                                                    magna fringilla urna
                                                    porttitor rhoncus dolor
                                                    purus non enim praesent
                                                    elementum facilisis leo, vel
                                                    fringilla est ullamcorper
                                                    eget nulla
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className={cx("w100", "decoration-none")}
                                    data-toggle="collapse"
                                    data-target="#FAQ4"
                                >
                                    <div
                                        className={cx(
                                            "space-between",
                                            "FAQ-text",
                                            "mt1"
                                        )}
                                    >
                                        <span>
                                            Do professionals have accreditation
                                            in their respective fields?
                                        </span>
                                    </div>
                                    <div id="FAQ4" className="collapse">
                                        <div className={cx("content-collapse")}>
                                            <div className={cx("des-collapse")}>
                                                <p
                                                    className={cx(
                                                        "des-collapse"
                                                    )}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                    ut aliquam, purus sit amet
                                                    luctus venenatis, lectus
                                                    magna fringilla urna
                                                    porttitor rhoncus dolor
                                                    purus non enim praesent
                                                    elementum facilisis leo, vel
                                                    fringilla est ullamcorper
                                                    eget nulla
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
