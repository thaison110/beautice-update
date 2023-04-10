import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarTimes,
    faCircleUser,
    faFile,
    faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section001")}>
                    <div className={cx("slogan-background")}></div>
                    <div className={cx("slogan-background-color")}></div>
                    <div className={cx("slogan")}>
                        <div className={cx("slogan-title-des")}>
                            <h4 className={cx("subtitle")}>
                                Beautice Beauty Clinic
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={cx("section002")}>
                    <div className={cx("section002-left")}>
                        <div className={cx("post-001")}>
                            <div className={cx("img-post-001")}>
                                {" "}
                                <img
                                    className={cx("img-section002")}
                                    src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_3ewkNkfJj2k.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx("text-post-001")}>
                                <div className={cx("post-meta")}>
                                    <span className={cx("post-author")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCircleUser}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-date")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCalendarTimes}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-consu")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faFolder}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                </div>
                                <div className={cx("text-post-total")}>
                                    <h1 className={cx("title-post")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h1>
                                    <p className={cx("text-post")}>
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. I am alone, and
                                        feel the charm of existence in this
                                        spot, which was created for the…
                                    </p>
                                    <div className={cx("btn-01")}>
                                        <Link className={cx("link")} to="">
                                            <button
                                                className={cx("btn-contact")}
                                            >
                                                Continue
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("post-001")}>
                            <div className={cx("img-post-001")}>
                                {" "}
                                <img
                                    className={cx("img-section002")}
                                    src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_7tDGb3HrITg.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx("text-post-001")}>
                                <div className={cx("post-meta")}>
                                    <span className={cx("post-author")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCircleUser}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-date")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCalendarTimes}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-consu")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faFolder}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                </div>
                                <div className={cx("text-post-total")}>
                                    <h1 className={cx("title-post")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h1>
                                    <p className={cx("text-post")}>
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. I am alone, and
                                        feel the charm of existence in this
                                        spot, which was created for the…
                                    </p>
                                    <div className={cx("btn-01")}>
                                        <Link className={cx("link")} to="">
                                            <button
                                                className={cx("btn-contact")}
                                            >
                                                Continue
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("post-001")}>
                            <div className={cx("img-post-001")}>
                                {" "}
                                <img
                                    className={cx("img-section002")}
                                    src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_0_McYfdyEDA.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx("text-post-001")}>
                                <div className={cx("post-meta")}>
                                    <span className={cx("post-author")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCircleUser}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-date")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faCalendarTimes}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                    <span className={cx("post-meta-consu")}>
                                        <FontAwesomeIcon
                                            className={cx("icon-user")}
                                            icon={faFolder}
                                        />
                                        <a className={cx("text")}>kuebantall</a>
                                    </span>
                                </div>
                                <div className={cx("text-post-total")}>
                                    <h1 className={cx("title-post")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h1>
                                    <p className={cx("text-post")}>
                                        A wonderful serenity has taken
                                        possession of my entire soul, like these
                                        sweet mornings of spring which I enjoy
                                        with my whole heart. I am alone, and
                                        feel the charm of existence in this
                                        spot, which was created for the…
                                    </p>
                                    <div className={cx("btn-01")}>
                                        <Link className={cx("link")} to="">
                                            <button
                                                className={cx("btn-contact")}
                                            >
                                                Continue
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("section002-right")}>
                        <div className={cx("right")}>
                            <div className={cx("input")}>
                                <span className={cx("inputsearch")}>
                                    <div className={cx("input-search")}>
                                        <input placeholder="type your word here"></input>
                                    </div>
                                    <div className={cx("btn-01")}>
                                        <Link className={cx("link")} to="">
                                            <button
                                                className={cx("btn-contact")}
                                            >
                                                Search
                                            </button>
                                        </Link>
                                    </div>
                                </span>
                            </div>
                            <div className={cx("box01-right")}>
                                <div className={cx("box01-text")}>
                                    <h1 className={cx("title-box1")}>
                                        Recent Posts
                                    </h1>
                                    <h2 className={cx("text-box1")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h2>
                                    <h2 className={cx("text-box1")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h2>
                                    <h2 className={cx("text-box1")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h2>
                                    <h2 className={cx("text-box1")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h2>
                                    <h2 className={cx("text-box1")}>
                                        How much does a consultation cost at our
                                        clinic?
                                    </h2>
                                </div>
                            </div>
                            <div className={cx("box02-right")}>
                                <div className={cx("box01-text")}>
                                    <h1 className={cx("title-box1")}>
                                        Blog Categories
                                    </h1>
                                    <h2 className={cx("text-box1")}>Beauty</h2>
                                    <h2 className={cx("text-box1")}>
                                        Consultation
                                    </h2>
                                    <h2 className={cx("text-box1")}>
                                        Treatments
                                    </h2>
                                </div>
                            </div>
                            <div className={cx("box03-right")}>
                                <div className={cx("box01-text")}>
                                    <h1 className={cx("title-box1")}>
                                        Blog Categories
                                    </h1>
                                    <div className={cx("text01")}>
                                        <a className={cx("beauty")}>Beauty</a>
                                        <a className={cx("clinic")}>clinic</a>
                                    </div>
                                    <div className={"text01"}>
                                        <a className={cx("consultation")}>
                                            consultation
                                        </a>
                                        <a className={cx("facial")}>facial</a>
                                        <a className={cx("product")}>product</a>
                                    </div>
                                    <div className={"text01"}>
                                        <a className={cx("skincare")}>
                                            skincare
                                        </a>
                                        <a className={cx("treatments")}>
                                            treatments
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("box04-right")}>
                                <div className={cx("box01-text")}>
                                    <h1 className={cx("title-box1")}>
                                        Latest Comment
                                    </h1>
                                    <div className={cx("boxlogo")}>
                                        <div className={cx("logo")}>
                                            <img
                                                className={cx("imglogo")}
                                                src="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&r=g"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("textlogo")}>
                                            <a className={cx("textlogo01")}>
                                                A WordPress Commenter on Don’t
                                                be afraid to start your beauty
                                                treatment
                                            </a>
                                            <p className={cx("textlogo02")}>
                                                November 21, 2021
                                            </p>
                                            <p className={cx("textlogo03")}>
                                                Hi, this is a comment. To get
                                                started with moderating,
                                                editing, and deleting comments,
                                                please visit the Comments screen
                                                in…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section003")}></div>
            </div>
        </div>
    );
}

export default Blog;
