export interface SearchContextProps {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}