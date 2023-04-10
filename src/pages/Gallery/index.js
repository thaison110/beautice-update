import styles from "./Gallery.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Gallery() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section001")}>
                    <div className={cx("section001-left")}>
                        <h2 className={cx("title")}>Our Gallery</h2>
                        <h1 className={cx("des")}>
                            Check out the collection pictures from our clinic
                        </h1>
                    </div>
                    <div className={cx("section001-right")}>
                        <p className={cx("text")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                            <br /> ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div>
                </div>
                <div className={cx("section002")}>
                    <div className={cx("grid-container")}>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery1.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery2.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery3.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery4.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery5.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery6.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery7.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery8.png"
                                alt=""
                            />
                        </div>
                        <div class={cx("item")}>
                            <img
                                className={cx("img-section002")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/img-gallery9.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("section003")}>
                    <div className={cx("section003-text")}>
                        <p className={cx("text")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor
                            purus non enim,{" "}
                        </p>
                        <a className={cx("ourteams")}>
                            <strong>Our teams</strong>
                        </a>
                        .
                    </div>
                </div>
                <div className={cx("section004")}>
                    <div className={cx("slogan-background")}></div>
                    <div className={cx("slogan-background-color")}></div>
                    <div className={cx("slogan")}>
                        <div className={cx("slogan-title-des")}>
                            <h1 className={cx("title")}>
                                Watch the video tour
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
                <div className={cx("section005-background")}></div>
                <div className={cx("section006")}>
                    <div className={cx("left-section006")}>
                        <div className={cx("left-text")}>
                            <h1 className={cx("title")}>Get In Touch</h1>
                            <p className={cx("description")}>
                                Want to be handled by our <br />
                                professional team immediately?
                            </p>
                            <p className={cx("description1")}>
                                Id dui erat sed quam tellus in purus.
                                Pellentesque congue fringilla cras tellus enim.
                            </p>
                        </div>
                    </div>
                    <div className={cx("right-section006")}>
                        <div className={cx("btn-01")}>
                            <Link className={cx("link")} to="./contact">
                                <button className={cx("btn-contact")}>
                                    Make an Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
