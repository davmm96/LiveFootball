#import "SPCalendarManager.h"

#import <React/RCTConvert.h>

@import EventKit;

@implementation SPCalendarManager

RCT_EXPORT_MODULE(CalendarManager)

RCT_EXPORT_METHOD(addGame:(NSString *)game date:(NSDate *)date resolver:(RCTPromiseResolveBlock)resolver rejecter:(RCTPromiseRejectBlock)rejecter)
{
  EKEventStore *store = [[EKEventStore alloc] init];

  [store requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError * _Nullable error) {
    if (granted == NO || error != nil)
    {
      rejecter(@"", @"Couldn't get access to the calendar", error);
      return;
    }

    EKEvent *event = [EKEvent eventWithEventStore:store];
    event.title = game;
    event.startDate = date;
    
    NSTimeInterval gameDuration = 90 * 60;
    NSDate *dateFinish = [date dateByAddingTimeInterval:gameDuration];
    
    event.endDate = dateFinish;
    event.allDay = NO;
    event.calendar = [store defaultCalendarForNewEvents];

    NSError *saveError = nil;
    [store saveEvent:event span:EKSpanThisEvent error:&saveError];

    if (saveError != nil)
    {
      rejecter(@"", @"Error adding game", saveError);
    }
    else
    {
      resolver(nil);
    }
  }];
}

@end
