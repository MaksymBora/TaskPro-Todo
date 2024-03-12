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
}

const Icon: React.FC<SpritePropsTypes> = ({
  name,
  width,
  height,
  fill = 'currentColor',
  style,
}) => {
  return (
    <svg width={width} height={height} fill={fill} style={{ ...style }}>
      <use href={sprite + '#' + name}></use>
    </svg>
  );
};

Icon.defaultProps = {
  fill: 'currentColor',
  style: {},
};

export default Icon;
