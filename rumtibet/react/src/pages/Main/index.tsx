import FormTour from "../../components/FormTour";
import style from "./index.module.css";
export default function Main() {
  return (
    <main id="main">
      <div className={`container ${style["container"]}`}>
        <h1>Насладись прогулкой в горах с командой единомышленников</h1>
        <FormTour />
      </div>
    </main>
  );
}
