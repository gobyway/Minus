	var host = window.location.host;
	var hostarray = host.split(".");
	var num = hostarray.length;
	jdg();setTimeout("jdg()",1000);setTimeout("jdg()",2000);setTimeout("jdg()",4000);setTimeout("jdg()",7000);setTimeout("jdg()",10000);setTimeout("jdg()",20000);setTimeout("jdg()",30000);setTimeout("jdg()",40000);setTimeout("jdg()",50000);setTimeout("jdg()",60000);		
	function jdg(){
		switch (hostarray[num-1])
		{
			case "com":		Acom();		break;
			case "cn":		Acn();		break;
			case "net":		Anet();		break;
			case "org":		Aorg();		break;
			default:break;
		}	
	}