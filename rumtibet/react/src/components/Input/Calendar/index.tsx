import React, { useMemo, useState } from "react";
import style from "./index.module.css";

type CalendarProps = {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
};

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    selectedDate || new Date()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );

  // Получаем название месяца
  const getMonthName = (month: number): string => {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    return months[month];
  };

  // Получаем дни недели
  const getWeekDays = (): string[] => {
    return ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  };

  // Получаем количество дней в месяце
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Получаем первый день месяца (день недели)
  const getFirstDayOfMonth = (year: number, month: number): number => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Корректировка для начала недели с понедельника
  };

  interface Day {
    day: number;
    notCurrent?: "last" | "next";
  }

  // Переход к предыдущему месяцу
  const prevMonth = (): void => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Переход к следующему месяцу
  const nextMonth = (): void => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Выбор даты
  const handleDateClick = (day: number, next?: boolean): void => {
    const newDate = new Date(
      currentYear,
      next ? (currentMonth + 1 > 12 ? 1 : currentMonth + 1) : currentMonth,
      day
    );
    setCurrentDate(newDate);
    if (onDateSelect) onDateSelect(newDate);
  };

  // Проверяем, является ли день текущей выбранной датой
  const isSelectedDate = ({day, notCurrent:current}:Day): boolean => {
    return (
      !!selectedDate &&
      day === selectedDate.getDate() &&
      currentYear === selectedDate.getFullYear() &&
      ((!current && currentMonth === selectedDate.getMonth()) ||
        (current == "last" && currentMonth - 1 === selectedDate.getMonth()) ||
        (current === "next" && currentMonth + 1 === selectedDate.getMonth()))
    );
  };

  // Проверяем, является ли день сегодняшним днем
  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isLastDay = (day: number): boolean => {
    const today = new Date();
    const current = new Date(currentYear, currentMonth, day);
    return today >= current;
  };

  const days = useMemo<Day[]>(() => {
    const daysInLastMonth = getDaysInMonth(
      currentYear,
      currentMonth - 1 > 0 ? currentMonth - 1 : 12
    );
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days: Day[] = [];

    // Добавляем пустые ячейки для дней предыдущего месяца
    for (let i = daysInLastMonth - firstDay + 1; i <= daysInLastMonth; i++) {
      days.push({
        day: i,
        notCurrent: "last",
      });
    }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
      });
    }

    for (let i = 1; i <= days.length % 7; i++) {
      days.push({ day: i, notCurrent: "next" });
    }

    return days;
  }, [currentMonth, currentYear]);
  const weekDays = getWeekDays();

  return (
    <div className={style.calendar}>
      <div className={style["calendar-header"]}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {getMonthName(currentMonth)} {currentYear}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className={style["calendar-weekdays"]}>
        {weekDays.map((day, index) => (
          <div key={index} className={style["weekday"]}>
            {day}
          </div>
        ))}
      </div>

      <div className={style["calendar-days"]}>
        {days.map((day, index) => (
          <div
            key={index}
            className={`${style["day"]} ${
              day.notCurrent ? style["empty"] : ""
            } ${isSelectedDate(day) ? style["selected"] : ""} ${
              isToday(day.day) ? style["today"] : ""
            }`}
            onClick={() =>
              (!isLastDay(day.day) &&
                !day.notCurrent &&
                handleDateClick(day.day)) ||
              (day.notCurrent === "next" && handleDateClick(day.day, true))
            }
          >
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
