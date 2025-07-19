import Button from '../../../components/Button'


export default function About() {
  return (
    <section id='about'>
      <div className='container'>
        <div className='preview'></div>
        <div className='content'>
          <h2>
            <span>о нашем походе</span>
            Исследуйте все горные массивы мира вместе с нами
          </h2>
          <p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
          <Button isBig>Программа тура</Button>
        </div>
      </div>
    </section>
  )
}
