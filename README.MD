#rn-drop-cooperation:
React native drop cooperation app. https://aixinchou.shuidihuzhu.com/

##resources:
+ http://fontawesome.io/icons/

## change ip solution(Check your hosts file):
```objective-c
/*jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];*/
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```
## hosts file:
+ 127.0.0.1 localhost
