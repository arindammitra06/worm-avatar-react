import * as React from 'react';
import { BodyShape, EarProps, EarSide } from '..';
import { newShade } from '../utils/all-utils';

export const Ear: React.FC<EarProps> = ({ earSide, earColor, bodyShape }: EarProps) => {
  const earShadeLight = newShade(earColor, -60);

  const avatarEar: React.CSSProperties = {
    position: 'absolute',
    top: '-10%',
    transform: 'translate(-50%)',
    width: '15%',
    height: '20%',
    background: `linear-gradient(to top, ${earColor},${earShadeLight})`,
    left: earSide === EarSide.LEFT ? bodyShape===BodyShape.FAT? '35%': '20%' : bodyShape===BodyShape.FAT ? '65%' : '80%',
    borderTopRightRadius: earSide === EarSide.LEFT ? '100%' : '25%',
    borderTopLeftRadius: earSide === EarSide.RIGHT ? '100%' : '25%',
  };

  return (
    <div style={avatarEar}>
      <span className="avatar-signal"></span>
    </div>
  );
};
