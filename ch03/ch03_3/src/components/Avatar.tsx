import type { FC } from 'react'
import { Div } from '../components'
import type { DivProps } from '../components'

export type AvatarProps = DivProps & {
  size?: string
}

// prettier-ignore
export const Avatar: FC<AvatarProps> =  ({
  className:_className, style, src, size, ...props
}) => {
  const w_or_h = size ?? '3rem' // 타입스크립트 물음표 두개 (왼쪽이 null이면 오른쪽 반환)
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')  
  return(
    <Div {...props} src={src} width={w_or_h} height={w_or_h} className={className} style={style}/>
  )
}
