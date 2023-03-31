import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/store/configureStore";
import { fetchNewsAsync, setMetaData } from "../newsCatalog/newsSlice";
import "./listbox.scss";


export default function ListBox() {
  const {  t } = useTranslation();

  const dispatch = useAppDispatch();
  const countries = [
    { name: `${t("emirates")}`, key: "ae" },
    { name: `${t("argentina")}`, key: "ar" },
    { name: `${t("austria")}`, key: "at" },
    { name: `${t("australia")}`, key: "au" },
    { name: `${t("belgium")}`, key: "be" },
    { name: `${t("brasil")}`, key: "br" },
    { name: `${t("canada")}`, key: "ca" },
    { name: `${t("china")}`, key: "cn" },
    { name: `${t("cuba")}`, key: "cu" },
    { name: `${t("czech")}`, key: "cz" },
    { name: `${t("germany")}`, key: "de" },
    { name: `${t("france")}`, key: "fr" },
    { name: `${t("britain")}`, key: "gb" },
    { name: `${t("greece")}`, key: "gr" },
    { name: `${t("italy")}`, key: "it" },
    { name: `${t("mexico")}`, key: "mx" },
    { name: `${t("netherlands")}`, key: "nl" },
    { name: `${t("poland")}`, key: "pl" },
    { name: `${t("portugal")}`, key: "pt" },
    { name: `${t("ukraine")}`, key: "ua" },
    { name: `${t("usa")}`, key: "us" },
  ];

  return (
    <div className="list-box">
      {countries.map((i) => (
        <button
          key={i.key}
          onClick={() => {
            dispatch(setMetaData(i.key));
            dispatch(fetchNewsAsync());
          }}
        >
          <span className={`fi fi-${i.key}`}></span>
       <span className="none">    {i.name}</span>
        </button>
      ))}
    </div>
  );
}
