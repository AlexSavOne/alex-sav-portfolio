import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NavItemProps } from '../../types/navigation.types';

export const NavItem: React.FC<NavItemProps> = ({ item, isMobile, isActive }) => {
  return (
    <NavLink
      to={item.path}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "underline" : "none",
        color: "inherit",
        marginLeft: isMobile ? 0 : 16,
      }}
    >
      <Button color="inherit">{item.label}</Button>
    </NavLink>
  );
}; 
