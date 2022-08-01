import {css, cx} from '@emotion/css';
import {
  Menu,
  ControlledMenu,
  MenuItem,
  MenuButton,
  SubMenu,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {memo, useRef, useState} from 'react';

const SidebarOption = ({
  text,
  menuData = [],
  handleClick,
  className = css``,
  children,
}) => {
  const menuDomRef = useRef(null);
  const [isOpen, setOpen] = useState();

  const handleSubMenuClick = (e, menuItem) => {
    console.log(`menuItem`, menuItem);
  };

  return (
    <li
      ref={menuDomRef}
      className={cx(
        css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          @media (max-width: 768px) {
            width: initial;
          }
          padding: 0.25rem 0;
          &:hover {
            cursor: pointer;
            background: #f7f7f7;
          }
          & h2 {
            padding-left: 1rem;
            font-size: 1rem;
            font-weight: 800;
            @media (max-width: 768px) {
              display: none;
            }
          }
        `,
        className
      )}
      onClick={(e) => {
        handleClick(e, text);
        if (!isOpen) {
          setOpen(true);
        }
      }}
    >
      {children}
      <ControlledMenu
        state={isOpen ? 'open' : 'closed'}
        anchorRef={menuDomRef}
        onMouseLeave={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
        className={cx(
          css`
            display: ${menuData.length > 0 ? 'block' : 'none'};
          `,
          ``
        )}
      >
        {menuData.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              onClick={(e) => {
                handleSubMenuClick(e, menuItem);
              }}
            >
              {menuItem.name}
            </MenuItem>
          );
        })}
      </ControlledMenu>
      {text === 'twiiter' ? null : <h2>{text}</h2>}
    </li>
  );
};

export default memo(SidebarOption);
