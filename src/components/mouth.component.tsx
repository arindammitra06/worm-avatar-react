import * as React from 'react';
import { Expression, MouthProps } from '..';

export const Mouth: React.FC<MouthProps> = ({
  size,
  expression,
  mouthColor,
}: MouthProps) => {
  let border = size/25;
  let borderThin = size/35;
  
  
  const avatarMeh: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '66%',
    transform: 'translate(-50%)',
    padding: '0.2em',
    transition: '0.2s all linear',
    width: '25%',
    height: '0%',
    background: 'rgba(0,0,0,0.3)',
    border: `${borderThin}px solid rgba(96,163,138,1)`,
    borderRadius: '3px',
  };

  const avatarSmile: React.CSSProperties = {
    position: 'absolute',
    transform: 'translate(-50%)',
    transition: '0.2s all linear',
    border: `${border}px solid ${mouthColor}`,
    left: '50%',
    top: '20%',
    width: '65%',
    aspectRatio: 1,
    background: 'transparent',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  };

  const avatarSad: React.CSSProperties = {
    position: 'absolute',
    transform: 'translate(-50%)',
    border: `${border}px solid ${mouthColor}`,
    left: '50%',
    top: '65%',
    width: '65%',
    aspectRatio: 1,
    background: 'transparent',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  };

  const avatarWoh: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '63%',
    transform: 'translate(-50%)',
    transition: '0.2s all linear',
    width: '28%',
    height: '23%',
    aspectRatio: 1,
    background: `${mouthColor}`,
    border: `${borderThin}px solid #2727274a`,
    borderRadius: '100%',
  };

  const avatarBlank: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%)',
    transition: '0.2s all linear',
    width: '50%',
    height: '4%',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '3px',
  };

  return (
    <div
      style={
        expression === Expression.HAPPY
          ? avatarSmile
          : expression === Expression.SAD
          ? avatarSad
          : expression === Expression.WOH
          ? avatarWoh
          : expression === Expression.BLANK
          ? avatarBlank
          : avatarMeh
      }
    ></div>
  );
};
