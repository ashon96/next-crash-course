import componentStyles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className={componentStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={componentStyles.description}>This is the latest scoop</p>
    </div>
  );
};

export default Header;
