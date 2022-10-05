//
//  ImageManager.m
//  LiveFootball
//
//  Created by David Melero Morant on 3/10/22.
//

#import "ImageManager.h"


@implementation ImageManager

RCT_EXPORT_MODULE(ImageManager)

RCT_EXPORT_METHOD(downloadImage:(NSString *)name url:(NSString *)url resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)
{
      [[[NSURLSession sharedSession] dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
             NSLog(@"Error downloading file: %@", error);
        
             UIImage *result = [UIImage imageWithData:data];
             UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
        
             resolver(nil);
      }] resume];
}

@end

