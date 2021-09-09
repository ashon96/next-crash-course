import NavBar from "../NavBar";
import componentStyles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={componentStyles.container}>
        <main className={componentStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
