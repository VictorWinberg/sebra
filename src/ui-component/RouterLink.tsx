import React from 'react';
import { LinkProps, Link, useParams } from 'react-router-dom';

export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { workspace } = useParams();
  const workspacePath = `/${workspace}${to}`;

  return <Link to={workspacePath} ref={ref} {...props} />;
});
