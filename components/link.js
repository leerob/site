import React from 'react';
import Link from 'next/link';

import A from './elements/a';

const CustomLink = (props) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <A {...props} />
            </Link>
        );
    }

    return <A {...props} />;
};

export default CustomLink;
