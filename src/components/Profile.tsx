import { Profiler } from "inspector";
import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallangesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/pedroor.png" alt="Pedroor" />

            <div>
                <strong>Pedro Arthur</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}