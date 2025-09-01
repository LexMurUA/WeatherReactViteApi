import sunLoadingImg from "../../images/sunLoading.png";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading-sun">
      <span>Loading...</span>
      <img src={sunLoadingImg} alt="Loading" className="loading" />
    </div>
  );
};
