import { Dialog } from "@mui/material";
import { News } from "../../app/models/news";
import "./news.scss";
import { useState } from "react";
import { useAppSelector } from "../../app/store/configureStore";
import placeholder from "../../images/placeholder.png";
import { useTranslation } from "react-i18next";
interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  const [open, setOpen] = useState(false);
  const { displayMode } = useAppSelector((state) => state.displayMode);
  const {  t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={displayMode ? "news-card" : "vertical"}
        onClick={() => handleClickOpen()}
      >
        <p className="title">{news.title}</p>
        <div>
          <p>{news.source.name}</p>
          <p>{news.publishedAt.slice(11, 19)}</p>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className="dialog">
          <h3>{news.title}</h3>
          <img
            src={news.urlToImage != null ? news.urlToImage : placeholder}
            alt={news.title}
          />
          <p>{news.description}</p>
          <a href={news.url}>{t("read")}</a>
        </div>
      </Dialog>
    </>
  );
}
