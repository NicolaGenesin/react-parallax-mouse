import React from 'react';
interface Props {
    children: JSX.Element[] | JSX.Element;
    resetOnLeave?: boolean;
    useWindowMouseEvents?: boolean;
    inverted?: boolean;
    containerStyles?: React.CSSProperties;
    className?: string;
    globalFactorX?: number;
    globalFactorY?: number;
    disableCSSTransition?: boolean;
}
declare const MouseParallaxContainer: ({ children, resetOnLeave, useWindowMouseEvents, inverted, containerStyles, className, globalFactorX, globalFactorY, disableCSSTransition }: Props) => JSX.Element;
export default MouseParallaxContainer;
