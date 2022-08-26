import React, { createContext, ReactNode, useState } from "react";
import { SearchContextProps } from '../interfaces/SearchProps'
import { TCommonProps } from '../interfaces/ChildCommonProps'

export const SearchContext = createContext({} as SearchContextProps)
SearchContext.displayName = "Searching"

const SearchContextProvider: React.FC<TCommonProps> = ({ children }) => {
  const [value, setValue] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)


  return (
    <SearchContext.Provider value={{
      value,
      setValue,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider