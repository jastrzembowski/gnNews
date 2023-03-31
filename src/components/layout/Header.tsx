import {
  Dialog,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  alpha,
  styled,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setDarkMode, setDisplayMode } from "../home/displayModeSlice";
import "./header.scss";
import {BsEmojiSmile} from "react-icons/bs"
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";

export default function Header() {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { darkMode, displayMode } = useAppSelector(
    (state) => state.displayMode
  );
  const { i18n, t } = useTranslation();
  const loc = localStorage.getItem("i18nextLng");

  useEffect(() => {
    if (loc && loc?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, [loc]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLangChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };
  const TealSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "rgb(0, 128, 128)",
      "&:hover": {
        backgroundColor: alpha(
          "rgb(0, 128, 128)",
          theme.palette.action.hoverOpacity
        ),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgb(0, 128, 128)",
    },
  }));
  return (
    <>
    <header className={!darkMode ? "" : "darkMode"}>
      <Link to="/">
        <h1>World News</h1>
      </Link>
      <aside>
      <BsEmojiSmile
              onClick={() => handleClickOpen()}
            />
        <div>
          <p className="none">{t("dark")}</p>
          <TealSwitch
            checked={darkMode}
            onChange={() => dispatch(setDarkMode(!darkMode))}
          />
        </div>
        <div>
          <p className="none">{t("view")}</p>
          <div>
            <HiOutlineViewList
              onClick={() => dispatch(setDisplayMode(!displayMode))}
            />
            <HiOutlineViewGrid
              onClick={() => dispatch(setDisplayMode(!displayMode))}
            />
          </div>
        </div>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={localStorage.getItem("i18nextLng")!}
            onChange={handleLangChange}
          >
            <MenuItem value="en">
              <span className="fi fi-gb"></span>
            </MenuItem>
            <MenuItem value="pl">
              <span className="fi fi-pl"></span>
            </MenuItem>
          </Select>
        </FormControl>
      </aside>
    </header>
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className="about">
          <h3>Dzień dobry!</h3>
          <p>Największą frajdę sprawiło mi korzystanie z NewsApi. Jest bardzo przyjemne w obsłudze i dobrze udokumentowane.</p>
          <p>Największą trudność sprawiło mi pisanie testów, jako że nie mam doświadczenia w tym zakresie.</p>
        </div>
      </Dialog>
    </>
  );
}
