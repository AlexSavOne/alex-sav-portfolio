export interface NavItem {
  label: string;
  path: string;
}

export interface NavItemProps {
  item: NavItem;
  isMobile: boolean;
  isActive: boolean;
} 
