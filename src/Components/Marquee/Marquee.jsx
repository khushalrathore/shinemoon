import styles from "./Marquee.module.css";
import * as kr from "../../data.jsx"

const Marquee = () => {
    return (
        <div className={ styles.marquee }>{ kr.projectName }</div>
    )
}

export default Marquee;