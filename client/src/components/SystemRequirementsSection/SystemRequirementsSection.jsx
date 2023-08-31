import React from "react";
import styles from "./SystemRequirementsSection.module.css";
import { changeFirstLetterToUpperCase } from "../../utils/utils";

const SystemRequirementsSection = ({ systemRequirements }) => {
    return (
        <div id={styles.systemRequirements}>
            <p className={styles.sectionTitle}>MINIMUM SYSTEM REQUIREMENTS</p>
            {Object.entries(systemRequirements).map((requirement, index) =>
                <div className={styles.systemRequirementItem} key={index}>
                    <h3>{changeFirstLetterToUpperCase(requirement[0])}:</h3>
                    <p>{requirement[1]}</p>
                </div>
            )}
        </div>
    );
};

export default SystemRequirementsSection;