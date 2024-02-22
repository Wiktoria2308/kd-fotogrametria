import React from "react";

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => (
  
  <li>
    <a href={href} className="text-lg">{children}</a>
  </li>
);

export default DropdownItem;
