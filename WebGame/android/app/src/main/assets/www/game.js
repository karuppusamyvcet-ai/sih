(()=>{var td=Object.defineProperty;var ed=(i,t)=>{for(var e in t)td(i,e,{get:t[e],enumerable:!0})};var zc="170";var nd=0,Nl=1,id=2;var Yh=1,kc=2,Fn=3,ri=0,De=1,We=2,ni=0,$i=1,rn=2,Fl=3,Ol=4,sd=5,xi=100,rd=101,od=102,ad=103,cd=104,ld=200,hd=201,ud=202,dd=203,fa=204,pa=205,fd=206,pd=207,md=208,gd=209,xd=210,_d=211,yd=212,vd=213,Md=214,ma=0,ga=1,xa=2,Qi=3,_a=4,ya=5,va=6,Ma=7,$h=0,Sd=1,bd=2,ii=0,Ed=1,wd=2,Td=3,Hc=4,Ad=5,Rd=6,Cd=7;var Zh=300,ji=301,ts=302,Sa=303,ba=304,_o=306,Is=1e3,yi=1001,Ea=1002,fn=1003,Pd=1004;var js=1005;var Sn=1006,Po=1007;var vi=1008;var Vn=1009,Jh=1010,Kh=1011,Ls=1012,Vc=1013,Mi=1014,zn=1015,Xs=1016,Gc=1017,Wc=1018,es=1020,Qh=35902,jh=1021,tu=1022,dn=1023,eu=1024,nu=1025,Zi=1026,ns=1027,iu=1028,Xc=1029,su=1030,qc=1031;var Yc=1033,Lr=33776,Dr=33777,Ur=33778,Nr=33779,wa=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,Ia=37496,La=37808,Da=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,ka=37816,Ha=37817,Va=37818,Ga=37819,Wa=37820,Xa=37821,Fr=36492,qa=36494,Ya=36495,ru=36283,$a=36284,Za=36285,Ja=36286;var Br=2300,Ka=2301,Io=2302,Bl=2400,zl=2401,kl=2402;var Id=3200,Ld=3201;var ou=0,Dd=1,ei="",Re="srgb",cs="srgb-linear",yo="linear",de="srgb";var Ci=7680;var Hl=519,Ud=512,Nd=513,Fd=514,au=515,Od=516,Bd=517,zd=518,kd=519,Qa=35044;var Vl="300 es",kn=2e3,zr=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Or=Math.PI/180,kr=180/Math.PI;function si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Hd(i,t){return(i%t+t)%t}function Lo(i,t,e){return(1-e)*i+e*t}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],f=n[5],_=n[8],y=s[0],m=s[3],d=s[6],v=s[1],g=s[4],x=s[7],C=s[2],T=s[5],A=s[8];return r[0]=o*y+a*v+c*C,r[3]=o*m+a*g+c*T,r[6]=o*d+a*x+c*A,r[1]=l*y+h*v+u*C,r[4]=l*m+h*g+u*T,r[7]=l*d+h*x+u*A,r[2]=p*y+f*v+_*C,r[5]=p*m+f*g+_*T,r[8]=p*d+f*x+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,f=l*r-o*c,_=e*u+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Do=new qt;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=Ds("canvas");return i.style.display="block",i}var Gl={};function Ts(i){i in Gl||(Gl[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wl=[.64,.33,.3,.6,.15,.06],Xl=[.2126,.7152,.0722],ql=[.3127,.329],Yl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[cs]:{primaries:Wl,whitePoint:ql,transfer:yo,toXYZ:Yl,fromXYZ:$l,luminanceCoefficients:Xl,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:Wl,whitePoint:ql,transfer:de,toXYZ:Yl,fromXYZ:$l,luminanceCoefficients:Xl,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var Pi,ja=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ds("canvas")),Pi.width=t.width,Pi.height=t.height;let n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,Hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,Je=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yi,s=yi,r=Sn,o=vi,a=dn,c=Vn,l=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=si(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Zh;Je.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],f=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(l+1)/2,x=(f+1)/2,C=(d+1)/2,T=(h+p)/4,A=(u+y)/4,w=(_+m)/4;return g>x&&g>C?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=A/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=w/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-y)/v,this.z=(p-h)/v,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tc=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Hr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vr=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ec=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],f=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=y;return}if(u!==y||c!==p||l!==f||h!==_){let m=1-a,d=c*p+l*f+h*_+u*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let C=Math.sqrt(g),T=Math.atan2(C,d*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let x=a*v;if(c=c*m+p*x,l=l*m+f*x,h=h*m+_*x,u=u*m+y*x,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*f-l*p,t[e+1]=c*_+h*p+l*u-a*f,t[e+2]=l*_+h*f+a*p-c*u,t[e+3]=h*_-a*u-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*f*_,this._y=l*f*u-p*h*_,this._z=l*h*_+p*f*u,this._w=l*h*u-p*f*_;break;case"YXZ":this._x=p*h*u+l*f*_,this._y=l*f*u-p*h*_,this._z=l*h*_-p*f*u,this._w=l*h*u+p*f*_;break;case"ZXY":this._x=p*h*u-l*f*_,this._y=l*f*u+p*h*_,this._z=l*h*_+p*f*u,this._w=l*h*u-p*f*_;break;case"ZYX":this._x=p*h*u-l*f*_,this._y=l*f*u+p*h*_,this._z=l*h*_-p*f*u,this._w=l*h*u+p*f*_;break;case"YZX":this._x=p*h*u+l*f*_,this._y=l*f*u+p*h*_,this._z=l*h*_-p*f*u,this._w=l*h*u-p*f*_;break;case"XZY":this._x=p*h*u-l*f*_,this._y=l*f*u-p*h*_,this._z=l*h*_+p*f*u,this._w=l*h*u+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new I,Zl=new ai,Si=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),er.subVectors(this.max,xs),Ii.subVectors(t.a,xs),Li.subVectors(t.b,xs),Di.subVectors(t.c,xs),Zn.subVectors(Li,Ii),Jn.subVectors(Di,Li),hi.subVectors(Ii,Di);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-hi.y,hi.x,0];return!Fo(e,Ii,Li,Di,er)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Ii,Li,Di,er))?!1:(nr.crossVectors(Zn,Jn),e=[nr.x,nr.y,nr.z],Fo(e,Ii,Li,Di,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,tr=new Si,Ii=new I,Li=new I,Di=new I,Zn=new I,Jn=new I,hi=new I,xs=new I,er=new I,nr=new I,ui=new I;function Fo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);let a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $d=new Si,_s=new I,Oo=new I,bi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Oo)),this.expandByPoint(_s.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new I,Bo=new I,ir=new I,Kn=new I,zo=new I,sr=new I,ko=new I,Us=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Bo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=Kn.dot(this.direction),c=-Kn.dot(ir),l=Kn.lengthSq(),h=Math.abs(1-o*o),u,p,f,_;if(h>0)if(u=o*c-a,p=o*a-c,_=r*h,u>=0)if(p>=-_)if(p<=_){let y=1/h;u*=y,p*=y,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;else p<=-_?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l):p<=_?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bo).addScaledVector(ir,p),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){zo.subVectors(e,t),sr.subVectors(n,t),ko.crossVectors(zo,sr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let c=a*this.direction.dot(sr.crossVectors(Kn,sr));if(c<0)return null;let l=a*this.direction.dot(zo.cross(Kn));if(l<0||c+l>o)return null;let h=-a*Kn.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,f,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,f,_,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,f,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*u,_=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=p-y*l,e[9]=-a*c,e[2]=y-p*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,f=c*u,_=l*h,y=l*u;e[0]=p+y*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=y+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,f=c*u,_=l*h,y=l*u;e[0]=p-y*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,f=o*u,_=a*h,y=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=p*l+y,e[1]=c*u,e[5]=y*l+p,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=y-p*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=p-y*u}else if(t.order==="XZY"){let p=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+y,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=y*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Qn.crossVectors(n,je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Qn.crossVectors(n,je)),Qn.normalize(),rr.crossVectors(je,Qn),s[0]=Qn.x,s[4]=rr.x,s[8]=je.x,s[1]=Qn.y,s[5]=rr.y,s[9]=je.y,s[2]=Qn.z,s[6]=rr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],f=n[13],_=n[2],y=n[6],m=n[10],d=n[14],v=n[3],g=n[7],x=n[11],C=n[15],T=s[0],A=s[4],w=s[8],b=s[12],S=s[1],P=s[5],L=s[9],U=s[13],k=s[2],G=s[6],H=s[10],nt=s[14],V=s[3],ot=s[7],ct=s[11],gt=s[15];return r[0]=o*T+a*S+c*k+l*V,r[4]=o*A+a*P+c*G+l*ot,r[8]=o*w+a*L+c*H+l*ct,r[12]=o*b+a*U+c*nt+l*gt,r[1]=h*T+u*S+p*k+f*V,r[5]=h*A+u*P+p*G+f*ot,r[9]=h*w+u*L+p*H+f*ct,r[13]=h*b+u*U+p*nt+f*gt,r[2]=_*T+y*S+m*k+d*V,r[6]=_*A+y*P+m*G+d*ot,r[10]=_*w+y*L+m*H+d*ct,r[14]=_*b+y*U+m*nt+d*gt,r[3]=v*T+g*S+x*k+C*V,r[7]=v*A+g*P+x*G+C*ot,r[11]=v*w+g*L+x*H+C*ct,r[15]=v*b+g*U+x*nt+C*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],f=t[14],_=t[3],y=t[7],m=t[11],d=t[15];return _*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*f-n*c*f)+y*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],f=t[11],_=t[12],y=t[13],m=t[14],d=t[15],v=u*m*l-y*p*l+y*c*f-a*m*f-u*c*d+a*p*d,g=_*p*l-h*m*l-_*c*f+o*m*f+h*c*d-o*p*d,x=h*y*l-_*u*l+_*a*f-o*y*f-h*a*d+o*u*d,C=_*u*c-h*y*c-_*a*p+o*y*p+h*a*m-o*u*m,T=e*v+n*g+s*x+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=v*A,t[1]=(y*p*r-u*m*r-y*s*f+n*m*f+u*s*d-n*p*d)*A,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*d+n*c*d)*A,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*f-n*c*f)*A,t[4]=g*A,t[5]=(h*m*r-_*p*r+_*s*f-e*m*f-h*s*d+e*p*d)*A,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*d-e*c*d)*A,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*f+e*c*f)*A,t[8]=x*A,t[9]=(_*u*r-h*y*r-_*n*f+e*y*f+h*n*d-e*u*d)*A,t[10]=(o*y*r-_*a*r+_*n*l-e*y*l-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=C*A,t[13]=(h*y*s-_*u*s+_*n*p-e*y*p-h*n*m+e*u*m)*A,t[14]=(_*a*s-o*y*s-_*n*c+e*y*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,f=r*h,_=r*u,y=o*h,m=o*u,d=a*u,v=c*l,g=c*h,x=c*u,C=n.x,T=n.y,A=n.z;return s[0]=(1-(y+d))*C,s[1]=(f+x)*C,s[2]=(_-g)*C,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(p+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(_+g)*A,s[9]=(m-v)*A,s[10]=(1-(p+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let l=1/r,h=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),f,_;if(a===kn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,f=(n+s)*h,_,y;if(a===kn)_=(o+r)*u,y=-2*u;else if(a===zr)_=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ui=new I,hn=new ye,Zd=new I(0,0,0),Jd=new I(1,1,1),Qn=new I,rr=new I,je=new I,Jl=new ye,Kl=new ai,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,Ql=new I,Ni=new ai,Dn=new ye,or=new I,ys=new I,Qd=new I,jd=new ai,jl=new I(1,0,0),th=new I(0,1,0),eh=new I(0,0,1),nh={type:"added"},tf={type:"removed"},Fi={type:"childadded",child:null},Ho={type:"childremoved",child:null},Ie=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new bn,n=new ai,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new qt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ys,or,this.up):Dn.lookAt(or,ys,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new I,Un=new I,Vo=new I,Nn=new I,Oi=new I,Bi=new I,ih=new I,Go=new I,Wo=new I,Xo=new I,qo=new pe,Yo=new pe,$o=new pe,Bn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Un.subVectors(n,e),Vo.subVectors(t,e);let o=un.dot(un),a=un.dot(Un),c=un.dot(Vo),l=Un.dot(Un),h=Un.dot(Vo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(l*c-a*h)*p,_=(o*h-a*c)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qo.setScalar(0),Yo.setScalar(0),$o.setScalar(0),qo.fromBufferAttribute(t,e),Yo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Yo,r.y),o.addScaledVector($o,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Un.subVectors(t,e),un.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Oi.subVectors(s,n),Bi.subVectors(r,n),Go.subVectors(t,n);let c=Oi.dot(Go),l=Bi.dot(Go);if(c<=0&&l<=0)return e.copy(n);Wo.subVectors(t,s);let h=Oi.dot(Wo),u=Bi.dot(Wo);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Oi,o);Xo.subVectors(t,r);let f=Oi.dot(Xo),_=Bi.dot(Xo);if(_>=0&&f<=_)return e.copy(r);let y=f*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Bi,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return ih.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(ih,a);let d=1/(m+y+p);return o=y*d,a=p*d,e.copy(n).addScaledVector(Oi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Hd(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zo(o,r,t+1/3),this.g=Zo(o,r,t),this.b=Zo(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return se.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Oe(Ge.r*255,0,255))*65536+Math.round(Oe(Ge.g*255,0,255))*256+Math.round(Oe(Ge.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Re){se.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(ar);let n=Lo(jn.h,ar.h,e),s=Lo(jn.s,ar.s,e),r=Lo(jn.l,ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Yt;Yt.NAMES=lu;var ef=0,En=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=si(),this.name="",this.blending=$i,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Te=class extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new I,cr=new ut,Ye=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}};var Wr=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},nf=0,sn=new ye,Jo=new Ie,zi=new I,tn=new Si,vs=new Si,Fe=new I,Ce=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(tn.min,vs.min),tn.expandByPoint(Fe),Fe.addVectors(tn.max,vs.max),tn.expandByPoint(Fe)):(tn.expandByPoint(vs.min),tn.expandByPoint(vs.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(zi.fromBufferAttribute(t,l),Fe.add(zi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;let l=new I,h=new I,u=new I,p=new ut,f=new ut,_=new ut,y=new I,m=new I;function d(w,b,S){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),p.fromBufferAttribute(r,w),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(p),_.sub(p);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[w].add(y),a[b].add(y),a[S].add(y),c[w].add(m),c[b].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let w=0,b=v.length;w<b;++w){let S=v[w],P=S.start,L=S.count;for(let U=P,k=P+L;U<k;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let g=new I,x=new I,C=new I,T=new I;function A(w){C.fromBufferAttribute(s,w),T.copy(C);let b=a[w];g.copy(b),g.sub(C.multiplyScalar(C.dot(b))).normalize(),x.crossVectors(T,b);let P=x.dot(c[w])<0?-1:1;o.setXYZW(w,g.x,g.y,g.z,P)}for(let w=0,b=v.length;w<b;++w){let S=v[w],P=S.start,L=S.count;for(let U=P,k=P+L;U<k;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){let _=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),f=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let d=0;d<h;d++)p[_++]=l[f++]}return new Ye(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new ye,di=new Us,lr=new bi,rh=new I,hr=new I,ur=new I,dr=new I,Ko=new I,fr=new I,oh=new I,pr=new I,rt=class extends Ie{constructor(t=new Ce,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ko.fromBufferAttribute(u,t),o?fr.addScaledVector(Ko,h):fr.addScaledVector(Ko.sub(e),h))}e.add(fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(lr.containsPoint(di.origin)===!1&&(di.intersectSphere(lr,rh)===null||di.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(r).invert(),di.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let m=p[_],d=o[m.materialIndex],v=Math.max(m.start,f.start),g=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=g;x<C;x+=3){let T=a.getX(x),A=a.getX(x+1),w=a.getX(x+2);s=mr(this,d,t,n,l,h,u,T,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=_,d=y;m<d;m+=3){let v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);s=mr(this,o,t,n,l,h,u,v,g,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let m=p[_],d=o[m.materialIndex],v=Math.max(m.start,f.start),g=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=g;x<C;x+=3){let T=x,A=x+1,w=x+2;s=mr(this,d,t,n,l,h,u,T,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=_,d=y;m<d;m+=3){let v=m,g=m+1,x=m+2;s=mr(this,o,t,n,l,h,u,v,g,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sf(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ri,a),c===null)return null;pr.copy(a),pr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pr);return l<e.near||l>e.far?null:{distance:l,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,hr),i.getVertexPosition(c,ur),i.getVertexPosition(l,dr);let h=sf(i,t,e,n,hr,ur,dr,oh);if(h){let u=new I;Bn.getBarycoord(oh,hr,ur,dr,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(hr,ur,dr,p.normal),h.face=p,h.barycoord=u}return h}var ue=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function _(y,m,d,v,g,x,C,T,A,w,b){let S=x/A,P=C/w,L=x/2,U=C/2,k=T/2,G=A+1,H=w+1,nt=0,V=0,ot=new I;for(let ct=0;ct<H;ct++){let gt=ct*P-U;for(let Nt=0;Nt<G;Nt++){let Ut=Nt*S-L;ot[y]=Ut*v,ot[m]=gt*g,ot[d]=k,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[m]=0,ot[d]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Nt/A),u.push(1-ct/w),nt+=1}}for(let ct=0;ct<w;ct++)for(let gt=0;gt<A;gt++){let Nt=p+gt+G*ct,Ut=p+gt+G*(ct+1),Q=p+(gt+1)+G*(ct+1),st=p+(gt+1)+G*ct;c.push(Nt,Ut,st),c.push(Ut,Q,st),V+=6}a.addGroup(f,V,b),f+=V,p+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=is(i[e]);for(let s in n)t[s]=n[s]}return t}function rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var of={clone:is,merge:qe},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new I,ah=new ut,ch=new ut,ze=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,ah,ch),e.subVectors(ch,ah)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ki=-90,Hi=1,nc=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(ki,Hi,t,e);s.layers=this.layers,this.add(s);let r=new ze(ki,Hi,t,e);r.layers=this.layers,this.add(r);let o=new ze(ki,Hi,t,e);o.layers=this.layers,this.add(o);let a=new ze(ki,Hi,t,e);a.layers=this.layers,this.add(a);let c=new ze(ki,Hi,t,e);c.layers=this.layers,this.add(c);let l=new ze(ki,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yr=class extends Je{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ic=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ue(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ni});r.uniforms.tEquirect.value=e;let o=new rt(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Sn),new nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qo=new I,lf=new I,hf=new qt,On=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qo.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hf.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new bi,gr=new I,Ns=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],f=s[8],_=s[9],y=s[10],m=s[11],d=s[12],v=s[13],g=s[14],x=s[15];if(n[0].setComponents(c-r,p-l,m-f,x-d).normalize(),n[1].setComponents(c+r,p+l,m+f,x+d).normalize(),n[2].setComponents(c+o,p+h,m+_,x+v).normalize(),n[3].setComponents(c-o,p-h,m-_,x-v).normalize(),n[4].setComponents(c-a,p-u,m-y,x-g).normalize(),e===kn)n[5].setComponents(c+a,p+u,m+y,x+g).normalize();else if(e===zr)n[5].setComponents(a,u,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<u.length;f++){let _=u[p],y=u[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++p,u[p]=y)}u.length=p+1;for(let f=0,_=u.length;f<_;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ee=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,f=[],_=[],y=[],m=[];for(let d=0;d<h;d++){let v=d*p-o;for(let g=0;g<l;g++){let x=g*u-r;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let g=v+l*d,x=v+l*(d+1),C=v+1+l*(d+1),T=v+1+l*d;f.push(g,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:xf,aomap_fragment:_f,aomap_pars_fragment:yf,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:Qf,gradientmap_pars_fragment:jf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:cp,lights_physical_fragment:lp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:xp,map_fragment:_p,map_pars_fragment:yp,map_particle_fragment:vp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Ep,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:zp,packing:kp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:xm,depth_frag:_m,distanceRGBA_vert:ym,distanceRGBA_frag:vm,equirect_vert:Mm,equirect_frag:Sm,linedashed_vert:bm,linedashed_frag:Em,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:zm,points_frag:km,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Gm,sprite_frag:Wm},pt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},vn={basic:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([pt.points,pt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([pt.common,pt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([pt.sprite,pt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:qe([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:qe([pt.lights,pt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};vn.physical={uniforms:qe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var xr={r:0,b:0,g:0},pi=new bn,Xm=new ye;function qm(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,u=null,p=0,f=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?e:t).get(g)),g}function y(v){let g=!1,x=_(v);x===null?d(a,c):x&&x.isColor&&(d(x,1),g=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,g){let x=_(g);x&&(x.isCubeTexture||x.mapping===_o)?(h===void 0&&(h=new rt(new ue(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:is(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(g.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(pi)),h.material.toneMapped=se.getTransfer(x.colorSpace)!==de,(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new ee(2,2),new wn({name:"BackgroundMaterial",uniforms:is(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,g){v.getRGB(xr,hu(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),c=g,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:y,addToRenderList:m}}function Ym(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(S,P,L,U,k){let G=!1,H=u(U,L,P);r!==H&&(r=H,l(r.object)),G=f(S,U,L,k),G&&_(S,U,L,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,P,L,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,L){let U=L.wireframe===!0,k=n[S.id];k===void 0&&(k={},n[S.id]=k);let G=k[P.id];G===void 0&&(G={},k[P.id]=G);let H=G[U];return H===void 0&&(H=p(c()),G[U]=H),H}function p(S){let P=[],L=[],U=[];for(let k=0;k<e;k++)P[k]=0,L[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,P,L,U){let k=r.attributes,G=P.attributes,H=0,nt=L.getAttributes();for(let V in nt)if(nt[V].location>=0){let ct=k[V],gt=G[V];if(gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),ct===void 0||ct.attribute!==gt||gt&&ct.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function _(S,P,L,U){let k={},G=P.attributes,H=0,nt=L.getAttributes();for(let V in nt)if(nt[V].location>=0){let ct=G[V];ct===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));let gt={};gt.attribute=ct,ct&&ct.data&&(gt.data=ct.data),k[V]=gt,H++}r.attributes=k,r.attributesNum=H,r.index=U}function y(){let S=r.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){let L=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;L[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),k[S]!==P&&(i.vertexAttribDivisor(S,P),k[S]=P)}function v(){let S=r.newAttributes,P=r.enabledAttributes;for(let L=0,U=P.length;L<U;L++)P[L]!==S[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function g(S,P,L,U,k,G,H){H===!0?i.vertexAttribIPointer(S,P,L,k,G):i.vertexAttribPointer(S,P,L,U,k,G)}function x(S,P,L,U){y();let k=U.attributes,G=L.getAttributes(),H=P.defaultAttributeValues;for(let nt in G){let V=G[nt];if(V.location>=0){let ot=k[nt];if(ot===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let ct=ot.normalized,gt=ot.itemSize,Nt=t.get(ot);if(Nt===void 0)continue;let Ut=Nt.buffer,Q=Nt.type,st=Nt.bytesPerElement,dt=Q===i.INT||Q===i.UNSIGNED_INT||ot.gpuType===Vc;if(ot.isInterleavedBufferAttribute){let et=ot.data,Mt=et.stride,Lt=ot.offset;if(et.isInstancedInterleavedBuffer){for(let W=0;W<V.locationSize;W++)d(V.location+W,et.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let W=0;W<V.locationSize;W++)m(V.location+W);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let W=0;W<V.locationSize;W++)g(V.location+W,gt/V.locationSize,Q,ct,Mt*st,(Lt+gt/V.locationSize*W)*st,dt)}else{if(ot.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)d(V.location+et,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let et=0;et<V.locationSize;et++)g(V.location+et,gt/V.locationSize,Q,ct,gt*st,gt/V.locationSize*et*st,dt)}}else if(H!==void 0){let ct=H[nt];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(V.location,ct);break;case 3:i.vertexAttrib3fv(V.location,ct);break;case 4:i.vertexAttrib4fv(V.location,ct);break;default:i.vertexAttrib1fv(V.location,ct)}}}}v()}function C(){w();for(let S in n){let P=n[S];for(let L in P){let U=P[L];for(let k in U)h(U[k].object),delete U[k];delete P[L]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let L in P){let U=P[L];for(let k in U)h(U[k].object),delete U[k];delete P[L]}delete n[S.id]}function A(S){for(let P in n){let L=n[P];if(L[S.id]===void 0)continue;let U=L[S.id];for(let k in U)h(U[k].object),delete U[k];delete L[S.id]}}function w(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function $m(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function c(l,h,u,p){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*p[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let w=A===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!w)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function Jm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new On,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,g=v*4,x=d.clippingState||null;c.value=x,x=h(_,p,g,f);for(let C=0;C!==g;++C)x[C]=e[C];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let d=f+y*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=f;g!==y;++g,x+=4)o.copy(u[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Km(i){let t=new WeakMap;function e(o,a){return a===Sa?o.mapping=ji:a===ba&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sa||a===ba)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ic(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $r=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,lh=[.125,.215,.35,.446,.526,.582],_i=20,jo=new $r,hh=new Yt,ta=null,ea=0,na=0,ia=!1,gi=(1+Math.sqrt(5))/2,Vi=1/gi,uh=[new I(-gi,Vi,0),new I(gi,Vi,0),new I(-Vi,0,gi),new I(Vi,0,gi),new I(0,gi,-Vi),new I(0,gi,Vi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Xs,format:dn,colorSpace:cs,depthBuffer:!1},s=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){let a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(hh),h.toneMapping=ii,h.autoClear=!1;let f=new Te({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),_=new rt(new ue,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(hh),y=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let g=this._cubeSize;_r(s,v*g,d>2?g:0,g,g),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);let d=[],v=0;for(let A=0;A<_i;++A){let w=A/y,b=Math.exp(-w*w/2);d.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:g}=this;p.dTheta.value=_,p.mipInt.value=g-n;let x=this._sizeLods[s],C=3*x*(s>g-Yi?s-g+Yi:0),T=4*(this._cubeSize-x);_r(e,C,T,3*x,2*x),c.setRenderTarget(e),c.render(u,jo)}};function Qm(i){let t=[],e=[],n=[],s=i,r=i-Yi+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Yi?c=lh[o-i+Yi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*f),g=new Float32Array(m*_*f),x=new Float32Array(d*_*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,w=T>2?0:-1,b=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];v.set(b,y*_*T),g.set(p,m*_*T);let S=[T,T,T,T,T,T];x.set(S,d*_*T)}let C=new Ce;C.setAttribute("position",new Ye(v,y)),C.setAttribute("uv",new Ye(g,m)),C.setAttribute("faceIndex",new Ye(x,d)),t.push(C),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(i,t,e){let n=new Gn(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){let n=new Float32Array(_i),s=new I(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function fh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ph(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Sa||c===ba,h=c===ji||c===ts;if(l||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ss(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ss(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n0(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let y=p.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let _ in p)t.update(p[_],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let y=f[_];for(let m=0,d=y.length;m<d;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let p=[],f=u.index,_=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let g=0,x=v.length;g<x;g+=3){let C=v[g+0],T=v[g+1],A=v[g+2];p.push(C,T,T,A,A,C)}}else if(_!==void 0){let v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){let C=g+0,T=g+1,A=g+2;p.push(C,T,T,A,A,C)}}else return;let m=new(cu(p)?Xr:Wr)(p,1);m.version=y;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function i0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*o,_),e.update(f,n,_))}function h(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];e.update(m,n,1)}function u(p,f,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/o,f[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=f[v]*y[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function r0(i,t,e){let n=new WeakMap,s=new pe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],g=0;f===!0&&(g=1),_===!0&&(g=2),y===!0&&(g=3);let x=a.attributes.position.count*g,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*C*4*u),A=new Vr(T,x,C,u);A.type=zn,A.needsUpdate=!0;let w=g*4;for(let S=0;S<u;S++){let P=m[S],L=d[S],U=v[S],k=x*C*4*S;for(let G=0;G<P.count;G++){let H=G*w;f===!0&&(s.fromBufferAttribute(P,G),T[k+H+0]=s.x,T[k+H+1]=s.y,T[k+H+2]=s.z,T[k+H+3]=0),_===!0&&(s.fromBufferAttribute(L,G),T[k+H+4]=s.x,T[k+H+5]=s.y,T[k+H+6]=s.z,T[k+H+7]=0),y===!0&&(s.fromBufferAttribute(U,G),T[k+H+8]=s.x,T[k+H+9]=s.y,T[k+H+10]=s.z,T[k+H+11]=U.itemSize===4?s.w:1)}}p={count:u,texture:A,size:new ut(x,C)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function o0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Zr=class extends Je{constructor(t,e,n,s,r,o,a,c,l,h=Zi){if(h!==Zi&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Mi),n===void 0&&h===ns&&(n=es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},du=new Je,mh=new Zr(1,1),fu=new Vr,pu=new ec,mu=new Yr,gh=[],xh=[],_h=new Float32Array(16),yh=new Float32Array(9),vh=new Float32Array(4);function ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function u0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),Ne(e,n)}}function d0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),Ne(e,n)}}function f0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Ne(e,n)}}function p0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function _0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=au,r=mh):r=du,e.setTexture2D(t||r,s)}function b0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pu,s)}function E0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mu,s)}function w0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fu,s)}function T0(i){switch(i){case 5126:return a0;case 35664:return c0;case 35665:return l0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return y0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function A0(i,t){i.uniform1fv(this.addr,t)}function R0(i,t){let e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function C0(i,t){let e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function P0(i,t){let e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function I0(i,t){let e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L0(i,t){let e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D0(i,t){let e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U0(i,t){i.uniform1iv(this.addr,t)}function N0(i,t){i.uniform2iv(this.addr,t)}function F0(i,t){i.uniform3iv(this.addr,t)}function O0(i,t){i.uniform4iv(this.addr,t)}function B0(i,t){i.uniform1uiv(this.addr,t)}function z0(i,t){i.uniform2uiv(this.addr,t)}function k0(i,t){i.uniform3uiv(this.addr,t)}function H0(i,t){i.uniform4uiv(this.addr,t)}function V0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||du,r[o])}function G0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pu,r[o])}function W0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mu,r[o])}function X0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fu,r[o])}function q0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}},oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;function Mh(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){let n=i.name,s=n.length;for(sa.lastIndex=0;;){let r=sa.exec(n),o=sa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mh(e,l===void 0?new sc(a,i,t):new rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new oc(a),Mh(e,u)),e=u}}}var Ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Y0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Sh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $0=37297,Z0=0;function J0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bh=new qt;function K0(i){se._getMatrix(bh,se.workingColorSpace,i);let t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+J0(i.getShaderSource(t),o)}else return s}function Q0(i,t){let e=K0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case Ed:e="Linear";break;case wd:e="Reinhard";break;case Td:e="Cineon";break;case Hc:e="ACESFilmic";break;case Rd:e="AgX";break;case Cd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yr=new I;function tg(){se.getLuminanceCoefficients(yr);let i=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function ng(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(sg,og)}var rg=new Map;function og(i,t){let e=Zt[t];if(e===void 0){let n=rg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(ag,cg)}function cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case ts:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Sd:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function fg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=lg(e),l=hg(e),h=ug(e),u=dg(e),p=fg(e),f=eg(e),_=ng(r),y=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ii?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=ac(o),o=wh(o,e),o=Th(o,e),a=ac(a),a=wh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let g=v+m+o,x=v+d+a,C=Sh(s,s.VERTEX_SHADER,g),T=Sh(s,s.FRAGMENT_SHADER,x);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y).trim(),U=s.getShaderInfoLog(C).trim(),k=s.getShaderInfoLog(T).trim(),G=!0,H=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{let nt=Eh(s,C,"vertex"),V=Eh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+nt+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||k==="")&&(H=!1);H&&(P.diagnostics={runnable:G,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:d}})}s.deleteShader(C),s.deleteShader(T),w=new Ki(s,y),b=ig(s,y)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,$0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var mg=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lc(t),e.set(t,n)),n}},lc=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(i,t,e,n,s,r,o){let a=new Gr,c=new cc,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,L,U){let k=L.fog,G=U.geometry,H=b.isMeshStandardMaterial?L.environment:null,nt=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=nt&&nt.mapping===_o?nt.image.height:null,ot=_[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=ct!==void 0?ct.length:0,Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let Ut,Q,st,dt;if(ot){let he=vn[ot];Ut=he.vertexShader,Q=he.fragmentShader}else Ut=b.vertexShader,Q=b.fragmentShader,c.update(b),st=c.getVertexShaderID(b),dt=c.getFragmentShaderID(b);let et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,W=U.isBatchedMesh===!0,tt=!!b.map,at=!!b.matcap,Dt=!!nt,N=!!b.aoMap,te=!!b.lightMap,Tt=!!b.bumpMap,At=!!b.normalMap,mt=!!b.displacementMap,ae=!!b.emissiveMap,O=!!b.metalnessMap,E=!!b.roughnessMap,M=b.anisotropy>0,D=b.clearcoat>0,Y=b.dispersion>0,J=b.iridescence>0,Z=b.sheen>0,St=b.transmission>0,ft=M&&!!b.anisotropyMap,bt=D&&!!b.clearcoatMap,ie=D&&!!b.clearcoatNormalMap,lt=D&&!!b.clearcoatRoughnessMap,Et=J&&!!b.iridescenceMap,Ft=J&&!!b.iridescenceThicknessMap,kt=Z&&!!b.sheenColorMap,wt=Z&&!!b.sheenRoughnessMap,ne=!!b.specularMap,$t=!!b.specularColorMap,xe=!!b.specularIntensityMap,F=St&&!!b.transmissionMap,xt=St&&!!b.thicknessMap,j=!!b.gradientMap,it=!!b.alphaMap,vt=b.alphaTest>0,_t=!!b.alphaHash,Wt=!!b.extensions,Ae=ii;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let He={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:Ut,fragmentShader:Q,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:W,batchingColor:W&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:cs,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:at,envMap:Dt,envMapMode:Dt&&nt.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:te,bumpMap:Tt,normalMap:At,displacementMap:p&&mt,emissiveMap:ae,normalMapObjectSpace:At&&b.normalMapType===Dd,normalMapTangentSpace:At&&b.normalMapType===ou,metalnessMap:O,roughnessMap:E,anisotropy:M,anisotropyMap:ft,clearcoat:D,clearcoatMap:bt,clearcoatNormalMap:ie,clearcoatRoughnessMap:lt,dispersion:Y,iridescence:J,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:ne,specularColorMap:$t,specularIntensityMap:xe,transmission:St,transmissionMap:F,thicknessMap:xt,gradientMap:j,opaque:b.transparent===!1&&b.blending===$i&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:_t,combine:b.combine,mapUv:tt&&y(b.map.channel),aoMapUv:N&&y(b.aoMap.channel),lightMapUv:te&&y(b.lightMap.channel),bumpMapUv:Tt&&y(b.bumpMap.channel),normalMapUv:At&&y(b.normalMap.channel),displacementMapUv:mt&&y(b.displacementMap.channel),emissiveMapUv:ae&&y(b.emissiveMap.channel),metalnessMapUv:O&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:ft&&y(b.anisotropyMap.channel),clearcoatMapUv:bt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&y(b.sheenRoughnessMap.channel),specularMapUv:ne&&y(b.specularMap.channel),specularColorMapUv:$t&&y(b.specularColorMap.channel),specularIntensityMapUv:xe&&y(b.specularIntensityMap.channel),transmissionMapUv:F&&y(b.transmissionMap.channel),thicknessMapUv:xt&&y(b.thicknessMap.channel),alphaMapUv:it&&y(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(At||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(tt||it),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===We,flipSided:b.side===De,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(S,b),g(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function g(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let S=_[b.type],P;if(S){let L=vn[S];P=of.clone(L.uniforms)}else P=b.uniforms;return P}function C(b,S){let P;for(let L=0,U=h.length;L<U;L++){let k=h[L];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new pg(i,S,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:w}}function xg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,_,y,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=y,d.group=m),t++,d}function a(u,p,f,_,y,m){let d=o(u,p,f,_,y,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,_,y,m){let d=o(u,p,f,_,y,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(p||Ch),s.length>1&&s.sort(p||Ch)}function h(){for(let u=t,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function yg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sg=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){let t=new vg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ye,o=new ye;function a(l){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,y=0,m=0,d=0,v=0,g=0,x=0,C=0,T=0,A=0;l.sort(bg);for(let b=0,S=l.length;b<S;b++){let P=l[b],L=P.color,U=P.intensity,k=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*U,u+=L.g*U,p+=L.b*U;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],U);A++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,V=e.get(P);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(U),H.distance=k,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[y]=H;let nt=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,nt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=nt.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=G,x++}y++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(L).multiplyScalar(U),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let nt=P.shadow,V=e.get(P);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,V.shadowCameraNear=nt.camera.near,V.shadowCameraFar=nt.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=P.shadow.matrix,g++}n.point[_]=H,_++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(U),H.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let w=n.hash;(w.directionalLength!==f||w.pointLength!==_||w.spotLength!==y||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==v||w.numPointShadows!==g||w.numSpotShadows!==x||w.numSpotMaps!==C||w.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,w.directionalLength=f,w.pointLength=_,w.spotLength=y,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=v,w.numPointShadows=g,w.numSpotShadows=x,w.numSpotMaps=C,w.numLightProbes=A,n.version=Sg++)}function c(l,h){let u=0,p=0,f=0,_=0,y=0,m=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){let g=l[d];if(g.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(g.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(g.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(g.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),p++}else if(g.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Ih(i){let t=new Eg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ih(i),t.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hc=class extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uc=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rg(i,t,e){let n=new Ns,s=new ut,r=new ut,o=new pe,a=new hc({depthPacking:Ld}),c=new uc,l={},h=e.maxTextureSize,u={[ri]:De,[De]:ri,[We]:We},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ce;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let d=this.type;this.render=function(T,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ni),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=d!==Fn&&this.type===Fn,k=d===Fn&&this.type!==Fn;for(let G=0,H=T.length;G<H;G++){let nt=T[G],V=nt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ot=V.getFrameExtents();if(s.multiply(ot),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,V.mapSize.y=r.y)),V.map===null||U===!0||k===!0){let gt=this.type!==Fn?{minFilter:fn,magFilter:fn}:{};V.map!==null&&V.map.dispose(),V.map=new Gn(s.x,s.y,gt),V.map.texture.name=nt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ct=V.getViewportCount();for(let gt=0;gt<ct;gt++){let Nt=V.getViewport(gt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),L.viewport(o),V.updateMatrices(nt,gt),n=V.getFrustum(),x(A,w,V.camera,nt,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&v(V,w),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function v(T,A){let w=t.update(y);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,w,p,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,w,f,y,null)}function g(T,A,w,b){let S=null,P=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=w.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=S.uuid,U=A.uuid,k=l[L];k===void 0&&(k={},l[L]=k);let G=k[U];G===void 0&&(G=S.clone(),k[U]=G,A.addEventListener("dispose",C)),S=G}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Fn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=i.properties.get(S);L.light=w}return S}function x(T,A,w,b,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let U=t.update(T),k=T.material;if(Array.isArray(k)){let G=U.groups;for(let H=0,nt=G.length;H<nt;H++){let V=G[H],ot=k[V.materialIndex];if(ot&&ot.visible){let ct=g(T,ot,b,S);T.onBeforeShadow(i,T,A,w,U,ct,V),i.renderBufferDirect(w,null,U,ct,T,V),T.onAfterShadow(i,T,A,w,U,ct,V)}}}else if(k.visible){let G=g(T,k,b,S);T.onBeforeShadow(i,T,A,w,U,G,null),i.renderBufferDirect(w,null,U,G,T,null),T.onAfterShadow(i,T,A,w,U,G,null)}}let L=T.children;for(let U=0,k=L.length;U<k;U++)x(L[U],A,w,b,S)}function C(T){T.target.removeEventListener("dispose",C);for(let w in l){let b=l[w],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var Cg={[ma]:ga,[xa]:va,[_a]:Ma,[Qi]:ya,[ga]:ma,[va]:xa,[Ma]:_a,[ya]:Qi};function Pg(i,t){function e(){let F=!1,xt=new pe,j=null,it=new pe(0,0,0,0);return{setMask:function(vt){j!==vt&&!F&&(i.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){F=vt},setClear:function(vt,_t,Wt,Ae,He){He===!0&&(vt*=Ae,_t*=Ae,Wt*=Ae),xt.set(vt,_t,Wt,Ae),it.equals(xt)===!1&&(i.clearColor(vt,_t,Wt,Ae),it.copy(xt))},reset:function(){F=!1,j=null,it.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,j=null,it=null,vt=null;return{setReversed:function(_t){if(xt!==_t){let Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=vt;vt=null,this.setClear(Ae)}xt=_t},getReversed:function(){return xt},setTest:function(_t){_t?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(_t){j!==_t&&!F&&(i.depthMask(_t),j=_t)},setFunc:function(_t){if(xt&&(_t=Cg[_t]),it!==_t){switch(_t){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=_t}},setLocked:function(_t){F=_t},setClear:function(_t){vt!==_t&&(xt&&(_t=1-_t),i.clearDepth(_t),vt=_t)},reset:function(){F=!1,j=null,it=null,vt=null,xt=!1}}}function s(){let F=!1,xt=null,j=null,it=null,vt=null,_t=null,Wt=null,Ae=null,He=null;return{setTest:function(he){F||(he?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(he){xt!==he&&!F&&(i.stencilMask(he),xt=he)},setFunc:function(he,an,Cn){(j!==he||it!==an||vt!==Cn)&&(i.stencilFunc(he,an,Cn),j=he,it=an,vt=Cn)},setOp:function(he,an,Cn){(_t!==he||Wt!==an||Ae!==Cn)&&(i.stencilOp(he,an,Cn),_t=he,Wt=an,Ae=Cn)},setLocked:function(he){F=he},setClear:function(he){He!==he&&(i.clearStencil(he),He=he)},reset:function(){F=!1,xt=null,j=null,it=null,vt=null,_t=null,Wt=null,Ae=null,He=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},p=new WeakMap,f=[],_=null,y=!1,m=null,d=null,v=null,g=null,x=null,C=null,T=null,A=new Yt(0,0,0),w=0,b=!1,S=null,P=null,L=null,U=null,k=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=nt>=2);let ot=null,ct={},gt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Ut=new pe().fromArray(gt),Q=new pe().fromArray(Nt);function st(F,xt,j,it){let vt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(F,_t),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<j;Wt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(xt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return _t}let dt={};dt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Qi),Tt(!1),At(Nl),et(i.CULL_FACE),N(ni);function et(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Lt(F,xt){return u[F]!==xt?(i.bindFramebuffer(F,xt),u[F]=xt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function W(F,xt){let j=f,it=!1;if(F){j=p.get(xt),j===void 0&&(j=[],p.set(xt,j));let vt=F.textures;if(j.length!==vt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Wt=vt.length;_t<Wt;_t++)j[_t]=i.COLOR_ATTACHMENT0+_t;j.length=vt.length,it=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,it=!0);it&&i.drawBuffers(j)}function tt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let at={[xi]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};at[ad]=i.MIN,at[cd]=i.MAX;let Dt={[ld]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[xd]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[fd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[_d]:i.CONSTANT_COLOR,[yd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[Md]:i.ONE_MINUS_CONSTANT_ALPHA};function N(F,xt,j,it,vt,_t,Wt,Ae,He,he){if(F===ni){y===!0&&(Mt(i.BLEND),y=!1);return}if(y===!1&&(et(i.BLEND),y=!0),F!==sd){if(F!==m||he!==b){if((d!==xi||x!==xi)&&(i.blendEquation(i.FUNC_ADD),d=xi,x=xi),he)switch(F){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,g=null,C=null,T=null,A.set(0,0,0),w=0,m=F,b=he}return}vt=vt||xt,_t=_t||j,Wt=Wt||it,(xt!==d||vt!==x)&&(i.blendEquationSeparate(at[xt],at[vt]),d=xt,x=vt),(j!==v||it!==g||_t!==C||Wt!==T)&&(i.blendFuncSeparate(Dt[j],Dt[it],Dt[_t],Dt[Wt]),v=j,g=it,C=_t,T=Wt),(Ae.equals(A)===!1||He!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,He),A.copy(Ae),w=He),m=F,b=!1}function te(F,xt){F.side===We?Mt(i.CULL_FACE):et(i.CULL_FACE);let j=F.side===De;xt&&(j=!j),Tt(j),F.blending===$i&&F.transparent===!1?N(ni):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let it=F.stencilWrite;a.setTest(it),it&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function At(F){F!==nd?(et(i.CULL_FACE),F!==P&&(F===Nl?i.cullFace(i.BACK):F===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=F}function mt(F){F!==L&&(H&&i.lineWidth(F),L=F)}function ae(F,xt,j){F?(et(i.POLYGON_OFFSET_FILL),(U!==xt||k!==j)&&(i.polygonOffset(xt,j),U=xt,k=j)):Mt(i.POLYGON_OFFSET_FILL)}function O(F){F?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function E(F){F===void 0&&(F=i.TEXTURE0+G-1),ot!==F&&(i.activeTexture(F),ot=F)}function M(F,xt,j){j===void 0&&(ot===null?j=i.TEXTURE0+G-1:j=ot);let it=ct[j];it===void 0&&(it={type:void 0,texture:void 0},ct[j]=it),(it.type!==F||it.texture!==xt)&&(ot!==j&&(i.activeTexture(j),ot=j),i.bindTexture(F,xt||dt[F]),it.type=F,it.texture=xt)}function D(){let F=ct[ot];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(F){Ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function wt(F){Q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function ne(F,xt){let j=l.get(xt);j===void 0&&(j=new WeakMap,l.set(xt,j));let it=j.get(F);it===void 0&&(it=i.getUniformBlockIndex(xt,F.name),j.set(F,it))}function $t(F,xt){let it=l.get(xt).get(F);c.get(xt)!==it&&(i.uniformBlockBinding(xt,it,F.__bindingPointIndex),c.set(xt,it))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ct={},u={},p=new WeakMap,f=[],_=null,y=!1,m=null,d=null,v=null,g=null,x=null,C=null,T=null,A=new Yt(0,0,0),w=0,b=!1,S=null,P=null,L=null,U=null,k=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Mt,bindFramebuffer:Lt,drawBuffers:W,useProgram:tt,setBlending:N,setMaterial:te,setFlipSided:Tt,setCullFace:At,setLineWidth:mt,setPolygonOffset:ae,setScissorTest:O,activeTexture:E,bindTexture:M,unbindTexture:D,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:Et,texImage3D:Ft,updateUBOMapping:ne,uniformBlockBinding:$t,texStorage2D:ie,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:bt,scissor:kt,viewport:wt,reset:xe}}function Lh(i,t,e,n){let s=Ig(n);switch(e){case jh:return i*t;case eu:return i*t;case nu:return i*t*2;case iu:return i*t/s.components*s.byteLength;case Xc:return i*t/s.components*s.byteLength;case su:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case tu:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Yc:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ru:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case Vn:case Jh:return{byteLength:1,components:1};case Ls:case Kh:case Xs:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Mi:case Vc:case zn:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,M){return f?new OffscreenCanvas(E,M):Ds("canvas")}function y(E,M,D){let Y=1,J=O(E);if((J.width>D||J.height>D)&&(Y=D/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor(Y*J.width),St=Math.floor(Y*J.height);u===void 0&&(u=_(Z,St));let ft=M?_(Z,St):u;return ft.width=Z,ft.height=St,ft.getContext("2d").drawImage(E,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+St+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(E,M,D,Y,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=M;if(M===i.RED&&(D===i.FLOAT&&(Z=i.R32F),D===i.HALF_FLOAT&&(Z=i.R16F),D===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.R8UI),D===i.UNSIGNED_SHORT&&(Z=i.R16UI),D===i.UNSIGNED_INT&&(Z=i.R32UI),D===i.BYTE&&(Z=i.R8I),D===i.SHORT&&(Z=i.R16I),D===i.INT&&(Z=i.R32I)),M===i.RG&&(D===i.FLOAT&&(Z=i.RG32F),D===i.HALF_FLOAT&&(Z=i.RG16F),D===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RG8UI),D===i.UNSIGNED_SHORT&&(Z=i.RG16UI),D===i.UNSIGNED_INT&&(Z=i.RG32UI),D===i.BYTE&&(Z=i.RG8I),D===i.SHORT&&(Z=i.RG16I),D===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),D===i.UNSIGNED_INT&&(Z=i.RGB32UI),D===i.BYTE&&(Z=i.RGB8I),D===i.SHORT&&(Z=i.RGB16I),D===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),D===i.UNSIGNED_INT&&(Z=i.RGBA32UI),D===i.BYTE&&(Z=i.RGBA8I),D===i.SHORT&&(Z=i.RGBA16I),D===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){let St=J?yo:se.getTransfer(Y);D===i.FLOAT&&(Z=i.RGBA32F),D===i.HALF_FLOAT&&(Z=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Z=St===de?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(E,M){let D;return E?M===null||M===Mi||M===es?D=i.DEPTH24_STENCIL8:M===zn?D=i.DEPTH32F_STENCIL8:M===Ls&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===es?D=i.DEPTH_COMPONENT24:M===zn?D=i.DEPTH_COMPONENT32F:M===Ls&&(D=i.DEPTH_COMPONENT16),D}function C(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==fn&&E.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){let M=E.target;M.removeEventListener("dispose",T),w(M),M.isVideoTexture&&h.delete(M)}function A(E){let M=E.target;M.removeEventListener("dispose",A),S(M)}function w(E){let M=n.get(E);if(M.__webglInit===void 0)return;let D=E.source,Y=p.get(D);if(Y){let J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys(Y).length===0&&p.delete(D)}n.remove(E)}function b(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let D=E.source,Y=p.get(D);delete Y[M.__cacheKey],o.memory.textures--}function S(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=E.textures;for(let Y=0,J=D.length;Y<J;Y++){let Z=n.get(D[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(D[Y])}n.remove(E)}let P=0;function L(){P=0}function U(){let E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function k(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function G(E,M){let D=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){let Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(D,E,M);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function H(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){Q(D,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function nt(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){Q(D,E,M);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function V(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){st(D,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}let ot={[Is]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},ct={[fn]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},gt={[Ud]:i.NEVER,[kd]:i.ALWAYS,[Nd]:i.LESS,[au]:i.LEQUAL,[Fd]:i.EQUAL,[zd]:i.GEQUAL,[Od]:i.GREATER,[Bd]:i.NOTEQUAL};function Nt(E,M){if(M.type===zn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Po||M.magFilter===js||M.magFilter===vi||M.minFilter===Sn||M.minFilter===Po||M.minFilter===js||M.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ot[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ct[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==js&&M.minFilter!==vi||M.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(E,M){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));let Y=M.source,J=p.get(Y);J===void 0&&(J={},p.set(Y,J));let Z=k(M);if(Z!==E.__cacheKey){J[Z]===void 0&&(J[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),J[Z].usedTimes++;let St=J[E.__cacheKey];St!==void 0&&(J[E.__cacheKey].usedTimes--,St.usedTimes===0&&b(M)),E.__cacheKey=Z,E.__webglTexture=J[Z].texture}return D}function Q(E,M,D){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let J=Ut(E,M),Z=M.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+D);let St=n.get(Z);if(Z.version!==St.__version||J===!0){e.activeTexture(i.TEXTURE0+D);let ft=se.getPrimaries(se.workingColorSpace),bt=M.colorSpace===ei?null:se.getPrimaries(M.colorSpace),ie=M.colorSpace===ei||ft===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let lt=y(M.image,!1,s.maxTextureSize);lt=ae(M,lt);let Et=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type),kt=g(M.internalFormat,Et,Ft,M.colorSpace,M.isVideoTexture);Nt(Y,M);let wt,ne=M.mipmaps,$t=M.isVideoTexture!==!0,xe=St.__version===void 0||J===!0,F=Z.dataReady,xt=C(M,lt);if(M.isDepthTexture)kt=x(M.format===ns,M.type),xe&&($t?e.texStorage2D(i.TEXTURE_2D,1,kt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,kt,lt.width,lt.height,0,Et,Ft,null));else if(M.isDataTexture)if(ne.length>0){$t&&xe&&e.texStorage2D(i.TEXTURE_2D,xt,kt,ne[0].width,ne[0].height);for(let j=0,it=ne.length;j<it;j++)wt=ne[j],$t?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,Et,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,j,kt,wt.width,wt.height,0,Et,Ft,wt.data);M.generateMipmaps=!1}else $t?(xe&&e.texStorage2D(i.TEXTURE_2D,xt,kt,lt.width,lt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Ft,lt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,lt.width,lt.height,0,Et,Ft,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,kt,ne[0].width,ne[0].height,lt.depth);for(let j=0,it=ne.length;j<it;j++)if(wt=ne[j],M.format!==dn)if(Et!==null)if($t){if(F)if(M.layerUpdates.size>0){let vt=Lh(wt.width,wt.height,M.format,M.type);for(let _t of M.layerUpdates){let Wt=wt.data.subarray(_t*vt/wt.data.BYTES_PER_ELEMENT,(_t+1)*vt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,_t,wt.width,wt.height,1,Et,Wt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,wt.width,wt.height,lt.depth,Et,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,kt,wt.width,wt.height,lt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,wt.width,wt.height,lt.depth,Et,Ft,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,kt,wt.width,wt.height,lt.depth,0,Et,Ft,wt.data)}else{$t&&xe&&e.texStorage2D(i.TEXTURE_2D,xt,kt,ne[0].width,ne[0].height);for(let j=0,it=ne.length;j<it;j++)wt=ne[j],M.format!==dn?Et!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,wt.width,wt.height,Et,Ft,wt.data):e.texImage2D(i.TEXTURE_2D,j,kt,wt.width,wt.height,0,Et,Ft,wt.data)}else if(M.isDataArrayTexture)if($t){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,kt,lt.width,lt.height,lt.depth),F)if(M.layerUpdates.size>0){let j=Lh(lt.width,lt.height,M.format,M.type);for(let it of M.layerUpdates){let vt=lt.data.subarray(it*j/lt.data.BYTES_PER_ELEMENT,(it+1)*j/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Et,Ft,vt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ft,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,lt.width,lt.height,lt.depth,0,Et,Ft,lt.data);else if(M.isData3DTexture)$t?(xe&&e.texStorage3D(i.TEXTURE_3D,xt,kt,lt.width,lt.height,lt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ft,lt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,lt.width,lt.height,lt.depth,0,Et,Ft,lt.data);else if(M.isFramebufferTexture){if(xe)if($t)e.texStorage2D(i.TEXTURE_2D,xt,kt,lt.width,lt.height);else{let j=lt.width,it=lt.height;for(let vt=0;vt<xt;vt++)e.texImage2D(i.TEXTURE_2D,vt,kt,j,it,0,Et,Ft,null),j>>=1,it>>=1}}else if(ne.length>0){if($t&&xe){let j=O(ne[0]);e.texStorage2D(i.TEXTURE_2D,xt,kt,j.width,j.height)}for(let j=0,it=ne.length;j<it;j++)wt=ne[j],$t?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Et,Ft,wt):e.texImage2D(i.TEXTURE_2D,j,kt,Et,Ft,wt);M.generateMipmaps=!1}else if($t){if(xe){let j=O(lt);e.texStorage2D(i.TEXTURE_2D,xt,kt,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,lt)}else e.texImage2D(i.TEXTURE_2D,0,kt,Et,Ft,lt);m(M)&&d(Y),St.__version=Z.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function st(E,M,D){if(M.image.length!==6)return;let Y=Ut(E,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+D);let Z=n.get(J);if(J.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+D);let St=se.getPrimaries(se.workingColorSpace),ft=M.colorSpace===ei?null:se.getPrimaries(M.colorSpace),bt=M.colorSpace===ei||St===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let ie=M.isCompressedTexture||M.image[0].isCompressedTexture,lt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!ie&&!lt?Et[it]=y(M.image[it],!0,s.maxCubemapSize):Et[it]=lt?M.image[it].image:M.image[it],Et[it]=ae(M,Et[it]);let Ft=Et[0],kt=r.convert(M.format,M.colorSpace),wt=r.convert(M.type),ne=g(M.internalFormat,kt,wt,M.colorSpace),$t=M.isVideoTexture!==!0,xe=Z.__version===void 0||Y===!0,F=J.dataReady,xt=C(M,Ft);Nt(i.TEXTURE_CUBE_MAP,M);let j;if(ie){$t&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ne,Ft.width,Ft.height);for(let it=0;it<6;it++){j=Et[it].mipmaps;for(let vt=0;vt<j.length;vt++){let _t=j[vt];M.format!==dn?kt!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,kt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,ne,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,kt,wt,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,ne,_t.width,_t.height,0,kt,wt,_t.data)}}}else{if(j=M.mipmaps,$t&&xe){j.length>0&&xt++;let it=O(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ne,it.width,it.height)}for(let it=0;it<6;it++)if(lt){$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,kt,wt,Et[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ne,Et[it].width,Et[it].height,0,kt,wt,Et[it].data);for(let vt=0;vt<j.length;vt++){let Wt=j[vt].image[it].image;$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Wt.width,Wt.height,kt,wt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,ne,Wt.width,Wt.height,0,kt,wt,Wt.data)}}else{$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,kt,wt,Et[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ne,kt,wt,Et[it]);for(let vt=0;vt<j.length;vt++){let _t=j[vt];$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,kt,wt,_t.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,ne,kt,wt,_t.image[it])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Z.__version=J.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function dt(E,M,D,Y,J,Z){let St=r.convert(D.format,D.colorSpace),ft=r.convert(D.type),bt=g(D.internalFormat,St,ft,D.colorSpace),ie=n.get(M),lt=n.get(D);if(lt.__renderTarget=M,!ie.__hasExternalTextures){let Et=Math.max(1,M.width>>Z),Ft=Math.max(1,M.height>>Z);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,bt,Et,Ft,M.depth,0,St,ft,null):e.texImage2D(J,Z,bt,Et,Ft,0,St,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,lt.__webglTexture,0,Tt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,lt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(E,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,Z=x(M.stencilBuffer,J),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Tt(M);At(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,M.width,M.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,E)}else{let Y=M.textures;for(let J=0;J<Y.length;J++){let Z=Y[J],St=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),bt=g(Z.internalFormat,St,ft,Z.colorSpace),ie=Tt(M);D&&At(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,bt,M.width,M.height):At(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,bt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,bt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let J=Y.__webglTexture,Z=Tt(M);if(M.depthTexture.format===Zi)At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===ns)At(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(E){let M=n.get(E),D=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,E)}else if(D){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),et(M.__webglDepthbuffer[Y],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),et(M.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(E,M,D){let Y=n.get(E);M!==void 0&&dt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Lt(E)}function tt(E){let M=E.texture,D=n.get(E),Y=n.get(M);E.addEventListener("dispose",A);let J=E.textures,Z=E.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++),Z){D.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[ft]=[];for(let bt=0;bt<M.mipmaps.length;bt++)D.__webglFramebuffer[ft][bt]=i.createFramebuffer()}else D.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)D.__webglFramebuffer[ft]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(St)for(let ft=0,bt=J.length;ft<bt;ft++){let ie=n.get(J[ft]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&At(E)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ft=0;ft<J.length;ft++){let bt=J[ft];D.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ft]);let ie=r.convert(bt.format,bt.colorSpace),lt=r.convert(bt.type),Et=g(bt.internalFormat,ie,lt,bt.colorSpace,E.isXRRenderTarget===!0),Ft=Tt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,D.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),et(D.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)dt(D.__webglFramebuffer[ft][bt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,bt);else dt(D.__webglFramebuffer[ft],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ft=0,bt=J.length;ft<bt;ft++){let ie=J[ft],lt=n.get(ie);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Nt(i.TEXTURE_2D,ie),dt(D.__webglFramebuffer,E,ie,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(ie)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),Nt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)dt(D.__webglFramebuffer[bt],E,M,i.COLOR_ATTACHMENT0,ft,bt);else dt(D.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&d(ft),e.unbindTexture()}E.depthBuffer&&Lt(E)}function at(E){let M=E.textures;for(let D=0,Y=M.length;D<Y;D++){let J=M[D];if(m(J)){let Z=v(E),St=n.get(J).__webglTexture;e.bindTexture(Z,St),d(Z),e.unbindTexture()}}}let Dt=[],N=[];function te(E){if(E.samples>0){if(At(E)===!1){let M=E.textures,D=E.width,Y=E.height,J=i.COLOR_BUFFER_BIT,Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(E),ft=M.length>1;if(ft)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);let ie=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,D,Y,0,0,D,Y,J,i.NEAREST),c===!0&&(Dt.length=0,N.length=0,Dt.push(i.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Dt.push(Z),N.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);let ie=n.get(M[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Tt(E){return Math.min(s.maxSamples,E.samples)}function At(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function ae(E,M){let D=E.colorSpace,Y=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==cs&&D!==ei&&(se.getTransfer(D)===de?(Y!==dn||J!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}function O(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=V,this.rebindTextures=W,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=At}function Dg(i,t){function e(n,s=ei){let r,o=se.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.BYTE;if(n===Kh)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===tu)return i.RGB;if(n===dn)return i.RGBA;if(n===eu)return i.LUMINANCE;if(n===nu)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===iu)return i.RED;if(n===Xc)return i.RED_INTEGER;if(n===su)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ur||n===Nr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ru||n===$a||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dc=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ot=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pc=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,f=null,_=null,y=new fc,m=e.getContextAttributes(),d=null,v=null,g=[],x=[],C=new ut,T=null,A=new ze;A.viewport=new pe;let w=new ze;w.viewport=new pe;let b=[A,w],S=new dc,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=g[Q];return st===void 0&&(st=new Rs,g[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=g[Q];return st===void 0&&(st=new Rs,g[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=g[Q];return st===void 0&&(st=new Rs,g[Q]=st),st.getHandSpace()};function U(Q){let st=x.indexOf(Q.inputSource);if(st===-1)return;let dt=g[st];dt!==void 0&&(dt.update(Q.inputSource,Q.frame,l||o),dt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let Q=0;Q<g.length;Q++){let st=x[Q];st!==null&&(x[Q]=null,g[Q].disconnect(st))}P=null,L=null,y.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,v=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Gn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,dt=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ns:Zi,dt=m.stencil?es:Mi);let Mt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Mt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Gn(p.textureWidth,p.textureHeight,{format:dn,type:Vn,depthTexture:new Zr(p.textureWidth,p.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(Q){for(let st=0;st<Q.removed.length;st++){let dt=Q.removed[st],et=x.indexOf(dt);et>=0&&(x[et]=null,g[et].disconnect(dt))}for(let st=0;st<Q.added.length;st++){let dt=Q.added[st],et=x.indexOf(dt);if(et===-1){for(let Lt=0;Lt<g.length;Lt++)if(Lt>=x.length){x.push(dt),et=Lt;break}else if(x[Lt]===null){x[Lt]=dt,et=Lt;break}if(et===-1)break}let Mt=g[et];Mt&&Mt.connect(dt)}}let H=new I,nt=new I;function V(Q,st,dt){H.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(dt.matrixWorld);let et=H.distanceTo(nt),Mt=st.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,W=Mt[14]/(Mt[10]-1),tt=Mt[14]/(Mt[10]+1),at=(Mt[9]+1)/Mt[5],Dt=(Mt[9]-1)/Mt[5],N=(Mt[8]-1)/Mt[0],te=(Lt[8]+1)/Lt[0],Tt=W*N,At=W*te,mt=et/(-N+te),ae=mt*-N;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Mt[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let O=W+mt,E=tt+mt,M=Tt-ae,D=At+(et-ae),Y=at*tt/E*O,J=Dt*tt/E*O;Q.projectionMatrix.makePerspective(M,D,Y,J,O,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ot(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let st=Q.near,dt=Q.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),S.near=w.near=A.near=st,S.far=w.far=A.far=dt,(P!==S.near||L!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,L=S.far),A.layers.mask=Q.layers.mask|2,w.layers.mask=Q.layers.mask|4,S.layers.mask=A.layers.mask|w.layers.mask;let et=Q.parent,Mt=S.cameras;ot(S,et);for(let Lt=0;Lt<Mt.length;Lt++)ot(Mt[Lt],et);Mt.length===2?V(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),ct(Q,S,et)};function ct(Q,st,dt){dt===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(dt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let gt=null;function Nt(Q,st){if(h=st.getViewerPose(l||o),_=st,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let et=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let Lt=0;Lt<dt.length;Lt++){let W=dt[Lt],tt=null;if(f!==null)tt=f.getViewport(W);else{let Dt=u.getViewSubImage(p,W);tt=Dt.viewport,Lt===0&&(t.setRenderTargetTextures(v,Dt.colorTexture,p.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(v))}let at=b[Lt];at===void 0&&(at=new ze,at.layers.enable(Lt),at.viewport=new pe,b[Lt]=at),at.matrix.fromArray(W.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(W.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(tt.x,tt.y,tt.width,tt.height),Lt===0&&(S.matrix.copy(at.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(at)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let Lt=u.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(t,Lt,s.renderState)}}for(let dt=0;dt<g.length;dt++){let et=x[dt],Mt=g[dt];et!==null&&Mt!==void 0&&Mt.update(et,st,l||o)}gt&&gt(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}let Ut=new uu;Ut.setAnimationLoop(Nt),this.setAnimationLoop=function(Q){gt=Q},this.dispose=function(){}}},mi=new bn,Og=new ye;function Bg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,hu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),g=v.envMap,x=v.envMapRotation;g&&(m.envMap.value=g,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(mi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,g){let x=g.program;n.uniformBlockBinding(v,x)}function l(v,g){let x=s[v.id];x===void 0&&(_(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));let C=g.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(p(v),r[v.id]=T)}function h(v){let g=u();v.__bindingPointIndex=g;let x=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let g=s[v.id],x=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let T=0,A=x.length;T<A;T++){let w=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,S=w.length;b<S;b++){let P=w[b];if(f(P,T,b,C)===!0){let L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value],k=0;for(let G=0;G<U.length;G++){let H=U[G],nt=y(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+k,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,g,x,C){let T=v.value,A=g+"_"+x;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let w=C[A];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return C[A]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function _(v){let g=v.uniforms,x=0,C=16;for(let A=0,w=g.length;A<w;A++){let b=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,P=b.length;S<P;S++){let L=b[S],U=Array.isArray(L.value)?L.value:[L.value];for(let k=0,G=U.length;k<G;k++){let H=U[k],nt=y(H),V=x%C,ot=V%nt.boundary,ct=V+ot;x+=ot,ct!==0&&C-ct<nt.storage&&(x+=C-ct),L.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=nt.storage}}}let T=x%C;return T>0&&(x+=C-T),v.__size=x,v.__cache={},this}function y(v){let g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){let g=v.target;g.removeEventListener("dispose",m);let x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Jr=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,v=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=ii,this.toneMappingExposure=1;let x=this,C=!1,T=0,A=0,w=null,b=-1,S=null,P=new pe,L=new pe,U=null,k=new Yt(0),G=0,H=e.width,nt=e.height,V=1,ot=null,ct=null,gt=new pe(0,0,H,nt),Nt=new pe(0,0,H,nt),Ut=!1,Q=new Ns,st=!1,dt=!1,et=new ye,Mt=new ye,Lt=new I,W=new pe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function Dt(){return w===null?V:1}let N=n;function te(R,B){return e.getContext(R,B)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),N===null){let B="webgl2";if(N=te(B,R),N===null)throw te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Tt,At,mt,ae,O,E,M,D,Y,J,Z,St,ft,bt,ie,lt,Et,Ft,kt,wt,ne,$t,xe,F;function xt(){Tt=new e0(N),Tt.init(),$t=new Dg(N,Tt),At=new Zm(N,Tt,t,$t),mt=new Pg(N,Tt),At.reverseDepthBuffer&&p&&mt.buffers.depth.setReversed(!0),ae=new s0(N),O=new xg,E=new Lg(N,Tt,mt,O,At,$t,ae),M=new Km(x),D=new t0(x),Y=new uf(N),xe=new Ym(N,Y),J=new n0(N,Y,ae,xe),Z=new o0(N,J,Y,ae),kt=new r0(N,At,E),lt=new Jm(O),St=new gg(x,M,D,Tt,At,xe,lt),ft=new Bg(x,O),bt=new yg,ie=new wg(Tt),Ft=new qm(x,M,D,mt,Z,f,c),Et=new Rg(x,Z,At),F=new zg(N,ae,At,mt),wt=new $m(N,Tt,ae),ne=new i0(N,Tt,ae),ae.programs=St.programs,x.capabilities=At,x.extensions=Tt,x.properties=O,x.renderLists=bt,x.shadowMap=Et,x.state=mt,x.info=ae}xt();let j=new pc(x,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(H,nt,!1))},this.getSize=function(R){return R.set(H,nt)},this.setSize=function(R,B,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,nt=B,e.width=Math.floor(R*V),e.height=Math.floor(B*V),X===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(H*V,nt*V).floor()},this.setDrawingBufferSize=function(R,B,X){H=R,nt=B,V=X,e.width=Math.floor(R*X),e.height=Math.floor(B*X),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(gt)},this.setViewport=function(R,B,X,q){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,B,X,q),mt.viewport(P.copy(gt).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Nt)},this.setScissor=function(R,B,X,q){R.isVector4?Nt.set(R.x,R.y,R.z,R.w):Nt.set(R,B,X,q),mt.scissor(L.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(R){mt.setScissorTest(Ut=R)},this.setOpaqueSort=function(R){ot=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(R=!0,B=!0,X=!0){let q=0;if(R){let z=!1;if(w!==null){let ht=w.texture.format;z=ht===Yc||ht===qc||ht===Xc}if(z){let ht=w.texture.type,yt=ht===Vn||ht===Mi||ht===Ls||ht===es||ht===Gc||ht===Wc,Rt=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Vt=Rt.r,Xt=Rt.g,Pt=Rt.b;yt?(_[0]=Vt,_[1]=Xt,_[2]=Pt,_[3]=Ct,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=Vt,y[1]=Xt,y[2]=Pt,y[3]=Ct,N.clearBufferiv(N.COLOR,0,y))}else q|=N.COLOR_BUFFER_BIT}B&&(q|=N.DEPTH_BUFFER_BIT),X&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),bt.dispose(),ie.dispose(),O.dispose(),M.dispose(),D.dispose(),Z.dispose(),xe.dispose(),F.dispose(),St.dispose(),j.dispose(),j.removeEventListener("sessionstart",Al),j.removeEventListener("sessionend",Rl),li.stop()};function it(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=ae.autoReset,B=Et.enabled,X=Et.autoUpdate,q=Et.needsUpdate,z=Et.type;xt(),ae.autoReset=R,Et.enabled=B,Et.autoUpdate=X,Et.needsUpdate=q,Et.type=z}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){let B=R.target;B.removeEventListener("dispose",Wt),Ae(B)}function Ae(R){He(R),O.remove(R)}function He(R){let B=O.get(R).programs;B!==void 0&&(B.forEach(function(X){St.releaseProgram(X)}),R.isShaderMaterial&&St.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,X,q,z,ht){B===null&&(B=tt);let yt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=Ku(R,B,X,q,z);mt.setMaterial(q,yt);let Ct=X.index,Vt=1;if(q.wireframe===!0){if(Ct=J.getWireframeAttribute(X),Ct===void 0)return;Vt=2}let Xt=X.drawRange,Pt=X.attributes.position,re=Xt.start*Vt,_e=(Xt.start+Xt.count)*Vt;ht!==null&&(re=Math.max(re,ht.start*Vt),_e=Math.min(_e,(ht.start+ht.count)*Vt)),Ct!==null?(re=Math.max(re,0),_e=Math.min(_e,Ct.count)):Pt!=null&&(re=Math.max(re,0),_e=Math.min(_e,Pt.count));let ve=_e-re;if(ve<0||ve===1/0)return;xe.setup(z,q,Rt,X,Ct);let Ze,ce=wt;if(Ct!==null&&(Ze=Y.get(Ct),ce=ne,ce.setIndex(Ze)),z.isMesh)q.wireframe===!0?(mt.setLineWidth(q.wireframeLinewidth*Dt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(z.isLine){let It=q.linewidth;It===void 0&&(It=1),mt.setLineWidth(It*Dt()),z.isLineSegments?ce.setMode(N.LINES):z.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else z.isPoints?ce.setMode(N.POINTS):z.isSprite&&ce.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let It=z._multiDrawStarts,Pn=z._multiDrawCounts,le=z._multiDrawCount,cn=Ct?Y.get(Ct).bytesPerElement:1,Ri=O.get(q).currentProgram.getUniforms();for(let Qe=0;Qe<le;Qe++)Ri.setValue(N,"_gl_DrawID",Qe),ce.render(It[Qe]/cn,Pn[Qe])}else if(z.isInstancedMesh)ce.renderInstances(re,ve,z.count);else if(X.isInstancedBufferGeometry){let It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pn=Math.min(X.instanceCount,It);ce.renderInstances(re,ve,Pn)}else ce.render(re,ve)};function he(R,B,X){R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=De,R.needsUpdate=!0,Qs(R,B,X),R.side=ri,R.needsUpdate=!0,Qs(R,B,X),R.side=We):Qs(R,B,X)}this.compile=function(R,B,X=null){X===null&&(X=R),d=ie.get(X),d.init(B),g.push(d),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),R!==X&&R.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let q=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){let Rt=ht[yt];he(Rt,X,z),q.add(Rt)}else he(ht,X,z),q.add(ht)}),g.pop(),d=null,q},this.compileAsync=function(R,B,X=null){let q=this.compile(R,B,X);return new Promise(z=>{function ht(){if(q.forEach(function(yt){O.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){z(R);return}setTimeout(ht,10)}Tt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let an=null;function Cn(R){an&&an(R)}function Al(){li.stop()}function Rl(){li.start()}let li=new uu;li.setAnimationLoop(Cn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(R){an=R,j.setAnimationLoop(R),R===null?li.stop():li.start()},j.addEventListener("sessionstart",Al),j.addEventListener("sessionend",Rl),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,w),d=ie.get(R,g.length),d.init(B),g.push(d),Mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Mt),dt=this.localClippingEnabled,st=lt.init(this.clippingPlanes,dt),m=bt.get(R,v.length),m.init(),v.push(m),j.enabled===!0&&j.isPresenting===!0){let ht=x.xr.getDepthSensingMesh();ht!==null&&Co(ht,B,-1/0,x.sortObjects)}Co(R,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,ct),at=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,at&&Ft.addToRenderList(m,R),this.info.render.frame++,st===!0&&lt.beginShadows();let X=d.state.shadowsArray;Et.render(X,R,B),st===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(d.setupLights(),B.isArrayCamera){let ht=B.cameras;if(z.length>0)for(let yt=0,Rt=ht.length;yt<Rt;yt++){let Ct=ht[yt];Pl(q,z,R,Ct)}at&&Ft.render(R);for(let yt=0,Rt=ht.length;yt<Rt;yt++){let Ct=ht[yt];Cl(m,R,Ct,Ct.viewport)}}else z.length>0&&Pl(q,z,R,B),at&&Ft.render(R),Cl(m,R,B);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(x,R,B),xe.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?(d=g[g.length-1],st===!0&&lt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Co(R,B,X,q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){q&&W.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);let yt=Z.update(R),Rt=R.material;Rt.visible&&m.push(R,yt,Rt,X,W.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){let yt=Z.update(R),Rt=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),W.copy(R.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),W.copy(yt.boundingSphere.center)),W.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Rt)){let Ct=yt.groups;for(let Vt=0,Xt=Ct.length;Vt<Xt;Vt++){let Pt=Ct[Vt],re=Rt[Pt.materialIndex];re&&re.visible&&m.push(R,yt,re,X,W.z,Pt)}}else Rt.visible&&m.push(R,yt,Rt,X,W.z,null)}}let ht=R.children;for(let yt=0,Rt=ht.length;yt<Rt;yt++)Co(ht[yt],B,X,q)}function Cl(R,B,X,q){let z=R.opaque,ht=R.transmissive,yt=R.transparent;d.setupLightsView(X),st===!0&&lt.setGlobalState(x.clippingPlanes,X),q&&mt.viewport(P.copy(q)),z.length>0&&Ks(z,B,X),ht.length>0&&Ks(ht,B,X),yt.length>0&&Ks(yt,B,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Pl(R,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Gn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Xs:Vn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let ht=d.state.transmissionRenderTarget[q.id],yt=q.viewport||P;ht.setSize(yt.z,yt.w);let Rt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),at&&Ft.render(X);let Ct=x.toneMapping;x.toneMapping=ii;let Vt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),st===!0&&lt.setGlobalState(x.clippingPlanes,q),Ks(R,X,q),E.updateMultisampleRenderTarget(ht),E.updateRenderTargetMipmap(ht),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pt=0,re=B.length;Pt<re;Pt++){let _e=B[Pt],ve=_e.object,Ze=_e.geometry,ce=_e.material,It=_e.group;if(ce.side===We&&ve.layers.test(q.layers)){let Pn=ce.side;ce.side=De,ce.needsUpdate=!0,Il(ve,X,q,Ze,ce,It),ce.side=Pn,ce.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(ht),E.updateRenderTargetMipmap(ht))}x.setRenderTarget(Rt),x.setClearColor(k,G),Vt!==void 0&&(q.viewport=Vt),x.toneMapping=Ct}function Ks(R,B,X){let q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ht=R.length;z<ht;z++){let yt=R[z],Rt=yt.object,Ct=yt.geometry,Vt=q===null?yt.material:q,Xt=yt.group;Rt.layers.test(X.layers)&&Il(Rt,B,X,Ct,Vt,Xt)}}function Il(R,B,X,q,z,ht){R.onBeforeRender(x,B,X,q,z,ht),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(x,B,X,q,R,ht),z.transparent===!0&&z.side===We&&z.forceSinglePass===!1?(z.side=De,z.needsUpdate=!0,x.renderBufferDirect(X,B,q,z,R,ht),z.side=ri,z.needsUpdate=!0,x.renderBufferDirect(X,B,q,z,R,ht),z.side=We):x.renderBufferDirect(X,B,q,z,R,ht),R.onAfterRender(x,B,X,q,z,ht)}function Qs(R,B,X){B.isScene!==!0&&(B=tt);let q=O.get(R),z=d.state.lights,ht=d.state.shadowsArray,yt=z.state.version,Rt=St.getParameters(R,z.state,ht,B,X),Ct=St.getProgramCacheKey(Rt),Vt=q.programs;q.environment=R.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(R.isMeshStandardMaterial?D:M).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",Wt),Vt=new Map,q.programs=Vt);let Xt=Vt.get(Ct);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===yt)return Dl(R,Rt),Xt}else Rt.uniforms=St.getUniforms(R),R.onBeforeCompile(Rt,x),Xt=St.acquireProgram(Rt,Ct),Vt.set(Ct,Xt),q.uniforms=Rt.uniforms;let Pt=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pt.clippingPlanes=lt.uniform),Dl(R,Rt),q.needsLights=ju(R),q.lightsStateVersion=yt,q.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function Ll(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=Ki.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Dl(R,B){let X=O.get(R);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ku(R,B,X,q,z){B.isScene!==!0&&(B=tt),E.resetTextureUnits();let ht=B.fog,yt=q.isMeshStandardMaterial?B.environment:null,Rt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cs,Ct=(q.isMeshStandardMaterial?D:M).get(q.envMap||yt),Vt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color,ve=ii;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=x.toneMapping);let Ze=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=Ze!==void 0?Ze.length:0,It=O.get(q),Pn=d.state.lights;if(st===!0&&(dt===!0||R!==S)){let nn=R===S&&q.id===b;lt.setState(q,R,nn)}let le=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Pn.state.version||It.outputColorSpace!==Rt||z.isBatchedMesh&&It.batching===!1||!z.isBatchedMesh&&It.batching===!0||z.isBatchedMesh&&It.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&It.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&It.instancing===!1||!z.isInstancedMesh&&It.instancing===!0||z.isSkinnedMesh&&It.skinning===!1||!z.isSkinnedMesh&&It.skinning===!0||z.isInstancedMesh&&It.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&It.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&It.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&It.instancingMorph===!1&&z.morphTexture!==null||It.envMap!==Ct||q.fog===!0&&It.fog!==ht||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==Xt||It.morphTargets!==Pt||It.morphNormals!==re||It.morphColors!==_e||It.toneMapping!==ve||It.morphTargetsCount!==ce)&&(le=!0):(le=!0,It.__version=q.version);let cn=It.currentProgram;le===!0&&(cn=Qs(q,B,z));let Ri=!1,Qe=!1,ms=!1,Me=cn.getUniforms(),yn=It.uniforms;if(mt.useProgram(cn.program)&&(Ri=!0,Qe=!0,ms=!0),q.id!==b&&(b=q.id,Qe=!0),Ri||S!==R){mt.buffers.depth.getReversed()?(et.copy(R.projectionMatrix),Wd(et),Xd(et),Me.setValue(N,"projectionMatrix",et)):Me.setValue(N,"projectionMatrix",R.projectionMatrix),Me.setValue(N,"viewMatrix",R.matrixWorldInverse);let Yn=Me.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,Lt.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&Me.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Me.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Qe=!0,ms=!0)}if(z.isSkinnedMesh){Me.setOptional(N,z,"bindMatrix"),Me.setOptional(N,z,"bindMatrixInverse");let nn=z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Me.setValue(N,"boneTexture",nn.boneTexture,E))}z.isBatchedMesh&&(Me.setOptional(N,z,"batchingTexture"),Me.setValue(N,"batchingTexture",z._matricesTexture,E),Me.setOptional(N,z,"batchingIdTexture"),Me.setValue(N,"batchingIdTexture",z._indirectTexture,E),Me.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(N,"batchingColorTexture",z._colorsTexture,E));let gs=X.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&kt.update(z,X,cn),(Qe||It.receiveShadow!==z.receiveShadow)&&(It.receiveShadow=z.receiveShadow,Me.setValue(N,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yn.envMap.value=Ct,yn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),Qe&&(Me.setValue(N,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Qu(yn,ms),ht&&q.fog===!0&&ft.refreshFogUniforms(yn,ht),ft.refreshMaterialUniforms(yn,q,V,nt,d.state.transmissionRenderTarget[R.id]),Ki.upload(N,Ll(It),yn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ki.upload(N,Ll(It),yn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Me.setValue(N,"center",z.center),Me.setValue(N,"modelViewMatrix",z.modelViewMatrix),Me.setValue(N,"normalMatrix",z.normalMatrix),Me.setValue(N,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let nn=q.uniformsGroups;for(let Yn=0,$n=nn.length;Yn<$n;Yn++){let Ul=nn[Yn];F.update(Ul,cn),F.bind(Ul,cn)}}return cn}function Qu(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ju(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,B,X){O.get(R.texture).__webglTexture=B,O.get(R.depthTexture).__webglTexture=X;let q=O.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){let X=O.get(R);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,X=0){w=R,T=B,A=X;let q=!0,z=null,ht=!1,yt=!1;if(R){let Ct=O.get(R);if(Ct.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Ct.__hasExternalTextures)E.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Pt=R.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&O.has(Pt)&&(R.width!==Pt.image.width||R.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}let Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let Xt=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?z=Xt[B][X]:z=Xt[B],ht=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?z=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?z=Xt[X]:z=Xt,P.copy(R.viewport),L.copy(R.scissor),U=R.scissorTest}else P.copy(gt).multiplyScalar(V).floor(),L.copy(Nt).multiplyScalar(V).floor(),U=Ut;if(mt.bindFramebuffer(N.FRAMEBUFFER,z)&&q&&mt.drawBuffers(R,z),mt.viewport(P),mt.scissor(L),mt.setScissorTest(U),ht){let Ct=O.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,X)}else if(yt){let Ct=O.get(R.texture),Vt=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,Vt)}b=-1},this.readRenderTargetPixels=function(R,B,X,q,z,ht,yt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){mt.bindFramebuffer(N.FRAMEBUFFER,Rt);try{let Ct=R.texture,Vt=Ct.format,Xt=Ct.type;if(!At.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-q&&X>=0&&X<=R.height-z&&N.readPixels(B,X,q,z,$t.convert(Vt),$t.convert(Xt),ht)}finally{let Ct=w!==null?O.get(w).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(R,B,X,q,z,ht,yt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){let Ct=R.texture,Vt=Ct.format,Xt=Ct.type;if(!At.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=R.width-q&&X>=0&&X<=R.height-z){mt.bindFramebuffer(N.FRAMEBUFFER,Rt);let Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,ht.byteLength,N.STREAM_READ),N.readPixels(B,X,q,z,$t.convert(Vt),$t.convert(Xt),0);let re=w!==null?O.get(w).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,re);let _e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gd(N,_e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ht),N.deleteBuffer(Pt),N.deleteSync(_e),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,B=null,X=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,R=arguments[1]);let q=Math.pow(2,-X),z=Math.floor(R.image.width*q),ht=Math.floor(R.image.height*q),yt=B!==null?B.x:0,Rt=B!==null?B.y:0;E.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,yt,Rt,z,ht),mt.unbindTexture()},this.copyTextureToTexture=function(R,B,X=null,q=null,z=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let ht,yt,Rt,Ct,Vt,Xt,Pt,re,_e,ve=R.isCompressedTexture?R.mipmaps[z]:R.image;X!==null?(ht=X.max.x-X.min.x,yt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Vt=X.min.y,Xt=X.isBox3?X.min.z:0):(ht=ve.width,yt=ve.height,Rt=ve.depth||1,Ct=0,Vt=0,Xt=0),q!==null?(Pt=q.x,re=q.y,_e=q.z):(Pt=0,re=0,_e=0);let Ze=$t.convert(B.format),ce=$t.convert(B.type),It;B.isData3DTexture?(E.setTexture3D(B,0),It=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),It=N.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),It=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let Pn=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ri=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xt);let ms=R.isDataArrayTexture||R.isData3DTexture,Me=B.isDataArrayTexture||B.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let yn=O.get(R),gs=O.get(B),nn=O.get(yn.__renderTarget),Yn=O.get(gs.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let $n=0;$n<Rt;$n++)ms&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(R).__webglTexture,z,Xt+$n),R.isDepthTexture?(Me&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(B).__webglTexture,z,_e+$n),N.blitFramebuffer(Ct,Vt,ht,yt,Pt,re,ht,yt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Me?N.copyTexSubImage3D(It,z,Pt,re,_e+$n,Ct,Vt,ht,yt):N.copyTexSubImage2D(It,z,Pt,re,_e+$n,Ct,Vt,ht,yt);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(It,z,Pt,re,_e,ht,yt,Rt,Ze,ce,ve.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(It,z,Pt,re,_e,ht,yt,Rt,Ze,ve.data):N.texSubImage3D(It,z,Pt,re,_e,ht,yt,Rt,Ze,ce,ve):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Pt,re,ht,yt,Ze,ce,ve.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Pt,re,ve.width,ve.height,Ze,ve.data):N.texSubImage2D(N.TEXTURE_2D,z,Pt,re,ht,yt,Ze,ce,ve);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),z===0&&B.generateMipmaps&&N.generateMipmap(It),mt.unbindTexture()},this.copyTextureToTexture3D=function(R,B,X=null,q=null,z=0){return R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,R=arguments[2],B=arguments[3],z=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,X,q,z)},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){T=0,A=0,w=null,mt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}},Kr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var rs=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},mc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new I,Qr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fs=class extends En{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gi,Ms=new I,Wi=new I,Xi=new I,qi=new ut,Ss=new ut,gu=new ye,vr=new I,bs=new I,Mr=new I,Dh=new ut,ra=new ut,Uh=new ut,jr=class extends Ie{constructor(t=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mc(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Qr(n,3,0,!1)),Gi.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Sr(vr.set(-.5,-.5,0),Xi,o,Wi,s,r),Sr(bs.set(.5,-.5,0),Xi,o,Wi,s,r),Sr(Mr.set(.5,.5,0),Xi,o,Wi,s,r),Dh.set(0,0),ra.set(1,0),Uh.set(1,1);let a=t.ray.intersectTriangle(vr,bs,Mr,!1,Ms);if(a===null&&(Sr(bs.set(-.5,.5,0),Xi,o,Wi,s,r),ra.set(0,1),a=t.ray.intersectTriangle(vr,Mr,bs,!1,Ms),a===null))return;let c=t.ray.origin.distanceTo(Ms);c<t.near||c>t.far||e.push({distance:c,point:Ms.clone(),uv:Bn.getInterpolation(Ms,vr,bs,Mr,Dh,ra,Uh,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Sr(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*qi.x-s*qi.y,Ss.y=s*qi.x+r*qi.y):Ss.copy(qi),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(gu)}var Os=class extends En{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},to=new I,eo=new I,Nh=new ye,Es=new Us,br=new bi,oa=new I,Fh=new I,gc=class extends Ie{constructor(t=new Ce,e=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)to.fromBufferAttribute(e,s-1),eo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=to.distanceTo(eo);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;Nh.copy(s).invert(),Es.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=f,m=_-1;y<m;y+=l){let d=h.getX(y),v=h.getX(y+1),g=Er(this,t,Es,c,d,v);g&&e.push(g)}if(this.isLineLoop){let y=h.getX(_-1),m=h.getX(f),d=Er(this,t,Es,c,y,m);d&&e.push(d)}}else{let f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=f,m=_-1;y<m;y+=l){let d=Er(this,t,Es,c,y,y+1);d&&e.push(d)}if(this.isLineLoop){let y=Er(this,t,Es,c,_-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Er(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(to.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),e.distanceSqToSegment(to,eo,oa,Fh)>n)return;oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oa);if(!(c<t.near||c>t.far))return{distance:c,point:Fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Oh=new I,Bh=new I,no=class extends gc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oh.distanceTo(Bh);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends En{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zh=new ye,xc=new Us,wr=new bi,Tr=new I,io=class extends Ie{constructor(t=new Ce,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;zh.copy(s).invert(),xc.copy(t.ray).applyMatrix4(zh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let p=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=p,y=f;_<y;_++){let m=l.getX(_);Tr.fromBufferAttribute(u,m),kh(Tr,m,c,s,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=p,y=f;_<y;_++)Tr.fromBufferAttribute(u,_),kh(Tr,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kh(i,t,e,n,s,r,o){let a=xc.distanceSqToPoint(i);if(a<e){let c=new I;xc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Wn=class extends Je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],o=[],a=new I,c=new ye;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*u+this.aX,l=p*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_c=class extends zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,f*=h,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ar=new I,aa=new Zc,ca=new Zc,la=new Zc,ks=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),l=Ar);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),aa.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,_,y,m),ca.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,_,y,m),la.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(aa.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),ca.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),la.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(aa.calc(c),ca.calc(c),la.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function kg(i,t){let e=1-i;return e*e*t}function Hg(i,t){return 2*(1-i)*i*t}function Vg(i,t){return i*i*t}function Cs(i,t,e,n){return kg(i,t)+Hg(i,e)+Vg(i,n)}function Gg(i,t){let e=1-i;return e*e*e*t}function Wg(i,t){let e=1-i;return 3*e*e*i*t}function Xg(i,t){return 3*(1-i)*i*i*t}function qg(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return Gg(i,t)+Wg(i,e)+Xg(i,n)+qg(i,s)}var so=class extends on{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yc=class extends on{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends on{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vc=class extends on{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends on{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends on{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Hh(a,c.x,l.x,h.x,u.x),Hh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:ks,CubicBezierCurve:so,CubicBezierCurve3:yc,EllipseCurve:zs,LineCurve:ro,LineCurve3:vc,QuadraticBezierCurve:oo,QuadraticBezierCurve3:ao,SplineCurve:co}),Sc=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Mc[s.type]().fromJSON(s))}return this}},bc=class extends Sc{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new oo(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new so(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new zs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ec=class i extends Ce{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new I,p=new ut,f=new I,_=new I,y=new I,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(_)}for(let v=0;v<=e;v++){let g=n+v*h*s,x=Math.sin(g),C=Math.cos(g);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),p.x=v/e,p.y=T/(t.length-1),a.push(p.x,p.y);let A=c[3*T+0]*x,w=c[3*T+1],b=c[3*T+0]*C;l.push(A,w,b)}}for(let v=0;v<e;v++)for(let g=0;g<t.length-1;g++){let x=g+v*t.length,C=x,T=x+t.length,A=x+t.length+1,w=x+1;r.push(C,T,w),r.push(A,w,T)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ei=class i extends Ec{constructor(t=1,e=1,n=4,s=8){let r=new bc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ci=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],f=[],_=0,y=[],m=n/2,d=0;v(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(f,2));function v(){let x=new I,C=new I,T=0,A=(e-t)/n;for(let w=0;w<=r;w++){let b=[],S=w/r,P=S*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,k=U*c+a,G=Math.sin(k),H=Math.cos(k);C.x=P*G,C.y=-S*n+m,C.z=P*H,u.push(C.x,C.y,C.z),x.set(G,A,H).normalize(),p.push(x.x,x.y,x.z),f.push(U,1-S),b.push(_++)}y.push(b)}for(let w=0;w<s;w++)for(let b=0;b<r;b++){let S=y[b][w],P=y[b+1][w],L=y[b+1][w+1],U=y[b][w+1];(t>0||b!==0)&&(h.push(S,P,U),T+=3),(e>0||b!==r-1)&&(h.push(P,L,U),T+=3)}l.addGroup(d,T,0),d+=T}function g(x){let C=_,T=new ut,A=new I,w=0,b=x===!0?t:e,S=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),_++;let P=_;for(let L=0;L<=s;L++){let k=L/s*c+a,G=Math.cos(k),H=Math.sin(k);A.x=b*H,A.y=m*S,A.z=b*G,u.push(A.x,A.y,A.z),p.push(0,S,0),T.x=G*.5+.5,T.y=H*.5*S+.5,f.push(T.x,T.y),_++}for(let L=0;L<s;L++){let U=C+L,k=P+L;x===!0?h.push(k,k+1,U):h.push(k+1,k,U),w+=3}l.addGroup(d,w,x===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class i extends pn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wc=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let g=new I,x=new I,C=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],g),f(e[T+1],x),f(e[T+2],C),c(g,x,C,v)}function c(v,g,x,C){let T=C+1,A=[];for(let w=0;w<=T;w++){A[w]=[];let b=v.clone().lerp(x,w/T),S=g.clone().lerp(x,w/T),P=T-w;for(let L=0;L<=P;L++)L===0&&w===T?A[w][L]=b:A[w][L]=b.clone().lerp(S,L/P)}for(let w=0;w<T;w++)for(let b=0;b<2*(T-w)-1;b++){let S=Math.floor(b/2);b%2===0?(p(A[w][S+1]),p(A[w+1][S]),p(A[w][S])):(p(A[w][S+1]),p(A[w+1][S+1]),p(A[w+1][S]))}}function l(v){let g=new I;for(let x=0;x<r.length;x+=3)g.x=r[x+0],g.y=r[x+1],g.z=r[x+2],g.normalize().multiplyScalar(v),r[x+0]=g.x,r[x+1]=g.y,r[x+2]=g.z}function h(){let v=new I;for(let g=0;g<r.length;g+=3){v.x=r[g+0],v.y=r[g+1],v.z=r[g+2];let x=m(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;o.push(x,1-C)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){let g=o[v+0],x=o[v+2],C=o[v+4],T=Math.max(g,x,C),A=Math.min(g,x,C);T>.9&&A<.1&&(g<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function f(v,g){let x=v*3;g.x=t[x+0],g.y=t[x+1],g.z=t[x+2]}function _(){let v=new I,g=new I,x=new I,C=new I,T=new ut,A=new ut,w=new ut;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),g.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),C.copy(v).add(g).add(x).divideScalar(3);let P=m(C);y(T,S+0,v,P),y(A,S+2,g,P),y(w,S+4,x,P)}}function y(v,g,x,C){C<0&&v.x===1&&(o[g]=v.x-1),x.x===0&&x.z===0&&(o[g]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Rr=new I,Cr=new I,ha=new I,Pr=new Bn,lo=class extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Or*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),p={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:y,b:m,c:d}=Pr;if(y.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),Pr.getNormal(ha),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let g=(v+1)%3,x=u[v],C=u[g],T=Pr[h[v]],A=Pr[h[g]],w=`${x}_${C}`,b=`${C}_${x}`;b in p&&p[b]?(ha.dot(p[b].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),p[b]=null):w in p||(p[w]={index0:l[v],index1:l[g],normal:ha.clone()})}}for(let _ in p)if(p[_]){let{index0:y,index1:m}=p[_];Rr.fromBufferAttribute(a,y),Cr.fromBufferAttribute(a,m),f.push(Rr.x,Rr.y,Rr.z),f.push(Cr.x,Cr.y,Cr.z)}this.setAttribute("position",new jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ho=class i extends wc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},uo=class i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,p=(e-t)/s,f=new I,_=new ut;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let d=r+m/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=p}for(let y=0;y<s;y++){let m=y*(n+1);for(let d=0;d<n;d++){let v=d+m,g=v,x=v+n+1,C=v+n+2,T=v+1;a.push(g,x,T),a.push(x,C,T)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Le=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,p=new I,f=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let v=[],g=d/n,x=0;d===0&&o===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+g*a),u.y=t*Math.cos(o+g*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+g*a),_.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),m.push(T+x,1-g),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let g=h[d][v+1],x=h[d][v],C=h[d+1][v],T=h[d+1][v+1];(d!==0||o>0)&&f.push(g,x,T),(d!==n-1||c<Math.PI)&&f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,p=new I;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let y=_/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let y=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,v=(s+1)*f+_;o.push(y,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fo=class i extends Ce{constructor(t=new ao(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new ut,h=new I,u=[],p=[],f=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(f,2));function y(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),v(),d()}function m(g){h=t.getPointAt(g/e,h);let x=o.normals[g],C=o.binormals[g];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,w=Math.sin(A),b=-Math.cos(A);c.x=b*x.x+w*C.x,c.y=b*x.y+w*C.y,c.z=b*x.z+w*C.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let g=1;g<=e;g++)for(let x=1;x<=s;x++){let C=(s+1)*(g-1)+(x-1),T=(s+1)*g+(x-1),A=(s+1)*g+x,w=(s+1)*(g-1)+x;_.push(C,T,w),_.push(T,A,w)}}function v(){for(let g=0;g<=e;g++)for(let x=0;x<=s;x++)l.x=g/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Mc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ht=class extends En{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wi=class extends Ht{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ir(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=t,a=2*e-n;break;case kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zl:o=t,c=2*n-e;break;case kl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-p*m+2*p*y-p*_,v=(1+p)*m+(-1.5-2*p)*y+(-.5+p)*_+1,g=(-1-f)*m+(1.5+f)*y+.5*_,x=f*m-f*y;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+v*o[l+C]+g*o[c+C]+x*o[u+C];return r}},Ac=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Rc=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ir(e,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ir(t.times,Array),values:Ir(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Br:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Yg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let _=0;_!==n;++_){let y=e[u+_];if(y!==e[p+_]||y!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Ka;var Ti=class extends mn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Br;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends mn{};Cc.prototype.ValueTypeName="color";var Pc=class extends mn{};Pc.prototype.ValueTypeName="number";var Ic=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ai.slerpFlat(r,0,o,l-a,o,l,c);return r}},po=class extends mn{InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends mn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Br;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends mn{};Lc.prototype.ValueTypeName="vector";var Vh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Dc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},$g=new Dc,Hs=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uc=class extends Hs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Vh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ds("img");function c(){h(),Vh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var mo=class extends Hs{constructor(t){super(t)}load(t,e,n,s){let r=new Je,o=new Uc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},as=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},go=class extends as{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ua=new ye,Gh=new I,Wh=new I,Vs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Nc=class extends Vs{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=kr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Gs=class extends as{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xh=new ye,ws=new I,da=new I,Fc=class extends Vs{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),da.copy(n.position),da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(da),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}},gn=class extends as{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Oc=class extends Vs{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends as{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Oc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=qh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function qh(){return performance.now()}var Jc="\\[\\]\\.:\\/",Zg=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",Jg="[^"+Jc.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),ex=new RegExp("^"+Kg+Qg+jg+tx+"$"),nx=["material","materials","bones","map"],Bc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(t){let e=ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Bc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);var Mo=class extends rs{constructor(){super();let t=new ue;t.deleteAttribute("uv");let e=new Ht({side:De}),n=new Ht,s=new gn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new rt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new rt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new rt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new rt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new rt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new rt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let p=new rt(t,us(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let f=new rt(t,us(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new rt(t,us(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let y=new rt(t,us(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new rt(t,us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let d=new rt(t,us(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function us(i){let t=new Te;return t.color.setScalar(i),t}var $=i=>document.getElementById(i),en=(i,t,e)=>Math.max(t,Math.min(e,i)),ix=(i,t,e)=>i+(t-i)*e,Se=(i,t,e,n)=>ix(i,t,1-Math.exp(-e*n)),qs=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i);var So=class{constructor(){this.map=new Map}on(t,e){return(this.map.get(t)||this.map.set(t,[]).get(t)).push(e),()=>this.off(t,e)}off(t,e){let n=this.map.get(t);if(n){let s=n.indexOf(e);s>=0&&n.splice(s,1)}}emit(t,...e){let n=this.map.get(t);if(n)for(let s of[...n])try{s(...e)}catch(r){console.error(r)}}};function bo(i,t=!1){let e=$("fade");e.classList.toggle("quick",t),e.classList.toggle("on",i)}function be(i){i.classList.remove("hidden")}function Kt(i){i.classList.add("hidden")}function we(i,t,e){let n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n}var qn=()=>navigator.maxTouchPoints>0&&matchMedia("(pointer:coarse)").matches,xn={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}};function Bt(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var sx={master:90,music:55,sfx:90,textSize:100,subs:!0,contrast:!1,reducedFx:!1,lang:"en",presentation:!1},Qt={...sx,...JSON.parse(xn.get("dhj.settings")||"{}")};function fs(){xn.set("dhj.settings",JSON.stringify(Qt))}function Qc(){document.documentElement.style.setProperty("--fs",Qt.textSize+"%"),document.body.classList.toggle("hc",!!Qt.contrast),document.body.classList.toggle("rfx",!!Qt.reducedFx)}var xu={};async function jc(i){try{xu=await(await fetch(`localization/${i}.json`)).json()}catch{xu={}}}var Ys="dhj.save.v1",tl="dhj.save.backup.v1";function $s(i=!1){return{version:1,created:Date.now(),savedAt:0,presentation:i,zone:"hub",pos:null,yaw:0,xp:0,level:1,missionIndex:0,missionsDone:{},discovered:{},collected:[],quizBest:{},memorialsSeen:{},archiveSearched:!1,aiAsked:!1,introSeen:!1,name:"Visitor",stats:{exhibits:0,quizzes:0,searches:0,questions:0}}}var ds=$s(),ge=()=>ds;function el(i){ds=i}function Be(){ds.savedAt=Date.now(),ds.pos=ds.pos||null;let i=JSON.stringify(ds),t=xn.get(Ys);t&&xn.set(tl,t),xn.set(Ys,i)}function nl(){let i=xn.get(Ys);if(!i)return null;try{let t=JSON.parse(i);return!t||t.version!==1?null:{...$s(),...t}}catch{try{let t=xn.get(tl);if(t){let e=JSON.parse(t);return xn.set(Ys,t),{...$s(),...e}}}catch{}return null}}function il(){return!!nl()}function _u(){xn.del(Ys),xn.del(tl)}function sl(){let i=(e,n)=>{let s=$(e);s&&(s.type==="checkbox"?s.checked=!!n:s.value=n)};i("setMaster",Qt.master),i("setMusic",Qt.music),i("setSfx",Qt.sfx),i("setTextSize",Qt.textSize),i("setSubs",Qt.subs),i("setContrast",Qt.contrast),i("setReducedFx",Qt.reducedFx),i("setLang",Qt.lang);let t=$("chkPresentation");t&&(t.checked=Qt.presentation)}function yu(i){let t=(e,n,s=!1,r=!1)=>{let o=$(e);o&&(o.addEventListener("change",()=>{Qt[n]=s?o.checked:r?+o.value:o.value,fs(),Qc(),i&&i(n,Qt[n])}),o.type==="range"&&o.addEventListener("input",()=>{Qt[n]=+o.value,fs(),i&&i(n,Qt[n])}))};t("setMaster","master",!1,!0),t("setMusic","music",!1,!0),t("setSfx","sfx",!1,!0),t("setTextSize","textSize",!1,!0),t("setSubs","subs",!0),t("setContrast","contrast",!0),t("setReducedFx","reducedFx",!0),t("setLang","lang")}var Zs={};ed(Zs,{applyVolumes:()=>vu,footstep:()=>pl,initAudio:()=>ul,play:()=>ke,playAmbience:()=>dl,playMusic:()=>wo,stopAmbience:()=>fl,stopMusic:()=>rx});var rl={music:"audio/Music/museum_theme_loop.wav",ambience:"audio/Ambience/hall_ambience_loop.wav",click:"audio/SFX/ui_click.wav",hover:"audio/SFX/ui_hover.wav",pickup:"audio/SFX/pickup.wav",correct:"audio/SFX/quiz_correct.wav",wrong:"audio/SFX/quiz_incorrect.wav",page:"audio/SFX/page_turn.wav",open:"audio/SFX/exhibit_open.wav",objective:"audio/SFX/objective_new.wav",achievement:"audio/SFX/achievement.wav",door:"audio/SFX/door_open.wav",step:"audio/SFX/footstep_stone.wav"},cl=!1,Tn=null,An=null,ll=null,hl=null,Eo=new Map;function ps(i){let t=Qt.master/100;return i==="music"?t*(Qt.music/100):t*(Qt.sfx/100)}function ol(i,t){let e=new Audio(i);return e.preload="auto",e._group=t,e}function ul(){Tn=ol(rl.music,"music"),Tn.loop=!0,An=ol(rl.ambience,"music"),An.loop=!0;for(let t of["click","hover","step","pickup","correct","wrong","page","open","objective","achievement","door"])Eo.set(t,[0,1,2].map(()=>ol(rl[t],"sfx")));vu();let i=()=>{cl||(cl=!0,ll&&Tn.play().catch(()=>{}),hl&&An.play().catch(()=>{}))};window.addEventListener("pointerdown",i,{once:!1}),window.addEventListener("keydown",i,{once:!1})}function vu(){Tn&&(Tn.volume=ps("music")),An&&(An.volume=ps("music")*.85);for(let i of Eo.values())for(let t of i)t.volume=ps("sfx")}function ke(i,{volume:t=1,rate:e=1}={}){if(!cl||!Eo.has(i))return;let n=Eo.get(i),s=n.find(r=>r.paused||r.ended)||n[0];try{s.pause(),s.currentTime=0,s.volume=ps("sfx")*t,s.playbackRate=e,s.play().catch(()=>{})}catch{}}function wo(){ll=!0,Tn&&(Tn.volume=ps("music"),Tn.play().catch(()=>{}))}function rx(){ll=null,Tn&&Tn.pause()}function dl(){hl=!0,An&&(An.volume=ps("music")*.85,An.play().catch(()=>{}))}function fl(){hl=null,An&&An.pause()}var al=0;function pl(i){(i-al>.5||i<al)&&(al=i,ke("step",{volume:.5,rate:.96+Math.random()*.1}))}async function Mu(){let[i,t,e,n]=await Promise.all([fetch("content/archive_items.json").then(l=>l.json()),fetch("content/exhibits.json").then(l=>l.json()),fetch("content/missions.json").then(l=>l.json()),fetch("content/quizzes.json").then(l=>l.json())]),s=new Map;for(let l of i.items)s.set(l.id,l);let r=t.zones,o=new Map(r.map(l=>[l.zoneId,l])),a=new Map(n.quizzes.map(l=>[l.id,l])),c=r.map(l=>l.zoneId);return{archive:i,items:i.items,byId:s,zones:r,zoneById:o,zoneOrder:c,missions:e.missions,quizzes:n.quizzes,quizById:a,zoneMeta:_n,zoneOfQuiz:l=>(a.get(l)||{}).zone}}var _n={early_life:{title:"EARLY LIFE & EDUCATION",accent:4021391,desc:"From Mhow to the world's great universities \u2014 walk the timeline 1891\u20131923.",scene:"Gallery_EarlyLife",theme:"dawn"},social_reform:{title:"SOCIAL REFORM",accent:9196096,desc:"Movements, newspapers and negotiations that changed a nation.",scene:"Gallery_SocialReform",theme:"ember"},constitution:{title:"CONSTITUTION",accent:3033710,desc:"Read the Preamble at the Constitution Table. Discover Fundamental Rights.",scene:"Gallery_Constitution",theme:"deep"},scholarship:{title:"SCHOLARSHIP & WRITINGS",accent:7230517,desc:"Manuscripts, books and a searchable institutional archive.",scene:"Gallery_Scholarship",theme:"amber"},memorials:{title:"MEMORIALS",accent:5074514,desc:"Digital reconstructions of memorials and historic places.",scene:"Gallery_Memorials",theme:"garden"},legacy:{title:"LEGACY",accent:4214156,desc:"The legacy archive, the AI Archive Guide and the Final Knowledge Challenge.",scene:"Gallery_Legacy",theme:"night"}},Js=["early_life","social_reform","constitution","scholarship","memorials","legacy"];function Su(i){let t=i.map(u=>{let p=[u.title,u.category,u.period,u.location,u.description,(u.keywords||[]).join(" ")].join(" ");return{it:u,text:p.toLowerCase(),raw:p}});function e(u){return(u.toLowerCase().match(/[a-z0-9']{2,}/g)||[]).map(p=>p.replace(/(ing|ed|es|s)$/,""))}let n=new Map;for(let u of t){let p=new Set(e(u.text));for(let f of p)n.set(f,(n.get(f)||0)+1)}let s=t.length,r=u=>Math.log((s+1)/((n.get(u)||0)+1)+1);function o(u){let p=new Map;for(let y of u)p.set(y,(p.get(y)||0)+1);let f=new Map,_=0;for(let[y,m]of p){let d=(1+Math.log(m))*r(y);f.set(y,d),_+=d*d}return{v:f,norm:Math.sqrt(_)||1}}let a=t.map(u=>o(e(u.text))),c=new Set(["what","are","the","who","was","were","when","did","does","how","why","and","for","his","her","tell","about","that","this","with","from","have","has","india","ambedkar"]);function l(u,p=3){let f=e(u).filter(m=>!c.has(m)||m.length>5);if(!f.length)return[];let _=o(f),y=[];return t.forEach((m,d)=>{let v=a[d],g=0;for(let[T,A]of _.v)g+=A*(v.v.get(T)||0);let x=g/(_.norm*v.norm),C=u.toLowerCase().trim();C.length>6&&m.text.includes(C)&&(x+=.35);for(let T of m.it.keywords||[])C.includes(T.toLowerCase())&&(x+=.06);x>.02&&y.push({item:m.it,score:x})}),y.sort((m,d)=>d.score-m.score),y.slice(0,p)}function h(u){let p=l(u,3);if(!p.length)return{text:"I could not find that in the curated archive. I only answer from the thirty-five verified records \u2014 try words like 'constitution', 'Mahad', 'Columbia', 'rights' or 'Buddhism'.",sources:[],hits:[]};let f=p[0],_=f.item.description;return{text:(p.length>1?`From the record \u201C${f.item.title}\u201D: `:`According to \u201C${f.item.title}\u201D: `)+_,sources:p.map(m=>m.item.id),hits:p}}return{search:l,answer:h}}var ox=new mo;var Jt={},K={};function me(i,t,{repeat:e=[1,1],srgb:n=!0,aniso:s=8}={}){let r=ox.load(t);return r.wrapS=r.wrapT=Is,r.repeat.set(e[0],e[1]),n&&(r.colorSpace=Re),r.anisotropy=s,Jt[i]=r,r}async function bu(i){let t="art/Textures/",e=i.aniso;me("floorMed",t+"floor_medallion.png",{repeat:[1,1],aniso:e}),me("floorMedN",t+"floor_medallion_n.png",{srgb:!1,aniso:e}),me("carpet",t+"carpet_heritage.png",{repeat:[4,4],aniso:e}),me("carpetN",t+"carpet_heritage_n.png",{repeat:[4,4],srgb:!1,aniso:e}),me("marbleC",t+"marble_cream.png",{repeat:[3,3],aniso:e}),me("marbleCN",t+"marble_cream_n.png",{repeat:[3,3],srgb:!1,aniso:e}),me("marbleB",t+"marble_blue.png",{repeat:[2,2],aniso:e}),me("marbleBN",t+"marble_blue_n.png",{repeat:[2,2],srgb:!1,aniso:e}),me("sand",t+"sandstone_wall.png",{repeat:[4,2],aniso:e}),me("sandN",t+"sandstone_wall_n.png",{repeat:[4,2],srgb:!1,aniso:e}),me("woodW",t+"wood_warm.png",{repeat:[2,2],aniso:e}),me("woodWN",t+"wood_warm_n.png",{repeat:[2,2],srgb:!1,aniso:e}),me("woodD",t+"wood_dark.png",{repeat:[2,2],aniso:e}),me("woodDN",t+"wood_dark_n.png",{repeat:[2,2],srgb:!1,aniso:e}),me("coffer",t+"ceiling_coffer.png",{repeat:[6,4],aniso:e}),me("cofferN",t+"ceiling_coffer_n.png",{repeat:[6,4],srgb:!1,aniso:e}),me("leather",t+"leather_dark.png",{repeat:[2,2],aniso:e}),me("leatherN",t+"leather_dark_n.png",{repeat:[2,2],srgb:!1,aniso:e}),me("suit",t+"suit_fabric.png",{repeat:[3,3],aniso:e}),me("suitN",t+"suit_fabric_n.png",{repeat:[3,3],srgb:!1,aniso:e}),me("paper",t+"paper_aged.png",{repeat:[1,1],aniso:e}),me("parch",t+"parchment.png",{repeat:[1,1],aniso:e}),me("sky",t+"sky_gradient.png",{repeat:[1,1],aniso:4}),me("portrait","art/Images/portrait_ambedkar_art.png",{repeat:[1,1],aniso:e}),me("spines","art/Images/book_spines.png",{repeat:[1,1],aniso:e}),me("ms1","art/Images/manuscript_placeholder_1.png",{repeat:[1,1],aniso:e}),me("ms2","art/Images/manuscript_placeholder_2.png",{repeat:[1,1],aniso:e}),me("ms3","art/Images/manuscript_placeholder_3.png",{repeat:[1,1],aniso:e})}function Eu(){let i=t=>new Ht(t);K.marbleFloor=i({map:Jt.floorMed,normalMap:Jt.floorMedN,normalScale:new ut(.7,.7),roughness:.32,metalness:.06,envMapIntensity:1.1}),K.marbleCream=i({map:Jt.marbleC,normalMap:Jt.marbleCN,normalScale:new ut(.6,.6),roughness:.38,metalness:.05}),K.marbleBlue=i({map:Jt.marbleB,normalMap:Jt.marbleBN,normalScale:new ut(.6,.6),roughness:.4,metalness:.05}),K.wall=i({map:Jt.sand,normalMap:Jt.sandN,normalScale:new ut(.9,.9),roughness:.86,metalness:0}),K.carpet=i({map:Jt.carpet,normalMap:Jt.carpetN,normalScale:new ut(1.1,1.1),roughness:.96,metalness:0}),K.ceiling=i({map:Jt.coffer,normalMap:Jt.cofferN,normalScale:new ut(.8,.8),roughness:.8,metalness:0}),K.woodWarm=i({map:Jt.woodW,normalMap:Jt.woodWN,roughness:.55,metalness:.04}),K.woodDark=i({map:Jt.woodD,normalMap:Jt.woodDN,roughness:.5,metalness:.05}),K.leather=i({map:Jt.leather,normalMap:Jt.leatherN,roughness:.72,metalness:.02}),K.brass=i({color:13214286,roughness:.28,metalness:.9,envMapIntensity:1.3}),K.gold=i({color:14267483,roughness:.22,metalness:1,envMapIntensity:1.5}),K.goldGlow=i({color:14267483,roughness:.3,metalness:.9,emissive:9071136,emissiveIntensity:.55}),K.darkMetal=i({color:2764602,roughness:.42,metalness:.85}),K.glass=new wi({color:12374760,roughness:.06,metalness:0,transmission:.82,transparent:!0,opacity:.42,thickness:.4,ior:1.45,envMapIntensity:1.4}),K.paper=i({map:Jt.paper,roughness:.92,metalness:0}),K.parch=i({map:Jt.parch,roughness:.9,metalness:0}),K.plinthWhite=i({color:15262418,roughness:.5,metalness:.03}),K.plaqueGold=i({color:12162623,roughness:.34,metalness:.92,emissive:3812360,emissiveIntensity:.4}),K.suit=i({map:Jt.suit,normalMap:Jt.suitN,normalScale:new ut(.9,.9),color:2899563,roughness:.78,metalness:.02}),K.skin=i({color:10250821,roughness:.66,metalness:0}),K.hair=i({color:1315087,roughness:.52,metalness:.06}),K.shirt=i({color:15921126,roughness:.7,metalness:0}),K.tie=i({color:10366767,roughness:.6,metalness:.02}),K.shoe=i({color:1512207,roughness:.35,metalness:.25}),K.lens=new wi({color:14674674,roughness:.05,metalness:0,transparent:!0,opacity:.3,transmission:.7,thickness:.05}),K.leaf=i({color:4090694,roughness:.8,metalness:0}),K.trunk=i({color:5981746,roughness:.9,metalness:0}),K.fountain=i({color:8369881,roughness:.12,metalness:.1,transparent:!0,opacity:.75}),K.stone=i({color:10196362,roughness:.92,metalness:.02}),K.sandstoneRed=i({color:11036735,roughness:.88,metalness:.02}),K.warmLight=new Te({color:16770744}),K.panelDark=i({color:1251883,roughness:.6,metalness:.1})}function ml(i=8833023){return new Ht({color:66e4,emissive:i,emissiveIntensity:1.25,roughness:.35,metalness:.1})}function To(i=14267483,t=.85){return new Te({color:i,transparent:!0,opacity:t,side:We,depthWrite:!1,blending:rn})}function zt(i,t,e,n,s=0,r=0,o=0){let a=new rt(new ue(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a}function Gt(i,t,e,n,s=0,r=0,o=0,a=24){let c=new rt(new pn(i,t,e,a),n);return c.position.set(s,r,o),c.castShadow=c.receiveShadow=!0,c}function Ke(i,t="",{accent:e="#d9b45b",bg:n="#0e1524",w:s=640,h:r=256}={}){let o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle=n,a.fillRect(0,0,s,r),a.strokeStyle=e,a.lineWidth=7,a.strokeRect(10,10,s-20,r-20),a.textAlign="center",a.textBaseline="middle";let c=54;for(a.font=`600 ${c}px Georgia, serif`;a.measureText(i).width>s-70&&c>16;)c-=2,a.font=`600 ${c}px Georgia, serif`;a.fillStyle="#f7f1e1";let l=t?r/2-26:r/2;if(a.fillText(i,s/2,l),t){let u=27;for(a.font=`400 ${u}px "Segoe UI", Arial, sans-serif`;a.measureText(t).width>s-60&&u>11;)u-=2,a.font=`400 ${u}px "Segoe UI", Arial, sans-serif`;a.fillStyle=e,a.fillText(t,s/2,r/2+36)}let h=new Wn(o);return h.colorSpace=Re,h.anisotropy=8,h}function wu(i,t,e,n=K.gold){let s=new Ot,r=zt(i+.12,t+.12,.06,n),o=new rt(new ee(i,t),new Ht({map:e,roughness:.62,metalness:.04}));return o.position.z=.035,o.receiveShadow=!0,s.add(r,o),s}function gl({title:i="",sub:t="",glow:e=14267483,radius:n=.55}={}){let s=new Ot;s.add(Gt(n+.1,n+.16,.1,K.marbleCream,0,.05,0)),s.add(Gt(n*.72,n*.8,.92,K.plinthWhite,0,.56,0)),s.add(Gt(n+.06,n+.06,.07,K.marbleBlue,0,1.06,0));let r=new rt(new $e(n+.1,.018,8,40),new Te({color:e,transparent:!0,opacity:.85}));if(r.rotation.x=Math.PI/2,r.position.y=1.1,s.add(r),s.userData.glowRing=r,i){let o=Ke(i,t,{w:512,h:176}),a=new rt(new ee(.86,.3),new Ht({map:o,roughness:.5,metalness:.1}));a.position.set(0,.62,n*.8+.03),a.rotation.x=-.06,s.add(a)}return s}function xl(i="urn",t=13214286){let e=new Ot,n=new Ht({color:t,roughness:.3,metalness:.75,envMapIntensity:1.4});if(i==="urn")e.add(Gt(.16,.12,.06,n,0,.03,0)),e.add(Gt(.2,.15,.26,n,0,.19,0)),e.add(Gt(.1,.2,.2,n,0,.42,0)),e.add(Gt(.13,.11,.05,n,0,.54,0));else if(i==="book"){let s=zt(.4,.07,.3,K.leather,0,.035,0),r=zt(.37,.05,.27,K.paper,0,.075,0);e.add(s,r),e.rotation.y=.4}else if(i==="globe"){let s=new rt(new Le(.2,24,18),new Ht({color:9418712,roughness:.4,metalness:.2,map:Jt.sky}));s.position.y=.24,e.add(Gt(.1,.13,.05,K.woodDark),s),e.children[0].position.y=.025;let r=new rt(new $e(.23,.012,6,32),n);r.position.y=.24,r.rotation.z=.4,e.add(r),e.userData.spin=s}else if(i==="scroll")e.add(Gt(.05,.05,.5,K.parch,0,.16,0).rotateZ(Math.PI/2)),e.add(Gt(.06,.06,.05,K.woodDark,-.26,.16,0).rotateZ(Math.PI/2)),e.add(Gt(.06,.06,.05,K.woodDark,.26,.16,0).rotateZ(Math.PI/2));else if(i==="lamp"){e.add(Gt(.14,.18,.07,n,0,.035,0)),e.add(Gt(.05,.1,.2,n,0,.17,0));let s=new rt(new Le(.06,12,10),new Te({color:16763243}));s.scale.set(1,1.7,1),s.position.y=.34,e.add(s),e.userData.flame=s}else if(i==="diamond"){let s=new rt(new ho(.17),n);s.position.y=.24,e.add(s),e.userData.spin=s}return e}function _l({title:i="",w:t=2.2,h:e=1.4,tex:n=null,accent:s=14267483}={}){let r=new Ot,o=zt(t+.18,e+.18,.07,K.woodDark,0,0,0),a=new rt(new ee(t,e),n?new Ht({map:n,roughness:.68,metalness:.03}):new Ht({color:1581882,roughness:.75}));a.position.z=.045;let c=new rt(new ue(t+.1,e+.1,.03),new Ht({color:s,roughness:.3,metalness:.85}));if(c.position.z=.02,r.add(o,c,a),i){let l=Ke(i,"",{w:640,h:100}),h=new rt(new ee(Math.min(t+.1,2.4),.3),new Ht({map:l,roughness:.5}));h.position.set(0,-(e/2)-.24,.06),r.add(h)}return r}function Tu({title:i="",w:t=1.7,h:e=1.05,d:n=.85,accent:s=14267483,item:r="book"}={}){let o=new Ot;o.add(zt(t,.62,n,K.woodWarm,0,.31,0)),o.add(zt(t+.06,.05,n+.06,K.brass,0,.645,0));let a=zt(t-.06,e,n-.06,K.glass,0,.67+e/2,0);a.castShadow=!1,o.add(a);let c=new no(new lo(new ue(t-.06,e,n-.06)),new Os({color:s}));c.position.y=.67+e/2,o.add(c);let l=zt(t-.2,.02,n-.2,K.warmLight,0,.7,0);l.material=new Te({color:16771520}),o.add(l);let h=xl(r,s);if(h.position.y=.72,o.add(h),o.userData.artifact=h,i){let u=Ke(i,"",{w:512,h:128}),p=new rt(new ee(.9,.23),new Ht({map:u,roughness:.5,metalness:.05}));p.position.set(0,.4,n/2+.015),o.add(p)}return o}function Au({title:i="Knowledge Checkpoint",accent:t=14267483,icon:e="\u2753"}={}){let n=new Ot;n.add(zt(.72,.06,.5,K.woodDark,0,.03,0));let s=zt(.16,.9,.16,K.darkMetal,0,.5,0);n.add(s);let r=new Ot;r.position.set(0,1,.02),r.rotation.x=-.5;let o=zt(.78,.56,.05,K.brass),a=new rt(new ee(.68,.46),ml(t));a.position.z=.03,r.add(o,a),n.add(r);let c=new rt(new $e(.3,.02,8,40),new Te({color:t,transparent:!0,opacity:.9}));c.rotation.x=Math.PI/2,c.position.y=1.35,n.add(c),n.userData.glowRing=c;let l=Ke(i,e+"  Interact to begin",{w:640,h:160}),h=new rt(new ee(1.1,.28),new Ht({map:l,roughness:.5}));return h.position.set(0,1.62,0),n.add(h),n}function Ao({accent:i=8376575}={}){let t=new Ot;t.add(zt(1.3,.75,.7,K.woodWarm,0,.375,0)),t.add(zt(1.36,.05,.76,K.brass,0,.77,0));let e=zt(.1,.5,.1,K.darkMetal,0,1,-.15);t.add(e);let n=new Ot;n.position.set(0,1.35,-.05),n.rotation.x=-.28;let s=zt(1.05,.66,.05,K.darkMetal),r=new rt(new ee(.95,.56),ml(i));r.position.z=.03,n.add(s,r),t.add(n),t.userData.screen=r;let o=Ke("Manuscript Archive","35 records \xB7 search & collect",{w:640,h:150}),a=new rt(new ee(1.05,.25),new Ht({map:o,roughness:.55}));return a.position.set(0,.5,.36),a.rotation.x=-.1,t.add(a),t}function Ru({accent:i=10467327}={}){let t=Ao({accent:i}),e=Ke("AI Archive Guide","Offline \xB7 cites sources",{w:640,h:150}),n=new rt(new ee(1.05,.25),new Ht({map:e,roughness:.55}));n.position.set(0,.5,.36),n.rotation.x=-.1,t.add(n);let s=new rt(new Le(.11,20,16),new Te({color:12570879,transparent:!0,opacity:.85,blending:rn,depthWrite:!1}));return s.position.set(0,1.85,-.05),t.add(s),t.userData.orb=s,t}function Cu(){let i=new Ot;i.add(zt(2.6,.1,1.3,K.woodDark,0,.86,0)),i.add(zt(2.5,.6,1.1,K.woodWarm,0,.5,0));for(let[c,l]of[[-1.15,-.5],[1.15,-.5],[-1.15,.5],[1.15,.5]])i.add(zt(.12,.4,.12,K.woodDark,c,.2,l));let t=new Ht({map:Jt.ms3,roughness:.9}),e=new rt(new ue(1.7,.02,.95),t);e.position.set(0,.925,0),e.rotation.y=.02,i.add(e);let n=zt(1.76,.03,1,K.leather,0,.9,0);i.add(n);let s=Gt(.02,.03,.5,K.brass,0,1.15,-.5),r=Gt(.12,.18,.14,K.warmLight,0,1.42,-.5);i.add(s,r);let o=Ke("The Constitution Table","Read the Preamble \xB7 Interact",{w:640,h:160}),a=new rt(new ee(1.2,.3),new Ht({map:o,roughness:.5}));return a.position.set(0,.45,.68),i.add(a),i}function Pu(){let i=new Ot;i.add(zt(1.9,.08,1,K.woodWarm,0,.84,0)),i.add(zt(1.6,.55,.8,K.woodDark,0,.5,0));let t=[8007471,3100538,5926458,9071151],e=.9;for(let o=0;o<4;o++){let a=.5-o*.04,c=.36-o*.03,l=zt(a,.07,c,new Ht({color:t[o],roughness:.75}),-.45+o%2*.06,e,0);l.rotation.y=(o-1.5)*.14,i.add(l),e+=.075}let n=new rt(new ee(.7,.5),new Ht({map:Jt.spines,roughness:.7}));n.position.set(.5,1.25,-.1),n.rotation.x=-.35,i.add(n),i.add(zt(.74,.54,.03,K.woodDark,.5,1.25,-.13).rotateX(-.35));let s=Ke("Reading Desk","Manuscripts & books",{w:512,h:140}),r=new rt(new ee(.9,.25),new Ht({map:s,roughness:.55}));return r.position.set(0,.55,.52),i.add(r),i}function Iu({title:i="",kind:t="stupa",accent:e=5074514}={}){let n=new Ot;n.add(Gt(1.5,1.6,.5,K.marbleCream,0,.25,0,32)),n.add(Gt(1.55,1.55,.06,K.brass,0,.53,0,32));let s=new Ot;s.position.y=.56;let r=new Ht({color:15130056,roughness:.7}),o=K.sandstoneRed;if(t==="stupa"){s.add(Gt(.9,1,.18,r,0,.09,0,28));let h=new rt(new Le(.72,28,18,0,Math.PI*2,0,Math.PI/2),r);h.position.y=.18,h.castShadow=!0,s.add(h),s.add(Gt(.1,.22,.34,r,0,1,0,16));let u=Gt(.02,.06,.3,K.gold,0,1.3,0,12);s.add(u)}else if(t==="gate"){s.add(Gt(1,1.1,.14,r,0,.07,0,28));let h=new rt(new Le(.78,28,18,0,Math.PI*2,0,Math.PI/2),r);h.position.y=.14,h.castShadow=!0,s.add(h);for(let u of[-.85,.85])s.add(Gt(.06,.07,.7,o,u,.35,.55,12));s.add(zt(1.9,.1,.1,o,0,.72,.55))}else if(t==="pillar"){s.add(Gt(.8,.9,.16,r,0,.08,0,24)),s.add(Gt(.16,.2,1.4,r,0,.85,0,18)),s.add(Gt(.3,.3,.08,K.gold,0,1.58,0,18));let h=zt(.3,.26,.42,K.gold,0,1.75,0);s.add(h)}else if(t==="hall"){s.add(zt(1.7,.14,1.1,r,0,.07,0)),s.add(zt(1.5,.6,.9,r,0,.44,0));for(let u of[-.6,-.2,.2,.6])s.add(Gt(.05,.05,.5,K.woodDark,u,.4,.5,10));let h=new rt(new Xn(1.15,.5,4),o);h.position.y=1,h.rotation.y=Math.PI/4,s.add(h)}else if(t==="arch"){for(let p of[-.55,.55])s.add(Gt(.12,.14,1.2,r,p,.6,0,14));let h=zt(1.6,.3,.3,r,0,1.3,0);s.add(h);let u=Gt(.03,.1,.4,K.gold,0,1.6,0,10);s.add(u)}else if(t==="tower"){s.add(Gt(.85,.95,.14,r,0,.07,0,24));for(let h=0;h<4;h++){let u=.62-h*.12;s.add(Gt(u,u+.08,.3,r,0,.3+h*.3,0,20))}s.add(Gt(.04,.12,.5,K.gold,0,1.6,0,10))}s.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),n.add(s),n.userData.scene=s;let a=new rt(new Le(1.45,32,20,0,Math.PI*2,0,Math.PI/2),new wi({color:13624050,roughness:.05,transmission:.9,transparent:!0,opacity:.25,thickness:.2,side:We}));a.position.y=.55,n.add(a);let c=Ke(i,"Digital reconstruction",{w:640,h:170,accent:"#8fe0a8"}),l=new rt(new ee(1.3,.35),new Ht({map:c,roughness:.55,emissive:1454623,emissiveIntensity:.5}));return l.position.set(0,.3,1.62),l.rotation.x=-.18,n.add(l),n}function yl(i,t=14267483,e=8){let n=new Ot,s=document.createElement("canvas"),r=64,o=40;s.width=1600,s.height=o*2+r*i.length;let a=s.getContext("2d");a.fillStyle="#0e1524",a.fillRect(0,0,s.width,s.height),a.strokeStyle="#"+t.toString(16).padStart(6,"0"),a.lineWidth=5,a.beginPath(),a.moveTo(210,o),a.lineTo(210,s.height-o),a.stroke(),a.textBaseline="middle",i.forEach((_,y)=>{let m=o+r*y+r/2;a.fillStyle=a.strokeStyle,a.beginPath(),a.arc(210,m,11,0,Math.PI*2),a.fill(),a.font="700 42px Georgia, serif",a.fillStyle="#f4d98c",a.textAlign="right",a.fillText(_.year,180,m),a.font='400 34px "Segoe UI", Arial, sans-serif',a.fillStyle="#e9e2d0",a.textAlign="left";let d=_.text;for(;a.measureText(d).width>s.width-260&&d.length>4;)d=d.slice(0,-4)+"\u2026";a.fillText(d,250,m)});let c=new Wn(s);c.colorSpace=Re,c.anisotropy=8;let l=s.width/s.height,h=e,u=h/l,p=zt(h+.24,u+.24,.07,K.woodDark),f=new rt(new ee(h,u),new Ht({map:c,roughness:.68,emissive:659488,emissiveIntensity:.35}));return f.position.z=.045,n.add(p,f),n}function vl(i,t,e="#d9b45b"){let n=document.createElement("canvas");n.width=1400,n.height=300;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,n.height);r.addColorStop(0,"#131c30"),r.addColorStop(1,"#0c1220"),s.fillStyle=r,s.fillRect(0,0,n.width,n.height),s.strokeStyle=e,s.lineWidth=8,s.strokeRect(14,14,n.width-28,n.height-28),s.textAlign="center",s.textBaseline="middle";let o=96;for(s.font=`600 ${o}px Georgia, serif`;s.measureText(i).width>n.width-120&&o>30;)o-=4,s.font=`600 ${o}px Georgia, serif`;s.fillStyle="#fdf6e6",s.fillText(i,n.width/2,128),s.font='400 40px "Segoe UI", Arial, sans-serif',s.fillStyle=e,s.fillText(t,n.width/2,218);let a=new Wn(n);a.colorSpace=Re,a.anisotropy=8;let c=7.4,l=c*(n.height/n.width),h=new Ot,u=zt(c+.3,l+.3,.08,K.woodDark),p=new rt(new ee(c,l),new Ht({map:a,roughness:.6,emissive:1120814,emissiveIntensity:.5}));return p.position.z=.05,h.add(u,p),h}function Lu(i=7,t=.38){let e=new Ot;return e.add(Gt(t+.14,t+.2,.3,K.marbleCream,0,.15,0)),e.add(Gt(t,t*1.08,i-.6,K.marbleCream,0,i/2,0)),e.add(Gt(t+.2,t+.06,.3,K.marbleCream,0,i-.15,0)),e.add(Gt(t+.05,t+.05,.07,K.brass,0,i-.42,0)),e}function Ml(i=1){let t=new Ot,e=Gt(.02,.02,1.6,K.darkMetal,0,.8,0,8);t.add(e);let n=new rt(new $e(.7*i,.035,8,36),K.brass);n.rotation.x=Math.PI/2,t.add(n);let s=new Ot;for(let o=0;o<8;o++){let a=o/8*Math.PI*2,c=new rt(new Le(.055,10,8),new Te({color:16769704}));c.position.set(Math.cos(a)*.7*i,.05,Math.sin(a)*.7*i),s.add(c);let l=Gt(.05,.08,.09,K.brass,c.position.x,-.02,c.position.z,10);s.add(l)}t.add(s);let r=new rt(new Le(.12,14,10),new Te({color:16772546}));return r.position.y=.02,t.add(r),t.userData.bulbs=s,t}function Sl(){let i=new Ot;return i.add(Gt(.06,.1,.02,K.brass,0,.01,0)),i.add(Gt(.025,.03,.95,K.brass,0,.5,0,12)),i.add(Gt(.05,.04,.06,K.gold,0,1,0,12)),i}function bl(i,t,e=.18,n=8003359){let s=[];for(let c=0;c<=10;c++){let l=c/10;s.push(new I(i.x+(t.x-i.x)*l,.98-Math.sin(l*Math.PI)*e,i.z+(t.z-i.z)*l))}let r=new ks(s),o=new fo(r,20,.022,6,!1),a=new rt(o,new Ht({color:n,roughness:.85}));return a.castShadow=!0,a}function El(){let i=new Ot;i.add(Gt(.3,.22,.4,K.sandstoneRed,0,.2,0)),i.add(Gt(.33,.33,.06,K.woodDark,0,.42,0));for(let t=0;t<7;t++){let e=new rt(new Le(.24,10,8),K.leaf),n=t/7*Math.PI*2;e.position.set(Math.cos(n)*.16,.62+t%3*.16,Math.sin(n)*.16),e.scale.set(1,1.6,.55),e.rotation.z=Math.cos(n)*.7,e.rotation.x=Math.sin(n)*.7,e.castShadow=!0,i.add(e)}return i}function wl(i=2.2){let t=new Ot;t.add(zt(i,.09,.55,K.leather,0,.48,0)),t.add(zt(i,.5,.09,K.leather,0,.76,-.24));for(let e of[-i/2+.15,i/2-.15])t.add(zt(.08,.46,.5,K.woodDark,e,.23,0));return t}function Du(i,t="\u2014 Dr. B. R. Ambedkar"){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(10,18,34,0.55)",n.fillRect(20,20,e.width-40,e.height-40),n.strokeStyle="#d9b45b",n.lineWidth=4,n.strokeRect(20,20,e.width-40,e.height-40),n.fillStyle="#f4ecd8",n.textAlign="center",n.textBaseline="middle",n.font="italic 46px Georgia, serif";let s="\u201C"+i+"\u201D".split(" "),r=[],o="";for(let h of s)(o+" "+h).length>46?(r.push(o),o=h):o=o?o+" "+h:h;r.push(o);let a=210-(r.length-1)*30;r.forEach((h,u)=>n.fillText(h,e.width/2,a+u*62)),n.fillStyle="#d9b45b",n.font="600 34px Georgia, serif",n.fillText(t,e.width/2,400);let c=new Wn(e);c.colorSpace=Re;let l=new rt(new ee(4.4,2.2),To(16777215,.92));return l.material=new Te({map:c,transparent:!0,opacity:.9,side:We,depthWrite:!1,blending:rn}),l}function Uu(){let i=new Ot,t=zt(3.6,.1,1.1,K.woodDark,0,1.05,0),e=zt(3.4,1,.95,K.woodWarm,0,.5,0),n=zt(3.5,.06,1,K.brass,0,.97,0);i.add(e,t,n);let s=new rt(new pn(1.7,1.7,1,24,1,!1,Math.PI*.75,Math.PI*.5),K.woodWarm);s.position.set(0,.5,-.2),s.scale.z=.45,i.add(s);let r=Ke("Archive Reception","Begin your journey here",{w:640,h:170}),o=new rt(new ee(1.5,.4),new Ht({map:r,roughness:.55,emissive:1709064,emissiveIntensity:.45}));return o.position.set(0,.6,.5),o.rotation.x=-.06,i.add(o),i}var Nu={early_life:4021391,social_reform:9196096,constitution:3033710,scholarship:7230517,memorials:5074514,legacy:4214156};function Fu(i,t){let e=null,n=null,s={},r=null,o=[];function a(g){g.traverse(x=>{if(x.geometry&&x.geometry.dispose(),x.material){let C=Array.isArray(x.material)?x.material:[x.material];for(let T of C)T.map&&T.map.isCanvasTexture&&T.map.dispose(),T.dispose&&(T.map&&T.map.isCanvasTexture||T.userData.dispose)&&T.dispose()}}),i.remove(g)}function c(){e&&a(e.group),r&&(i.remove(r.points),r=null),o.length=0,e=null}function l({sun:g=1.05,warm:x=16773856,fog:C=10130308,fogD:T=.0075,sky:A=null}={}){let w=new Ot,b=new Ws(x,g);b.position.set(14,22,10),b.castShadow=!0,b.shadow.mapSize.set(t.quality.shadows?2048:1024,t.quality.shadows?2048:1024),b.shadow.camera.left=-26,b.shadow.camera.right=26,b.shadow.camera.top=26,b.shadow.camera.bottom=-26,b.shadow.camera.far=70,b.shadow.bias=-6e-4,b.shadow.normalBias=.03,w.add(b);let S=new Ws(13623551,g*.22);S.position.set(-12,14,-8),w.add(S);let P=new go(A||8950440,4866616,.75);return w.add(P),i.fog=new Kr(C,T),w}function h(g){let x=t.quality.dust,C=new Ce,T=new Float32Array(x*3),A=new Float32Array(x);for(let S=0;S<x;S++)T[S*3]=qs(-g.x,g.x),T[S*3+1]=qs(.3,g.y),T[S*3+2]=qs(-g.z,g.z),A[S]=qs(100);C.setAttribute("position",new Ye(T,3));let w=new Bs({color:16771520,size:.045,transparent:!0,opacity:.5,depthWrite:!1,blending:rn,sizeAttenuation:!0}),b=new io(C,w);return b.frustumCulled=!1,i.add(b),{points:b,seed:A,update(S){let P=C.attributes.position.array;for(let L=0;L<x;L++)P[L*3]+=Math.sin(S*.25+A[L])*.0016,P[L*3+1]+=Math.cos(S*.2+A[L]*1.7)*.0013,P[L*3+2]+=Math.cos(S*.22+A[L]*.9)*.0016,P[L*3+1]>g.y&&(P[L*3+1]=.3);C.attributes.position.needsUpdate=!0}}}function u(g,x){let C=new rt(new ci(g,64),x);return C.rotation.x=-Math.PI/2,C.receiveShadow=!0,C}function p(){let g=new Ot,x=[],C=[],T=17,A=l({sun:1.12,fogD:.006,fog:9406584});g.add(A);let w=u(T+2,K.marbleCream);g.add(w);let b=u(7.5,K.marbleFloor);b.position.y=.012,b.material=K.marbleFloor.clone(),b.material.map=Jt.floorMed.clone(),b.material.map.repeat.set(1,1),b.material.map.needsUpdate=!0,g.add(b);for(let O of[7.6,12.5,16.6]){let E=new rt(new $e(O,.045,8,96),K.brass);E.rotation.x=Math.PI/2,E.position.y=.02,g.add(E)}let S=new rt(new ee(4.4,20),K.carpet);S.rotation.x=-Math.PI/2,S.position.set(0,.02,7.2),S.receiveShadow=!0,g.add(S);let P=64,L=K.wall.clone();L.map=Jt.sand.clone(),L.map.repeat.set(12,2),L.map.needsUpdate=!0,L.normalMap=Jt.sandN.clone(),L.normalMap.repeat.set(12,2),L.normalMap.needsUpdate=!0,L.side=De;let U=new rt(new pn(T,T,9,P,1,!0),L);U.position.y=4.5,U.receiveShadow=!0,g.add(U);let k=new rt(new pn(T-.06,T-.06,1.4,64,1,!0,0,Math.PI*2),K.woodWarm);k.position.y=.7,k.material.side=De,g.add(k);let G=new rt(new $e(T-.1,.16,8,96),K.brass);G.rotation.x=Math.PI/2,G.position.y=8.55,g.add(G);let H=new rt(new uo(5.2,T+.5,64),K.ceiling);H.rotation.x=Math.PI/2,H.position.y=9,H.receiveShadow=!0,g.add(H);let nt=new rt(new $e(5.2,.28,10,64),K.marbleCream);nt.rotation.x=Math.PI/2,nt.position.y=8.96,g.add(nt);let V=new rt(new ci(6.4,48),new Te({map:Jt.sky,fog:!1}));V.rotation.x=Math.PI/2,V.position.y=11.5,g.add(V);let ot=new rt(new Xn(5.4,8.8,32,1,!0),new Te({color:16770744,transparent:!0,opacity:.05,side:We,depthWrite:!1,blending:rn}));ot.position.y=4.6,ot.rotation.x=Math.PI,g.add(ot);for(let O=0;O<10;O++){let E=Math.PI*.5+O/10*Math.PI*2;if(Math.abs(Math.sin(E))<.28&&Math.cos(E)<0)continue;let M=Math.cos(E)*(T-1.1),D=Math.sin(E)*(T-1.1),Y=Lu(8.6,.4);Y.position.set(M,0,D),g.add(Y),C.push({x:M,z:D,hw:.62,hd:.62})}let ct={},gt=[-12.4,-7.5,-2.6,2.6,7.5,12.4];Js.forEach((O,E)=>{let M=gt[E],D=-16,Y=f(O,Nu[O]);Y.group.position.set(M,0,D),g.add(Y.group),ct[O]=Y,x.push({id:"door_"+O,type:"door",zone:O,title:_n[O].title,pos:new I(M,1.4,D+2),range:3.2})}),C.push({x:0,z:-16.4,hw:16.9,hd:.7});let Nt=Uu();Nt.position.set(0,0,8.6),Nt.rotation.y=Math.PI,g.add(Nt),C.push({x:0,z:8.6,hw:1.95,hd:.75});let Ut=Ao({accent:16767114});Ut.position.set(-2.6,0,8.2),Ut.rotation.y=Math.PI*.92,g.add(Ut),C.push({x:-2.6,z:8.2,hw:.75,hd:.5}),x.push({id:"kiosk_guide",type:"kiosk",title:"Archive Guide Terminal",pos:new I(-2.6,1.3,7.4),range:2.6});let Q=vl("DIGITAL AMBEDKAR HERITAGE MUSEUM","Six galleries \xB7 35 archive records \xB7 offline guide");Q.position.set(0,5.6,-15.9),g.add(Q);let st=new Ot,dt=gl({title:"Dr. B. R. Ambedkar",sub:"Artistic visualization",glow:14267483,radius:.85});st.add(dt);let et=wu(1.6,2,Jt.portrait,K.gold);et.position.set(0,2.35,0),st.add(et);let Mt=new jr(new Fs({map:t.glowTex,color:14267483,transparent:!0,opacity:.5,depthWrite:!1,blending:rn}));Mt.scale.set(4.4,4.4,1),Mt.position.set(0,2.3,-.4),st.add(Mt),st.position.set(0,0,0),g.add(st),C.push({x:0,z:0,hw:1.1,hd:1.1}),x.push({id:"portrait",type:"portrait",title:"Portrait of Dr. Ambedkar",pos:new I(0,1.8,1.8),range:3.2});let Lt=new Gs(16769710,40,22,.5,.55,1.4);Lt.position.set(0,8.4,2.6),Lt.target=st,Lt.castShadow=t.quality.shadows,g.add(Lt);let W=Du("Cultivation of mind should be the ultimate aim of human existence.","\u2014 Dr. B. R. Ambedkar");W.position.set(-6.4,2.6,3.4),W.rotation.y=.7,g.add(W);let tt=new rt(new $e(1.4,.02,8,48),To(14267483,.8));tt.rotation.x=Math.PI/2,tt.position.set(-6.4,.9,3.4),g.add(tt),C.push({x:-6.4,z:3.4,hw:1.2,hd:1.2}),x.push({id:"quote",type:"quote",title:"Hologram Quote",pos:new I(-6.4,1.8,4.6),range:2.8});let at=yl([{year:"1891",text:"Born at Mhow, 14 April"},{year:"1912",text:"B.A., Elphinstone College, Bombay"},{year:"1916",text:"London School of Economics & Gray\u2019s Inn"},{year:"1924",text:"Bahishkrit Hitakarini Sabha"},{year:"1927",text:"Mahad Satyagraha"},{year:"1932",text:"Poona Pact"},{year:"1935",text:"\u201CI was born a Hindu\u2026\u201D"},{year:"1947",text:"India\u2019s first Law Minister"},{year:"1950",text:"Architect of the Constitution"},{year:"1956",text:"Diksha at Deekshabhoomi"}],14267483,9.4);at.position.set(15.7,4.4,0),at.rotation.y=-Math.PI/2,g.add(at),x.push({id:"timeline",type:"timeline",title:"Grand Timeline",pos:new I(14.2,1.6,0),range:4.2});let Dt=_l({title:"Museum Directory",w:3.4,h:2.1,tex:Jt.spines,accent:14267483});Dt.position.set(-15.7,3.6,-1),Dt.rotation.y=Math.PI/2,g.add(Dt);let N=Ke("\u25B8 SIX GALLERIES","Early Life \xB7 Reform \xB7 Constitution \xB7 Scholarship \xB7 Memorials \xB7 Legacy",{w:900,h:300}),te=new rt(new ee(3.6,1.2),new Ht({map:N,roughness:.6,emissive:1120300,emissiveIntensity:.5}));te.position.set(-15.6,5.4,-1),te.rotation.y=Math.PI/2,g.add(te);for(let[O,E]of[[-7,-6],[7,-6],[-7,6],[7,6]]){let M=Ml(1.15);M.position.set(O,7.1,E),g.add(M);let D=new gn(16768160,14,16,2);D.position.set(O,6.9,E),g.add(D),o.push((Y,J)=>{M.position.y=7.1+Math.sin(J*.7+O)*.03,D.intensity=14+Math.sin(J*9+E)*.7})}for(let[O,E,M]of[[-5,12,.3],[5,12,-.3],[10,5,-.9],[-10,5,.9]]){let D=wl();D.position.set(O,0,E),D.rotation.y=M,g.add(D),C.push({x:O,z:E,hw:1.1,hd:.4})}for(let[O,E]of[[13,9],[-13,9],[13,-9],[-13,-9],[-4,-12],[4,-12]]){let M=El();M.position.set(O,0,E),g.add(M),C.push({x:O,z:E,hw:.4,hd:.4})}let Tt=[],At=[];for(let O=0;O<4;O++){let E=Sl();E.position.set(-2.4,0,13-O*1.7),g.add(E),Tt.push(E.position);let M=Sl();M.position.set(2.4,0,13-O*1.7),g.add(M),At.push(M.position),C.push({x:-2.4,z:13-O*1.7,hw:.16,hd:.16}),C.push({x:2.4,z:13-O*1.7,hw:.16,hd:.16})}for(let O=0;O<3;O++)g.add(bl(Tt[O],Tt[O+1])),g.add(bl(At[O],At[O+1]));let mt={x0:-T+1.2,x1:T-1.2,z0:-T+1.2,z1:T-1.2};return o.push((O,E)=>{W.position.y=2.6+Math.sin(E*1.1)*.09,W.material.opacity=.85+Math.sin(E*7)*.06,tt.rotation.z+=O*.4,Mt.material.opacity=.45+Math.sin(E*2.2)*.1;for(let M in ct){let D=ct[M],Y=D.open?1:0;D.openAmount=Se(D.openAmount,Y,5,O),D.left.position.x=-D.openAmount*1.32,D.right.position.x=D.openAmount*1.32,D.ring.material.opacity=.45+Math.sin(E*2.4+gt.indexOf(D.x))*.3+(D.locked?0:.2)}}),{zone:"hub",group:g,interactables:x,colliders:C,bounds:mt,doors:ct,spawns:{default:{x:0,z:13.6,yaw:Math.PI},hubFromGallery:{x:0,z:-12.5,yaw:0}},setDoor(O,{open:E,locked:M}){let D=ct[O];D&&(D.open=E,D.locked=M,D.ring.material.color.set(ae(M)),D.plaque.material.emissiveIntensity=M?.06:.6)},update(O,E){for(let M of o)M(O,E)}};function ae(O){return O?6711925:14267483}}function f(g,x){let C=new Ot,T=_n[g],A=new Ot;A.add(zt(.5,5.4,1.1,K.marbleCream,-1.75,2.7,0)),A.add(zt(.5,5.4,1.1,K.marbleCream,1.75,2.7,0)),A.add(zt(4.1,.6,1.1,K.marbleCream,0,5.5,0));let w=new rt(new Xn(2.6,1,4),K.marbleBlue);w.position.y=6.2,w.rotation.y=Math.PI/4,w.rotation.x=Math.PI,w.scale.z=.4,A.add(w),C.add(A);let b=zt(3.2,.1,.16,new Ht({color:x,emissive:x,emissiveIntensity:1.6,roughness:.4}),0,5.15,.58);C.add(b);let S=Ke(T.title,"",{accent:"#d9b45b",w:720,h:150}),P=new rt(new ee(3.2,.66),new Ht({map:S,roughness:.5,emissive:1576964,emissiveIntensity:.6}));P.position.set(0,4.55,.58),C.add(P);let L=K.woodDark.clone(),U=zt(1.55,4.4,.18,L,-.8,2.25,.1),k=zt(1.55,4.4,.18,L,.8,2.25,.1);for(let nt of[U,k]){let V=zt(1.2,1.6,.06,K.leather,0,.5,.1);nt.add(V);let ot=Gt(.04,.04,.4,K.brass,nt===U?.6:-.6,0,.14,10);ot.rotation.x=Math.PI/2,nt.add(ot)}C.add(U,k);let G=new rt(new $e(1.6,.05,8,48),new Te({color:14267483,transparent:!0,opacity:.6}));G.rotation.x=Math.PI/2,G.position.set(0,.06,1.6),C.add(G);let H=new rt(new ee(3,2.4),K.carpet);return H.rotation.x=-Math.PI/2,H.position.set(0,.03,1.9),C.add(H),{group:C,left:U,right:k,ring:G,plaque:P,open:!1,locked:!0,openAmount:0,zoneId:g,x:0}}function _(g){let x=_n[g],C=Nu[g],T=t.content.zoneById.get(g),A=new Ot,w=[],b=[],S=[],P=l({sun:.95,fogD:.01,fog:7827807,warm:16773338});A.add(P);let L=30,U=20,k=7.6,G=new rt(new ee(L,U),K.marbleCream);G.rotation.x=-Math.PI/2,G.receiveShadow=!0,A.add(G);let H=new rt(new ee(6.5,U-3.5),K.carpet);H.rotation.x=-Math.PI/2,H.position.y=.014,H.receiveShadow=!0,A.add(H);let nt=new Ht({color:C,emissive:C,emissiveIntensity:.5,roughness:.4,metalness:.4});for(let O of[-3.7,3.7]){let E=new rt(new ee(.16,U-3.5),nt);E.rotation.x=-Math.PI/2,E.position.set(O,.02,0),A.add(E)}let V=(O,E,M,D,Y)=>{let J=new rt(new ee(O,E),K.wall);J.position.set(M,E/2,D),J.rotation.y=Y,J.receiveShadow=!0,A.add(J);let Z=new rt(new ee(O,1.4),K.woodWarm);Z.position.set(M,.7,D),Z.rotation.y=Y,Y===0&&(Z.position.z+=D>0?-.03:.03),(Y===Math.PI/2||Y===-Math.PI/2)&&(Z.position.x+=M>0?-.03:.03),Z.receiveShadow=!0,A.add(Z);let St=zt(O,.22,.14,K.brass,0,0,0);St.position.set(M,k-.2,D),St.rotation.y=Y,A.add(St)};V(L,k,0,-U/2,0),V(L,k,0,U/2,Math.PI),V(U,k,-L/2,0,Math.PI/2),V(U,k,L/2,0,-Math.PI/2);let ot=new rt(new ee(L,U),K.ceiling);ot.rotation.x=Math.PI/2,ot.position.y=k,ot.receiveShadow=!0,A.add(ot);for(let O of[-10,-3.4,3.4,10]){let E=zt(.5,.34,U,K.woodDark,O,k-.2,0);A.add(E)}let ct=vl(x.title,x.desc,"#"+C.toString(16).padStart(6,"0"));if(ct.position.set(0,5.4,-U/2+.14),A.add(ct),T.timeline&&T.timeline.length){let O=yl(T.timeline,C,9.4);O.position.set(-L/2+.14,3.9,-2.4),O.rotation.y=Math.PI/2,A.add(O),w.push({id:g+"_timeline",type:"timeline",title:"Timeline \u2014 "+x.title,pos:new I(-L/2+2.2,1.6,-2.4),range:3.4})}let gt=f(g,C);gt.group.position.set(0,0,U/2-.55),gt.group.rotation.y=Math.PI,gt.open=!0,gt.locked=!1,A.add(gt.group),w.push({id:"back_hub",type:"backdoor",zone:g,title:"Return to Rotunda",pos:new I(0,1.4,U/2-2.2),range:2.6});let Nt=Ke("\u25C2 ROTUNDA","Exit gallery",{w:460,h:130}),Ut=new rt(new ee(1.7,.48),new Ht({map:Nt,roughness:.55}));Ut.position.set(0,4.3,U/2-.62),Ut.rotation.y=Math.PI,A.add(Ut);let Q=T.exhibits.filter(O=>O.kind!=="MonumentDiorama"),st=T.exhibits.filter(O=>O.kind==="MonumentDiorama"),dt=Q.filter(O=>["ConstitutionTable","ArchiveTerminal","AIConsole","BookDesk"].includes(O.kind)),et=Q.filter(O=>!["ConstitutionTable","ArchiveTerminal","AIConsole","BookDesk"].includes(O.kind));dt.forEach(O=>{let E,M,D=0;O.kind==="ConstitutionTable"?(E=Cu(),M={x:0,z:-3.4},D=Math.PI):O.kind==="ArchiveTerminal"?(E=Ao({accent:8376575}),M={x:6.4,z:-6.2},D=Math.PI*.85):O.kind==="AIConsole"?(E=Ru(),M={x:-6.4,z:-6.2},D=Math.PI*1.15):(E=Pu(),M={x:-7,z:4.6},D=Math.PI*.15),E.position.set(M.x,0,M.z),E.rotation.y=D,A.add(E),te(E,M.x,M.z,O.kind==="ConstitutionTable"?[1.5,.8]:[1.1,.7]),w.push({id:O.id,type:At(O.kind),title:O.title,exhibit:O,pos:new I(M.x,1.4,M.z+(O.kind==="ConstitutionTable"?1.6:1.3)),range:3}),Tt(M.x,M.z,C)});let Mt=[{x:-12.6,z:-6.4,ry:Math.PI/2},{x:-12.6,z:-1.2,ry:Math.PI/2},{x:-12.6,z:4.6,ry:Math.PI/2},{x:12.6,z:-6.4,ry:-Math.PI/2},{x:12.6,z:-1.2,ry:-Math.PI/2},{x:12.6,z:4.6,ry:-Math.PI/2},{x:-7.4,z:-9.2,ry:0},{x:7.4,z:-9.2,ry:0},{x:-4.6,z:8.4,ry:Math.PI},{x:4.6,z:8.4,ry:Math.PI}],Lt=0;if(et.forEach(O=>{let E=Mt[Lt%Mt.length];Lt++;let M,D=O.title.length>30?O.title.slice(0,28)+"\u2026":O.title;if(O.kind==="WallPanel")M=_l({title:D,w:2.4,h:1.5,accent:C,tex:mt(g,O.id)}),E.ry===Math.PI/2?M.position.set(-L/2+.16,3.1,E.z):E.ry===-Math.PI/2?M.position.set(L/2-.16,3.1,E.z):E.ry===0?M.position.set(E.x,3.1,-U/2+.16):M.position.set(E.x,3.1,U/2-.16),M.rotation.y=E.ry;else if(O.kind==="DisplayCase")M=Tu({title:D,accent:C,item:ae(O.id)}),M.position.set(E.x,0,E.z),M.rotation.y=E.ry;else if(O.kind==="QuizKiosk")M=Au({title:D,accent:C,icon:"\u{1F393}"}),M.position.set(E.x*.62,0,E.z>0?6.8:-7.6),M.rotation.y=E.z>0?Math.PI:0;else{M=gl({title:D,sub:"",glow:C,radius:.6});let J=xl(ae(O.id),C);J.position.y=1.12,M.add(J),M.position.set(E.x*.92,0,E.z*.98),M.rotation.y=E.ry}if(A.add(M),O.kind!=="WallPanel"){let J=O.kind==="DisplayCase"?[1,.6]:O.kind==="QuizKiosk"?[.5,.45]:[.7,.7];te(M,M.position.x,M.position.z,J)}let Y=M.position;if(w.push({id:O.id,type:At(O.kind),title:O.title,exhibit:O,pos:new I(Y.x+Math.sin(E.ry)*(O.kind==="WallPanel"?1.5:1.4),1.4,Y.z+Math.cos(E.ry)*(O.kind==="WallPanel"?1.5:1.4)),range:O.kind==="WallPanel"?2.6:3}),(O.kind==="Pedestal"||O.kind==="DisplayCase")&&(Tt(M.position.x,M.position.z,C),M.traverse(J=>{J.userData&&J.userData.spin&&S.push((Z,St)=>{J.userData.spin.rotation.y+=Z*.5}),J.userData&&J.userData.flame&&S.push((Z,St)=>{J.userData.flame.scale.y=1.55+Math.sin(St*11)*.2,J.userData.flame.position.x=Math.sin(St*6)*.008})}),O.kind==="Pedestal")){let J=M.children.find(Z=>Z.type==="Group");if(J){let Z=J.position.y;S.push((St,ft)=>{J.position.y=Z+Math.sin(ft*1.3)*.045,J.rotation.y+=St*.35})}}}),st.length){let O=["stupa","gate","pillar","hall","arch","tower"];st.forEach((E,M)=>{let D=M/st.length*Math.PI*2+Math.PI/6,Y=Math.cos(D)*8.6,J=Math.sin(D)*5.6-1.2,Z=Iu({title:E.title,kind:O[M%O.length],accent:C});Z.position.set(Y,0,J),Z.rotation.y=-D+Math.PI/2,A.add(Z),te(Z,Y,J,[1.7,1.7]),w.push({id:E.id,type:"diorama",title:E.title,exhibit:E,pos:new I(Y+Math.cos(D)*2.2,1.4,J+Math.sin(D)*2.2),range:3.2}),Tt(Y,J,9429160,18),S.push((St,ft)=>{Z.userData.scene.rotation.y=Math.sin(ft*.24+M)*.14})})}for(let O of[-6,0,6])for(let E of[-3.9,3.9]){let M=Ml(.55);M.position.set(E,k-1,O),A.add(M)}let W=new gn(16769200,22,26,2);W.position.set(0,k-1.4,-4),A.add(W);let tt=new gn(16769200,18,26,2);tt.position.set(0,k-1.4,5),A.add(tt);let at=new gn(C,14,20,2);at.position.set(-8,k-1.6,-4),A.add(at);let Dt=new gn(C,14,20,2);Dt.position.set(8,k-1.6,-4),A.add(Dt);for(let[O,E]of[[-3.9,2.6],[3.9,2.6]]){let M=wl(1.9);M.position.set(O,0,E),M.rotation.y=O>0?-.35:.35,A.add(M),b.push({x:O,z:E,hw:.95,hd:.4})}for(let[O,E]of[[-L/2+1.4,U/2-1.4],[L/2-1.4,U/2-1.4]]){let M=El();M.position.set(O,0,E),A.add(M),b.push({x:O,z:E,hw:.4,hd:.4})}let N={x0:-L/2+.9,x1:L/2-.9,z0:-U/2+.9,z1:U/2-.9};return{zone:g,group:A,interactables:w,colliders:b,bounds:N,spawns:{fromHub:{x:0,z:U/2-3.2,yaw:Math.PI},default:{x:0,z:U/2-3.2,yaw:Math.PI}},setDoor(){},update(O,E){for(let M of S)M(O,E)}};function te(O,E,M,[D,Y]){b.push({x:E,z:M,hw:D,hd:Y})}function Tt(O,E,M,D=26){if(!t.quality.shadows){let Z=new gn(M,D*.6,9,2);Z.position.set(O,4.6,E),A.add(Z);return}let Y=new Gs(16773592,D,11,.44,.6,1.6);Y.position.set(O,6.6,E),Y.target.position.set(O,1,E),Y.castShadow=!1,A.add(Y,Y.target);let J=new rt(new ci(1.4,24),new Te({color:M,transparent:!0,opacity:.07,depthWrite:!1,blending:rn}));J.rotation.x=-Math.PI/2,J.position.set(O,.03,E),A.add(J)}function At(O){switch(O){case"QuizKiosk":return"quiz";case"ArchiveTerminal":return"archive";case"AIConsole":return"ai";case"ConstitutionTable":return"constitution";case"BookDesk":return"desk";default:return"exhibit"}}function mt(O,E){return O==="scholarship"||O==="legacy"?Jt.spines:O==="constitution"?Jt.ms3:E.startsWith("el_")?Jt.ms1:E.startsWith("sr_")?Jt.ms2:Jt.portrait}function ae(O){let E=["urn","book","globe","scroll","lamp","diamond"],M=0;for(let D of O)M=M*31+D.charCodeAt(0)>>>0;return E[M%E.length]}}async function y(){await bu(t.quality),Eu();let g=document.createElement("canvas");g.width=g.height=128;let x=g.getContext("2d"),C=x.createRadialGradient(64,64,4,64,64,64);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.4,"rgba(255,255,255,0.35)"),C.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=C,x.fillRect(0,0,128,128),t.glowTex=new Wn(g)}async function m(g){if(c(),n=g,e=g==="hub"?p():_(g),i.add(e.group),r=h(g==="hub"?{x:15,y:8,z:15}:{x:13,y:6.5,z:8.5}),g==="hub")for(let x of Js){let C=!t.isZoneUnlocked(x);e.setDoor(x,{open:!1,locked:C})}return e}function d(g,x){e&&e.update(g,x),r&&r.update(x)}function v(){if(n==="hub"&&e)for(let g of Js)e.setDoor(g,{open:!1,locked:!t.isZoneUnlocked(g)})}return{init:y,enter:m,update:d,refreshLocks:v,get current(){return e},get zone(){return n},doorOrder:Js}}function Ou({reducedFx:i=!1}={}){let t=new Ot,e=new Ot;t.add(e);let n=K.skin,s=K.suit,r=K.shirt,o=K.tie,a=K.hair,c=new Ot;c.position.y=.98,e.add(c);let l=et(new ue(.34,.2,.2),s,0,0,0);c.add(l);let h=tt=>{let at=new Ot;at.position.set(tt*.1,-.05,0);let Dt=et(new Ei(.075,.3,6,12),s,0,-.21,0);at.add(Dt);let N=new Ot;N.position.y=-.42,at.add(N);let te=et(new Ei(.062,.3,6,12),s,0,-.19,0);N.add(te);let Tt=et(new ue(.11,.07,.24),K.shoe,0,-.39,.05);return N.add(Tt),c.add(at),{hip:at,knee:N}},u=h(-1),p=h(1),f=new Ot;f.position.y=.1,c.add(f);let _=et(new ue(.4,.46,.23),s,0,.23,0);f.add(_);let y=new ue(.1,.3,.02),m=et(y,s,-.07,.26,.12);m.rotation.z=.28,m.rotation.x=-.1;let d=et(y,s,.07,.26,.12);d.rotation.z=-.28,d.rotation.x=-.1,f.add(m,d);let v=et(new ue(.13,.3,.03),r,0,.3,.118);f.add(v);let g=et(new ue(.05,.26,.02),o,0,.28,.14);f.add(g);let x=et(new ue(.05,.05,.03),o,0,.42,.135);f.add(x);let C=et(new ue(.07,.03,.02),r,.12,.3,.12);f.add(C);let T=et(new ue(.05,.06,.01),K.plaqueGold,-.13,.24,.122);f.add(T);let A=tt=>{let at=new Ot;at.position.set(tt*.25,.42,0);let Dt=et(new Ei(.062,.22,6,12),s,0,-.15,0);at.add(Dt);let N=new Ot;N.position.y=-.3,at.add(N);let te=et(new Ei(.052,.2,6,12),s,0,-.13,0);N.add(te);let Tt=et(new Le(.055,12,10),n,0,-.27,0);return Tt.scale.y=1.25,N.add(Tt),f.add(at),{sh:at,elbow:N}},w=A(-1),b=A(1),S=et(new ue(.16,.05,.22),new Ht({color:7221039,roughness:.7}),0,-.3,.04);w.elbow.add(S);let P=et(new pn(.05,.06,.09,12),n,0,.47,0);f.add(P);let L=new Ot;L.position.y=.53,f.add(L);let U=et(new Le(.13,24,20),n,0,.1,0);U.scale.set(.94,1.08,.96),L.add(U),L.add(et(new Le(.032,10,8),n,-.122,.1,0)),L.add(et(new Le(.032,10,8),n,.122,.1,0));let k=new rt(new Le(.135,24,16,0,Math.PI*2,0,Math.PI*.55),a);k.position.set(0,.13,-.012),k.scale.set(.98,1.05,1),L.add(k);let G=new ue(.02,.09,.14);L.add(et(G,a,-.118,.09,-.01)),L.add(et(G,a,.118,.09,-.01));let H=new ue(.05,.012,.015);L.add(et(H,a,-.048,.145,.118)),L.add(et(H,a,.048,.145,.118));let nt=new Le(.02,10,8),V=new Ht({color:16118246,roughness:.3}),ot=new Ht({color:2365970,roughness:.35});for(let tt of[-1,1]){let at=et(nt,V,tt*.05,.118,.115);L.add(at);let Dt=et(new Le(.01,8,6),ot,tt*.05,.118,.132);L.add(Dt)}let ct=et(new Xn(.022,.05,10),n,0,.09,.135);ct.rotation.x=Math.PI/2.1,L.add(ct);let gt=et(new ue(.07,.016,.02),a,0,.052,.128);L.add(gt);let Nt=et(new ue(.045,.008,.012),new Ht({color:7225908,roughness:.6}),0,.03,.126);L.add(Nt);let Ut=new Ot,Q=new Ht({color:9075274,roughness:.3,metalness:.85});for(let tt of[-1,1]){let at=new rt(new $e(.042,.005,8,24),Q);at.position.set(tt*.052,.118,.132),Ut.add(at);let Dt=new rt(new ci(.04,20),K.lens);Dt.position.set(tt*.052,.118,.133),Ut.add(Dt)}let st=et(new ue(.025,.006,.006),Q,0,.122,.134);Ut.add(st);for(let tt of[-1,1]){let at=et(new ue(.006,.006,.15),Q,tt*.093,.122,.06);Ut.add(at)}L.add(Ut),t.traverse(tt=>{tt.isMesh&&(tt.castShadow=!0,tt.receiveShadow=!1)});let dt={speed:0,turn:0,phase:Math.random()*6,talk:0,waveT:0,lookYaw:0,lookPitch:0};function et(tt,at,Dt=0,N=0,te=0){let Tt=new rt(tt,at);return Tt.position.set(Dt,N,te),Tt}function Mt(tt,at,Dt=0,N=0){dt.speed=Se(dt.speed,Dt,10,tt);let te=dt.speed;dt.phase+=tt*(1.7+te*1.35)*(te>.05?1:.6);let Tt=dt.phase,At=en(te/3.6,0,1);if(At>.02){let mt=Math.sin(Tt*Math.PI);u.hip.rotation.x=mt*.72*At,p.hip.rotation.x=-mt*.72*At,u.knee.rotation.x=Math.max(0,-Math.sin(Tt*Math.PI-.9))*.95*At,p.knee.rotation.x=Math.max(0,Math.sin(Tt*Math.PI-.9))*.95*At,w.sh.rotation.x=-mt*.55*At,b.sh.rotation.x=mt*.55*At,w.elbow.rotation.x=-.25-Math.max(0,mt)*.35*At,b.elbow.rotation.x=-.25-Math.max(0,-mt)*.35*At,c.rotation.y=Math.sin(Tt*Math.PI*2)*.06*At,f.rotation.x=.05*At,f.rotation.z=Math.sin(Tt*Math.PI)*.035*At,e.position.y=Math.abs(Math.sin(Tt*Math.PI))*.045*At,e.rotation.z=Math.sin(Tt*Math.PI)*.02*At,L.rotation.x=-.04*At,S.visible=!0}else{let mt=Math.sin(at*1.6);u.hip.rotation.x=Se(u.hip.rotation.x,0,8,tt),p.hip.rotation.x=Se(p.hip.rotation.x,0,8,tt),u.knee.rotation.x=Se(u.knee.rotation.x,0,8,tt),p.knee.rotation.x=Se(p.knee.rotation.x,0,8,tt),w.sh.rotation.x=Se(w.sh.rotation.x,.06+mt*.02,6,tt),b.sh.rotation.x=Se(b.sh.rotation.x,.06-mt*.02,6,tt),w.elbow.rotation.x=Se(w.elbow.rotation.x,-.22,6,tt),b.elbow.rotation.x=Se(b.elbow.rotation.x,-.22,6,tt),c.rotation.y=Se(c.rotation.y,0,6,tt),f.rotation.x=Se(f.rotation.x,.015+mt*.012,6,tt),f.rotation.z=Se(f.rotation.z,Math.sin(at*.8)*.015,4,tt),e.position.y=Se(e.position.y,mt*.006,6,tt),L.rotation.x=Se(L.rotation.x,0,5,tt)}if(dt.talk>0){dt.talk-=tt;let mt=Math.sin(at*9)*.5+.5;b.sh.rotation.x=-.5*mt*.7,b.elbow.rotation.x=-.6-mt*.4,b.sh.rotation.z=-.2*mt}else b.sh.rotation.z=Se(b.sh.rotation.z,0,6,tt);dt.turn=Se(dt.turn,N,6,tt),e.rotation.z+=en(dt.turn*.06,-.09,.09)*At,t.rotation.z=0}function Lt(tt=2){dt.talk=tt}function W(){return dt.phase%1}return{root:t,body:e,headG:L,update:Mt,playTalk:Lt,st:dt,hips:c,spine:f,armR:b,armL:w,legL:u,legR:p}}function Bu(i,t,e,n){let s={pos:new I(0,0,13),yaw:Math.PI,camYaw:Math.PI,camPitch:.28,camDist:5.6,vel:new I,speed:0,turnRate:0,enabled:!1,moveVec:new ut(0,0)},r=new Map,o=!1,a=!1,c={x:0,y:0},l={x:0,y:0},h=null,u={x:0,y:0},p=n.canvas;window.addEventListener("keydown",w=>{w.repeat||(r.set(w.code,!0),(w.code==="KeyW"||w.code==="KeyA"||w.code==="KeyS"||w.code==="KeyD"||w.code==="ArrowUp"||w.code==="ArrowDown"||w.code==="ArrowLeft"||w.code==="ArrowRight")&&w.preventDefault())}),window.addEventListener("keyup",w=>r.delete(w.code)),window.addEventListener("blur",()=>r.clear()),p.addEventListener("click",()=>{s.enabled&&!qn()&&!a&&!n.uiBlocking()&&p.requestPointerLock&&p.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{a=document.pointerLockElement===p;let w=$("lockNote");w&&w.classList.toggle("hidden",a||qn()||!s.enabled)}),p.addEventListener("mousedown",w=>{o=!0,c={x:w.clientX,y:w.clientY}}),window.addEventListener("mouseup",()=>{o=!1}),window.addEventListener("mousemove",w=>{s.enabled&&(a?(s.camYaw-=w.movementX*.0026,s.camPitch=en(s.camPitch+w.movementY*.0022,-.42,1.1)):o&&!n.uiBlocking()&&(s.camYaw-=(w.clientX-c.x)*.005,s.camPitch=en(s.camPitch+(w.clientY-c.y)*.004,-.42,1.1),c={x:w.clientX,y:w.clientY}))}),window.addEventListener("wheel",w=>{!s.enabled||n.uiBlocking()||(s.camDist=en(s.camDist+Math.sign(w.deltaY)*.5,3.2,8.5))},{passive:!0});let f=$("stickBase"),_=$("stickKnob"),y=$("camZone"),m=null,d={x:0,y:0};if(f){let w=()=>{let S=f.getBoundingClientRect();return{x:S.left+S.width/2,y:S.top+S.height/2}};f.addEventListener("pointerdown",S=>{m=S.pointerId,d=w(),f.setPointerCapture(S.pointerId),S.preventDefault(),S.stopPropagation()}),f.addEventListener("pointermove",S=>{if(S.pointerId!==m)return;let P=(S.clientX-d.x)/44,L=(S.clientY-d.y)/44,U=Math.hypot(P,L)||1,k=U>1?1/U:1;l={x:P*k,y:L*k},_.style.transform=`translate(${l.x*34}px, ${l.y*34}px)`});let b=S=>{S.pointerId===m&&(m=null,l={x:0,y:0},_.style.transform="translate(0,0)")};f.addEventListener("pointerup",b),f.addEventListener("pointercancel",b)}if(y){y.addEventListener("pointerdown",b=>{h=b.pointerId,u={x:b.clientX,y:b.clientY},y.setPointerCapture(b.pointerId),b.preventDefault()}),y.addEventListener("pointermove",b=>{b.pointerId!==h||!s.enabled||(s.camYaw-=(b.clientX-u.x)*.007,s.camPitch=en(s.camPitch+(b.clientY-u.y)*.0055,-.42,1.1),u={x:b.clientX,y:b.clientY})});let w=b=>{b.pointerId===h&&(h=null)};y.addEventListener("pointerup",w),y.addEventListener("pointercancel",w)}function v(w,b=.42){let S=i.current;if(!S)return;let P=S.bounds;if(w.x=en(w.x,P.x0+b,P.x1-b),w.z=en(w.z,P.z0+b,P.z1-b),i.zone==="hub"){let L=Math.hypot(w.x,w.z),U=16.9-b;L>U&&(w.x=w.x/L*U,w.z=w.z/L*U)}for(let L of S.colliders){let U=w.x-L.x,k=w.z-L.z,G=L.hw+b-Math.abs(U),H=L.hd+b-Math.abs(k);G>0&&H>0&&(G<H?w.x+=Math.sign(U||1)*G:w.z+=Math.sign(k||1)*H)}}let g=new I,x=new I,C=0;function T(w,b){let S=s.enabled,P=0,L=0;S&&((r.has("KeyW")||r.has("ArrowUp"))&&(L-=1),(r.has("KeyS")||r.has("ArrowDown"))&&(L+=1),(r.has("KeyA")||r.has("ArrowLeft"))&&(P-=1),(r.has("KeyD")||r.has("ArrowRight"))&&(P+=1),P+=l.x,L+=l.y);let U=Math.hypot(P,L);U>1&&(P/=U,L/=U);let k=Math.min(U,1);g.set(Math.sin(s.camYaw),0,Math.cos(s.camYaw)),x.set(g.z,0,-g.x);let G=s.vel;if(G.x=0,G.z=0,k>.05){let ct=(g.x*-L+x.x*P)*3.7*k,gt=(g.z*-L+x.z*P)*3.7*k;s.pos.x+=ct*w,s.pos.z+=gt*w,s.speed=Math.hypot(ct,gt);let Ut=Math.atan2(ct,gt)-s.yaw;for(;Ut>Math.PI;)Ut-=Math.PI*2;for(;Ut<-Math.PI;)Ut+=Math.PI*2;s.yaw+=Ut*Math.min(1,w*10),s.turnRate=en(Ut/Math.max(w,.001)*.08,-1,1),C+=w*(s.speed/3.7),pl(C)}else s.speed=Se(s.speed,0,12,w),s.turnRate=Se(s.turnRate,0,8,w);v(s.pos),e.root.position.copy(s.pos),e.root.rotation.y=s.yaw,e.update(w,b,s.speed,s.turnRate);let H=1.45,nt=s.pos.x+Math.sin(s.camYaw)*Math.cos(s.camPitch)*s.camDist,V=s.pos.z+Math.cos(s.camYaw)*Math.cos(s.camPitch)*s.camDist,ot=H+Math.sin(s.camPitch)*s.camDist+.55;if(t.position.x=Se(t.position.x,nt,14,w),t.position.y=Se(t.position.y,Math.max(ot,.75),14,w),t.position.z=Se(t.position.z,V,14,w),i.zone==="hub"){let ct=Math.hypot(t.position.x,t.position.z);ct>16.6&&(t.position.x*=16.6/ct,t.position.z*=16.6/ct)}t.lookAt(s.pos.x,H,s.pos.z)}function A(w){s.pos.set(w.x,0,w.z),s.yaw=w.yaw??Math.PI,s.camYaw=w.yaw??Math.PI,s.camPitch=.26,s.speed=0,s.vel.set(0,0,0),e.root.position.copy(s.pos),e.root.rotation.y=s.yaw,t.position.set(w.x+Math.sin(s.camYaw)*5.6,2.4,w.z+Math.cos(s.camYaw)*5.6),t.lookAt(w.x,1.4,w.z)}return{state:s,update:T,spawnAt:A,get speed(){return s.speed}}}function zu(i){let t=i.content.missions,e=ge(),n=["early_life","social_reform","constitution","scholarship","memorials","legacy"];function s(){return e.missionIndex>=t.length?null:t[e.missionIndex]}function r(v){return!!e.missionsDone[v]}function o(v){if(!v)return"All missions complete \u2014 free exploration";switch(v.type){case"Interact":return r(v.id)?"Complete":"Objective: "+v.objective;case"DiscoverExhibits":{let g=Object.keys(e.discovered).length;return`Exhibits opened: ${Math.min(g,2)}/2 \xB7 ${v.objective}`}case"CompleteQuiz":{let g=a(v),x=g?e.quizBest[g]:null;return g&&e.quizBest[g]!==void 0?"Checkpoint cleared \xB7 "+v.objective:v.objective}case"SearchArchive":return e.archiveSearched?"Complete":v.objective;case"VisitMemorials":{let g=Object.keys(e.memorialsSeen).length;return`Dioramas visited: ${Math.min(g,2)}/2 \xB7 ${v.objective}`}case"AskAssistant":return e.aiAsked?"Complete":v.objective;default:return v.objective}}function a(v){return v.id.includes("reform")||v.type==="CompleteQuiz"&&v.title.includes("Social")?"quiz_social_reform":v.id.includes("constitution")||v.title.includes("Constitution")?"quiz_constitution":v.id.includes("final")||v.title.includes("Final")?"quiz_final":null}function c(v,g){e.xp+=v,e.level=1+Math.floor(e.xp/150),i.hud.xpToast(`+${v} Knowledge Points${g?" \xB7 "+g:""}`),Be()}function l(v,g=!1){if(!v||e.missionsDone[v.id])return;e.missionsDone[v.id]=!0,e.missionIndex++,c(v.xp,v.title),g||(i.audio.play("objective"),i.hud.achieToast("Mission complete \u2014 "+v.title));let x=s();i.hud.objective(x?x.title:"All missions complete!",x?o(x):"Explore freely \u2014 the certificate is yours."),i.events.emit("missionDone",v),i.world.refreshLocks(),Be()}function h(v,g={}){let x=s();if(!x&&!e.missionIndex)return;let C=!1;if(x){switch(x.type){case"Interact":v==="interact"&&g.id===x.targetId&&(C=!0);break;case"DiscoverExhibits":if(v==="exhibit"){e.discovered[g.zone]=e.discovered[g.zone]||{},e.discovered[g.zone][g.id]=!0;let T=Object.values(e.discovered).reduce((A,w)=>A+Object.keys(w).length,0);e.stats.exhibits=T,T>=2&&(C=!0)}break;case"CompleteQuiz":v==="quiz"&&g.quizId===a(x)&&(C=!0);break;case"SearchArchive":v==="archive"&&(e.archiveSearched=!0,e.stats.searches++,C=!0);break;case"VisitMemorials":if(v==="memorial"){e.memorialsSeen[g.id]=!0;let T=Object.keys(e.memorialsSeen).length;e.stats.memorials=T,T>=2&&(C=!0)}break;case"AskAssistant":v==="ai"&&(e.aiAsked=!0,e.stats.questions++,C=!0);break}C?l(x):(i.hud.objective(x.title,o(x),!0),p())}}let u=0;function p(){let v=Date.now();v-u>4e3&&(u=v,Be())}let f={enter:"m1_enter",early:"m2_earlylife",reform:"m3_reform",constitution:"m4_constitution",archive:"m5_archive",memorials:"m6_memorials",legacy:"m7_legacy",final:"m8_final"},_=()=>Qt.presentation||!!e.presentation;function y(v){if(_())return!0;let g=n.indexOf(v);if(g<0)return!0;if(g===0)return r(f.enter);let x=t.slice(0,g+1),C=t[g];return C?r(C.id):!0}function m(){let v=s();i.hud.objective(v?v.title:"All missions complete!",v?o(v):"Certificate earned \u2014 explore freely")}function d(){let v=s();i.hud.objective(v?v.title:"All missions complete!",v?o(v):"Certificate earned \u2014 explore freely",!0)}return{current:s,done:r,onEvent:h,isZoneUnlocked:y,initUI:m,refresh:d,awardXP:c,completeMission:l,progressText:o,quizForMission:a,mIds:f}}function ku(){let i=0,t=0;function e(u,p,f=!1){let _=$("objBanner");$("objText").textContent=u,$("objMeta").textContent=p||"",f?$("objText").textContent=u:(_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop"))}function n(u,p="E"){let f=$("prompt");if(!u){Kt(f);return}$("promptText").textContent!==u&&($("promptText").textContent=u,$("promptKey").textContent=qn()?"\u270B":p),be(f)}function s(u){let p=$("xpToast");$("xpToastText").textContent=u,p.classList.remove("hidden"),p.style.animation="none",p.offsetWidth,p.style.animation="",clearTimeout(i),i=setTimeout(()=>Kt(p),2400)}function r(u,p="\u2605"){let f=$("achieToast");$("achieToastText").textContent=u,$("achieToastIcon").textContent=p,be(f),f.style.animation="none",f.offsetWidth,f.style.animation="",clearTimeout(f._h),f._h=setTimeout(()=>Kt(f),3100)}function o(u){let p=$("lockedToast");p.textContent="\u{1F512} "+u,be(p),clearTimeout(p._h),p._h=setTimeout(()=>Kt(p),2600)}function a(u,p=0){let f=$("captions");if(!u||!Qt.subs){Kt(f);return}$("captionsText").textContent=u,be(f),clearTimeout(t),p>0&&(t=setTimeout(()=>Kt(f),p))}function c(u){$("compassText").textContent=u}function l(){be($("hud")),qn()?be($("touchUI")):Kt($("touchUI"))}function h(){Kt($("hud"))}return{objective:e,prompt:n,xpToast:s,achieToast:r,locked:o,captions:a,zoneLabel:c,showHud:l,hideHud:h}}function Hu({onNew:i,onContinue:t,onSettings:e,onCredits:n}){let s=$("menu"),r=$("btnNew"),o=$("btnContinue"),a=$("chkPresentation");a.checked=Qt.presentation,a.addEventListener("change",()=>{Qt.presentation=a.checked,fs()}),r.addEventListener("click",()=>{i()}),o.addEventListener("click",()=>{t()}),$("btnSettings").addEventListener("click",()=>e()),$("btnCredits").addEventListener("click",()=>n()),s.querySelectorAll(".btn").forEach(u=>{u.addEventListener("mouseenter",()=>window.__dhjAudio&&window.__dhjAudio.play("hover",{volume:.45})),u.addEventListener("click",()=>window.__dhjAudio&&window.__dhjAudio.play("click"))});function c(u){o.disabled=!u}function l(){c(!1),be(s)}function h(){Kt(s)}return{showMenu:l,hideMenu:h,refreshContinue:c}}function Vu(i){let t=$("intro"),e=$("introCard"),n=$("btnSkipIntro"),s=null;function r(o){be(t),e.style.animation="none",e.offsetWidth,e.style.animation="",s=setTimeout(()=>{Kt(t),o()},7e3),n.onclick=()=>{clearTimeout(s),Kt(t),o()}}return{play:r}}function Gu({onResume:i,onQuit:t,onSave:e,missions:n}){let s=$("pauseScreen"),r=$("progressView");function o(){let l=ge(),h=window.__dhjContent&&window.__dhjContent.missions||[];r.innerHTML="";let u=we("div","pv-mission",`<div><h5>Knowledge Points: ${l.xp}</h5><p>Level ${l.level} \xB7 Exhibits ${l.stats.exhibits} \xB7 Quizzes ${l.stats.quizzes||0} \xB7 Archive items ${l.collected.length}/35</p></div>`);r.appendChild(u),h.forEach((p,f)=>{let _=l.missionsDone[p.id],y=!_&&f===l.missionIndex,m=we("div","pv-mission"+(_?" done":y?" active":""),`<div class="st">${_?"\u2713":f+1}</div>
         <div><h5>${Bt(p.title)}</h5><p>${Bt(p.objective)}</p></div>
         <div class="pv-xp">+${p.xp} XP</div>`);r.appendChild(m)})}$("btnResume").addEventListener("click",()=>i()),$("btnQuit").addEventListener("click",()=>t()),$("btnSaveNow").addEventListener("click",()=>e()),$("btnSettings2").addEventListener("click",()=>be($("settingsScreen"))),$("btnProgress").addEventListener("click",()=>{o(),r.classList.toggle("on")}),s.querySelectorAll("[data-close]").forEach(l=>l.addEventListener("click",()=>Kt($(l.dataset.close))));function a(){o(),r.classList.remove("on"),be(s)}function c(){Kt(s)}return{showPause:a,hidePause:c}}function Tl(i){be($(i))}function Wu(){document.querySelectorAll("[data-close]").forEach(i=>{i.addEventListener("click",()=>{let t=$(i.dataset.close);t&&(Kt(t),window.__dhjAudio&&window.__dhjAudio.play("click"))})})}function Xu(i){yu((t,e)=>{if((t==="master"||t==="music"||t==="sfx")&&i.applyVolumes(),t==="lang"&&window.__dhjRelang&&window.__dhjRelang(e),t==="subs"&&!e){let n=$("captions");n&&Kt(n)}})}function qu({onContinue:i,onMenu:t}){let e=$("certScreen");$("btnCertContinue").addEventListener("click",()=>{Kt(e),i()}),$("btnCertMenu").addEventListener("click",()=>{Kt(e),t()});function n(){let s=ge();$("certName").textContent=s.name||"Visitor",$("certStats").innerHTML=`
      <div><b>${s.xp}</b><span>Knowledge Points</span></div>
      <div><b>${s.stats.exhibits}</b><span>Exhibits</span></div>
      <div><b>${Object.keys(s.quizBest).length}</b><span>Checkpoints</span></div>
      <div><b>35</b><span>Archive Records</span></div>`,$("certDate").textContent=new Date().toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),be(e)}return{showCert:n}}function Yu(i){let t=$("exhibitPanel"),e=$("cardPanel"),n=null,s=$("docViewer"),r=$("exImg"),o={scale:1,x:0,y:0,drag:null};function a(){r.style.transform=`translate(calc(-50% + ${o.x}px), calc(-50% + ${o.y}px)) scale(${o.scale})`}function c(){o={scale:1,x:0,y:0,drag:null},a()}s.addEventListener("pointerdown",d=>{o.drag={x:d.clientX-o.x,y:d.clientY-o.y},s.classList.add("grabbing"),s.setPointerCapture(d.pointerId),d.preventDefault()}),s.addEventListener("pointermove",d=>{o.drag&&(o.x=d.clientX-o.drag.x,o.y=d.clientY-o.drag.y,a())});let l=()=>{o.drag=null,s.classList.remove("grabbing")};s.addEventListener("pointerup",l),s.addEventListener("pointercancel",l),s.addEventListener("wheel",d=>{d.preventDefault(),o.scale=Math.min(3.4,Math.max(.7,o.scale-Math.sign(d.deltaY)*.18)),a()},{passive:!1});let h=null;s.addEventListener("touchstart",d=>{d.touches.length===2&&(h=Math.hypot(d.touches[0].clientX-d.touches[1].clientX,d.touches[0].clientY-d.touches[1].clientY))},{passive:!0}),s.addEventListener("touchmove",d=>{if(d.touches.length===2&&h){let v=Math.hypot(d.touches[0].clientX-d.touches[1].clientX,d.touches[0].clientY-d.touches[1].clientY);o.scale=Math.min(3.4,Math.max(.7,o.scale*(v/h))),h=v,a(),d.preventDefault()}},{passive:!1}),s.addEventListener("touchend",()=>{h=null});function u(d,v){n=document.activeElement;let g=d.archiveId?i.content.byId.get(d.archiveId):null;$("exKind").textContent=d.kind?d.kind.replace(/([A-Z])/g," $1").trim().toUpperCase():"EXHIBIT",$("exTitle").textContent=d.title;let x=$("exText");if(g){x.innerHTML=`
        <p>${Bt(g.description)}</p>
        <div class="meta-chips">
          <span class="chip gold">${Bt(g.category)}</span>
          ${g.period?`<span class="chip">${Bt(g.period)}</span>`:""}
          ${g.date?`<span class="chip">${Bt(g.date)}</span>`:""}
          ${g.location?`<span class="chip">${Bt(g.location)}</span>`:""}
          ${(g.keywords||[]).slice(0,5).map(b=>`<span class="chip">#${Bt(b)}</span>`).join("")}
        </div>
        <div class="src">Source: ${Bt(g.source||"\u2014")}</div>
        <div class="src">Record id: ${Bt(g.id)}</div>`;let A=g.media&&g.media.ref,w=A?A.replace("Art/Images/","art/Images/")+(A.endsWith(".png")?"":".png"):null;r.src=w||p(d.id),$("exImgLabel").textContent=g.media&&g.media.label||"Manuscript facsimile \u2014 artistic visualization"}else x.innerHTML=`<p>${Bt(d.text||"This exhibit forms part of the museum collection. Open the archive terminal for the full catalogue record.")}
        </p><div class="src">Digital Ambedkar Heritage Museum</div>`,r.src=p(d.id),$("exImgLabel").textContent="Artistic visualization \u2014 not a historical photograph";c(),be(t),i.audio.play("open"),i.character&&i.character.playTalk(3);let C=$("btnCollect"),T=g&&ge().collected.includes(g.id);C.textContent=T?"\u2713 In My Digital Archive":"\u2606 Add to My Digital Archive",C.disabled=T||!g,C.onclick=()=>{if(!g)return;let A=ge();A.collected.includes(g.id)||(A.collected.push(g.id),Be(),i.audio.play("pickup"),i.hud.achieToast("Added to My Digital Archive \u2014 "+g.title,"\u{1F5C2}"),C.textContent="\u2713 In My Digital Archive",C.disabled=!0,i.events.emit("collect",g.id))},$("btnExClose").onclick=()=>f()}function p(d=""){let v=0;for(let g of d)v+=g.charCodeAt(0);return`art/Images/manuscript_placeholder_${v%3+1}.png`}function f(){Kt(t),n&&n.focus&&n.focus()}function _(d){let v=i.content.byId.get(d);if(!v)return;$("cardTitle").textContent=v.title,$("cardBody").innerHTML=`
      <div class="kv"><div class="k">Category</div><div>${Bt(v.category)}</div></div>
      <div class="kv"><div class="k">Period</div><div>${Bt(v.period||"\u2014")}</div></div>
      <div class="kv"><div class="k">Date</div><div>${Bt(v.date||"\u2014")}</div></div>
      <div class="kv"><div class="k">Location</div><div>${Bt(v.location||"\u2014")}</div></div>
      <div class="kv"><div class="k">Author</div><div>${Bt(v.author&&v.author!=="\u2014"?v.author:"Dr. B. R. Ambedkar")}</div></div>
      <div class="desc">${Bt(v.description)}</div>
      <div class="kv"><div class="k">Source</div><div>${Bt(v.source||"\u2014")}</div></div>
      <div class="kv"><div class="k">Record id</div><div><code>${Bt(v.id)}</code></div></div>
      ${v.related&&v.related.length?`<div class="card-rel">${v.related.map(x=>`<button data-rel="${Bt(x)}">\u2192 ${Bt(x)}</button>`).join("")}</div>`:""}`,$("cardBody").querySelectorAll("[data-rel]").forEach(x=>{x.addEventListener("click",()=>_(x.dataset.rel))}),be(e),i.audio.play("page");let g=ge();g.collected.includes(v.id)||(g.collected.push(v.id),Be(),i.audio.play("pickup",{volume:.7}),i.events.emit("collect",v.id)),$("btnCardClose").onclick=()=>Kt(e)}function y(){return[t,e,$("archivePanel"),$("aiPanel"),$("quizPanel"),$("myArchivePanel")].some(d=>!d.classList.contains("hidden"))}function m(){[t,e,$("archivePanel"),$("aiPanel"),$("myArchivePanel")].forEach(Kt)}return{openExhibit:u,openCard:_,close:f,anyOpen:y,closeAll:m}}function $u(i){let t=$("quizPanel"),e=$("quizBody"),n=$("quizNext"),s=$("quizScore"),r=null,o=0,a=!1,c=0,l=null,h=null;$("quizClose").addEventListener("click",()=>{if(!r)return m()}),n.addEventListener("click",_);function u(g,x){if(r=i.content.quizById.get(g),!r){console.warn("missing quiz",g);return}h=x,o=0,c=0,a=!1,l=null,$("quizTitle").textContent=r.title,$("quizKicker").textContent="KNOWLEDGE CHECKPOINT",$("quizIntro").textContent=r.intro||"",be(t),p()}function p(){let g=r.questions[o];a=!1,l=null,n.disabled=!0,n.textContent="Submit Answer",$("quizBar").style.width=`${o/r.questions.length*100}%`,s.textContent=`Question ${o+1} / ${r.questions.length} \xB7 Score ${c}`,$("quizIntro").style.display=o===0?"":"none",e.innerHTML="";let x=we("div","quiz-q",Bt(g.question));if(e.appendChild(x),g.type==="MultipleChoice"||g.type==="TrueFalse"){let C=we("div","quiz-opts");g.answers.forEach((T,A)=>{let w=we("button","quiz-opt",`<span class="qo-key">${g.type==="TrueFalse"?A===0?"T":"F":String.fromCharCode(65+A)}</span>${Bt(T)}`);w.style.animationDelay=`${A*.05}s`,w.addEventListener("click",()=>{a||(C.querySelectorAll(".quiz-opt").forEach(b=>b.classList.remove("sel")),w.classList.add("sel"),l=A,n.disabled=!1,i.audio.play("click"))}),C.appendChild(w)}),e.appendChild(C),n.style.display=""}else if(g.type==="Ordering"){let C=g.answers.map((A,w)=>w);for(let A=C.length-1;A>0;A--){let w=Math.random()*(A+1)|0;[C[A],C[w]]=[C[w],C[A]]}C.every((A,w)=>A===(g.correctOrder?g.correctOrder[w]:w))&&C.length>1&&([C[0],C[C.length-1]]=[C[C.length-1],C[0]]),l=C.slice();let T=we("div","quiz-order");C.forEach((A,w)=>{let b=we("div","qo-item",`<span class="num">${w+1}</span><span>${Bt(g.answers[A])}</span>
           <span class="qo-actions"><button data-a="up">\u25B2</button><button data-a="down">\u25BC</button></span>`);b.querySelectorAll("button").forEach(S=>{S.addEventListener("click",()=>{if(a)return;let P=l,L=P.indexOf(A),U=S.dataset.a==="up"?L-1:L+1;U<0||U>=P.length||([P[L],P[U]]=[P[U],P[L]],i.audio.play("click",{volume:.6}),f(T,P,g))})}),T.appendChild(b)}),e.appendChild(T),n.style.display="",n.disabled=!1,n.textContent="Submit Order",a=!1,l={type:"order",arr:l};return}else if(g.type==="Matching"){let T=(g.pairs||g.answers).map((G,H)=>Array.isArray(G)?{k:G[0],v:G[1]}:{k:G.left||G.a||G.k,v:G.right||G.b||G.v,i:H}),A=[...T];for(let G=A.length-1;G>0;G--){let H=Math.random()*(G+1)|0;[A[G],A[H]]=[A[H],A[G]]}let w=we("div","quiz-match"),b=we("div","match-col","<h5>Statements</h5>"),S=we("div","match-col","<h5>Matches</h5>"),P=null,L={},U={},k={};T.forEach((G,H)=>{let nt=we("button","match-chip",Bt(G.k));nt.style.animation=`archIn .3s ease both ${H*.05}s`,nt.addEventListener("click",()=>{a||nt.classList.contains("done")||(b.querySelectorAll(".match-chip").forEach(V=>V.classList.remove("sel")),nt.classList.add("sel"),P=H,i.audio.play("click",{volume:.6}))}),U[H]=nt,b.appendChild(nt)}),A.forEach((G,H)=>{let nt=T.indexOf(G),V=we("button","match-chip",Bt(G.v));V.style.animation=`archIn .3s ease both ${H*.05}s`,V.addEventListener("click",()=>{a||P===null||V.classList.contains("done")||(L[P]=nt,V.classList.add("done","paired"),U[P].classList.remove("sel"),U[P].classList.add("done","paired"),P=null,i.audio.play("click",{volume:.7}),Object.keys(L).length===T.length&&(n.disabled=!1))}),k[H]=V,S.appendChild(V)}),w.appendChild(b,S),e.appendChild(w),n.style.display="",n.disabled=!0,n.textContent="Submit Matches",l={type:"match",matches:L};return}n.textContent="Submit Answer"}function f(g,x,C){g.innerHTML="",x.forEach((T,A)=>{let w=we("div","qo-item",`<span class="num">${A+1}</span><span>${Bt(C.answers[T])}</span>
         <span class="qo-actions"><button data-a="up">\u25B2</button><button data-a="down">\u25BC</button></span>`);w.querySelectorAll("button").forEach(b=>{b.addEventListener("click",()=>{if(a)return;let S=x.indexOf(T),P=b.dataset.a==="up"?S-1:S+1;P<0||P>=x.length||([x[S],x[P]]=[x[P],x[S]],i.audio.play("click",{volume:.6}),f(g,x,C))})}),g.appendChild(w)}),l={type:"order",arr:x}}function _(){let g=r.questions[o];if(a)o++,o<r.questions.length?p():y();else{let x=!1;if(g.type==="MultipleChoice"||g.type==="TrueFalse"){if(l===null)return;x=l===g.correctIndex,a=!0,e.querySelectorAll(".quiz-opt").forEach((T,A)=>{T.classList.remove("sel"),A===g.correctIndex?T.classList.add("correct"):A===l&&T.classList.add("wrong"),T.style.pointerEvents="none"})}else if(g.type==="Ordering"){let T=g.correctOrder||g.answers.map((A,w)=>w);x=l.arr.every((A,w)=>A===T[w]),a=!0,e.querySelectorAll(".qo-item").forEach(A=>{A.classList.add("placed")})}else if(g.type==="Matching"){let T=g.pairs||g.answers;x=Object.entries(l.matches).every(([A,w])=>+A===w)&&Object.keys(l.matches).length===T.length,a=!0}x?(c++,i.audio.play("correct")):i.audio.play("wrong");let C=we("div","quiz-expl "+(x?"good":"bad"),`<b>${x?"\u2713 Correct!":"\u2717 Not quite."}</b> ${Bt(g.explanation||"")}
         ${g.source?`<span class="src">${Bt(g.source)}</span>`:""}`);e.appendChild(C),s.textContent=`Question ${o+1} / ${r.questions.length} \xB7 Score ${c}`,n.textContent=o<r.questions.length-1?"Next Question \u2192":"See Results \u2192",n.disabled=!1}}function y(){let g=r.questions.length,x=ge(),C=x.quizBest[r.id],T=C===void 0;(C===void 0||c>C)&&(x.quizBest[r.id]=c),x.stats.quizzes=Object.keys(x.quizBest).length;let A=T?20+c*5:Math.max(5,c*2);Be(),$("quizBar").style.width="100%",e.innerHTML=`
      <div class="quiz-result">
        <div class="qr-em">${c===g?"\u{1F3C6}":c>=g*.6?"\u{1F396}":"\u{1F4D6}"}</div>
        <h3>${c} / ${g}</h3>
        <p>${c===g?"Outstanding! Perfect checkpoint.":c>=g*.6?"Well done \u2014 checkpoint cleared.":"Review the exhibits and try again to improve your score."}</p>
        <div class="qr-xp">+${A} Knowledge Points</div>
        ${C!==void 0&&!T?`<p style="font-size:13px;color:#7d869c;margin-top:8px">Best score: ${Math.max(C,c)} / ${g}</p>`:""}
      </div>`,s.textContent="Checkpoint complete",n.textContent="Close",a=!0,n.disabled=!1,n.onclick=()=>{m(!0),i.events.emit("quizDone",{quizId:r.id,score:c,total:g})},i.hud.xpToast(`+${A} Knowledge Points`),c>=g*.6&&i.hud.achieToast("Checkpoint cleared \u2014 "+r.title,"\u{1F393}"),i.missions.onEvent("quiz",{quizId:r.id,score:c,total:g}),Be()}function m(g=!1){Kt(t);let x=h;r=null,n.onclick=_,x&&x(g)}function d(){return!t.classList.contains("hidden")}function v(){return r?a&&o>=r.questions.length?(m(!0),!0):(m(!1),!0):!1}return{start:u,isOpen:d,requestClose:v}}function Zu(i){let t=$("archivePanel"),e=$("myArchivePanel"),n=$("aiPanel");function s(){be(t),$("myCount").textContent=ge().collected.length,$("archQ").value="",$("archResults").innerHTML="",o(i.content.items.slice(0,8).map(y=>({item:y,score:0})),!0),setTimeout(()=>$("archQ").focus(),60)}function r(y){let m=y.trim().toLowerCase();if(!m)return;let d=i.guide.search(y,6);o(d,!1,m),i.missions.onEvent("archive",{q:m}),i.audio.play("page")}function o(y,m=!1,d=""){let v=$("archResults");if(v.innerHTML="",!y.length){v.appendChild(we("div","arch-empty","No records matched \u201C"+Bt(d)+"\u201D. Try: constitution, Mahad, education, rights\u2026"));return}y.forEach((g,x)=>{let C=g.item,T=we("div","arch-item",`
        <h4>${Bt(C.title)}</h4>
        <span class="arch-score">${m?Bt(C.category):Math.round(g.score*100)+"% match"}</span>
        <div class="arch-meta">${Bt(C.category)} \xB7 ${Bt(C.date||C.period||"")} \xB7 <code>${Bt(C.id)}</code></div>
        <div class="arch-desc">${Bt(C.description)}
          <div class="src" style="margin-top:8px;font-size:12px;color:#98a1b5">Source: ${Bt(C.source||"\u2014")}</div>
        </div>`);T.style.animationDelay=`${x*.05}s`,T.addEventListener("click",()=>{if(T.classList.contains("open")){i.exhibits.openCard(C.id);return}v.querySelectorAll(".arch-item").forEach(A=>A.classList.remove("open")),T.classList.add("open"),i.audio.play("click",{volume:.6})}),T.addEventListener("dblclick",()=>i.exhibits.openCard(C.id)),v.appendChild(T)})}$("btnArchSearch").addEventListener("click",()=>r($("archQ").value)),$("archQ").addEventListener("keydown",y=>{y.key==="Enter"&&r($("archQ").value)}),$("btnMyArchive").addEventListener("click",()=>{Kt(t),a()});function a(){let y=ge();$("myCount").textContent=y.collected.length;let m=$("myArchiveList");m.innerHTML="",y.collected.length?y.collected.forEach((d,v)=>{let g=i.content.byId.get(d);if(!g)return;let x=we("div","arch-item myarchive-item",`
          <h4>${Bt(g.title)}</h4>
          <span class="badge-have">COLLECTED</span>
          <div class="arch-meta">${Bt(g.category)} \xB7 <code>${Bt(g.id)}</code></div>`);x.style.animationDelay=`${v*.04}s`,x.addEventListener("click",()=>i.exhibits.openCard(d)),m.appendChild(x)}):m.appendChild(we("div","arch-empty","Nothing collected yet. Open exhibits and knowledge cards to build your personal archive.")),be(e),i.audio.play("page")}let c=$("aiLog");function l(){be(n),c.children.length||u("Namaskar! I am the Offline Archive Guide. I answer strictly from the thirty-five curated records and always cite them. Ask me anything \u2014 for example, \u201CWhat are Fundamental Rights?\u201D"),setTimeout(()=>$("aiQ").focus(),60)}function h(y){c.appendChild(we("div","ai-msg me",Bt(y))),c.scrollTop=c.scrollHeight}function u(y,m=[]){let d=we("div","ai-msg bot",`
      ${Bt(y)}
      ${m.length?`<span class="ai-src-k">Sources</span><span class="ai-sources">${m.map(v=>`<span>${Bt(v)}</span>`).join("")}</span>`:""}`);c.appendChild(d),c.scrollTop=c.scrollHeight}function p(){let y=$("aiQ").value.trim();if(!y)return;h(y),$("aiQ").value="",i.audio.play("click");let m=we("div","ai-msg bot",'<span class="ai-typing"><i></i><i></i><i></i></span>');c.appendChild(m),c.scrollTop=c.scrollHeight,setTimeout(()=>{m.remove();let d=i.guide.answer(y);u(d.text,d.sources),i.audio.play("correct",{volume:.4}),i.missions.onEvent("ai",{q:y})},650+Math.random()*500)}$("btnAiAsk").addEventListener("click",p),$("aiQ").addEventListener("keydown",y=>{y.key==="Enter"&&p()});function f(){return[t,e,n].some(y=>!y.classList.contains("hidden"))}function _(){[t,e,n].forEach(Kt)}return{openArchive:s,openMyArchive:a,openAI:l,isOpen:f,closeAll:_,renderResults:o}}function Ju(i){let t=$("mapScreen"),e=$("mapCanvas"),n=e.getContext("2d");function s(){let _=e.width,y=e.height;n.clearRect(0,0,_,y),n.fillStyle="#0a101e",n.fillRect(0,0,_,y);let m=i.world.zone;m==="hub"?r(_,y):o(m,_,y),l(m)}function r(_,y){let m=_/2,d=y/2+6,v=Math.min(_,y)*.4;n.beginPath(),n.arc(m,d,v,0,Math.PI*2),n.fillStyle="#141d33",n.fill(),n.strokeStyle="#d9b45b88",n.lineWidth=3,n.stroke(),n.beginPath(),n.arc(m,d,v*.42,0,Math.PI*2),n.strokeStyle="#d9b45b44",n.lineWidth=2,n.stroke(),n.fillStyle="#d9b45b",n.beginPath(),n.arc(m,d,7,0,Math.PI*2),n.fill(),c("Portrait",m+12,d+4,"#f4d98c");let g=i.world.doorOrder,x=[-12.4,-7.5,-2.6,2.6,7.5,12.4],C=v/17;g.forEach((A,w)=>{let b=m+x[w]*C,S=d-16*C,P=i.missions.isZoneUnlocked(A),L=i.world.zone===A;n.fillStyle=P?"#d9b45b":"#5a6070",n.fillRect(b-20,S-8,40,12),n.fillStyle=P?"#f4d98c":"#8a90a0",n.font='10px "Segoe UI", sans-serif',n.textAlign="center";let U={early_life:"1\xB7EARLY",social_reform:"2\xB7REFORM",constitution:"3\xB7CONSTIT",scholarship:"4\xB7ARCHIVE",memorials:"5\xB7MEMORIAL",legacy:"6\xB7LEGACY"}[A];n.fillText((P?"":"\u{1F512}")+U,b,S-14)}),n.fillStyle="#7fd0ff",n.fillRect(m-30,d+v*.5,60,10),c("Reception / Guide",m,d+v*.5+26,"#7fd0ff");let T=i.player&&i.player.state;if(T){let A=m+T.pos.x*C,w=d+T.pos.z*C;a(A,w,T.yaw)}c("N",m,d-v-12,"#98a1b5")}function o(_,y,m){let d=i.content.zoneById.get(_),v=y/2,g=m/2,x=Math.min(y/34,m/24);n.fillStyle="#141d33",n.fillRect(v-15*x,g-10*x,30*x,20*x),n.strokeStyle="#d9b45b88",n.lineWidth=3,n.strokeRect(v-15*x,g-10*x,30*x,20*x),n.fillStyle="#1c2742",n.fillRect(v-3.2*x,g-10*x,6.4*x,20*x),n.fillStyle="#f4d98c",n.font="600 15px Georgia, serif",n.textAlign="center",n.fillText(i.content.zoneMeta[_].title,v,g-10*x-14);let C=d.exhibits,T=i.world.current&&i.world.current.interactables||[];for(let w of T){if(w.type==="backdoor")continue;let b=v+w.pos.x*x,S=g+w.pos.z*x,P="#d9b45b";w.type==="quiz"?P="#8fe0a8":w.type==="archive"?P="#7fd0ff":w.type==="ai"?P="#b3a6ff":w.type==="diorama"?P="#8fe0a8":(w.type==="timeline"||w.type==="portrait"||w.type==="quote")&&(P="#c9b4ff"),n.fillStyle=P,n.beginPath(),n.arc(b,S,5,0,Math.PI*2),n.fill();let L=ge().discovered[_]||{};w.exhibit&&L[w.exhibit.id]&&(n.strokeStyle="#fff",n.lineWidth=1.4,n.beginPath(),n.arc(b,S,7.5,0,Math.PI*2),n.stroke())}n.fillStyle="#d9b45b",n.fillRect(v-18,g+10*x-4,36,9),c("\u25C2 Rotunda",v,g+10*x+20,"#d9b45b");let A=i.player&&i.player.state;A&&a(v+A.pos.x*x,g+A.pos.z*x,A.yaw)}function a(_,y,m){n.save(),n.translate(_,y),n.rotate(-m+Math.PI),n.fillStyle="#ff5f52",n.beginPath(),n.moveTo(0,-9),n.lineTo(6,7),n.lineTo(0,3),n.lineTo(-6,7),n.closePath(),n.fill(),n.strokeStyle="#fff",n.lineWidth=1.4,n.stroke(),n.restore()}function c(_,y,m,d="#cfd6e4"){n.fillStyle=d,n.font='11px "Segoe UI", sans-serif',n.textAlign="left",n.fillText(_,y,m)}function l(_){$("mapLegend").innerHTML=`
      <span><i style="background:#ff5f52"></i>You</span>
      <span><i style="background:#d9b45b"></i>Exhibit</span>
      <span><i style="background:#8fe0a8"></i>Quiz / Memorial</span>
      <span><i style="background:#7fd0ff"></i>Archive terminal</span>
      <span><i style="background:#b3a6ff"></i>AI Guide</span>
      <span><i style="background:${Qt.presentation?"#d9b45b":"#5a6070"}"></i>Door ${Qt.presentation?"(all open)":"(locked = finish missions)"}</span>`}function h(){s(),be(t),i.audio.play("page")}function u(){Kt(t)}function p(){return!t.classList.contains("hidden")}function f(){p()?u():h()}return{open:h,close:u,isOpen:p,toggle:f,draw:s}}var Ro=i=>new Promise(t=>setTimeout(t,i)),oe="boot",Rn="hub";function cx(){let i=qn(),t=window.devicePixelRatio||1,e=Qt.reducedFx,n=Math.min(screen.width,screen.height)<480;return i||n?{desktop:!1,pixelRatio:Math.min(t,1.3),shadows:!e,dust:e?40:110,aniso:4,aa:!1,env:!0}:{desktop:!0,pixelRatio:Math.min(t,1.75),shadows:!e,dust:e?60:240,aniso:8,aa:!e,env:!0}}async function lx(){let i=$("bootFill"),t=$("bootMsg"),e=(W,tt)=>{i.style.width=W+"%",t.textContent=tt};Qc(),sl(),e(6,"Loading localization\u2026"),await jc(Qt.lang),ul(),window.__dhjAudio=Zs,e(14,"Loading the 35-record archive\u2026");let n=await Mu();window.__dhjContent=n;let s=Su(n.items);e(26,"Warming up the renderer\u2026");let r=$("gl"),o=new Jr({canvas:r,antialias:!0,powerPreference:"high-performance"}),a=cx();o.setPixelRatio(a.pixelRatio),o.setSize(innerWidth,innerHeight),o.outputColorSpace=Re,o.toneMapping=Hc,o.toneMappingExposure=1.06,o.shadowMap.enabled=a.shadows,o.shadowMap.type=kc;let c=new rs,l=new ze(58,innerWidth/innerHeight,.1,160);l.position.set(0,4,16),e(38,"Generating textures and materials\u2026");let h={canvas:r,scene:c,camera:l,renderer:o,content:n,guide:s,quality:a,events:new So,audio:Zs,hud:null,missions:null,world:null,character:null,player:null,exhibits:null,uiBlocking:()=>oe!=="play"||u(),isZoneUnlocked:()=>!0};function u(){return document.querySelectorAll(".overlay:not(.hidden)").length>0}let p=new ss(o);c.environment=p.fromScene(new Mo,.06).texture;let f=Fu(c,h);h.world=f,await f.init(),e(60,"Building the rotunda\u2026"),await f.enter("hub"),e(72,"Tailoring the character\u2026");let _=Ou({reducedFx:Qt.reducedFx});c.add(_.root),h.character=_,h.hud=ku(),h.exhibits=Yu(h);let y=$u(h),m=Zu(h),d=Ju(h),v=zu(h);h.missions=v,h.isZoneUnlocked=W=>v.isZoneUnlocked(W);let g=Bu(f,l,_,h);h.player=g,g.spawnAt({x:0,z:13.6,yaw:Math.PI}),e(86,"Curating missions\u2026"),Wu(),Xu(Zs);let x=Hu({onNew:()=>H(),onContinue:()=>nt(),onSettings:()=>Tl("settingsScreen"),onCredits:()=>Tl("creditsScreen")}),C=Vu(W=>V()),T=Gu({onResume:()=>ot(),onQuit:()=>gt(),onSave:()=>{Be(),h.hud.achieToast("Progress saved","\u{1F4BE}")},missions:v}),A=qu({onContinue:()=>{Kt($("certScreen")),Nt()},onMenu:()=>{Kt($("certScreen")),gt()}});h.cert=A;function w(){let W=[...document.querySelectorAll(".overlay:not(.hidden)")];return W[W.length-1]}function b(){document.pointerLockElement&&document.exitPointerLock()}function S(){let W=oe!=="play"||u();g.state.enabled=oe==="play"&&!u(),W&&b();let tt=$("lockNote");tt&&tt.classList.toggle("hidden",!(oe==="play"&&!u()&&!qn()&&!document.pointerLockElement))}async function P(W,tt="default"){if(oe!=="play")return;g.state.enabled=!1,bo(!0),await Ro(480);let at=await f.enter(W);Rn=W;let Dt=at.spawns[tt]||at.spawns.default;if(g.spawnAt(Dt),ge().zone=W,ge().pos={x:Dt.x,z:Dt.z},ge().yaw=Dt.yaw,Be(),h.hud.zoneLabel(W==="hub"?"HUB \xB7 ROTUNDA":_n[W].title),v.refresh(),bo(!1),await Ro(120),g.state.enabled=!0,W!=="hub"){let N=v.current();h.hud.captions(_n[W].desc,5200),ke("door")}}let L=null;function U(){if(oe!=="play"||u()){L=null,h.hud.prompt(null);return}let W=f.current?f.current.interactables:[],tt=null,at=1/0,Dt=g.state.pos;for(let te of W){let Tt=te.pos.x-Dt.x,At=te.pos.z-Dt.z,mt=Math.hypot(Tt,At);mt<te.range&&mt<at&&(tt=te,at=mt)}if(L=tt,!tt){h.hud.prompt(null);return}let N=k(tt);h.hud.prompt(N.text,"E")}function k(W){switch(W.type){case"door":return{text:v.isZoneUnlocked(W.zone)?`Enter \u2014 ${W.title}`:`\u{1F512} ${W.title} \u2014 sealed`};case"backdoor":return{text:"Return to the Rotunda"};case"kiosk":return{text:"Speak with the Archive Guide terminal"};case"quiz":return{text:"Begin Knowledge Checkpoint"};case"archive":return{text:"Search the Manuscript Archive"};case"ai":return{text:"Consult the AI Archive Guide"};case"diorama":return{text:"Study the reconstruction \u2014 "+W.title};case"constitution":return{text:"Read the Constitution Table"};case"desk":return{text:"Browse the Reading Desk"};case"timeline":return{text:"Read the Timeline"};case"portrait":return{text:"Admire the Portrait"};case"quote":return{text:"Read the Hologram Quote"};default:return{text:"Examine \u2014 "+W.title}}}async function G(){if(!L||oe!=="play"||u())return;let W=L;switch(ke("click"),W.type){case"door":{if(!v.isZoneUnlocked(W.zone)){h.hud.locked("Finish your current missions to open this gallery \u2014 see the objective banner."),ke("wrong",{volume:.5});return}let tt=f.current.doors&&f.current.doors[W.zone];tt&&(tt.open=!0),ke("door"),h.hud.captions("Entering "+_n[W.zone].title+"\u2026",2600),await Ro(650),await P(W.zone,"fromHub");break}case"backdoor":{ke("door"),await P("hub","default");break}case"kiosk":{let tt=n.byId.get("bio_birth_1891");h.exhibits.openExhibit({id:W.id,title:"Archive Guide \u2014 Welcome",archiveId:"bio_birth_1891",kind:"Terminal"},"hub"),v.onEvent("interact",{id:W.id}),h.hud.captions("\u201CWelcome to the Digital Ambedkar Heritage Museum. Six galleries await \u2014 begin with Early Life.\u201D",6500),_.playTalk(3);break}case"exhibit":{h.exhibits.openExhibit(W.exhibit,f.zone),v.onEvent("exhibit",{id:W.exhibit.id,zone:f.zone});break}case"quiz":{let tt=W.exhibit&&W.exhibit.quizId;if(!tt){h.hud.locked("No checkpoint is configured for this kiosk.");return}y.start(tt,()=>{S(),v.refresh()}),S();break}case"archive":{m.openArchive(),S();break}case"ai":{m.openAI(),S();break}case"diorama":{h.exhibits.openExhibit(W.exhibit,f.zone),v.onEvent("memorial",{id:W.exhibit.id}),h.hud.captions("Artistic visualization \u2014 digital reconstruction.",4200);break}case"constitution":{let tt=n.items.find(at=>/preamble/i.test(at.title+" "+(at.keywords||[]).join(" ")))||n.items.find(at=>at.category==="Constitution")||n.items.find(at=>/constitution/i.test(at.title));h.exhibits.openExhibit({id:W.id,title:"The Constitution Table",archiveId:tt?tt.id:"",kind:"Document"},f.zone),v.onEvent("exhibit",{id:W.id,zone:f.zone});break}case"desk":{let tt=n.items.find(at=>/book|writing|rupee|annihilation/i.test(at.title))||n.items[0];h.exhibits.openExhibit({id:W.id,title:"Reading Desk \u2014 Manuscripts",archiveId:tt.id,kind:"BookDesk"},f.zone),v.onEvent("exhibit",{id:W.id,zone:f.zone});break}case"timeline":{let tt=f.zone==="hub"?null:n.zoneById.get(f.zone),at=tt&&tt.timeline?tt.timeline:[{year:"1891",text:"Born at Mhow, 14 April"},{year:"1912",text:"B.A., Elphinstone College"},{year:"1916",text:"LSE & Gray\u2019s Inn, London"},{year:"1924",text:"Bahishkrit Hitakarini Sabha"},{year:"1927",text:"Mahad Satyagraha"},{year:"1932",text:"Poona Pact"},{year:"1947",text:"India\u2019s first Law Minister"},{year:"1950",text:"Architect of the Constitution"},{year:"1956",text:"Diksha at Deekshabhoomi"}];h.exhibits.openExhibit({id:W.id,title:W.title,kind:"Timeline",text:at.map(Dt=>`<p><b style="color:#f4d98c">${Dt.year}</b> \u2014 ${Dt.text}</p>`).join("")},f.zone);break}case"portrait":{h.exhibits.openExhibit({id:"portrait",title:"Dr. B. R. Ambedkar (1891\u20131956)",archiveId:"bio_birth_1891",kind:"Portrait"},"hub");break}case"quote":{h.hud.captions("\u201CCultivation of mind should be the ultimate aim of human existence.\u201D \u2014 Dr. B. R. Ambedkar",6e3),_.playTalk(3),ke("page");break}}S()}function H(){ke("click"),_u(),el($s(Qt.presentation));let W=ge();W.introSeen=!0,Be(),x.hideMenu(),oe="intro",wo(),C.play()}function nt(){ke("click");let W=nl();W&&(el(W),Qt.presentation=!!W.presentation,fs(),x.hideMenu(),V(!0))}async function V(W=!1){oe="play",bo(!1),Kt($("intro")),h.hud.showHud(),dl(),wo();let tt=ge();Rn=tt.zone||"hub",await f.enter(Rn);let at=tt.pos&&Rn===tt.zone?{x:tt.pos.x,z:tt.pos.z,yaw:tt.yaw??Math.PI}:f.current.spawns.default;g.spawnAt(at),h.hud.zoneLabel(Rn==="hub"?"HUB \xB7 ROTUNDA":_n[Rn].title),v.initUI(),f.refreshLocks(),S(),tt.introSeen||h.hud.captions("Walk with W A S D \xB7 look with the mouse \xB7 interact with E",6500),h.hud.captions(Rn==="hub"?"You arrive at the Digital Ambedkar Heritage Museum. The Archive Guide terminal awaits at reception.":_n[Rn].desc,5600)}function ot(){T.hidePause(),oe="play",ke("click"),S()}function ct(){oe!=="play"||u()||(oe="paused",T.showPause(),b(),ke("click"))}function gt(){Be(),T.hidePause(),h.exhibits.closeAll(),Kt($("mapScreen")),h.hud.hideHud(),oe="menu",x.refreshContinue(il()),x.showMenu(),g.state.enabled=!1,f.enter("hub").then(()=>{g.spawnAt({x:0,z:13.6,yaw:Math.PI})}),fl(),ke("click"),S()}function Nt(){oe="play",S()}$("btnMap").addEventListener("click",()=>{oe==="play"&&!u()&&(d.open(),S())}),$("btnPause").addEventListener("click",()=>ct()),$("btnTouchAct")&&$("btnTouchAct").addEventListener("click",W=>{W.preventDefault(),G()}),window.addEventListener("keydown",W=>{if(W.code==="KeyE"||W.code==="Space")oe==="play"&&!u()&&(G(),W.preventDefault());else if(W.code==="KeyM")oe==="play"&&(d.toggle(),S());else if(W.code==="Escape"){if(oe==="cert")return;if(y.isOpen()){y.requestClose(),S();return}let tt=w();if(tt){if(tt.id==="pauseScreen"){ot();return}Kt(tt),ke("click"),!u()&&oe==="play"&&v.refresh(),S();return}oe==="play"?ct():oe==="paused"&&ot()}}),document.querySelectorAll(".ov-close, [data-close]").forEach(W=>{W.addEventListener("click",()=>{setTimeout(()=>{oe==="play"&&v.refresh()},10)})}),setInterval(()=>{if(oe==="play"){let W=ge();W.pos={x:g.state.pos.x,z:g.state.pos.z},W.yaw=g.state.yaw,W.zone=Rn,Be()}},12e3),document.addEventListener("visibilitychange",()=>{if(document.hidden&&oe==="play"){let W=ge();W.pos={x:g.state.pos.x,z:g.state.pos.z},W.yaw=g.state.yaw,W.zone=Rn,Be()}}),h.events.on("quizDone",({quizId:W})=>{W==="quiz_final"&&(ge().missionsDone.m8_final||v.current()&&v.current().id),setTimeout(()=>Ut(),1400)}),h.events.on("missionDone",W=>{W.id==="m8_final"&&setTimeout(()=>Ut(),900)});function Ut(){let W=ge();n.missions.every(at=>W.missionsDone[at.id])&&$("certScreen").classList.contains("hidden")&&(oe="cert",A.showCert(),ke("achievement"),h.hud.achieToast("Heritage Archivist Certificate earned!","\u{1F393}"),Be(),b())}window.__dhjRelang=async W=>{await jc(W),h.hud.objective("Language: "+W.toUpperCase(),"UI language updated")},window.addEventListener("resize",()=>{l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),o.setSize(innerWidth,innerHeight)});let Q=Math.PI*.1;function st(W){Q+=W*.06;let tt=12.5;l.position.set(Math.sin(Q)*tt,3.6+Math.sin(Q*.6)*.7,Math.cos(Q)*tt),l.lookAt(0,2.2,0)}let dt=0,et=new xo,Mt=0;function Lt(){let W=Math.min(et.getDelta(),.05);if(Mt+=W,oe==="menu"||oe==="boot")st(W),f.update(W,Mt),_.root.position.set(0,0,4.2),_.root.rotation.y=Math.PI+Math.sin(Mt*.4)*.16,_.update(W,Mt,0,0);else if(oe==="intro"){dt+=W;let tt=en(dt/6.2,0,1),at=tt<.5?2*tt*tt:1-Math.pow(-2*tt+2,2)/2,Dt=7.4-at*4.6,N=16.8-at*2.8;l.position.set(Math.sin(Mt*.12)*1.2,Dt,N),l.lookAt(0,2.4,2),f.update(W,Mt),_.root.position.set(0,0,13.6),_.root.rotation.y=Math.PI,_.update(W,Mt,0,0)}else g.update(W,Mt),f.update(W,Mt),U();o.render(c,l),requestAnimationFrame(Lt)}e(96,"Opening the doors\u2026"),await Ro(150),oe="menu",g.state.enabled=!1,x.refreshContinue(il()),x.showMenu(),sl(),Kt($("boot")),e(100,"Ready"),window.__dhjDebug={scene:c,camera:l,renderer:o,ctx:h,world:f,player:g,missions:v,getState:ge,travelTo:P},Lt(),window.__dhjAndroidBack=()=>{if(y.isOpen()){y.requestClose(),S();return}let W=w();if(W){Kt(W),ke("click"),S();return}if(oe==="play"){ct();return}if(oe==="paused"){gt();return}},r.addEventListener("contextmenu",W=>W.preventDefault())}lx().catch(i=>{console.error(i);let t=$("bootMsg");t&&(t.textContent="Failed to start: "+i.message,t.style.color="#e0716b")});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
