import styled from "styled-components";
import {Link} from 'react-router-dom';
export const SideMenuContainer = styled.div`

`;
export const SideMenuLink = styled(Link)`
  display: flex;
  color: green;
  justify-content: space-between;
  padding: 24px;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  z-index: 2;
  position: relative;
  align-items: center;
`;

export const SideIcon = styled.div`
font-size: 16px;
position:relative;
top:3px;
`;
export const SideMenuWrap = styled.div`


`;
export const SideMenuItem = styled.span`
  color: #264c2d;
  text-transform: uppercase;
  font-weight: 600;
`;
export const Wrapper = styled.div`
position: absolute;

`;
export const DropdownLink = styled(Link)`
  position: relative;
  height: 20px;
  margin-bottom:10px;
  display: block;
 text-decoration:none;
`;

export const SideMenuDropItem = styled.p`
  color: black;
  left: 35px;
  z-index: 400;
  position: relative;
  display: block;
`;
