import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  return (
    <Image src={theme === 'light' ? props.light : props.dark} {...props} />
  );
}
