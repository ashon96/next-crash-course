import React from "react";
import Header from "../Header";
import Meta from "../Meta";
import NavBar from "../NavBar";
import componentStyles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <Meta />
      <NavBar />
      <div className={componentStyles.container}>
        <main className={componentStyles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
