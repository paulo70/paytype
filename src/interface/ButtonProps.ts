import { TCommonProps } from './ChildCommon'

export interface IButtonProps {
  children: TCommonProps,
  disabled: boolean,
  onClick: React.MouseEvent<HTMLElement>
}