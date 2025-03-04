export default ScrollyVideo;
/**
 *   ____                 _ _     __     ___     _
 *  / ___|  ___ _ __ ___ | | |_   \ \   / (_) __| | ___  ___
 *  \___ \ / __| '__/ _ \| | | | | \ \ / /| |/ _` |/ _ \/ _ \
 *   ___) | (__| | | (_) | | | |_| |\ V / | | (_| |  __/ (_) |
 *  |____/ \___|_|  \___/|_|_|\__, | \_/  |_|\__,_|\___|\___/
 *                            |___/
 *
 * Responsive scrollable videos without obscure video encoding requirements.
 * Compatible with React, Svelte, Vue, and plain HTML.
 */
declare class ScrollyVideo {
    constructor({ src, scrollyVideoContainer, cover, sticky, full, trackScroll, transitionSpeed, frameThreshold, useWebCodecs, debug, }: {
        src: any;
        scrollyVideoContainer: any;
        cover?: boolean;
        sticky?: boolean;
        full?: boolean;
        trackScroll?: boolean;
        transitionSpeed?: number;
        frameThreshold?: number;
        useWebCodecs?: boolean;
        debug?: boolean;
    });
    container: Element;
    src: any;
    transitionSpeed: number;
    frameThreshold: number;
    useWebCodecs: boolean;
    cover: boolean;
    sticky: boolean;
    full: boolean;
    trackScroll: boolean;
    debug: boolean;
    scrollPercent: number;
    video: HTMLVideoElement;
    browserEngine: any;
    isSafari: boolean;
    currentTime: number;
    targetTime: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    frames: any[];
    frameRate: number;
    updateScrollPercentage: (jump: any) => void;
    resize: () => void;
    /**
     * Sets the style of the video or canvas to "cover" it's container
     *
     * @param el
     */
    setCoverStyle(el: any): void;
    /**
     * Uses webCodecs to decode the video into frames
     */
    decodeVideo(): void;
    /**
     * Paints the frame of to the canvas
     *
     * @param frameNum
     */
    paintCanvasFrame(frameNum: any): void;
    /**
     * Transitions the video or the canvas to the proper frame
     *
     * @param jump
     */
    transitionToTargetTime(jump: any): void;
    transitioning: boolean;
    /**
     * Sets the currentTime as a percentage of the video duration.
     *
     * @param setPercentage
     * @param jump
     */
    setTargetTimePercent(setPercentage: any, jump: any): void;
    /**
     * Call to destroy this ScrollyVideo object
     */
    destroy(): void;
}
