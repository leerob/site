import { useTheme } from 'next-themes';
import ImageWithBlur from '@/components/ImageWithBlur';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  return (
    <ImageWithBlur
      alt={props.alt}
      src={theme === 'light' ? props.light : props.dark}
      {...props}
    />
  );
}
