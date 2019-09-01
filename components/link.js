import React from 'react';
import Link from 'next/link';

import A from './elements/a';

const CustomLink = (props) => {
    const slug = props.slug || '';
    const href = `/${slug}`;

    return (
        <Link href={href}>
            <A href={href} {...props}>
                {props.children}
            </A>
        </Link>
    );
};

export default CustomLink;
