import { Link } from "react-router-dom";
import earth from "../../images/earth.png";

import "./startingpage.scss"
import { useTranslation } from "react-i18next";

export default function StartingPage() {
    const { t } = useTranslation();




  return (
    <div className="starting-page">
        <img src={earth} alt='earth' className="rotate-right"/>
       <div className="main-text"> <h1>World News</h1>
        <h3>{t("best-info")}</h3>
        <Link to="/news"><button>{t("try")}</button></Link>
        </div>
    </div>
  )
}
