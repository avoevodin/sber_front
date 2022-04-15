import { FC } from 'react'

interface HeaderProps {
    title: string;
    version: number;
}

const Header: FC<HeaderProps> = ({ title, version }) => (
  <div>
    Title:
    {' '}
    {title}
    <br />
    Version:
    {' '}
    {version}
  </div>
)

export default Header
