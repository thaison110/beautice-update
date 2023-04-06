import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

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
                    <div className={cx("page")}></div>
                    <div className={cx("infor")}></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
