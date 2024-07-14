import * as React from 'react';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { styled } from '@mui/material/styles';

const StyledRoot = styled(ScrollAreaPrimitive.Root)({
  position: 'relative',
  overflow: 'hidden'
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport)({
  height: '100%',
  width: '100%',
  borderRadius: 'inherit'
});

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ children, ...props }, ref) => (
  <StyledRoot ref={ref} {...props}>
    <StyledViewport>{children}</StyledViewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </StyledRoot>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const StyledScrollBar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar)(
  ({ orientation }: { orientation: 'vertical' | 'horizontal' }) => ({
    display: 'flex',
    touchAction: 'none',
    userSelect: 'none',
    transition: 'colors 0.2s',
    ...(orientation === 'vertical' && {
      height: '100%',
      width: '10px',
      borderLeft: '1px solid transparent',
      padding: '1px'
    }),
    ...(orientation === 'horizontal' && {
      height: '10px',
      flexDirection: 'column',
      borderTop: '1px solid transparent',
      padding: '1px'
    })
  })
);

const StyledThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  borderRadius: '9999px',
  backgroundColor: theme.palette.grey[400]
}));

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ orientation = 'vertical', ...props }, ref) => (
  <StyledScrollBar ref={ref} orientation={orientation} {...props}>
    <StyledThumb />
  </StyledScrollBar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
