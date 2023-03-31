import React from "react";
import ListBox from "../layout/ListBox";
import "./home.scss";
import NewsCatalog from "../newsCatalog/NewsCatalog";
import { useAppSelector } from "../../app/store/configureStore";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Home() {
  const { darkMode } = useAppSelector((state) => state.displayMode);

  return (
    <>
      <Header />
      <div
        className={
          !darkMode ? "home-container" : "home-container home-darkMode"
        }
      >
        <ListBox />
        <NewsCatalog />
      </div>
      <Footer />
    </>
  );
}
