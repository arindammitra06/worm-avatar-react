import * as React from 'react';
import { Body } from './components/body.component';
import {
  WormAvatarOptions,
  backgroundGradients,
  bodyGradients,
  earColors,
  eyeShadeColors,
  mouthColors,
  pupilGradients,
  tongueColors,
} from './types/avatar-options.types';
import { generateUUID, isValidHex, stringToHashCode } from './utils/all-utils';

export type GradientDegree = number & { _type_: 'GradientDegree' };

export const gradientDegrees = (value: number): GradientDegree => {
  if (value < 0 || value > 360) {
    throw new Error(`The value ${value} is not a valid degree`);
  }

  return value as GradientDegree;
};

export type HexColor = string & { _type_: 'HexColor' };

export const hexColor = (value: string): HexColor => {
  if (!isValidHex(value)) {
    throw new Error(`The value ${value} is not a valid Hex Color Code`);
  }

  return (value as string) as HexColor;
};

export enum BodyShape {
  THIN,
  FAT,
}
export enum BodyHeight {
  NORMAL,
  TALL,
}
export interface BodyProps {
  bodyShape: BodyShape;
  bodyHeight: BodyHeight;
}

export enum EyeSide {
  LEFT,
  RIGHT,
}
export enum EyePosition {
  TOP,
  NORMAL,
}
export enum EyeCount {
  ONE,
  TWO,
}

export interface EyeProps {
  eyeSide: EyeSide;
  eyePosition: EyePosition;
  eyeCount: EyeCount;
  showShadow: boolean;
  eyeShadeColor: string;
  eyePupilGradient: boolean;
  eyePupilStartColor: string;
  eyePupilEndColor: string;
  bodyShape?: BodyShape;
  bodyHeight?: BodyHeight;
}

export enum Expression {
  HAPPY,
  SAD,
  MEH,
  WOH,
  BLANK,
}

export enum TongueOrTeeth {
  NONE,
  TONGUE,
  TEETH,
}

export interface MouthProps {
  expression: Expression;
  mouthColor: string;
  size: number;
}

export enum ToothCount {
  ONE,
  TWO,
}

export enum ToothSide {
  LEFT,
  RIGHT,
}
export interface ToothProps {
  toothCount: ToothCount;
  toothSide: ToothSide;
  size: number;
}

export interface TongueProps {
  tongueColor: string;
}

export enum EarSide {
  LEFT,
  RIGHT,
}
export interface EarProps {
  earSide: EarSide;
  earColor: string;
  bodyShape?: BodyShape;
}

const options = {
  backgroundColor: backgroundGradients,
  backgroundGradientDegree: [
    0,
    45,
    60,
    90,
    105,
    135,
    180,
    210,
    245,
    270,
    300,
    330,
    360,
  ],
  bodyHeight: [BodyHeight.NORMAL, BodyHeight.TALL],
  bodyShape: [BodyShape.THIN, BodyShape.FAT],
  bodyColor: bodyGradients,
  bodyGradientDegree: [
    0,
    45,
    60,
    90,
    105,
    135,
    180,
    210,
    245,
    270,
    300,
    330,
    360,
  ],
  showEar: [true, false],
  earColor: earColors,
  eyeCount: [EyeCount.ONE, EyeCount.TWO],
  eyePosition: [EyePosition.NORMAL, EyePosition.TOP],
  eyeShadeColor: eyeShadeColors,
  eyePupilGradient: [true, false],
  eyePupilColor: pupilGradients,
  mouthColor: mouthColors,
  mouthExpression: [
    Expression.HAPPY,
    Expression.SAD,
    Expression.BLANK,
    Expression.MEH,
    Expression.WOH,
  ],
  showTongueOrTeeth: [
    TongueOrTeeth.NONE,
    TongueOrTeeth.TEETH,
    TongueOrTeeth.TONGUE,
  ],
  tongueColor: tongueColors,
  toothCount: [ToothCount.ONE, ToothCount.TWO],
};

class WormAvatar extends React.Component<WormAvatarOptions> {
  render() {
    let {
      size = 50,
      seed = null,
      isRandom = false,
      radius = 20,
      isBackgroundGradient = true,
      backgroundStartColor,
      backgroundEndColor,
      backgroundGradientDegree,
      addShadows = true,

      bodyHeight,
      bodyShape,
      bodyColorGradient = true,
      bodyStartColor,
      bodyEndColor,
      bodyGradientDegree,
      showEar,
      earColor,
      eyeCount,
      eyePosition,
      eyeShadeColor,
      eyePupilGradient = true,
      eyePupilStartColor,
      eyePupilEndColor,

      mouthColor,
      mouthExpression,
      showTongueOrTeeth,
      tongueColor,
      toothCount,
    } = this.props;

    if (isRandom) {
      const ranDomUUID = generateUUID();
      const hashSeed = stringToHashCode(ranDomUUID);
      //Process Background Color
      ({
        backgroundStartColor,
        backgroundEndColor,
        backgroundGradientDegree,
        bodyHeight,
        bodyShape,
        bodyStartColor,
        bodyEndColor,
        bodyGradientDegree,
        showEar,
        earColor,
        eyeCount,
        eyePosition,
        eyeShadeColor,
        eyePupilStartColor,
        eyePupilEndColor,
        mouthColor,
        mouthExpression,
        showTongueOrTeeth,
        tongueColor,
        toothCount,
      } = this.processProps(
        isBackgroundGradient,
        backgroundStartColor,
        hashSeed,
        backgroundEndColor,
        backgroundGradientDegree,
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
        toothCount
      ));
    } else if (seed !== null && seed.trim() !== '') {
      const hashSeed = stringToHashCode(seed);
      
      //Process Background Color
      ({
        backgroundStartColor,
        backgroundEndColor,
        backgroundGradientDegree,
        bodyHeight,
        bodyShape,
        bodyStartColor,
        bodyEndColor,
        bodyGradientDegree,
        showEar,
        earColor,
        eyeCount,
        eyePosition,
        eyeShadeColor,
        eyePupilStartColor,
        eyePupilEndColor,
        mouthColor,
        mouthExpression,
        showTongueOrTeeth,
        tongueColor,
        toothCount,
      } = this.processProps(
        isBackgroundGradient,
        backgroundStartColor,
        hashSeed,
        backgroundEndColor,
        backgroundGradientDegree,
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
        toothCount
      ));
    }

    const avatar: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${radius}%`,
      overflow: 'hidden',
      opacity: 1,
      background: isBackgroundGradient
        ? `linear-gradient( ${backgroundGradientDegree}deg, ${backgroundStartColor}, ${backgroundEndColor})`
        : backgroundStartColor,
    };

    


    return (
      <div style={avatar}>
        <Body
          radius={radius}
          isBackgroundGradient={isBackgroundGradient}
          backgroundStartColor={backgroundStartColor}
          backgroundEndColor={backgroundEndColor}
          backgroundGradientDegree={backgroundGradientDegree}
          addShadows={addShadows}
          bodyHeight={bodyHeight}
          bodyShape={bodyShape}
          bodyColorGradient={bodyColorGradient}
          bodyStartColor={bodyStartColor}
          bodyEndColor={bodyEndColor}
          bodyGradientDegree={bodyGradientDegree}
          showEar={showEar}
          eyeCount={eyeCount}
          eyePosition={eyePosition}
          eyeShadeColor={eyeShadeColor}
          eyePupilGradient={eyePupilGradient}
          eyePupilStartColor={eyePupilStartColor}
          eyePupilEndColor={eyePupilEndColor}
          mouthColor={mouthColor}
          mouthExpression={mouthExpression}
          showTongueOrTeeth={showTongueOrTeeth}
          tongueColor={tongueColor}
          toothCount={toothCount}
          earColor={earColor}
          isRandom={isRandom} 
          size={size}        />
      </div>
    );
  }

  private processProps(
    isBackgroundGradient: boolean,
    backgroundStartColor: string | undefined,
    hashSeed: number,
    backgroundEndColor: string | undefined,
    backgroundGradientDegree: GradientDegree | undefined,
    bodyHeight: BodyHeight | undefined,
    bodyShape: BodyShape | undefined,
    bodyColorGradient: boolean,
    bodyStartColor: string | undefined,
    bodyEndColor: string | undefined,
    bodyGradientDegree: GradientDegree | undefined,
    showEar: boolean | undefined,
    earColor: string | undefined,
    eyeCount: EyeCount | undefined,
    eyePosition: EyePosition | undefined,
    eyeShadeColor: string | undefined,
    eyePupilGradient: boolean,
    eyePupilStartColor: string | undefined,
    eyePupilEndColor: string | undefined,
    mouthColor: string | undefined,
    mouthExpression: Expression | undefined,
    showTongueOrTeeth: TongueOrTeeth | undefined,
    tongueColor: string | undefined,
    toothCount: ToothCount | undefined
  ) {
    if (isBackgroundGradient) {
      if (
        backgroundStartColor === null ||
        (backgroundStartColor !== null &&
          backgroundStartColor?.trim() === '') ||
        !isValidHex(backgroundStartColor!)
      ) {
        const index = hashSeed % options.backgroundColor.length;
        
        backgroundStartColor = options.backgroundColor[index][0];
        backgroundEndColor = options.backgroundColor[index][1];
      } else {
        if (
          backgroundEndColor === null ||
          (backgroundEndColor !== null && backgroundEndColor?.trim() === '') ||
          !isValidHex(backgroundEndColor!)
        ) {
          backgroundEndColor = backgroundStartColor;
        } else {
          backgroundEndColor = backgroundEndColor;
        }
      }
      if (
        backgroundGradientDegree === null ||
        backgroundGradientDegree === undefined
      ) {
        const index = hashSeed % options.backgroundGradientDegree.length;
        backgroundGradientDegree = gradientDegrees(
          options.backgroundGradientDegree[index]
        );
      }
    } else {
      if (
        backgroundStartColor === null ||
        (backgroundStartColor !== null &&
          backgroundStartColor?.trim() === '') ||
        !isValidHex(backgroundStartColor!)
      ) {
        const index = hashSeed % options.backgroundColor.length;
        backgroundStartColor = options.backgroundColor[index][0];
      }
    }
    //Process Body
    if (bodyHeight === null || bodyHeight === undefined) {
      const index = hashSeed % options.bodyHeight.length;
      bodyHeight = options.bodyHeight[index];
    }
    if (bodyShape === null || bodyShape === undefined) {
      const index = hashSeed % options.bodyShape.length;
      bodyShape = options.bodyShape[index];
    }
    if (bodyColorGradient) {
      if (
        bodyStartColor === null ||
        bodyStartColor === undefined ||
        (bodyStartColor !== null && bodyStartColor?.trim() === '') ||
        !isValidHex(bodyStartColor!)
      ) {
        const index = hashSeed % options.bodyColor.length;
        bodyStartColor = options.bodyColor[index][0];
        bodyEndColor = options.bodyColor[index][1];
      } else {
        if (
          bodyEndColor === null ||
          (bodyEndColor !== null && bodyEndColor?.trim() === '') ||
          !isValidHex(bodyEndColor!)
        ) {
          bodyEndColor = bodyStartColor;
        } else {
          bodyEndColor = bodyEndColor;
        }
      }

      if (bodyGradientDegree === null || bodyGradientDegree === undefined) {
        const index = hashSeed % options.bodyGradientDegree.length;
        bodyGradientDegree = gradientDegrees(options.bodyGradientDegree[index]);
      }
    } else {
      if (
        bodyStartColor === null ||
        (bodyStartColor !== null && bodyStartColor?.trim() === '') ||
        !isValidHex(bodyStartColor!)
      ) {
        const index = hashSeed % options.bodyColor.length;
        bodyStartColor = options.bodyColor[index][0];
      }
    }

    console.log('showEar >> '+showEar)
    //Process Ear
    if (showEar === null || showEar === undefined) {
      const index = hashSeed % options.showEar.length;
      showEar = options.showEar[index];
    }
    console.log('showEar >> '+showEar)


    //Ear Color
    if (
      earColor === null ||
      earColor === undefined ||
      (earColor !== null && earColor?.trim() === '') ||
      !isValidHex(earColor!)
    ) {
      const index = hashSeed % options.earColor.length;
      earColor = options.earColor[index];
    }

    //Eye Count
    if (eyeCount === null || eyeCount === undefined) {
      const index = hashSeed % options.eyeCount.length;
      eyeCount = options.eyeCount[index];
    }
    //Eye Position
    if (eyePosition === null || eyePosition === undefined) {
      const index = hashSeed % options.eyePosition.length;
      eyePosition = options.eyePosition[index];
    }
    //Eye Shade
    if (
      eyeShadeColor === null ||
      eyeShadeColor === undefined ||
      (eyeShadeColor !== null && eyeShadeColor?.trim() === '') ||
      !isValidHex(eyeShadeColor!)
    ) {
      const index = hashSeed % options.eyeShadeColor.length;
      eyeShadeColor = options.eyeShadeColor[index];
    }
    //Eye Pupil Color
    if (eyePupilGradient) {
      if (
        eyePupilStartColor === null ||
        eyePupilStartColor === undefined ||
        (eyePupilStartColor !== null && eyePupilStartColor?.trim() === '') ||
        !isValidHex(eyePupilStartColor!)
      ) {
        const index = hashSeed % options.eyePupilColor.length;
        eyePupilStartColor = options.eyePupilColor[index][0];
        eyePupilEndColor = options.eyePupilColor[index][1];
      } else {
        if (
          eyePupilEndColor === null ||
          (eyePupilEndColor !== null && eyePupilEndColor?.trim() === '') ||
          !isValidHex(eyePupilEndColor!)
        ) {
          eyePupilEndColor = eyePupilStartColor;
        } else {
          eyePupilEndColor = eyePupilEndColor;
        }
      }
    } else {
      if (
        eyePupilStartColor === null ||
        (eyePupilStartColor !== null && eyePupilStartColor?.trim() === '') ||
        !isValidHex(eyePupilStartColor!)
      ) {
        const index = hashSeed % options.eyePupilColor.length;
        eyePupilStartColor = options.eyePupilColor[index][0];
      }
    }

    //Mouth Color
    if (
      mouthColor === null ||
      mouthColor === undefined ||
      (mouthColor !== null && mouthColor?.trim() === '') ||
      !isValidHex(mouthColor!)
    ) {
      const index = hashSeed % options.mouthColor.length;
      mouthColor = options.eyeShadeColor[index];
    }

    //Expression
    console.log('Expression >> '+mouthExpression)
    if (mouthExpression === null || mouthExpression === undefined) {
      const index = hashSeed % options.mouthExpression.length;
      mouthExpression = options.mouthExpression[index];
    }
    console.log('Expression >> '+mouthExpression)

    console.log('showTongueOrTeeth >> '+showTongueOrTeeth)
    //Teeth Or Tongue
    if (showTongueOrTeeth === null || showTongueOrTeeth === undefined) {
      const index = hashSeed % options.showTongueOrTeeth.length;
      showTongueOrTeeth = options.showTongueOrTeeth[index];
    }
    console.log('showTongueOrTeeth >> '+showTongueOrTeeth)

    //Tongue Color
    if (
      tongueColor === null ||
      tongueColor === undefined ||
      (tongueColor !== null && tongueColor?.trim() === '') ||
      !isValidHex(tongueColor!)
    ) {
      const index = hashSeed % options.tongueColor.length;
      tongueColor = options.tongueColor[index];
    }

    console.log('toothCount >> '+toothCount)
    //Tooth Count
    if (toothCount === null || toothCount === undefined) {
      const index = hashSeed % options.toothCount.length;
      toothCount = options.toothCount[index];
    }
    console.log('toothCount >> '+toothCount)


    return {
      backgroundStartColor,
      backgroundEndColor,
      backgroundGradientDegree,
      bodyHeight,
      bodyShape,
      bodyStartColor,
      bodyEndColor,
      bodyGradientDegree,
      showEar,
      earColor,
      eyeCount,
      eyePosition,
      eyeShadeColor,
      eyePupilStartColor,
      eyePupilEndColor,
      mouthColor,
      mouthExpression,
      showTongueOrTeeth,
      tongueColor,
      toothCount,
    };
  }
}

export default WormAvatar;
