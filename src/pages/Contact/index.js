import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import Iframe from "~/Components/Iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocation,
    faLocationCrosshairs,
    faLocationDot,
    faMailBulk,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section01")}>
                    <div className={cx("section01-left")}>
                        <div className={cx("text-left")}>
                            <h1 className={cx("title")}>Contact Us</h1>
                            <h2 className={cx("text")}>
                                Contact service for our customers
                            </h2>
                        </div>
                    </div>
                    <div className={cx("section01-right")}>
                        <div className={cx("text-right")}>
                            <p className={cx("text")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis from a Lorem Ipsum passage.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("background-contact")}></div>
                <div className={cx("section02")}>
                    <div className={cx("section02-left")}>
                        <div className={cx("img-form")}>
                            <img
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/animation-contacts.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("section02-right")}>
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
                <div className={cx("section003")}>
                    <div className={cx("map")}>
                        <div className={cx("slogan-background")}>
                            <Iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0602208221712!2d105.78042821517003!3d21.030276285997594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cb69f572b%3A0x3b8fbd089b01207f!2sBac%20Ha%20Software%20(BHSoft)!5e0!3m2!1svi!2s!4v1681179157130!5m2!1svi!2s"
                                width="100%"
                                height="550"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></Iframe>
                        </div>
                    </div>
                </div>
                <div className={cx("section004")}>
                    <div className={cx("text-section004")}>
                        <h1 className={cx("title")}>Get in Touch</h1>
                        <h2 className={cx("title2")}>
                            Get direct handling by us{" "}
                        </h2>
                        <p className={cx("title3")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam.
                        </p>
                    </div>
                </div>
                <div className={cx("section005")}>
                    <div className={cx("box-contact")}>
                        <div className={cx("box001")}>
                            <div className={cx("box001-content")}>
                                <div className={cx("header-box")}>
                                    <div className={cx("iconheader")}>
                                        <FontAwesomeIcon
                                            className={cx("icon")}
                                            icon={faLocationDot}
                                        />
                                    </div>
                                </div>
                                <div className={cx("title-box")}>
                                    <h1 className={cx("title")}>
                                        101 Baker Street, NY
                                    </h1>
                                </div>
                                <div className={cx("text-box")}>
                                    <p className={cx("text")}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit ut aliquam, purus sit
                                        <br />
                                        <br />
                                    </p>
                                </div>
                                <div className={cx("box1-end")}>
                                    <a
                                        className={cx("Address")}
                                        href="https://www.google.com/maps/"
                                    >
                                        Address
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("box001")}>
                            <div className={cx("box001-content")}>
                                <div className={cx("header-box")}>
                                    <div className={cx("iconheader")}>
                                        <FontAwesomeIcon
                                            className={cx("icon")}
                                            icon={faPhone}
                                        />
                                    </div>
                                </div>
                                <div className={cx("title-box")}>
                                    <h1 className={cx("title")}>
                                        +896 120 5889
                                    </h1>
                                </div>
                                <div className={cx("text-box")}>
                                    <p className={cx("text")}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit ut aliquam, purus sit
                                        <br />
                                        <br />
                                    </p>
                                </div>
                                <div className={cx("box1-end")}>
                                    <a
                                        className={cx("Address")}
                                        href="tel:8961205889"
                                    >
                                        Phone
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("box001")}>
                            <div className={cx("box001-content")}>
                                <div className={cx("header-box")}>
                                    <div className={cx("iconheader")}>
                                        <FontAwesomeIcon
                                            className={cx("icon")}
                                            icon={faMailBulk}
                                        />
                                    </div>
                                </div>
                                <div className={cx("title-box")}>
                                    <h1 className={cx("title")}>
                                        mail@company.com
                                    </h1>
                                </div>
                                <div className={cx("text-box")}>
                                    <p className={cx("text")}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit ut aliquam, purus sit
                                        <br />
                                        <br />
                                    </p>
                                </div>
                                <div className={cx("box1-end")}>
                                    <a
                                        className={cx("Address")}
                                        href="mailto:mail@company.com"
                                    >
                                        Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
