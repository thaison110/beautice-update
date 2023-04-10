import styles from "./Services.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
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
                    <h1>Services FAQ’s</h1>
                </div>
                <div className={cx("section010")}></div>
            </div>
        </div>
    );
}

export default Services;
