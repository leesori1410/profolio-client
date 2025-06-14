import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MenuBtn = styled.div<MenuBtnProps>`
  cursor: pointer;
  width: 254px;
  height: 61px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 16.5px 25px;
  background-color: ${({ active }) => (active ? '#8734FD' : 'undefined')};

  & > div {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  
  & > img {
    width: 30px;
    height: 30px;
  }

  span {
    color: ${({ active }) => (active ? '#ffffff' : '#999999')};
  }
`

type ToggleIconProps = {
  active: boolean,
  open: boolean,
}

const ToggleIcon = styled.img<ToggleIconProps>`
  width: 20px !important;
  height: 10px !important;
  transform: ${({ active, open }) => (active&&open?'rotate(180deg)':'undefined')};
`

type MenuBtnProps = {
  active: boolean
}

type SideMenuProps = {
  src: string,
  title: string,
  more?: string[],
  clickedMenu: string,
  setClickedMenu: (title: string) => void,
  open: boolean,
  setOpen: (val:boolean) => void,
  idx: number,
  setMenu: (val:number) => void
}

export default function SideMenu({
  src,
  title,
  more,
  clickedMenu,
  setClickedMenu,
  open,
  setOpen,
  idx,
  setMenu
}: SideMenuProps) {
  const active = clickedMenu === title

  const handleClick = () => {
    setClickedMenu(title)
    setMenu(idx)
  }

  return (
    <MenuBtn active={active} onClick={handleClick}>
      <div>
        <img src={`/images/${src}${active?'Active':''}Icon.svg`} alt={title} />
        <span>{title}</span>
      </div>
      {more && (
        <ToggleIcon
          src={`/images/${active ? 'upBtn' : 'downBtn'}.svg`}
          alt={active ? '접기' : '펼치기'}
          onClick={(e) => {
            e.stopPropagation()
            setClickedMenu(title)
            setOpen(!open)
          }}
          active={active}
          open={open}
        />
      )}
    </MenuBtn>
  )
}
