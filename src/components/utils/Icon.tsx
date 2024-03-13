/* eslint-disable prefer-template */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import sprite from '../../assets/images/sprite.svg';

interface SpritePropsTypes {
  name: string;
  width: string;
  height: string;
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Icon: React.FC<SpritePropsTypes> = ({
  name,
  width,
  height,
  fill = 'currentColor',
  style,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      style={{ ...style }}
      className={className}
    >
      <use href={sprite + '#' + name}></use>
    </svg>
  );
};

Icon.defaultProps = {
  fill: 'currentColor',
  style: {},
  className: '',
};

export default Icon;
