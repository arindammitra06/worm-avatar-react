import * as React from 'react';
import { BodyShape, EyeCount, EyePosition, EyeProps, EyeSide } from '..';

export const Eye: React.FC<EyeProps> = ({
  eyePosition,
  eyeCount,
  eyeSide,
  eyeShadeColor,
  showShadow,
  eyePupilGradient,
  eyePupilStartColor,
  eyePupilEndColor,
  bodyShape,
  bodyHeight
}: EyeProps) => {
  console.log(bodyHeight);
  const avatarEye: React.CSSProperties = {
    position: 'absolute',
    top:
      eyePosition === EyePosition.NORMAL
        ? '10%'
        : eyePosition === EyePosition.TOP
        ? '-10%'
        : '5%',
    left:
      eyeCount === EyeCount.ONE
        ? '45%'
        : eyeSide === EyeSide.LEFT
        ? '10%'
        : '80%',
    width: eyeCount === EyeCount.ONE? bodyShape === BodyShape.FAT ?'40%' : '65%': '50%',
    aspectRatio: 1,
    background: `linear-gradient( 105deg, rgba(255, 255, 255, 1), ${eyeShadeColor} )`,
    borderRadius: '100%',
    boxShadow: showShadow
      ? '4px 8px 5px rgba(0, 0, 0, 0.2)'
      : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px',
    margin: '5%',
    transform: 'translateX(-50%)',
  };

  const avatarEyePupil: React.CSSProperties = {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%)',
    zIndex: '100',
    borderRadius: '100%',
    background: eyePupilGradient
      ? `linear-gradient(135deg,${eyePupilStartColor}, ${eyePupilEndColor} 75%)`
      : `${eyePupilStartColor}`,
  };

  const avatarEyeBlack: React.CSSProperties = {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '50%',
    top: '25%',
    background: 'rgba(44, 47, 50, 1)',
    transform: 'translate(-50%)',
    borderRadius: '100%',
    boxShadow: showShadow
      ? '0px 0px 10px rgba(0, 0, 0, 0.2)'
      : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px',
  };

  const avatarEyeReflection: React.CSSProperties = {
    position: 'absolute',
    width: '35%',
    aspectRatio: 1,
    left: '30%',
    top: '15%',
    background: 'rgba(235, 235, 235, 1)',
    transform: 'translate(-50%)',
    borderRadius: '100%',
    boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.2)',
  };

  return (
    <div style={avatarEye}>
      <div style={avatarEyePupil}>
        <span style={avatarEyeBlack}>
          <span style={avatarEyeReflection} />
        </span>
      </div>
    </div>
  );
};
