import { Box } from '@mui/material';
import styles from './Picture.module.css';

const Picture = ({ src, alt, height }) => {
  const { img } = styles;

  return (
    <Box height={height || 200}>
      <img className={img} src={src} alt={alt} />
    </Box>
  );
};

export default Picture;
