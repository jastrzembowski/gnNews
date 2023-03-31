import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import "./news.scss";
import { fetchNewsAsync, newsSelectors } from "./newsSlice";
import NewsCard from "./NewsCard";


export default function NewsCatalog() {

  const catalog = useAppSelector(newsSelectors.selectAll);
  const { displayMode} = useAppSelector((state) => state.displayMode)
  const { dataLoaded, metaData} = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!dataLoaded) dispatch(fetchNewsAsync());
  }, [dataLoaded, dispatch, metaData]);

  return (
    <div className={displayMode? "cards-box" : "cards-box list"}>
      {dataLoaded && Object.entries(catalog[0].articles).map((result)=>
        <NewsCard key={result[0]} news={result[1]} />
      )}
  </div>
  );
}
