//
//  ImageManager.m
//  LiveFootball
//
//  Created by David Melero Morant on 3/10/22.
//

#import "ImageManager.h"


@implementation ImageManager

RCT_EXPORT_MODULE(ImageManager)

RCT_EXPORT_METHOD(downloadImage:(NSString *)name date:(NSString *)url resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)
{
      UIImage * result;

      NSData * data = [NSData dataWithContentsOfURL:[NSURL URLWithString:url]];
      result = [UIImage imageWithData:data];
  
      NSString * documentsDirectoryPath =  [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
  
      [UIImagePNGRepresentation(result) writeToFile:[documentsDirectoryPath stringByAppendingPathComponent:[NSString stringWithFormat:@"%@.%@", name, @"png"]] options:NSAtomicWrite error:nil];
  
  
  resolver(nil);
}

@end

