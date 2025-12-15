import { useContextSelect } from "./context";

export default function Option({ children }: PropsOption) {
  const setSelect = useContextSelect();
  return (
    <div className="option" onClick={() => setSelect(children)}>
      {children}
    </div>
  );
}
