import { useAppContext } from "../../Context/Context";
import "./Aside.scss";

export const Aside = () => {
  const { listSearches, setCity } = useAppContext();

  return (
    <aside className="container-aside">
      <p>Пошук:</p>
      <ul>
        {listSearches.map((element, index) => (
          <li key={index} onClick={() => setCity(element)}>
            {element}
          </li>
        ))}
      </ul>
    </aside>
  );
};
