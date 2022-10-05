//
//  ImageManager.m
//  LiveFootball
//
//  Created by David Melero Morant on 3/10/22.
//

#import "ImageManager.h"
#import <Photos/Photos.h>

@implementation ImageManager

RCT_EXPORT_MODULE(ImageManager)

RCT_EXPORT_METHOD(downloadImage:(NSString *)name url:(NSString *)url resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)
{
      if (@available(iOS 14, *)) {
        PHAuthorizationStatus status = [PHPhotoLibrary authorizationStatusForAccessLevel:PHAccessLevelAddOnly];
        
        switch (status) {
          case PHAuthorizationStatusAuthorized: {
            [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                    NSLog(@"Error downloading file: %@", error);
                    UIImage *result = [UIImage imageWithData:data];
                    UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                    resolver(nil);
            }] resume];
          }
            break;
          case PHAuthorizationStatusDenied:{
            rejecter(@"", @"Couldn't get access to the photo library", nil);
          }
            break;
          case PHAuthorizationStatusNotDetermined:{
            [PHPhotoLibrary requestAuthorizationForAccessLevel:PHAccessLevelAddOnly handler:^(PHAuthorizationStatus status) {
              if (status != PHAuthorizationStatusAuthorized) {
                rejecter(@"", @"Couldn't get access to the photo library", nil);
              }
              else {
                [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                        NSLog(@"Error downloading file: %@", error);
                        UIImage *result = [UIImage imageWithData:data];
                        UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                        resolver(nil);
                }] resume];
              }
            }];
          }
            break;
          case PHAuthorizationStatusRestricted:{
            [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                    NSLog(@"Error downloading file: %@", error);
                    UIImage *result = [UIImage imageWithData:data];
                    UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                    resolver(nil);
            }] resume];
          }
            break;
          case PHAuthorizationStatusLimited:{
            [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                    NSLog(@"Error downloading file: %@", error);
                    UIImage *result = [UIImage imageWithData:data];
                    UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                    resolver(nil);
            }] resume];
          }
            break;
        }
      }
      else {
        PHAuthorizationStatus status = [PHPhotoLibrary authorizationStatus];
            
        if(status == PHAuthorizationStatusDenied){
          rejecter(@"", @"Couldn't get access to the photo library", nil);
        }
        else if(status == PHAuthorizationStatusNotDetermined){
              [PHPhotoLibrary requestAuthorization:^(PHAuthorizationStatus status) {

               if (status == PHAuthorizationStatusAuthorized) {
                   rejecter(@"", @"Couldn't get access to the photo library", nil);
               }
               else{
                 [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                         NSLog(@"Error downloading file: %@", error);
                         UIImage *result = [UIImage imageWithData:data];
                         UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                         resolver(nil);
                 }] resume];
               }
             }];
        }
        else {
          [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                  NSLog(@"Error downloading file: %@", error);
                  UIImage *result = [UIImage imageWithData:data];
                  UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
                  resolver(nil);
          }] resume];
        }
      }
}

@end
