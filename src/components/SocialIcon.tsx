import Mail from '/mail.svg';
import Github from '/github.svg';
import Facebook from '/facebook.svg';
import Youtube from '/youtube.svg';
import Linkedin from '/linkedin.svg';
import Twitter from '/twitter.svg';
import cn from 'classnames';

import ExternalLink from '@/components/ExternalLink';
import type { TSocialIcon } from '@/typings/types';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter
};

export default function SocialIcon({ kind, href, size = 8 }: TSocialIcon) {
  let SocialSvg = components[kind];
  let attrs = {
    href,
    rel: 'noopener noreferrer',
    target: kind !== 'mail' ? '_blank' : '_self'
  };

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
