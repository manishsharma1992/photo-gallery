import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-4.x';
import * as cloudinary from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ManagerComponent } from './manager/manager.component';

const appRoutes: Routes = [{
  path: 'gallery', 
  component: GalleryComponent
}, {
  path: 'manager', 
  component: ManagerComponent
},{
  path: '', 
  redirectTo: '/gallery', 
  pathMatch: 'full'
}];

const CloudinarySettings = {
  cloud_name: 'manishsharma2192',
  upload_preset: 'ostdegld'
};


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ManagerComponent
  ],
  imports: [
    CloudinaryModule.forRoot(cloudinary, CloudinarySettings),
    FileUploadModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
