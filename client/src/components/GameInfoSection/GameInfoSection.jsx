import React from "react";
import { Image } from "antd";
import styles from "./GameInfoSection.module.css";
import { convertDate } from "../../utils/utils";

const GameInfoSection = ({ game }) => {
    return (
        <div id={styles.gameInfo}>
            <p className={styles.sectionTitle}>MAIN INFORMATION</p>
            <Image
                className={styles.previewImage}
                src={game.thumbnail}
                preview={false}>
            </Image>
            <h2>{game.title}</h2>
            <div className={styles.gameInfoItem}>
                <h3>Genre: </h3>
                <p>{game.genre}</p>
            </div>
            <div className={styles.gameInfoItem}>
                <h3>Publisher: </h3>
                <p>{game.publisher}</p>
            </div>
            <div className={styles.gameInfoItem}>
                <h3>Developer: </h3>
                <p>{game.developer}</p>
            </div>
            <div className={styles.gameInfoItem}>
                <h3>Release date: </h3>
                <p>{convertDate(game.release_date)}</p>
            </div>
        </div>
    );
};

export default GameInfoSection;