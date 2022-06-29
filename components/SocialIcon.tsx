import Mail from '/icons/mail.svg'
import Github from '/icons/github.svg'
import Facebook from '/icons/facebook.svg'
import Youtube from '/icons/youtube.svg'
import Linkedin from '/icons/linkedin.svg'
import Twitter from '/icons/twitter.svg'
import cn from 'classnames';

import  ExternalLink  from './ExternalLink'
import type { TSocialIcon } from 'typings/types';

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

export default function SocialIcon({ kind, href, size = 8 }: TSocialIcon) {
  let SocialSvg = components[kind]
  let attrs = {
    href,
    rel: 'noopener noreferrer',
    target: kind !== 'mail' ?  '_blank' : '_self'
  }

  return (
    <ExternalLink href={href}>
      <SocialSvg
        className={cn('fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400', `h-${size}`, `w-${size}`)}
      />
      </ExternalLink>

  )
}

