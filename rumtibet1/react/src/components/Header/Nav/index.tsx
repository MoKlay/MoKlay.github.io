import Button from '../../Button'
import './index.module.css'
export default function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#about">Про гида</a>
          </li>
          <li>
            <a href="#">Программа тура</a>
          </li>
          <li>
            <a href="#">Стоимость</a>
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
