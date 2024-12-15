import React from 'react';
import { LinkProps, Link, useParams } from 'react-router-dom';

export const RouterLink: React.FC<LinkProps> = ({ to, ...props }) => {
  const { workspace } = useParams();
  const workspacePath = `/${workspace}${to}`;

  return <Link to={workspacePath} {...props} />;
};
