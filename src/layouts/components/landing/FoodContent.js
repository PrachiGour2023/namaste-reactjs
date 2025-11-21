import React from "react";
import styles from "./style";
import { foodAppData } from "../../../utils/constant";

function FoodContent() {
  return (
    <div style={styles.container}>
      <h2>Order our best food options</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        {foodAppData.categories.map((food, index) => (
          <div key={index} style={styles.foodCard}>
            <img src={food.image} alt={food.name} style={styles.foodItem} />
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodContent;
