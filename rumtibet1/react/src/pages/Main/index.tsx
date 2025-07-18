import Calendar from "../../components/Input/Calendar";
import FormTour from "../../components/FormTour";
import "./index.module.css";
export default function Main() {
  return (
    <main>
      <div className="container">
        <h1>Насладись прогулкой в горах с командой единомышленников</h1>
        <FormTour />
      </div>
    </main>
  );
}
