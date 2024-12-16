import React from 'react';
import { LinkProps, Link, useParams } from 'react-router-dom';

export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { workspace } = useParams();
  const updatedTo = typeof to === 'string' ? `/${workspace}${to}` : { ...to, pathname: `/${workspace}${to.pathname}` };

  return <Link to={updatedTo} ref={ref} {...props} />;
});
