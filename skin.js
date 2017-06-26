// Garden Gnome Software - Skin
// Pano2VR 5.0.3/15088
// Filename: HYRetail_FortyFiveTen.ggsk
// Generated Tue Feb 14 12:06:19 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/hylogo__o.png';
		preLoadImg.src=basePath + 'images/hylogo__a.png';
		preLoadImg.src=basePath + 'images/button_1_1__o.png';
		preLoadImg.src=basePath + 'images/button_1_1__a.png';
		preLoadImg.src=basePath + 'images/button_2_1__o.png';
		preLoadImg.src=basePath + 'images/button_2_1__a.png';
		preLoadImg.src=basePath + 'images/button_3_1__o.png';
		preLoadImg.src=basePath + 'images/button_3_1__a.png';
		preLoadImg.src=basePath + 'images/button_4_1__o.png';
		preLoadImg.src=basePath + 'images/button_4_1__a.png';
		preLoadImg.src=basePath + 'images/button_5_1__o.png';
		preLoadImg.src=basePath + 'images/button_5_1__a.png';
		preLoadImg.src=basePath + 'images/image_1__o.png';
		preLoadImg.src=basePath + 'images/mapbuttoninactive__o.png';
		preLoadImg.src=basePath + 'images/mapbuttoninactive__a.png';
		preLoadImg.src=basePath + 'images/mapbuttonactive__o.png';
		preLoadImg.src=basePath + 'images/mapbuttonactive__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._hylogo=document.createElement('div');
		this._hylogo__img=document.createElement('img');
		this._hylogo__img.className='ggskin ggskin_button';
		this._hylogo__img.setAttribute('src',basePath + 'images/hylogo.png');
		this._hylogo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hylogo__img.className='ggskin ggskin_button';
		this._hylogo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._hylogo__img);
		this._hylogo.appendChild(this._hylogo__img);
		this._hylogo.ggId="HY-logo";
		this._hylogo.ggTop=-59;
		this._hylogo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hylogo.ggVisible=true;
		this._hylogo.className='ggskin ggskin_button ';
		this._hylogo.ggType='button';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : -59px;';
		hs+='visibility : inherit;';
		hs+='width : 174px;';
		this._hylogo.setAttribute('style',hs);
		this._hylogo.style[domTransform + 'Origin']='0% 100%';
		me._hylogo.ggIsActive=function() {
			return false;
		}
		me._hylogo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hylogo.onclick=function () {
			me._button_1_1.onclick();
			me._marker_node55.onclick();
		}
		this._hylogo.onmouseover=function () {
			me._hylogo__img.src=basePath + 'images/hylogo__o.png';
		}
		this._hylogo.onmouseout=function () {
			me._hylogo__img.src=basePath + 'images/hylogo.png';
		}
		this._hylogo.onmousedown=function () {
			me._hylogo__img.src=basePath + 'images/hylogo__a.png';
		}
		this._hylogo.onmouseup=function () {
			me._hylogo__img.src=basePath + 'images/hylogo.png';
		}
		this._hylogo.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._hylogo);
		this._forty_five_fifty_logo=document.createElement('div');
		this._forty_five_fifty_logo__img=document.createElement('img');
		this._forty_five_fifty_logo__img.className='ggskin ggskin_image';
		this._forty_five_fifty_logo__img.setAttribute('src',basePath + 'images/forty_five_fifty_logo.png');
		this._forty_five_fifty_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._forty_five_fifty_logo__img.className='ggskin ggskin_image';
		this._forty_five_fifty_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._forty_five_fifty_logo__img);
		this._forty_five_fifty_logo.appendChild(this._forty_five_fifty_logo__img);
		this._forty_five_fifty_logo.ggId="forty five fifty logo";
		this._forty_five_fifty_logo.ggLeft=-117;
		this._forty_five_fifty_logo.ggTop=-53;
		this._forty_five_fifty_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._forty_five_fifty_logo.ggVisible=true;
		this._forty_five_fifty_logo.className='ggskin ggskin_image ';
		this._forty_five_fifty_logo.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -117px;';
		hs+='position : absolute;';
		hs+='top : -53px;';
		hs+='visibility : inherit;';
		hs+='width : 268px;';
		this._forty_five_fifty_logo.setAttribute('style',hs);
		this._forty_five_fifty_logo.style[domTransform + 'Origin']='50% 50%';
		me._forty_five_fifty_logo.ggIsActive=function() {
			return false;
		}
		me._forty_five_fifty_logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._forty_five_fifty_logo.onclick=function () {
			me._marker_node59.onclick();
			me._button_5_1.onclick();
		}
		this._forty_five_fifty_logo.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._forty_five_fifty_logo);
		this._plans=document.createElement('div');
		this._plans.ggId="Plans";
		this._plans.ggLeft=-245;
		this._plans.ggTop=-359;
		this._plans.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._plans.ggVisible=false;
		this._plans.className='ggskin ggskin_container ';
		this._plans.ggType='container';
		hs ='';
		hs+='height : 322px;';
		hs+='left : -245px;';
		hs+='position : absolute;';
		hs+='top : -359px;';
		hs+='visibility : hidden;';
		hs+='width : 217px;';
		this._plans.setAttribute('style',hs);
		this._plans.style[domTransform + 'Origin']='100% 100%';
		me._plans.ggIsActive=function() {
			return false;
		}
		me._plans.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._plans.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fifth_floor=document.createElement('div');
		this._fifth_floor__img=document.createElement('img');
		this._fifth_floor__img.className='ggskin ggskin_image';
		this._fifth_floor__img.setAttribute('src',basePath + 'images/fifth_floor.png');
		this._fifth_floor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fifth_floor__img.className='ggskin ggskin_image';
		this._fifth_floor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fifth_floor__img);
		this._fifth_floor.appendChild(this._fifth_floor__img);
		this._fifth_floor.ggId="Fifth Floor";
		this._fifth_floor.ggLeft=-233;
		this._fifth_floor.ggTop=-361;
		this._fifth_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fifth_floor.ggVisible=false;
		this._fifth_floor.className='ggskin ggskin_image ';
		this._fifth_floor.ggType='image';
		hs ='';
		hs+='height : 348px;';
		hs+='left : -233px;';
		hs+='position : absolute;';
		hs+='top : -361px;';
		hs+='visibility : hidden;';
		hs+='width : 229px;';
		this._fifth_floor.setAttribute('style',hs);
		this._fifth_floor.style[domTransform + 'Origin']='100% 100%';
		me._fifth_floor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fifth_floor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fifth_floor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fifth_floor2=document.createElement('div');
		this._fifth_floor2__text=document.createElement('div');
		this._fifth_floor2.className='ggskin ggskin_textdiv';
		this._fifth_floor2.ggTextDiv=this._fifth_floor2__text;
		this._fifth_floor2.ggId="FIFTH FLOOR";
		this._fifth_floor2.ggLeft=-204;
		this._fifth_floor2.ggTop=-57;
		this._fifth_floor2.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._fifth_floor2.ggVisible=false;
		this._fifth_floor2.className='ggskin ggskin_text ';
		this._fifth_floor2.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -204px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 132px;';
		this._fifth_floor2.setAttribute('style',hs);
		this._fifth_floor2.style[domTransform + 'Origin']='50% 50%';
		this._fifth_floor2.style[domTransform]=parameterToTransform(this._fifth_floor2.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: 53px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._fifth_floor2__text.setAttribute('style',hs);
		this._fifth_floor2__text.innerHTML="FIFTH FLOOR";
		this._fifth_floor2.appendChild(this._fifth_floor2__text);
		me._fifth_floor2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fifth_floor2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fifth_floor2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fifth_floor.appendChild(this._fifth_floor2);
		this._fifth_floor1=document.createElement('div');
		this._fifth_floor1__img=document.createElement('img');
		this._fifth_floor1__img.className='ggskin ggskin_image';
		this._fifth_floor1__img.setAttribute('src',basePath + 'images/fifth_floor1.png');
		this._fifth_floor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fifth_floor1__img.className='ggskin ggskin_image';
		this._fifth_floor1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fifth_floor1__img);
		this._fifth_floor1.appendChild(this._fifth_floor1__img);
		this._fifth_floor1.ggId="Fifth Floor";
		this._fifth_floor1.ggLeft=-246;
		this._fifth_floor1.ggTop=-352;
		this._fifth_floor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fifth_floor1.ggVisible=true;
		this._fifth_floor1.className='ggskin ggskin_image ';
		this._fifth_floor1.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -246px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		this._fifth_floor1.setAttribute('style',hs);
		this._fifth_floor1.style[domTransform + 'Origin']='100% 100%';
		me._fifth_floor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fifth_floor1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fifth_floor1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fifth_floor.appendChild(this._fifth_floor1);
		this._fifth_floor0=document.createElement('div');
		this._fifth_floor0__img=document.createElement('img');
		this._fifth_floor0__img.className='ggskin ggskin_image';
		this._fifth_floor0__img.setAttribute('src',basePath + 'images/fifth_floor0.png');
		this._fifth_floor0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fifth_floor0__img.className='ggskin ggskin_image';
		this._fifth_floor0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fifth_floor0__img);
		this._fifth_floor0.appendChild(this._fifth_floor0__img);
		this._fifth_floor0.ggId="Fifth Floor";
		this._fifth_floor0.ggLeft=-246;
		this._fifth_floor0.ggTop=-352;
		this._fifth_floor0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fifth_floor0.ggVisible=true;
		this._fifth_floor0.className='ggskin ggskin_image ';
		this._fifth_floor0.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -246px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		this._fifth_floor0.setAttribute('style',hs);
		this._fifth_floor0.style[domTransform + 'Origin']='100% 100%';
		me._fifth_floor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fifth_floor0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fifth_floor0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fifth_floor.appendChild(this._fifth_floor0);
		this._marker_node59=document.createElement('div');
		this._marker_node59.ggMarkerNodeId='{node58}';
		nodeMarker.push(this._marker_node59);
		this._marker_node59.ggId="marker_node59";
		this._marker_node59.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node59.ggVisible=true;
		this._marker_node59.className='ggskin ggskin_mark ';
		this._marker_node59.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 137px;';
		hs+='position : absolute;';
		hs+='top : 108px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node59.setAttribute('style',hs);
		this._marker_node59.style[domTransform + 'Origin']='50% 50%';
		me._marker_node59.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node59.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node59.onclick=function () {
			me.player.openNext('{node58}');
		}
		this._marker_node59.onmouseover=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility=(Number(me._marker_title10.style.opacity)>0||!me._marker_title10.style.opacity)?'inherit':'hidden';
			me._marker_title10.ggVisible=true;
		}
		this._marker_node59.onmouseout=function () {
			me._marker_title10.style[domTransition]='none';
			me._marker_title10.style.visibility='hidden';
			me._marker_title10.ggVisible=false;
		}
		this._marker_node59.ggUpdateConditionNodeChange=function () {
				me._marker_node59__normal.ggNodeChangeMain();
				me._marker_node59__active.ggNodeChangeMain();
		}
		this._marker_node59.ggUpdatePosition=function () {
		}
		this._marker_node59.ggNodeChange=function () {
			me._marker_node59.ggUpdateConditionNodeChange();
		}
		this._marker_title10=document.createElement('div');
		this._marker_title10__text=document.createElement('div');
		this._marker_title10.className='ggskin ggskin_textdiv';
		this._marker_title10.ggTextDiv=this._marker_title10__text;
		this._marker_title10.ggId="marker_title";
		this._marker_title10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title10.ggVisible=false;
		this._marker_title10.className='ggskin ggskin_text ';
		this._marker_title10.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title10.setAttribute('style',hs);
		this._marker_title10.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title10__text.setAttribute('style',hs);
		this._marker_title10.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title10.ggUpdateText();
		this._marker_title10.appendChild(this._marker_title10__text);
		me._marker_title10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title10.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node59.appendChild(this._marker_title10);
		this._fifth_floor.appendChild(this._marker_node59);
		this._plans.appendChild(this._fifth_floor);
		this._fourth_floor=document.createElement('div');
		this._fourth_floor__img=document.createElement('img');
		this._fourth_floor__img.className='ggskin ggskin_image';
		this._fourth_floor__img.setAttribute('src',basePath + 'images/fourth_floor.png');
		this._fourth_floor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fourth_floor__img.className='ggskin ggskin_image';
		this._fourth_floor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fourth_floor__img);
		this._fourth_floor.appendChild(this._fourth_floor__img);
		this._fourth_floor.ggId="Fourth Floor";
		this._fourth_floor.ggLeft=-213;
		this._fourth_floor.ggTop=-313;
		this._fourth_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fourth_floor.ggVisible=false;
		this._fourth_floor.className='ggskin ggskin_image ';
		this._fourth_floor.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -213px;';
		hs+='position : absolute;';
		hs+='top : -313px;';
		hs+='visibility : hidden;';
		hs+='width : 209px;';
		this._fourth_floor.setAttribute('style',hs);
		this._fourth_floor.style[domTransform + 'Origin']='100% 100%';
		me._fourth_floor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fourth_floor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fourth_floor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fourth=document.createElement('div');
		this._fourth__text=document.createElement('div');
		this._fourth.className='ggskin ggskin_textdiv';
		this._fourth.ggTextDiv=this._fourth__text;
		this._fourth.ggId="FOURTH";
		this._fourth.ggLeft=-204;
		this._fourth.ggTop=-57;
		this._fourth.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._fourth.ggVisible=false;
		this._fourth.className='ggskin ggskin_text ';
		this._fourth.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -204px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 132px;';
		this._fourth.setAttribute('style',hs);
		this._fourth.style[domTransform + 'Origin']='50% 50%';
		this._fourth.style[domTransform]=parameterToTransform(this._fourth.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: 53px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._fourth__text.setAttribute('style',hs);
		this._fourth__text.innerHTML="FOURTH FLOOR";
		this._fourth.appendChild(this._fourth__text);
		me._fourth.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fourth.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fourth.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fourth_floor.appendChild(this._fourth);
		this._fourth_floor1=document.createElement('div');
		this._fourth_floor1__img=document.createElement('img');
		this._fourth_floor1__img.className='ggskin ggskin_image';
		this._fourth_floor1__img.setAttribute('src',basePath + 'images/fourth_floor1.png');
		this._fourth_floor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fourth_floor1__img.className='ggskin ggskin_image';
		this._fourth_floor1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fourth_floor1__img);
		this._fourth_floor1.appendChild(this._fourth_floor1__img);
		this._fourth_floor1.ggId="Fourth Floor";
		this._fourth_floor1.ggLeft=-247;
		this._fourth_floor1.ggTop=-352;
		this._fourth_floor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fourth_floor1.ggVisible=true;
		this._fourth_floor1.className='ggskin ggskin_image ';
		this._fourth_floor1.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -247px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		this._fourth_floor1.setAttribute('style',hs);
		this._fourth_floor1.style[domTransform + 'Origin']='50% 50%';
		me._fourth_floor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fourth_floor1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fourth_floor1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fourth_floor.appendChild(this._fourth_floor1);
		this._fourth_floor0=document.createElement('div');
		this._fourth_floor0__img=document.createElement('img');
		this._fourth_floor0__img.className='ggskin ggskin_image';
		this._fourth_floor0__img.setAttribute('src',basePath + 'images/fourth_floor0.png');
		this._fourth_floor0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fourth_floor0__img.className='ggskin ggskin_image';
		this._fourth_floor0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fourth_floor0__img);
		this._fourth_floor0.appendChild(this._fourth_floor0__img);
		this._fourth_floor0.ggId="Fourth Floor";
		this._fourth_floor0.ggLeft=-247;
		this._fourth_floor0.ggTop=-352;
		this._fourth_floor0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fourth_floor0.ggVisible=true;
		this._fourth_floor0.className='ggskin ggskin_image ';
		this._fourth_floor0.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -247px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		this._fourth_floor0.setAttribute('style',hs);
		this._fourth_floor0.style[domTransform + 'Origin']='50% 50%';
		me._fourth_floor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fourth_floor0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fourth_floor0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._fourth_floor.appendChild(this._fourth_floor0);
		this._position_11=document.createElement('div');
		this._position_11.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._position_11);
		this._position_11.ggId="Position 11";
		this._position_11.ggLeft=-197;
		this._position_11.ggTop=-233;
		this._position_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_11.ggVisible=true;
		this._position_11.className='ggskin ggskin_mark ';
		this._position_11.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -197px;';
		hs+='position : absolute;';
		hs+='top : -233px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_11.setAttribute('style',hs);
		this._position_11.style[domTransform + 'Origin']='50% 50%';
		me._position_11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_11.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_11.onclick=function () {
			me.player.openNext('{node5}');
		}
		this._position_11.onmouseover=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility=(Number(me._marker_title9.style.opacity)>0||!me._marker_title9.style.opacity)?'inherit':'hidden';
			me._marker_title9.ggVisible=true;
		}
		this._position_11.onmouseout=function () {
			me._marker_title9.style[domTransition]='none';
			me._marker_title9.style.visibility='hidden';
			me._marker_title9.ggVisible=false;
		}
		this._position_11.ggUpdateConditionNodeChange=function () {
				me._position_11__normal.ggNodeChangeMain();
				me._position_11__active.ggNodeChangeMain();
		}
		this._position_11.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_11.ggNodeChange=function () {
			me._position_11.ggUpdateConditionNodeChange();
		}
		this._marker_title9=document.createElement('div');
		this._marker_title9__text=document.createElement('div');
		this._marker_title9.className='ggskin ggskin_textdiv';
		this._marker_title9.ggTextDiv=this._marker_title9__text;
		this._marker_title9.ggId="marker_title";
		this._marker_title9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title9.ggVisible=false;
		this._marker_title9.className='ggskin ggskin_text ';
		this._marker_title9.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._marker_title9.setAttribute('style',hs);
		this._marker_title9.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title9__text.setAttribute('style',hs);
		this._marker_title9.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title9.ggUpdateText();
		this._marker_title9.appendChild(this._marker_title9__text);
		me._marker_title9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title9.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_11.appendChild(this._marker_title9);
		this._fourth_floor.appendChild(this._position_11);
		this._position_12=document.createElement('div');
		this._position_12.ggMarkerNodeId='{node11}';
		nodeMarker.push(this._position_12);
		this._position_12.ggId="Position 12";
		this._position_12.ggLeft=-196;
		this._position_12.ggTop=-140;
		this._position_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_12.ggVisible=true;
		this._position_12.className='ggskin ggskin_mark ';
		this._position_12.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -196px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_12.setAttribute('style',hs);
		this._position_12.style[domTransform + 'Origin']='50% 50%';
		me._position_12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_12.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_12.onclick=function () {
			me.player.openNext('{node11}');
		}
		this._position_12.onmouseover=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility=(Number(me._marker_title8.style.opacity)>0||!me._marker_title8.style.opacity)?'inherit':'hidden';
			me._marker_title8.ggVisible=true;
		}
		this._position_12.onmouseout=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='hidden';
			me._marker_title8.ggVisible=false;
		}
		this._position_12.ggUpdateConditionNodeChange=function () {
				me._position_12__normal.ggNodeChangeMain();
				me._position_12__active.ggNodeChangeMain();
		}
		this._position_12.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_12.ggNodeChange=function () {
			me._position_12.ggUpdateConditionNodeChange();
		}
		this._marker_title8=document.createElement('div');
		this._marker_title8__text=document.createElement('div');
		this._marker_title8.className='ggskin ggskin_textdiv';
		this._marker_title8.ggTextDiv=this._marker_title8__text;
		this._marker_title8.ggId="marker_title";
		this._marker_title8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title8.ggVisible=false;
		this._marker_title8.className='ggskin ggskin_text ';
		this._marker_title8.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._marker_title8.setAttribute('style',hs);
		this._marker_title8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title8__text.setAttribute('style',hs);
		this._marker_title8.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title8.ggUpdateText();
		this._marker_title8.appendChild(this._marker_title8__text);
		me._marker_title8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title8.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_12.appendChild(this._marker_title8);
		this._fourth_floor.appendChild(this._position_12);
		this._marker_node31=document.createElement('div');
		this._marker_node31.ggMarkerNodeId='{node31}';
		nodeMarker.push(this._marker_node31);
		this._marker_node31.ggId="marker_node31";
		this._marker_node31.ggLeft=-89;
		this._marker_node31.ggTop=-233;
		this._marker_node31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node31.ggVisible=true;
		this._marker_node31.className='ggskin ggskin_mark ';
		this._marker_node31.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -89px;';
		hs+='position : absolute;';
		hs+='top : -233px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node31.setAttribute('style',hs);
		this._marker_node31.style[domTransform + 'Origin']='50% 50%';
		me._marker_node31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node31.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node31.onclick=function () {
			me.player.openNext('{node31}');
		}
		this._marker_node31.onmouseover=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility=(Number(me._marker_title7.style.opacity)>0||!me._marker_title7.style.opacity)?'inherit':'hidden';
			me._marker_title7.ggVisible=true;
		}
		this._marker_node31.onmouseout=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='hidden';
			me._marker_title7.ggVisible=false;
		}
		this._marker_node31.ggUpdateConditionNodeChange=function () {
				me._marker_node31__normal.ggNodeChangeMain();
				me._marker_node31__active.ggNodeChangeMain();
		}
		this._marker_node31.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node31.ggNodeChange=function () {
			me._marker_node31.ggUpdateConditionNodeChange();
		}
		this._marker_title7=document.createElement('div');
		this._marker_title7__text=document.createElement('div');
		this._marker_title7.className='ggskin ggskin_textdiv';
		this._marker_title7.ggTextDiv=this._marker_title7__text;
		this._marker_title7.ggId="marker_title";
		this._marker_title7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title7.ggVisible=false;
		this._marker_title7.className='ggskin ggskin_text ';
		this._marker_title7.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title7.setAttribute('style',hs);
		this._marker_title7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title7__text.setAttribute('style',hs);
		this._marker_title7.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title7.ggUpdateText();
		this._marker_title7.appendChild(this._marker_title7__text);
		me._marker_title7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title7.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node31.appendChild(this._marker_title7);
		this._fourth_floor.appendChild(this._marker_node31);
		this._plans.appendChild(this._fourth_floor);
		this._third_floor=document.createElement('div');
		this._third_floor__img=document.createElement('img');
		this._third_floor__img.className='ggskin ggskin_image';
		this._third_floor__img.setAttribute('src',basePath + 'images/third_floor.png');
		this._third_floor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._third_floor__img.className='ggskin ggskin_image';
		this._third_floor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._third_floor__img);
		this._third_floor.appendChild(this._third_floor__img);
		this._third_floor.ggId="Third Floor";
		this._third_floor.ggLeft=-207;
		this._third_floor.ggTop=-314;
		this._third_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._third_floor.ggVisible=false;
		this._third_floor.className='ggskin ggskin_image ';
		this._third_floor.ggType='image';
		hs ='';
		hs+='height : 301px;';
		hs+='left : -207px;';
		hs+='position : absolute;';
		hs+='top : -314px;';
		hs+='visibility : hidden;';
		hs+='width : 202px;';
		this._third_floor.setAttribute('style',hs);
		this._third_floor.style[domTransform + 'Origin']='100% 100%';
		me._third_floor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._third_floor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._third_floor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._third=document.createElement('div');
		this._third__text=document.createElement('div');
		this._third.className='ggskin ggskin_textdiv';
		this._third.ggTextDiv=this._third__text;
		this._third.ggId="tHIRD";
		this._third.ggLeft=-203;
		this._third.ggTop=-57;
		this._third.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._third.ggVisible=false;
		this._third.className='ggskin ggskin_text ';
		this._third.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -203px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 132px;';
		this._third.setAttribute('style',hs);
		this._third.style[domTransform + 'Origin']='50% 50%';
		this._third.style[domTransform]=parameterToTransform(this._third.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: 53px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._third__text.setAttribute('style',hs);
		this._third__text.innerHTML="THIRD FLOOR";
		this._third.appendChild(this._third__text);
		me._third.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._third.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._third.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._third_floor.appendChild(this._third);
		this._third_floor1=document.createElement('div');
		this._third_floor1__img=document.createElement('img');
		this._third_floor1__img.className='ggskin ggskin_image';
		this._third_floor1__img.setAttribute('src',basePath + 'images/third_floor1.png');
		this._third_floor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._third_floor1__img.className='ggskin ggskin_image';
		this._third_floor1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._third_floor1__img);
		this._third_floor1.appendChild(this._third_floor1__img);
		this._third_floor1.ggId="Third Floor";
		this._third_floor1.ggLeft=-241;
		this._third_floor1.ggTop=-352;
		this._third_floor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._third_floor1.ggVisible=true;
		this._third_floor1.className='ggskin ggskin_image ';
		this._third_floor1.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -241px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		this._third_floor1.setAttribute('style',hs);
		this._third_floor1.style[domTransform + 'Origin']='50% 50%';
		me._third_floor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._third_floor1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._third_floor1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._third_floor.appendChild(this._third_floor1);
		this._third_floor0=document.createElement('div');
		this._third_floor0__img=document.createElement('img');
		this._third_floor0__img.className='ggskin ggskin_image';
		this._third_floor0__img.setAttribute('src',basePath + 'images/third_floor0.png');
		this._third_floor0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._third_floor0__img.className='ggskin ggskin_image';
		this._third_floor0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._third_floor0__img);
		this._third_floor0.appendChild(this._third_floor0__img);
		this._third_floor0.ggId="Third Floor";
		this._third_floor0.ggLeft=-241;
		this._third_floor0.ggTop=-352;
		this._third_floor0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._third_floor0.ggVisible=true;
		this._third_floor0.className='ggskin ggskin_image ';
		this._third_floor0.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -241px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		this._third_floor0.setAttribute('style',hs);
		this._third_floor0.style[domTransform + 'Origin']='50% 50%';
		me._third_floor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._third_floor0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._third_floor0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._third_floor.appendChild(this._third_floor0);
		this._marker_node46=document.createElement('div');
		this._marker_node46.ggMarkerNodeId='{node46}';
		nodeMarker.push(this._marker_node46);
		this._marker_node46.ggId="marker_node46";
		this._marker_node46.ggLeft=-200;
		this._marker_node46.ggTop=-234;
		this._marker_node46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node46.ggVisible=true;
		this._marker_node46.className='ggskin ggskin_mark ';
		this._marker_node46.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : -234px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node46.setAttribute('style',hs);
		this._marker_node46.style[domTransform + 'Origin']='50% 50%';
		me._marker_node46.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node46.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node46.onclick=function () {
			me.player.openNext('{node46}');
		}
		this._marker_node46.onmouseover=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility=(Number(me._marker_title6.style.opacity)>0||!me._marker_title6.style.opacity)?'inherit':'hidden';
			me._marker_title6.ggVisible=true;
		}
		this._marker_node46.onmouseout=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='hidden';
			me._marker_title6.ggVisible=false;
		}
		this._marker_node46.ggUpdateConditionNodeChange=function () {
				me._marker_node46__normal.ggNodeChangeMain();
				me._marker_node46__active.ggNodeChangeMain();
		}
		this._marker_node46.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node46.ggNodeChange=function () {
			me._marker_node46.ggUpdateConditionNodeChange();
		}
		this._marker_title6=document.createElement('div');
		this._marker_title6__text=document.createElement('div');
		this._marker_title6.className='ggskin ggskin_textdiv';
		this._marker_title6.ggTextDiv=this._marker_title6__text;
		this._marker_title6.ggId="marker_title";
		this._marker_title6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title6.ggVisible=false;
		this._marker_title6.className='ggskin ggskin_text ';
		this._marker_title6.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title6.setAttribute('style',hs);
		this._marker_title6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title6__text.setAttribute('style',hs);
		this._marker_title6.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title6.ggUpdateText();
		this._marker_title6.appendChild(this._marker_title6__text);
		me._marker_title6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title6.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node46.appendChild(this._marker_title6);
		this._third_floor.appendChild(this._marker_node46);
		this._marker_node54=document.createElement('div');
		this._marker_node54.ggMarkerNodeId='{node54}';
		nodeMarker.push(this._marker_node54);
		this._marker_node54.ggId="marker_node54";
		this._marker_node54.ggLeft=-162;
		this._marker_node54.ggTop=-235;
		this._marker_node54.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node54.ggVisible=true;
		this._marker_node54.className='ggskin ggskin_mark ';
		this._marker_node54.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -162px;';
		hs+='position : absolute;';
		hs+='top : -235px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node54.setAttribute('style',hs);
		this._marker_node54.style[domTransform + 'Origin']='50% 50%';
		me._marker_node54.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node54.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node54.onclick=function () {
			me.player.openNext('{node54}');
		}
		this._marker_node54.onmouseover=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility=(Number(me._marker_title5.style.opacity)>0||!me._marker_title5.style.opacity)?'inherit':'hidden';
			me._marker_title5.ggVisible=true;
		}
		this._marker_node54.onmouseout=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='hidden';
			me._marker_title5.ggVisible=false;
		}
		this._marker_node54.ggUpdateConditionNodeChange=function () {
				me._marker_node54__normal.ggNodeChangeMain();
				me._marker_node54__active.ggNodeChangeMain();
		}
		this._marker_node54.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node54.ggNodeChange=function () {
			me._marker_node54.ggUpdateConditionNodeChange();
		}
		this._marker_title5=document.createElement('div');
		this._marker_title5__text=document.createElement('div');
		this._marker_title5.className='ggskin ggskin_textdiv';
		this._marker_title5.ggTextDiv=this._marker_title5__text;
		this._marker_title5.ggId="marker_title";
		this._marker_title5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title5.ggVisible=false;
		this._marker_title5.className='ggskin ggskin_text ';
		this._marker_title5.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title5.setAttribute('style',hs);
		this._marker_title5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title5__text.setAttribute('style',hs);
		this._marker_title5.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title5.ggUpdateText();
		this._marker_title5.appendChild(this._marker_title5__text);
		me._marker_title5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title5.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node54.appendChild(this._marker_title5);
		this._third_floor.appendChild(this._marker_node54);
		this._marker_node56=document.createElement('div');
		this._marker_node56.ggMarkerNodeId='{node56}';
		nodeMarker.push(this._marker_node56);
		this._marker_node56.ggId="marker_node56";
		this._marker_node56.ggLeft=-196;
		this._marker_node56.ggTop=-137;
		this._marker_node56.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node56.ggVisible=true;
		this._marker_node56.className='ggskin ggskin_mark ';
		this._marker_node56.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -196px;';
		hs+='position : absolute;';
		hs+='top : -137px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node56.setAttribute('style',hs);
		this._marker_node56.style[domTransform + 'Origin']='50% 50%';
		me._marker_node56.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node56.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node56.onclick=function () {
			me.player.openNext('{node56}');
		}
		this._marker_node56.onmouseover=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility=(Number(me._marker_title4.style.opacity)>0||!me._marker_title4.style.opacity)?'inherit':'hidden';
			me._marker_title4.ggVisible=true;
		}
		this._marker_node56.onmouseout=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='hidden';
			me._marker_title4.ggVisible=false;
		}
		this._marker_node56.ggUpdateConditionNodeChange=function () {
				me._marker_node56__normal.ggNodeChangeMain();
				me._marker_node56__active.ggNodeChangeMain();
		}
		this._marker_node56.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node56.ggNodeChange=function () {
			me._marker_node56.ggUpdateConditionNodeChange();
		}
		this._marker_title4=document.createElement('div');
		this._marker_title4__text=document.createElement('div');
		this._marker_title4.className='ggskin ggskin_textdiv';
		this._marker_title4.ggTextDiv=this._marker_title4__text;
		this._marker_title4.ggId="marker_title";
		this._marker_title4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title4.ggVisible=false;
		this._marker_title4.className='ggskin ggskin_text ';
		this._marker_title4.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title4.setAttribute('style',hs);
		this._marker_title4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title4__text.setAttribute('style',hs);
		this._marker_title4.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title4.ggUpdateText();
		this._marker_title4.appendChild(this._marker_title4__text);
		me._marker_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title4.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node56.appendChild(this._marker_title4);
		this._third_floor.appendChild(this._marker_node56);
		this._plans.appendChild(this._third_floor);
		this._second_floor=document.createElement('div');
		this._second_floor__img=document.createElement('img');
		this._second_floor__img.className='ggskin ggskin_image';
		this._second_floor__img.setAttribute('src',basePath + 'images/second_floor.png');
		this._second_floor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._second_floor__img.className='ggskin ggskin_image';
		this._second_floor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._second_floor__img);
		this._second_floor.appendChild(this._second_floor__img);
		this._second_floor.ggId="Second Floor";
		this._second_floor.ggLeft=-211;
		this._second_floor.ggTop=-312;
		this._second_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor.ggVisible=false;
		this._second_floor.className='ggskin ggskin_image ';
		this._second_floor.ggType='image';
		hs ='';
		hs+='height : 299px;';
		hs+='left : -211px;';
		hs+='position : absolute;';
		hs+='top : -312px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		this._second_floor.setAttribute('style',hs);
		this._second_floor.style[domTransform + 'Origin']='100% 100%';
		me._second_floor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._second_floor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._second_floor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._scnd=document.createElement('div');
		this._scnd__text=document.createElement('div');
		this._scnd.className='ggskin ggskin_textdiv';
		this._scnd.ggTextDiv=this._scnd__text;
		this._scnd.ggId="scnd";
		this._scnd.ggLeft=-207;
		this._scnd.ggTop=-57;
		this._scnd.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._scnd.ggVisible=false;
		this._scnd.className='ggskin ggskin_text ';
		this._scnd.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -207px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 132px;';
		this._scnd.setAttribute('style',hs);
		this._scnd.style[domTransform + 'Origin']='50% 50%';
		this._scnd.style[domTransform]=parameterToTransform(this._scnd.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: 53px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._scnd__text.setAttribute('style',hs);
		this._scnd__text.innerHTML="SECOND FLOOR";
		this._scnd.appendChild(this._scnd__text);
		me._scnd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._scnd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._scnd.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._second_floor.appendChild(this._scnd);
		this._second_floor1=document.createElement('div');
		this._second_floor1__img=document.createElement('img');
		this._second_floor1__img.className='ggskin ggskin_image';
		this._second_floor1__img.setAttribute('src',basePath + 'images/second_floor1.png');
		this._second_floor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._second_floor1__img.className='ggskin ggskin_image';
		this._second_floor1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._second_floor1__img);
		this._second_floor1.appendChild(this._second_floor1__img);
		this._second_floor1.ggId="Second Floor";
		this._second_floor1.ggLeft=-248;
		this._second_floor1.ggTop=-352;
		this._second_floor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor1.ggVisible=true;
		this._second_floor1.className='ggskin ggskin_image ';
		this._second_floor1.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -248px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		this._second_floor1.setAttribute('style',hs);
		this._second_floor1.style[domTransform + 'Origin']='50% 50%';
		me._second_floor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._second_floor1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._second_floor1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._second_floor.appendChild(this._second_floor1);
		this._second_floor0=document.createElement('div');
		this._second_floor0__img=document.createElement('img');
		this._second_floor0__img.className='ggskin ggskin_image';
		this._second_floor0__img.setAttribute('src',basePath + 'images/second_floor0.png');
		this._second_floor0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._second_floor0__img.className='ggskin ggskin_image';
		this._second_floor0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._second_floor0__img);
		this._second_floor0.appendChild(this._second_floor0__img);
		this._second_floor0.ggId="Second Floor";
		this._second_floor0.ggLeft=-248;
		this._second_floor0.ggTop=-352;
		this._second_floor0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._second_floor0.ggVisible=true;
		this._second_floor0.className='ggskin ggskin_image ';
		this._second_floor0.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -248px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		this._second_floor0.setAttribute('style',hs);
		this._second_floor0.style[domTransform + 'Origin']='50% 50%';
		me._second_floor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._second_floor0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._second_floor0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._second_floor.appendChild(this._second_floor0);
		this._position_6=document.createElement('div');
		this._position_6.ggMarkerNodeId='{node13}';
		nodeMarker.push(this._position_6);
		this._position_6.ggId="Position 6";
		this._position_6.ggLeft=-201;
		this._position_6.ggTop=-235;
		this._position_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_6.ggVisible=true;
		this._position_6.className='ggskin ggskin_mark ';
		this._position_6.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -201px;';
		hs+='position : absolute;';
		hs+='top : -235px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_6.setAttribute('style',hs);
		this._position_6.style[domTransform + 'Origin']='50% 50%';
		me._position_6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_6.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_6.onclick=function () {
			me.player.openNext('{node13}');
		}
		this._position_6.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility=(Number(me._marker_title3.style.opacity)>0||!me._marker_title3.style.opacity)?'inherit':'hidden';
			me._marker_title3.ggVisible=true;
		}
		this._position_6.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._position_6.ggUpdateConditionNodeChange=function () {
				me._position_6__normal.ggNodeChangeMain();
				me._position_6__active.ggNodeChangeMain();
		}
		this._position_6.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_6.ggNodeChange=function () {
			me._position_6.ggUpdateConditionNodeChange();
		}
		this._position_6_=document.createElement('div');
		this._position_6___text=document.createElement('div');
		this._position_6_.className='ggskin ggskin_textdiv';
		this._position_6_.ggTextDiv=this._position_6___text;
		this._position_6_.ggId="Position 6_";
		this._position_6_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_6_.ggVisible=false;
		this._position_6_.className='ggskin ggskin_text ';
		this._position_6_.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._position_6_.setAttribute('style',hs);
		this._position_6_.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._position_6___text.setAttribute('style',hs);
		this._position_6_.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._position_6_.ggUpdateText();
		this._position_6_.appendChild(this._position_6___text);
		me._position_6_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._position_6_.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._position_6_.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_6.appendChild(this._position_6_);
		this._second_floor.appendChild(this._position_6);
		this._position_7=document.createElement('div');
		this._position_7.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._position_7);
		this._position_7.ggId="Position 7";
		this._position_7.ggLeft=-91;
		this._position_7.ggTop=-235;
		this._position_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_7.ggVisible=true;
		this._position_7.className='ggskin ggskin_mark ';
		this._position_7.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -91px;';
		hs+='position : absolute;';
		hs+='top : -235px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_7.setAttribute('style',hs);
		this._position_7.style[domTransform + 'Origin']='50% 50%';
		me._position_7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_7.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_7.onclick=function () {
			me.player.openNext('{node3}');
		}
		this._position_7.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility=(Number(me._marker_title3.style.opacity)>0||!me._marker_title3.style.opacity)?'inherit':'hidden';
			me._marker_title3.ggVisible=true;
		}
		this._position_7.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._position_7.ggUpdateConditionNodeChange=function () {
				me._position_7__normal.ggNodeChangeMain();
				me._position_7__active.ggNodeChangeMain();
		}
		this._position_7.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_7.ggNodeChange=function () {
			me._position_7.ggUpdateConditionNodeChange();
		}
		this._marker_title3=document.createElement('div');
		this._marker_title3__text=document.createElement('div');
		this._marker_title3.className='ggskin ggskin_textdiv';
		this._marker_title3.ggTextDiv=this._marker_title3__text;
		this._marker_title3.ggId="marker_title";
		this._marker_title3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title3.ggVisible=false;
		this._marker_title3.className='ggskin ggskin_text ';
		this._marker_title3.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._marker_title3.setAttribute('style',hs);
		this._marker_title3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title3__text.setAttribute('style',hs);
		this._marker_title3.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title3.ggUpdateText();
		this._marker_title3.appendChild(this._marker_title3__text);
		me._marker_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title3.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_7.appendChild(this._marker_title3);
		this._second_floor.appendChild(this._position_7);
		this._marker_node49=document.createElement('div');
		this._marker_node49.ggMarkerNodeId='{node49}';
		nodeMarker.push(this._marker_node49);
		this._marker_node49.ggId="marker_node49";
		this._marker_node49.ggLeft=-206;
		this._marker_node49.ggTop=-137;
		this._marker_node49.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node49.ggVisible=true;
		this._marker_node49.className='ggskin ggskin_mark ';
		this._marker_node49.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -206px;';
		hs+='position : absolute;';
		hs+='top : -137px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node49.setAttribute('style',hs);
		this._marker_node49.style[domTransform + 'Origin']='50% 50%';
		me._marker_node49.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node49.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node49.onclick=function () {
			me.player.openNext('{node49}');
		}
		this._marker_node49.onmouseover=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility=(Number(me._marker_title2.style.opacity)>0||!me._marker_title2.style.opacity)?'inherit':'hidden';
			me._marker_title2.ggVisible=true;
		}
		this._marker_node49.onmouseout=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='hidden';
			me._marker_title2.ggVisible=false;
		}
		this._marker_node49.ggUpdateConditionNodeChange=function () {
				me._marker_node49__normal.ggNodeChangeMain();
				me._marker_node49__active.ggNodeChangeMain();
		}
		this._marker_node49.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node49.ggNodeChange=function () {
			me._marker_node49.ggUpdateConditionNodeChange();
		}
		this._marker_title2=document.createElement('div');
		this._marker_title2__text=document.createElement('div');
		this._marker_title2.className='ggskin ggskin_textdiv';
		this._marker_title2.ggTextDiv=this._marker_title2__text;
		this._marker_title2.ggId="marker_title";
		this._marker_title2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title2.ggVisible=false;
		this._marker_title2.className='ggskin ggskin_text ';
		this._marker_title2.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title2.setAttribute('style',hs);
		this._marker_title2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title2__text.setAttribute('style',hs);
		this._marker_title2.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title2.ggUpdateText();
		this._marker_title2.appendChild(this._marker_title2__text);
		me._marker_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node49.appendChild(this._marker_title2);
		this._second_floor.appendChild(this._marker_node49);
		this._marker_node57=document.createElement('div');
		this._marker_node57.ggMarkerNodeId='{node57}';
		nodeMarker.push(this._marker_node57);
		this._marker_node57.ggId="marker_node57";
		this._marker_node57.ggLeft=-158;
		this._marker_node57.ggTop=-138;
		this._marker_node57.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node57.ggVisible=true;
		this._marker_node57.className='ggskin ggskin_mark ';
		this._marker_node57.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -158px;';
		hs+='position : absolute;';
		hs+='top : -138px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node57.setAttribute('style',hs);
		this._marker_node57.style[domTransform + 'Origin']='50% 50%';
		me._marker_node57.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node57.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node57.onclick=function () {
			me.player.openNext('{node57}');
		}
		this._marker_node57.onmouseover=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility=(Number(me._marker_title1.style.opacity)>0||!me._marker_title1.style.opacity)?'inherit':'hidden';
			me._marker_title1.ggVisible=true;
		}
		this._marker_node57.onmouseout=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='hidden';
			me._marker_title1.ggVisible=false;
		}
		this._marker_node57.ggUpdateConditionNodeChange=function () {
				me._marker_node57__normal.ggNodeChangeMain();
				me._marker_node57__active.ggNodeChangeMain();
		}
		this._marker_node57.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node57.ggNodeChange=function () {
			me._marker_node57.ggUpdateConditionNodeChange();
		}
		this._marker_title1=document.createElement('div');
		this._marker_title1__text=document.createElement('div');
		this._marker_title1.className='ggskin ggskin_textdiv';
		this._marker_title1.ggTextDiv=this._marker_title1__text;
		this._marker_title1.ggId="marker_title";
		this._marker_title1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title1.ggVisible=false;
		this._marker_title1.className='ggskin ggskin_text ';
		this._marker_title1.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title1.setAttribute('style',hs);
		this._marker_title1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title1__text.setAttribute('style',hs);
		this._marker_title1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title1.ggUpdateText();
		this._marker_title1.appendChild(this._marker_title1__text);
		me._marker_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node57.appendChild(this._marker_title1);
		this._second_floor.appendChild(this._marker_node57);
		this._plans.appendChild(this._second_floor);
		this._ground_floor=document.createElement('div');
		this._ground_floor__img=document.createElement('img');
		this._ground_floor__img.className='ggskin ggskin_image';
		this._ground_floor__img.setAttribute('src',basePath + 'images/ground_floor.png');
		this._ground_floor__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ground_floor__img.className='ggskin ggskin_image';
		this._ground_floor__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ground_floor__img);
		this._ground_floor.appendChild(this._ground_floor__img);
		this._ground_floor.ggId="Ground Floor";
		this._ground_floor.ggLeft=-210;
		this._ground_floor.ggTop=-317;
		this._ground_floor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ground_floor.ggVisible=true;
		this._ground_floor.className='ggskin ggskin_image ';
		this._ground_floor.ggType='image';
		hs ='';
		hs+='height : 304px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -317px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		this._ground_floor.setAttribute('style',hs);
		this._ground_floor.style[domTransform + 'Origin']='100% 100%';
		me._ground_floor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ground_floor.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ground_floor.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._grnd=document.createElement('div');
		this._grnd__text=document.createElement('div');
		this._grnd.className='ggskin ggskin_textdiv';
		this._grnd.ggTextDiv=this._grnd__text;
		this._grnd.ggId="Grnd";
		this._grnd.ggLeft=-211;
		this._grnd.ggTop=-57;
		this._grnd.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._grnd.ggVisible=false;
		this._grnd.className='ggskin ggskin_text ';
		this._grnd.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -211px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : hidden;';
		hs+='width : 132px;';
		this._grnd.setAttribute('style',hs);
		this._grnd.style[domTransform + 'Origin']='50% 50%';
		this._grnd.style[domTransform]=parameterToTransform(this._grnd.ggParameter);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 132px;';
		hs+='height: 53px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._grnd__text.setAttribute('style',hs);
		this._grnd__text.innerHTML="GROUND FLOOR";
		this._grnd.appendChild(this._grnd__text);
		me._grnd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._grnd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._grnd.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._ground_floor.appendChild(this._grnd);
		this._ground_floor1=document.createElement('div');
		this._ground_floor1__img=document.createElement('img');
		this._ground_floor1__img.className='ggskin ggskin_image';
		this._ground_floor1__img.setAttribute('src',basePath + 'images/ground_floor1.png');
		this._ground_floor1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ground_floor1__img.className='ggskin ggskin_image';
		this._ground_floor1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ground_floor1__img);
		this._ground_floor1.appendChild(this._ground_floor1__img);
		this._ground_floor1.ggId="Ground Floor";
		this._ground_floor1.ggLeft=-249;
		this._ground_floor1.ggTop=-352;
		this._ground_floor1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ground_floor1.ggVisible=true;
		this._ground_floor1.className='ggskin ggskin_image ';
		this._ground_floor1.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -249px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		this._ground_floor1.setAttribute('style',hs);
		this._ground_floor1.style[domTransform + 'Origin']='50% 50%';
		me._ground_floor1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ground_floor1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ground_floor1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._ground_floor.appendChild(this._ground_floor1);
		this._ground_floor0=document.createElement('div');
		this._ground_floor0__img=document.createElement('img');
		this._ground_floor0__img.className='ggskin ggskin_image';
		this._ground_floor0__img.setAttribute('src',basePath + 'images/ground_floor0.png');
		this._ground_floor0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ground_floor0__img.className='ggskin ggskin_image';
		this._ground_floor0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ground_floor0__img);
		this._ground_floor0.appendChild(this._ground_floor0__img);
		this._ground_floor0.ggId="Ground Floor";
		this._ground_floor0.ggLeft=-249;
		this._ground_floor0.ggTop=-352;
		this._ground_floor0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ground_floor0.ggVisible=true;
		this._ground_floor0.className='ggskin ggskin_image ';
		this._ground_floor0.ggType='image';
		hs ='';
		hs+='height : 339px;';
		hs+='left : -249px;';
		hs+='position : absolute;';
		hs+='top : -352px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		this._ground_floor0.setAttribute('style',hs);
		this._ground_floor0.style[domTransform + 'Origin']='50% 50%';
		me._ground_floor0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ground_floor0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ground_floor0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._ground_floor.appendChild(this._ground_floor0);
		this._position_5=document.createElement('div');
		this._position_5.ggMarkerNodeId='{node12}';
		nodeMarker.push(this._position_5);
		this._position_5.ggId="position 5";
		this._position_5.ggLeft=-209;
		this._position_5.ggTop=-136;
		this._position_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_5.ggVisible=true;
		this._position_5.className='ggskin ggskin_mark ';
		this._position_5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -209px;';
		hs+='position : absolute;';
		hs+='top : -136px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_5.setAttribute('style',hs);
		this._position_5.style[domTransform + 'Origin']='50% 50%';
		me._position_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_5.onclick=function () {
			me.player.openNext('{node12}');
		}
		this._position_5.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._position_5.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._position_5.ggUpdateConditionNodeChange=function () {
				me._position_5__normal.ggNodeChangeMain();
				me._position_5__active.ggNodeChangeMain();
		}
		this._position_5.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_5.ggNodeChange=function () {
			me._position_5.ggUpdateConditionNodeChange();
		}
		this._pos5=document.createElement('div');
		this._pos5__text=document.createElement('div');
		this._pos5.className='ggskin ggskin_textdiv';
		this._pos5.ggTextDiv=this._pos5__text;
		this._pos5.ggId="pos5";
		this._pos5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pos5.ggVisible=false;
		this._pos5.className='ggskin ggskin_text ';
		this._pos5.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._pos5.setAttribute('style',hs);
		this._pos5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._pos5__text.setAttribute('style',hs);
		this._pos5.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pos5.ggUpdateText();
		this._pos5.appendChild(this._pos5__text);
		me._pos5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pos5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pos5.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_5.appendChild(this._pos5);
		this._ground_floor.appendChild(this._position_5);
		this._position_4=document.createElement('div');
		this._position_4.ggMarkerNodeId='{node4}';
		nodeMarker.push(this._position_4);
		this._position_4.ggId="position 4";
		this._position_4.ggLeft=-94;
		this._position_4.ggTop=-137;
		this._position_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_4.ggVisible=true;
		this._position_4.className='ggskin ggskin_mark ';
		this._position_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -94px;';
		hs+='position : absolute;';
		hs+='top : -137px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_4.setAttribute('style',hs);
		this._position_4.style[domTransform + 'Origin']='50% 50%';
		me._position_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_4.onclick=function () {
			me.player.openNext('{node4}');
		}
		this._position_4.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._position_4.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._position_4.ggUpdateConditionNodeChange=function () {
				me._position_4__normal.ggNodeChangeMain();
				me._position_4__active.ggNodeChangeMain();
		}
		this._position_4.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_4.ggNodeChange=function () {
			me._position_4.ggUpdateConditionNodeChange();
		}
		this._pos4=document.createElement('div');
		this._pos4__text=document.createElement('div');
		this._pos4.className='ggskin ggskin_textdiv';
		this._pos4.ggTextDiv=this._pos4__text;
		this._pos4.ggId="pos4";
		this._pos4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pos4.ggVisible=false;
		this._pos4.className='ggskin ggskin_text ';
		this._pos4.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._pos4.setAttribute('style',hs);
		this._pos4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._pos4__text.setAttribute('style',hs);
		this._pos4.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pos4.ggUpdateText();
		this._pos4.appendChild(this._pos4__text);
		me._pos4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pos4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pos4.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_4.appendChild(this._pos4);
		this._ground_floor.appendChild(this._position_4);
		this._position_3=document.createElement('div');
		this._position_3.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._position_3);
		this._position_3.ggId="position 3";
		this._position_3.ggLeft=-94;
		this._position_3.ggTop=-234;
		this._position_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_3.ggVisible=true;
		this._position_3.className='ggskin ggskin_mark ';
		this._position_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -94px;';
		hs+='position : absolute;';
		hs+='top : -234px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_3.setAttribute('style',hs);
		this._position_3.style[domTransform + 'Origin']='50% 50%';
		me._position_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_3.onclick=function () {
			me.player.openNext('{node9}');
		}
		this._position_3.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._position_3.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._position_3.ggUpdateConditionNodeChange=function () {
				me._position_3__normal.ggNodeChangeMain();
				me._position_3__active.ggNodeChangeMain();
		}
		this._position_3.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_3.ggNodeChange=function () {
			me._position_3.ggUpdateConditionNodeChange();
		}
		this._pos3=document.createElement('div');
		this._pos3__text=document.createElement('div');
		this._pos3.className='ggskin ggskin_textdiv';
		this._pos3.ggTextDiv=this._pos3__text;
		this._pos3.ggId="pos3";
		this._pos3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pos3.ggVisible=false;
		this._pos3.className='ggskin ggskin_text ';
		this._pos3.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._pos3.setAttribute('style',hs);
		this._pos3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._pos3__text.setAttribute('style',hs);
		this._pos3.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pos3.ggUpdateText();
		this._pos3.appendChild(this._pos3__text);
		me._pos3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pos3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pos3.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_3.appendChild(this._pos3);
		this._ground_floor.appendChild(this._position_3);
		this._position_2=document.createElement('div');
		this._position_2.ggMarkerNodeId='{node10}';
		nodeMarker.push(this._position_2);
		this._position_2.ggId="position 2";
		this._position_2.ggLeft=-205;
		this._position_2.ggTop=-235;
		this._position_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._position_2.ggVisible=true;
		this._position_2.className='ggskin ggskin_mark ';
		this._position_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -205px;';
		hs+='position : absolute;';
		hs+='top : -235px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._position_2.setAttribute('style',hs);
		this._position_2.style[domTransform + 'Origin']='50% 50%';
		me._position_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._position_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._position_2.onclick=function () {
			me.player.openNext('{node10}');
		}
		this._position_2.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._position_2.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._position_2.ggUpdateConditionNodeChange=function () {
				me._position_2__normal.ggNodeChangeMain();
				me._position_2__active.ggNodeChangeMain();
		}
		this._position_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._position_2.ggNodeChange=function () {
			me._position_2.ggUpdateConditionNodeChange();
		}
		this._pos2=document.createElement('div');
		this._pos2__text=document.createElement('div');
		this._pos2.className='ggskin ggskin_textdiv';
		this._pos2.ggTextDiv=this._pos2__text;
		this._pos2.ggId="pos2";
		this._pos2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pos2.ggVisible=false;
		this._pos2.className='ggskin ggskin_text ';
		this._pos2.ggType='text';
		hs ='';
		hs+='height : 53px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 172px;';
		this._pos2.setAttribute('style',hs);
		this._pos2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._pos2__text.setAttribute('style',hs);
		this._pos2.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pos2.ggUpdateText();
		this._pos2.appendChild(this._pos2__text);
		me._pos2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pos2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pos2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((176-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._position_2.appendChild(this._pos2);
		this._ground_floor.appendChild(this._position_2);
		this._marker_node55=document.createElement('div');
		this._marker_node55.ggMarkerNodeId='{node55}';
		nodeMarker.push(this._marker_node55);
		this._marker_node55.ggId="marker_node55";
		this._marker_node55.ggLeft=-240;
		this._marker_node55.ggTop=-195;
		this._marker_node55.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node55.ggVisible=true;
		this._marker_node55.className='ggskin ggskin_mark ';
		this._marker_node55.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -195px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_node55.setAttribute('style',hs);
		this._marker_node55.style[domTransform + 'Origin']='50% 50%';
		me._marker_node55.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_node55.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_node55.onclick=function () {
			me.player.openNext('{node55}');
		}
		this._marker_node55.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node55.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_node55.ggUpdateConditionNodeChange=function () {
				me._marker_node55__normal.ggNodeChangeMain();
				me._marker_node55__active.ggNodeChangeMain();
		}
		this._marker_node55.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._marker_node55.ggNodeChange=function () {
			me._marker_node55.ggUpdateConditionNodeChange();
		}
		this._marker_title0=document.createElement('div');
		this._marker_title0__text=document.createElement('div');
		this._marker_title0.className='ggskin ggskin_textdiv';
		this._marker_title0.ggTextDiv=this._marker_title0__text;
		this._marker_title0.ggId="marker_title";
		this._marker_title0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title0.ggVisible=false;
		this._marker_title0.className='ggskin ggskin_text ';
		this._marker_title0.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title0.setAttribute('style',hs);
		this._marker_title0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title0__text.setAttribute('style',hs);
		this._marker_title0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title0.ggUpdateText();
		this._marker_title0.appendChild(this._marker_title0__text);
		me._marker_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_node55.appendChild(this._marker_title0);
		this._ground_floor.appendChild(this._marker_node55);
		this._plans.appendChild(this._ground_floor);
		this._buttons=document.createElement('div');
		this._buttons.ggId="buttons";
		this._buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttons.ggVisible=true;
		this._buttons.className='ggskin ggskin_container ';
		this._buttons.ggType='container';
		hs ='';
		hs+='height : 321px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		this._buttons.setAttribute('style',hs);
		this._buttons.style[domTransform + 'Origin']='50% 50%';
		me._buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._buttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._buttons.ggUpdatePosition=function () {
		}
		this._button_1_1=document.createElement('div');
		this._button_1_1__img=document.createElement('img');
		this._button_1_1__img.className='ggskin ggskin_button';
		this._button_1_1__img.setAttribute('src',basePath + 'images/button_1_1.png');
		this._button_1_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1_1__img.className='ggskin ggskin_button';
		this._button_1_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1_1__img);
		this._button_1_1.appendChild(this._button_1_1__img);
		this._button_1_1.ggId="Button 1_1";
		this._button_1_1.ggLeft=-30;
		this._button_1_1.ggTop=-70;
		this._button_1_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1_1.ggVisible=true;
		this._button_1_1.className='ggskin ggskin_button ';
		this._button_1_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_1_1.setAttribute('style',hs);
		this._button_1_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_1_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_1_1.onclick=function () {
			me._ground_floor.style[domTransition]='none';
			me._ground_floor.style.visibility=(Number(me._ground_floor.style.opacity)>0||!me._ground_floor.style.opacity)?'inherit':'hidden';
			me._ground_floor.ggVisible=true;
			me._second_floor.style[domTransition]='none';
			me._second_floor.style.visibility='hidden';
			me._second_floor.ggVisible=false;
			me._third_floor.style[domTransition]='none';
			me._third_floor.style.visibility='hidden';
			me._third_floor.ggVisible=false;
			me._fourth_floor.style[domTransition]='none';
			me._fourth_floor.style.visibility='hidden';
			me._fourth_floor.ggVisible=false;
			me._fifth_floor.style[domTransition]='none';
			me._fifth_floor.style.visibility='hidden';
			me._fifth_floor.ggVisible=false;
			me._button_1_1active.style[domTransition]='none';
			me._button_1_1active.style.visibility=(Number(me._button_1_1active.style.opacity)>0||!me._button_1_1active.style.opacity)?'inherit':'hidden';
			me._button_1_1active.ggVisible=true;
			me._button_2_1active.style[domTransition]='none';
			me._button_2_1active.style.visibility='hidden';
			me._button_2_1active.ggVisible=false;
			me._button_3_1active.style[domTransition]='none';
			me._button_3_1active.style.visibility='hidden';
			me._button_3_1active.ggVisible=false;
			me._button_4_1active.style[domTransition]='none';
			me._button_4_1active.style.visibility='hidden';
			me._button_4_1active.ggVisible=false;
			me._button_5_1active.style[domTransition]='none';
			me._button_5_1active.style.visibility='hidden';
			me._button_5_1active.ggVisible=false;
		}
		this._button_1_1.onmouseover=function () {
			me._button_1_1__img.src=basePath + 'images/button_1_1__o.png';
		}
		this._button_1_1.onmouseout=function () {
			me._button_1_1__img.src=basePath + 'images/button_1_1.png';
		}
		this._button_1_1.onmousedown=function () {
			me._button_1_1__img.src=basePath + 'images/button_1_1__a.png';
		}
		this._button_1_1.onmouseup=function () {
			me._button_1_1__img.src=basePath + 'images/button_1_1.png';
		}
		this._button_1_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_1_1);
		this._button_2_1=document.createElement('div');
		this._button_2_1__img=document.createElement('img');
		this._button_2_1__img.className='ggskin ggskin_button';
		this._button_2_1__img.setAttribute('src',basePath + 'images/button_2_1.png');
		this._button_2_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2_1__img.className='ggskin ggskin_button';
		this._button_2_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2_1__img);
		this._button_2_1.appendChild(this._button_2_1__img);
		this._button_2_1.ggId="Button 2_1";
		this._button_2_1.ggLeft=-30;
		this._button_2_1.ggTop=-130;
		this._button_2_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2_1.ggVisible=true;
		this._button_2_1.className='ggskin ggskin_button ';
		this._button_2_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_2_1.setAttribute('style',hs);
		this._button_2_1.style[domTransform + 'Origin']='50% 50%';
		me._button_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_2_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_2_1.onclick=function () {
			me._second_floor.style[domTransition]='none';
			me._second_floor.style.visibility=(Number(me._second_floor.style.opacity)>0||!me._second_floor.style.opacity)?'inherit':'hidden';
			me._second_floor.ggVisible=true;
			me._ground_floor.style[domTransition]='none';
			me._ground_floor.style.visibility='hidden';
			me._ground_floor.ggVisible=false;
			me._third_floor.style[domTransition]='none';
			me._third_floor.style.visibility='hidden';
			me._third_floor.ggVisible=false;
			me._fourth_floor.style[domTransition]='none';
			me._fourth_floor.style.visibility='hidden';
			me._fourth_floor.ggVisible=false;
			me._fifth_floor.style[domTransition]='none';
			me._fifth_floor.style.visibility='hidden';
			me._fifth_floor.ggVisible=false;
			me._button_1_1active.style[domTransition]='none';
			me._button_1_1active.style.visibility='hidden';
			me._button_1_1active.ggVisible=false;
			me._button_2_1active.style[domTransition]='none';
			me._button_2_1active.style.visibility=(Number(me._button_2_1active.style.opacity)>0||!me._button_2_1active.style.opacity)?'inherit':'hidden';
			me._button_2_1active.ggVisible=true;
			me._button_3_1active.style[domTransition]='none';
			me._button_3_1active.style.visibility='hidden';
			me._button_3_1active.ggVisible=false;
			me._button_4_1active.style[domTransition]='none';
			me._button_4_1active.style.visibility='hidden';
			me._button_4_1active.ggVisible=false;
			me._button_5_1active.style[domTransition]='none';
			me._button_5_1active.style.visibility='hidden';
			me._button_5_1active.ggVisible=false;
		}
		this._button_2_1.onmouseover=function () {
			me._button_2_1__img.src=basePath + 'images/button_2_1__o.png';
		}
		this._button_2_1.onmouseout=function () {
			me._button_2_1__img.src=basePath + 'images/button_2_1.png';
		}
		this._button_2_1.onmousedown=function () {
			me._button_2_1__img.src=basePath + 'images/button_2_1__a.png';
		}
		this._button_2_1.onmouseup=function () {
			me._button_2_1__img.src=basePath + 'images/button_2_1.png';
		}
		this._button_2_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_2_1);
		this._button_3_1=document.createElement('div');
		this._button_3_1__img=document.createElement('img');
		this._button_3_1__img.className='ggskin ggskin_button';
		this._button_3_1__img.setAttribute('src',basePath + 'images/button_3_1.png');
		this._button_3_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_3_1__img.className='ggskin ggskin_button';
		this._button_3_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3_1__img);
		this._button_3_1.appendChild(this._button_3_1__img);
		this._button_3_1.ggId="Button 3_1";
		this._button_3_1.ggLeft=-30;
		this._button_3_1.ggTop=-189;
		this._button_3_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3_1.ggVisible=true;
		this._button_3_1.className='ggskin ggskin_button ';
		this._button_3_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -189px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_3_1.setAttribute('style',hs);
		this._button_3_1.style[domTransform + 'Origin']='50% 50%';
		me._button_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_3_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_3_1.onclick=function () {
			me._third_floor.style[domTransition]='none';
			me._third_floor.style.visibility=(Number(me._third_floor.style.opacity)>0||!me._third_floor.style.opacity)?'inherit':'hidden';
			me._third_floor.ggVisible=true;
			me._ground_floor.style[domTransition]='none';
			me._ground_floor.style.visibility='hidden';
			me._ground_floor.ggVisible=false;
			me._second_floor.style[domTransition]='none';
			me._second_floor.style.visibility='hidden';
			me._second_floor.ggVisible=false;
			me._fourth_floor.style[domTransition]='none';
			me._fourth_floor.style.visibility='hidden';
			me._fourth_floor.ggVisible=false;
			me._fifth_floor.style[domTransition]='none';
			me._fifth_floor.style.visibility='hidden';
			me._fifth_floor.ggVisible=false;
			me._button_1_1active.style[domTransition]='none';
			me._button_1_1active.style.visibility='hidden';
			me._button_1_1active.ggVisible=false;
			me._button_2_1active.style[domTransition]='none';
			me._button_2_1active.style.visibility='hidden';
			me._button_2_1active.ggVisible=false;
			me._button_3_1active.style[domTransition]='none';
			me._button_3_1active.style.visibility=(Number(me._button_3_1active.style.opacity)>0||!me._button_3_1active.style.opacity)?'inherit':'hidden';
			me._button_3_1active.ggVisible=true;
			me._button_4_1active.style[domTransition]='none';
			me._button_4_1active.style.visibility='hidden';
			me._button_4_1active.ggVisible=false;
			me._button_5_1active.style[domTransition]='none';
			me._button_5_1active.style.visibility='hidden';
			me._button_5_1active.ggVisible=false;
		}
		this._button_3_1.onmouseover=function () {
			me._button_3_1__img.src=basePath + 'images/button_3_1__o.png';
		}
		this._button_3_1.onmouseout=function () {
			me._button_3_1__img.src=basePath + 'images/button_3_1.png';
		}
		this._button_3_1.onmousedown=function () {
			me._button_3_1__img.src=basePath + 'images/button_3_1__a.png';
		}
		this._button_3_1.onmouseup=function () {
			me._button_3_1__img.src=basePath + 'images/button_3_1.png';
		}
		this._button_3_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_3_1);
		this._button_4_1=document.createElement('div');
		this._button_4_1__img=document.createElement('img');
		this._button_4_1__img.className='ggskin ggskin_button';
		this._button_4_1__img.setAttribute('src',basePath + 'images/button_4_1.png');
		this._button_4_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_4_1__img.className='ggskin ggskin_button';
		this._button_4_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4_1__img);
		this._button_4_1.appendChild(this._button_4_1__img);
		this._button_4_1.ggId="Button 4_1";
		this._button_4_1.ggLeft=-30;
		this._button_4_1.ggTop=-249;
		this._button_4_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4_1.ggVisible=true;
		this._button_4_1.className='ggskin ggskin_button ';
		this._button_4_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -249px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_4_1.setAttribute('style',hs);
		this._button_4_1.style[domTransform + 'Origin']='50% 50%';
		me._button_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_4_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_4_1.onclick=function () {
			me._fourth_floor.style[domTransition]='none';
			me._fourth_floor.style.visibility=(Number(me._fourth_floor.style.opacity)>0||!me._fourth_floor.style.opacity)?'inherit':'hidden';
			me._fourth_floor.ggVisible=true;
			me._ground_floor.style[domTransition]='none';
			me._ground_floor.style.visibility='hidden';
			me._ground_floor.ggVisible=false;
			me._second_floor.style[domTransition]='none';
			me._second_floor.style.visibility='hidden';
			me._second_floor.ggVisible=false;
			me._third_floor.style[domTransition]='none';
			me._third_floor.style.visibility='hidden';
			me._third_floor.ggVisible=false;
			me._fifth_floor.style[domTransition]='none';
			me._fifth_floor.style.visibility='hidden';
			me._fifth_floor.ggVisible=false;
			me._button_1_1active.style[domTransition]='none';
			me._button_1_1active.style.visibility='hidden';
			me._button_1_1active.ggVisible=false;
			me._button_2_1active.style[domTransition]='none';
			me._button_2_1active.style.visibility='hidden';
			me._button_2_1active.ggVisible=false;
			me._button_3_1active.style[domTransition]='none';
			me._button_3_1active.style.visibility='hidden';
			me._button_3_1active.ggVisible=false;
			me._button_4_1active.style[domTransition]='none';
			me._button_4_1active.style.visibility=(Number(me._button_4_1active.style.opacity)>0||!me._button_4_1active.style.opacity)?'inherit':'hidden';
			me._button_4_1active.ggVisible=true;
			me._button_5_1active.style[domTransition]='none';
			me._button_5_1active.style.visibility='hidden';
			me._button_5_1active.ggVisible=false;
		}
		this._button_4_1.onmouseover=function () {
			me._button_4_1__img.src=basePath + 'images/button_4_1__o.png';
		}
		this._button_4_1.onmouseout=function () {
			me._button_4_1__img.src=basePath + 'images/button_4_1.png';
		}
		this._button_4_1.onmousedown=function () {
			me._button_4_1__img.src=basePath + 'images/button_4_1__a.png';
		}
		this._button_4_1.onmouseup=function () {
			me._button_4_1__img.src=basePath + 'images/button_4_1.png';
		}
		this._button_4_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_4_1);
		this._button_5_1=document.createElement('div');
		this._button_5_1__img=document.createElement('img');
		this._button_5_1__img.className='ggskin ggskin_button';
		this._button_5_1__img.setAttribute('src',basePath + 'images/button_5_1.png');
		this._button_5_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_5_1__img.className='ggskin ggskin_button';
		this._button_5_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5_1__img);
		this._button_5_1.appendChild(this._button_5_1__img);
		this._button_5_1.ggId="Button 5_1";
		this._button_5_1.ggLeft=-30;
		this._button_5_1.ggTop=-308;
		this._button_5_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5_1.ggVisible=true;
		this._button_5_1.className='ggskin ggskin_button ';
		this._button_5_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -308px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_5_1.setAttribute('style',hs);
		this._button_5_1.style[domTransform + 'Origin']='50% 50%';
		me._button_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_5_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_5_1.onclick=function () {
			me._fifth_floor.style[domTransition]='none';
			me._fifth_floor.style.visibility=(Number(me._fifth_floor.style.opacity)>0||!me._fifth_floor.style.opacity)?'inherit':'hidden';
			me._fifth_floor.ggVisible=true;
			me._ground_floor.style[domTransition]='none';
			me._ground_floor.style.visibility='hidden';
			me._ground_floor.ggVisible=false;
			me._second_floor.style[domTransition]='none';
			me._second_floor.style.visibility='hidden';
			me._second_floor.ggVisible=false;
			me._third_floor.style[domTransition]='none';
			me._third_floor.style.visibility='hidden';
			me._third_floor.ggVisible=false;
			me._fourth_floor.style[domTransition]='none';
			me._fourth_floor.style.visibility='hidden';
			me._fourth_floor.ggVisible=false;
			me._button_1_1active.style[domTransition]='none';
			me._button_1_1active.style.visibility='hidden';
			me._button_1_1active.ggVisible=false;
			me._button_2_1active.style[domTransition]='none';
			me._button_2_1active.style.visibility='hidden';
			me._button_2_1active.ggVisible=false;
			me._button_3_1active.style[domTransition]='none';
			me._button_3_1active.style.visibility='hidden';
			me._button_3_1active.ggVisible=false;
			me._button_4_1active.style[domTransition]='none';
			me._button_4_1active.style.visibility='hidden';
			me._button_4_1active.ggVisible=false;
			me._button_5_1active.style[domTransition]='none';
			me._button_5_1active.style.visibility=(Number(me._button_5_1active.style.opacity)>0||!me._button_5_1active.style.opacity)?'inherit':'hidden';
			me._button_5_1active.ggVisible=true;
		}
		this._button_5_1.onmouseover=function () {
			me._button_5_1__img.src=basePath + 'images/button_5_1__o.png';
		}
		this._button_5_1.onmouseout=function () {
			me._button_5_1__img.src=basePath + 'images/button_5_1.png';
		}
		this._button_5_1.onmousedown=function () {
			me._button_5_1__img.src=basePath + 'images/button_5_1__a.png';
		}
		this._button_5_1.onmouseup=function () {
			me._button_5_1__img.src=basePath + 'images/button_5_1.png';
		}
		this._button_5_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_5_1);
		this._button_1_1active=document.createElement('div');
		this._button_1_1active__img=document.createElement('img');
		this._button_1_1active__img.className='ggskin ggskin_button';
		this._button_1_1active__img.setAttribute('src',basePath + 'images/button_1_1active.png');
		this._button_1_1active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1_1active__img.className='ggskin ggskin_button';
		this._button_1_1active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1_1active__img);
		this._button_1_1active.appendChild(this._button_1_1active__img);
		this._button_1_1active.ggId="Button 1_1active";
		this._button_1_1active.ggLeft=-30;
		this._button_1_1active.ggTop=-70;
		this._button_1_1active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1_1active.ggVisible=true;
		this._button_1_1active.className='ggskin ggskin_button ';
		this._button_1_1active.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		this._button_1_1active.setAttribute('style',hs);
		this._button_1_1active.style[domTransform + 'Origin']='50% 50%';
		me._button_1_1active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_1_1active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_1_1active.onclick=function () {
			me._plans.style[domTransition]='none';
			me._plans.style.visibility='hidden';
			me._plans.ggVisible=false;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
		}
		this._button_1_1active.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_1_1active);
		this._button_2_1active=document.createElement('div');
		this._button_2_1active__img=document.createElement('img');
		this._button_2_1active__img.className='ggskin ggskin_button';
		this._button_2_1active__img.setAttribute('src',basePath + 'images/button_2_1active.png');
		this._button_2_1active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2_1active__img.className='ggskin ggskin_button';
		this._button_2_1active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2_1active__img);
		this._button_2_1active.appendChild(this._button_2_1active__img);
		this._button_2_1active.ggId="Button 2_1active";
		this._button_2_1active.ggLeft=-30;
		this._button_2_1active.ggTop=-130;
		this._button_2_1active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2_1active.ggVisible=false;
		this._button_2_1active.className='ggskin ggskin_button ';
		this._button_2_1active.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		this._button_2_1active.setAttribute('style',hs);
		this._button_2_1active.style[domTransform + 'Origin']='50% 50%';
		me._button_2_1active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_2_1active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_2_1active.onclick=function () {
			me._plans.style[domTransition]='none';
			me._plans.style.visibility='hidden';
			me._plans.ggVisible=false;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
		}
		this._button_2_1active.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_2_1active);
		this._button_3_1active=document.createElement('div');
		this._button_3_1active__img=document.createElement('img');
		this._button_3_1active__img.className='ggskin ggskin_button';
		this._button_3_1active__img.setAttribute('src',basePath + 'images/button_3_1active.png');
		this._button_3_1active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_3_1active__img.className='ggskin ggskin_button';
		this._button_3_1active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3_1active__img);
		this._button_3_1active.appendChild(this._button_3_1active__img);
		this._button_3_1active.ggId="Button 3_1active";
		this._button_3_1active.ggLeft=-30;
		this._button_3_1active.ggTop=-189;
		this._button_3_1active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3_1active.ggVisible=false;
		this._button_3_1active.className='ggskin ggskin_button ';
		this._button_3_1active.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -189px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		this._button_3_1active.setAttribute('style',hs);
		this._button_3_1active.style[domTransform + 'Origin']='50% 50%';
		me._button_3_1active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_3_1active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_3_1active.onclick=function () {
			me._plans.style[domTransition]='none';
			me._plans.style.visibility='hidden';
			me._plans.ggVisible=false;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
		}
		this._button_3_1active.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_3_1active);
		this._button_4_1active=document.createElement('div');
		this._button_4_1active__img=document.createElement('img');
		this._button_4_1active__img.className='ggskin ggskin_button';
		this._button_4_1active__img.setAttribute('src',basePath + 'images/button_4_1active.png');
		this._button_4_1active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_4_1active__img.className='ggskin ggskin_button';
		this._button_4_1active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4_1active__img);
		this._button_4_1active.appendChild(this._button_4_1active__img);
		this._button_4_1active.ggId="Button 4_1active";
		this._button_4_1active.ggLeft=-30;
		this._button_4_1active.ggTop=-249;
		this._button_4_1active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4_1active.ggVisible=false;
		this._button_4_1active.className='ggskin ggskin_button ';
		this._button_4_1active.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -249px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		this._button_4_1active.setAttribute('style',hs);
		this._button_4_1active.style[domTransform + 'Origin']='50% 50%';
		me._button_4_1active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_4_1active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_4_1active.onclick=function () {
			me._plans.style[domTransition]='none';
			me._plans.style.visibility='hidden';
			me._plans.ggVisible=false;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
		}
		this._button_4_1active.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_4_1active);
		this._button_5_1active=document.createElement('div');
		this._button_5_1active__img=document.createElement('img');
		this._button_5_1active__img.className='ggskin ggskin_button';
		this._button_5_1active__img.setAttribute('src',basePath + 'images/button_5_1active.png');
		this._button_5_1active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_5_1active__img.className='ggskin ggskin_button';
		this._button_5_1active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5_1active__img);
		this._button_5_1active.appendChild(this._button_5_1active__img);
		this._button_5_1active.ggId="Button 5_1active";
		this._button_5_1active.ggLeft=-30;
		this._button_5_1active.ggTop=-308;
		this._button_5_1active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5_1active.ggVisible=false;
		this._button_5_1active.className='ggskin ggskin_button ';
		this._button_5_1active.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -308px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		this._button_5_1active.setAttribute('style',hs);
		this._button_5_1active.style[domTransform + 'Origin']='50% 50%';
		me._button_5_1active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_5_1active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_5_1active.onclick=function () {
			me._plans.style[domTransition]='none';
			me._plans.style.visibility='hidden';
			me._plans.ggVisible=false;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
		}
		this._button_5_1active.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._buttons.appendChild(this._button_5_1active);
		this._plans.appendChild(this._buttons);
		this.divSkin.appendChild(this._plans);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_button';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_button';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggLeft=-141;
		this._image_1.ggTop=-55;
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_button ';
		this._image_1.ggType='button';
		hs ='';
		hs+='height : 52px;';
		hs+='left : -141px;';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='100% 100%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.onclick=function () {
			gyro.toggle();
		}
		this._image_1.onmouseover=function () {
			me._image_1__img.src=basePath + 'images/image_1__o.png';
		}
		this._image_1.onmouseout=function () {
			me._image_1__img.src=basePath + 'images/image_1.png';
		}
		this._image_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_1);
		this._mapbuttoninactive=document.createElement('div');
		this._mapbuttoninactive__img=document.createElement('img');
		this._mapbuttoninactive__img.className='ggskin ggskin_button';
		this._mapbuttoninactive__img.setAttribute('src',basePath + 'images/mapbuttoninactive.png');
		this._mapbuttoninactive__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapbuttoninactive__img.className='ggskin ggskin_button';
		this._mapbuttoninactive__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mapbuttoninactive__img);
		this._mapbuttoninactive.appendChild(this._mapbuttoninactive__img);
		this._mapbuttoninactive.ggId="MapbuttonInactive";
		this._mapbuttoninactive.ggLeft=-44;
		this._mapbuttoninactive.ggTop=-102;
		this._mapbuttoninactive.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapbuttoninactive.ggVisible=true;
		this._mapbuttoninactive.className='ggskin ggskin_button ';
		this._mapbuttoninactive.ggType='button';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		this._mapbuttoninactive.setAttribute('style',hs);
		this._mapbuttoninactive.style[domTransform + 'Origin']='50% 50%';
		me._mapbuttoninactive.ggIsActive=function() {
			return false;
		}
		me._mapbuttoninactive.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapbuttoninactive.onclick=function () {
			me._plans.ggVisible = !me._plans.ggVisible;
			me._plans.style[domTransition]='none';
			me._plans.style.visibility=((me._plans.ggVisible)&&(Number(me._plans.style.opacity)>0||!me._plans.style.opacity))?'inherit':'hidden';
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility=(Number(me._mapbuttonactive.style.opacity)>0||!me._mapbuttonactive.style.opacity)?'inherit':'hidden';
			me._mapbuttonactive.ggVisible=true;
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility='hidden';
			me._mapbuttoninactive.ggVisible=false;
		}
		this._mapbuttoninactive.onmouseover=function () {
			me._mapbuttoninactive__img.src=basePath + 'images/mapbuttoninactive__o.png';
		}
		this._mapbuttoninactive.onmouseout=function () {
			me._mapbuttoninactive__img.src=basePath + 'images/mapbuttoninactive.png';
		}
		this._mapbuttoninactive.onmousedown=function () {
			me._mapbuttoninactive__img.src=basePath + 'images/mapbuttoninactive__a.png';
		}
		this._mapbuttoninactive.onmouseup=function () {
			me._mapbuttoninactive__img.src=basePath + 'images/mapbuttoninactive.png';
		}
		this._mapbuttoninactive.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._mapbuttoninactive);
		this._mapbuttonactive=document.createElement('div');
		this._mapbuttonactive__img=document.createElement('img');
		this._mapbuttonactive__img.className='ggskin ggskin_button';
		this._mapbuttonactive__img.setAttribute('src',basePath + 'images/mapbuttonactive.png');
		this._mapbuttonactive__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapbuttonactive__img.className='ggskin ggskin_button';
		this._mapbuttonactive__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mapbuttonactive__img);
		this._mapbuttonactive.appendChild(this._mapbuttonactive__img);
		this._mapbuttonactive.ggId="Mapbuttonactive";
		this._mapbuttonactive.ggLeft=-44;
		this._mapbuttonactive.ggTop=-102;
		this._mapbuttonactive.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapbuttonactive.ggVisible=false;
		this._mapbuttonactive.className='ggskin ggskin_button ';
		this._mapbuttonactive.ggType='button';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -102px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		this._mapbuttonactive.setAttribute('style',hs);
		this._mapbuttonactive.style[domTransform + 'Origin']='50% 50%';
		me._mapbuttonactive.ggIsActive=function() {
			return false;
		}
		me._mapbuttonactive.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapbuttonactive.onclick=function () {
			me._plans.ggVisible = !me._plans.ggVisible;
			me._plans.style[domTransition]='none';
			me._plans.style.visibility=((me._plans.ggVisible)&&(Number(me._plans.style.opacity)>0||!me._plans.style.opacity))?'inherit':'hidden';
			me._mapbuttoninactive.style[domTransition]='none';
			me._mapbuttoninactive.style.visibility=(Number(me._mapbuttoninactive.style.opacity)>0||!me._mapbuttoninactive.style.opacity)?'inherit':'hidden';
			me._mapbuttoninactive.ggVisible=true;
			me._mapbuttonactive.style[domTransition]='none';
			me._mapbuttonactive.style.visibility='hidden';
			me._mapbuttonactive.ggVisible=false;
		}
		this._mapbuttonactive.onmouseover=function () {
			me._mapbuttonactive__img.src=basePath + 'images/mapbuttonactive__o.png';
		}
		this._mapbuttonactive.onmouseout=function () {
			me._mapbuttonactive__img.src=basePath + 'images/mapbuttonactive.png';
		}
		this._mapbuttonactive.onmousedown=function () {
			me._mapbuttonactive__img.src=basePath + 'images/mapbuttonactive__a.png';
		}
		this._mapbuttonactive.onmouseup=function () {
			me._mapbuttonactive__img.src=basePath + 'images/mapbuttonactive.png';
		}
		this._mapbuttonactive.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._mapbuttonactive);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-105;
		this._loading.ggTop=-30;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle ';
		this._loadingbrd.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loadingbrd.style[domTransform + 'Origin']='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbrd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbrd.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-120;
		this._userdata.ggTop=-80;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdata.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle ';
		this._userdatabrd.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdatabrd.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabrd.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabrd.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container ';
		this._hide_template.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		this._hide_template.setAttribute('style',hs);
		this._hide_template.style[domTransform + 'Origin']='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		me._hide_template.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_template.ggUpdatePosition=function () {
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function () {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text ';
		this._marker_title.ggType='text';
		hs ='';
		hs+='height : 17px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		this._marker_title.setAttribute('style',hs);
		this._marker_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this.divSkin.appendChild(this._hide_template);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.onclick=function () {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.png');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-164;
		this._information.ggTop=-113;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -164px;';
		hs+='position : absolute;';
		hs+='top : -113px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='height : 248px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 243px;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 243px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.png');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.png');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function () {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._ht_info_close.onmouseover=function () {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function () {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._green_button_normal=document.createElement('div');
		this._green_button_normal__img=document.createElement('img');
		this._green_button_normal__img.className='ggskin ggskin_button';
		this._green_button_normal__img.setAttribute('src',basePath + 'images/green_button_normal.png');
		this._green_button_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._green_button_normal__img.className='ggskin ggskin_button';
		this._green_button_normal__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._green_button_normal__img);
		this._green_button_normal.appendChild(this._green_button_normal__img);
		this._green_button_normal.ggId="green button normal";
		this._green_button_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_button_normal.ggVisible=false;
		this._green_button_normal.className='ggskin ggskin_button ';
		this._green_button_normal.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 97px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		this._green_button_normal.setAttribute('style',hs);
		this._green_button_normal.style[domTransform + 'Origin']='50% 50%';
		me._green_button_normal.ggIsActive=function() {
			return false;
		}
		me._green_button_normal.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._green_button_normal.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._green_button_normal);
		this._marker_node59__normal=new SkinElement_inactivenode_Class(this,this._marker_node59);
		this._marker_node59__normal.style.visibility='inherit';
		this._marker_node59__normal.style.left='0px';
		this._marker_node59__normal.style.top='0px';
		this._marker_node59.ggMarkerNormal=this._marker_node59__normal;
		this._marker_node59__active=new SkinElement_activenode_Class(this,this._marker_node59);
		this._marker_node59__active.style.visibility='hidden';
		this._marker_node59__active.style.left='0px';
		this._marker_node59__active.style.top='0px';
		this._marker_node59.ggMarkerActive=this._marker_node59__active;
		if (this._marker_node59.firstChild) {
			this._marker_node59.insertBefore(this._marker_node59__active,this._marker_node59.firstChild);
		} else {
			this._marker_node59.appendChild(this._marker_node59__active);
		}
		if (this._marker_node59.firstChild) {
			this._marker_node59.insertBefore(this._marker_node59__normal,this._marker_node59.firstChild);
		} else {
			this._marker_node59.appendChild(this._marker_node59__normal);
		}
		this._position_11__normal=new SkinElement_inactivenode_Class(this,this._position_11);
		this._position_11__normal.style.visibility='inherit';
		this._position_11__normal.style.left='0px';
		this._position_11__normal.style.top='0px';
		this._position_11.ggMarkerNormal=this._position_11__normal;
		this._position_11__active=new SkinElement_activenode_Class(this,this._position_11);
		this._position_11__active.style.visibility='hidden';
		this._position_11__active.style.left='0px';
		this._position_11__active.style.top='0px';
		this._position_11.ggMarkerActive=this._position_11__active;
		if (this._position_11.firstChild) {
			this._position_11.insertBefore(this._position_11__active,this._position_11.firstChild);
		} else {
			this._position_11.appendChild(this._position_11__active);
		}
		if (this._position_11.firstChild) {
			this._position_11.insertBefore(this._position_11__normal,this._position_11.firstChild);
		} else {
			this._position_11.appendChild(this._position_11__normal);
		}
		this._position_12__normal=new SkinElement_inactivenode_Class(this,this._position_12);
		this._position_12__normal.style.visibility='inherit';
		this._position_12__normal.style.left='0px';
		this._position_12__normal.style.top='0px';
		this._position_12.ggMarkerNormal=this._position_12__normal;
		this._position_12__active=new SkinElement_activenode_Class(this,this._position_12);
		this._position_12__active.style.visibility='hidden';
		this._position_12__active.style.left='0px';
		this._position_12__active.style.top='0px';
		this._position_12.ggMarkerActive=this._position_12__active;
		if (this._position_12.firstChild) {
			this._position_12.insertBefore(this._position_12__active,this._position_12.firstChild);
		} else {
			this._position_12.appendChild(this._position_12__active);
		}
		if (this._position_12.firstChild) {
			this._position_12.insertBefore(this._position_12__normal,this._position_12.firstChild);
		} else {
			this._position_12.appendChild(this._position_12__normal);
		}
		this._marker_node31__normal=new SkinElement_inactivenode_Class(this,this._marker_node31);
		this._marker_node31__normal.style.visibility='inherit';
		this._marker_node31__normal.style.left='0px';
		this._marker_node31__normal.style.top='0px';
		this._marker_node31.ggMarkerNormal=this._marker_node31__normal;
		this._marker_node31__active=new SkinElement_activenode_Class(this,this._marker_node31);
		this._marker_node31__active.style.visibility='hidden';
		this._marker_node31__active.style.left='0px';
		this._marker_node31__active.style.top='0px';
		this._marker_node31.ggMarkerActive=this._marker_node31__active;
		if (this._marker_node31.firstChild) {
			this._marker_node31.insertBefore(this._marker_node31__active,this._marker_node31.firstChild);
		} else {
			this._marker_node31.appendChild(this._marker_node31__active);
		}
		if (this._marker_node31.firstChild) {
			this._marker_node31.insertBefore(this._marker_node31__normal,this._marker_node31.firstChild);
		} else {
			this._marker_node31.appendChild(this._marker_node31__normal);
		}
		this._marker_node46__normal=new SkinElement_inactivenode_Class(this,this._marker_node46);
		this._marker_node46__normal.style.visibility='inherit';
		this._marker_node46__normal.style.left='0px';
		this._marker_node46__normal.style.top='0px';
		this._marker_node46.ggMarkerNormal=this._marker_node46__normal;
		this._marker_node46__active=new SkinElement_activenode_Class(this,this._marker_node46);
		this._marker_node46__active.style.visibility='hidden';
		this._marker_node46__active.style.left='0px';
		this._marker_node46__active.style.top='0px';
		this._marker_node46.ggMarkerActive=this._marker_node46__active;
		if (this._marker_node46.firstChild) {
			this._marker_node46.insertBefore(this._marker_node46__active,this._marker_node46.firstChild);
		} else {
			this._marker_node46.appendChild(this._marker_node46__active);
		}
		if (this._marker_node46.firstChild) {
			this._marker_node46.insertBefore(this._marker_node46__normal,this._marker_node46.firstChild);
		} else {
			this._marker_node46.appendChild(this._marker_node46__normal);
		}
		this._marker_node54__normal=new SkinElement_inactivenode_Class(this,this._marker_node54);
		this._marker_node54__normal.style.visibility='inherit';
		this._marker_node54__normal.style.left='0px';
		this._marker_node54__normal.style.top='0px';
		this._marker_node54.ggMarkerNormal=this._marker_node54__normal;
		this._marker_node54__active=new SkinElement_activenode_Class(this,this._marker_node54);
		this._marker_node54__active.style.visibility='hidden';
		this._marker_node54__active.style.left='0px';
		this._marker_node54__active.style.top='0px';
		this._marker_node54.ggMarkerActive=this._marker_node54__active;
		if (this._marker_node54.firstChild) {
			this._marker_node54.insertBefore(this._marker_node54__active,this._marker_node54.firstChild);
		} else {
			this._marker_node54.appendChild(this._marker_node54__active);
		}
		if (this._marker_node54.firstChild) {
			this._marker_node54.insertBefore(this._marker_node54__normal,this._marker_node54.firstChild);
		} else {
			this._marker_node54.appendChild(this._marker_node54__normal);
		}
		this._marker_node56__normal=new SkinElement_inactivenode_Class(this,this._marker_node56);
		this._marker_node56__normal.style.visibility='inherit';
		this._marker_node56__normal.style.left='0px';
		this._marker_node56__normal.style.top='0px';
		this._marker_node56.ggMarkerNormal=this._marker_node56__normal;
		this._marker_node56__active=new SkinElement_activenode_Class(this,this._marker_node56);
		this._marker_node56__active.style.visibility='hidden';
		this._marker_node56__active.style.left='0px';
		this._marker_node56__active.style.top='0px';
		this._marker_node56.ggMarkerActive=this._marker_node56__active;
		if (this._marker_node56.firstChild) {
			this._marker_node56.insertBefore(this._marker_node56__active,this._marker_node56.firstChild);
		} else {
			this._marker_node56.appendChild(this._marker_node56__active);
		}
		if (this._marker_node56.firstChild) {
			this._marker_node56.insertBefore(this._marker_node56__normal,this._marker_node56.firstChild);
		} else {
			this._marker_node56.appendChild(this._marker_node56__normal);
		}
		this._position_6__normal=new SkinElement_inactivenode_Class(this,this._position_6);
		this._position_6__normal.style.visibility='inherit';
		this._position_6__normal.style.left='0px';
		this._position_6__normal.style.top='0px';
		this._position_6.ggMarkerNormal=this._position_6__normal;
		this._position_6__active=new SkinElement_activenode_Class(this,this._position_6);
		this._position_6__active.style.visibility='hidden';
		this._position_6__active.style.left='0px';
		this._position_6__active.style.top='0px';
		this._position_6.ggMarkerActive=this._position_6__active;
		if (this._position_6.firstChild) {
			this._position_6.insertBefore(this._position_6__active,this._position_6.firstChild);
		} else {
			this._position_6.appendChild(this._position_6__active);
		}
		if (this._position_6.firstChild) {
			this._position_6.insertBefore(this._position_6__normal,this._position_6.firstChild);
		} else {
			this._position_6.appendChild(this._position_6__normal);
		}
		this._position_7__normal=new SkinElement_inactivenode_Class(this,this._position_7);
		this._position_7__normal.style.visibility='inherit';
		this._position_7__normal.style.left='0px';
		this._position_7__normal.style.top='0px';
		this._position_7.ggMarkerNormal=this._position_7__normal;
		this._position_7__active=new SkinElement_activenode_Class(this,this._position_7);
		this._position_7__active.style.visibility='hidden';
		this._position_7__active.style.left='0px';
		this._position_7__active.style.top='0px';
		this._position_7.ggMarkerActive=this._position_7__active;
		if (this._position_7.firstChild) {
			this._position_7.insertBefore(this._position_7__active,this._position_7.firstChild);
		} else {
			this._position_7.appendChild(this._position_7__active);
		}
		if (this._position_7.firstChild) {
			this._position_7.insertBefore(this._position_7__normal,this._position_7.firstChild);
		} else {
			this._position_7.appendChild(this._position_7__normal);
		}
		this._marker_node49__normal=new SkinElement_inactivenode_Class(this,this._marker_node49);
		this._marker_node49__normal.style.visibility='inherit';
		this._marker_node49__normal.style.left='0px';
		this._marker_node49__normal.style.top='0px';
		this._marker_node49.ggMarkerNormal=this._marker_node49__normal;
		this._marker_node49__active=new SkinElement_activenode_Class(this,this._marker_node49);
		this._marker_node49__active.style.visibility='hidden';
		this._marker_node49__active.style.left='0px';
		this._marker_node49__active.style.top='0px';
		this._marker_node49.ggMarkerActive=this._marker_node49__active;
		if (this._marker_node49.firstChild) {
			this._marker_node49.insertBefore(this._marker_node49__active,this._marker_node49.firstChild);
		} else {
			this._marker_node49.appendChild(this._marker_node49__active);
		}
		if (this._marker_node49.firstChild) {
			this._marker_node49.insertBefore(this._marker_node49__normal,this._marker_node49.firstChild);
		} else {
			this._marker_node49.appendChild(this._marker_node49__normal);
		}
		this._marker_node57__normal=new SkinElement_inactivenode_Class(this,this._marker_node57);
		this._marker_node57__normal.style.visibility='inherit';
		this._marker_node57__normal.style.left='0px';
		this._marker_node57__normal.style.top='0px';
		this._marker_node57.ggMarkerNormal=this._marker_node57__normal;
		this._marker_node57__active=new SkinElement_activenode_Class(this,this._marker_node57);
		this._marker_node57__active.style.visibility='hidden';
		this._marker_node57__active.style.left='0px';
		this._marker_node57__active.style.top='0px';
		this._marker_node57.ggMarkerActive=this._marker_node57__active;
		if (this._marker_node57.firstChild) {
			this._marker_node57.insertBefore(this._marker_node57__active,this._marker_node57.firstChild);
		} else {
			this._marker_node57.appendChild(this._marker_node57__active);
		}
		if (this._marker_node57.firstChild) {
			this._marker_node57.insertBefore(this._marker_node57__normal,this._marker_node57.firstChild);
		} else {
			this._marker_node57.appendChild(this._marker_node57__normal);
		}
		this._position_5__normal=new SkinElement_inactivenode_Class(this,this._position_5);
		this._position_5__normal.style.visibility='inherit';
		this._position_5__normal.style.left='0px';
		this._position_5__normal.style.top='0px';
		this._position_5.ggMarkerNormal=this._position_5__normal;
		this._position_5__active=new SkinElement_activenode_Class(this,this._position_5);
		this._position_5__active.style.visibility='hidden';
		this._position_5__active.style.left='0px';
		this._position_5__active.style.top='0px';
		this._position_5.ggMarkerActive=this._position_5__active;
		if (this._position_5.firstChild) {
			this._position_5.insertBefore(this._position_5__active,this._position_5.firstChild);
		} else {
			this._position_5.appendChild(this._position_5__active);
		}
		if (this._position_5.firstChild) {
			this._position_5.insertBefore(this._position_5__normal,this._position_5.firstChild);
		} else {
			this._position_5.appendChild(this._position_5__normal);
		}
		this._position_4__normal=new SkinElement_inactivenode_Class(this,this._position_4);
		this._position_4__normal.style.visibility='inherit';
		this._position_4__normal.style.left='0px';
		this._position_4__normal.style.top='0px';
		this._position_4.ggMarkerNormal=this._position_4__normal;
		this._position_4__active=new SkinElement_activenode_Class(this,this._position_4);
		this._position_4__active.style.visibility='hidden';
		this._position_4__active.style.left='0px';
		this._position_4__active.style.top='0px';
		this._position_4.ggMarkerActive=this._position_4__active;
		if (this._position_4.firstChild) {
			this._position_4.insertBefore(this._position_4__active,this._position_4.firstChild);
		} else {
			this._position_4.appendChild(this._position_4__active);
		}
		if (this._position_4.firstChild) {
			this._position_4.insertBefore(this._position_4__normal,this._position_4.firstChild);
		} else {
			this._position_4.appendChild(this._position_4__normal);
		}
		this._position_3__normal=new SkinElement_inactivenode_Class(this,this._position_3);
		this._position_3__normal.style.visibility='inherit';
		this._position_3__normal.style.left='0px';
		this._position_3__normal.style.top='0px';
		this._position_3.ggMarkerNormal=this._position_3__normal;
		this._position_3__active=new SkinElement_activenode_Class(this,this._position_3);
		this._position_3__active.style.visibility='hidden';
		this._position_3__active.style.left='0px';
		this._position_3__active.style.top='0px';
		this._position_3.ggMarkerActive=this._position_3__active;
		if (this._position_3.firstChild) {
			this._position_3.insertBefore(this._position_3__active,this._position_3.firstChild);
		} else {
			this._position_3.appendChild(this._position_3__active);
		}
		if (this._position_3.firstChild) {
			this._position_3.insertBefore(this._position_3__normal,this._position_3.firstChild);
		} else {
			this._position_3.appendChild(this._position_3__normal);
		}
		this._position_2__normal=new SkinElement_inactivenode_Class(this,this._position_2);
		this._position_2__normal.style.visibility='inherit';
		this._position_2__normal.style.left='0px';
		this._position_2__normal.style.top='0px';
		this._position_2.ggMarkerNormal=this._position_2__normal;
		this._position_2__active=new SkinElement_activenode_Class(this,this._position_2);
		this._position_2__active.style.visibility='hidden';
		this._position_2__active.style.left='0px';
		this._position_2__active.style.top='0px';
		this._position_2.ggMarkerActive=this._position_2__active;
		if (this._position_2.firstChild) {
			this._position_2.insertBefore(this._position_2__active,this._position_2.firstChild);
		} else {
			this._position_2.appendChild(this._position_2__active);
		}
		if (this._position_2.firstChild) {
			this._position_2.insertBefore(this._position_2__normal,this._position_2.firstChild);
		} else {
			this._position_2.appendChild(this._position_2__normal);
		}
		this._marker_node55__normal=new SkinElement_inactivenode_Class(this,this._marker_node55);
		this._marker_node55__normal.style.visibility='inherit';
		this._marker_node55__normal.style.left='0px';
		this._marker_node55__normal.style.top='0px';
		this._marker_node55.ggMarkerNormal=this._marker_node55__normal;
		this._marker_node55__active=new SkinElement_activenode_Class(this,this._marker_node55);
		this._marker_node55__active.style.visibility='hidden';
		this._marker_node55__active.style.left='0px';
		this._marker_node55__active.style.top='0px';
		this._marker_node55.ggMarkerActive=this._marker_node55__active;
		if (this._marker_node55.firstChild) {
			this._marker_node55.insertBefore(this._marker_node55__active,this._marker_node55.firstChild);
		} else {
			this._marker_node55.appendChild(this._marker_node55__active);
		}
		if (this._marker_node55.firstChild) {
			this._marker_node55.insertBefore(this._marker_node55__normal,this._marker_node55.firstChild);
		} else {
			this._marker_node55.appendChild(this._marker_node55__normal);
		}
		this._markertemplate__normal=new SkinElement_marker_normal_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_marker_active_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._marker_node59.ggNodeChange();
		me._position_11.ggNodeChange();
		me._position_12.ggNodeChange();
		me._marker_node31.ggNodeChange();
		me._marker_node46.ggNodeChange();
		me._marker_node54.ggNodeChange();
		me._marker_node56.ggNodeChange();
		me._position_6.ggNodeChange();
		me._position_7.ggNodeChange();
		me._marker_node49.ggNodeChange();
		me._marker_node57.ggNodeChange();
		me._position_5.ggNodeChange();
		me._position_4.ggNodeChange();
		me._position_3.ggNodeChange();
		me._position_2.ggNodeChange();
		me._marker_node55.ggNodeChange();
		me._markertemplate.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._marker_title10.ggUpdateText();
		me._marker_title9.ggUpdateText();
		me._marker_title8.ggUpdateText();
		me._marker_title7.ggUpdateText();
		me._marker_title6.ggUpdateText();
		me._marker_title5.ggUpdateText();
		me._marker_title4.ggUpdateText();
		me._position_6_.ggUpdateText();
		me._marker_title3.ggUpdateText();
		me._marker_title2.ggUpdateText();
		me._marker_title1.ggUpdateText();
		me._pos5.ggUpdateText();
		me._pos4.ggUpdateText();
		me._pos3.ggUpdateText();
		me._pos2.ggUpdateText();
		me._marker_title0.ggUpdateText();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		me._marker_title.ggUpdateText();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='hs') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 135px;';
			hs+='position : absolute;';
			hs+='top : 361px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.skin._button_1_1.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot3=document.createElement('div');
			this._hotspot3__img=document.createElement('img');
			this._hotspot3__img.className='ggskin ggskin_button';
			this._hotspot3__img.setAttribute('src',basePath + 'images/hotspot3.png');
			this._hotspot3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspot3__img.className='ggskin ggskin_button';
			this._hotspot3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hotspot3__img);
			this._hotspot3.appendChild(this._hotspot3__img);
			this._hotspot3.ggId="hotspot";
			this._hotspot3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot3.ggVisible=true;
			this._hotspot3.className='ggskin ggskin_button ';
			this._hotspot3.ggType='button';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._hotspot3.setAttribute('style',hs);
			this._hotspot3.style[domTransform + 'Origin']='50% 50%';
			me._hotspot3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspot3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hotspot3);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._hotspot3.ggParameter) {
					hs+=parameterToTransform(me._hotspot3.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._hotspot3.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hs2') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 135px;';
			hs+='position : absolute;';
			hs+='top : 317px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.skin._button_2_1.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot2=document.createElement('div');
			this._hotspot2__img=document.createElement('img');
			this._hotspot2__img.className='ggskin ggskin_button';
			this._hotspot2__img.setAttribute('src',basePath + 'images/hotspot2.png');
			this._hotspot2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspot2__img.className='ggskin ggskin_button';
			this._hotspot2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hotspot2__img);
			this._hotspot2.appendChild(this._hotspot2__img);
			this._hotspot2.ggId="hotspot";
			this._hotspot2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot2.ggVisible=true;
			this._hotspot2.className='ggskin ggskin_button ';
			this._hotspot2.ggType='button';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._hotspot2.setAttribute('style',hs);
			this._hotspot2.style[domTransform + 'Origin']='50% 50%';
			me._hotspot2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspot2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hotspot2);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._hotspot2.ggParameter) {
					hs+=parameterToTransform(me._hotspot2.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._hotspot2.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hs3') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs3";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 135px;';
			hs+='position : absolute;';
			hs+='top : 279px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.skin._button_3_1.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot1=document.createElement('div');
			this._hotspot1__img=document.createElement('img');
			this._hotspot1__img.className='ggskin ggskin_button';
			this._hotspot1__img.setAttribute('src',basePath + 'images/hotspot1.png');
			this._hotspot1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspot1__img.className='ggskin ggskin_button';
			this._hotspot1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hotspot1__img);
			this._hotspot1.appendChild(this._hotspot1__img);
			this._hotspot1.ggId="hotspot";
			this._hotspot1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot1.ggVisible=true;
			this._hotspot1.className='ggskin ggskin_button ';
			this._hotspot1.ggType='button';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._hotspot1.setAttribute('style',hs);
			this._hotspot1.style[domTransform + 'Origin']='50% 50%';
			me._hotspot1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspot1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hotspot1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._hotspot1.ggParameter) {
					hs+=parameterToTransform(me._hotspot1.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._hotspot1.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hs4') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs4";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 135px;';
			hs+='position : absolute;';
			hs+='top : 238px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.skin._button_4_1.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot0=document.createElement('div');
			this._hotspot0__img=document.createElement('img');
			this._hotspot0__img.className='ggskin ggskin_button';
			this._hotspot0__img.setAttribute('src',basePath + 'images/hotspot0.png');
			this._hotspot0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspot0__img.className='ggskin ggskin_button';
			this._hotspot0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hotspot0__img);
			this._hotspot0.appendChild(this._hotspot0__img);
			this._hotspot0.ggId="hotspot";
			this._hotspot0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot0.ggVisible=true;
			this._hotspot0.className='ggskin ggskin_button ';
			this._hotspot0.ggType='button';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._hotspot0.setAttribute('style',hs);
			this._hotspot0.style[domTransform + 'Origin']='50% 50%';
			me._hotspot0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspot0.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hotspot0);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._hotspot0.ggParameter) {
					hs+=parameterToTransform(me._hotspot0.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._hotspot0.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hs5') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs5";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 135px;';
			hs+='position : absolute;';
			hs+='top : 196px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.skin._button_5_1.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hotspot=document.createElement('div');
			this._hotspot__img=document.createElement('img');
			this._hotspot__img.className='ggskin ggskin_button';
			this._hotspot__img.setAttribute('src',basePath + 'images/hotspot.png');
			this._hotspot__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspot__img.className='ggskin ggskin_button';
			this._hotspot__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hotspot__img);
			this._hotspot.appendChild(this._hotspot__img);
			this._hotspot.ggId="hotspot";
			this._hotspot.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot.ggVisible=true;
			this._hotspot.className='ggskin ggskin_button ';
			this._hotspot.ggType='button';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			this._hotspot.setAttribute('style',hs);
			this._hotspot.style[domTransform + 'Origin']='50% 50%';
			me._hotspot.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspot.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hotspot);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._hotspot.ggParameter) {
					hs+=parameterToTransform(me._hotspot.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(15 * me.player.getPanN() + 0)) + 'deg) ';
				me._hotspot.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 65px;';
			hs+='position : absolute;';
			hs+='top : 112px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hsimage=document.createElement('div');
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg ';
			this._hsimage.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 38px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 38px;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage.style[domTransform + 'Origin']='50% 50%';
			me._hsimage.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hsimage);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hotspot_preview.style[domTransition]='';
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function () {
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage=document.createElement('div');
			this._preview_nodeimage__img=document.createElement('img');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
			this._preview_nodeimage.ggNodeId=nodeId;
			this._preview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img['ondragstart']=function() { return false; };
			this._preview_nodeimage.appendChild(this._preview_nodeimage__img);
			this._preview_nodeimage.ggId="Preview NodeImage";
			this._preview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage.ggVisible=true;
			this._preview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage.setAttribute('style',hs);
			this._preview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage);
			this._tooltip_bg=document.createElement('div');
			this._tooltip_bg.ggId="tooltip_bg";
			this._tooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg.ggVisible=true;
			this._tooltip_bg.className='ggskin ggskin_rectangle ';
			this._tooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._tooltip_bg.setAttribute('style',hs);
			this._tooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_bg);
			this._tooltip_drop_shadow=document.createElement('div');
			this._tooltip_drop_shadow__text=document.createElement('div');
			this._tooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow.ggTextDiv=this._tooltip_drop_shadow__text;
			this._tooltip_drop_shadow.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow.ggVisible=true;
			this._tooltip_drop_shadow.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip_drop_shadow.setAttribute('style',hs);
			this._tooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow__text.setAttribute('style',hs);
			this._tooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow.appendChild(this._tooltip_drop_shadow__text);
			me._tooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip_drop_shadow);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this._checkmark=document.createElement('div');
			this._checkmark.ggId="checkmark";
			this._checkmark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark.ggVisible=false;
			this._checkmark.className='ggskin ggskin_rectangle ';
			this._checkmark.ggType='rectangle';
			hs ='';
			hs+='border : 2px solid #ffffff;';
			hs+='height : 18px;';
			hs+='left : 119px;';
			hs+='position : absolute;';
			hs+='top : 7px;';
			hs+='visibility : hidden;';
			hs+='width : 18px;';
			this._checkmark.setAttribute('style',hs);
			this._checkmark.style[domTransform + 'Origin']='50% 50%';
			me._checkmark.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark.ggCurrentLogicStateVisible = -1;
			this._checkmark.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._checkmark.style[domTransition]='';
					if (me._checkmark.ggCurrentLogicStateVisible == 0) {
						me._checkmark.style.visibility=(Number(me._checkmark.style.opacity)>0||!me._checkmark.style.opacity)?'inherit':'hidden';
						me._checkmark.ggVisible=true;
					}
					else {
						me._checkmark.style.visibility="hidden";
						me._checkmark.ggVisible=false;
					}
				}
			}
			this._checkmark.ggUpdatePosition=function () {
			}
			this._checkmark.ggNodeChange=function () {
				me._checkmark.ggUpdateConditionNodeChange();
			}
			this._checkmark_tick=document.createElement('div');
			this._checkmark_tick__img=document.createElement('img');
			this._checkmark_tick__img.className='ggskin ggskin_svg';
			this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.png');
			this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick__img['ondragstart']=function() { return false; };
			this._checkmark_tick.appendChild(this._checkmark_tick__img);
			this._checkmark_tick.ggId="checkmark_tick";
			this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick.ggVisible=true;
			this._checkmark_tick.className='ggskin ggskin_svg ';
			this._checkmark_tick.ggType='svg';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 2px;';
			hs+='position : absolute;';
			hs+='top : -6px;';
			hs+='visibility : inherit;';
			hs+='width : 20px;';
			this._checkmark_tick.setAttribute('style',hs);
			this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._checkmark_tick.ggUpdatePosition=function () {
			}
			this._checkmark.appendChild(this._checkmark_tick);
			this._hotspot_preview.appendChild(this._checkmark);
			this.__div.appendChild(this._hotspot_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 499px;';
			hs+='position : absolute;';
			hs+='top : 161px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				gyro.disable();
				me.skin._information.ggVisible = !me.skin._information.ggVisible;
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=((me.skin._information.ggVisible)&&(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity))?'inherit':'hidden';
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title__text.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body__text.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._screentint.ggVisible = !me.skin._screentint.ggVisible;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=((me.skin._screentint.ggVisible)&&(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity))?'inherit':'hidden';
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.png');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image__imgo=document.createElement('img');
			this._ht_info_image__imgo.className='ggskin ggskin_svg';
			this._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.png');
			this._ht_info_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_info_image__imgo['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__imgo);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggLeft=-18;
			this._ht_info_image.ggTop=-19;
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 28px;';
			hs+='left : -18px;';
			hs+='position : absolute;';
			hs+='top : -19px;';
			hs+='visibility : inherit;';
			hs+='width : 28px;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.onmouseover=function () {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
			}
			this._ht_info_image.onmouseout=function () {
				me._ht_info_image__img.style.visibility='inherit';
				me._ht_info_image__imgo.style.visibility='hidden';
			}
			this._ht_info_image.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_information.style[domTransition]='';
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 434px;';
			hs+='position : absolute;';
			hs+='top : 449px;';
			hs+='visibility : hidden;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin._popup_image.ggText=me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text ';
			this._hstext.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			this._hstext.setAttribute('style',hs);
			this._hstext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			me._hstext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext.ggCurrentLogicStateVisible = -1;
			this._hstext.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext.style[domTransition]='';
					if (me._hstext.ggCurrentLogicStateVisible == 0) {
						me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
						me._hstext.ggVisible=true;
					}
					else {
						me._hstext.style.visibility="hidden";
						me._hstext.ggVisible=false;
					}
				}
			}
			this._hstext.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._hstext);
			this._svg_1=document.createElement('div');
			this._svg_1__img=document.createElement('img');
			this._svg_1__img.className='ggskin ggskin_svg';
			this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.png');
			this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_1__img['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__img);
			this._svg_1.ggId="Svg 1";
			this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_1.ggVisible=true;
			this._svg_1.className='ggskin ggskin_svg ';
			this._svg_1.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 38px;';
			hs+='left : -19px;';
			hs+='position : absolute;';
			hs+='top : -19px;';
			hs+='visibility : inherit;';
			hs+='width : 38px;';
			this._svg_1.setAttribute('style',hs);
			this._svg_1.style[domTransform + 'Origin']='50% 50%';
			me._svg_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_marker_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_active=document.createElement('div');
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg ';
		this._marker_active.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_active.ggUpdatePosition=function () {
		}
		this._marker_active.ggNodeChangeMain=function() {
		}
		return this._marker_active;
	};
	function SkinElement_activenode_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._activenode=document.createElement('div');
		this._activenode__img=document.createElement('img');
		this._activenode__img.className='ggskin ggskin_image';
		this._activenode__img.setAttribute('src',basePath + 'images/activenode.png');
		this._activenode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._activenode__img.className='ggskin ggskin_image';
		this._activenode__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._activenode__img);
		this._activenode.appendChild(this._activenode__img);
		this._activenode.ggId="Activenode";
		this._activenode.ggParameter={ rx:0,ry:0,a:0,sx:1.25,sy:1.25 };
		this._activenode.ggVisible=true;
		this._activenode.className='ggskin ggskin_image ';
		this._activenode.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 92px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		this._activenode.setAttribute('style',hs);
		this._activenode.style[domTransform + 'Origin']='50% 50%';
		this._activenode.style[domTransform]=parameterToTransform(this._activenode.ggParameter);
		me._activenode.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._activenode.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._activenode.ggUpdatePosition=function () {
		}
		this._activenode.ggNodeChangeMain=function() {
		}
		return this._activenode;
	};
	function SkinElement_inactivenode_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._inactivenode=document.createElement('div');
		this._inactivenode__img=document.createElement('img');
		this._inactivenode__img.className='ggskin ggskin_button';
		this._inactivenode__img.setAttribute('src',basePath + 'images/inactivenode.png');
		this._inactivenode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._inactivenode__img.className='ggskin ggskin_button';
		this._inactivenode__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inactivenode__img);
		this._inactivenode.appendChild(this._inactivenode__img);
		this._inactivenode.ggId="Inactivenode";
		this._inactivenode.ggParameter={ rx:0,ry:0,a:0,sx:1.25,sy:1.25 };
		this._inactivenode.ggVisible=true;
		this._inactivenode.className='ggskin ggskin_button ';
		this._inactivenode.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 117px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		this._inactivenode.setAttribute('style',hs);
		this._inactivenode.style[domTransform + 'Origin']='50% 50%';
		this._inactivenode.style[domTransform]=parameterToTransform(this._inactivenode.ggParameter);
		me._inactivenode.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._inactivenode.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._inactivenode.onmouseover=function () {
			me._inactivenode__img.src=basePath + 'images/inactivenode__o.png';
		}
		this._inactivenode.onmouseout=function () {
			me._inactivenode__img.src=basePath + 'images/inactivenode.png';
		}
		this._inactivenode.ggUpdatePosition=function () {
		}
		this._inactivenode.ggNodeChangeMain=function() {
		}
		return this._inactivenode;
	};
	function SkinElement_marker_normal_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._marker_normal=document.createElement('div');
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg ';
		this._marker_normal.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_normal.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._marker_normal.ggUpdatePosition=function () {
		}
		this._marker_normal.ggNodeChangeMain=function() {
		}
		return this._marker_normal;
	};
	this.addSkin();
};