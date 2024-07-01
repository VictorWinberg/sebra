import React, { useEffect, useRef, useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

const SUPPORTED_FILE_TYPES = ['application/pdf', 'application/json', 'image/*', 'text/*', 'video/*', 'audio/*'];

interface PreviewProps {
  file?: File;
}

const Preview: React.FC<PreviewProps> = ({ file }) => {
  const dimension = useWindowDimension();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();

  useEffect(() => {
    if (file && SUPPORTED_FILE_TYPES.some((type) => file.type.match(type))) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(undefined);
    }
  }, [file]);

  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const iframe = iframeRef.current;
      const iframeWindow = iframeRef.current.contentWindow;

      const iframeDocument = iframeWindow.document;
      const iframeHeight = iframe.clientHeight;
      const iframeWidth = iframe.clientWidth;

      const contentHeight = iframeDocument.documentElement.scrollHeight;
      const contentWidth = iframeDocument.documentElement.scrollWidth;

      const scaleX = iframeWidth / contentWidth;
      const scaleY = iframeHeight / contentHeight;
      const scale = Math.min(scaleX, scaleY);

      iframe.style.transform = `scale(${scale})`;
      iframe.style.transformOrigin = 'top left';
      iframe.style.width = `${contentWidth}px`;
      iframe.style.height = `${contentHeight}px`;
    }
  };

  if (!previewUrl) {
    return null;
  }

  return (
    <Box sx={{ mx: -1, overflow: 'hidden' }}>
      <Box key={previewUrl + dimension} sx={{ width: '100%', height: '500px', px: 1 }}>
        <iframe
          ref={iframeRef}
          src={previewUrl}
          title="Preview"
          onLoad={handleIframeLoad}
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      </Box>
    </Box>
  );
};

export default Preview;
