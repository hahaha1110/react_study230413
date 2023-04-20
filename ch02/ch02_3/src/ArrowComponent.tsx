import type { FC } from 'react'

export type ArrowCpmponentProps = {
  href: string
  text: string
}

const ArrowComponent: FC<ArrowCpmponentProps> = props => {
  const { href, text } = props
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  )
}

export default ArrowComponent
