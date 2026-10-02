import React from 'react';
import { LinkProps, Link, useParams } from 'react-router-dom';

import { prefixPath } from '@/utils/path';

export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { workspace } = useParams();
  const updatedTo =
    typeof to === 'string' ? prefixPath(to, workspace) : { ...to, pathname: prefixPath(to.pathname || '', workspace) };

  return <Link to={updatedTo} ref={ref} {...props} />;
});
