import React from "react";
import GamesListItem from "../GamesListItem/GamesListItem";
import { Row } from "antd";
import styles from "./GamesList.module.css";

const GamesList = ({ games }) => {
    return (
        <Row id={styles.list} gutter={[0, 32]} justify="space-evenly">
            {games.currentGamesList.map(game =>
                <GamesListItem key={game.id} game={game} />
            )}
        </Row>
    );
};

export default GamesList;