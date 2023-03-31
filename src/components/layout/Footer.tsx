import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/store/configureStore";
import { newsSelectors } from "../newsCatalog/newsSlice";
import "./footer.scss";

export default function Footer() {
  const catalog = useAppSelector(newsSelectors.selectAll);
  const { dataLoaded } = useAppSelector((state) => state.news);
  const { darkMode } = useAppSelector((state) => state.displayMode);
  const {  t } = useTranslation();

  const today = new Date();
  function addZero(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const time =
    today.getHours() +
    ":" +
    addZero(today.getMinutes()) +
    ":" +
    addZero(today.getSeconds());
  return (
    <footer className={!darkMode ? "" : "darkMode"}>
      <p>{t("total")} {dataLoaded && catalog[0].totalResults}</p>
      <p>{time}</p>
    </footer>
  );
}
