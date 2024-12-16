import { useRef } from 'react';

// material-ui
import { Box } from '@mui/material';

// project imports
import useWindowDimension from '@/hooks/useWindowDimension';

const SUPPORTED_FILE_TYPES = ['application/pdf', 'application/json', 'image/*', 'text/*', 'video/*', 'audio/*'];

interface PreviewProps {
  url?: string;
  blob?: Blob;
}

const Preview = ({ url, blob }: PreviewProps) => {
  const dimension = useWindowDimension();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  if (!url || !blob || !SUPPORTED_FILE_TYPES.some((type) => blob.type.match(type))) {
    return;
  }

  const renderPreview = () => {
    if (blob.type.startsWith('image/')) {
      return <img src={url} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
    }

    return (
      <iframe
        key={`${dimension}`}
        ref={iframeRef}
        src={url}
        title="Preview"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    );
  };

  return (
    <Box sx={{ mx: -1, overflow: 'hidden' }}>
      <Box sx={{ width: '100%', height: '50vh', px: 1 }}>{renderPreview()}</Box>
    </Box>
  );
};

export default Preview;
