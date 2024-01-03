import CategorieItem from "../Categorie";
import Arrow from "../../Img/arrow.svg";
import Add from "../../Img/add.svg";
import { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

const ExpandSidebarItem = ({ name, icon }) => {
  const [active, setActive] = useState(false);

  function handleActivate() {
    setActive(!active);
  }

  const categList = [
    /* Insert your categories data here */
    { name: "Category 1", color: "#ff0000" },
    { name: "Category 2", color: "#00ff00" },
    { name: "Category 3", color: "#0000ff" },
  ];

  return (
    <div className={`outer-container ${active ? "active" : ""}`}>
      <div
        className={`container ${active ? "active" : ""}`}
        onClick={handleActivate}
      >
        <img src={icon} alt={name + " icon"} />
        <h3>{name}</h3>
        <img
          className={`arrow ${active ? "active" : ""}`}
          src={Arrow}
          alt="arrow"
        />
      </div>
      <div className={`cat-area ${active ? "active" : ""}`}>
        {categList.map((cat, index) => (
          <CategorieItem key={index} name={cat.name} color={cat.color} />
        ))}
        <div className="add-area">
          <img src={Add} alt="add" />
          <p>Add new</p>
        </div>
      </div>
    </div>
  );
};
ExpandSidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default ExpandSidebarItem;
