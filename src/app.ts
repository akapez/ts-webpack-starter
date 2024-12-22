import { updateCounter } from "./counter";
import "./styles/app.scss";
import logo from "./assets/logo.png";

const logoImg = document.getElementById("logo") as HTMLImageElement;
logoImg.src = logo;

updateCounter();
