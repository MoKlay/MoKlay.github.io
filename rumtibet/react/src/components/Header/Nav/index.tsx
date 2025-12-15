import Button from '../../Button'
import './index.module.css'
export default function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#about">Про гида</a>
          </li>
          <li>
            <a href="#program">Программа тура</a>
          </li>
          <li>
            <a href="#cost">Стоимость</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <Button>Консультация</Button>
      </nav>
  )
}
