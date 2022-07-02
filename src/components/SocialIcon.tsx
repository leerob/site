import Mail from '/mail.svg';
import Github from '/github.svg';
import Facebook from '/facebook.svg';
import Youtube from '/youtube.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import cn from 'classnames';

import ExternalLink from '@/components/ExternalLink';
import { TSocialIcon } from '@/typings/types';

export default function SocialIcon({ kind, href, size = 8 }: TSocialIcon) {
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
          'fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400',
          `h-${size}`,
          `w-${size}`
        )}
      />
    </ExternalLink>
  );
}
