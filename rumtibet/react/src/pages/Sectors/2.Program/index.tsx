import Button from "../../../components/Button";

export default function Program() {
  return (
    <section id="program">
      <div className='container'>
        <div className="content">
          <h2>
            <span>наше предложение</span>
            Лучшие программы для тебя
          </h2>
          <p>
            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
          </p>
          <ul>
            <li>
              <img src="/icons/Group 16.png" alt="" />
              <h3>Опытный гид</h3>
              <p>Для современного мира базовый вектор развития предполагает независимые способы реализации</p>
            </li>
            <li>
              <img src="/icons/Group 17.png" alt="" />
              <h3>Безопасный поход</h3>
              <p>Для современного мира базовый вектор развития предполагает независимые способы реализации</p>
            </li>
            <li>
              <img src="/icons/Group 18.png" alt="" />
              <h3>Лояльные цены</h3>
              <p>Для современного мира базовый вектор развития предполагает независимые способы реализации</p>
            </li>
          </ul>
          <Button isBig>Стоимость программ</Button>
        </div>
        <div className="preview">
          <img src="/img/program/Rectangle 8.png" alt="" />
          <img src="/img/program/Rectangle 9.png" alt="" />
          <img src="/img/program/Rectangle 10.png" alt="" />
          <img src="/img/program/Rectangle 11.png" alt="" />
        </div>
      </div>
    </section>
  )
}
