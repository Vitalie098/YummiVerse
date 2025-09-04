import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface RecipesMenuContextInterface {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const RecipesMenuContext = createContext<RecipesMenuContextInterface>({
  activeIndex: 0,
  setActiveIndex: () => {}
})

export const RecipesMenuProvider = ({children}: {children: ReactNode}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <RecipesMenuContext.Provider value={{activeIndex, setActiveIndex}}>
      {children}
    </RecipesMenuContext.Provider>
  )
}

export const useRecipesMenu = (): RecipesMenuContextInterface => {
  const context = useContext(RecipesMenuContext);
  if (context === undefined) {
    throw new Error('useRecipesMenu must be used within a RecipesMenuProvider');
  }
  return context;
};