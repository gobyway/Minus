# minus  
A Chrome Extension remove unwanted DOM from websites.  
## ***0⎝*** Roll of every file  
```
 minus
   └──manifest.json ---- enterance file of the extension
   └──logo.png      ---- the logo will display on chrome's toolbar
   └──0.js          ---- it's jquery.min.js actually! The name "0.js" is just on behalf of less space.
   └──1.js          ---- main js file of the extension, invoke other js scripts such as 0.js、Acom.js、Acn.js、Anet.js
   └──Acom.js       ---- aim at the websites 'com' as top-level-domain, such as google.com、facebook.com 
   └──Acn.js        ---- aim at the websites 'cn'  as top-level-domain, such as w3school.cn、tianya.cn、sina.com.cn
   └──Anet.js       ---- aim at the websites 'net' as top-level-domain, such as csdn.net、jb51.net、oschina.net
```
## ***1⎝*** I'm a Developer 
#### *1.1* What can I do with minus?  
```
If you wanna add a website in order to enlarge minus, please code as follow four steps:
    1. Locate which js file you will code in, according to its top-level-domin whether com or org and so on
       examples:
         google.com ---- we will code in Acom.js
         csdn.net   ---- we will code in Anet.js
         baidu.com  ---- we will code in Acom.js
       next, I'll take  http://map.baidu.com  as example.
    2. Append a function Bbaidu into Acom.js
          function Bbaidu(){eval('C'+hostarray[num-3]+'()');//eval() due to there's next-level-domin 'map' below 'baidu'
              //code here
          }
    3. Append a function Cmap into the function Bbaidu
          function Bbaidu(){eval('C'+hostarray[num-3]+'()');
              function Cmap(){//no eval() due to there's no next-level-domain below 'map'
                  //code here
              }
          }
       there is no next-level-domain, so there is no need to append a function named Dxxx into function Cmap
    4. Code which can remove the unwanted DOM from http://map.baidu.com in jQuery style
          function Bbaidu(){eval('C'+hostarray[num-3]+'()');
              function Cmap(){
                  $("#head,.advertise,[class^='ad'],a['pop']").remove();
                  $("#sidebar").parent().nextAll().remove();
                  $("#headwrapper").css("background","#fff");
              }
          }
```
#### *1.2* Which browsers can use minus?  
* Chrome
* UC
* sougou
* Baidu
* 360
* QQ
