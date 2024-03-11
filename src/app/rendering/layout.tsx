import React from 'react';

const RenderingPage = ({ children }: { children: React.ReactNode }) => {
  return <div className="m-8">{children}</div>;
};

export default RenderingPage;
