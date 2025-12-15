import { createContext, useContext } from "react";

const contextSelect = createContext<ActionChangeInput<string>>(() => {})

export function useContextSelect() {
  return useContext(contextSelect)

}

export default contextSelect