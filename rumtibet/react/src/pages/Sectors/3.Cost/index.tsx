import Button from "../../../components/Button";

export default function Cost() {
  return (
    <section id='cost'>
      <div className="container">
        <h2>
          <span>по версии отдыхающих</span>
          Популярные направления
        </h2>

        <div className="cards">
          <div className="card">
            <img src="/bg-main.png" alt="" />
            <div className="score">5.0</div>
            <div className="content">
              <h3>
                Ночь в горах
                <span>в компании друзей</span>
              </h3>
              <div className="cost">500</div>
              
              <p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
              <Button isBig>Программа тура</Button>
            </div>
          </div>
          <div className="card">
            <img src="/bg-main.png" alt="" />
            <div className="score">5.0</div>
            <div className="content">
              <h3>
                Ночь в горах
                <span>в компании друзей</span>
              </h3>
              <div className="cost">500</div>
              
              <p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
              <Button isBig>Программа тура</Button>
            </div>
          </div>
          <div className="card">
            <img src="/bg-main.png" alt="" />
            <div className="score">5.0</div>
            <div className="content">
              <h3>
                Ночь в горах
                <span>в компании друзей</span>
              </h3>
              <div className="cost">500</div>
              
              <p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
              <Button isBig>Программа тура</Button>
            </div>
          </div>
        </div>
      <Button isBig>Рейтинг направлений</Button>
      </div>

    </section>
  )
}
