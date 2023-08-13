"use client"

import Image, { ImageProps } from "next/image"
import Zoom from 'react-medium-image-zoom'

type ZoomedImageProps =
  | { asChild: true; children: React.ReactNode }
  | ({ asChild?: false } & ImageProps);

export function ZoomedImage(props: ZoomedImageProps) {
  if (props.asChild) {
    return (
      <Zoom>
        {props.children}
      </Zoom>
    )
  } else {
    return (
      <Zoom>
        <Image
          {...props}
        />
      </Zoom>
    )
  }
}
