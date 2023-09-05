import * as React from 'react';
import { ToothCount, ToothProps, ToothSide } from '..';

export const Tooth: React.FC<ToothProps> = ({
  toothCount,
  toothSide,
}: ToothProps) => {
  const avatarTooth: React.CSSProperties = {
    position: 'absolute',
    width: toothCount === ToothCount.ONE ? '20px' : '10px',
    height: '10px',
    background: 'rgba(210,237,227,1)',
    borderRadius: '2px',
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
