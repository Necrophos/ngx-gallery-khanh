import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgxGalleryActionComponent } from './ngx-gallery-action.component';
import { NgxGalleryArrowsComponent } from './ngx-gallery-arrows.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryThumbnailsMobileComponent } from './ngx-gallery-thumbnails-mobile.component';
import { GocodeeGalleryComponent } from './gocodee-gallery.component';
import { GocodeeGalleryPreviewComponent } from './gocodee-gallery-preview.component';
import { ImgViewComponent } from './img-view.component';

export * from './ngx-gallery.component';
export * from './img-view.component';
export * from './gocodee-gallery.component';
export * from './gocodee-gallery-preview.component';
export * from './ngx-gallery-action.component';
export * from './ngx-gallery-image.component';
export * from './ngx-gallery-thumbnails.component';
export * from './ngx-gallery-thumbnails-mobile.component';
export * from './ngx-gallery-preview.component';
export * from './ngx-gallery-arrows.component';
export * from './ngx-gallery-options.model';
export * from './ngx-gallery-image.model';
export * from './ngx-gallery-animation.model';
export * from './ngx-gallery-helper.service';
export * from './ngx-gallery-image-size.model';
export * from './ngx-gallery-layout.model';
export * from './ngx-gallery-order.model';
export * from './ngx-gallery-ordered-image.model';
export * from './ngx-gallery-action.model';

export class CustomHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'pinch': { enable: false },
        'rotate': { enable: false }
    };
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgxGalleryActionComponent,
        NgxGalleryArrowsComponent,
        NgxGalleryImageComponent,
        NgxGalleryThumbnailsComponent,
        NgxGalleryThumbnailsMobileComponent,     
        NgxGalleryPreviewComponent,
        GocodeeGalleryComponent,
        GocodeeGalleryPreviewComponent,
        NgxGalleryComponent,
        ImgViewComponent
    ],
    exports: [
        NgxGalleryComponent
    ],
    providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ]
})
export class NgxGalleryGoCodeeModule {}
