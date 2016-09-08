#rn-drop-cooperation:
React native drop cooperation app. https://aixinchou.shuidihuzhu.com/

##resources:
+ http://fontawesome.io/icons/
+ https://github.com/chenbin92/React-native-example/tree/TabBarExample
+ http://blog.csdn.net/yuanguozhengjust/article/details/50556700
+ http://blog.csdn.net/yayayaya20122012/article/details/51067798
+ http://www.infoq.com/cn/articles/react-native-layout?utm_campaign=infoq_content&
+ http://www.jianshu.com/p/5d772d2c6f5e
+ https://www.raywenderlich.com/126063/react-native-tutorial
+ https://libraries.io/github/jondot/awesome-react-native
+ https://react.parts/native?search=webview

## change ip solution(Check your hosts file):
```objective-c
/*jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];*/
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```
## hosts file:
+ 127.0.0.1 localhost

##todo:
- [x] complete swiper for home-content.
- [ ] fetch data from mock server.
- [ ] complete item-template for home-content.
- [ ] scrollview or list view form home-content.
