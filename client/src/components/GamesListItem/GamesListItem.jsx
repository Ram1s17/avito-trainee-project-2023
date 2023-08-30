import React from "react";
import { Col, Image } from "antd";
import styles from "./GamesListItem.module.css";
import { convertDate } from "../../utils/utils";

const GamesListItem = ({ game }) => {
    return (
        <Col xl={7} className={styles.gamesListItem}>
            <Image
                className={styles.previewImage}
                src={game.thumbnail}
                preview={false}>
            </Image>
            <p className={styles.gameTitle}>{game.title}</p>
            <div className={styles.gameInfo}>
                <h3>Genre: </h3>
                <p>{game.genre}</p>
            </div>
            <div className={styles.gameInfo}>
                <h3>Publisher: </h3>
                <p>{game.publisher}</p>
            </div>
            <div className={styles.gameInfo}>
                <h3>Release date: </h3>
                <p>{convertDate(game.release_date)}</p>
            </div>
        </Col>
    );
};

export default GamesListItem;