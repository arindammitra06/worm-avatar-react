import { GradientDegree, BodyHeight, BodyShape, EyeCount, EyePosition, Expression, TongueOrTeeth, ToothCount } from "..";
export declare const eyeShadeColors: string[];
export declare const mouthColors: string[];
export declare const tongueColors: string[];
export declare const earColors: string[];
export declare const backgroundGradients: string[][];
export declare const bodyGradients: string[][];
export declare const pupilGradients: string[][];
/**
 * Gennerate avatar configurations
 */
export interface WormAvatarOptions {
    size: number;
    seed?: string;
    isRandom: boolean;
    radius?: number;
    isBackgroundGradient?: boolean;
    backgroundStartColor?: string;
    backgroundEndColor?: string;
    backgroundGradientDegree?: GradientDegree;
    addShadows?: boolean;
    bodyHeight?: BodyHeight;
    bodyShape?: BodyShape;
    bodyColorGradient?: boolean;
    bodyStartColor?: string;
    bodyEndColor?: string;
    bodyGradientDegree?: GradientDegree;
    showEar?: boolean;
    earColor?: string;
    eyeCount?: EyeCount;
    eyePosition?: EyePosition;
    eyeShadeColor?: string;
    eyePupilGradient?: boolean;
    eyePupilStartColor?: string;
    eyePupilEndColor?: string;
    mouthColor?: string;
    mouthExpression?: Expression;
    showTongueOrTeeth?: TongueOrTeeth;
    tongueColor?: string;
    toothCount?: ToothCount;
}
