import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section001")}></div>
                <div className={cx("section002")}></div>
                <div className={cx("section003")}></div>
                <div className={cx("section004")}></div>
                <div className={cx("section005")}></div>
                <div className={cx("section006")}></div>
                <div className={cx("section007")}></div>
            </div>
        </div>
    );
}

export default About;
