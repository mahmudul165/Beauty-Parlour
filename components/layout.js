import Navbar from "../components/navbar";
import styles from "../styles/Layout.module.css";
import HeaderContainer from "./HeaderContainer";
const Layout = ({ children }) => {
  return (
    <div  className="container-fluid">
      <header className={styles.header_bg}>
        {/* <Navbar /> */}
        <HeaderContainer />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
export default Layout;
