import * as React from 'react';
import { WormAvatarOptions } from './types/avatar-options.types';
export declare type GradientDegree = number & {
    _type_: 'GradientDegree';
};
export declare const gradientDegrees: (value: number) => GradientDegree;
export declare type HexColor = string & {
    _type_: 'HexColor';
};
export declare const hexColor: (value: string) => HexColor;
export declare enum BodyShape {
    THIN = 0,
    FAT = 1
}
export declare enum BodyHeight {
    NORMAL = 0,
    TALL = 1
}
export interface BodyProps {
    bodyShape: BodyShape;
    bodyHeight: BodyHeight;
}
export declare enum EyeSide {
    LEFT = 0,
    RIGHT = 1
}
export declare enum EyePosition {
    TOP = 0,
    NORMAL = 1
}
export declare enum EyeCount {
    ONE = 0,
    TWO = 1
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
export declare enum Expression {
    HAPPY = 0,
    SAD = 1,
    MEH = 2,
    WOH = 3,
    BLANK = 4
}
export declare enum TongueOrTeeth {
    NONE = 0,
    TONGUE = 1,
    TEETH = 2
}
export interface MouthProps {
    expression: Expression;
    mouthColor: string;
    size: number;
}
export declare enum ToothCount {
    ONE = 0,
    TWO = 1
}
export declare enum ToothSide {
    LEFT = 0,
    RIGHT = 1
}
export interface ToothProps {
    toothCount: ToothCount;
    toothSide: ToothSide;
    size: number;
}
export interface TongueProps {
    tongueColor: string;
}
export declare enum EarSide {
    LEFT = 0,
    RIGHT = 1
}
export interface EarProps {
    earSide: EarSide;
    earColor: string;
    bodyShape?: BodyShape;
}
declare class WormAvatar extends React.Component<WormAvatarOptions> {
    render(): React.JSX.Element;
    private processProps;
}
export default WormAvatar;
