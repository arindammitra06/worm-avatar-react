import * as React from 'react';
import { ToothCount, ToothProps, ToothSide } from '..';

export const Tooth: React.FC<ToothProps> = ({
  toothCount,
  toothSide,
  size
}: ToothProps) => {
  let borderRadius = size/50;
  const avatarTooth: React.CSSProperties = {
    position: 'absolute',
    width: toothCount === ToothCount.ONE ? '12%' : '10%',
    aspectRatio:1/1,
    background: 'rgba(210,237,227,1)',
    borderRadius: `${borderRadius}px`,
    top: '68%',
    transform: 'translate(-50%)',
    left:
      toothCount === ToothCount.ONE
        ? '50%'
        : toothSide === ToothSide.LEFT
        ? '45%'
        : '55%',
  };

  return <div style={avatarTooth} />;
};
