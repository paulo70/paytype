import { Button } from "./style";
import { IButtonProps } from '../../interfaces/ButtonProps'

const LoadMore: React.FC<IButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <Button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export default LoadMore