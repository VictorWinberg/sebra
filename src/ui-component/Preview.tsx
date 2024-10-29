import { useEffect, useRef, useState } from 'react';

// material-ui
import { Box } from '@mui/material';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';
import { Maybe } from '@/api/gql/graphql';

const SUPPORTED_FILE_TYPES = ['application/pdf', 'application/json', 'image/*', 'text/*', 'video/*', 'audio/*'];

interface PreviewProps {
  url?: Maybe<string>;
  mimeType?: Maybe<string>;
}

const Preview = ({ url, mimeType }: PreviewProps) => {
  const dimension = useWindowDimension();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();

  useEffect(() => {
    if (url && mimeType && SUPPORTED_FILE_TYPES.some((type) => mimeType.match(type))) {
      setPreviewUrl(url);
    }
  }, [url, mimeType]);

  if (!url || !mimeType || !previewUrl) {
    return;
  }

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

  const renderPreview = () => {
    if (mimeType.startsWith('image/')) {
      return (
        <img
          src={previewUrl}
          alt="Preview"
          style={{ width: '100%', height: '100%', maxHeight: '33vh', objectFit: 'cover' }}
        />
      );
    }

    return (
      <iframe
        key={`${dimension}`}
        ref={iframeRef}
        src={previewUrl}
        title="Preview"
        onLoad={handleIframeLoad}
        style={{ width: '100%', height: '33vh', border: 'none' }}
      />
    );
  };

  return (
    <Box sx={{ mx: -1, overflow: 'hidden' }}>
      <Box key={previewUrl} sx={{ width: '100%', height: '33vh', px: 1 }}>
        {renderPreview()}
      </Box>
    </Box>
  );
};

export default Preview;
