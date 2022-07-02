import Mail from '@/assets/mail.svg';
import Github from '@/assets/github.svg';
import Facebook from '@/assets/facebook.svg';
import Youtube from '@/assets/youtube.svg';
import Linkedin from '@/assets/linkedin.svg';
import Twitter from '@/assets/twitter.svg';
import cn from 'classnames';

import ExternalLink from '@/components/ExternalLink';
import { TSocialIcon } from '@/typings/types';

export default function SocialIcon({ kind, href, size = 2 }: TSocialIcon) {
  // TODO: define typ e for svg component
  const iconComponents = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter
  };
  let SocialSvg = iconComponents[kind];
  return (
    <ExternalLink href={href}>
      <SocialSvg
        className={cn(
          'fill-current text-gray-700 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400',
          `h-${size}`,
          `w-${size}`
        )}
      />
    </ExternalLink>
  );
}
