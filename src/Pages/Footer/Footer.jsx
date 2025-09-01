import { useAppContext } from "../../Context/Context";
import "./Footer.scss";
import logo from "../../images/logo.jpg";

export const Footer = () => {
  const { footerList } = useAppContext();
  return (
    <footer className="container container-footer">
      <img src={logo} alt="logo" className="container-footer-logo" />
      <div className="container-footer-link">
        {footerList.map((u, idx) => (
          <div className="container-footer-link-obj" key={idx}>
            {u}
          </div>
        ))}
      </div>
    </footer>
  );
};
