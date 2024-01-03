import PropTypes from "prop-types";


const Name = () => (
  <h3 style={{ fontSize: "16px", fontWeight: 500 }}>Tasks</h3>
);

const Container = ({ children }) => {
  const containerStyle = {
    height: "40px",
    width: "15vw",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    color: "#777",
    fontWeight: 100,
    margin: "4px 0",
    cursor: "pointer",
    background: "#fafafa",
  };

  return <div style={containerStyle}>{children}</div>;
};
Container.propTypes = {
    children: PropTypes.node.isRequired,
  };
const Icon = () => (
  <img
    src="../../../public/Img/taskFill.png"
    style={{ width: "20px", margin: "8px 16px" }}
    alt="icon"
  />
);

const SidebarItem = () => {
  return (
    <Container>
      <Icon/>
      <Name />
    </Container>
  );
};

export default SidebarItem;
