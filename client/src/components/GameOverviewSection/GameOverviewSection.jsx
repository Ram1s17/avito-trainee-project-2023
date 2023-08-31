import React from "react";
import { Carousel, Image } from "antd";
import styles from "./GameOverviewSection.module.css";

const GameOverviewSection = ({ game }) => {
    return (
        <div>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <Carousel autoplay>
                {game.screenshots.map((screenshot, index) =>
                    <Image
                        key={index}
                        className={styles.image}
                        src={screenshot.image}
                        preview={false}
                    >
                    </Image>
                )}
            </Carousel>
            <p id={styles.gameDescription}>{game.description}</p>
        </div>
    );
};

export default GameOverviewSection;