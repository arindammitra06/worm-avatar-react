import * as React from 'react';
import { Eye } from './eye.component';
import { Mouth } from './mouth.component';
import { Tongue } from './tongue.component';
import { Ear } from './ear.component';
import { Tooth } from './tooth.component';
import { WormAvatarOptions } from '../types/avatar-options.types';
import {
  TongueOrTeeth,
  ToothCount,
  BodyHeight,
  BodyShape,
  EarSide,
  EyeCount,
  EyeSide,
  ToothSide,
} from '..';

export const Body: React.FC<WormAvatarOptions> = ({
  addShadows,
  bodyHeight,
  bodyShape,
  bodyColorGradient,
  bodyStartColor,
  bodyEndColor,
  bodyGradientDegree,
  showEar,
  earColor,
  eyeCount,
  eyePosition,
  eyeShadeColor,
  eyePupilGradient,
  eyePupilStartColor,
  eyePupilEndColor,
  mouthColor,
  mouthExpression,
  showTongueOrTeeth,
  tongueColor,
  toothCount,
}: WormAvatarOptions) => {
  const avatarBody: React.CSSProperties = {
    left: '50%',
    top: bodyHeight === BodyHeight.TALL ? '55%' : '65%',
    transform: 'translate(-50%, -50%)',
    width: bodyShape === BodyShape.THIN ? '50%' : '80%',
    height: bodyHeight === BodyHeight.TALL ? '90%' : '80%',
    boxShadow: addShadows
      ? 'rgba(0, 0, 0, 0.5) 6px 0px 15px 0px'
      : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px',
    position: 'relative',
    borderRadius: bodyShape === BodyShape.THIN ? '0px' : '90%',
    borderTopLeftRadius: bodyShape === BodyShape.THIN ? '50px' : '90%',
    borderTopRightRadius: bodyShape === BodyShape.THIN ? '50px' : '90%',
    background: bodyColorGradient
      ? `linear-gradient( ${bodyGradientDegree}deg, ${bodyStartColor}, ${bodyEndColor})`
      : bodyStartColor,
  };

  return (
    <div style={avatarBody}>
      {showEar && (
        <React.Fragment>
          <Ear earSide={EarSide.LEFT} earColor={earColor!} />
          <Ear earSide={EarSide.RIGHT} earColor={earColor!} />
        </React.Fragment>
      )}

      {eyeCount === EyeCount.ONE && (
        <Eye
          showShadow={addShadows!}
          eyeSide={EyeSide.LEFT}
          eyePosition={eyePosition!}
          eyeCount={EyeCount.ONE}
          eyeShadeColor={eyeShadeColor!}
          eyePupilGradient={eyePupilGradient!}
          eyePupilStartColor={eyePupilStartColor!}
          eyePupilEndColor={eyePupilEndColor!}
        />
      )}

      {eyeCount === EyeCount.TWO && (
        <React.Fragment>
          <Eye
            showShadow={addShadows!}
            eyeSide={EyeSide.LEFT}
            eyePosition={eyePosition!}
            eyeCount={EyeCount.TWO}
            eyeShadeColor={eyeShadeColor!}
            eyePupilGradient={eyePupilGradient!}
            eyePupilStartColor={eyePupilStartColor!}
            eyePupilEndColor={eyePupilEndColor!}
          />
          <Eye
            showShadow={addShadows!}
            eyeSide={EyeSide.RIGHT}
            eyePosition={eyePosition!}
            eyeCount={EyeCount.TWO}
            eyeShadeColor={eyeShadeColor!}
            eyePupilGradient={eyePupilGradient!}
            eyePupilStartColor={eyePupilStartColor!}
            eyePupilEndColor={eyePupilEndColor!}
          />
        </React.Fragment>
      )}

      <Mouth expression={mouthExpression!} mouthColor={mouthColor!} />

      {showTongueOrTeeth === TongueOrTeeth.NONE ? (
        <React.Fragment></React.Fragment>
      ) : showTongueOrTeeth === TongueOrTeeth.TONGUE ? (
        <Tongue tongueColor={tongueColor!} />
      ) : showTongueOrTeeth === TongueOrTeeth.TEETH ? (
        <React.Fragment>
          {toothCount === ToothCount.ONE ? (
            <Tooth toothCount={toothCount} toothSide={ToothSide.LEFT} />
          ) : (
            <React.Fragment>
              <Tooth toothCount={toothCount!} toothSide={ToothSide.LEFT} />
              <Tooth toothCount={toothCount!} toothSide={ToothSide.RIGHT} />
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};
