function Anet(){eval('B'+hostarray[num-2]+'()');}
		
	function Bcsdn(){eval('C'+hostarray[num-3]+'()');
		
		function Cblog(){
			$("[class^='ad'],.csdn-toolbar,iframe,#side,[id^='cpro'],#header,#com-quick-reply,.pub_fo,#res-relatived,#digg,.bog_copyright,.bdsharebuttonbox,.announce,.link_collect,.link_report,.category,#navigator,.tag_list,#relate,.csdn-toolbar,[id^='ad'],.main_left>div:not('.side_nav'),.main_right,.blog-nav,a[href^='http://tongji'],.J_adv").remove();
			$("#sub_tab").prevAll().remove();
			$("#container").css("background","none");
			$("body").css("background","none");
			$("#body").css("border","none");
		}
		function Cbbs(){
			$("[class^='ad'],.csdn-toolbar,iframe,#side,[id^='cpro'],#header,#com-quick-reply,.pub_fo,#res-relatived,#digg,.bog_copyright,.bdsharebuttonbox,.announce,.link_collect,.link_report,.category,#navigator,.tag_list,#relate,.csdn-toolbar,[id^='ad'],.main_left>div:not('.side_nav'),.main_right,.blog-nav,.news-nav,.chal,#Topic_Top,#topic-detail-ad-ul,.comt,.J_adv,.detail_title>.fr,#topic-extra-info,td[valign='bottom'],dl.user_info,div.control_area,.detail_title_fixed,.right,#com-quick-reply-bbs,.page_nav>.fr").remove();
			$(".detail_tbox").prevAll().remove();
		}
		function Cgeek(){
			$(".csdn-toolbar,iframe,.scrolltop_bar>li:not('.js-scroll-top'),[class$='ad'],.detail_ad_top,.pull-right,.reply_news,.ad_banner").remove();
			var removeParent = ".share";
			$(removeParent).parent().remove();
			var css = "body";
			$(css).css({"background-image":"none","background":"#fff"});
		}
		function Cask(){
			$(".J_adv,.csdn-toolbar,.nav,.pub_fo,.second_tips,.answer_form_con,.bdsharebuttonbox,.alsoAsk,.mod_answer_ing,.persion_article").remove();
		}
		function Cwww(){
			$("[class^='ad'],.J_adv,.pagetop_notice,.pub_footer,[id^='fix_floater'],.brea_nav>.fr,.content>.right,iframe,.csdn-toolbar,.share,.pub_fo,#cx_tabmenu").remove();
			$(".service").prev().prev().nextAll().remove();
			$("#csdnTab>.last").nextAll().remove();
			$(".news_content>hr").nextAll().remove();
			$(".left>.detail>.detail").prev().nextUntil("#comments").remove();
		}
	}//Bcsdn				
	function Btiexue(){
		$("[id^='Baidu_'],.pos_1Box,[id^='BAIDU_'],[class='AreaR float_R new-right'],.d-r-box,.share_box,.hotRecom,[class='myshow mt5'],.replyTxt,.footer,.pos_2Box,iframe,[class^='aboutPost'],.hotPost,#imghandle,#topNav,[class='ftBtn textHide float_L'],[id^='adminAndUserPanel']>.float_L,dl.keyword,.gfMsg,[class^='ad-widget'],.imageplus-append,.a1,.a2").remove();
		$("[class='tabs-01 clearfix'],#replyUserMsg").parent().remove();
		$("#topBar").empty();
		$("#topBar").css("height","0px");
		$("#postContent").nextAll().remove();
	}//Btiexue
	function Bjb51(){
		$("#head>div:not('#contents,#new,.con_2'),[id^='BAIDU_'],iframe,#contents>.main>.fr,a[href='#comments'],#con_all,.imageplus-append,.ad-widget-imageplus-sticker,.ad-widget-imageplus,a[id$='-icon'],#powerby_sohu,[class^='dxy'],[id^='tonglan'],[id^='02c41373b'],.cbox-block-w").remove();
		$("a[data-key='sina']").parentsUntil("ul.clear-g").remove();				
	}//Bjb51
	function Boschina(){
		$("#toolbar_wrapper，#git-bulletin").remove();
	}//开源社区
	
