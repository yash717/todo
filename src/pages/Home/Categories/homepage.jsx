import ExpandSidebarItem from "../../../components/ExpandSidebarItem/expandsidebaritem";
import SidebarItem from "../../../components/sidebaritems/sidebar";
import "./styles.css"; 
const Home = () => {
  return (
    <div className="page">
      <div className="sidebar">
        <img src="../../../../public/Img/Logo.png" alt="Logo" className="logo" />
        <div className="tabs">
          <SidebarItem />
          <ExpandSidebarItem/>
        </div>
        {/* Logout Link */}
      </div>
      <div className="main">
        <h1 className="header">All your tasks</h1>
        <div className="title-filter">
          <h3 className="title">Tasks</h3>
          <div className="filter-field">{/* Filter Tags and Icon */}</div>
        </div>
        {/* Task Cards */}
        <div className="add-task"></div>
      </div>
      {/* Delete and Add Modals */}
    </div>
  );
};

export default Home;
