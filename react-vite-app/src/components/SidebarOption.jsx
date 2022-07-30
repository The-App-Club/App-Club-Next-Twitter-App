import styled from '@emotion/styled';

const StyledSidebarOption = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.15s ease-out;
  margin-left: 20px;
  width: 100%;
  &.active {
    color: #50b7f5;
  }
  &:hover {
    cursor: pointer;
    color: #50b7f5;
  }
  & h2 {
    font-size: 1.3rem;
    padding: 0 0 0 20px;
    font-weight: 800;
  }
`;

const SidebarOption = ({text, Icon, isActive}) => {
  return (
    <StyledSidebarOption className={isActive && `active`}>
      <Icon />
      <h2>{text}</h2>
    </StyledSidebarOption>
  );
};

export {SidebarOption};
