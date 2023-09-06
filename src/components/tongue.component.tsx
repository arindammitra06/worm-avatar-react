import * as React from 'react';
import { TongueProps } from '..';

export const Tongue: React.FC<TongueProps> = ({ tongueColor }: TongueProps) => {
  const avatarTongue: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '66%',
    transform: 'translate(-50%)',
    width: '14%',
    height: '17%',
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
    background: tongueColor,
  };

  return <div style={avatarTongue} />;
};
