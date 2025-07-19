import { useEffect, useRef, useState } from "react";
import Option from "../Input/Option";
import style from "./index.module.css";
import Button from "../Button";
import Input from "../Input";

export default function FormTour() {
  const ref = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState('')
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date>();
  const [member, setMember] = useState("");

  function handleChangeFocus(value:string) {
    if (focus != value)setFocus(value)
    else setFocus('')
  }

  useEffect(() => {
    const handleClickOutside = (e:MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFocus('')
      }
    };

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className={style["form-tour"]} >
      <div className={style["con"]}>
        <Input
          type="select"
          title="Локация для тура"
          alt="выберете из списка"
          value={location}
          onChange={(v) => setLocation(v)}
          focused={focus == 'location'}
          onChangeFocus={() => handleChangeFocus('location')}
        >
          <Option>Великобритания</Option>
          <Option>Россия</Option>
          <Option>США</Option>
        </Input>

        <Input
          type="date"
          title="Дата похода"
          alt="укажите диапазон"
          value={date}
          onChange={(v) => setDate(v)}
          focused={focus == 'date'}
          onChangeFocus={() => handleChangeFocus('date')}
        />

        <Input
          type="select"
          title="Локация для тура"
          alt="выберете из списка"
          value={member}
          onChange={(v) => setMember(v)}
          focused={focus == 'member'}
          onChangeFocus={() => handleChangeFocus('member')}
        >
          <Option>6</Option>
          <Option>5</Option>
          <Option>4</Option>
        </Input>

        <Button isBig isReverse>
          Найти программу
        </Button>
      </div>
    </div>
  );
}
