interface PropsOption {
  children: string;
}

type ActionChangeInput<T> = (value: T) => void

interface InputBaseProps {
  title?: string
  alt?: string
  focused?: boolean,
  onChangeFocus?: () => void
}

type InputProps = (({
      type: "text";
      value?: string;
      onChange?: ActionChangeInput<string>;
      placeholder?: string;
      maxLength?: number;
      children?: undefined
    })
  | ({
      type: "select";
      value?: string;
      onChange?: ActionChangeInput<string>;
      children: | ReactElement<PropsOption> | Array<ReactElement<PropsOption>>;
    })
  | ({
      type: "date";
      value?: Date;
      onChange?: ActionChangeInput<Date>;
      minDate?: Date;
      maxDate?: Date;
      children?: undefined
    })) & InputBaseProps;
