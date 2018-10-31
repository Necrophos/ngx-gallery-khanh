import { EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryAction } from './ngx-gallery-action.model';
export declare class NgxGalleryThumbnailsComponent implements OnChanges {
    private sanitization;
    private elementRef;
    private helperService;
    thumbnailsLeft: string;
    thumbnailsMarginLeft: string;
    mouseenter: boolean;
    remainingCountValue: number;
    firstImg: any;
    minStopIndex: number;
    images: any[];
    links: string[];
    labels: string[];
    linkTarget: string;
    columns: number;
    rows: number;
    arrows: boolean;
    arrowsAutoHide: boolean;
    margin: number;
    selectedIndex: number;
    clickable: boolean;
    swipe: boolean;
    size: string;
    arrowPrevIcon: string;
    arrowNextIcon: string;
    moveSize: number;
    order: number;
    remainingCount: boolean;
    lazyLoading: boolean;
    actions: NgxGalleryAction[];
    numberShowArrow: number;
    onActiveChange: EventEmitter<{}>;
    private index;
    constructor(sanitization: DomSanitizer, elementRef: ElementRef, helperService: NgxGalleryHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    reset(index: number): void;
    getImages(): any[];
    getImages2(): any[];
    handleClick(event: Event, index: number): void;
    hasLinks(): boolean;
    moveRight(): void;
    moveLeft(): void;
    canMoveRight(): boolean;
    canMoveLeft(): boolean;
    getThumbnailLeft(index: number): SafeStyle;
    getThumbnailTop(index: number): SafeStyle;
    getThumbnailWidth(): SafeStyle;
    getThumbnailHeight(): SafeStyle;
    setThumbnailsPosition(): void;
    setDefaultPosition(): void;
    canShowArrows(): boolean;
    validateIndex(): void;
    getSafeUrl(image: string): SafeStyle;
    private getThumbnailPosition(index, count);
    private getThumbnailDimension(count);
    private getMaxIndex();
    private isEven(n);
    private getVisibleCount();
    private getSafeStyle(value);
}
