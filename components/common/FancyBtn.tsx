import React from 'react';
type FancyBtnProps = {
    href: string;
    children?: React.ReactNode;
  };
  
  const FancyBtn = ({ href, children }: FancyBtnProps) => {
    return (
      <a
        href={href}
        className="inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-md"
      >
        {children}
      </a>
    );
  };
  
  export default FancyBtn;
  