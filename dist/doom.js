(()=>{var Ic="170";var Jf=0,Ch=1,Qf=2;var ku=1,Pc=2,qn=3,pi=0,Ue=1,_n=2,In=0,Pn=1,mi=2,Ih=3,Ph=4,jf=5,zi=100,td=101,ed=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,sl=204,rl=205,ld=206,cd=207,hd=208,ud=209,fd=210,dd=211,pd=212,md=213,gd=214,ol=0,al=1,ll=2,ws=3,cl=4,hl=5,ul=6,fl=7,zu=0,xd=1,yd=2,fi=0,Lc=1,Dc=2,Uc=3,Mr=4,vd=5,Fc=6,Nc=7;var Bu=300,Ts=301,Es=302,dl=303,pl=304,Vo=306,Ln=1e3,un=1001,ml=1002,bn=1003,_d=1004;var Fr=1005;var tn=1006,ba=1007;var Zn=1008;var Qn=1009,Hu=1010,Vu=1011,ur=1012,Oc=1013,Hi=1014,$n=1015,on=1016,kc=1017,zc=1018,As=1020,Gu=35902,Wu=1021,Xu=1022,Mn=1023,qu=1024,Yu=1025,Ms=1026,Rs=1027,Zu=1028,Bc=1029,$u=1030,Hc=1031;var Vc=1033,co=33776,ho=33777,uo=33778,fo=33779,gl=35840,xl=35841,yl=35842,vl=35843,_l=36196,Ml=37492,bl=37496,Sl=37808,wl=37809,Tl=37810,El=37811,Al=37812,Rl=37813,Cl=37814,Il=37815,Pl=37816,Ll=37817,Dl=37818,Ul=37819,Fl=37820,Nl=37821,po=36492,Ol=36494,kl=36495,Ku=36283,zl=36284,Bl=36285,Hl=36286;var mo=2300,Vl=2301,Sa=2302,Lh=2400,Dh=2401,Uh=2402;var Md=3200,bd=3201;var Ju=0,Sd=1,Rn="",We="srgb",ks="srgb-linear",Go="linear",se="srgb";var es=7680;var Fh=519,wd=512,Td=513,Ed=514,Qu=515,Ad=516,Rd=517,Cd=518,Id=519,Gl=35044,Wo=35048;var Nh="300 es",Kn=2e3,go=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wa=Math.PI/180,Wl=180/Math.PI;function di(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function Pd(s,t){return(s%t+t)%t}function Ta(s,t,e){return(1-e)*s+e*t}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var tt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],y=i[7],C=i[2],T=i[5],R=i[8];return r[0]=o*x+a*_+l*C,r[3]=o*g+a*v+l*T,r[6]=o*m+a*y+l*R,r[1]=c*x+h*_+u*C,r[4]=c*g+h*v+u*T,r[7]=c*m+h*y+u*R,r[2]=f*x+d*_+p*C,r[5]=f*g+d*v+p*T,r[8]=f*m+d*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea=new Ot;function ju(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ld(){let s=xo("canvas");return s.style.display="block",s}var Oh={};function or(s){s in Oh||(Oh[s]=!0,console.warn(s))}function Dd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ud(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var kh=[.64,.33,.3,.6,.15,.06],zh=[.2126,.7152,.0722],Bh=[.3127,.329],Hh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[ks]:{primaries:kh,whitePoint:Bh,transfer:Go,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:zh,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:kh,whitePoint:Bh,transfer:se,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:zh,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});var ns,Xl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=xo("canvas")),ns.width=t.width,ns.height=t.height;let n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Aa(i[o].image)):r.push(Aa(i[o]))}else r=Aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Od=0,rn=class s extends gi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=un,i=un,r=tn,o=Zn,a=Mn,l=Qn,c=s.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=di(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ln:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ln:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Bu;rn.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,C=(m+1)/2,T=(h+f)/4,R=(u+x)/4,S=(p+g)/4;return v>y&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=R/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=S/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=S/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vo=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*_);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let y=a*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+x*y,g===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new P,Gh=new xi,Vi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Or.subVectors(this.max,Qs),is.subVectors(t.a,Qs),ss.subVectors(t.b,Qs),rs.subVectors(t.c,Qs),ri.subVectors(ss,is),oi.subVectors(rs,ss),Li.subVectors(is,rs);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Li.z,Li.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Li.y,Li.x,0];return!Ca(e,is,ss,rs,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,is,ss,rs,Or))?!1:(kr.crossVectors(ri,oi),e=[kr.x,kr.y,kr.z],Ca(e,is,ss,rs,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Nr=new Vi,is=new P,ss=new P,rs=new P,ri=new P,oi=new P,Li=new P,Qs=new P,Or=new P,kr=new P,Di=new P;function Ca(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);let a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var kd=new Vi,js=new P,Ia=new P,fr=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Ia)),this.expandByPoint(js.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new P,Pa=new P,zr=new P,ai=new P,La=new P,Br=new P,Da=new P,Zl=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Pa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=ai.dot(this.direction),l=-ai.dot(zr),c=ai.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(zr,f),d}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){La.subVectors(e,t),Br.subVectors(n,t),Da.crossVectors(La,Br);let o=this.direction.dot(Da),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(Br.crossVectors(ai,Br));if(l<0)return null;let c=a*this.direction.dot(La.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,p,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,x,g)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Bd)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),li.crossVectors(n,nn),li.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),li.crossVectors(n,nn)),li.normalize(),Hr.crossVectors(nn,li),i[0]=li.x,i[4]=Hr.x,i[8]=nn.x,i[1]=li.y,i[5]=Hr.y,i[9]=nn.y,i[2]=li.z,i[6]=Hr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],y=n[11],C=n[15],T=i[0],R=i[4],S=i[8],M=i[12],b=i[1],E=i[5],L=i[9],D=i[13],U=i[2],H=i[6],z=i[10],$=i[14],X=i[3],et=i[7],rt=i[11],xt=i[15];return r[0]=o*T+a*b+l*U+c*X,r[4]=o*R+a*E+l*H+c*et,r[8]=o*S+a*L+l*z+c*rt,r[12]=o*M+a*D+l*$+c*xt,r[1]=h*T+u*b+f*U+d*X,r[5]=h*R+u*E+f*H+d*et,r[9]=h*S+u*L+f*z+d*rt,r[13]=h*M+u*D+f*$+d*xt,r[2]=p*T+x*b+g*U+m*X,r[6]=p*R+x*E+g*H+m*et,r[10]=p*S+x*L+g*z+m*rt,r[14]=p*M+x*D+g*$+m*xt,r[3]=_*T+v*b+y*U+C*X,r[7]=_*R+v*E+y*H+C*et,r[11]=_*S+v*L+y*z+C*rt,r[15]=_*M+v*D+y*$+C*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,v=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,y=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,C=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,T=e*_+n*v+i*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=_*R,t[1]=(x*f*r-u*g*r-x*i*d+n*g*d+u*i*m-n*f*m)*R,t[2]=(a*g*r-x*l*r+x*i*c-n*g*c-a*i*m+n*l*m)*R,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*R,t[4]=v*R,t[5]=(h*g*r-p*f*r+p*i*d-e*g*d-h*i*m+e*f*m)*R,t[6]=(p*l*r-o*g*r-p*i*c+e*g*c+o*i*m-e*l*m)*R,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*R,t[8]=y*R,t[9]=(p*u*r-h*x*r-p*n*d+e*x*d+h*n*m-e*u*m)*R,t[10]=(o*x*r-p*a*r+p*n*c-e*x*c-o*n*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=C*R,t[13]=(h*x*i-p*u*i+p*n*f-e*x*f-h*n*g+e*u*g)*R,t[14]=(p*a*i-o*x*i-p*n*l+e*x*l+o*n*g-e*a*g)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,v=l*h,y=l*u,C=n.x,T=n.y,R=n.z;return i[0]=(1-(x+m))*C,i[1]=(d+y)*C,i[2]=(p-v)*C,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+m))*T,i[6]=(g+_)*T,i[7]=0,i[8]=(p+v)*R,i[9]=(g-_)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=os.set(i[0],i[1],i[2]).length(),o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===Kn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===go)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Kn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,p,x;if(a===Kn)p=(o+r)*u,x=-2*u;else if(a===go)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new P,yn=new xe,zd=new P(0,0,0),Bd=new P(1,1,1),li=new P,Hr=new P,nn=new P,Wh=new xe,Xh=new xi,Dn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,qh=new P,as=new xi,Gn=new xe,Vr=new P,tr=new P,Vd=new P,Gd=new xi,Yh=new P(1,0,0),Zh=new P(0,1,0),$h=new P(0,0,1),Kh={type:"added"},Wd={type:"removed"},ls={type:"childadded",child:null},Ua={type:"childremoved",child:null},qe=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Dn,n=new xi,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ot}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(tr,Vr,this.up):Gn.lookAt(Vr,tr,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Gn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};qe.DEFAULT_UP=new P(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new P,Wn=new P,Fa=new P,Xn=new P,cs=new P,hs=new P,Jh=new P,Na=new P,Oa=new P,ka=new P,za=new ce,Ba=new ce,Ha=new ce,ui=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Wn.subVectors(n,e),Fa.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Wn),l=vn.dot(Fa),c=Wn.dot(Wn),h=Wn.dot(Fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return za.setScalar(0),Ba.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),Ha.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(Ba,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Wn.subVectors(t,e),vn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;cs.subVectors(i,n),hs.subVectors(r,n),Na.subVectors(t,n);let l=cs.dot(Na),c=hs.dot(Na);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,i);let h=cs.dot(Oa),u=hs.dot(Oa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);ka.subVectors(t,r);let d=cs.dot(ka),p=hs.dot(ka);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(hs,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Jh.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Jh,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Va(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=Pd(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return Gt.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Gt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Fe(Ge.r*255,0,255))*65536+Math.round(Fe(Ge.g*255,0,255))*256+Math.round(Fe(Ge.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,i=Ge.g,r=Ge.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=We){Gt.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,i=Ge.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Gr);let n=Ta(ci.h,Gr.h,e),i=Ta(ci.s,Gr.s,e),r=Ta(ci.l,Gr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Et;Et.NAMES=tf;var Xd=0,yi=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=di(),this.name="",this.blending=Pn,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vi=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new P,Wr=new tt,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var Cs=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mo=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},qd=0,hn=new xe,Ga=new qe,us=new P,sn=new Vi,er=new Vi,De=new P,we=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Mo:Cs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,er.min),sn.expandByPoint(De),De.addVectors(sn.max,er.max),sn.expandByPoint(De)):(sn.expandByPoint(er.min),sn.expandByPoint(er.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),De.add(us)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new P,l[S]=new P;let c=new P,h=new P,u=new P,f=new tt,d=new tt,p=new tt,x=new P,g=new P;function m(S,M,b){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let E=1/(d.x*p.y-p.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(E),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(E),a[S].add(x),a[M].add(x),a[b].add(x),l[S].add(g),l[M].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,M=_.length;S<M;++S){let b=_[S],E=b.start,L=b.count;for(let D=E,U=E+L;D<U;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let v=new P,y=new P,C=new P,T=new P;function R(S){C.fromBufferAttribute(i,S),T.copy(C);let M=a[S];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(T,M);let E=y.dot(l[S])<0?-1:1;o.setXYZW(S,v.x,v.y,v.z,E)}for(let S=0,M=_.length;S<M;++S){let b=_[S],E=b.start,L=b.count;for(let D=E,U=E+L;D<U;D+=3)R(t.getX(D+0)),R(t.getX(D+1)),R(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new xe,Ui=new Zl,Xr=new fr,jh=new P,qr=new P,Yr=new P,Zr=new P,Wa=new P,$r=new P,tu=new P,Kr=new P,wt=class extends qe{constructor(t=new we,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Wa.fromBufferAttribute(u,t),o?$r.addScaledVector(Wa,h):$r.addScaledVector(Wa.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Xr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Xr,jh)===null||Ui.origin.distanceToSquared(jh)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,C=v;y<C;y+=3){let T=a.getX(y),R=a.getX(y+1),S=a.getX(y+2);i=Jr(this,m,t,n,c,h,u,T,R,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Jr(this,o,t,n,c,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,C=v;y<C;y+=3){let T=y,R=y+1,S=y+2;i=Jr(this,m,t,n,c,h,u,T,R,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,y=g+2;i=Jr(this,o,t,n,c,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Yd(s,t,e,n,i,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===pi,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:s}}function Jr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,qr),s.getVertexPosition(l,Yr),s.getVertexPosition(c,Zr);let h=Yd(s,t,e,n,qr,Yr,Zr,tu);if(h){let u=new P;ui.getBarycoord(tu,qr,Yr,Zr,u),i&&(h.uv=ui.getInterpolatedAttribute(i,a,l,c,u,new tt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};ui.getNormal(qr,Yr,Zr,f.normal),h.face=f,h.barycoord=u}return h}var Sn=class s extends we{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function p(x,g,m,_,v,y,C,T,R,S,M){let b=y/R,E=C/S,L=y/2,D=C/2,U=T/2,H=R+1,z=S+1,$=0,X=0,et=new P;for(let rt=0;rt<z;rt++){let xt=rt*E-D;for(let Rt=0;Rt<H;Rt++){let zt=Rt*b-L;et[x]=zt*_,et[g]=xt*v,et[m]=U,c.push(et.x,et.y,et.z),et[x]=0,et[g]=0,et[m]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(Rt/R),u.push(1-rt/S),$+=1}}for(let rt=0;rt<S;rt++)for(let xt=0;xt<R;xt++){let Rt=f+xt+H*rt,zt=f+xt+H*(rt+1),q=f+(xt+1)+H*(rt+1),j=f+(xt+1)+H*rt;l.push(Rt,zt,j),l.push(zt,q,j),X+=6}a.addGroup(d,X,M),d+=X,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){let t={};for(let e=0;e<s.length;e++){let n=Is(s[e]);for(let i in n)t[i]=n[i]}return t}function Zd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ef(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var _i={clone:Is,merge:Ke},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},bo=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new P,eu=new tt,nu=new tt,Ne=class extends bo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wl*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ds=1,$l=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(fs,ds,t,e);i.layers=this.layers,this.add(i);let r=new Ne(fs,ds,t,e);r.layers=this.layers,this.add(r);let o=new Ne(fs,ds,t,e);o.layers=this.layers,this.add(o);let a=new Ne(fs,ds,t,e);a.layers=this.layers,this.add(a);let l=new Ne(fs,ds,t,e);l.layers=this.layers,this.add(l);let c=new Ne(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},So=class extends rn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new So(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sn(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:In});r.uniforms.tEquirect.value=e;let o=new wt(i,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=tn),new $l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Xa=new P,Jd=new P,Qd=new Ot,Yn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xa.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),i=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new fr,Qr=new P,dr=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,g-d,y-m).normalize(),n[1].setComponents(l+r,f+c,g+d,y+m).normalize(),n[2].setComponents(l+o,f+h,g+p,y+_).normalize(),n[3].setComponents(l-o,f-h,g-p,y-_).normalize(),n[4].setComponents(l-a,f-u,g-x,y-v).normalize(),e===Kn)n[5].setComponents(l+a,f+u,g+x,y+v).normalize();else if(e===go)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Qr.x=i.normal.x>0?t.max.x:t.min.x,Qr.y=i.normal.y>0?t.max.y:t.min.y,Qr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var fn=class s extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let v=0;v<c;v++){let y=v*u-r;p.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+c*m,y=_+c*(m+1),C=_+1+c*(m+1),T=_+1+c*m;d.push(v,y,T),d.push(y,C,T)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,jp=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,am=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,bm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,wm=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,Em=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:op,aomap_pars_fragment:ap,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:fp,iridescence_fragment:dp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:_p,color_pars_vertex:Mp,color_vertex:bp,common:Sp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Ap,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:Ip,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:qp,envmap_vertex:Np,fog_vertex:Op,fog_pars_vertex:kp,fog_fragment:zp,fog_pars_fragment:Bp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Zp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:jp,lights_fragment_maps:t0,lights_fragment_end:e0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:o0,map_pars_fragment:a0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:f0,morphcolor_vertex:d0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:x0,normal_fragment_maps:y0,normal_pars_fragment:v0,normal_pars_vertex:_0,normal_vertex:M0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:E0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:I0,dithering_fragment:P0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:N0,shadowmap_vertex:O0,shadowmask_pars_fragment:k0,skinbase_vertex:z0,skinning_pars_vertex:B0,skinning_vertex:H0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:$0,uv_pars_vertex:K0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:j0,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:fm,meshbasic_vert:dm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:xm,meshmatcap_frag:ym,meshnormal_vert:vm,meshnormal_frag:_m,meshphong_vert:Mm,meshphong_frag:bm,meshphysical_vert:Sm,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Em,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Im,sprite_vert:Pm,sprite_frag:Lm},ot={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},An={basic:{uniforms:Ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ke([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ke([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ke([ot.points,ot.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ke([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ke([ot.common,ot.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ke([ot.sprite,ot.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ke([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ke([ot.lights,ot.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};An.physical={uniforms:Ke([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var jr={r:0,b:0,g:0},Ni=new Dn,Dm=new xe;function Um(s,t,e,n,i,r,o){let a=new Et(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=p(_);y===null?m(a,l):y&&y.isColor&&(m(y,1),v=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let y=p(v);y&&(y.isCubeTexture||y.mapping===Vo)?(h===void 0&&(h=new wt(new Sn(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Is(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Ni)),h.material.toneMapped=Gt.getTransfer(y.colorSpace)!==se,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wt(new fn(2,2),new ve({name:"BackgroundMaterial",uniforms:Is(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,v){_.getRGB(jr,ef(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:x,addToRenderList:g}}function Fm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(b,E,L,D,U){let H=!1,z=u(D,L,E);r!==z&&(r=z,c(r.object)),H=d(b,D,L,U),H&&p(b,D,L,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(b,E,L,D),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,E,L){let D=L.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let H=U[E.id];H===void 0&&(H={},U[E.id]=H);let z=H[D];return z===void 0&&(z=f(l()),H[D]=z),z}function f(b){let E=[],L=[],D=[];for(let U=0;U<e;U++)E[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,E,L,D){let U=r.attributes,H=E.attributes,z=0,$=L.getAttributes();for(let X in $)if($[X].location>=0){let rt=U[X],xt=H[X];if(xt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),rt===void 0||rt.attribute!==xt||xt&&rt.data!==xt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function p(b,E,L,D){let U={},H=E.attributes,z=0,$=L.getAttributes();for(let X in $)if($[X].location>=0){let rt=H[X];rt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));let xt={};xt.attribute=rt,rt&&rt.data&&(xt.data=rt.data),U[X]=xt,z++}r.attributes=U,r.attributesNum=z,r.index=D}function x(){let b=r.newAttributes;for(let E=0,L=b.length;E<L;E++)b[E]=0}function g(b){m(b,0)}function m(b,E){let L=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;L[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),U[b]!==E&&(s.vertexAttribDivisor(b,E),U[b]=E)}function _(){let b=r.newAttributes,E=r.enabledAttributes;for(let L=0,D=E.length;L<D;L++)E[L]!==b[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function v(b,E,L,D,U,H,z){z===!0?s.vertexAttribIPointer(b,E,L,U,H):s.vertexAttribPointer(b,E,L,D,U,H)}function y(b,E,L,D){x();let U=D.attributes,H=L.getAttributes(),z=E.defaultAttributeValues;for(let $ in H){let X=H[$];if(X.location>=0){let et=U[$];if(et===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let rt=et.normalized,xt=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;let zt=Rt.buffer,q=Rt.type,j=Rt.bytesPerElement,dt=q===s.INT||q===s.UNSIGNED_INT||et.gpuType===Oc;if(et.isInterleavedBufferAttribute){let st=et.data,St=st.stride,Pt=et.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<X.locationSize;Ut++)m(X.location+Ut,st.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<X.locationSize;Ut++)g(X.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let Ut=0;Ut<X.locationSize;Ut++)v(X.location+Ut,xt/X.locationSize,q,rt,St*j,(Pt+xt/X.locationSize*Ut)*j,dt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<X.locationSize;st++)m(X.location+st,et.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<X.locationSize;st++)g(X.location+st);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let st=0;st<X.locationSize;st++)v(X.location+st,xt/X.locationSize,q,rt,xt*j,xt/X.locationSize*st*j,dt)}}else if(z!==void 0){let rt=z[$];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(X.location,rt);break;case 3:s.vertexAttrib3fv(X.location,rt);break;case 4:s.vertexAttrib4fv(X.location,rt);break;default:s.vertexAttrib1fv(X.location,rt)}}}}_()}function C(){S();for(let b in n){let E=n[b];for(let L in E){let D=E[L];for(let U in D)h(D[U].object),delete D[U];delete E[L]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let E=n[b.id];for(let L in E){let D=E[L];for(let U in D)h(D[U].object),delete D[U];delete E[L]}delete n[b.id]}function R(b){for(let E in n){let L=n[E];if(L[b.id]===void 0)continue;let D=L[b.id];for(let U in D)h(D[U].object),delete D[U];delete L[b.id]}}function S(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Nm(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Om(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Mn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let S=R===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Qn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!S)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function km(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Yn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,v=_*4,y=m.clippingState||null;l.value=y,y=h(p,f,v,d);for(let C=0;C!==v;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function zm(s){let t=new WeakMap;function e(o,a){return a===dl?o.mapping=Ts:a===pl&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dl||a===pl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ps=class extends bo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,iu=[.125,.215,.35,.446,.526,.582],Bi=20,qa=new Ps,su=new Et,Ya=null,Za=0,$a=0,Ka=!1,ki=(1+Math.sqrt(5))/2,ps=1/ki,ru=[new P(-ki,ps,0),new P(ki,ps,0),new P(-ps,0,ki),new P(ps,0,ki),new P(0,ki,-ps),new P(0,ki,ps),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,Za,$a),this._renderer.xr.enabled=Ka,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:on,format:Mn,colorSpace:ks,depthBuffer:!1},i=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=Hm(r,t,e)}return i}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,i){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(su),h.toneMapping=fi,h.autoClear=!1;let d=new vi({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new wt(new Sn,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(su),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;to(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ts||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;to(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ru[(i-r-1)%ru.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Bi;g>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);let m=[],_=0;for(let R=0;R<Bi;++R){let S=R/x,M=Math.exp(-S*S/2);m.push(M),R===0?_+=M:R<g&&(_+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let y=this._sizeLods[i],C=3*y*(i>v-vs?i-v+vs:0),T=4*(this._cubeSize-y);to(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,qa)}};function Bm(s){let t=[],e=[],n=[],i=s,r=s-vs+1+iu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-vs?l=iu[o-s+vs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),v=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,S=T>2?0:-1,M=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];_.set(M,x*p*T),v.set(f,g*p*T);let b=[T,T,T,T,T,T];y.set(b,m*p*T)}let C=new we;C.setAttribute("position",new Xe(_,x)),C.setAttribute("uv",new Xe(v,g)),C.setAttribute("faceIndex",new Xe(y,m)),t.push(C),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ou(s,t,e){let n=new Oe(s,t,e);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Hm(s,t,e){let n=new Float32Array(Bi),i=new P(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function au(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function lu(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function Vm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dl||l===pl,h=l===Ts||l===Es;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ls(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ls(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wm(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let C=_[v+0],T=_[v+1],R=_[v+2];f.push(C,T,T,R,R,C)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let C=v+0,T=v+1,R=v+2;f.push(C,T,T,R,R,C)}}else return;let g=new(ju(f)?Mo:Cs)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_]*x[_];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ym(s,t,e){let n=new WeakMap,i=new ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*C*4*u),R=new vo(T,y,C,u);R.type=$n,R.needsUpdate=!0;let S=v*4;for(let b=0;b<u;b++){let E=g[b],L=m[b],D=_[b],U=y*C*4*b;for(let H=0;H<E.count;H++){let z=H*S;d===!0&&(i.fromBufferAttribute(E,H),T[U+z+0]=i.x,T[U+z+1]=i.y,T[U+z+2]=i.z,T[U+z+3]=0),p===!0&&(i.fromBufferAttribute(L,H),T[U+z+4]=i.x,T[U+z+5]=i.y,T[U+z+6]=i.z,T[U+z+7]=0),x===!0&&(i.fromBufferAttribute(D,H),T[U+z+8]=i.x,T[U+z+9]=i.y,T[U+z+10]=i.z,T[U+z+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new tt(y,C)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Zm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var wo=class extends rn{constructor(t,e,n,i,r,o,a,l,c,h=Ms){if(h!==Ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Hi),n===void 0&&h===Rs&&(n=As),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sf=new rn,cu=new wo(1,1),rf=new vo,of=new Yl,af=new So,hu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function zs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hu[i];if(r===void 0&&(r=new Float32Array(i),hu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xo(s,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $m(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function jm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;pu.set(n),s.uniformMatrix2fv(this.addr,!1,pu),Ce(e,n)}}function tg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;du.set(n),s.uniformMatrix3fv(this.addr,!1,du),Ce(e,n)}}function eg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;fu.set(n),s.uniformMatrix4fv(this.addr,!1,fu),Ce(e,n)}}function ng(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function og(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function hg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cu.compareFunction=Qu,r=cu):r=sf,e.setTexture2D(t||r,i)}function ug(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||of,i)}function fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||af,i)}function dg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rf,i)}function pg(s){switch(s){case 5126:return $m;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return jm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}function mg(s,t){s.uniform1fv(this.addr,t)}function gg(s,t){let e=zs(t,this.size,2);s.uniform2fv(this.addr,e)}function xg(s,t){let e=zs(t,this.size,3);s.uniform3fv(this.addr,e)}function yg(s,t){let e=zs(t,this.size,4);s.uniform4fv(this.addr,e)}function vg(s,t){let e=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _g(s,t){let e=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Mg(s,t){let e=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function bg(s,t){s.uniform1iv(this.addr,t)}function Sg(s,t){s.uniform2iv(this.addr,t)}function wg(s,t){s.uniform3iv(this.addr,t)}function Tg(s,t){s.uniform4iv(this.addr,t)}function Eg(s,t){s.uniform1uiv(this.addr,t)}function Ag(s,t){s.uniform2uiv(this.addr,t)}function Rg(s,t){s.uniform3uiv(this.addr,t)}function Cg(s,t){s.uniform4uiv(this.addr,t)}function Ig(s,t,e){let n=this.cache,i=t.length,r=Xo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||sf,r[o])}function Pg(s,t,e){let n=this.cache,i=t.length,r=Xo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||of,r[o])}function Lg(s,t,e){let n=this.cache,i=t.length,r=Xo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||af,r[o])}function Dg(s,t,e){let n=this.cache,i=t.length,r=Xo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||rf,r[o])}function Ug(s){switch(s){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return yg;case 35674:return vg;case 35675:return _g;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Eg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}var Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function mu(s,t){s.seq.push(t),s.map[t.id]=t}function Fg(s,t,e){let n=s.name,i=n.length;for(Ja.lastIndex=0;;){let r=Ja.exec(n),o=Ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mu(e,c===void 0?new Jl(a,s,t):new Ql(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new jl(a),mu(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Fg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function gu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ng=37297,Og=0;function kg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xu=new Ot;function zg(s){Gt._getMatrix(xu,Gt.workingColorSpace,s);let t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(s)){case Go:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+kg(s.getShaderSource(t),o)}else return i}function Bg(s,t){let e=zg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hg(s,t){let e;switch(t){case Lc:e="Linear";break;case Dc:e="Reinhard";break;case Uc:e="Cineon";break;case Mr:e="ACESFilmic";break;case Fc:e="AgX";break;case Nc:e="Neutral";break;case vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eo=new P;function Vg(){Gt.getLuminanceCoefficients(eo);let s=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Wg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ar(s){return s!==""}function vu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _u(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(s){return s.replace(qg,Zg)}var Yg=new Map;function Zg(s,t){let e=Ht[t];if(e===void 0){let n=Yg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(s){return s.replace($g,Kg)}function Kg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case Es:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function tx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zu:t="ENVMAP_BLENDING_MULTIPLY";break;case xd:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function ex(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jg(e),c=Qg(e),h=jg(e),u=tx(e),f=ex(e),d=Gg(e),p=Wg(r),x=i.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),m.length>0&&(m+=`
`)):(g=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),m=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==fi?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),o=tc(o),o=vu(o,e),o=_u(o,e),a=tc(a),a=vu(a,e),a=_u(a,e),o=Mu(o),a=Mu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,y=_+m+a,C=gu(i,i.VERTEX_SHADER,v),T=gu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,C),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(E){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(C).trim(),U=i.getShaderInfoLog(T).trim(),H=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,T);else{let $=yu(i,C,"vertex"),X=yu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+$+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(z=!1);z&&(E.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:g},fragmentShader:{log:U,prefix:m}})}i.deleteShader(C),i.deleteShader(T),S=new Ss(i,x),M=Xg(i,x)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Ng)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var ix=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nc(t),e.set(t,n)),n}},nc=class{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}};function sx(s,t,e,n,i,r,o){let a=new _o,l=new ec,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,E,L,D){let U=L.fog,H=D.geometry,z=M.isMeshStandardMaterial?L.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),X=$&&$.mapping===Vo?$.image.height:null,et=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=rt!==void 0?rt.length:0,Rt=0;H.morphAttributes.position!==void 0&&(Rt=1),H.morphAttributes.normal!==void 0&&(Rt=2),H.morphAttributes.color!==void 0&&(Rt=3);let zt,q,j,dt;if(et){let oe=An[et];zt=oe.vertexShader,q=oe.fragmentShader}else zt=M.vertexShader,q=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);let st=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,Ut=D.isBatchedMesh===!0,ae=!!M.map,Vt=!!M.matcap,he=!!$,N=!!M.aoMap,Be=!!M.lightMap,Xt=!!M.bumpMap,qt=!!M.normalMap,At=!!M.displacementMap,de=!!M.emissiveMap,Tt=!!M.metalnessMap,I=!!M.roughnessMap,w=M.anisotropy>0,V=M.clearcoat>0,K=M.dispersion>0,Q=M.iridescence>0,Z=M.sheen>0,Mt=M.transmission>0,lt=w&&!!M.anisotropyMap,pt=V&&!!M.clearcoatMap,Jt=V&&!!M.clearcoatNormalMap,nt=V&&!!M.clearcoatRoughnessMap,mt=Q&&!!M.iridescenceMap,Ct=Q&&!!M.iridescenceThicknessMap,It=Z&&!!M.sheenColorMap,gt=Z&&!!M.sheenRoughnessMap,Yt=!!M.specularMap,Bt=!!M.specularColorMap,ue=!!M.specularIntensityMap,F=Mt&&!!M.transmissionMap,at=Mt&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,ut=M.alphaTest>0,ct=!!M.alphaHash,Ft=!!M.extensions,be=fi;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(be=s.toneMapping);let He={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:q,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ks,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:Vt,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:Be,bumpMap:Xt,normalMap:qt,displacementMap:f&&At,emissiveMap:de,normalMapObjectSpace:qt&&M.normalMapType===Sd,normalMapTangentSpace:qt&&M.normalMapType===Ju,metalnessMap:Tt,roughnessMap:I,anisotropy:w,anisotropyMap:lt,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:K,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:ue,transmission:Mt,transmissionMap:F,thicknessMap:at,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Pn&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:ct,combine:M.combine,mapUv:ae&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:Be&&x(M.lightMap.channel),bumpMapUv:Xt&&x(M.bumpMap.channel),normalMapUv:qt&&x(M.normalMap.channel),displacementMapUv:At&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:I&&x(M.roughnessMap.channel),anisotropyMapUv:lt&&x(M.anisotropyMap.channel),clearcoatMapUv:pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(M.sheenRoughnessMap.channel),specularMapUv:Yt&&x(M.specularMap.channel),specularColorMapUv:Bt&&x(M.specularColorMap.channel),specularIntensityMapUv:ue&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:at&&x(M.thicknessMap.channel),alphaMapUv:J&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(qt||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(ae||J),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function m(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)b.push(E),b.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(_(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function _(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let b=p[M.type],E;if(b){let L=An[b];E=_i.clone(L.uniforms)}else E=M.uniforms;return E}function C(M,b){let E;for(let L=0,D=h.length;L<D;L++){let U=h[L];if(U.cacheKey===b){E=U,++E.usedTimes;break}}return E===void 0&&(E=new nx(s,b,M,r),h.push(E)),E}function T(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function S(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:S}}function rx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ox(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Su(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,x,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||ox),n.length>1&&n.sort(f||Su),i.length>1&&i.sort(f||Su)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function ax(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new wu,s.set(n,[o])):i>=r.length?(o=new wu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function lx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Et};break;case"SpotLight":e={position:new P,direction:new P,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function cx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var hx=0;function ux(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fx(s){let t=new lx,e=cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new xe,o=new xe;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,v=0,y=0,C=0,T=0,R=0;c.sort(ux);for(let M=0,b=c.length;M<b;M++){let E=c[M],L=E.color,D=E.intensity,U=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*D,u+=L.g*D,f+=L.b*D;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],D);R++}else if(E.isDirectionalLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,X=e.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=E.shadow.matrix,_++}n.directional[d]=z,d++}else if(E.isSpotLight){let z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[x]=z;let $=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,$.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[x]=$.matrix,E.castShadow){let X=e.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=H,y++}x++}else if(E.isRectAreaLight){let z=t.get(E);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){let z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){let $=E.shadow,X=e.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=E.shadow.matrix,v++}n.point[p]=z,p++}else if(E.isHemisphereLight){let z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(D),z.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[m]=z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==d||S.pointLength!==p||S.spotLength!==x||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==_||S.numPointShadows!==v||S.numSpotShadows!==y||S.numSpotMaps!==C||S.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,S.directionalLength=d,S.pointLength=p,S.spotLength=x,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=_,S.numPointShadows=v,S.numSpotShadows=y,S.numSpotMaps=C,S.numLightProbes=R,n.version=hx++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let v=c[m];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Tu(s){let t=new fx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Tu(s),t.set(i,[a])):r>=o.length?(a=new Tu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ic=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sc=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(s,t,e){let n=new dr,i=new tt,r=new tt,o=new ce,a=new ic({depthPacking:bd}),l=new sc,c={},h=e.maxTextureSize,u={[pi]:Ue,[Ue]:pi,[_n]:_n},f=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new we;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new wt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(T,R,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),b=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(In),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=m!==qn&&this.type===qn,U=m===qn&&this.type!==qn;for(let H=0,z=T.length;H<z;H++){let $=T[H],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let et=X.getFrameExtents();if(i.multiply(et),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,X.mapSize.y=r.y)),X.map===null||D===!0||U===!0){let xt=this.type!==qn?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new Oe(i.x,i.y,xt),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let rt=X.getViewportCount();for(let xt=0;xt<rt;xt++){let Rt=X.getViewport(xt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),L.viewport(o),X.updateMatrices($,xt),n=X.getFrustum(),y(R,S,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===qn&&_(X,S),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,b,E)};function _(T,R){let S=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Oe(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,S,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,S,d,x,null)}function v(T,R,S,M){let b=null,E=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)b=E;else if(b=S.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let L=b.uuid,D=R.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let H=U[D];H===void 0&&(H=b.clone(),U[D]=H,R.addEventListener("dispose",C)),b=H}if(b.visible=R.visible,b.wireframe=R.wireframe,M===qn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=s.properties.get(b);L.light=S}return b}function y(T,R,S,M,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let D=t.update(T),U=T.material;if(Array.isArray(U)){let H=D.groups;for(let z=0,$=H.length;z<$;z++){let X=H[z],et=U[X.materialIndex];if(et&&et.visible){let rt=v(T,et,M,b);T.onBeforeShadow(s,T,R,S,D,rt,X),s.renderBufferDirect(S,null,D,rt,T,X),T.onAfterShadow(s,T,R,S,D,rt,X)}}}else if(U.visible){let H=v(T,U,M,b);T.onBeforeShadow(s,T,R,S,D,H,null),s.renderBufferDirect(S,null,D,H,T,null),T.onAfterShadow(s,T,R,S,D,H,null)}}let L=T.children;for(let D=0,U=L.length;D<U;D++)y(L[D],R,S,M,b)}function C(T){T.target.removeEventListener("dispose",C);for(let S in c){let M=c[S],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var xx={[ol]:al,[ll]:ul,[cl]:fl,[ws]:hl,[al]:ol,[ul]:ll,[fl]:cl,[hl]:ws};function yx(s,t){function e(){let F=!1,at=new ce,Y=null,J=new ce(0,0,0,0);return{setMask:function(ut){Y!==ut&&!F&&(s.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){F=ut},setClear:function(ut,ct,Ft,be,He){He===!0&&(ut*=be,ct*=be,Ft*=be),at.set(ut,ct,Ft,be),J.equals(at)===!1&&(s.clearColor(ut,ct,Ft,be),J.copy(at))},reset:function(){F=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let F=!1,at=!1,Y=null,J=null,ut=null;return{setReversed:function(ct){if(at!==ct){let Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let be=ut;ut=null,this.setClear(be)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?st(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!F&&(s.depthMask(ct),Y=ct)},setFunc:function(ct){if(at&&(ct=xx[ct]),J!==ct){switch(ct){case ol:s.depthFunc(s.NEVER);break;case al:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case cl:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case ul:s.depthFunc(s.GREATER);break;case fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ct}},setLocked:function(ct){F=ct},setClear:function(ct){ut!==ct&&(at&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){F=!1,Y=null,J=null,ut=null,at=!1}}}function i(){let F=!1,at=null,Y=null,J=null,ut=null,ct=null,Ft=null,be=null,He=null;return{setTest:function(oe){F||(oe?st(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(oe){at!==oe&&!F&&(s.stencilMask(oe),at=oe)},setFunc:function(oe,mn,zn){(Y!==oe||J!==mn||ut!==zn)&&(s.stencilFunc(oe,mn,zn),Y=oe,J=mn,ut=zn)},setOp:function(oe,mn,zn){(ct!==oe||Ft!==mn||be!==zn)&&(s.stencilOp(oe,mn,zn),ct=oe,Ft=mn,be=zn)},setLocked:function(oe){F=oe},setClear:function(oe){He!==oe&&(s.clearStencil(oe),He=oe)},reset:function(){F=!1,at=null,Y=null,J=null,ut=null,ct=null,Ft=null,be=null,He=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,C=null,T=null,R=new Et(0,0,0),S=0,M=!1,b=null,E=null,L=null,D=null,U=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=$>=2);let et=null,rt={},xt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),zt=new ce().fromArray(xt),q=new ce().fromArray(Rt);function j(F,at,Y,J){let ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(F,ct),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Y;Ft++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(at+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}let dt={};dt[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(s.DEPTH_TEST),o.setFunc(ws),Xt(!1),qt(Ch),st(s.CULL_FACE),N(In);function st(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function St(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Pt(F,at){return u[F]!==at?(s.bindFramebuffer(F,at),u[F]=at,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ut(F,at){let Y=d,J=!1;if(F){Y=f.get(at),Y===void 0&&(Y=[],f.set(at,Y));let ut=F.textures;if(Y.length!==ut.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ft=ut.length;ct<Ft;ct++)Y[ct]=s.COLOR_ATTACHMENT0+ct;Y.length=ut.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function ae(F){return p!==F?(s.useProgram(F),p=F,!0):!1}let Vt={[zi]:s.FUNC_ADD,[td]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};Vt[nd]=s.MIN,Vt[id]=s.MAX;let he={[sd]:s.ZERO,[rd]:s.ONE,[od]:s.SRC_COLOR,[sl]:s.SRC_ALPHA,[fd]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[ld]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[rl]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[cd]:s.ONE_MINUS_DST_ALPHA,[dd]:s.CONSTANT_COLOR,[pd]:s.ONE_MINUS_CONSTANT_COLOR,[md]:s.CONSTANT_ALPHA,[gd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(F,at,Y,J,ut,ct,Ft,be,He,oe){if(F===In){x===!0&&(St(s.BLEND),x=!1);return}if(x===!1&&(st(s.BLEND),x=!0),F!==jf){if(F!==g||oe!==M){if((m!==zi||y!==zi)&&(s.blendEquation(s.FUNC_ADD),m=zi,y=zi),oe)switch(F){case Pn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mi:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,v=null,C=null,T=null,R.set(0,0,0),S=0,g=F,M=oe}return}ut=ut||at,ct=ct||Y,Ft=Ft||J,(at!==m||ut!==y)&&(s.blendEquationSeparate(Vt[at],Vt[ut]),m=at,y=ut),(Y!==_||J!==v||ct!==C||Ft!==T)&&(s.blendFuncSeparate(he[Y],he[J],he[ct],he[Ft]),_=Y,v=J,C=ct,T=Ft),(be.equals(R)===!1||He!==S)&&(s.blendColor(be.r,be.g,be.b,He),R.copy(be),S=He),g=F,M=!1}function Be(F,at){F.side===_n?St(s.CULL_FACE):st(s.CULL_FACE);let Y=F.side===Ue;at&&(Y=!Y),Xt(Y),F.blending===Pn&&F.transparent===!1?N(In):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let J=F.stencilWrite;a.setTest(J),J&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function qt(F){F!==Jf?(st(s.CULL_FACE),F!==E&&(F===Ch?s.cullFace(s.BACK):F===Qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),E=F}function At(F){F!==L&&(z&&s.lineWidth(F),L=F)}function de(F,at,Y){F?(st(s.POLYGON_OFFSET_FILL),(D!==at||U!==Y)&&(s.polygonOffset(at,Y),D=at,U=Y)):St(s.POLYGON_OFFSET_FILL)}function Tt(F){F?st(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function I(F){F===void 0&&(F=s.TEXTURE0+H-1),et!==F&&(s.activeTexture(F),et=F)}function w(F,at,Y){Y===void 0&&(et===null?Y=s.TEXTURE0+H-1:Y=et);let J=rt[Y];J===void 0&&(J={type:void 0,texture:void 0},rt[Y]=J),(J.type!==F||J.texture!==at)&&(et!==Y&&(s.activeTexture(Y),et=Y),s.bindTexture(F,at||dt[F]),J.type=F,J.texture=at)}function V(){let F=rt[et];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){zt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),zt.copy(F))}function gt(F){q.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function Yt(F,at){let Y=c.get(at);Y===void 0&&(Y=new WeakMap,c.set(at,Y));let J=Y.get(F);J===void 0&&(J=s.getUniformBlockIndex(at,F.name),Y.set(F,J))}function Bt(F,at){let J=c.get(at).get(F);l.get(at)!==J&&(s.uniformBlockBinding(at,J,F.__bindingPointIndex),l.set(at,J))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,rt={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,_=null,v=null,y=null,C=null,T=null,R=new Et(0,0,0),S=0,M=!1,b=null,E=null,L=null,D=null,U=null,zt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:St,bindFramebuffer:Pt,drawBuffers:Ut,useProgram:ae,setBlending:N,setMaterial:Be,setFlipSided:Xt,setCullFace:qt,setLineWidth:At,setPolygonOffset:de,setScissorTest:Tt,activeTexture:I,bindTexture:w,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:ue}}function Eu(s,t,e,n){let i=vx(n);switch(e){case Wu:return s*t;case qu:return s*t;case Yu:return s*t*2;case Zu:return s*t/i.components*i.byteLength;case Bc:return s*t/i.components*i.byteLength;case $u:return s*t*2/i.components*i.byteLength;case Hc:return s*t*2/i.components*i.byteLength;case Xu:return s*t*3/i.components*i.byteLength;case Mn:return s*t*4/i.components*i.byteLength;case Vc:return s*t*4/i.components*i.byteLength;case co:case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xl:case vl:return Math.max(s,16)*Math.max(t,8)/4;case gl:case yl:return Math.max(s,8)*Math.max(t,8)/2;case _l:case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case po:case Ol:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ku:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vx(s){switch(s){case Qn:case Hu:return{byteLength:1,components:1};case ur:case Vu:case on:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case Hi:case Oc:case $n:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _x(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return d?new OffscreenCanvas(I,w):xo("canvas")}function x(I,w,V){let K=1,Q=Tt(I);if((Q.width>V||Q.height>V)&&(K=V/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Z=Math.floor(K*Q.width),Mt=Math.floor(K*Q.height);u===void 0&&(u=p(Z,Mt));let lt=w?p(Z,Mt):u;return lt.width=Z,lt.height=Mt,lt.getContext("2d").drawImage(I,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Mt+")."),lt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,w,V,K,Q=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=w;if(w===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),w===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),w===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),w===s.RGBA){let Mt=Q?Go:Gt.getTransfer(K);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=Mt===se?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(I,w){let V;return I?w===null||w===Hi||w===As?V=s.DEPTH24_STENCIL8:w===$n?V=s.DEPTH32F_STENCIL8:w===ur&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Hi||w===As?V=s.DEPTH_COMPONENT24:w===$n?V=s.DEPTH_COMPONENT32F:w===ur&&(V=s.DEPTH_COMPONENT16),V}function C(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==bn&&I.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){let w=I.target;w.removeEventListener("dispose",T),S(w),w.isVideoTexture&&h.delete(w)}function R(I){let w=I.target;w.removeEventListener("dispose",R),b(w)}function S(I){let w=n.get(I);if(w.__webglInit===void 0)return;let V=I.source,K=f.get(V);if(K){let Q=K[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(I),Object.keys(K).length===0&&f.delete(V)}n.remove(I)}function M(I){let w=n.get(I);s.deleteTexture(w.__webglTexture);let V=I.source,K=f.get(V);delete K[w.__cacheKey],o.memory.textures--}function b(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Q=0;Q<w.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(w.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=I.textures;for(let K=0,Q=V.length;K<Q;K++){let Z=n.get(V[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(I)}let E=0;function L(){E=0}function D(){let I=E;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),E+=1,I}function U(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function H(I,w){let V=n.get(I);if(I.isVideoTexture&&At(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,I,w);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function z(I,w){let V=n.get(I);if(I.version>0&&V.__version!==I.version){q(V,I,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function $(I,w){let V=n.get(I);if(I.version>0&&V.__version!==I.version){q(V,I,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function X(I,w){let V=n.get(I);if(I.version>0&&V.__version!==I.version){j(V,I,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}let et={[Ln]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[ml]:s.MIRRORED_REPEAT},rt={[bn]:s.NEAREST,[_d]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[ba]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},xt={[wd]:s.NEVER,[Id]:s.ALWAYS,[Td]:s.LESS,[Qu]:s.LEQUAL,[Ed]:s.EQUAL,[Cd]:s.GEQUAL,[Ad]:s.GREATER,[Rd]:s.NOTEQUAL};function Rt(I,w){if(w.type===$n&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===tn||w.magFilter===ba||w.magFilter===Fr||w.magFilter===Zn||w.minFilter===tn||w.minFilter===ba||w.minFilter===Fr||w.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,et[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,et[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,et[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,rt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,xt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===bn||w.minFilter!==Fr&&w.minFilter!==Zn||w.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function zt(I,w){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));let K=w.source,Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));let Z=U(w);if(Z!==I.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[Z].usedTimes++;let Mt=Q[I.__cacheKey];Mt!==void 0&&(Q[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(w)),I.__cacheKey=Z,I.__webglTexture=Q[Z].texture}return V}function q(I,w,V){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);let Q=zt(I,w),Z=w.source;e.bindTexture(K,I.__webglTexture,s.TEXTURE0+V);let Mt=n.get(Z);if(Z.version!==Mt.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);let lt=Gt.getPrimaries(Gt.workingColorSpace),pt=w.colorSpace===Rn?null:Gt.getPrimaries(w.colorSpace),Jt=w.colorSpace===Rn||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=x(w.image,!1,i.maxTextureSize);nt=de(w,nt);let mt=r.convert(w.format,w.colorSpace),Ct=r.convert(w.type),It=v(w.internalFormat,mt,Ct,w.colorSpace,w.isVideoTexture);Rt(K,w);let gt,Yt=w.mipmaps,Bt=w.isVideoTexture!==!0,ue=Mt.__version===void 0||Q===!0,F=Z.dataReady,at=C(w,nt);if(w.isDepthTexture)It=y(w.format===Rs,w.type),ue&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,Ct,null));else if(w.isDataTexture)if(Yt.length>0){Bt&&ue&&e.texStorage2D(s.TEXTURE_2D,at,It,Yt[0].width,Yt[0].height);for(let Y=0,J=Yt.length;Y<J;Y++)gt=Yt[Y],Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(s.TEXTURE_2D,Y,It,gt.width,gt.height,0,mt,Ct,gt.data);w.generateMipmaps=!1}else Bt?(ue&&e.texStorage2D(s.TEXTURE_2D,at,It,nt.width,nt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Ct,nt.data)):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,Ct,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Bt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,It,Yt[0].width,Yt[0].height,nt.depth);for(let Y=0,J=Yt.length;Y<J;Y++)if(gt=Yt[Y],w.format!==Mn)if(mt!==null)if(Bt){if(F)if(w.layerUpdates.size>0){let ut=Eu(gt.width,gt.height,w.format,w.type);for(let ct of w.layerUpdates){let Ft=gt.data.subarray(ct*ut/gt.data.BYTES_PER_ELEMENT,(ct+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ct,gt.width,gt.height,1,mt,Ft)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,It,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,Ct,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,It,gt.width,gt.height,nt.depth,0,mt,Ct,gt.data)}else{Bt&&ue&&e.texStorage2D(s.TEXTURE_2D,at,It,Yt[0].width,Yt[0].height);for(let Y=0,J=Yt.length;Y<J;Y++)gt=Yt[Y],w.format!==Mn?mt!==null?Bt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(s.TEXTURE_2D,Y,It,gt.width,gt.height,0,mt,Ct,gt.data)}else if(w.isDataArrayTexture)if(Bt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,It,nt.width,nt.height,nt.depth),F)if(w.layerUpdates.size>0){let Y=Eu(nt.width,nt.height,w.format,w.type);for(let J of w.layerUpdates){let ut=nt.data.subarray(J*Y/nt.data.BYTES_PER_ELEMENT,(J+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,mt,Ct,ut)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(w.isData3DTexture)Bt?(ue&&e.texStorage3D(s.TEXTURE_3D,at,It,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(w.isFramebufferTexture){if(ue)if(Bt)e.texStorage2D(s.TEXTURE_2D,at,It,nt.width,nt.height);else{let Y=nt.width,J=nt.height;for(let ut=0;ut<at;ut++)e.texImage2D(s.TEXTURE_2D,ut,It,Y,J,0,mt,Ct,null),Y>>=1,J>>=1}}else if(Yt.length>0){if(Bt&&ue){let Y=Tt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,at,It,Y.width,Y.height)}for(let Y=0,J=Yt.length;Y<J;Y++)gt=Yt[Y],Bt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt,Ct,gt):e.texImage2D(s.TEXTURE_2D,Y,It,mt,Ct,gt);w.generateMipmaps=!1}else if(Bt){if(ue){let Y=Tt(nt);e.texStorage2D(s.TEXTURE_2D,at,It,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,It,mt,Ct,nt);g(w)&&m(K),Mt.__version=Z.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function j(I,w,V){if(w.image.length!==6)return;let K=zt(I,w),Q=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);let Z=n.get(Q);if(Q.version!==Z.__version||K===!0){e.activeTexture(s.TEXTURE0+V);let Mt=Gt.getPrimaries(Gt.workingColorSpace),lt=w.colorSpace===Rn?null:Gt.getPrimaries(w.colorSpace),pt=w.colorSpace===Rn||Mt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Jt&&!nt?mt[J]=x(w.image[J],!0,i.maxCubemapSize):mt[J]=nt?w.image[J].image:w.image[J],mt[J]=de(w,mt[J]);let Ct=mt[0],It=r.convert(w.format,w.colorSpace),gt=r.convert(w.type),Yt=v(w.internalFormat,It,gt,w.colorSpace),Bt=w.isVideoTexture!==!0,ue=Z.__version===void 0||K===!0,F=Q.dataReady,at=C(w,Ct);Rt(s.TEXTURE_CUBE_MAP,w);let Y;if(Jt){Bt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Yt,Ct.width,Ct.height);for(let J=0;J<6;J++){Y=mt[J].mipmaps;for(let ut=0;ut<Y.length;ut++){let ct=Y[ut];w.format!==Mn?It!==null?Bt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,ct.width,ct.height,It,gt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Yt,ct.width,ct.height,0,It,gt,ct.data)}}}else{if(Y=w.mipmaps,Bt&&ue){Y.length>0&&at++;let J=Tt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,It,gt,mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,mt[J].width,mt[J].height,0,It,gt,mt[J].data);for(let ut=0;ut<Y.length;ut++){let Ft=Y[ut].image[J].image;Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Ft.width,Ft.height,It,gt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Yt,Ft.width,Ft.height,0,It,gt,Ft.data)}}else{Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,It,gt,mt[J]);for(let ut=0;ut<Y.length;ut++){let ct=Y[ut];Bt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,It,gt,ct.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Yt,It,gt,ct.image[J])}}}g(w)&&m(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function dt(I,w,V,K,Q,Z){let Mt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),pt=v(V.internalFormat,Mt,lt,V.colorSpace),Jt=n.get(w),nt=n.get(V);if(nt.__renderTarget=w,!Jt.__hasExternalTextures){let mt=Math.max(1,w.width>>Z),Ct=Math.max(1,w.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,pt,mt,Ct,w.depth,0,Mt,lt,null):e.texImage2D(Q,Z,pt,mt,Ct,0,Mt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,nt.__webglTexture,0,Xt(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,nt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(I,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){let K=w.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=y(w.stencilBuffer,Q),Mt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Xt(w);qt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Z,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Z,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Z,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,I)}else{let K=w.textures;for(let Q=0;Q<K.length;Q++){let Z=K[Q],Mt=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),pt=v(Z.internalFormat,Mt,lt,Z.colorSpace),Jt=Xt(w);V&&qt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,pt,w.width,w.height):qt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,pt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let Q=K.__webglTexture,Z=Xt(w);if(w.depthTexture.format===Ms)qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Rs)qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pt(I){let w=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=K}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");St(w.__webglFramebuffer,I)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),st(w.__webglDepthbuffer[K],I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),st(w.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(I,w,V){let K=n.get(I);w!==void 0&&dt(K.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Pt(I)}function ae(I){let w=I.texture,V=n.get(I),K=n.get(w);I.addEventListener("dispose",R);let Q=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let pt=0;pt<w.mipmaps.length;pt++)V.__webglFramebuffer[lt][pt]=s.createFramebuffer()}else V.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)V.__webglFramebuffer[lt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let lt=0,pt=Q.length;lt<pt;lt++){let Jt=n.get(Q[lt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&qt(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let pt=Q[lt];V.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);let Jt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=v(pt.internalFormat,Jt,nt,pt.colorSpace,I.isXRRenderTarget===!0),Ct=Xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,mt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),st(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)dt(V.__webglFramebuffer[lt][pt],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else dt(V.__webglFramebuffer[lt],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,pt=Q.length;lt<pt;lt++){let Jt=Q[lt],nt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Rt(s.TEXTURE_2D,Jt),dt(V.__webglFramebuffer,I,Jt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(Jt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),Rt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let pt=0;pt<w.mipmaps.length;pt++)dt(V.__webglFramebuffer[pt],I,w,s.COLOR_ATTACHMENT0,lt,pt);else dt(V.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,lt,0);g(w)&&m(lt),e.unbindTexture()}I.depthBuffer&&Pt(I)}function Vt(I){let w=I.textures;for(let V=0,K=w.length;V<K;V++){let Q=w[V];if(g(Q)){let Z=_(I),Mt=n.get(Q).__webglTexture;e.bindTexture(Z,Mt),m(Z),e.unbindTexture()}}}let he=[],N=[];function Be(I){if(I.samples>0){if(qt(I)===!1){let w=I.textures,V=I.width,K=I.height,Q=s.COLOR_BUFFER_BIT,Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(I),lt=w.length>1;if(lt)for(let pt=0;pt<w.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<w.length;pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Jt=n.get(w[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,Q,s.NEAREST),l===!0&&(he.length=0,N.length=0,he.push(s.COLOR_ATTACHMENT0+pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(Z),N.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<w.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);let Jt=n.get(w[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Xt(I){return Math.min(i.maxSamples,I.samples)}function qt(I){let w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function At(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function de(I,w){let V=I.colorSpace,K=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==ks&&V!==Rn&&(Gt.getTransfer(V)===se?(K!==Mn||Q!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Ut,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=qt}function Mx(s,t){function e(n,i=Rn){let r,o=Gt.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===kc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return s.BYTE;if(n===Vu)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===Oc)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===on)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===Xu)return s.RGB;if(n===Mn)return s.RGBA;if(n===qu)return s.LUMINANCE;if(n===Yu)return s.LUMINANCE_ALPHA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Rs)return s.DEPTH_STENCIL;if(n===Zu)return s.RED;if(n===Bc)return s.RED_INTEGER;if(n===$u)return s.RG;if(n===Hc)return s.RG_INTEGER;if(n===Vc)return s.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===yl||n===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===Ml||n===bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===Ml)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===wl||n===Tl||n===El||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Fl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===Ol||n===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===zl||n===Bl||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var rc=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},bx={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new rn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:Sx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends gi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=new oc,g=e.getContextAttributes(),m=null,_=null,v=[],y=[],C=new tt,T=null,R=new Ne;R.viewport=new ce;let S=new Ne;S.viewport=new ce;let M=[R,S],b=new rc,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=v[q];return j===void 0&&(j=new lr,v[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=v[q];return j===void 0&&(j=new lr,v[q]=j),j.getGripSpace()},this.getHand=function(q){let j=v[q];return j===void 0&&(j=new lr,v[q]=j),j.getHandSpace()};function D(q){let j=y.indexOf(q.inputSource);if(j===-1)return;let dt=v[j];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||o),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",H);for(let q=0;q<v.length;q++){let j=y[q];j!==null&&(y[q]=null,v[q].disconnect(j))}E=null,L=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,_=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",U),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let j={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Oe(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,dt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?Rs:Ms,dt=g.stencil?As:Hi);let St={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Oe(f.textureWidth,f.textureHeight,{format:Mn,type:Qn,depthTexture:new wo(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(q){for(let j=0;j<q.removed.length;j++){let dt=q.removed[j],st=y.indexOf(dt);st>=0&&(y[st]=null,v[st].disconnect(dt))}for(let j=0;j<q.added.length;j++){let dt=q.added[j],st=y.indexOf(dt);if(st===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=y.length){y.push(dt),st=Pt;break}else if(y[Pt]===null){y[Pt]=dt,st=Pt;break}if(st===-1)break}let St=v[st];St&&St.connect(dt)}}let z=new P,$=new P;function X(q,j,dt){z.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(dt.matrixWorld);let st=z.distanceTo($),St=j.projectionMatrix.elements,Pt=dt.projectionMatrix.elements,Ut=St[14]/(St[10]-1),ae=St[14]/(St[10]+1),Vt=(St[9]+1)/St[5],he=(St[9]-1)/St[5],N=(St[8]-1)/St[0],Be=(Pt[8]+1)/Pt[0],Xt=Ut*N,qt=Ut*Be,At=st/(-N+Be),de=At*-N;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Tt=Ut+At,I=ae+At,w=Xt-de,V=qt+(st-de),K=Vt*ae/I*Tt,Q=he*ae/I*Tt;q.projectionMatrix.makePerspective(w,V,K,Q,Tt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,dt=q.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),b.near=S.near=R.near=j,b.far=S.far=R.far=dt,(E!==b.near||L!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,L=b.far),R.layers.mask=q.layers.mask|2,S.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|S.layers.mask;let st=q.parent,St=b.cameras;et(b,st);for(let Pt=0;Pt<St.length;Pt++)et(St[Pt],st);St.length===2?X(b,R,S):b.projectionMatrix.copy(R.projectionMatrix),rt(q,b,st)};function rt(q,j,dt){dt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let xt=null;function Rt(q,j){if(h=j.getViewerPose(c||o),p=j,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let st=!1;dt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Pt=0;Pt<dt.length;Pt++){let Ut=dt[Pt],ae=null;if(d!==null)ae=d.getViewport(Ut);else{let he=u.getViewSubImage(f,Ut);ae=he.viewport,Pt===0&&(t.setRenderTargetTextures(_,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(_))}let Vt=M[Pt];Vt===void 0&&(Vt=new Ne,Vt.layers.enable(Pt),Vt.viewport=new ce,M[Pt]=Vt),Vt.matrix.fromArray(Ut.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ut.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),Pt===0&&(b.matrix.copy(Vt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(Vt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){let Pt=u.getDepthInformation(dt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,i.renderState)}}for(let dt=0;dt<v.length;dt++){let st=y[dt],St=v[dt];st!==null&&St!==void 0&&St.update(st,j,c||o)}xt&&xt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let zt=new nf;zt.setAnimationLoop(Rt),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}},Oi=new Dn,Tx=new xe;function Ex(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ef(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(Oi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ax(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function c(_,v){let y=i[_.id];y===void 0&&(p(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));let C=v.program;n.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){let v=u();_.__bindingPointIndex=v;let y=s.createBuffer(),C=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=i[_.id],y=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,R=y.length;T<R;T++){let S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,b=S.length;M<b;M++){let E=S[M];if(d(E,T,M,C)===!0){let L=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],U=0;for(let H=0;H<D.length;H++){let z=D[H],$=x(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,L+U,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y,C){let T=_.value,R=v+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let S=C[R];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return C[R]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function p(_){let v=_.uniforms,y=0,C=16;for(let R=0,S=v.length;R<S;R++){let M=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,E=M.length;b<E;b++){let L=M[b],D=Array.isArray(L.value)?L.value:[L.value];for(let U=0,H=D.length;U<H;U++){let z=D[U],$=x(z),X=y%C,et=X%$.boundary,rt=X+et;y+=et,rt!==0&&C-rt<$.storage&&(y+=C-rt),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=$.storage}}}let T=y%C;return T>0&&(y+=C-T),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var To=class{constructor(t={}){let{canvas:e=Ld(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=fi,this.toneMappingExposure=1;let y=this,C=!1,T=0,R=0,S=null,M=-1,b=null,E=new ce,L=new ce,D=null,U=new Et(0),H=0,z=e.width,$=e.height,X=1,et=null,rt=null,xt=new ce(0,0,z,$),Rt=new ce(0,0,z,$),zt=!1,q=new dr,j=!1,dt=!1,st=new xe,St=new xe,Pt=new P,Ut=new ce,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function he(){return S===null?X:1}let N=n;function Be(A,O){return e.getContext(A,O)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),N===null){let O="webgl2";if(N=Be(O,A),N===null)throw Be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xt,qt,At,de,Tt,I,w,V,K,Q,Z,Mt,lt,pt,Jt,nt,mt,Ct,It,gt,Yt,Bt,ue,F;function at(){Xt=new Gm(N),Xt.init(),Bt=new Mx(N,Xt),qt=new Om(N,Xt,t,Bt),At=new yx(N,Xt),qt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),de=new qm(N),Tt=new rx,I=new _x(N,Xt,At,Tt,qt,Bt,de),w=new zm(y),V=new Vm(y),K=new jd(N),ue=new Fm(N,K),Q=new Wm(N,K,de,ue),Z=new Zm(N,Q,K,de),It=new Ym(N,qt,I),nt=new km(Tt),Mt=new sx(y,w,V,Xt,qt,ue,nt),lt=new Ex(y,Tt),pt=new ax,Jt=new dx(Xt),Ct=new Um(y,w,V,At,Z,d,l),mt=new gx(y,Z,qt),F=new Ax(N,de,qt,At),gt=new Nm(N,Xt,de),Yt=new Xm(N,Xt,de),de.programs=Mt.programs,y.capabilities=qt,y.extensions=Xt,y.properties=Tt,y.renderLists=pt,y.shadowMap=mt,y.state=At,y.info=de}at();let Y=new ac(y,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(z,$,!1))},this.getSize=function(A){return A.set(z,$)},this.setSize=function(A,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,$=O,e.width=Math.floor(A*X),e.height=Math.floor(O*X),G===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(z*X,$*X).floor()},this.setDrawingBufferSize=function(A,O,G){z=A,$=O,X=G,e.width=Math.floor(A*G),e.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,O,G,W){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,O,G,W),At.viewport(E.copy(xt).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,O,G,W){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,O,G,W),At.scissor(L.copy(Rt).multiplyScalar(X).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){At.setScissorTest(zt=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(A=!0,O=!0,G=!0){let W=0;if(A){let k=!1;if(S!==null){let it=S.texture.format;k=it===Vc||it===Hc||it===Bc}if(k){let it=S.texture.type,ht=it===Qn||it===Hi||it===ur||it===As||it===kc||it===zc,yt=Ct.getClearColor(),vt=Ct.getClearAlpha(),Lt=yt.r,Nt=yt.g,_t=yt.b;ht?(p[0]=Lt,p[1]=Nt,p[2]=_t,p[3]=vt,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=Lt,x[1]=Nt,x[2]=_t,x[3]=vt,N.clearBufferiv(N.COLOR,0,x))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),Jt.dispose(),Tt.dispose(),w.dispose(),V.dispose(),Z.dispose(),ue.dispose(),F.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mh),Y.removeEventListener("sessionend",bh),Pi.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let A=de.autoReset,O=mt.enabled,G=mt.autoUpdate,W=mt.needsUpdate,k=mt.type;at(),de.autoReset=A,mt.enabled=O,mt.autoUpdate=G,mt.needsUpdate=W,mt.type=k}function ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){let O=A.target;O.removeEventListener("dispose",Ft),be(O)}function be(A){He(A),Tt.remove(A)}function He(A){let O=Tt.get(A).programs;O!==void 0&&(O.forEach(function(G){Mt.releaseProgram(G)}),A.isShaderMaterial&&Mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,W,k,it){O===null&&(O=ae);let ht=k.isMesh&&k.matrixWorld.determinant()<0,yt=Zf(A,O,G,W,k);At.setMaterial(W,ht);let vt=G.index,Lt=1;if(W.wireframe===!0){if(vt=Q.getWireframeAttribute(G),vt===void 0)return;Lt=2}let Nt=G.drawRange,_t=G.attributes.position,Qt=Nt.start*Lt,fe=(Nt.start+Nt.count)*Lt;it!==null&&(Qt=Math.max(Qt,it.start*Lt),fe=Math.min(fe,(it.start+it.count)*Lt)),vt!==null?(Qt=Math.max(Qt,0),fe=Math.min(fe,vt.count)):_t!=null&&(Qt=Math.max(Qt,0),fe=Math.min(fe,_t.count));let pe=fe-Qt;if(pe<0||pe===1/0)return;ue.setup(k,W,yt,G,vt);let je,ne=gt;if(vt!==null&&(je=K.get(vt),ne=Yt,ne.setIndex(je)),k.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*he()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(k.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*he()),k.isLineSegments?ne.setMode(N.LINES):k.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else k.isPoints?ne.setMode(N.POINTS):k.isSprite&&ne.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ne.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ne.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let bt=k._multiDrawStarts,Bn=k._multiDrawCounts,ie=k._multiDrawCount,gn=vt?K.get(vt).bytesPerElement:1,ts=Tt.get(W).currentProgram.getUniforms();for(let en=0;en<ie;en++)ts.setValue(N,"_gl_DrawID",en),ne.render(bt[en]/gn,Bn[en])}else if(k.isInstancedMesh)ne.renderInstances(Qt,pe,k.count);else if(G.isInstancedBufferGeometry){let bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bn=Math.min(G.instanceCount,bt);ne.renderInstances(Qt,pe,Bn)}else ne.render(Qt,pe)};function oe(A,O,G){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=Ue,A.needsUpdate=!0,Ur(A,O,G),A.side=pi,A.needsUpdate=!0,Ur(A,O,G),A.side=_n):Ur(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),m=Jt.get(G),m.init(O),v.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let it=k.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){let yt=it[ht];oe(yt,G,k),W.add(yt)}else oe(it,G,k),W.add(it)}),v.pop(),m=null,W},this.compileAsync=function(A,O,G=null){let W=this.compile(A,O,G);return new Promise(k=>{function it(){if(W.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){k(A);return}setTimeout(it,10)}Xt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let mn=null;function zn(A){mn&&mn(A)}function Mh(){Pi.stop()}function bh(){Pi.start()}let Pi=new nf;Pi.setAnimationLoop(zn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){mn=A,Y.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},Y.addEventListener("sessionstart",Mh),Y.addEventListener("sessionend",bh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,O,S),m=Jt.get(A,v.length),m.init(O),v.push(m),St.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(St),dt=this.localClippingEnabled,j=nt.init(this.clippingPlanes,dt),g=pt.get(A,_.length),g.init(),_.push(g),Y.enabled===!0&&Y.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Ma(it,O,-1/0,y.sortObjects)}Ma(A,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(et,rt),Vt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Vt&&Ct.addToRenderList(g,A),this.info.render.frame++,j===!0&&nt.beginShadows();let G=m.state.shadowsArray;mt.render(G,A,O),j===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,k=g.transmissive;if(m.setupLights(),O.isArrayCamera){let it=O.cameras;if(k.length>0)for(let ht=0,yt=it.length;ht<yt;ht++){let vt=it[ht];wh(W,k,A,vt)}Vt&&Ct.render(A);for(let ht=0,yt=it.length;ht<yt;ht++){let vt=it[ht];Sh(g,A,vt,vt.viewport)}}else k.length>0&&wh(W,k,A,O),Vt&&Ct.render(A),Sh(g,A,O);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(y,A,O),ue.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&nt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Ma(A,O,G,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){W&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);let ht=Z.update(A),yt=A.material;yt.visible&&g.push(A,ht,yt,G,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){let ht=Z.update(A),yt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ut.copy(ht.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(yt)){let vt=ht.groups;for(let Lt=0,Nt=vt.length;Lt<Nt;Lt++){let _t=vt[Lt],Qt=yt[_t.materialIndex];Qt&&Qt.visible&&g.push(A,ht,Qt,G,Ut.z,_t)}}else yt.visible&&g.push(A,ht,yt,G,Ut.z,null)}}let it=A.children;for(let ht=0,yt=it.length;ht<yt;ht++)Ma(it[ht],O,G,W)}function Sh(A,O,G,W){let k=A.opaque,it=A.transmissive,ht=A.transparent;m.setupLightsView(G),j===!0&&nt.setGlobalState(y.clippingPlanes,G),W&&At.viewport(E.copy(W)),k.length>0&&Dr(k,O,G),it.length>0&&Dr(it,O,G),ht.length>0&&Dr(ht,O,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function wh(A,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Oe(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?on:Qn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let it=m.state.transmissionRenderTarget[W.id],ht=W.viewport||E;it.setSize(ht.z,ht.w);let yt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(U),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Ct.render(G);let vt=y.toneMapping;y.toneMapping=fi;let Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),j===!0&&nt.setGlobalState(y.clippingPlanes,W),Dr(A,G,W),I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let _t=0,Qt=O.length;_t<Qt;_t++){let fe=O[_t],pe=fe.object,je=fe.geometry,ne=fe.material,bt=fe.group;if(ne.side===_n&&pe.layers.test(W.layers)){let Bn=ne.side;ne.side=Ue,ne.needsUpdate=!0,Th(pe,G,W,je,ne,bt),ne.side=Bn,ne.needsUpdate=!0,Nt=!0}}Nt===!0&&(I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it))}y.setRenderTarget(yt),y.setClearColor(U,H),Lt!==void 0&&(W.viewport=Lt),y.toneMapping=vt}function Dr(A,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let k=0,it=A.length;k<it;k++){let ht=A[k],yt=ht.object,vt=ht.geometry,Lt=W===null?ht.material:W,Nt=ht.group;yt.layers.test(G.layers)&&Th(yt,O,G,vt,Lt,Nt)}}function Th(A,O,G,W,k,it){A.onBeforeRender(y,O,G,W,k,it),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(y,O,G,W,A,it),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,y.renderBufferDirect(G,O,W,k,A,it),k.side=pi,k.needsUpdate=!0,y.renderBufferDirect(G,O,W,k,A,it),k.side=_n):y.renderBufferDirect(G,O,W,k,A,it),A.onAfterRender(y,O,G,W,k,it)}function Ur(A,O,G){O.isScene!==!0&&(O=ae);let W=Tt.get(A),k=m.state.lights,it=m.state.shadowsArray,ht=k.state.version,yt=Mt.getParameters(A,k.state,it,O,G),vt=Mt.getProgramCacheKey(yt),Lt=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",Ft),Lt=new Map,W.programs=Lt);let Nt=Lt.get(vt);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===ht)return Ah(A,yt),Nt}else yt.uniforms=Mt.getUniforms(A),A.onBeforeCompile(yt,y),Nt=Mt.acquireProgram(yt,vt),Lt.set(vt,Nt),W.uniforms=yt.uniforms;let _t=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(_t.clippingPlanes=nt.uniform),Ah(A,yt),W.needsLights=Kf(A),W.lightsStateVersion=ht,W.needsLights&&(_t.ambientLightColor.value=k.state.ambient,_t.lightProbe.value=k.state.probe,_t.directionalLights.value=k.state.directional,_t.directionalLightShadows.value=k.state.directionalShadow,_t.spotLights.value=k.state.spot,_t.spotLightShadows.value=k.state.spotShadow,_t.rectAreaLights.value=k.state.rectArea,_t.ltc_1.value=k.state.rectAreaLTC1,_t.ltc_2.value=k.state.rectAreaLTC2,_t.pointLights.value=k.state.point,_t.pointLightShadows.value=k.state.pointShadow,_t.hemisphereLights.value=k.state.hemi,_t.directionalShadowMap.value=k.state.directionalShadowMap,_t.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_t.spotShadowMap.value=k.state.spotShadowMap,_t.spotLightMatrix.value=k.state.spotLightMatrix,_t.spotLightMap.value=k.state.spotLightMap,_t.pointShadowMap.value=k.state.pointShadowMap,_t.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function Eh(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Ss.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ah(A,O){let G=Tt.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Zf(A,O,G,W,k){O.isScene!==!0&&(O=ae),I.resetTextureUnits();let it=O.fog,ht=W.isMeshStandardMaterial?O.environment:null,yt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ks,vt=(W.isMeshStandardMaterial?V:w).get(W.envMap||ht),Lt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),_t=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,pe=fi;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(pe=y.toneMapping);let je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=je!==void 0?je.length:0,bt=Tt.get(W),Bn=m.state.lights;if(j===!0&&(dt===!0||A!==b)){let cn=A===b&&W.id===M;nt.setState(W,A,cn)}let ie=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Bn.state.version||bt.outputColorSpace!==yt||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==vt||W.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Nt||bt.morphTargets!==_t||bt.morphNormals!==Qt||bt.morphColors!==fe||bt.toneMapping!==pe||bt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,bt.__version=W.version);let gn=bt.currentProgram;ie===!0&&(gn=Ur(W,O,k));let ts=!1,en=!1,Ks=!1,me=gn.getUniforms(),En=bt.uniforms;if(At.useProgram(gn.program)&&(ts=!0,en=!0,Ks=!0),W.id!==M&&(M=W.id,en=!0),ts||b!==A){At.buffers.depth.getReversed()?(st.copy(A.projectionMatrix),Ud(st),Fd(st),me.setValue(N,"projectionMatrix",st)):me.setValue(N,"projectionMatrix",A.projectionMatrix),me.setValue(N,"viewMatrix",A.matrixWorldInverse);let ii=me.map.cameraPosition;ii!==void 0&&ii.setValue(N,Pt.setFromMatrixPosition(A.matrixWorld)),qt.logarithmicDepthBuffer&&me.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&me.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,en=!0,Ks=!0)}if(k.isSkinnedMesh){me.setOptional(N,k,"bindMatrix"),me.setOptional(N,k,"bindMatrixInverse");let cn=k.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),me.setValue(N,"boneTexture",cn.boneTexture,I))}k.isBatchedMesh&&(me.setOptional(N,k,"batchingTexture"),me.setValue(N,"batchingTexture",k._matricesTexture,I),me.setOptional(N,k,"batchingIdTexture"),me.setValue(N,"batchingIdTexture",k._indirectTexture,I),me.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(N,"batchingColorTexture",k._colorsTexture,I));let Js=G.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&It.update(k,G,gn),(en||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,me.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(En.envMap.value=vt,En.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),en&&(me.setValue(N,"toneMappingExposure",y.toneMappingExposure),bt.needsLights&&$f(En,Ks),it&&W.fog===!0&&lt.refreshFogUniforms(En,it),lt.refreshMaterialUniforms(En,W,X,$,m.state.transmissionRenderTarget[A.id]),Ss.upload(N,Eh(bt),En,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ss.upload(N,Eh(bt),En,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&me.setValue(N,"center",k.center),me.setValue(N,"modelViewMatrix",k.modelViewMatrix),me.setValue(N,"normalMatrix",k.normalMatrix),me.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let cn=W.uniformsGroups;for(let ii=0,si=cn.length;ii<si;ii++){let Rh=cn[ii];F.update(Rh,gn),F.bind(Rh,gn)}}return gn}function $f(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Kf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,O,G){Tt.get(A.texture).__webglTexture=O,Tt.get(A.depthTexture).__webglTexture=G;let W=Tt.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let G=Tt.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){S=A,T=O,R=G;let W=!0,k=null,it=!1,ht=!1;if(A){let vt=Tt.get(A);if(vt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(vt.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(vt.__hasExternalTextures)I.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _t=A.depthTexture;if(vt.__boundDepthTexture!==_t){if(_t!==null&&Tt.has(_t)&&(A.width!==_t.image.width||A.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);let Nt=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?k=Nt[O][G]:k=Nt[O],it=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?k=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[G]:k=Nt,E.copy(A.viewport),L.copy(A.scissor),D=A.scissorTest}else E.copy(xt).multiplyScalar(X).floor(),L.copy(Rt).multiplyScalar(X).floor(),D=zt;if(At.bindFramebuffer(N.FRAMEBUFFER,k)&&W&&At.drawBuffers(A,k),At.viewport(E),At.scissor(L),At.setScissorTest(D),it){let vt=Tt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,vt.__webglTexture,G)}else if(ht){let vt=Tt.get(A.texture),Lt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,G||0,Lt)}M=-1},this.readRenderTargetPixels=function(A,O,G,W,k,it,ht){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){At.bindFramebuffer(N.FRAMEBUFFER,yt);try{let vt=A.texture,Lt=vt.format,Nt=vt.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k&&N.readPixels(O,G,W,k,Bt.convert(Lt),Bt.convert(Nt),it)}finally{let vt=S!==null?Tt.get(S).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,W,k,it,ht){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){let vt=A.texture,Lt=vt.format,Nt=vt.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-W&&G>=0&&G<=A.height-k){At.bindFramebuffer(N.FRAMEBUFFER,yt);let _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(O,G,W,k,Bt.convert(Lt),Bt.convert(Nt),0);let Qt=S!==null?Tt.get(S).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Qt);let fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Dd(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(_t),N.deleteSync(fe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let W=Math.pow(2,-G),k=Math.floor(A.image.width*W),it=Math.floor(A.image.height*W),ht=O!==null?O.x:0,yt=O!==null?O.y:0;I.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ht,yt,k,it),At.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,W=null,k=0){A.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],O=arguments[2],k=arguments[3]||0,G=null);let it,ht,yt,vt,Lt,Nt,_t,Qt,fe,pe=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(it=G.max.x-G.min.x,ht=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,vt=G.min.x,Lt=G.min.y,Nt=G.isBox3?G.min.z:0):(it=pe.width,ht=pe.height,yt=pe.depth||1,vt=0,Lt=0,Nt=0),W!==null?(_t=W.x,Qt=W.y,fe=W.z):(_t=0,Qt=0,fe=0);let je=Bt.convert(O.format),ne=Bt.convert(O.type),bt;O.isData3DTexture?(I.setTexture3D(O,0),bt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(I.setTexture2DArray(O,0),bt=N.TEXTURE_2D_ARRAY):(I.setTexture2D(O,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Bn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),ts=N.getParameter(N.UNPACK_SKIP_ROWS),en=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);let Ks=A.isDataArrayTexture||A.isData3DTexture,me=O.isDataArrayTexture||O.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let En=Tt.get(A),Js=Tt.get(O),cn=Tt.get(En.__renderTarget),ii=Tt.get(Js.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,cn.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<yt;si++)Ks&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(A).__webglTexture,k,Nt+si),A.isDepthTexture?(me&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,k,fe+si),N.blitFramebuffer(vt,Lt,it,ht,_t,Qt,it,ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):me?N.copyTexSubImage3D(bt,k,_t,Qt,fe+si,vt,Lt,it,ht):N.copyTexSubImage2D(bt,k,_t,Qt,fe+si,vt,Lt,it,ht);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else me?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(bt,k,_t,Qt,fe,it,ht,yt,je,ne,pe.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,k,_t,Qt,fe,it,ht,yt,je,pe.data):N.texSubImage3D(bt,k,_t,Qt,fe,it,ht,yt,je,ne,pe):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,_t,Qt,it,ht,je,ne,pe.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,_t,Qt,pe.width,pe.height,je,pe.data):N.texSubImage2D(N.TEXTURE_2D,k,_t,Qt,it,ht,je,ne,pe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Bn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ts),N.pixelStorei(N.UNPACK_SKIP_IMAGES,en),k===0&&O.generateMipmaps&&N.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,W=null,k=0){return A.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],O=arguments[3],k=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,G,W,k)},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){T=0,R=0,S=null,At.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}},Eo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var jn=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new P,pr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mr=class extends yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,nr=new P,gs=new P,xs=new P,ys=new tt,ir=new tt,lf=new xe,no=new P,sr=new P,io=new P,Au=new tt,Qa=new tt,Ru=new tt,Ro=class extends qe{constructor(t=new mr){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new pr(n,3,0,!1)),ms.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;so(no.set(-.5,-.5,0),xs,o,gs,i,r),so(sr.set(.5,-.5,0),xs,o,gs,i,r),so(io.set(.5,.5,0),xs,o,gs,i,r),Au.set(0,0),Qa.set(1,0),Ru.set(1,1);let a=t.ray.intersectTriangle(no,sr,io,!1,nr);if(a===null&&(so(sr.set(-.5,.5,0),xs,o,gs,i,r),Qa.set(0,1),a=t.ray.intersectTriangle(no,io,sr,!1,nr),a===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:ui.getInterpolation(nr,no,sr,io,Au,Qa,Ru,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function so(s,t,e,n,i,r){ys.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ir.x=r*ys.x-i*ys.y,ir.y=i*ys.x+r*ys.y):ir.copy(ys),s.copy(t),s.x+=ir.x,s.y+=ir.y,s.applyMatrix4(lf)}var Gi=class extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Ds=class extends rn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new tt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],r=[],o=[],a=new P,l=new xe;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lc=class extends gr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var ro=new P,ja=new Wc,tl=new Wc,el=new Wc,cc=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ro.subVectors(i[0],i[1]).add(i[0]),c=ro);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ja.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),tl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),el.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),el.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ja.calc(l),tl.calc(l),el.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Rx(s,t){let e=1-s;return e*e*t}function Cx(s,t){return 2*(1-s)*s*t}function Ix(s,t){return s*s*t}function cr(s,t,e,n){return Rx(s,t)+Cx(s,e)+Ix(s,n)}function Px(s,t){let e=1-s;return e*e*e*t}function Lx(s,t){let e=1-s;return 3*e*e*s*t}function Dx(s,t){return 3*(1-s)*s*s*t}function Ux(s,t){return s*s*s*t}function hr(s,t,e,n,i){return Px(s,t)+Lx(s,e)+Dx(s,n)+Ux(s,i)}var Co=class extends dn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,i.x,r.x,o.x,a.x),hr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hc=class extends dn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,i.x,r.x,o.x,a.x),hr(t,i.y,r.y,o.y,a.y),hr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends dn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uc=class extends dn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends dn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,i.x,r.x,o.x),cr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fc=class extends dn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,i.x,r.x,o.x),cr(t,i.y,r.y,o.y),cr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Cu(a,l.x,c.x,h.x,u.x),Cu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},Iu=Object.freeze({__proto__:null,ArcCurve:lc,CatmullRomCurve3:cc,CubicBezierCurve:Co,CubicBezierCurve3:hc,EllipseCurve:gr,LineCurve:Io,LineCurve3:uc,QuadraticBezierCurve:Po,QuadraticBezierCurve3:fc,SplineCurve:Lo}),dc=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Iu[i.type]().fromJSON(i))}return this}},pc=class extends dc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Io(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Po(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Co(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new gr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mc=class s extends we{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new tt,d=new P,p=new P,x=new P,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let v=n+_*h*i,y=Math.sin(v),C=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),a.push(f.x,f.y);let R=l[3*T+0]*y,S=l[3*T+1],M=l[3*T+0]*C;c.push(R,S,M)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let y=v+_*t.length,C=y,T=y+t.length,R=y+t.length+1,S=y+1;r.push(C,T,S),r.push(R,S,T)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Do=class s extends mc{constructor(t=1,e=1,n=4,i=8){let r=new pc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var xr=class s extends we{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function _(){let y=new P,C=new P,T=0,R=(e-t)/n;for(let S=0;S<=r;S++){let M=[],b=S/r,E=b*(e-t)+t;for(let L=0;L<=i;L++){let D=L/i,U=D*l+a,H=Math.sin(U),z=Math.cos(U);C.x=E*H,C.y=-b*n+g,C.z=E*z,u.push(C.x,C.y,C.z),y.set(H,R,z).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-b),M.push(p++)}x.push(M)}for(let S=0;S<i;S++)for(let M=0;M<r;M++){let b=x[M][S],E=x[M+1][S],L=x[M+1][S+1],D=x[M][S+1];(t>0||M!==0)&&(h.push(b,E,D),T+=3),(e>0||M!==r-1)&&(h.push(E,L,D),T+=3)}c.addGroup(m,T,0),m+=T}function v(y){let C=p,T=new tt,R=new P,S=0,M=y===!0?t:e,b=y===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let E=p;for(let L=0;L<=i;L++){let U=L/i*l+a,H=Math.cos(U),z=Math.sin(U);R.x=M*z,R.y=g*b,R.z=M*H,u.push(R.x,R.y,R.z),f.push(0,b,0),T.x=H*.5+.5,T.y=z*.5*b+.5,d.push(T.x,T.y),p++}for(let L=0;L<i;L++){let D=C+L,U=E+L;y===!0?h.push(U,U+1,D):h.push(U+1,U,D),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Uo=class s extends xr{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fx={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=cf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Bx(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let p=e;p<i;p+=e)u=s[p],f=s[p+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return yr(r,o,e,a,l,d,0),o}};function cf(s,t,e,n,i){let r,o;if(i===Jx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Pu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Pu(r,s[r],s[r+1],o);return o&&qo(o,o.next)&&(_r(o),o=o.next),o}function Wi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(qo(e,e.next)||ye(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Xx(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ox(s,n,i,r):Nx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),_r(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=kx(Wi(s),t,e),yr(s,t,e,n,i,r,2)):o===2&&zx(s,t,e,n,i,r):yr(Wi(s),t,e,n,i,r,1);break}}}function Nx(s){let t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&_s(i,a,r,l,o,c,p.x,p.y)&&ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ox(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=gc(d,p,t,e,n),_=gc(x,g,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&_s(a,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&_s(a,h,l,u,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&_s(a,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kx(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!qo(i,r)&&hf(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_r(n),_r(n.next),n=s=r),n=n.next}while(n!==s);return Wi(n)}function zx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zx(o,a)){let l=uf(o,a);o=Wi(o,o.next),l=Wi(l,l.next),yr(o,t,e,n,i,r,0),yr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Bx(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=cf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Yx(c));for(i.sort(Hx),r=0;r<i.length;r++)e=Vx(i[r],e);return e}function Hx(s,t){return s.x-t.x}function Vx(s,t){let e=Gx(s,t);if(!e)return t;let n=uf(e,s);return Wi(n,n.next),Wi(e,e.next)}function Gx(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&_s(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),vr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Wx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Wx(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function Xx(s,t,e,n){let i=s;do i.z===0&&(i.z=gc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qx(i)}function qx(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function gc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Yx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _s(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Zx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$x(s,t)&&(vr(s,t)&&vr(t,s)&&Kx(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||qo(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function qo(s,t){return s.x===t.x&&s.y===t.y}function hf(s,t,e,n){let i=ao(ye(s,t,e)),r=ao(ye(s,t,n)),o=ao(ye(e,n,s)),a=ao(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&oo(s,e,t)||r===0&&oo(s,n,t)||o===0&&oo(e,s,n)||a===0&&oo(e,t,n))}function oo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ao(s){return s>0?1:s<0?-1:0}function $x(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function Kx(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function uf(s,t){let e=new xc(s.i,s.x,s.y),n=new xc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pu(s,t,e,n){let i=new xc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Fo=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Lu(t),Du(n,t);let o=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Du(n,e[l]);let a=Fx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Du(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Xi=class s extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+y,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let v=h[m][_+1],y=h[m][_],C=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&d.push(v,y,T),(m!==n-1||l<Math.PI)&&d.push(y,C,T)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ti=class s extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let x=p/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let x=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;o.push(x,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var No=class extends ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ke=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function lo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends Us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=t,a=2*e-n;break;case Uh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dh:o=t,l=2*n-e;break;case Uh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+_*o[c+C]+v*o[l+C]+y*o[u+C];return r}},vc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},_c=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case Vl:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Qx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Vl;var qi=class extends wn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=mo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends wn{};Mc.prototype.ValueTypeName="color";var bc=class extends wn{};bc.prototype.ValueTypeName="number";var Sc=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oo=class extends wn{InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends wn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=mo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends wn{};wc.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},jx=new Tc,Ec=class{constructor(t){this.manager=t!==void 0?t:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ko=class extends Fs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},nl=new xe,Uu=new P,Fu=new P,zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nu=new xe,rr=new P,il=new P,Ac=class extends zo{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),il.copy(n.position),il.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(il),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}},ei=class extends Fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Rc=class extends zo{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Os=class extends Fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bo=class extends we{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ho=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ou(){return performance.now()}var Xc="\\[\\]\\.:\\/",t1=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",e1="[^"+Xc.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",qc),i1=/(WCOD+)?/.source.replace("WCOD",e1),s1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),r1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),o1=new RegExp("^"+n1+i1+s1+r1+"$"),a1=["material","materials","bones","map"],Cc=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t1,"")}static parseTrackName(t){let e=o1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);a1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Cc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ry=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);var Yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},l1=new Ps(-1,1,1,-1,0,1),Yc=class extends we{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},c1=new Yc,Mi=class{constructor(t){this._mesh=new wt(c1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hs=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_i.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var br=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Zo=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $o=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Yo),this.copyPass.material.blending=In,this.clock=new Ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}br!==void 0&&(o instanceof br?n=!0:o instanceof Zo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sr=class extends an{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var ff={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vs=class s extends an{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Oe(r,o,{type:on});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Oe(r,o,{type:on});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ff;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Yo;this.copyUniforms=_i.clone(h.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new vi,this.fsQuad=new Mi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vs.BlurDirectionX=new tt(1,0);Vs.BlurDirectionY=new tt(0,1);var df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ko=class extends an{constructor(){super();let t=df;this.uniforms=_i.clone(t.uniforms),this.material=new No({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jo=class extends jn{constructor(){super();let t=new Sn;t.deleteAttribute("uv");let e=new ke({side:Ue}),n=new ke,i=new ei(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new wt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new wt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new wt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new wt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new wt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new wt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new wt(t,Gs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new wt(t,Gs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let p=new wt(t,Gs(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let x=new wt(t,Gs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new wt(t,Gs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new wt(t,Gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(s){let t=new vi;return t.color.setScalar(s),t}var $i=Math.PI*2;function Si(s){let t=s*2654435761>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ze(s){let t=Math.imul(s^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}var Ye=(s,t,e)=>s<t?t:s>e?e:s,jt=(s,t,e)=>s+(t-s)*e;function te(s,t,e){return e=(e-s)/(t-s),e=e<0?0:e>1?1:e,e*e*(3-2*e)}function Kc(s,t,e,n,i,r,o){n=Math.max(1,n|0),i=Math.max(1,i|0);let a=Si(r),l=new Float32Array(n*i);for(let x=0;x<l.length;x++)l[x]=a();let c=a()*t|0,h=a()*e|0,u=new Int32Array(t),f=new Int32Array(t),d=new Float32Array(t);for(let x=0;x<t;x++){let g=(x+c)%t*n/t,m=Math.floor(g),_=g-m;u[x]=m%n,f[x]=(m+1)%n,d[x]=_*_*(3-2*_)}let p=0;for(let x=0;x<e;x++){let g=(x+h)%e*i/e,m=Math.floor(g),_=g-m;_=_*_*(3-2*_);let v=m%i*n,y=(m+1)%i*n;for(let C=0;C<t;C++,p++){let T=u[C],R=f[C],S=d[C],M=l[v+T],b=l[v+R],E=l[y+T],L=l[y+R],D=M+(b-M)*S,U=E+(L-E)*S;s[p]+=o*(D+(U-D)*_)}}}function Tn(s,t,e,n,i){let r=new Float32Array(s*t);return Kc(r,s,t,e,n,i,1),r}function $t(s,t,e,n,i,r,o=.5){let a=new Float32Array(s*t),l=1;for(let c=0;c<i;c++){let h=e<<c,u=n<<c;if(h>s||u>t)break;Kc(a,s,t,h,u,r+c*131,l),l*=o}return Jc(a)}function Qo(s,t,e,n,i,r,o=.5){let a=new Float32Array(s*t),l=new Float32Array(s*t),c=1;for(let h=0;h<i;h++){let u=e<<h,f=n<<h;if(u>s||f>t)break;l.fill(0),Kc(l,s,t,u,f,r+h*71,1);for(let d=0;d<a.length;d++){let p=1-Math.abs(l[d]*2-1);a[d]+=c*p*p}c*=o}return Jc(a)}function Jc(s){let t=1/0,e=-1/0;for(let i=0;i<s.length;i++){let r=s[i];r<t&&(t=r),r>e&&(e=r)}let n=e>t?1/(e-t):0;for(let i=0;i<s.length;i++)s[i]=(s[i]-t)*n;return s}function Zi(s,t,e,n,i=.5,r=!1){let o=new Float32Array(s),a=1;for(let l=0;l<e;l++){let c=t<<l;if(c>s)break;let h=Si(n+l*17),u=new Float32Array(c);for(let f=0;f<c;f++)u[f]=h();for(let f=0;f<s;f++){let d=f*c/s,p=Math.floor(d),x=d-p;l<2&&(x=x*x*(3-2*x));let g=u[p%c]+(u[(p+1)%c]-u[p%c])*x;r&&(g=1-Math.abs(g*2-1)),o[f]+=g*a}a*=i}return Jc(o)}function Ws(s,t,e,n,i,r=1,o=null,a=null){let l=Si(i),c=e*n,h=new Float32Array(c),u=new Float32Array(c);for(let C=0;C<c;C++)h[C]=.5+(l()-.5)*r,u[C]=.5+(l()-.5)*r;let f=s*t,d=new Float32Array(f),p=new Float32Array(f),x=new Int32Array(f),g=new Float32Array(f),m=new Float32Array(f),_=e/s,v=n/t,y=0;for(let C=0;C<t;C++)for(let T=0;T<s;T++,y++){let R=(C+.5+(a?a[y]:0))*v,S=Math.floor(R),M=(T+.5+(o?o[y]:0))*_,b=Math.floor(M),E=9,L=9,D=0,U=0,H=0;for(let z=-1;z<=1;z++){let $=S+z,X=($%n+n)%n;for(let et=-1;et<=1;et++){let rt=b+et,xt=(rt%e+e)%e,Rt=X*e+xt,zt=rt+h[Rt]-M,q=$+u[Rt]-R,j=zt*zt+q*q;j<E?(L=E,E=j,D=Rt,U=-zt,H=-q):j<L&&(L=j)}}d[y]=Math.sqrt(E),p[y]=Math.sqrt(L),x[y]=D,g[y]=U,m[y]=H}return{F1:d,F2:p,ID:x,DX:g,DY:m}}function Zc(s,t,e){let n=t*2,i=e*2,r=new Float32Array(n*i);for(let o=0;o<i;o++){let a=(o-.5)/2,l=Math.floor(a),c=a-l,h=(l+e)%e*t,u=(l+1)%e*t;for(let f=0;f<n;f++){let d=(f-.5)/2,p=Math.floor(d),x=d-p,g=(p+t)%t,m=(p+1)%t,_=s[h+g]+(s[h+m]-s[h+g])*x,v=s[u+g]+(s[u+m]-s[u+g])*x;r[o*n+f]=_+(v-_)*c}}return r}function jo(s,t,e,n,i=2){let r=Float32Array.from(s),o=new Float32Array(t*e),a=1/(2*n+1);for(let l=0;l<i;l++){for(let c=0;c<e;c++){let h=c*t,u=0;for(let f=-n;f<=n;f++)u+=r[h+(f%t+t)%t];for(let f=0;f<t;f++)o[h+f]=u*a,u+=r[h+(f+n+1)%t]-r[h+((f-n)%t+t)%t]}for(let c=0;c<t;c++){let h=0;for(let u=-n;u<=n;u++)h+=o[(u%e+e)%e*t+c];for(let u=0;u<e;u++)r[u*t+c]=h*a,h+=o[(u+n+1)%e*t+c]-o[((u-n)%e+e)%e*t+c]}}return r}var _e=class{constructor(t,e){this.w=t,this.h=e;let n=this.n=t*e;this.H=new Float32Array(n),this.R=new Float32Array(n),this.G=new Float32Array(n),this.B=new Float32Array(n),this.Ro=new Float32Array(n).fill(.6),this.ER=null,this.EG=null,this.EB=null}emis(){if(!this.ER){let t=this.n;this.ER=new Float32Array(t),this.EG=new Float32Array(t),this.EB=new Float32Array(t)}return this}rect(t,e,n,i,r){let o=this.w,a=this.h;t=Math.round(t),e=Math.round(e),n=Math.round(n),i=Math.round(i);let l=n-t>=o,c=i-e>=a,h=1e6;for(let u=e;u<i;u++){let f=(u%a+a)%a,d=c?h:Math.min(u-e,i-1-u),p=f*o;for(let x=t;x<n;x++){let g=(x%o+o)%o,m=l?h:x-t,_=l?h:n-1-x;_<m&&(m=_),d<m&&(m=d),r(p+g,m,x-t,u-e)}}}panel(t,e,n,i,r,o){let a=this.H;this.rect(t,e,n,i,(l,c)=>{let h=(c+.5)/r;a[l]+=o*(h>=1?1:h)})}rib(t,e,n,i,r,o=!0){let a=this.H,l=o?n-t:i-e;this.rect(t,e,n,i,(c,h,u,f)=>{let d=((o?u:f)+.5)/l;a[c]+=r*Math.sin(d*Math.PI)})}paint(t,e,n,i,r,o=1,a=0){let l=this.R,c=this.G,h=this.B;this.rect(t,e,n,i,(u,f)=>{let d=o;a>0&&(d*=Math.min(1,(f+.5)/a)),l[u]+=(r[0]-l[u])*d,c[u]+=(r[1]-c[u])*d,h[u]+=(r[2]-h[u])*d})}tint(t,e,n,i,r){let o=this.R,a=this.G,l=this.B;this.rect(t,e,n,i,c=>{o[c]*=r[0],a[c]*=r[1],l[c]*=r[2]})}rough(t,e,n,i,r,o=1){let a=this.Ro;this.rect(t,e,n,i,l=>{a[l]+=(r-a[l])*o})}glow(t,e,n,i,r,o=0){this.emis();let a=this.ER,l=this.EG,c=this.EB;this.rect(t,e,n,i,(h,u)=>{let f=1;o>0&&(f=Math.min(1,(u+.5)/o)),a[h]=Math.max(a[h],r[0]*f),l[h]=Math.max(l[h],r[1]*f),c[h]=Math.max(c[h],r[2]*f)})}disc(t,e,n,i){let r=this.w,o=this.h,a=n*n;for(let l=Math.floor(e-n);l<=Math.ceil(e+n);l++){let c=(l%o+o)%o,h=l+.5-e;for(let u=Math.floor(t-n);u<=Math.ceil(t+n);u++){let f=u+.5-t,d=f*f+h*h;d<a&&i(c*r+(u%r+r)%r,Math.sqrt(d)/n,f,h)}}}rivet(t,e,n,i=.6,r=null){let o=this.H,a=this.R,l=this.G,c=this.B;this.disc(t,e,n+1.2,(h,u)=>{u*(n+1.2)>n&&(o[h]-=.15,a[h]*=.7,l[h]*=.7,c[h]*=.7)}),this.disc(t,e,n,(h,u)=>{o[h]+=i*Math.sqrt(1-u*u),r?(a[h]=r[0],l[h]=r[1],c[h]=r[2]):(a[h]*=1.08,l[h]*=1.08,c[h]*=1.08),this.Ro[h]=.4})}bolt(t,e,n,i=.8){let r=this.H,o=this.R,a=this.G,l=this.B,c=this.Ro;this.disc(t,e,n+1.5,(h,u,f,d)=>{let p=u*(n+1.5),x=Math.atan2(d,f),g=$i/6,m=(x%g+g)%g-g/2,_=n*Math.cos(g/2)/Math.cos(m);p<_?(r[h]+=i,o[h]*=1.1,a[h]*=1.1,l[h]*=1.08,c[h]=.38):p<n+1.5&&(r[h]+=.15,o[h]*=.75,a[h]*=.75,l[h]*=.75)})}hazard(t,e,n,i,r=32,o=null,a=.3,l=1){let c=this.w,h=this.R,u=this.G,f=this.B,d=this.Ro,p=[.86,.66,.12],x=[.09,.08,.07];this.rect(t,e,n,i,g=>{let m=g%c,_=g/c|0,v=((l>0?m+_:m-_)%r+r)%r/r,y=Math.min(Math.abs(v-0),Math.abs(v-.5),Math.abs(v-1))*r,C=v<.5?1:0,T=Math.min(1,y/.8),R=C?.5+.5*T:.5-.5*T,S=x[0]+(p[0]-x[0])*R,M=x[1]+(p[1]-x[1])*R,b=x[2]+(p[2]-x[2])*R,E=1;o&&(E=1-te(1-a,1-a+.15,o[g]));let L=o?.85+o[g]*.3:1;h[g]+=(S*L-h[g])*E,u[g]+=(M*L-u[g])*E,f[g]+=(b*L-f[g])*E,d[g]+=(.62-d[g])*E})}};function Ze(s,t,e=.15,n=1,i=1,r=.55){let{w:o,h:a,n:l,R:c,G:h,B:u,H:f,Ro:d}=s,p=$t(o,a,4,Math.max(1,Math.round(4*a/o)),5,n),x=Tn(o,a,Math.max(2,o>>5),a>>1,n+1),g=Tn(o,a,o>>1,a>>1,n+2),m=$t(o,a,3,Math.max(1,Math.round(3*a/o)),3,n+3);for(let _=0;_<l;_++){let v=1+(p[_]-.5)*e*2+(x[_]-.5)*.07*i+(g[_]-.5)*.06,y=(m[_]-.5)*.06;c[_]=t[0]*v*(1+y),h[_]=t[1]*v,u[_]=t[2]*v*(1-y),f[_]+=(p[_]-.5)*.12+(g[_]-.5)*.05+(x[_]-.5)*.03*i,d[_]=r+(p[_]-.5)*.25+(x[_]-.5)*.12*i}}function Fn(s,t=.5,e=3,n=[.16,.13,.1],i=.25){let{w:r,h:o,n:a,H:l,R:c,G:h,B:u,Ro:f}=s,d=Tn(r,o,Math.max(4,r>>2),3,e),p=Tn(r,o,Math.max(4,r>>4),3,e+5),x=new Float32Array(a);for(let g=0;g<r;g++){let m=.965+ze(g*7+e)*.03,_=0;for(let v=0;v<2*o;v++){let y=v%o,C=y*r+g,T=(y+o-1)%o*r+g,R=l[T]-l[C];R=R>.05?Math.min(1,R*2.5):0,_=Math.max(R,_*m),v>=o&&(x[C]=_)}}for(let g=0;g<a;g++){let m=te(.3,.85,d[g]),_=Math.min(1,x[g]*m*t+te(.55,.95,p[g])*i*(.5+.5*d[g]));c[g]+=(n[0]-c[g])*_*.6,h[g]+=(n[1]-h[g])*_*.6,u[g]+=(n[2]-u[g])*_*.6,f[g]+=.15*_}}function Nn(s,t,e,n=20,i=.12){let{w:r,h:o,R:a,G:l,B:c,H:h,Ro:u}=s,f=Si(e);for(let d=0;d<t;d++){let p=f()*r,x=f()*o,g=(f()-.5)*1.2+(f()<.5?0:Math.PI/2)*.3,m=n*(.3+f()),_=Math.cos(g),v=Math.sin(g);for(let y=0;y<m;y++){let C=((x|0)%o+o)%o*r+((p|0)%r+r)%r;a[C]+=i,l[C]+=i,c[C]+=i*.95,h[C]-=.04,u[C]-=.1,p+=_,x+=v}}}function Te(s,t={}){let{w:e,h:n,n:i,H:r,R:o,G:a,B:l,Ro:c}=s,h=t.aoR??4,u=t.ao??.6,f=t.edge??.25,d=jo(r,e,n,h,2),p=t.rust?$t(e,n,6,Math.max(1,Math.round(6*n/e)),5,t.seed??77):null,x=t.rustCol??[.42,.25,.13],g=t.rustCav??1;for(let m=0;m<i;m++){let _=d[m]-r[m],v=_>0?1-_*u:1-_*f;if(v=Ye(v,.25,1.35),p){let y=te(.6,.85,p[m]+Math.max(0,_)*g)*t.rust,C=.75+p[m]*.5;o[m]+=(x[0]*C-o[m])*y,a[m]+=(x[1]*C-a[m])*y,l[m]+=(x[2]*C-l[m])*y,c[m]+=y*.25}_<0?c[m]+=_*f*.6:c[m]+=_*.2,o[m]*=v,a[m]*=v,l[m]*=v}if(t.dust){let m=t.dustCol??[.6,.5,.4],_=t.dust;for(let v=0;v<n;v++){let y=(v+n-1)%n*e,C=(v+1)%n*e;for(let T=0;T<e;T++){let R=v*e+T,S=r[C+T]-r[y+T],M=Ye(S*_,0,.6);o[R]+=(m[0]-o[R])*M,a[R]+=(m[1]-a[R])*M,l[R]+=(m[2]-l[R])*M}}}}var gf=1;function xf(s,t){if(typeof document<"u"){let e=document.createElement("canvas");return e.width=s,e.height=t,e}return new OffscreenCanvas(s,t)}function ta(s,t,e){let n=xf(s,t),i=n.getContext("2d"),r=i.createImageData(s,t);return e(r.data),i.putImageData(r,0,0),n}function pf(s){let t=xf(s.width,s.height);return t.getContext("2d").drawImage(s,0,0),t}function Un(s,t,e=!0,n=e){let i=new Ds(s);return i.colorSpace=t?We:Rn,i.wrapS=e?Ln:un,i.wrapT=n?Ln:un,i.anisotropy=gf,i.generateMipmaps=!0,i.minFilter=Zn,i.magFilter=tn,i.needsUpdate=!0,i}function wr(s,t,e,n,i){return ta(s,t,r=>{for(let o=0,a=0;o<e.length;o++,a+=4)r[a]=e[o]*255,r[a+1]=n[o]*255,r[a+2]=i[o]*255,r[a+3]=255})}function yf(s,t,e,n){return ta(s,t,i=>{for(let r=0;r<t;r++){let o=(r+t-1)%t*s,a=r*s,l=(r+1)%t*s;for(let c=0;c<s;c++){let h=(c+s-1)%s,u=(c+1)%s,f=e[o+u]+2*e[a+u]+e[l+u]-(e[o+h]+2*e[a+h]+e[l+h]),d=e[l+h]+2*e[l+c]+e[l+u]-(e[o+h]+2*e[o+c]+e[o+u]),p=-f*n,x=d*n,g=1/Math.sqrt(p*p+x*x+1),m=(a+c)*4;i[m]=(p*g*.5+.5)*255,i[m+1]=(x*g*.5+.5)*255,i[m+2]=(g*.5+.5)*255,i[m+3]=255}}})}function vf(s,t,e){return ta(s,t,n=>{for(let i=0,r=0;i<e.length;i++,r+=4){let o=e[i]*255;n[r]=o,n[r+1]=o,n[r+2]=o,n[r+3]=255}})}function Ee(s,t){let{w:e,h:n}=s,i={map:Un(wr(e,n,s.R,s.G,s.B),!0),normalMap:Un(yf(e,n,s.H,t.nStr??.4),!1),roughnessMap:Un(vf(e,n,s.Ro),!1),emissiveMap:null,emissive:null,emissiveIntensity:t.ei??1,roughness:t.rough??1,metalness:t.metal??0,worldSize:t.ws,transparent:!1};return s.ER&&(i.emissiveMap=Un(wr(e,n,s.ER,s.EG,s.EB),!0),i.emissive=t.emissive??16777215),i}var _f={E:["11111","10000","10000","11110","10000","10000","11111"],X:["10001","10001","01010","00100","01010","10001","10001"],I:["11111","00100","00100","00100","00100","00100","11111"],T:["11111","00100","00100","00100","00100","00100","00100"],U:["10001","10001","10001","10001","10001","10001","01110"],A:["01110","10001","10001","11111","10001","10001","10001"],C:["01111","10000","10000","10000","10000","10000","01111"],".":["0","0","0","0","0","0","1"]," ":["00","00","00","00","00","00","00"]};function Mf(s,t){let e=0;for(let n of s)e+=(_f[n][0].length+1)*t;return e-t}function bf(s,t,e,n,i,r,o){let a=new Float32Array(s*t),l=n;for(let c of e){let h=_f[c];for(let u=0;u<7;u++)for(let f=0;f<h[u].length;f++){if(h[u][f]!=="1")continue;let d=Math.round(l+f*r),p=Math.round(l+(f+1)*r),x=Math.round(i+u*o),g=Math.round(i+(u+1)*o);for(let m=x;m<g;m++)for(let _=d;_<p;_++)_>=0&&m>=0&&_<s&&m<t&&(a[m*s+_]=1)}l+=(h[0].length+1)*r}return a}function h1(){let s=new _e(256,256);Ze(s,[.6,.56,.48],.14,11);for(let e of[0,128]){s.panel(e+3,3,e+125,93,4,1),s.panel(e+16,16,e+112,80,2,-.4),s.panel(e+19,19,e+109,77,2,.4),s.tint(e+19,19,e+109,77,[1.04,1.02,.98]);for(let[n,i]of[[e+9,9],[e+119,9],[e+9,87],[e+119,87]])s.rivet(n,i,2.5,.6)}s.paint(0,96,256,128,[.3,.29,.28],1),s.panel(0,96,256,128,1,-.2),s.panel(0,100,256,124,2,.5);let t=Tn(256,256,64,64,5);s.rect(0,96,256,128,e=>{s.R[e]*=.9+t[e]*.2,s.G[e]*=.9+t[e]*.2,s.B[e]*=.9+t[e]*.2,s.Ro[e]=.5});for(let e=0;e<8;e++){let n=16+32*e;s.panel(n-6,108,n+6,116,1,-.5),s.paint(n-6,108,n+6,116,[.06,.06,.06]);let r=e%2===0?[1,.72,.32]:[.35,.75,1];s.paint(n-5,109,n+5,115,[r[0]*.8,r[1]*.8,r[2]*.8]),s.glow(n-5,109,n+5,115,r,1.5),s.rough(n-5,109,n+5,115,.15),s.rivet(n+16,104,2,.5),s.rivet(n+16,120,2,.5)}for(let e=0;e<4;e++){let n=64*e;s.panel(n+3,131,n+61,253,4,1),s.panel(n+30,142,n+34,242,1,-.5),s.tint(n+3,131,n+61,253,e%2?[.97,.96,.95]:[1.02,1,.98]);for(let[i,r]of[[n+11,139],[n+53,139],[n+11,245],[n+53,245]])s.rivet(i,r,2.5,.6)}return Nn(s,60,21,18,.08),Fn(s,.7,13,void 0,.12),Te(s,{ao:.75,edge:.35,rust:.3,rustCav:1.3,seed:17,rustCol:[.4,.25,.15]}),Ee(s,{nStr:.5,metal:.2,ws:[128,128],ei:1.5})}function u1(){let s=new _e(256,256);Ze(s,[.38,.42,.48],.14,31);for(let t=0;t<8;t++){let e=t*32;s.panel(e+2,12,e+30,116,2,-.6),s.panel(e+2,140,e+30,244,2,-.6),s.rib(e+10,14,e+22,114,1.4),s.rib(e+10,142,e+22,242,1.4),s.tint(e+2,12,e+30,116,[.8,.82,.86]),s.tint(e+2,140,e+30,244,[.8,.82,.86]),s.tint(e+10,14,e+22,114,[1.2,1.2,1.2]),s.tint(e+10,142,e+22,242,[1.2,1.2,1.2])}for(let t of[-10,118]){s.panel(0,t+1,256,t+21,3,.9),s.tint(0,t+1,256,t+21,[1.06,1.06,1.08]);for(let e=0;e<8;e++)s.bolt(16+e*32,t+11,3.5,.6)}for(let t=0;t<4;t++){let e=64*t+32;s.paint(e-3,126,e+3,132,[.05,.05,.06]),s.paint(e-2,127,e+2,131,[.3,.8,1]),s.glow(e-2,127,e+2,131,[.25,.85,1])}return Nn(s,40,33,16,.07),Fn(s,.6,35,[.12,.12,.13]),Te(s,{ao:.8,edge:.35,rust:.25,rustCav:1,seed:37,rustCol:[.38,.25,.16]}),Ee(s,{nStr:.5,metal:.3,ws:[128,128],ei:1.5})}function f1(){let e=new _e(256,256),n=e.n,i=$t(256,256,3,3,4,47),r=$t(256,256,4,4,4,48);for(let y=0;y<n;y++)i[y]=(i[y]-.5)*60,r[y]=(r[y]-.5)*26;let o=Ws(256,256,3,7,41,.9,i,r),a=Ws(256,256,7,16,42,1,i,r),l=$t(256,256,4,4,6,43),c=Qo(256,256,4,2,6,44),h=Tn(256,256,1,18,45),u=Qo(256,256,16,16,3,51),f=Tn(256,256,128,128,46),d=$t(256,256,16,16,3,49),p=Tn(256,256,48,3,50),{H:x,R:g,G:m,B:_,Ro:v}=e;for(let y=0;y<n;y++){let C=o.F2[y]-o.F1[y],T=a.F2[y]-a.F1[y],R=o.ID[y],S=a.ID[y],M=ze(R+7),b=ze(S+99),E=-o.DY[y]*(.8+M*1.2)+o.DX[y]*(ze(R*3+1)-.5)*1.2,L=-a.DY[y]*.6+a.DX[y]*(ze(S*5+2)-.5)*.8,D=te(0,.25,C),U=te(0,.15,T);x[y]=D*(.8+M*1.4)+E*1.4*D+(L*.7+b*.4)*(.4+.6*U)+c[y]*1.1+u[y]*.35+(l[y]-.5)*.9+(h[y]-.5)*.6+(d[y]-.5)*.5+(f[y]-.5)*.16;let H=.74+l[y]*.3+M*.18+b*.1+(h[y]-.5)*.3+(d[y]-.5)*.15+(f[y]-.5)*.12-te(.6,.95,p[y])*.12,z=.72+.28*D,$=Ye((d[y]-.45)*1.5+(b-.5)*.3,0,.5);g[y]=jt(.5,.44,$)*H*z,m[y]=jt(.37,.4,$)*H*z,_[y]=jt(.26,.35,$)*H*z,v[y]=.86+(f[y]-.5)*.15}return Te(e,{ao:.35,aoR:5,edge:.18,dust:1,dustCol:[.6,.48,.36]}),Ee(e,{nStr:.7,metal:0,ws:[128,128]})}function d1(){let e=new _e(256,256),n=e.n,i=Si(51),r=4,o=256/r,a=[],l=[];for(let _=0;_<r;_++){let v=[],y=0;for(;y<256;){let M=[64,80,96,112,128][i()*5|0];256-y-M<48&&(M=256-y),v.push(M),y+=M}let C=i()*256|0,T=new Int16Array(256),R=new Float32Array(256),S=0;for(let M=0;M<v.length;M++){for(let b=0;b<v[M];b++){let E=(S+b+C)%256;T[E]=M,R[E]=Math.min(b,v[M]-1-b)}S+=v[M]}a.push(T),l.push(R)}let c=$t(256,256,16,16,3,52),h=$t(256,256,4,4,6,53),u=Tn(256,256,128,128,54),f=$t(256,256,6,6,5,55),{H:d,R:p,G:x,B:g,Ro:m}=e;for(let _=0;_<256;_++){let v=_/o|0,y=_-v*o,C=Math.min(y,o-1-y);for(let T=0;T<256;T++){let R=_*256+T,S=v*32+a[v][T],M=Math.min(C,l[v][T])+(c[R]-.5)*10,b=te(.5,7,M),E=ze(S*3+1),L=ze(S*5+2);d[R]=b*(1+E*.4)+(h[R]-.5)*.9*b+(u[R]-.5)*.15;let D=(.82+E*.3)*(.85+h[R]*.3)+(u[R]-.5)*.08,U=.42*D,H=.47*D,z=.4*D;H*=1+(L-.5)*.08,z*=1-(L-.5)*.06;let $=1-te(0,2,M);U=jt(U,.17,$),H=jt(H,.19,$),z=jt(z,.16,$);let X=te(.55,.85,f[R]+(1-te(0,10,M))*.35)*.65;U=jt(U,.22,X),H=jt(H,.33,X),z=jt(z,.14,X),p[R]=U,x[R]=H,g[R]=z,m[R]=.85-b*.1+X*.1}}return Te(e,{ao:.5,aoR:4,edge:.2}),Ee(e,{nStr:.55,metal:0,ws:[128,128]})}function p1(){let e=new _e(128,256);Ze(e,[.5,.46,.4],.15,61,.5),e.panel(0,0,18,256,1,-.8),e.panel(110,0,128,256,1,-.8),e.tint(0,0,18,256,[.55,.53,.52]),e.tint(110,0,128,256,[.55,.53,.52]),e.rib(4,0,12,256,.5),e.rib(116,0,124,256,.5),e.panel(18,0,110,256,4,1),e.panel(56,0,72,256,2,.35),e.tint(56,0,72,256,[1.05,1.04,1.02]);for(let n=24;n<256&&!(n>232);n+=32)e.bolt(32,n,4,.7),e.bolt(96,n,4,.7);e.panel(0,-16,128,16,3,1.6),e.paint(0,-16,128,16,[.36,.34,.32],.85),e.panel(0,-3,128,3,1,-.4);for(let n of[16,64,112])e.bolt(n,-9,4,.7),e.bolt(n,9,4,.7);return Nn(e,30,63,14,.07),Fn(e,.8,65),Te(e,{ao:.8,edge:.35,rust:.5,rustCav:1.4,seed:67,rustCol:[.4,.24,.13]}),Ee(e,{nStr:.5,metal:.3,ws:[64,128]})}function m1(){let e=new _e(256,256);Ze(e,[.54,.52,.48],.14,71);let n=$t(256,256,8,8,5,72),i=[[6,84],[88,140],[144,216]];for(let[h,u]of i)e.panel(4,h,125,u,4,1),e.panel(131,h,252,u,4,1);e.panel(126,0,130,256,1,-.8),e.paint(126,0,130,256,[.08,.08,.08],.9);for(let h of[4,131])for(let u of[24,44,64])e.rib(h+10,u,h+111,u+6,.5,!1);for(let[h,u]of i)for(let f of[4,131])for(let d=f+10;d<f+120;d+=25)e.rivet(d,h+5,2.4,.6),e.rivet(d,u-5,2.4,.6);e.panel(80,94,176,134,3,.8),e.paint(80,94,176,134,[.22,.24,.27],1,2),e.rough(80,94,176,134,.4);let r="U.A.C.",o=3,a=Mf(r,o),l=bf(256,256,r,Math.round(128-a/2),103,o,3),c=jo(l,256,256,1,1);for(let h=0;h<e.n;h++)if(c[h]>0){let u=c[h];e.H[h]+=u*.5,e.R[h]=jt(e.R[h],.82,u),e.G[h]=jt(e.G[h],.78,u),e.B[h]=jt(e.B[h],.66,u)}for(let[h,u]of[[85,99],[171,99],[85,129],[171,129]])e.rivet(h,u,1.8,.4);return e.panel(4,222,252,252,2,.7),e.hazard(4,222,252,252,32,n,.25),e.panel(0,252,256,256,1,-.5),Nn(e,70,73,20,.08),Fn(e,.6,75),Te(e,{ao:.75,edge:.35,rust:.4,rustCav:1.2,seed:77}),Ee(e,{nStr:.5,metal:.3,ws:[128,128]})}function g1(){let e=new _e(32,256);Ze(e,[.28,.27,.26],.15,81,.3);let n=$t(32,256,2,16,4,82);e.panel(0,0,32,256,1,-.3),e.rib(5,0,12,256,1.2),e.rib(20,0,27,256,1.2),e.tint(5,0,12,256,[1.6,1.55,1.5]),e.tint(20,0,27,256,[1.6,1.55,1.5]),e.rough(5,0,12,256,.35,.7),e.rough(20,0,27,256,.35,.7);for(let i=0;i<256;i+=64)e.panel(0,i+4,32,i+22,1,.3),e.hazard(0,i+4,32,i+22,16,n,.3),e.bolt(16,i+40,3,.6);return Fn(e,.5,85),Te(e,{ao:.7,edge:.4,rust:.4,seed:87}),Ee(e,{nStr:.5,metal:.35,ws:[16,128]})}function x1(){let e=new _e(256,256);Ze(e,[.52,.51,.49],.1,91,.6,.5),e.emis(),e.panel(4,4,252,252,3,.6);let n=[{x0:18,y0:22,x1:120,y1:84,kind:"text",col:[.35,1,.45]},{x0:136,y0:22,x1:238,y1:84,kind:"bars",col:[.35,.75,1]},{x0:26,y0:136,x1:230,y1:196,kind:"graph",col:[.55,1,.35]}];for(let S of n)e.panel(S.x0-7,S.y0-7,S.x1+7,S.y1+7,3,.8),e.tint(S.x0-7,S.y0-7,S.x1+7,S.y1+7,[.62,.62,.64]),e.panel(S.x0,S.y0,S.x1,S.y1,2,-1.2),e.paint(S.x0,S.y0,S.x1,S.y1,[.035,.05,.05],1),e.rough(S.x0,S.y0,S.x1,S.y1,.1),e.glow(S.x0,S.y0,S.x1,S.y1,[S.col[0]*.05,S.col[1]*.05,S.col[2]*.05]),e.rivet(S.x0-3,S.y0-3,1.5,.3),e.rivet(S.x1+3,S.y0-3,1.5,.3),e.rivet(S.x0-3,S.y1+3,1.5,.3),e.rivet(S.x1+3,S.y1+3,1.5,.3);e.panel(14,96,242,124,2,-.4),e.paint(14,96,242,124,[.16,.16,.17],1,2);let i=[],r=Si(92),o=[[1,.15,.08],[.2,1,.25],[1,.7,.1],[.3,.7,1]];for(let S=0;S<2;S++)for(let M=0;M<18;M++){let b=22+M*12.4,E=101+S*12,L=o[r()*4|0];i.push({x:Math.round(b),y:E,c:L,on:r()<.6,rate:.05+r()*.3}),e.panel(Math.round(b),E,Math.round(b)+7,E+6,1,.3)}for(let S=210;S<246;S+=6)e.panel(22,S,118,S+3,1,-.7),e.paint(22,S,118,S+3,[.08,.08,.08],.8);for(let S=0;S<3;S++)for(let M=0;M<6;M++){let b=138+M*16,E=208+S*13,L=ze(M*7+S*13)<.3?[.65,.2,.15]:ze(M+S*5)<.4?[.7,.6,.25]:[.3,.3,.32];e.panel(b,E,b+12,E+9,2,.6),e.paint(b+1,E+1,b+11,E+8,L,.9,1.5)}Nn(e,30,93,14,.06),Fn(e,.35,95,[.2,.18,.16],.12),Te(e,{ao:.7,edge:.3,rust:.12,seed:97});let a=Ee(e,{nStr:.45,metal:.25,ws:[128,128],ei:1.6}),l=a.map.image,c=a.emissiveMap.image,h=pf(l),u=pf(c),f=l.getContext("2d"),d=c.getContext("2d"),p=Si(99),x=[],g=()=>{let S=[],M=0,b=p()<.3?6:0;M+=b;let E=90*(.3+p()*.7);for(;M<E;){let L=2+(p()*7|0)*2;S.push([M,L]),M+=L+3}return S};for(let S=0;S<12;S++)x.push(g());let m=new Float32Array(12).map(()=>p()),_=new Float32Array(12).map(()=>p()),v=0,y=(S,M)=>`rgb(${S[0]*M*255|0},${S[1]*M*255|0},${S[2]*M*255|0})`;function C(S,M,b){for(let E of n){let L=E.x1-E.x0,D=E.y1-E.y0;if(S.drawImage(M,E.x0,E.y0,L,D,E.x0,E.y0,L,D),S.save(),S.beginPath(),S.rect(E.x0+1,E.y0+1,L-2,D-2),S.clip(),E.kind==="text"){S.fillStyle=y(E.col,b);for(let U=0;U<x.length;U++){let H=E.y0+4+U*5;for(let[z,$]of x[U])S.fillRect(E.x0+4+z,H,$,3)}v&2&&S.fillRect(E.x0+4,E.y0+4+11*5,4,3)}else if(E.kind==="bars"){S.fillStyle=y(E.col,b*.25);for(let U=E.y0+8;U<E.y1;U+=10)S.fillRect(E.x0+2,U,L-4,1);for(let U=0;U<12;U++){let H=6+m[U]*(D-16),z=E.x0+5+U*8;S.fillStyle=y(U%4===3?[1,.6,.2]:E.col,b),S.fillRect(z,E.y1-4-H,6,H)}}else{S.fillStyle=y(E.col,b*.22);for(let H=E.x0+6;H<E.x1;H+=17)S.fillRect(H,E.y0+2,1,D-4);for(let H=E.y0+6;H<E.y1;H+=12)S.fillRect(E.x0+2,H,L-4,1);S.lineWidth=1.5;let U=v*.35;for(let H=0;H<2;H++){S.strokeStyle=y(H?[1,.75,.2]:E.col,b),S.beginPath();for(let z=0;z<=L;z+=2){let $=z/L,X=H?.5+.3*Math.sin($*9+U*1.7)*Math.sin($*2.3-U*.4):.5+.22*Math.sin($*23-U*3)+.12*Math.sin($*61+U*5)+(ze((z>>1)*31+v)-.5)*.08,et=E.y0+4+(1-X)*(D-8);z===0?S.moveTo(E.x0+z,et):S.lineTo(E.x0+z,et)}S.stroke()}}S.fillStyle="rgba(0,0,0,0.25)";for(let U=E.y0;U<E.y1;U+=2)S.fillRect(E.x0,U,L,1);S.restore()}for(let E of i)S.fillStyle=E.on?y(E.c,b):y(E.c,S===d?.03:.25),S.fillRect(E.x+1,E.y+1,5,4)}function T(){v++,v%2===0&&(x.shift(),x.push(g()));for(let S=0;S<12;S++)p()<.25&&(_[S]=p()),m[S]+=(_[S]-m[S])*.4;for(let S of i)p()<S.rate&&(S.on=!S.on);C(f,h,.75),C(d,u,1),a.map.needsUpdate=!0,a.emissiveMap.needsUpdate=!0}T();let R=-1;return a._update=S=>{let M=Math.floor(S*8);M!==R&&(R=M,T())},a}function y1(){let e=new _e(128,32);Ze(e,[.34,.32,.3],.15,101,.8);let n=$t(128,32,8,2,4,102);e.panel(0,0,128,5,1,.8),e.tint(0,0,128,5,[1.5,1.45,1.4]),e.rough(0,0,128,5,.35,.7),e.panel(0,8,128,14,1,.3),e.hazard(0,8,128,14,16,n,.35),e.panel(0,20,128,26,1,-.5),e.paint(0,20,128,26,[.08,.08,.09]);for(let i=0;i<128;i+=8)e.paint(i+1,21,i+6,25,[.6,.85,1]),e.glow(i+1,21,i+6,25,[.35,.65,1],1);for(let i=16;i<128;i+=32)e.rivet(i,29,1.8,.4);return Fn(e,.4,105),Te(e,{ao:.6,aoR:2,edge:.4,rust:.3,seed:107}),Ee(e,{nStr:.45,metal:.3,ws:[64,16],ei:1.3})}function v1(){let e=new _e(128,128);Ze(e,[.44,.42,.39],.15,111);let n=$t(128,128,8,8,5,112);e.panel(2,2,126,126,3,.8),e.panel(12,12,116,116,2,-.4),e.hazard(12,12,116,116,32,n,.3);for(let[i,r]of[[7,7],[121,7],[7,121],[121,121],[64,7],[64,121],[7,64],[121,64]])e.bolt(i,r,3,.6);return Nn(e,40,113,14,.08),Fn(e,.5,115),Te(e,{ao:.7,edge:.35,rust:.35,seed:117}),Ee(e,{nStr:.45,metal:.25,ws:[64,64]})}function mf(s){let n=new _e(128,256);Ze(n,[.5,.48,.45],.14,121);let i=$t(128,256,4,8,4,122);n.panel(3,3,125,253,3,.8),n.panel(3,40,125,43,1,-.6),n.panel(3,212,125,215,1,-.6);for(let[a,l]of[[12,12],[116,12],[12,244],[116,244]])n.bolt(a,l,3.5,.6);n.panel(30,60,98,196,4,1.4),n.tint(30,60,98,196,[.6,.61,.66]),n.panel(36,66,92,190,2,-.3);let r=s?[.25,1,.3]:[1,.12,.06];n.disc(64,80,8,(a,l)=>{n.H[a]-=.4*(1-l),n.R[a]=.08,n.G[a]=.08,n.B[a]=.08}),n.emis(),n.disc(64,80,6,(a,l)=>{let c=1-l*l*.5;n.H[a]+=.5*Math.sqrt(1-l*l),n.R[a]=r[0]*.85,n.G[a]=r[1]*.85,n.B[a]=r[2]*.85,n.Ro[a]=.12,n.ER[a]=r[0]*c,n.EG[a]=r[1]*c,n.EB[a]=r[2]*c}),n.panel(58,98,70,178,2,-1.2),n.paint(58,98,70,178,[.04,.04,.04],1,1.5);let o=s?102:160;return n.panel(42,o,86,o+14,3,2.2),n.paint(42,o,86,o+14,[.66,.64,.6],1),n.rough(42,o,86,o+14,.3),n.panel(46,o+3,82,o+11,2,.3),n.paint(46,o+3,82,o+11,s?[.2,.55,.22]:[.65,.12,.08],1,1),n.panel(36,222,92,236,1,.4),n.hazard(36,222,92,236,16,i,.25),Nn(n,30,123,12,.07),Fn(n,.5,125),Te(n,{ao:.75,edge:.35,rust:.3,seed:127}),Ee(n,{nStr:.5,metal:.25,ws:[64,128],ei:2})}function _1(){let e=new _e(128,64);Ze(e,[.28,.28,.29],.1,131,.3),e.panel(1,1,127,63,2,.8),e.panel(6,6,122,58,2,-.8),e.paint(6,6,122,58,[.06,.04,.04],1,2),e.rough(6,6,122,58,.15);let n="EXIT",i=5,r=5,o=Mf(n,i),a=bf(128,64,n,Math.round(64-o/2),32-Math.round(3.5*r),i,r),l=jo(a,128,64,1,1),c=jo(a,128,64,4,3);e.emis();for(let h=0;h<e.n;h++){let u=l[h],f=c[h];e.H[h]+=u*.4,e.R[h]=jt(e.R[h]+f*.15,.95,u),e.G[h]=jt(e.G[h],.18,u),e.B[h]=jt(e.B[h],.12,u),e.ER[h]=Math.min(1,u*1+f*.35),e.EG[h]=u*.12+f*.02,e.EB[h]=u*.06+f*.01}for(let[h,u]of[[4,4],[124,4],[4,60],[124,60]])e.rivet(h,u,1.6,.3);return Te(e,{ao:.6,aoR:2,edge:.3}),Ee(e,{nStr:.4,metal:.2,ws:[64,32],ei:2.5})}function M1(){let e=new _e(64,256);Ze(e,[.5,.5,.52],.1,141,.6),e.panel(0,0,12,256,2,.9),e.panel(52,0,64,256,2,.9),e.panel(12,0,52,256,1,-.3),e.emis(),e.rect(14,0,50,256,(n,i,r)=>{let o=(r+.5)/36,a=1-Math.pow(Math.abs(o-.5)*2,3)*.35;e.R[n]=.82*a,e.G[n]=.9*a,e.B[n]=1*a,e.Ro[n]=.2,e.ER[n]=.78*a,e.EG[n]=.9*a,e.EB[n]=1*a,e.H[n]+=.2*Math.sin(o*Math.PI)});for(let n=0;n<256;n+=64)e.panel(12,n-2,52,n+2,1,.6),e.paint(12,n-2,52,n+2,[.25,.25,.27]),e.rect(12,n-2,52,n+2,i=>{e.ER[i]=.02,e.EG[i]=.02,e.EB[i]=.03}),e.bolt(6,n+32,3,.5),e.bolt(58,n+32,3,.5);return Te(e,{ao:.5,aoR:2,edge:.3}),Ee(e,{nStr:.4,metal:.2,ws:[32,128],ei:2.5})}function b1(){let e=new _e(256,256);Ze(e,[.47,.44,.4],.14,151,.4);let{H:n,R:i,G:r,B:o,Ro:a}=e,l=new Float32Array(e.n);for(let c=0;c<2;c++)for(let h=0;h<2;h++){let u=h*128,f=c*128,d=h+c&1;e.panel(u+2,f+2,u+126,f+126,2,.7),e.tint(u+2,f+2,u+126,f+126,d?[.9,.9,.92]:[1.03,1,.96]),e.rect(u+6,f+6,u+122,f+122,p=>{l[p]=d?2:1});for(let[p,x]of[[u+8,f+8],[u+120,f+8],[u+8,f+120],[u+120,f+120]])e.rivet(p,x,2.5,.5)}for(let c=0;c<256;c++)for(let h=0;h<256;h++){let u=c*256+h;if(!l[u])continue;let f=h%16-7.5,d=c%16-7.5,p=(h>>4)+(c>>4)&1^(l[u]===2?1:0),x=(f+d)*.7071,g=(f-d)*.7071;if(p){let _=x;x=g,g=_}let m=x*x/38+g*g/3.2;if(m<1){let _=Math.sqrt(1-m);n[u]+=_*.55,i[u]*=1+_*.12,r[u]*=1+_*.12,o[u]*=1+_*.1,a[u]-=_*.15}}return Nn(e,80,153,22,.07),Te(e,{ao:.8,aoR:3,edge:.5,rust:.15,rustCav:1,seed:157,rustCol:[.38,.25,.15]}),Ee(e,{nStr:.55,metal:.3,ws:[64,64]})}function S1(){let e=new _e(256,256),{H:n,R:i,G:r,B:o,Ro:a}=e,l=$t(256,256,4,4,6,161),c=Tn(256,256,128,128,162),h=$t(256,256,16,16,3,163);for(let u=0;u<e.n;u++){let f=.85+l[u]*.25+(h[u]-.5)*.12+(c[u]-.5)*.06;i[u]=.55*f,r[u]=.44*f,o[u]=.31*f,a[u]=.75+(l[u]-.5)*.2,n[u]=(l[u]-.5)*.2+(c[u]-.5)*.06+(h[u]-.5)*.1}for(let u=0;u<4;u++)for(let f=0;f<4;f++){let d=f*64,p=u*64,x=ze(f*5+u*17+3);e.panel(d+1,p+1,d+63,p+63,2,.6),e.tint(d+1,p+1,d+63,p+63,[.92+x*.14,.92+x*.13,.92+x*.1]),e.panel(d+6,p+6,d+58,p+58,3,.12)}return Nn(e,50,165,16,.05),Te(e,{ao:.9,aoR:3,edge:.3}),Ee(e,{nStr:.4,metal:0,ws:[64,64]})}function w1(){let e=new _e(256,256);Ze(e,[.34,.38,.44],.12,171,.4,.45);let{H:n,R:i,G:r,B:o,Ro:a}=e,l=$t(256,256,8,8,3,172);for(let c=0;c<256;c++)for(let h=0;h<256;h++){let u=c*256+h,f=Math.min(h%64,64-h%64),d=Math.min(c%64,64-c%64),p=Math.min(f,d)<4,x=h%16,g=c%16,m=Math.min(x,16-x),_=Math.min(g,16-g);if(Math.min(m,_)<2.5||p){let y=p?4-Math.min(f,d):2.5-Math.min(m,_);n[u]+=Math.min(1,y/1.5)*(p?1.2:.8),p&&(i[u]*=1.1,r[u]*=1.1,o[u]*=1.1)}else{n[u]=-2.2;let y=.1+l[u]*.08;i[u]*=y,r[u]*=y,o[u]*=y*1.1,a[u]=.9}}for(let c=0;c<256;c+=64)for(let h=0;h<256;h+=64)e.bolt(h,c,2.6,.4);return Te(e,{ao:.5,aoR:2,edge:.5,rust:.2,seed:177,rustCol:[.35,.25,.18]}),Ee(e,{nStr:.45,metal:.4,ws:[64,64]})}function T1(){let e=new _e(256,256);Ze(e,[.5,.47,.42],.15,181,.3,.7);for(let n=0;n<4;n++)for(let i=0;i<4;i++){let r=i*64,o=n*64,a=ze(i*11+n*3+1);if(e.panel(r+2,o+2,r+62,o+62,3,.7),e.tint(r+2,o+2,r+62,o+62,[.93+a*.12,.93+a*.11,.93+a*.1]),i+n&1){e.panel(r+14,o+14,r+50,o+50,2,-.35);for(let l=0;l<4;l++)for(let c=0;c<4;c++)e.disc(r+20+c*8,o+20+l*8,2,(h,u)=>{e.H[h]-=.5*(1-u),e.R[h]*=.3,e.G[h]*=.3,e.B[h]*=.3})}else e.panel(r+10,o+10,r+54,o+54,2,.25)}for(let n=0;n<256;n+=64)for(let i=0;i<256;i+=64)e.rivet(i,n,3,.5);return Fn(e,.2,185,[.2,.18,.15],.1),Te(e,{ao:.8,aoR:3,edge:.3,rust:.2,seed:187}),Ee(e,{nStr:.45,metal:.15,ws:[64,64]})}function E1(){let e=new _e(256,256);Ze(e,[.5,.49,.47],.12,191,.5,.5),e.emis(),e.panel(4,4,252,252,4,.8),e.panel(34,34,222,222,3,-.9),e.tint(34,34,222,222,[.5,.5,.52]),e.rect(44,44,212,212,(n,i,r,o)=>{let a=(r+.5)/168-.5,l=(o+.5)/168-.5,c=1-(a*a+l*l)*.5,h=r%21,u=o%21,f=h<1.5||u<1.5?.82:1;e.R[n]=.92*c*f,e.G[n]=.93*c*f,e.B[n]=.9*c*f,e.Ro[n]=.25,e.ER[n]=1*c*f,e.EG[n]=.97*c*f,e.EB[n]=.9*c*f,e.H[n]=.2+(f<1?.15:0)});for(let[n,i]of[[18,18],[238,18],[18,238],[238,238],[128,18],[128,238],[18,128],[238,128]])e.bolt(n,i,4,.6);return Te(e,{ao:.6,aoR:3,edge:.3}),Ee(e,{nStr:.4,metal:.25,ws:[64,64],ei:2.2})}function A1(){let i=$t(128,128,4,4,5,201),r=$t(128,128,6,6,5,202),o=$t(128,128,3,3,4,203),a=Ws(128,128,8,8,204),l=[],c=[];for(let T=0;T<16;T++){let R=T/16*$i;l.push([Math.round(Math.cos(R)*9),Math.round(Math.sin(R)*9)]),c.push([Math.round(-Math.sin(R)*13),Math.round(Math.cos(R)*13)])}let h=new _e(128,128);for(let T=0;T<16384;T++)h.H[T]=i[T]*1.2+r[T]*.6+Math.max(0,.35-a.F1[T])*2,h.Ro[T]=.08+o[T]*.12;let u=[],f=[],d=new Float32Array(100),p=new Float32Array(16384),x=new Float32Array(16384),g=new Float32Array(16384),m=new Float32Array(16384),_=new Float32Array(16384),v=new Float32Array(16384);for(let T=0;T<16;T++){let[R,S]=l[T],[M,b]=c[T],E=T/16*$i;for(let L=0;L<d.length;L++)d[L]=.12+.22*Math.max(0,Math.sin(E+ze(L*13+5)*$i))*(ze(L+77)<.6?1:0);for(let L=0;L<128;L++){let D=((L+S)%128+128)%128*128,U=((L+b)%128+128)%128*128;for(let H=0;H<128;H++){let z=L*128+H,$=i[D+((H+R)%128+128)%128],X=r[U+((H+M)%128+128)%128],et=$*.6+X*.4+(o[z]-.5)*.3,rt=d[a.ID[z]],xt=a.F1[z],Rt=rt>.13?te(rt,rt-.06,xt):0,zt=rt>.13?Math.max(0,1-Math.abs(xt-rt+.02)*18):0;et=Ye(et,0,1);let q=te(.55,.9,et),j=.05+.4*q,dt=.18+.8*et,st=.02+.14*q;j+=Rt*.25+zt*.4,dt+=Rt*.2+zt*.3,st+=zt*.25,p[z]=j,x[z]=dt,g[z]=st;let St=.35+.65*et;m[z]=j*St*.8,_[z]=dt*St*.9,v[z]=st*St*.6}}u.push(wr(128,128,p,x,g)),f.push(wr(128,128,m,_,v))}let y={map:Un(u[0],!0),normalMap:Un(yf(128,128,h.H,.35),!1),roughnessMap:Un(vf(128,128,h.Ro),!1),emissiveMap:Un(f[0],!0),emissive:16777215,emissiveIntensity:.6,roughness:1,metalness:0,worldSize:[64,64],transparent:!1},C=0;return y._update=T=>{let R=Math.floor(T*8)%16;R!==C&&(C=R,y.map.image=u[R],y.emissiveMap.image=f[R],y.map.needsUpdate=!0,y.emissiveMap.needsUpdate=!0);let S=T*.012%1,M=T*.025%1;y.map.offset.set(S,M),y.emissiveMap.offset.set(S,M),y.roughnessMap.offset.set(S,M),y.normalMap.offset.set(-T*.018%1,T*.011%1)},y}function R1(){let e=new _e(256,256),n=e.n,{H:i,R:r,G:o,B:a,Ro:l}=e,c=$t(256,256,4,4,6,211),h=Tn(256,256,128,128,212),u=$t(256,256,12,12,4,213),f=Ws(256,256,20,20,214),d=Ws(256,256,6,6,215),p=Ws(256,256,9,9,216);for(let x=0;x<n;x++){let g=ze(f.ID[x]+3),m=.22+g*.22,_=f.F1[x]<m&&g>.45?Math.pow(1-(f.F1[x]/m)**2,.7):0,v=ze(d.ID[x]+9),y=.2+v*.25,C=d.F1[x]<y&&v>.45?Math.pow(1-(d.F1[x]/y)**2,.6):0,T=(1-te(0,.05,p.F2[x]-p.F1[x]))*te(.45,.7,u[x]);i[x]=(c[x]-.5)*1.2+(u[x]-.5)*.4+(h[x]-.5)*.25+_*.5+C*(1.2+(u[x]-.5)*.8)-T*.5*(1-C);let R=.8+c[x]*.3+(h[x]-.5)*.15+(u[x]-.5)*.15,S=.44*R,M=.37*R,b=.29*R;if(_>0){let E=.75+ze(f.ID[x]+50)*.4;S=jt(S,.44*E,.6),M=jt(M,.4*E,.6),b=jt(b,.35*E,.6)}if(C>0){let E=.7+v*.3+(h[x]-.5)*.2+(u[x]-.5)*.3;S=jt(S,.45*E,.85),M=jt(M,.41*E,.85),b=jt(b,.36*E,.85)}S*=1-T*.4,M*=1-T*.4,b*=1-T*.4,r[x]=S,o[x]=M,a[x]=b,l[x]=.9-_*.1-C*.1}return Te(e,{ao:.45,aoR:3,edge:.2}),Ee(e,{nStr:.6,metal:0,ws:[64,64]})}function C1(){let e=new _e(256,256);Ze(e,[.45,.43,.4],.16,221,1);let n=$t(256,256,8,8,5,222);for(let r=44;r<252;r+=12)e.panel(8,r,248,r+4,1,-.5);e.panel(0,0,256,34,2,.6),e.hazard(0,2,256,32,32,n,.4),e.panel(0,34,256,37,1,-.6);let i=$t(256,256,2,2,4,223);for(let r=0;r<e.n;r++){let o=te(.4,.9,i[r])*.15;e.R[r]+=o,e.G[r]+=o,e.B[r]+=o*.95,e.Ro[r]-=o}for(let r=32;r<256;r+=64)e.bolt(r,248,3,.5);return Nn(e,120,225,24,.08),Te(e,{ao:.7,aoR:3,edge:.5,rust:.3,seed:227}),Ee(e,{nStr:.5,metal:.3,ws:[64,64]})}function I1(){let r=Zc($t(1024,256,6,3,7,301),1024,256),o=Zc($t(1024,256,16,6,5,302),1024,256),a=Zc($t(1024,256,4,8,6,303),1024,256),l=256,c=Qo(2048,l,32,4,3,304),h=Zi(2048,5,8,311,.55,!0),u=Zi(2048,7,8,312,.55,!0),f=Zi(2048,9,8,313,.5,!0),d=new Float32Array(1048576),p=new Float32Array(1048576),x=new Float32Array(1048576),g=[[0,[.018,.014,.022]],[.3,[.05,.028,.034]],[.5,[.16,.06,.045]],[.64,[.52,.21,.07]],[.72,[.62,.3,.1]],[1,[.3,.13,.06]]],m=new Float32Array(512*3);for(let y=0;y<512;y++){let C=y/511,T=0;for(;T<g.length-2&&C>g[T+1][0];)T++;let[R,S]=g[T],[M,b]=g[T+1],E=te(0,1,(C-R)/(M-R));for(let L=0;L<3;L++)m[y*3+L]=jt(S[L],b[L],E)}let _=[{m:h,base:.765,amp:.15,col:[.24,.13,.09],haze:.55},{m:u,base:.845,amp:.15,col:[.13,.08,.06],haze:.3},{m:f,base:.935,amp:.13,col:[.065,.048,.042],haze:.1}];for(let y of _){y.top=new Float32Array(2048);for(let C=0;C<2048;C++)y.top[C]=(y.base-y.amp*Math.pow(y.m[C],1.4))*512}for(let y=0;y<512;y++){let C=y/512,T=te(0,.3,C)*(1-te(.6,.72,C))*.75+.25,R=(y+512-1)%512*2048,S=(y+1)%512*2048;for(let M=0;M<2048;M++){let b=y*2048+M,E=m[y*3],L=m[y*3+1],D=m[y*3+2],U=r[b]*.65+o[b]*.35+(a[b]-.5)*.25,H=te(.38,.75,U)*T,z=te(.18,.66,C),$=r[S+M]-r[R+M],X=Ye(.55-$*25,0,1),et=jt(.075,.7,z)*(.55+.6*X),rt=jt(.05,.28,z)*(.55+.6*X),xt=jt(.07,.1,z)*(.6+.5*X);E=jt(E,et,H*.92),L=jt(L,rt,H*.92),D=jt(D,xt,H*.92);let Rt=te(.6,.85,a[b])*(1-te(.35,.6,C))*.3;E+=Rt*.09,L+=Rt*.045,D+=Rt*.06;for(let zt=0;zt<3;zt++){let q=_[zt],j=q.top[M];if(y>=j){let dt=y-j,st=(y-l)*2048,St=c[st+M],Pt=(c[st+(M+1)%2048]-c[st+(M+2048-1)%2048])*18+(q.m[(M+2)%2048]-q.m[(M+2048-2)%2048])*3*Math.exp(-dt/25),Ut=Ye(.7+St*.45+Pt,.35,1.6)*(1-te(0,120,dt)*.35),ae=q.col[0]*Ut,Vt=q.col[1]*Ut,he=q.col[2]*Ut,N=Math.max(0,1-dt/2.5)*(.45-zt*.12);ae+=N*.55,Vt+=N*.22,he+=N*.06;let Be=q.haze*(.4+.6*te(0,70,dt));ae=jt(ae,.4,Be*.5),Vt=jt(Vt,.17,Be*.5),he=jt(he,.07,Be*.5),E=ae,L=Vt,D=he}}d[b]=E,p[b]=L,x[b]=D}}return{map:Un(wr(2048,512,d,p,x),!0,!0,!1),normalMap:null,roughnessMap:null,emissiveMap:null,emissive:null,emissiveIntensity:1,roughness:1,metalness:0,worldSize:[1,1],transparent:!1}}function bi(s,t){let e=ta(s,s,i=>{let r=[0,0,0,0];for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(a+.5)/s*2-1,c=(o+.5)/s*2-1,h=Math.sqrt(l*l+c*c),u=Math.atan2(c,l);r[0]=r[1]=r[2]=1,r[3]=0,t(r,l,c,h,u,o*s+a);let f=(o*s+a)*4;i[f]=r[0]*255,i[f+1]=r[1]*255,i[f+2]=r[2]*255,i[f+3]=Ye(r[3],0,1)*255}});return{map:Un(e,!0,!1),normalMap:null,roughnessMap:null,emissiveMap:null,emissive:null,emissiveIntensity:1,roughness:1,metalness:0,worldSize:[1,1],transparent:!0}}function $c(s,t){let e=t.length,n=(s/$i+1)%1*e,i=Math.floor(n),r=n-i;return jt(t[i%e],t[(i+1)%e],r)}function P1(){let s={};s.FLARE=bi(128,(d,p,x,g)=>{let m=Math.pow(Math.max(0,1-g),2.4)*.85+Math.exp(-g*g*40)*.6;d[3]=m,d[0]=1,d[1]=1,d[2]=1});let t=$t(128,128,4,4,5,401),e=$t(128,128,8,8,4,402);s.SMOKE=bi(128,(d,p,x,g,m,_)=>{let v=Math.pow(Math.max(0,1-g*(.9+(e[_]-.5)*.5)),1.5),y=Ye((t[_]-.25)*1.6,0,1);d[3]=v*y*.9;let C=.62+e[_]*.3;d[0]=C,d[1]=C,d[2]=C*1.02}),s.SPARK=bi(64,(d,p,x,g)=>{let m=Math.exp(-g*g*60),_=Math.exp(-Math.abs(x)*40)*Math.pow(Math.max(0,1-Math.abs(p)),2),v=Math.exp(-Math.abs(p)*40)*Math.pow(Math.max(0,1-Math.abs(x)),2),y=(p+x)*.7071,C=(p-x)*.7071,T=(Math.exp(-Math.abs(y)*60)*Math.max(0,1-Math.abs(C)*1.6)+Math.exp(-Math.abs(C)*60)*Math.max(0,1-Math.abs(y)*1.6))*.5,R=Math.pow(Math.max(0,1-g),3)*.35;d[3]=Ye(m+_+v+T+R,0,1),d[0]=1,d[1]=.95,d[2]=.8+m*.2});let n=Zi(256,8,4,403),i=$t(64,64,4,4,4,404),r=[];{let d=Si(405);for(let p=0;p<7;p++){let x=d()*$i,g=.55+d()*.35;r.push([Math.cos(x)*g,Math.sin(x)*g,.04+d()*.07])}}s.BLOOD=bi(64,(d,p,x,g,m,_)=>{let v=.32+$c(m,n)*.28,y=te(v+.04,v-.04,g);for(let[T,R,S]of r){let M=Math.hypot(p-T,x-R);y=Math.max(y,te(S+.03,S-.03,M))}d[3]=y;let C=.75+i[_]*.4+Math.max(0,.3-g)*.6;d[0]=.5*C,d[1]=.03*C,d[2]=.03*C});let o=$t(128,128,4,4,6,406),a=Qo(128,128,3,3,5,407);s.FIRE=bi(128,(d,p,x,g,m,_)=>{let v=(o[_]-.5)*.7+(a[_]-.5)*.35,y=Ye(1-(g+v*.6)/.85,0,1),C=Math.pow(y,.8);d[0]=1,d[1]=Ye(.25+C*.95,0,1),d[2]=Ye(C*C*.9-.1,0,1)+.04,d[3]=te(0,.35,y)*(.85+.15*C)});let l=Zi(64,8,1,408);s.MUZZLE=bi(128,(d,p,x,g,m)=>{let v=Math.pow(Math.abs(Math.cos(m*7/2)),8),y=Math.floor((m/$i+1)%1*7),C=.28+(.45+l[y*8%64]*.4)*v,T=Ye(1-g/C,0,1),R=Math.exp(-g*g*30);d[3]=Ye(Math.pow(T,.7)+R,0,1);let S=Ye(T*1.3+R,0,1);d[0]=1,d[1]=.55+.45*S,d[2]=.15+.8*S*S});let c=$t(64,64,4,4,5,409),h=Zi(256,10,3,410);s.SCORCH=bi(64,(d,p,x,g,m,_)=>{let v=te(.17,.11,g),y=(1-te(.12,.55+$c(m,h)*.3+(c[_]-.5)*.2,g))*(.55+c[_]*.4);d[3]=Ye(Math.max(v,y*.85),0,1);let C=.02+(1-v)*.06*c[_];d[0]=C*1.2,d[1]=C,d[2]=C*.85});let u=Zi(256,6,4,411),f=$t(128,128,4,4,5,412);return s.BLOODPOOL=bi(128,(d,p,x,g,m,_)=>{let v=.5+($c(m,u)-.5)*.45+(f[_]-.5)*.12,y=te(v+.02,v-.03,g);d[3]=y*.93;let C=.7+f[_]*.4+te(v-.02,v-.15,g)*0;d[0]=.36*C,d[1]=.02*C,d[2]=.02*C}),s}function Sf(s){gf=s&&s.capabilities&&s.capabilities.getMaxAnisotropy?s.capabilities.getMaxAnisotropy():1;let t={};t.TECH=h1(),t.TECH2=u1(),t.ROCK=f1(),t.GSTONE=d1(),t.SUPPORT=p1(),t.DOOR=m1(),t.DOORTRAK=g1(),t.COMP=x1(),t.STEP=y1(),t.PLAT=v1(),t.SWITCH=mf(!1),t.SWITCH_ON=mf(!0),t.EXITSIGN=_1(),t.LITE=M1(),t.FLOOR=b1(),t.FLOOR2=S1(),t.FLOORDARK=w1(),t.CEIL=T1(),t.CEILLIGHT=E1(),t.NUKAGE=A1(),t.RROCK=R1(),t.STEPTOP=C1(),t.SKY=I1(),Object.assign(t,P1());let e=[];for(let i in t){let r=t[i];r._update&&(e.push(r._update),delete r._update),r.emissiveIntensity==null&&(r.emissiveIntensity=1)}function n(i){for(let r=0;r<e.length;r++)e[r](i)}return{textures:t,update:n}}var Je=Math.PI*2,re=(s,t,e)=>s<t?t:s>e?e:s,Ji=(s,t,e,n)=>e+(t-e)*Math.exp(-s/n),On=s=>440*Math.pow(2,(s-69)/12);function L1(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function D1(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ea(s,t){return s<t?(s/=t,s+s-s*s-1):s>1-t?(s=(s-1)/t,s*s+s+s+1):0}function Af(s,t){if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*((t-n)/Math.max(1e-6,r-n))}return s[s.length-1][1]}var Ei=s=>t=>Af(s,t);function Tr(s,t=1){let e=0;for(let n=0;n<s.length;n++){let i=s[n]<0?-s[n]:s[n];i>e&&(e=i)}if(e>1e-9){let n=t/e;for(let i=0;i<s.length;i++)s[i]*=n}return s}function Qe(s,t){Tr(s,1);let e=1/Math.tanh(t);for(let n=0;n<s.length;n++)s[n]=Math.tanh(s[n]*t)*e;return s}function qs(s,t,e,n=1){let i=Math.min(t.length,s.length-e);for(let r=0;r<i;r++)s[e+r]+=t[r]*n}var Ti=class{constructor(t){this.sr=t,this.b0=1,this.b1=this.b2=this.a1=this.a2=0,this.x1=this.x2=this.y1=this.y2=0}set(t,e,n=.707,i=0){e=re(e,5,this.sr*.48),n=Math.max(n,.05);let r=Je*e/this.sr,o=Math.cos(r),a=Math.sin(r)/(2*n),l,c,h,u,f,d;if(t==="lp")l=(1-o)/2,c=1-o,h=l,u=1+a,f=-2*o,d=1-a;else if(t==="hp")l=(1+o)/2,c=-(1+o),h=l,u=1+a,f=-2*o,d=1-a;else if(t==="bp")l=a,c=0,h=-a,u=1+a,f=-2*o,d=1-a;else{let p=Math.pow(10,i/40);l=1+a*p,c=-2*o,h=1-a*p,u=1+a/p,f=-2*o,d=1-a/p}return this.b0=l/u,this.b1=c/u,this.b2=h/u,this.a1=f/u,this.a2=d/u,this}run(t){let e=this.b0*t+this.b1*this.x1+this.b2*this.x2-this.a1*this.y1-this.a2*this.y2;return this.x2=this.x1,this.x1=t,this.y2=this.y1,this.y1=e,e}},U1={a:[730,1090,2440,3300],ae:[660,1720,2410,3300],e:[530,1840,2480,3300],i:[300,2200,2950,3500],o:[570,840,2410,3300],u:[320,870,2240,3300],uh:[640,1190,2390,3300],oo:[440,1020,2240,3300],er:[490,1350,1690,3300]};function F1(s,t){let e=n=>typeof n=="string"?U1[n]:n;if(t<=s[0][0])return e(s[0][1]);for(let n=1;n<s.length;n++)if(t<=s[n][0]){let i=e(s[n-1][1]),r=e(s[n][1]),o=(t-s[n-1][0])/Math.max(1e-6,s[n][0]-s[n-1][0]);return[i[0]+(r[0]-i[0])*o,i[1]+(r[1]-i[1])*o,i[2]+(r[2]-i[2])*o,i[3]+(r[3]-i[3])*o]}return e(s[s.length-1][1])}var Er=class{constructor(t,e){this.sr=t,this.rnd=D1(e)}r(t=0,e=1){return t+(e-t)*this.rnd()}w(){return this.rnd()*2-1}buf(t){return new Float32Array(Math.max(1,Math.ceil(t*this.sr)))}filt(t,e,n,i=.707,r=0){let o=new Ti(this.sr),a=typeof n=="function";o.set(e,a?n(0):n,i,r);for(let l=0;l<t.length;l++)a&&!(l&15)&&o.set(e,n(l/this.sr),i,r),t[l]=o.run(t[l]);return t}layer(t,e,n,i,r,o=1){let a=Math.round(e*this.sr),l=Math.min(Math.ceil(n*this.sr),t.length-a);if(l<=0)return;let c=new Float32Array(l);for(let h=0;h<l;h++)c[h]=i(h/this.sr,h);if(r)for(let h of r)this.filt(c,h[0],h[1],h[2],h[3]);Tr(c,o),qs(t,c,a)}oscFn(t,e,n=0){let i=n,r=this.sr,o=typeof e=="function";return a=>{let c=(o?e(a):e)/r;switch(i+=c,i>=1&&(i-=Math.floor(i)),t){case"sine":return Math.sin(Je*i);case"saw":return 2*i-1-ea(i,c);case"square":return(i<.5?1:-1)+ea(i,c)-ea((i+.5)%1,c);default:return 1-4*Math.abs(i-.5)}}}srand(t){let e=0,n=this.w(),i=0,r=1-Math.exp(-Je*t/this.sr);return o=>(o>=i&&(n=this.w(),i=o+(.5+this.rnd())/t),e+=(n-e)*r,e)}crackleFn(t,e){let n=0;return i=>{let r=typeof t=="function"?t(i):t;return this.rnd()<r/this.sr?n=this.w()*(.3+.7*this.rnd()):n*=.82,n*(e?e(i):1)}}modes(t,e,n,i,r=.3){let o=n.map(()=>this.rnd()*Je);this.layer(t,e,r,a=>{let l=0;for(let c=0;c<n.length;c++){let h=n[c];l+=h[1]*Math.exp(-a/h[2])*Math.sin(Je*h[0]*a+o[c])}return l*Math.min(1,a/4e-4)},null,i)}burst(t,e,n,i,r,o){this.layer(t,e,o||n*7,a=>this.w()*Math.exp(-a/n),i,r)}thump(t,e,n,i,r,o,a,l){let c=this.oscFn("sine",h=>Ji(h,n,i,r));this.layer(t,e,l||o*7,h=>c(h)*Math.exp(-h/o)*Math.min(1,h/8e-4),null,a)}bubble(t,e,n,i,r,o){let a=this.oscFn("sine",l=>n*Math.pow(i/n,Math.min(1,l/r)));this.layer(t,e,r*2,l=>a(l)*Math.exp(-l/(r*.45))*Math.min(1,l/.002),null,o)}vocal(t){let e=this.sr,n=Math.ceil(t.dur*e),i=new Float32Array(n),r=[new Ti(e),new Ti(e),new Ti(e),new Ti(e)],o=[90,110,170,250],a=t.bw||1,l=t.fscale||1,c=t.bandGain||[1,.7,.42,.22],h=new Ti(e).set("lp",t.tilt||1500,.6),u=this.srand(30),f=this.srand(18),d=t.jitter==null?.03:t.jitter,p=typeof t.noise=="function"?t.noise:()=>t.noise==null?.15:t.noise,x=t.rough,g=x?typeof x.depth=="function"?x.depth:()=>x.depth:null,m=0,_=0,v=0;for(let y=0;y<n;y++){let C=y/e;if(!(y&31)){let D=F1(t.vowels,C),U=typeof l=="function"?l(C):l;for(let H=0;H<4;H++){let z=D[H]*U;r[H].set("bp",z,z/(o[H]*a))}}let R=t.f0(C)*(1+d*u(C))/e;m+=R,m>=1&&(m-=1,_++);let S=2*m-1-ea(m,R);t.sub&&_&1&&(S*=1-t.sub),S=h.run(S);let M=p(C),b=this.w()*(m<.5?1:.5),E=S*(1-M)*2+b*M*3,L=0;for(let D=0;D<4;D++)L+=r[D].run(E)*c[D];x&&(v+=x.rate*(1+.35*f(C))/e,L*=1-g(C)*(.5+.5*Math.sin(Je*v))),i[y]=L*t.env(C)}return Tr(i,1),t.drive&&Qe(i,t.drive),i}};function wi(s,t){let e=0,n=0,i=1-Je*18/s;for(let a=0;a<t.length;a++){let l=t[a],c=l-e+i*n;e=l,n=c,t[a]=c}let r=Math.min(t.length,12);for(let a=0;a<r;a++)t[a]*=a/r;let o=Math.min(t.length,Math.round(s*.008));for(let a=0;a<o;a++)t[t.length-1-a]*=a/o;return Tr(t,.98)}var th={};function Kt(s,t,e,n,i=6){th[s]={variants:t,gain:e,gen:n,cap:i}}var Rf=(s,t,e)=>n=>Math.min(1,n/s)*re((t-n)/e,0,1);function Cf(s,t){let e=s.buf(t.dur),n=s.r(.92,1.08);return s.burst(e,0,.004,[["hp",2e3*n,.7]],1,.04),s.burst(e,0,t.barkTau,[["bp",t.bark*n,.7]],1,.2),s.burst(e,0,t.barkTau*1.4,[["lp",2600,.7]],.7,.25),s.thump(e,0,t.th0*n,t.th1,.03,t.thTau,t.thump,.3),s.layer(e,.004,t.dur-.004,i=>s.w()*Math.exp(-i/t.tail)*Math.min(1,i/.003),[["lp",i=>350+3500*Math.exp(-i/.05),.7]],t.tailAmt),Qe(e,t.drive),e}function ni(s,t,e,n,i,r,o){let a=s.buf(.12);s.modes(a,0,n.map((l,c)=>[l*s.r(.96,1.04),1/(1+c*.5),i/(1+c*.4)]),1,.12),s.burst(a,0,.0015,[["hp",3e3,.7]],.6,.012),r&&s.thump(a,0,r*1.2,r,.01,i*2.2,.55,.1),Tr(a,o),qs(t,a,Math.round(e*s.sr))}Kt("pistol",3,1,s=>Cf(s,{dur:.5,bark:1150,barkTau:.028,th0:230,th1:80,thTau:.04,thump:.75,tail:.11,tailAmt:.4,drive:2.4}));Kt("chaingun",3,.9,s=>Cf(s,{dur:.32,bark:1e3,barkTau:.024,th0:210,th1:72,thTau:.035,thump:.8,tail:.06,tailAmt:.32,drive:2.6}),5);Kt("shotgun",3,1.25,s=>{let t=s.buf(.85),e=s.buf(.44),n=s.r(.93,1.07);s.burst(e,0,.005,[["hp",1500,.7]],1,.04),s.layer(e,0,.44,o=>s.w()*Math.exp(-o/.075)*Math.min(1,o/.001),[["lp",o=>500+4500*Math.exp(-o/.06),.8]],1),s.burst(e,0,.05,[["bp",950*n,.7]],1,.3),s.thump(e,0,160*n,52,.05,.11,.8,.44);for(let o=0;o<9;o++)s.burst(e,s.r(.012,.14),.003,[["bp",s.r(2500,5500),3]],s.r(.12,.3),.02);s.layer(e,.01,.43,o=>s.w()*Math.exp(-o/.2),[["lp",o=>280+1800*Math.exp(-o/.08),.7]],.35),Qe(e,2.8);let i=Math.round(.06*s.sr);for(let o=0;o<i;o++)e[e.length-1-o]*=o/i;qs(t,e,0);let r=.45+s.r(-.02,.02);return ni(s,t,r,[1150,2650,4100,6300],.012,280,.32),s.layer(t,r+.012,.09,o=>s.w()*Math.sin(Math.PI*re(o/.09,0,1)),[["bp",1900,2]],.06),ni(s,t,r+.15,[900,2200,3700,5200],.015,220,.42),t});Kt("punch",2,.55,s=>{let t=s.buf(.3),e=s.r(.85,1.15),n=i=>i<.07?Math.sin(Math.PI/2*(i/.07))**2:Math.exp(-(i-.07)/.05);return s.layer(t,0,.3,i=>s.w()*n(i),[["bp",i=>e*(450+1500*Math.sin(Math.PI*re(i/.22,0,1))),1.3]],1),s.layer(t,0,.3,i=>s.w()*n(i),[["lp",350,.7]],.4),t});Kt("punch_hit",3,1,s=>{let t=s.buf(.35);return s.thump(t,0,125*s.r(.9,1.1),45,.03,.07,1,.35),s.burst(t,0,.03,[["lp",1600,.7]],.8,.18),s.burst(t,0,.01,[["bp",1500,.8]],.7,.06),s.layer(t,.005,.2,e=>s.w()*Math.exp(-e/.04),[["bp",e=>Ji(e,750,250,.05),4]],.35),Qe(t,2),t});function If(s,t){let e=t?1.35:1.15,n=t?1.03:1.15,i=s.buf(e),r=s.r(.94,1.06),o=p=>re(p/.07,0,1)*re((n-p)/.14,0,1),a=p=>r*(t?Ji(p,47,60,.15)-8*Math.max(0,p-.7):Ji(p,43,62,.22))*(1+.02*Math.sin(Je*3.1*p)),l=s.oscFn("saw",a),c=s.oscFn("saw",p=>a(p)*2.02),h=p=>.55+.45*Math.pow(Math.abs(Math.sin(Math.PI*21*r*p)),3);s.layer(i,0,n,p=>(l(p)+.5*c(p))*h(p)*o(p),[["lp",650,1.8],["hp",38,.7]],.75),s.layer(i,0,n,p=>s.w()*Math.pow(Math.abs(Math.sin(Math.PI*17*r*p)),6)*o(p),[["bp",520,2.5]],.45);let u=s.srand(4);s.layer(i,0,n,p=>s.w()*o(p)*(.65+.35*u(p)),[["hp",2600,.7],["lp",7e3,.7]],.1);let f=s.oscFn("sine",p=>a(p)*8.03);s.layer(i,0,n,p=>f(p)*o(p),null,.09);let d=s.srand(9);if(s.layer(i,0,n,p=>s.w()*o(p)*Math.max(0,d(p)),[["bp",1730,14]],.1),!t)ni(s,i,0,[180,430,980,1650],.05,90,.5);else{let p=s.buf(.4);s.thump(p,0,95,40,.03,.09,1,.4),s.modes(p,0,[[210,.7,.12],[505,.5,.09],[870,.35,.07],[1420,.25,.05],[2300,.15,.03]],.7,.4),s.burst(p,0,.02,[["lp",2e3,.7]],.6,.12),Qe(p,1.5),qs(i,p,Math.round((n-.02)*s.sr),1.3)}return i}Kt("door_open",2,.9,s=>If(s,!1),3);Kt("door_close",2,.9,s=>If(s,!0),3);Kt("lift_start",2,.75,s=>{let t=s.buf(1.2),e=s.r(.95,1.05),n=s.buf(.3);s.thump(n,0,80,40,.03,.06,1,.3),s.modes(n,0,[[150,1,.08],[350,.6,.06],[720,.4,.04]],.7,.3),Qe(n,1.4),qs(t,n,0,.8);let i=p=>re(p/.15,0,1)*re((1.18-p)/.15,0,1),r=p=>e*Ji(p,30,55,.12),o=s.oscFn("saw",r),a=s.oscFn("saw",p=>r(p)*2.01),l=s.oscFn("sine",p=>r(p)*3),c=p=>.8+.2*Math.sin(Je*7*p);s.layer(t,.02,1.18,p=>(o(p)+.4*a(p)+.3*l(p))*i(p)*c(p),[["lp",520,1.5]],.6);let h=s.oscFn("sine",110*e),u=s.oscFn("sine",220*e);s.layer(t,.02,1.18,p=>(h(p)+.5*u(p))*i(p)*(.7+.3*Math.sin(Je*6*p)),null,.18);let f=s.oscFn("sine",p=>r(p)*9);s.layer(t,.02,1.18,p=>f(p)*i(p),null,.05);let d=s.srand(25);return s.layer(t,.02,1.18,p=>s.w()*i(p)*(.5+.5*d(p)),[["bp",900,3]],.12),t},3);Kt("lift_stop",2,.85,s=>{let t=s.buf(.6),e=s.oscFn("saw",n=>Ji(n,50,24,.08));return s.layer(t,0,.18,n=>e(n)*Math.exp(-n/.05),[["lp",400,1]],.25),s.thump(t,.01,70*s.r(.92,1.08),32,.04,.12,1,.59),s.modes(t,.01,[[120,1,.15],[290,.8,.12],[610,.7,.08],[1100,.5,.05],[1900,.35,.03]],.8,.55),s.burst(t,.01,.03,[["lp",1200,.7]],.5,.2),Qe(t,1.6),t},3);Kt("switch",2,.8,s=>{let t=s.buf(.26);return ni(s,t,0,[2100,3500,5600],.004,650,.6),ni(s,t,s.r(.065,.09),[1400,2600,4300],.008,420,1),t},3);function sh(s,t){return s.vocal({dur:t.dur,f0:Ei(t.f0),vowels:t.vowels,noise:t.noise||.12,sub:t.sub||.1,drive:t.drive||1.8,rough:t.rough,fscale:t.fscale||1,jitter:.025,env:t.env})}Kt("noway",2,.6,s=>{let t=s.r(.92,1.08),e=.34,n=sh(s,{dur:e,f0:[[0,135*t],[.06,125*t],[.3,92*t]],vowels:[[0,"uh"],[.12,"uh"],[.3,"u"]],env:i=>Math.min(1,i/.015)*Math.exp(-Math.max(0,i-.04)/.1)*re((e-i)/.06,0,1)});return s.burst(n,0,.02,[["hp",1e3,.7]],.15,.06),s.layer(n,.17,.16,i=>s.w()*Math.sin(Math.PI*re(i/.16,0,1)),[["hp",1500,.7],["lp",6e3,.7]],.12),n},2);Kt("item_pickup",2,.42,s=>{let t=s.buf(.2),e=s.r(.97,1.03);for(let[n,i,r]of[[0,1047,.06],[.045,1568,.15]]){let o=s.oscFn("square",i*e),a=s.oscFn("sine",i*e*2);s.layer(t,n,r,l=>(o(l)*.6+a(l)*.3)*Math.exp(-l/.045)*Math.min(1,l/.002),[["lp",5e3,.7]],n?.9:.7)}return t},4);Kt("weapon_pickup",2,.6,s=>{let t=s.buf(.65);ni(s,t,0,[320,780,1350,2400],.04,140,.8),s.burst(t,0,.015,[["bp",1500,1]],.3,.08),ni(s,t,.12,[1850,2950,4700,6200],.06,0,.65);for(let[e,n]of[[.24,523.25],[.32,783.99]]){let i=s.oscFn("square",n),r=s.oscFn("saw",n*1.003);s.layer(t,e,.3,o=>(i(o)+r(o))*Math.min(1,o/.003)*Math.exp(-o/.07),[["lp",2600,.8]],.4)}return t},3);Kt("powerup",1,.5,s=>{let e=s.buf(1.3),n=c=>300*Math.pow(4,Math.min(c,1)),i=s.oscFn("tri",n),r=s.oscFn("tri",c=>n(c)*1.007),o=s.oscFn("sine",c=>n(c)*.993),a=s.oscFn("sine",c=>n(c)*2),l=c=>Math.min(1,c/.1)*re((1.3-c)/.3,0,1);s.layer(e,0,1.3,c=>(i(c)+r(c)+o(c)+.3*a(c))*l(c)*(.6+.4*Math.sin(Je*14*c)),null,.8);for(let c=.05;c<1.1;c+=s.r(.03,.06)){let h=s.r(2e3,5e3)*(.6+c*.5),u=s.oscFn("sine",h);s.layer(e,c,.1,f=>u(f)*Math.exp(-f/.025),null,.08+.25*(c/1.1))}return e},2);function Qc(s,t,e,n,i,r=1.6){let o=s.oscFn("sine",n*1.41),a=s.oscFn("sine",n*2.76),l=0;s.layer(t,e,r,c=>{let h=2.2*Math.exp(-c/.35);return l+=n/s.sr,(Math.sin(Je*l+h*o(c))+.25*a(c)*Math.exp(-c/.3))*Math.exp(-c/.85)*Math.min(1,c/.002)},null,i)}Kt("secret",1,.55,s=>{let e=s.buf(2.2);Qc(s,e,0,659.26,.8,2.2),Qc(s,e,.18,932.33,.7,2),Qc(s,e,.36,1244.5,.75,1.84);let n=s.oscFn("saw",82.41),i=s.oscFn("saw",123.47*1.002),r=s.oscFn("saw",164.81*.998),o=a=>Math.sin(Math.PI*re(a/2.2,0,1))**1.5;return s.layer(e,0,2.2,a=>(n(a)+i(a)+r(a))*o(a),[["lp",420,.9]],.35),s.layer(e,.2,2,a=>s.w()*Math.sin(Math.PI*re(a/2,0,1))**2,[["bp",3200,8]],.12),e},1);Kt("player_pain",3,.48,s=>{let t=s.r(.9,1.1),e=.4*s.r(.9,1.1);return sh(s,{dur:e,f0:[[0,150*t],[.05,178*t],[e,118*t]],vowels:[[0,"uh"],[.1,["a","ae","uh"][Math.floor(s.r(0,2.99))]],[e,"uh"]],noise:.18,sub:.15,drive:2.5,rough:{rate:40,depth:.25},env:n=>Math.min(1,n/.008)*Math.exp(-Math.max(0,n-.08)/.1)*re((e-n)/.05,0,1)})},2);Kt("player_death",2,.4,s=>{let t=s.r(.92,1.08),e=1.4,n=s.vocal({dur:e,f0:i=>Af([[0,255*t],[.15,340*t],[.4,320*t],[.9,200*t],[1.4,105*t]],i)*(1+.03*Math.sin(Je*6*i)*Math.min(1,i/.4)),vowels:[[0,"ae"],[.2,"a"],[.8,"a"],[1.2,"o"],[1.4,"uh"]],fscale:1.05,noise:i=>.15+.25*(i/e),sub:.2,drive:3,rough:{rate:30,depth:i=>.1+.3*(i/e)},jitter:.04,env:i=>Math.min(1,i/.03)*(i<.9?1:Math.pow(re((e-i)/.5,0,1),1.5))});return s.filt(n,"lp",7e3,.7),n},2);Kt("player_land",2,.8,s=>{let t=s.buf(.36);s.thump(t,0,85,38,.03,.06,1,.36),s.burst(t,0,.03,[["lp",600,.7]],.6,.2);let e=sh(s,{dur:.2,f0:[[0,120],[.2,95]],vowels:[[0,"uh"],[.2,"u"]],drive:1.6,env:n=>Math.min(1,n/.01)*re((.2-n)/.08,0,1)});return qs(t,e,Math.round(.02*s.sr),.45),t},2);function N1(s,t,e,n=400,i=30){let r=s.srand(i),o=t.length/s.sr;s.layer(t,0,o,a=>s.w()*(.5+.5*r(a))*Math.min(1,a/.05)*re((o-a)/.2,0,1),[["bp",n,1]],e)}Kt("zombie_sight",3,.65,(s,t)=>{let e=s.r(.88,1.12),n=s.r(.88,1.12),i=.8*n,r=[["o","a","uh"],["er","a","o"],["uh","ae","o"]][t%3],o=s.vocal({dur:i,f0:Ei([[0,78*e],[.15*n,108*e],[.45*n,96*e],[i,62*e]]),vowels:[[0,r[0]],[.2*n,r[1]],[.55*n,r[1]],[i,r[2]]],fscale:.82*s.r(.95,1.05),bw:1.6,noise:.3,rough:{rate:s.r(28,40),depth:.55},sub:.35,drive:4.5,jitter:.05,env:Rf(.07,i,.25)});return N1(s,o,.25,380),s.filt(o,"peak",180,1,4),s.filt(o,"lp",5500,.7),o},3);Kt("zombie_active",3,.6,(s,t)=>{let e=s.r(.9,1.1),n=.8*s.r(.9,1.1),i=[["u","uh","o"],["o","er","u"],["oo","uh","o"]][t%3],r=s.vocal({dur:n,f0:Ei([[0,62*e],[n*.5,71*e],[n,56*e]]),vowels:[[0,i[0]],[n*.5,i[1]],[n,i[2]]],fscale:.8,bw:1.5,noise:.35,rough:{rate:s.r(11,16),depth:.8},sub:.4,drive:3,jitter:.06,env:o=>Math.pow(Math.sin(Math.PI*re(o/n,0,1)),.7)});for(let o=0;o<6;o++)s.bubble(r,s.r(.05,n-.1),s.r(160,240),s.r(420,650),s.r(.02,.035),s.r(.12,.25));return s.filt(r,"peak",160,1,3),s.filt(r,"lp",5e3,.7),r},3);Kt("zombie_pain",3,.45,s=>{let t=s.r(.9,1.12),e=.35*s.r(.9,1.1);return s.vocal({dur:e,f0:Ei([[0,150*t],[.04,192*t],[e,118*t]]),vowels:[[0,"e"],[.1,"a"],[e,"uh"]],fscale:.88,bw:1.4,noise:.25,rough:{rate:40,depth:.4},sub:.25,drive:4,env:n=>Math.min(1,n/.006)*Math.exp(-Math.max(0,n-.05)/.1)*re((e-n)/.05,0,1)})},3);Kt("zombie_death",3,.5,(s,t)=>{let e=s.r(.9,1.1),n=1*s.r(.92,1.08),i=s.vocal({dur:n,f0:Ei([[0,190*e],[.1,172*e],[.6*n,95*e],[n,52*e]]),vowels:[[0,t===1?"ae":"a"],[.3*n,"a"],[.7*n,"o"],[n,"u"]],fscale:.85,bw:1.5,noise:r=>.2+.3*(r/n),sub:.3,drive:4,jitter:.05,rough:{rate:30,depth:r=>.2+.6*(r/n)},env:r=>Math.min(1,r/.02)*(r<.55*n?1:re((n-r)/(.45*n),0,1))});for(let r=0;r<4;r++)s.bubble(i,s.r(.6,.9)*n,s.r(150,220),s.r(380,560),.03,.15);return s.filt(i,"lp",5500,.7),i},3);function Pf(s,t,e,n,i){let r=t.length/s.sr,o=s.srand(50);s.layer(t,0,r,a=>s.w()*(.4+.6*Math.abs(o(a)))*Math.min(1,a/.03)*re((r-a)/.25,0,1),[["bp",a=>e+(n-e)*(a/r),6]],i)}Kt("imp_sight",3,.5,(s,t)=>{let e=s.r(.9,1.1),n=s.r(.9,1.1),i=.82*n,r=[["i","ae","o"],["e","a","uh"],["ae","a","o"]][t%3],o=s.vocal({dur:i,f0:Ei([[0,210*e],[.1*n,290*e],[.4*n,262*e],[i,168*e]]),vowels:[[0,r[0]],[.1*n,r[1]],[.45*n,"a"],[i,r[2]]],fscale:1.12,bw:2,noise:.55,rough:{rate:s.r(48,62),depth:.5},sub:.3,drive:5,jitter:.05,env:Rf(.03,i,.25)});return Pf(s,o,2600*e,2200*e,.3),s.filt(o,"hp",120,.7),s.filt(o,"lp",8e3,.7),o},3);Kt("imp_active",3,.45,s=>{let t=.75*s.r(.9,1.1),e=.45*t,n=r=>r<e?Math.sin(Math.PI*r/e):r>e+.03?.85*Math.sin(Math.PI*re((r-e-.03)/(t-e-.03),0,1)):0,i=s.vocal({dur:t,f0:r=>95*(1+.1*Math.sin(Je*1.3*r)),vowels:[[0,"a"],[e,"o"],[e+.03,"ae"],[t,"uh"]],fscale:1.05,bw:2,noise:.75,rough:{rate:22,depth:.6},sub:.3,drive:3.5,jitter:.06,env:n});return s.filt(i,"hp",100,.7),i},3);Kt("imp_pain",3,.38,s=>{let t=s.r(.9,1.1),e=.35*s.r(.9,1.1);return s.vocal({dur:e,f0:Ei([[0,280*t],[.05,385*t],[e,240*t]]),vowels:[[0,"ae"],[.15,"a"],[e,"uh"]],fscale:1.15,bw:1.8,noise:.45,rough:{rate:50,depth:.4},sub:.2,drive:5,env:n=>Math.min(1,n/.005)*Math.exp(-Math.max(0,n-.04)/.09)*re((e-n)/.05,0,1)})},3);Kt("imp_death",3,.5,s=>{let t=s.r(.9,1.1),e=1*s.r(.92,1.08),n=s.vocal({dur:e,f0:Ei([[0,380*t],[.1,420*t],[.5*e,230*t],[e,108*t]]),vowels:[[0,"i"],[.1,"ae"],[.4*e,"a"],[.9*e,"o"]],fscale:i=>1.25-.3*(i/e),bw:1.8,noise:.5,sub:.25,drive:5,jitter:.05,rough:{rate:45,depth:i=>.3+.4*(i/e)},env:i=>Math.min(1,i/.02)*(i<.5*e?1:re((e-i)/(.5*e),0,1))});return Pf(s,n,3200*t,1500*t,.3),s.filt(n,"hp",110,.7),n},3);Kt("imp_claw",3,.7,s=>{let t=s.buf(.3),e=s.r(.85,1.15),n=i=>i<.04?i/.04:Math.exp(-(i-.04)/.05);return s.layer(t,0,.3,i=>s.w()*n(i),[["bp",i=>e*(i<.07?700+2500*(i/.07):1200+2e3*Math.exp(-(i-.07)/.05)),1.5]],1),s.burst(t,.04,.03,[["hp",5e3,.7]],.3,.15),s.burst(t,.03,.03,[["lp",300,.7]],.2,.15),t},3);Kt("fireball_launch",3,.6,s=>{let e=s.buf(.65),n=s.r(.85,1.15),i=a=>Math.sin(Math.PI*re(a/.35,0,1)),r=a=>a<.08?Math.sin(Math.PI/2*(a/.08)):Math.exp(-(a-.08)/.18);s.layer(e,0,.65,a=>s.w()*r(a),[["lp",a=>n*(400+2600*i(a)),.9]],1),s.layer(e,0,.65,s.crackleFn(140,r),[["bp",3e3,.8]],.35);let o=0;return s.layer(e,0,.65,a=>(o=o*.995+s.w()*.05,o*r(a)),[["lp",250,.7]],.5),s.layer(e,0,.65,a=>s.w()*r(a),[["bp",a=>n*(900+1100*i(a)),3]],.3),Qe(e,1.5),e},4);Kt("fireball_explode",3,.8,s=>{let e=s.buf(.9);s.thump(e,0,160,50,.02,.05,.7,.4),s.layer(e,0,.9,i=>s.w()*Math.exp(-i/.12),[["lp",i=>800+5200*Math.exp(-i/.08),.7]],1),s.layer(e,0,.9,s.crackleFn(i=>400*Math.exp(-i/.3),i=>Math.exp(-i/.25)),[["hp",2e3,.7]],.6);let n=0;return s.layer(e,0,.9,(i,r)=>(r%160===0&&(n=s.rnd()),s.w()*n*Math.exp(-i/.3)),[["hp",4500,.7]],.35),Qe(e,1.8),e},4);Kt("barrel_explode",2,1.3,s=>{let e=s.buf(1.9);s.burst(e,0,.006,[["hp",1200,.7]],.8,.05),s.layer(e,0,1.9,r=>s.w()*Math.min(1,r/.002)*Math.exp(-r/.3),[["lp",r=>300+5e3*Math.exp(-r/.12),.7]],1),s.burst(e,0,.06,[["bp",700,.6]],.6,.4),s.thump(e,0,90*s.r(.92,1.08),32,.12,.35,.85,1.9);let n=0,i=s.srand(8);return s.layer(e,0,1.9,r=>(n=n*.998+s.w()*.04,n*(.6+.4*i(r))*Math.min(1,r/.05)*Math.exp(-r/.6)),[["lp",180,.7]],.55),s.layer(e,.05,.85,s.crackleFn(90,r=>Math.exp(-r/.4)),[["bp",2500,1]],.35),Qe(e,2.6),e},4);Kt("gib",3,.7,s=>{let t=s.buf(.65);s.thump(t,0,100,45,.03,.05,.5,.3);for(let e=0;e<7;e++){let n=e===0?0:s.r(0,.35),i=s.r(1100,1700);s.layer(t,n,.12,r=>s.w()*Math.exp(-r/.03),[["lp",r=>Ji(r,i,250,.03),6]],s.r(.4,1)),s.burst(t,n,.01,[["bp",1200,.8]],.4,.05)}for(let e=0;e<3;e++)s.bubble(t,s.r(.35,.55),s.r(280,340),s.r(700,900),.015,.2);return Qe(t,1.5),t},4);Kt("slime_burn",2,.5,s=>{let e=s.buf(.55),n=r=>Math.min(1,r/.02)*(r<.25?1:Math.exp(-(r-.25)/.12)),i=0;s.layer(e,0,.55,(r,o)=>(o%800===0&&(i=.4+.6*s.rnd()),s.w()*i*n(r)),[["hp",2500,.7],["lp",9e3,.7]],1),s.layer(e,0,.55,s.crackleFn(80,n),[["hp",3e3,.7]],.4);for(let r=0;r<3;r++)s.bubble(e,s.r(.02,.35),s.r(180,240),s.r(500,650),.03,.3);return s.layer(e,0,.55,r=>s.w()*n(r),[["lp",400,.7]],.2),e},2);Kt("weapon_switch",2,.6,s=>{let t=s.buf(.28);return ni(s,t,0,[1700,3100,5200],.01,500,.7),s.layer(t,.02,.1,e=>s.w()*Math.sin(Math.PI*re(e/.1,0,1)),[["bp",3e3,2]],.18),ni(s,t,s.r(.1,.12),[1200,2300,3900],.014,600,1),t},2);Kt("bullet_hit",4,.35,(s,t)=>{let e=t>=2,n=s.buf(e?.2:.12);if(s.burst(n,0,.002,[["hp",2500,.7]],1,.02),s.modes(n,0,[[2300*s.r(.8,1.2),1,.012],[3700*s.r(.8,1.2),.7,.008],[5100*s.r(.8,1.2),.5,.005]],.5,.08),s.burst(n,0,.02,[["lp",1500,.7]],.3,.1),e){let i=s.r(3400,4200),r=i*s.r(.55,.7),o=s.oscFn("sine",a=>(i+(r-i)*(a/.15))*(1+.01*Math.sin(Je*40*a)));s.layer(n,.005,.19,a=>o(a)*Math.min(1,a/.005)*Math.exp(-a/.05),null,.25)}return n},8);var O1=["pistol","shotgun","chaingun","punch","punch_hit","bullet_hit","weapon_switch","item_pickup","weapon_pickup","zombie_sight","zombie_pain","zombie_death","imp_sight","imp_pain","imp_death","imp_claw","fireball_launch","fireball_explode","barrel_explode","player_pain","door_open","door_close","switch","noway","lift_start","lift_stop","zombie_active","imp_active","gib","player_death","player_land","slime_burn","powerup","secret"],k1=[205.3,304.4,369.6,522.7,540,800];function wf(s,t){let e=k1.map(n=>s.oscFn("square",n*t,s.rnd()));return()=>{let n=0;for(let i of e)n+=i(0);return n}}function z1(s){let t=new Er(s,777),e={},n;n=t.buf(.45),t.thump(n,0,165,50,.03,.12,1,.45),t.burst(n,0,.003,[["bp",3500,.8]],.6,.025),t.thump(n,0,1200,600,.004,.004,.25,.02),Qe(n,1.6),e.kick=wi(s,n),n=t.buf(.35),t.thump(n,0,200,182,.02,.05,.6,.3),t.thump(n,0,345,325,.02,.035,.35,.25),t.burst(n,0,.11,[["hp",1200,.7],["lp",9e3,.7]],1,.35),t.burst(n,0,.004,[["bp",4e3,1]],.3,.03),Qe(n,1.8),e.snare=wi(s,n);for(let[o,a,l]of[["hatC",.022,.09],["hatO",.15,.45]]){n=t.buf(l);let c=wf(t,1);t.layer(n,0,l,h=>c()*Math.exp(-h/a)*Math.min(1,h/5e-4),[["bp",1e4,.8],["hp",7e3,.7]],1),t.burst(n,0,a*.7,[["hp",8e3,.7]],.4,l),e[o]=wi(s,n)}n=t.buf(2.2);let i=wf(t,1.37);t.layer(n,0,2.2,o=>(i()*.7+t.w())*(.65*Math.exp(-o/.7)+.35*Math.exp(-o/.05))*Math.min(1,o/.001),[["hp",4e3,.7],["lp",12e3,.7]],1),t.burst(n,0,.02,[["bp",2500,.8]],.3,.1),e.crash=wi(s,n);for(let[o,a,l]of[["tomH",155,108],["tomL",108,74]])n=t.buf(.55),t.thump(n,0,a,l,.08,.18,1,.55),t.burst(n,0,.01,[["lp",2e3,.7]],.4,.06),Qe(n,1.4),e[o]=wi(s,n);n=t.buf(.15),t.modes(n,0,[[1700,1,.02],[520,.8,.03]],1,.15),t.burst(n,0,.008,[["bp",2500,1]],.6,.05),e.rim=wi(s,n),n=t.buf(3),t.thump(n,0,58,27,.2,.8,1,3);let r=0;return t.layer(n,0,3,o=>(r=r*.998+t.w()*.04,r*Math.exp(-o/1)*Math.min(1,o/.01)),[["lp",130,.7]],.6),t.burst(n,0,.03,[["lp",800,.7]],.5,.2),Qe(n,1.3),e.boom=wi(s,n),e}function B1(s){let t=s.sampleRate,e=1.5,n=.16,i=Math.ceil(e*t),r=s.createBuffer(2,i,t);for(let o=0;o<2;o++){let a=new Er(t,4242+o*101),l=new Float32Array(i);for(let u=0;u<12;u++){let f=.004+a.r(0,.055);l[Math.floor(f*t)]+=a.w()*.7*Math.exp(-f/.04)}let c=0;for(let u=0;u<i;u++){let f=u/t,d=.2+.7*Math.exp(-f/.3),p=a.w()*Math.exp(-f/n)*re((f-.006)/.012,0,1);c+=d*(p-c),l[u]+=c*.8}let h=Math.round(.1*t);for(let u=0;u<h;u++)l[i-1-u]*=u/h;r.copyToChannel(l,o)}return r}function jc(s,t=0,e=4096){let n=new Float32Array(e),i=Math.tanh(t),r=Math.tanh(s+t)-i;for(let o=0;o<e;o++){let a=o/(e-1)*2-1;n[o]=(Math.tanh(s*a+t)-i)/r}return n}function H1(s=8192){let t=new Float32Array(s);for(let e=0;e<s;e++){let n=(e/(s-1)*2-1)*2,i=Math.abs(n),r=i<.8?i:.8+.19*Math.tanh((i-.8)/.19);t[e]=Math.sign(n)*r}return t}function Lf(s){try{s.frequency.automationRate="k-rate",s.Q.automationRate="k-rate"}catch{}return s}function Ki(...s){for(let t=0;t<s.length-1;t++)s[t].connect(s[t+1]);return s[0]}var Ar=class{constructor(t){this.audio=t;let e=this.ctx=t.ctx;this.out=e.createGain(),this.out.gain.value=0,this.out.connect(t.musicBus),this.send=this.g(.1),this.out.connect(this.send),this.send.connect(t.musicSend),this.dr=t._drums,this.drumBus=this.g(.9,this.out),this.step=0,this.nextTime=0}g(t,e){let n=this.ctx.createGain();return n.gain.value=t,e&&n.connect(e),n}f(t,e,n,i,r){let o=this.ctx.createBiquadFilter();return r&&Lf(o),o.type=t,o.frequency.value=e,n!=null&&(o.Q.value=n),i!=null&&(o.gain.value=i),o}pan(t,e){let n=this.ctx.createStereoPanner();return n.pan.value=t,e&&n.connect(e),n}shaper(t){let e=this.ctx.createWaveShaper();return e.curve=t,e.oversample="4x",e}osc(t,e,n,i,r,o=0){let a=this.ctx.createOscillator();return a.type=t,a.frequency.value=e,o&&(a.detune.value=o),a.connect(r),a.start(n),a.stop(i),a}delay(t,e,n,i){let r=this.g(1),o=this.ctx.createDelay(2);o.delayTime.value=t;let a=this.g(e),l=this.f("lowpass",3200,.7),c=this.g(n,i);return r.connect(o),o.connect(l),l.connect(a),a.connect(o),l.connect(c),r}hit(t,e,n=1,i=0,r=1){let o=this.dr[t];if(!o)return;let a=this.ctx.createBufferSource();a.buffer=o,r!==1&&(a.playbackRate.value=r);let l=this.g(n);a.connect(l),i?l.connect(this.pan(i,this.drumBus)):l.connect(this.drumBus),a.start(e)}drums(t,e,n,i=1){let r=c=>t[c]?t[c][e]:".";r("k")==="k"&&this.hit("kick",n,.95*i);let o=r("s");o==="s"?this.hit("snare",n,.8*i):o==="r"&&this.hit("rim",n,.35*i);let a=r("h");a==="h"?this.hit("hatC",n,(e%4===0?.32:.22)*i,.25):a==="o"&&this.hit("hatO",n,.26*i,.25);let l=r("t");l==="t"?this.hit("tomH",n,.75*i,-.25):l==="T"&&this.hit("tomL",n,.8*i,.2)}fadeIn(t,e){this.out.gain.setValueAtTime(0,t),this.out.gain.setTargetAtTime(this.level||1,t,e)}},Tf=82.4069,V1={E:0,F:1,"F#":2,G:3,"G#":4,A:5,Bb:6,B:7,C:8,"C#":9,D:10,"D#":11};function Xs(s){let t=s.trim().split(/\s+/),e=[];for(let n=0;n<t.length;n++){let i=t[n];if(i==="-"||i===".")continue;let r=1;for(;n+r<t.length&&t[n+r]==="-";)r++;i==="x"?e.push({s:n,semi:null,pm:!0,len:r}):i==="X"?e.push({s:n,semi:null,pm:!1,len:r}):e.push({s:n,semi:V1[i],pm:!1,len:r})}return e}var G1=[Xs("x . x x x . x x F - x x G - F -"),Xs("x . x x x . x x A - G - F - x x"),Xs("x . x x x . x x F - x x G - Bb -"),Xs("x x x x A - - - G - - - F - - -"),Xs("G - - - A - - - x x x x F - x x")],W1=[0,1,2,3,0,1,2,4],X1=Xs("X - x x X - x x X - x x X - x x"),q1=[0,0,8,10,0,0,1,7],Y1=[[[0,64,2],[2,67,2],[4,71,4],[8,69,2],[10,67,2],[12,65,4]],[[0,64,8],[8,67,4],[12,69,4]],[[0,71,2],[2,72,6],[8,71,4],[12,67,4]],[[0,69,4],[4,74,4],[8,72,4],[12,69,4]],[[0,71,6],[6,76,2],[8,74,4],[12,71,4]],[[0,72,4],[4,71,4],[8,67,4],[12,65,4]],[[0,69,2],[2,72,2],[4,77,8],[12,76,2],[14,72,2]],[[0,71,4],[4,75,4],[8,78,4],[12,75,4]]],Z1=[4,6,7,9,11,0,2],$1=[4,6,7,9,11,0,3];function K1(s,t){let e=s%12,n=t.indexOf(e);return n<0?s+(e===5?4:3):s+(t[(n+2)%7]-e+12)%12}var na={A:{k:"k.kk..k.k.kk..k.",s:"....s.......s...",h:"h.h.h.h.h.h.h.h."},A2:{k:"k.kkk.kkk.kkk.kk",s:"....s.......s...",h:"h.h.h.h.h.h.h.h."},B:{k:"k.kkk.kkk.kkk.kk",s:"....s.......s...",h:"o.h.o.h.o.h.o.h."},F:{k:"k.k.k.k.k.......",s:"....s...s.ss....",t:"............ttTT",h:"h.h.h.h........."}},eh=class extends Ar{constructor(t){super(t),this.stepDur=60/140/4,this.len=32*16,this.level=.6,this.send.gain.value=.07;let e=jc(16,.15);this.gtr=[-.7,.7].map(i=>{let r=this.g(1);return Ki(r,this.f("highpass",110,.7),this.shaper(e),this.f("highpass",95,.7),this.f("peaking",140,1,2),this.f("peaking",650,1.1,-5),this.f("peaking",2300,1.1,6),this.f("lowpass",5200,.8),this.f("lowpass",7500,.6),this.g(.17),this.pan(i),this.out),r}),this.bassIn=this.g(1),Ki(this.bassIn,this.shaper(jc(2.5)),this.f("lowpass",2200,.7),this.g(.2),this.out),this.leadIn=this.g(1);let n=this.g(.2);Ki(this.leadIn,this.shaper(jc(3)),this.f("lowpass",3800,.9),this.f("peaking",1700,1,3),n,this.out),n.connect(this.delay(this.stepDur*3,.3,.28,this.pan(.35,this.out))),this.lv=[{f:0,end:-1},{f:0,end:-1}]}guitar(t,e,n,i,r=1){let o=this.ctx,a=Tf*Math.pow(2,e/12),l=n*this.stepDur;for(let c=0;c<2;c++){let h=t+(c?.007:0),u=c?6:-5,f=o.createGain(),d=Lf(o.createBiquadFilter());d.type="lowpass";let p=h+(i?Math.min(l,.16):l)-.005;f.gain.setValueAtTime(0,h),i?(d.Q.value=1.2,d.frequency.setValueAtTime(1300,h),d.frequency.setTargetAtTime(380,h,.035),f.gain.linearRampToValueAtTime(.5*r,h+.002),f.gain.setTargetAtTime(0,h+.01,.06)):(d.Q.value=.7,d.frequency.setValueAtTime(4500,h),d.frequency.setTargetAtTime(2400,h,.3),f.gain.linearRampToValueAtTime(.55*r,h+.003),f.gain.setTargetAtTime(.4*r,h+.003,.2)),f.gain.setTargetAtTime(0,p,.008),f.connect(d),d.connect(this.gtr[c]);let x=p+.06;this.osc("sawtooth",a,h,x,f,u),this.osc("sawtooth",a,h,x,f,u+9),this.osc("sawtooth",a*1.4983,h,x,f,u-3),i||this.osc("sawtooth",a*2,h,x,f,u+4)}}bass(t,e,n,i){let r=this.ctx,o=Tf/2*Math.pow(2,e/12),a=t+(i?Math.min(n*this.stepDur,.14):n*this.stepDur)-.005,l=r.createGain(),c=this.f("lowpass",1400,2,null,!0);c.frequency.setValueAtTime(i?900:1500,t),c.frequency.setTargetAtTime(i?300:500,t,.06),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.6,t+.004),l.gain.setTargetAtTime(i?.25:.45,t+.004,.08),l.gain.setTargetAtTime(0,a,.012),c.connect(l),l.connect(this.bassIn),this.osc("sawtooth",o,t,a+.08,c),this.osc("sine",o,t,a+.08,l)}lead(t,e,n,i,r){let o=this.ctx,a=On(e),l=n*this.stepDur,c=t+l-.012,h=this.lv[r],u=Math.abs(h.end-t)<.03&&h.f>0,f=o.createGain();f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(.3*i,t+.01),f.gain.setTargetAtTime(.22*i,t+.01,.15),f.gain.setTargetAtTime(0,c,.025),f.connect(r?this.pan(-.3,this.leadIn):this.leadIn);let d=o.createOscillator();d.frequency.value=5.6;let p=o.createGain();p.gain.setValueAtTime(0,t),p.gain.linearRampToValueAtTime(a*.012,t+Math.min(.35,l)),d.connect(p),d.start(t),d.stop(c+.15);for(let x of[-9,9]){let g=o.createOscillator();g.type="sawtooth",g.detune.value=x,u?(g.frequency.setValueAtTime(h.f,t),g.frequency.exponentialRampToValueAtTime(a,t+.04)):g.frequency.setValueAtTime(a,t),p.connect(g.frequency),g.connect(f),g.start(t),g.stop(c+.15)}h.f=a,h.end=t+l}schedule(t,e){let n=t>>4,i=t&15,r=n>>3,o=n&7,a=r&1,l=a?X1:G1[W1[o]],c=a?q1[o]:0;for(let u of l){if(u.s!==i)continue;let f=u.semi==null?c:u.semi;this.guitar(e,f,u.len,u.pm,u.pm?.9:1),this.bass(e,f,u.len,u.pm)}if(a)for(let[u,f,d]of Y1[o])u===i&&(this.lead(e,f,d,1,0),r===3&&this.lead(e,K1(f,o===7?$1:Z1),d,.6,1));let h=o===7?na.F:a?na.B:r===2?na.A2:na.A;this.drums(h,i,e),i===0&&(o===0||a&&!(o&1))&&this.hit("crash",e,o===0?.6:.45,o&2?.3:-.3)}},J1=[{root:40,n:[52,55,59,64]},{root:36,n:[48,55,60,64]},{root:33,n:[45,52,57,60]},{root:35,n:[47,54,59,63]},{root:40,n:[52,55,59,64]},{root:36,n:[48,55,60,64]},{root:41,n:[53,57,60,65]},{root:35,n:[47,54,57,63]}],Q1=[0,1,2,3,2,1,2,3],nh=class extends Ar{constructor(t){super(t),this.stepDur=60/96/4,this.len=16*16,this.level=1.6,this.send.gain.value=.25,this.padIn=this.g(1);let e=this.f("lowpass",1e3,.6),n=this.ctx.createOscillator();n.frequency.value=.08;let i=this.g(350);n.connect(i),i.connect(e.frequency),n.start(),this._lfo=n,Ki(this.padIn,e,this.g(.8),this.out),this.arpIn=this.g(1);let r=this.g(.85);Ki(this.arpIn,this.f("lowpass",2600,.7),r,this.out),r.connect(this.delay(this.stepDur*3,.38,.35,this.pan(-.3,this.out))),this.bassIn=this.g(1),Ki(this.bassIn,this.f("lowpass",600,.7),this.g(.25),this.out)}pad(t,e,n){e.forEach((i,r)=>{let o=On(i),a=this.g(0);a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.06,t+1),a.gain.setTargetAtTime(0,t+n,.5),a.connect(this.pan(r&1?.4:-.4,this.padIn)),this.osc("sawtooth",o,t,t+n+3,a,-7),this.osc("sawtooth",o,t,t+n+3,a,7)})}pluck(t,e){let n=On(e),i=this.g(0,this.arpIn);i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.25,t+.003),i.gain.setTargetAtTime(0,t+.003,.22),this.osc("triangle",n,t,t+1.3,i);let r=this.g(.25,i);this.osc("sine",n*2,t,t+1.3,r)}bassNote(t,e,n){let i=this.g(0,this.bassIn);i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.5,t+.01),i.gain.setTargetAtTime(.3,t+.01,.2),i.gain.setTargetAtTime(0,t+n,.05),this.osc("triangle",On(e),t,t+n+.4,i),this.osc("sine",On(e),t,t+n+.4,i)}schedule(t,e){let n=t>>4,i=t&15,r=J1[n>>1&7];i===0&&!(n&1)&&this.pad(e,r.n,this.stepDur*32),i&1||this.pluck(e,r.n[Q1[(i>>1)+(n&1)*3&7]]+12),(i===0||i===8)&&this.bassNote(e,r.root,this.stepDur*7);let o=n&7;if(o>=2){let a=n===15?{k:"k.........k.....",s:"....r.......r...",h:"h.h.h.h.h.h.....",t:"............ttTT"}:{k:"k.........k.....",s:"....r.......r...",h:"h.h.h.h.h.h.h.ho"};this.drums(a,i,e,.6)}else i===0?this.hit("kick",e,.5):i&3||this.hit("hatC",e,.1,.25);i===0&&o===0&&this.hit("crash",e,.25,.3)}},j1=[[40,47,52],[40,48,55],[40,46,52],[40,47,54]],ih=class extends Ar{constructor(t){super(t),this.stepDur=.5,this.len=64,this.level=1.3,this.send.gain.value=.55,this.droneIn=this.g(1);let e=this.f("lowpass",650,2.5),n=this.ctx.createOscillator();n.frequency.value=.05;let i=this.g(320);n.connect(i),i.connect(e.frequency),n.start(),this._lfo=n,Ki(this.droneIn,e,this.g(1),this.out)}drone(t,e,n){e.forEach((i,r)=>{let o=this.g(0);o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.07,t+2.5),o.gain.setValueAtTime(.07,t+n-3),o.gain.linearRampToValueAtTime(0,t+n),o.connect(this.pan((r-1)*.4,this.droneIn)),this.osc("sawtooth",On(i),t,t+n+.1,o,-5),this.osc("sawtooth",On(i),t,t+n+.1,o,6),r===0&&this.osc("sine",On(i-12),t,t+n+.1,this.g(1.5,o))})}eerie(t,e,n){let i=this.g(0);i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.05,t+3),i.gain.setValueAtTime(.05,t+n-3),i.gain.linearRampToValueAtTime(0,t+n),i.connect(this.pan(Math.random()*1.2-.6,this.out));let r=this.osc("sine",On(e),t,t+n+.1,i),o=this.ctx.createOscillator();o.frequency.value=4.2;let a=this.g(On(e)*.006);o.connect(a),a.connect(r.frequency),o.start(t),o.stop(t+n+.1)}schedule(t,e){t%16===0&&this.drone(e,j1[t>>4&3],9.5),t===8&&this.eerie(e,83,8),t===40&&this.eerie(e,77,8),[6,21,30,44,55].includes(t)&&this.hit("boom",e,.9),(t===13||t===37)&&this.hit("rim",e,.25,t===13?-.6:.6,.35)}},Ef={level:eh,intermission:nh,menu:ih},ia=Object.freeze({stop(){},setPos(){},playing:!1}),ty=32,sa=160,ra=1400,oa=class{constructor(){this.ctx=null,this._buffers={},this._lastVar={},this._voices=[],this._warned=new Set,this._sfxVol=1,this._musicVol=1,this._lis={x:0,y:0,z:0,rx:1,rz:0},this._music=null,this._pendingMusic=null,this._timer=null,this._sfxReady=null}get ready(){return!!this.ctx}init(t){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume&&this.ctx.resume().catch(()=>{});return}let e=t;if(!e){let o=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!o){console.warn("[audio] Web Audio API not available");return}try{e=new o({latencyHint:"interactive"})}catch(a){console.warn("[audio] could not create AudioContext",a);return}}this.ctx=e,this._offline=!!t&&typeof OfflineAudioContext<"u"&&e instanceof OfflineAudioContext,this.master=e.createGain(),this.master.gain.value=.6;let n=this.compressor=e.createDynamicsCompressor();n.threshold.value=-10,n.knee.value=6,n.ratio.value=4,n.attack.value=.004,n.release.value=.2;let i=e.createGain();i.gain.value=.5;let r=e.createWaveShaper();r.curve=H1(),this.master.connect(n),n.connect(i),i.connect(r),r.connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=B1(e),this.reverbReturn=e.createGain(),this.reverbReturn.gain.value=.55,this.reverb.connect(this.reverbReturn),this.reverbReturn.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.sfxSend=e.createGain(),this.sfxSend.connect(this.reverb),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.musicSend=e.createGain(),this.musicSend.connect(this.reverb),this._applyVolumes(!0),this._drums=z1(e.sampleRate);for(let o of Object.keys(this._drums))this._drums[o]=this._toBuffer(this._drums[o]);if(this._sfxReady=this._genAll(),e.state==="suspended"&&e.resume&&!this._offline&&e.resume().catch(()=>{}),this._pendingMusic){let o=this._pendingMusic;this._pendingMusic=null,this.startMusic(o)}}_toBuffer(t){let e=this.ctx.createBuffer(1,t.length,this.ctx.sampleRate);return e.copyToChannel(t,0),e}async _genAll(){let t=this.ctx.sampleRate;for(let e of O1){let n=th[e],i=[];for(let r=0;r<n.variants;r++){try{let o=new Er(t,L1(e)+r*7919);i.push(this._toBuffer(wi(t,n.gen(o,r))))}catch(o){console.warn("[audio] failed to generate",e,o)}this._buffers[e]=i,this._offline||await new Promise(o=>setTimeout(o,0))}}return!0}_applyVolumes(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=(i,r)=>t?i.value=r:i.setTargetAtTime(r,e,.05);n(this.sfxBus.gain,.9*this._sfxVol),n(this.sfxSend.gain,this._sfxVol),n(this.musicBus.gain,.45*this._musicVol),n(this.musicSend.gain,.45*this._musicVol)}setSfxVolume(t){this._sfxVol=re(+t||0,0,1),this._applyVolumes(!1)}setMusicVolume(t){this._musicVol=re(+t||0,0,1),this._applyVolumes(!1)}setListener(t,e,n,i){let r=this._lis;if(r.x=t,r.y=e,r.z=n,r.rx=Math.cos(i),r.rz=-Math.sin(i),!this.ctx)return;let o=this.ctx.currentTime;for(let a of this._voices)a.pos&&this._updateVoice(a,o,!1)}_spatial(t){let e=this._lis,n=t.x-e.x,i=(t.y||0)-e.y,r=t.z-e.z,o=Math.sqrt(n*n+i*i+r*r),a;if(o<=sa)a=1;else if(o>=ra)a=0;else{let f=(ra-o)/(ra-sa);a=.5*f+.5*f*f*(3-2*f)}let l=Math.sqrt(n*n+r*r),c=l>.001?(n*e.rx+r*e.rz)/l:0;c*=.8*Math.min(1,o/96);let h=re((o-sa)/(ra-sa),0,1),u=2e4*Math.pow(2200/2e4,h);return{g:a,pan:c,fc:u,send:.12+.33*h}}_updateVoice(t,e,n){let i=this._spatial(t.pos),r=t.sp;!n&&r&&Math.abs(r.g-i.g)<.01&&Math.abs(r.pan-i.pan)<.01&&Math.abs(r.fc-i.fc)/r.fc<.03||(t.sp=i,t.g.gain.setTargetAtTime(t.vol*i.g,e,.03),t.pan.pan.setTargetAtTime(i.pan,e,.03),t.lp.frequency.setTargetAtTime(i.fc,e,.03),t.send.gain.setTargetAtTime(i.send,e,.03))}play(t,e){let n=th[t];if(!n)return this._warned.has(t)||(this._warned.add(t),console.warn(`[audio] unknown sound "${t}"`)),ia;if(!this.ctx)return ia;let i=this._buffers[t];if(!i||!i.length)return ia;e=e||{};let r=this.ctx,o=r.currentTime,a=!!e.loop,l=e.pos?{x:+e.pos.x||0,y:+e.pos.y||0,z:+e.pos.z||0}:null,c=(e.volume==null?1:Math.max(0,e.volume))*n.gain,h=null;if(l&&(h=this._spatial(l),!a&&h.g<.002))return ia;let u=0;if(i.length>1){let v=this._lastVar[t];u=Math.floor(Math.random()*i.length),u===v&&(u=(u+1+Math.floor(Math.random()*(i.length-1)))%i.length)}this._lastVar[t]=u;let f=0,d=null;for(let v of this._voices)v.name===t&&(f++,d||(d=v));for(f>=n.cap&&d&&this._kill(d);this._voices.length>=ty;){let v=this._voices.find(y=>!y.loop)||this._voices[0];this._kill(v)}let p=r.createBufferSource();p.buffer=i[u],p.loop=a;let x=e.pitchVar==null?.05:e.pitchVar;p.playbackRate.value=(e.rate||1)*(1+(Math.random()*2-1)*x);let g=r.createGain(),m=r.createGain(),_={src:p,g,send:m,lp:null,pan:null,pos:l,sp:h,vol:c,name:t,loop:a,done:!1};if(p.connect(g),l){let v=_.lp=r.createBiquadFilter();v.type="lowpass",v.frequency.value=h.fc,v.Q.value=.5;let y=_.pan=r.createStereoPanner();y.pan.value=h.pan,g.gain.value=c*h.g,m.gain.value=h.send,g.connect(v),v.connect(y),y.connect(this.sfxBus),y.connect(m)}else g.gain.value=c,m.gain.value=.1,g.connect(this.sfxBus),g.connect(m);return m.connect(this.sfxSend),p.onended=()=>this._release(_),p.start(o+Math.max(0,e.delay||0)),this._voices.push(_),{stop:()=>this._kill(_),setPos:v=>{!_.pos||_.done||!v||(_.pos={x:+v.x||0,y:+v.y||0,z:+v.z||0},this._updateVoice(_,r.currentTime,!1))},get playing(){return!_.done}}}_release(t){if(t.released)return;t.released=!0,t.done=!0;let e=this._voices.indexOf(t);e>=0&&this._voices.splice(e,1);try{t.src.disconnect(),t.g.disconnect(),t.send.disconnect(),t.lp&&t.lp.disconnect(),t.pan&&t.pan.disconnect()}catch{}}_kill(t){if(!t||t.done)return;t.done=!0;let e=this._voices.indexOf(t);e>=0&&this._voices.splice(e,1);let n=this.ctx.currentTime;try{t.g.gain.cancelScheduledValues(n),t.g.gain.setValueAtTime(t.g.gain.value,n),t.g.gain.setTargetAtTime(0,n,.008),t.src.stop(n+.05)}catch{this._release(t)}}startMusic(t){if(!Ef[t]){console.warn(`[audio] unknown music track "${t}"`);return}if(!this.ctx){this._pendingMusic=t;return}if(this._music&&this._music.name===t)return;this._fadeOutMusic(.35);let e=new Ef[t](this);e.name=t;let n=this.ctx.currentTime+.06;e.nextTime=n,e.fadeIn(n,t==="level"?.05:.4),this._music=e,!this._timer&&!this._offline&&(this._timer=setInterval(()=>this._tick(),25)),this._tick()}stopMusic(){this._pendingMusic=null,this._fadeOutMusic(.25)}_fadeOutMusic(t){let e=this._music;if(!e)return;this._music=null;let n=this.ctx.currentTime;e.out.gain.cancelScheduledValues(n),e.out.gain.setValueAtTime(e.out.gain.value,n),e.out.gain.setTargetAtTime(0,n,t);let i=()=>{try{e.out.disconnect(),e.send.disconnect(),e._lfo&&e._lfo.stop()}catch{}};this._offline||(setTimeout(i,t*8e3+1500),this._timer&&(clearInterval(this._timer),this._timer=null))}_tick(t){let e=this._music;if(!e)return;let n=this.ctx.currentTime,i=t??n+.12;for(t==null&&e.nextTime<n-.2&&(e.nextTime=n+.03);e.nextTime<i;)e.schedule(e.step,e.nextTime),e.nextTime+=e.stepDur,e.step=(e.step+1)%e.len}};var Rr=new P;function pn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Rr.copy(t),Rr[n]=0,Rr.normalize();let c=.5*o/(o+a),h=1-Rr.angleTo(s)/l;return Math.sign(Rr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var aa=class extends Sn{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new P,l=new P,c=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,p=new P,x=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:p.set(1,0,0),f[m+0]=pn(p,l,"z","y",r,n),f[m+1]=1-pn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),f[m+0]=1-pn(p,l,"z","y",r,n),f[m+1]=1-pn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),f[m+0]=1-pn(p,l,"x","z",r,t),f[m+1]=pn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),f[m+0]=1-pn(p,l,"x","z",r,t),f[m+1]=1-pn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),f[m+0]=1-pn(p,l,"x","y",r,t),f[m+1]=1-pn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),f[m+0]=pn(p,l,"x","y",r,t),f[m+1]=1-pn(p,l,"y","x",r,e);break}}};function Uf(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Df(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Df(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Df(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Xe(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function rh(s){let t=new Map;for(let e of s.children)e.isMesh&&!e.isSprite&&e.children.length===0&&!e.userData.keep&&(t.has(e.material)||t.set(e.material,[]),t.get(e.material).push(e));for(let[e,n]of t){if(n.length<2)continue;let i=n.map(a=>{a.updateMatrix();let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();l.applyMatrix4(a.matrix);for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);return l}),r=Uf(i,!1);if(!r)continue;let o=new wt(r,e);o.castShadow=!0,o.receiveShadow=!0;for(let a of n)s.remove(a);s.add(o)}for(let e of[...s.children])(!e.isMesh||e.children.length)&&rh(e)}var B={};function ee(s,t=.7,e=0,n={}){return new ke({color:s,roughness:t,metalness:e,...n})}function Qi(s,t=2.5){return new ke({color:0,emissive:s,emissiveIntensity:t,roughness:.5})}function Ff(s){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createImageData(128,128),r=s==="cloth"?11:5,o=()=>(r=r*16807%2147483647,r/2147483647),a=new Float32Array(128*128);for(let c=0;c<128*128;c++)a[c]=o();for(let c=0;c<128;c++)for(let h=0;h<128;h++){let u;if(s==="cloth")u=(h%4<2!=c%4<2?.62:.5)+(a[c*128+h]-.5)*.25;else{let p=0;for(let x=-2;x<=2;x++)p+=a[(c+x+128)%128*128+(h+x*3+128)%128];u=.55+(p/5-.5)*.5+(a[c*128+h]>.93?-.25:0)}let f=Math.max(0,Math.min(255,u*255)),d=(c*128+h)*4;i.data[d]=i.data[d+1]=i.data[d+2]=f,i.data[d+3]=255}n.putImageData(i,0,0);let l=new Ds(e);return l.wrapS=l.wrapT=Ln,l.repeat.set(3,3),l}function Ci(){if(B.ready)return;B.ready=!0,B.zSkin=ee(11048064,.62),B.zShirt=ee(5596730,.85),B.zPants=ee(6114620,.9),B.boot=ee(2301208,.55,.1),B.belt=ee(3811866,.6),B.hair=ee(3023384,.9),B.redEye=Qi(16722442,4),B.gunMetal=ee(2763568,.38,.85),B.gunMetalLight=ee(5264220,.35,.9),B.wood=ee(7028511,.6,0),B.sArmor=ee(1973794,.45,.3),B.sPants=ee(4934478,.85),B.sSkin=ee(11565666,.6),B.blood=ee(5899782,.35,0),B.flesh=ee(9054754,.5),B.impSkin=ee(8015667,.68),B.impBelly=ee(10121296,.7),B.bone=ee(14207398,.5),B.impEye=Qi(16752656,5),B.mouth=Qi(6295552,1.2),B.marineGreen=ee(4151852,.6,.1),B.glove=ee(3813416,.65),B.marineSkin=ee(12618344,.55),B.brass=ee(12619818,.3,.9),B.shellRed=ee(10099218,.45,.1),B.white=ee(15263968,.5),B.redCross=ee(12587024,.5,0,{emissive:3145728}),B.barrel=ee(4086314,.5,.45),B.barrelRim=ee(3159594,.45,.7),B.slimeTop=new ke({color:2121744,emissive:5308192,emissiveIntensity:1.2,roughness:.2}),B.lampPole=ee(3816e3,.4,.8),B.lampGlow=Qi(14674687,6),B.hBonus=new ke({color:2113791,emissive:2773247,emissiveIntensity:1.6,roughness:.1,metalness:0,transparent:!0,opacity:.85}),B.aBonus=ee(6986304,.3,.8,{emissive:2113552,emissiveIntensity:1}),B.gArmor=ee(4033068,.35,.6,{emissive:801286,emissiveIntensity:1}),B.bArmor=ee(2771640,.35,.6,{emissive:661072,emissiveIntensity:1}),B.ammoBox=ee(4868650,.7,.2);let s=Ff("skin"),t=Ff("cloth");for(let e of["zSkin","sSkin","impSkin","impBelly","marineSkin","flesh"])B[e].bumpMap=s,B[e].bumpScale=1.6;for(let e of["zShirt","zPants","sPants","sArmor","marineGreen","glove","belt"])B[e].bumpMap=t,B[e].bumpScale=1.2;B.zSkin.color.set(9403240),B.redEye.emissiveIntensity=2.5}function oh(s,t,e,n=10){let i=new wt(new Do(s,t,4,n),e);return i.castShadow=!0,i}function kt(s,t,e,n,i){let r=new wt(new aa(s,t,e,2,n),i);return r.castShadow=!0,r}function Ie(s,t,e,n){let i=new wt(new Sn(s,t,e),n);return i.castShadow=!0,i}function Me(s,t,e,n,i=14){let r=new wt(new xr(s,t,e,i),n);return r.castShadow=!0,r}function ln(s,t,e=14,n=10){let i=new wt(new Xi(s,e,n),t);return i.castShadow=!0,i}function Ai(s,t,e,n=8){let i=new wt(new Uo(s,t,n),e);return i.castShadow=!0,i}function Ri(s,t,e){let n=new Wt,i=oh(s,t,e);return i.position.y=-t/2,n.add(i),n}var ah=null;function Nf(s){ah=s,Ci()}function Ys(s,t,e,n=!0){let i=new mr({map:ah[s].map,color:t,transparent:!0,depthWrite:!1,blending:n?mi:Pn}),r=new Ro(i);return r.scale.set(e,e,1),r}var la=class{constructor(t){Ci(),this.kind=t,this.root=new Wt,this.body=new Wt,this.root.add(this.body),this.flash=0,t==="imp"?this.buildImp():this.buildHuman(t),rh(this.body),this.meshes=[],this.body.traverse(e=>{e.isMesh&&this.meshes.push(e)}),this.shadows=!0,this.deadT=0,this.pool=null}buildHuman(t){let e=t==="sergeant",n=e?B.sSkin:B.zSkin,i=e?B.sArmor:B.zShirt,r=e?B.sPants:B.zPants,o=new Wt;o.position.y=27,this.body.add(o),this.hipY=27;let a=M=>{let b=Ri(3.6,9,r);b.position.set(M*4.6,0,0),o.add(b);let E=Ri(3.1,9.5,r);E.position.y=-13,b.add(E);let L=kt(6.4,4.6,10,1.4,B.boot);return L.position.set(0,-13.2,1.8),E.add(L),{leg:b,shin:E}},l=a(-1),c=a(1),h=kt(15.5,3,9.4,1.2,B.belt);h.position.y=1,o.add(h);let u=Ie(3,2.2,.6,B.gunMetalLight);u.position.set(0,1,4.8),o.add(u);let f=kt(14.5,5,8.6,2,r);f.position.y=-1.8,o.add(f);let d=new Wt;d.position.y=2,o.add(d);let p=kt(16.5,17,9.5,3,i);if(p.position.y=9.5,d.add(p),e){let M=kt(14,9,2.2,1,B.gunMetal);M.position.set(0,12,4.6),d.add(M);for(let b of[-1,1]){let E=ln(4.4,B.sArmor);E.scale.set(1.1,.75,1),E.position.set(b*8.6,17.2,0),d.add(E)}}else{let M=kt(5,4,.6,.3,B.blood);M.position.set(-3,7,4.8),M.rotation.z=.4,d.add(M);let b=Ie(1.6,17,.5,B.belt);b.position.set(2.5,9.5,4.9),b.rotation.z=-.5,d.add(b)}let x=Me(2.6,3,3.4,n);x.position.y=19.4,d.add(x);let g=new Wt;g.position.y=24.8,d.add(g);let m=ln(5.4,n,18,14);m.scale.set(.95,1.06,1.02),g.add(m);let _=kt(7.6,3.4,6.4,1.4,n);if(_.position.set(0,-3.6,1),g.add(_),!e){let M=ln(5.6,B.hair,16,10);M.scale.set(1,.65,1.04),M.position.set(0,2.2,-.6),g.add(M)}for(let M of[-1,1]){let b=ln(.95,B.redEye,8,6);b.position.set(M*2.1,.6,4.6),g.add(b);let E=Ie(2.6,.8,1.2,e?n:B.hair);E.position.set(M*2.1,2,4.6),E.rotation.z=-M*.35,g.add(E)}let v=Ie(3.4,.7,.5,B.mouth);v.position.set(0,-3.4,4.2),g.add(v);let y=M=>{let b=Ri(2.9,8.6,i);b.position.set(M*9.8,16.2,0),d.add(b);let E=Ri(2.5,8.6,n);E.position.y=-11.4,b.add(E);let L=ln(2.6,n);return L.position.y=-11.6,E.add(L),{arm:b,fore:E}},C=y(-1),T=y(1),R=new Wt;if(e){let M=Me(.9,.9,24,B.gunMetal,10);M.rotation.x=Math.PI/2,M.position.z=9,R.add(M);let b=Me(.8,.8,18,B.gunMetalLight,8);b.rotation.x=Math.PI/2,b.position.set(0,-1.7,7),R.add(b);let E=kt(2.6,2.6,7,.8,B.wood);E.position.set(0,-1.7,11),R.add(E);let L=kt(2.6,3.6,8,.6,B.gunMetal);L.position.set(0,-.6,-1.5),R.add(L);let D=kt(2.4,4,9,1,B.wood);D.position.set(0,-2,-9),D.rotation.x=.15,R.add(D)}else{let M=Me(.7,.7,14,B.gunMetal,8);M.rotation.x=Math.PI/2,M.position.z=11,R.add(M);let b=kt(2.6,4.2,14,.6,B.gunMetal);b.position.set(0,-.5,2),R.add(b);let E=kt(1.8,6,2.6,.4,B.gunMetalLight);E.position.set(0,-4.5,4),E.rotation.x=.2,R.add(E);let L=kt(2.2,4.4,8,1,B.wood);L.position.set(0,-1.6,-8),R.add(L)}R.position.set(0,-11,1.5),R.rotation.x=Math.PI/2,T.fore.add(R);let S=Ys("MUZZLE",16769184,14);S.visible=!1,S.position.set(0,0,e?22:19),R.add(S),this.muzzle=S,Object.assign(this,{hips:o,torso:d,head:g,legL:l.leg,legR:c.leg,shinL:l.shin,shinR:c.shin,armL:C.arm,armR:T.arm,foreL:C.fore,foreR:T.fore,gun:R})}buildImp(){let t=new Wt;t.position.y=25,this.body.add(t),this.hipY=25;let e=_=>{let v=Ri(3.8,8.5,B.impSkin);v.position.set(_*4.8,0,0),t.add(v),v.rotation.x=-.25;let y=Ri(3,10,B.impSkin);y.position.y=-12.5,y.rotation.x=.45,v.add(y);let C=kt(5.5,3.2,9,1.4,B.impSkin);C.position.set(0,-13,2.4),y.add(C);for(let R=-1;R<=1;R++){let S=Ai(.7,3,B.bone,5);S.rotation.x=Math.PI/2,S.position.set(R*1.7,-13.6,7.4),y.add(S)}let T=Ai(1,4,B.bone,6);return T.position.set(0,-12,2.6),T.rotation.x=1.2,v.add(T),{leg:v,shin:y}},n=e(-1),i=e(1),r=kt(13.5,6,8.5,2.5,B.impSkin);r.position.y=-1,t.add(r);let o=new Wt;o.position.y=2,o.rotation.x=.32,t.add(o),this.torsoBaseX=.32;let a=kt(17,17,10.5,4,B.impSkin);a.position.y=9.5,o.add(a);let l=kt(11,10,2,1,B.impBelly);l.position.set(0,7,4.9),o.add(l);for(let _=0;_<5;_++){let v=Ai(1.4,6,B.bone,6);v.position.set((_%2?1:-1)*2.5,6+_*3,-5.4),v.rotation.x=-1,o.add(v)}for(let _ of[-1,1])for(let v=0;v<3;v++){let y=Ai(1.2,5.5,B.bone,6);y.position.set(_*(8+v*1.4),17+v*.5,-1+v*1.5),y.rotation.z=-_*.9,o.add(y)}let c=Me(3,3.6,4,B.impSkin);c.position.set(0,19.5,1),o.add(c);let h=new Wt;h.position.set(0,24,2.5),o.add(h),this.headBaseX=-.3,h.rotation.x=-.3;let u=ln(5.6,B.impSkin,18,14);u.scale.set(1,.95,1.08),h.add(u);let f=kt(7,4.4,5,1.6,B.impSkin);f.position.set(0,-2.5,3.8),h.add(f);let d=Ie(5.5,.9,.6,B.mouth);d.position.set(0,-3.4,6.35),h.add(d);for(let _=-2;_<=2;_++){let v=Ai(.35,1.3,B.bone,4);v.rotation.x=Math.PI,v.position.set(_*1.1,-2.6,6.3),h.add(v)}for(let _ of[-1,1]){let v=ln(1.25,B.impEye,8,6);v.position.set(_*2.4,1,4.6),v.scale.set(1.2,.8,1),h.add(v);let y=Ai(1.1,5.5,B.bone,6);y.position.set(_*3.6,4.4,-.5),y.rotation.set(-.6,0,-_*.5),h.add(y);let C=Ie(3,1,2,B.impSkin);C.position.set(_*2.4,2.3,4.4),C.rotation.z=_*.4,h.add(C)}let p=_=>{let v=Ri(3.2,9.5,B.impSkin);v.position.set(_*10.5,16.5,0),o.add(v);let y=Ri(2.8,10.5,B.impSkin);y.position.y=-12.6,v.add(y);let C=Ai(1,4,B.bone,6);C.position.set(0,-12.6,-2.6),C.rotation.x=-2.2,v.add(C);let T=ln(3,B.impSkin);T.position.y=-14,y.add(T);for(let R=-1;R<=1;R++){let S=Ai(.6,4.5,B.bone,5);S.position.set(R*1.6,-17.5,1),S.rotation.x=Math.PI-.3,y.add(S)}return{arm:v,fore:y,hand:T}},x=p(-1),g=p(1);g.arm.rotation.z=.15,x.arm.rotation.z=-.15;let m=Ys("FIRE",16752704,12);m.visible=!1,m.position.y=-15,g.fore.add(m),this.handBall=m,Object.assign(this,{hips:t,torso:o,head:h,legL:n.leg,legR:i.leg,shinL:n.shin,shinR:i.shin,armL:x.arm,armR:g.arm,foreL:x.fore,foreR:g.fore})}setShadows(t){if(t!==this.shadows){this.shadows=t;for(let e of this.meshes)e.castShadow=t}}firePoint(t){return(this.muzzle||this.handBall).getWorldPosition(t)}update(t,e){let n=this.kind==="imp",i=e.t,r=e.walkPhase;this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.torso.rotation.set(n?this.torsoBaseX:0,0,0),this.head.rotation.set(n?this.headBaseX:0,0,0),this.hips.position.y=this.hipY,this.muzzle&&(this.muzzle.visible=!1),this.handBall&&(this.handBall.visible=!1);let o=0,a=n?.45:.08,l=a,c=0,h=0,u=-.15,f=-.15,d=n?-.15:-.08,p=n?.15:.08;if(!n&&(h=-.9,f=-.7,c=-.75,u=-1,d=.35),e.anim==="walk"||e.anim==="idle"){let g=e.anim==="walk"?1:0,m=Math.sin(r);o=m*.62*g,a+=Math.max(0,Math.sin(r+1.2))*.9*g,l+=Math.max(0,Math.sin(r+1.2+Math.PI))*.9*g,this.hips.position.y+=Math.abs(Math.cos(r))*1.4*g-.6*g,this.torso.rotation.y=m*.12*g,n?(c=m*.7*g,h=-m*.7*g,u=-.5,f=-.5):(h+=m*.08*g,c+=m*.08*g);let _=Math.sin(e.time*2.2)*.03;this.torso.rotation.x+=_,this.head.rotation.y=e.anim==="idle"?Math.sin(e.time*.7)*.25:0}else if(e.anim==="attack"){if(n){let g=Math.min(1,i/e.fireAt);if(i<e.fireAt){h=-2.6*g,f=-1.2*g,p=.5*g,this.torso.rotation.y=-.4*g,this.handBall.visible=!0;let m=3+9*g;this.handBall.scale.set(m,m,1)}else{let m=Math.min(1,(i-e.fireAt)/.15);h=-2.6+3.6*m,f=-1.2+1.1*m,p=.5,this.torso.rotation.y=-.4+.75*m,this.torso.rotation.x+=.2*m}c=-.6,u=-.8,this.head.rotation.x=-.1}else if(h=-1.5+(e.aimPitch||0),f=-.08,c=-1.25+(e.aimPitch||0),u=-.55,d=.55,p=.05,this.torso.rotation.y=-.1,this.flash>0){this.muzzle.visible=!0;let g=10+Math.random()*8;this.muzzle.scale.set(g,g,1),this.muzzle.material.rotation=Math.random()*6.28,h-=.15,this.torso.rotation.x-=.06}}else if(e.anim==="melee"){let g=Math.min(1,i/.25);h=-2.4+3.2*g,f=-.9+.6*g,p=.4,c=-2*(1-g),u=-.6,this.torso.rotation.x+=.25*g}else if(e.anim==="pain"){let g=Math.max(0,1-i/.25);this.torso.rotation.x-=.45*g,this.head.rotation.x-=.5*g,c=n?.8*g:c-.6*g,h=n?.6*g:h-.5*g,d-=.5*g,p+=.5*g}else if(e.anim==="dead"){let g=Math.min(1,i/.6),m=g*g*(3-2*g),_=n?1:-1;if(this.body.rotation.x=_*m*Math.PI/2*.98,this.body.position.y=m*(n?4:4.5),this.body.position.z=-_*m*2,a=.08+m*.6,l=.08+m*.2,o=m*.25,c=-m*2.6,h=-m*2.2,d=-m*.6,p=m*.8,u=-m*.4,f=-m*.2,this.head.rotation.x=_*m*.4,this.head.rotation.y=m*.5,this.pool){let v=Math.min(1,i/2.5);this.pool.scale.setScalar(.2+v*.8),this.pool.visible=!0}}this.legL.rotation.x=-o,this.legR.rotation.x=o,n&&e.anim!=="dead"&&(this.legL.rotation.x-=.25,this.legR.rotation.x-=.25),this.shinL.rotation.x=a,this.shinR.rotation.x=l,this.armL.rotation.set(c,0,d),this.armR.rotation.set(h,0,p),this.foreL.rotation.x=u,this.foreR.rotation.x=f,this.flash>0&&(this.flash-=t)}addBloodPool(){let t=ah.BLOODPOOL,e=new ke({map:t.map,transparent:!0,depthWrite:!1,roughness:.15,metalness:0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),n=new wt(new fn(44,44),e);n.rotation.x=-Math.PI/2,n.rotation.z=Math.random()*6.28,n.position.set(0,.35,this.kind==="imp"?12:-14),n.visible=!1,n.receiveShadow=!0,this.root.add(n),this.pool=n}gib(){this.body.visible=!1;let t=new Wt,e=[B.flesh,B.blood,this.kind==="imp"?B.impSkin:B.flesh];for(let i=0;i<9;i++){let r=ln(2+Math.random()*3.5,e[i%3],8,6);r.scale.y=.5,r.position.set((Math.random()-.5)*22,1,(Math.random()-.5)*22),t.add(r)}let n=ln(4,this.kind==="imp"?B.impSkin:B.zSkin,10,8);n.position.set(4,3,-3),t.add(n),this.root.add(t),this.pool||this.addBloodPool(),this.pool.visible=!0,this.pool.scale.setScalar(1.2)}};function ha(s){Ci();let t=new Wt,e=!0,n=!0,i=null;switch(s){case"barrel":{e=!1,n=!1;let r=Me(12.5,12.5,32,B.barrel,20);r.position.y=16,t.add(r);for(let l of[3,16,29]){let c=new wt(new ti(12.7,.9,6,24),B.barrelRim);c.rotation.x=Math.PI/2,c.position.y=l,c.castShadow=!0,t.add(c)}let o=Me(11.8,11.8,1,B.slimeTop,20);o.position.y=32.2,t.add(o);let a=new wt(new ti(12,1.2,6,24),B.barrelRim);a.rotation.x=Math.PI/2,a.position.y=32.6,t.add(a),t.userData.slime=o;break}case"lamp":{e=!1,n=!1;let r=Me(9,12,6,B.lampPole,16);r.position.y=3,t.add(r);let o=Me(2.2,2.6,58,B.lampPole,10);o.position.y=34,t.add(o);let a=Me(6.5,6.5,18,new ke({color:2236968,metalness:.8,roughness:.4,wireframe:!0}),8);a.position.y=72,t.add(a);let l=oh(4,12,B.lampGlow,12);l.position.y=72,l.castShadow=!1,t.add(l);let c=Me(7,7,2,B.lampPole,16);c.position.y=82,t.add(c);let h=Me(7,7,2,B.lampPole,16);h.position.y=62,t.add(h);break}case"clip":{let r=kt(4,11,7,.8,B.gunMetal);r.position.y=6,r.rotation.z=.12,t.add(r);for(let o=0;o<2;o++){let a=Me(1,1,3,B.brass,8);a.rotation.z=Math.PI/2,a.position.set(.6,12.3,-1.5+o*3),t.add(a)}break}case"shells":{for(let r=0;r<4;r++){let o=new Wt,a=Me(1.6,1.6,7,B.shellRed,10);a.position.y=3.5,o.add(a);let l=Me(1.75,1.75,2,B.brass,10);l.position.y=1,o.add(l),o.position.set(r%2*3.8-1.9,0,Math.floor(r/2)*3.8-1.9),t.add(o)}break}case"shellbox":{let r=kt(20,9,12,1,B.ammoBox);r.position.y=4.5,t.add(r);let o=Ie(20.4,2.4,12.4,B.shellRed);o.position.y=6,t.add(o);for(let a=0;a<5;a++){let l=Me(1.6,1.6,2,B.brass,8);l.position.set(-7+a*3.5,9.5,0),t.add(l)}break}case"bullets":{let r=kt(16,9,10,1,B.ammoBox);r.position.y=4.5,t.add(r);break}case"stim":{let r=kt(10,7,6,1.2,B.white);r.position.y=3.5,t.add(r);let o=Ie(6,1.8,6.3,B.redCross);o.position.y=4,t.add(o);let a=Ie(1.8,5,6.3,B.redCross);a.position.y=4,t.add(a);break}case"medi":{let r=kt(22,12,9,1.5,B.white);r.position.y=6,t.add(r);let o=Ie(10,3,9.4,B.redCross);o.position.y=6,t.add(o);let a=Ie(3,9,9.4,B.redCross);a.position.y=6,t.add(a);let l=new wt(new ti(3,.8,6,12,Math.PI),B.gunMetal);l.position.y=12,t.add(l);break}case"hbonus":{let r=ln(4.5,B.hBonus,14,10);r.position.y=6,t.add(r);let o=Me(1.6,1.8,4,B.hBonus,10);o.position.y=11.5,t.add(o);let a=Me(1.4,1.4,1.6,B.white,8);a.position.y=14,t.add(a),i=3166463;break}case"abonus":{let r=new wt(new Xi(6,16,10,0,Math.PI*2,0,Math.PI/2),B.aBonus);r.position.y=2,r.castShadow=!0,t.add(r);let o=Ie(8,2,3,Qi(4259648,2));o.position.set(0,4,4.8),t.add(o);let a=new wt(new ti(6,.8,6,18),B.aBonus);a.rotation.x=Math.PI/2,a.position.y=2,t.add(a);break}case"garmor":case"barmor":{let r=s==="garmor"?B.gArmor:B.bArmor,o=kt(22,22,9,3,r);o.position.y=14,t.add(o);for(let c of[-1,1]){let h=ln(6,r,12,8);h.scale.set(1.1,.6,1),h.position.set(c*11,23,0),t.add(h)}let a=kt(14,8,2,1,r);a.position.set(0,18,4.8),t.add(a);let l=new wt(new ti(4.5,1.4,6,14),r);l.rotation.x=Math.PI/2,l.position.y=25,t.add(l),i=s==="garmor"?4259648:4219135;break}case"shotgun":{let r=kf();r.scale.setScalar(36),r.rotation.y=Math.PI/2,r.position.y=4,t.add(r);break}case"chaingun":{let r=zf();r.scale.setScalar(34),r.rotation.y=Math.PI/2,r.position.y=6,t.add(r);break}default:{let r=Ie(8,8,8,B.white);r.position.y=4,t.add(r)}}return rh(t),t.traverse(r=>{r.isMesh&&(r.receiveShadow=!0)}),{group:t,spin:e,bob:n,lightColor:i}}function Of(){let s=new Wt,t=Ys("FIRE",16760944,16),e=Ys("FLARE",16732176,40);return s.add(e),s.add(t),s.userData.core=t,s.userData.halo=e,s}function ey(){Ci();let s=new Wt,t=kt(.034,.036,.2,.006,B.gunMetalLight);t.position.set(0,.018,-.1),s.add(t);let e=kt(.032,.022,.17,.004,B.gunMetal);e.position.set(0,-.008,-.09),s.add(e);let n=kt(.03,.1,.045,.008,B.gunMetal);n.position.set(0,-.06,-.012),n.rotation.x=-.22,s.add(n);let i=new wt(new ti(.018,.004,6,12,Math.PI),B.gunMetal);i.rotation.set(0,Math.PI/2,Math.PI),i.position.set(0,-.02,-.06),s.add(i);let r=Ie(.006,.008,.01,B.gunMetal);r.position.set(0,.04,-.19),s.add(r);let o=Ie(.022,.008,.008,B.gunMetal);o.position.set(0,.04,-.01),s.add(o);let a=Me(.006,.006,.01,Qi(0,0),8);return a.rotation.x=Math.PI/2,a.position.set(0,.016,-.2),s.add(a),s.userData.slide=t,s}function kf(){Ci();let s=new Wt,t=Me(.013,.013,.62,B.gunMetal,12);t.rotation.x=Math.PI/2,t.position.set(0,.02,-.42),s.add(t);let e=Me(.011,.011,.5,B.gunMetalLight,10);e.rotation.x=Math.PI/2,e.position.set(0,-.008,-.38),s.add(e);let n=kt(.045,.06,.2,.008,B.gunMetal);n.position.set(0,0,-.05),s.add(n);let i=Ie(.002,.02,.06,Qi(0,0));i.position.set(.0235,.008,-.05),s.add(i);let r=kt(.04,.07,.26,.012,B.wood);r.position.set(0,-.03,.17),r.rotation.x=.14,s.add(r);let o=kt(.034,.06,.05,.01,B.wood);o.position.set(0,-.05,.03),o.rotation.x=-.4,s.add(o);let a=new Wt,l=kt(.042,.04,.15,.012,B.wood);a.add(l);for(let h=0;h<5;h++){let u=Ie(.044,.004,.006,B.belt);u.position.set(0,-.018,-.06+h*.03),a.add(u)}a.position.set(0,-.012,-.3),s.add(a);let c=ln(.004,B.brass,6,4);return c.position.set(0,.036,-.72),s.add(c),s.userData.pump=a,s}function zf(){Ci();let s=new Wt,t=new Wt;for(let l=0;l<6;l++){let c=l/6*Math.PI*2,h=Me(.008,.008,.5,B.gunMetal,8);h.rotation.x=Math.PI/2,h.position.set(Math.cos(c)*.025,Math.sin(c)*.025,0),t.add(h)}for(let l of[-.2,.05,.2]){let c=Me(.036,.036,.014,B.gunMetalLight,14);c.rotation.x=Math.PI/2,c.position.z=l,t.add(c)}t.position.set(0,0,-.38),s.add(t);let e=kt(.09,.09,.22,.015,B.gunMetal);e.position.set(0,-.005,-.04),s.add(e);let n=kt(.03,.03,.12,.008,B.gunMetalLight);n.position.set(0,.07,-.05),s.add(n);let i=Ie(.02,.04,.02,B.gunMetalLight);i.position.set(0,.05,-.1),s.add(i);let r=Ie(.02,.04,.02,B.gunMetalLight);r.position.set(0,.05,0),s.add(r);let o=kt(.035,.08,.05,.01,B.belt);o.position.set(0,-.08,.04),o.rotation.x=-.3,s.add(o);let a=kt(.05,.07,.08,.01,B.ammoBox);return a.position.set(-.07,-.02,-.03),s.add(a),s.userData.spin=t,s}function Cr(s=!0){Ci();let t=new Wt,e=oh(.034,.24,B.marineGreen,12);e.rotation.x=Math.PI/2,e.position.z=.16,t.add(e);let n=kt(.08,.05,.12,.02,B.marineGreen);n.position.set(0,.02,.26),t.add(n);let i=kt(.05,.045,.06,.015,s?B.glove:B.marineSkin);return i.position.set(0,0,0),t.add(i),t}var ca=class{constructor(t){Ci(),this.root=new Wt,this.models={};{let e=new Wt,n=Cr(!1),i=new Wt,r=kt(.07,.06,.075,.02,B.marineSkin);i.add(r);for(let a=0;a<4;a++){let l=kt(.016,.022,.03,.007,B.marineSkin);l.position.set(-.025+a*.017,.012,-.042),i.add(l)}let o=kt(.02,.02,.05,.008,B.marineSkin);o.position.set(-.04,-.012,-.02),o.rotation.y=.5,i.add(o),n.add(i),n.children[2].visible=!1,e.add(n),e.position.set(.1,-.12,-.24),e.rotation.set(.35,.3,0),e.userData.arm=n,this.models.fist=e}{let e=new Wt,n=ey(),i=Cr(!0);i.position.set(0,-.06,-.01),i.rotation.x=.95,e.add(i),e.add(n),e.position.set(0,-.105,-.36),e.rotation.x=.06,e.userData.gun=n,this.models.pistol=e}{let e=new Wt,n=kf(),i=Cr(!0);i.position.set(0,-.06,.04),i.rotation.x=.9,n.add(i);let r=Cr(!0);r.position.set(-.01,-.03,0),r.rotation.set(1.1,-.35,0),n.userData.pump.add(r),e.add(n),e.position.set(0,-.115,-.2),e.rotation.x=.07,e.userData.gun=n,this.models.shotgun=e}{let e=new Wt,n=zf(),i=Cr(!0);i.position.set(0,-.1,.05),i.rotation.x=.9,n.add(i),e.add(n),e.position.set(0,-.125,-.24),e.rotation.x=.05,e.userData.gun=n,this.models.chaingun=e}for(let e in this.models)this.models[e].visible=!1,this.root.add(this.models[e]),this.models[e].userData.base=this.models[e].position.clone(),this.models[e].userData.baseRot=this.models[e].rotation.clone();this.flash=Ys("MUZZLE",16769696,.25),this.flash.visible=!1,this.root.add(this.flash),this.flashGlow=Ys("FLARE",16748608,.6),this.flashGlow.visible=!1,this.root.add(this.flashGlow),this.current=null,this.spinAngle=0}show(t){for(let e in this.models)this.models[e].visible=e===t;this.current=t}update(t){t.name!==this.current&&this.show(t.name);let e=this.models[t.name];if(!e)return;let n=e.userData.base,i=e.userData.baseRot;e.position.copy(n),e.rotation.copy(i),e.position.x+=t.bobX,e.position.y+=t.bobY-(1-t.raise)*.35,e.rotation.x+=t.swayPitch||0,e.rotation.y+=t.swayYaw||0;let r=t.fireT,o=e.userData.gun,a=null;if(this.flash.visible=!1,this.flashGlow.visible=!1,t.name==="fist"){if(r<.32){let l=r<.1?r/.1:1-(r-.1)/.22;e.position.z-=.17*l,e.position.x-=.09*l,e.position.y+=.04*l,e.rotation.y-=.3*l}}else if(t.name==="pistol"){if(r<.25){let l=Math.exp(-r*22);e.position.z+=.05*l,e.rotation.x+=.35*l,o.userData.slide.position.z=-.1+.03*Math.exp(-r*30)}else o.userData.slide.position.z=-.1;a=[0,.016,-.24]}else if(t.name==="shotgun"){if(r<1){let l=Math.exp(-r*12);e.position.z+=.1*l,e.rotation.x+=.4*l;let c=(r-.32)/.43;if(c>0&&c<1){let h=Math.sin(c*Math.PI);o.userData.pump.position.z=-.3+.1*h,e.rotation.z+=.25*h,e.rotation.y-=.12*h,e.position.x-=.03*h,e.position.y-=.02*h}else o.userData.pump.position.z=-.3}else o.userData.pump.position.z=-.3;a=[0,.02,-.75]}else if(t.name==="chaingun"){if(t.firing?this.spinAngle+=t.dt*28:this.spinAngle+=t.dt*Math.max(0,6-r*10),o.userData.spin.rotation.z=this.spinAngle,r<.1){let l=1-r/.1;e.position.z+=.015*l,e.position.y+=(Math.random()-.5)*.004}a=[0,0,-.65]}if(t.flash&&a){let l=new P(...a);o.localToWorld(l),this.root.worldToLocal(l),this.flash.position.copy(l),this.flashGlow.position.copy(l),this.flash.visible=this.flashGlow.visible=!0;let c=(t.name==="shotgun"?.32:.2)*(.8+Math.random()*.4);this.flash.scale.set(c,c,1),this.flash.material.rotation=Math.random()*6.28}}};function ua(s){let t=Math.max(0,Math.min(255,s))/255;return .06+Math.pow(t,1.7)*1.05}var Ir=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}get count(){return this.pos.length/3}toGeometry(){let t=new we;return t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("normal",new Zt(this.nor,3)),t.setAttribute("uv",new Zt(this.uv,2)),t.setAttribute("color",new Zt(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}},fa=class{constructor(t,e,n){this.level=t,this.tex=e,this.scene=n,this.materials={},this.group=new Wt,this.group.name="level",n.add(this.group),this.dynamicWalls=[],this.dynamicFlats=[],this.lineMeshes=new Map,this.collidables=[],this.staticLights=[],this.build()}mat(t){if(this.materials[t])return this.materials[t];let e=this.tex[t]||this.tex.TECH,n=new ke({map:e.map,normalMap:e.normalMap||null,roughnessMap:e.roughnessMap||null,emissiveMap:e.emissiveMap||null,emissive:e.emissiveMap?new Et(e.emissive??16777215):new Et(0),emissiveIntensity:e.emissiveIntensity??1,roughness:e.roughness??.8,metalness:e.metalness??.1,vertexColors:!0});return n.shadowSide=_n,e.normalMap&&(n.normalScale=new tt(1,1)),n.name=t,this.materials[t]=n,n}ws(t){return this.tex[t]&&this.tex[t].worldSize||[64,64]}isDynamicSector(t){return!!(t.door||t.lift)}emitFlat(t,e,n,i){let r=e.outer.map(p=>new tt(p.x,p.y)),o=e.holes.map(p=>p.map(x=>new tt(x.x,x.y))),a=Fo.triangulateShape(r,o),l=r.concat(...o),c=n==="floor"?e.floorTex:e.ceilTex,[h,u]=this.ws(c),f=t.count,d=ua(e.light)*(n==="ceil"?.92:1);for(let p of l)t.pos.push(p.x,i,-p.y),t.nor.push(0,n==="floor"?1:-1,0),t.uv.push(p.x/h,p.y/u),t.col.push(d,d,d);for(let p of a){let x=l[p[0]],g=l[p[1]],m=l[p[2]];(g.x-x.x)*(m.y-x.y)-(g.y-x.y)*(m.x-x.x)>0===(n==="floor")?t.idx.push(f+p[0],f+p[1],f+p[2]):t.idx.push(f+p[0],f+p[2],f+p[1])}}wallParts(t){let e=[],n=t.front,i=t.back;if(!i)return n.ceil>n.floor&&e.push({kind:"mid",z0:n.floor,z1:n.ceil,side:1,sector:n,tex:t.tex||n.wall,peg:null}),e;if(n.floor!==i.floor){let r=n.floor>i.floor?n:i,o=r===n?i:n,a=(r===n?t.tex:t.backTex)||r.lower||r.wall;e.push({kind:"lower",z0:o.floor,z1:r.floor,side:o===n?1:-1,sector:o,tex:a,peg:r.lift?{top:r.floor}:null})}if(n.ceil!==i.ceil&&!(n.sky&&i.sky)){let r=n.ceil<i.ceil?n:i,o=r===n?i:n,a=(r===n?t.tex:t.backTex)||r.upper||r.wall;e.push({kind:"upper",z0:r.ceil,z1:o.ceil,side:o===n?1:-1,sector:o,tex:a,peg:r.door?{bottom:r.ceil}:null})}return e}emitWall(t,e,n){let{z0:i,z1:r,side:o}=n;if(r-i<.01)return;let[a,l]=this.ws(n.tex),c=e.nx*o,h=e.ny*o,u=-h,f=c,d=ua(n.sector.light),p=[i],x=i+36,g=r-20;n.kind!=="upper"&&x<r-1&&p.push(x),n.kind!=="lower"&&g>p[p.length-1]+1&&p.push(g),p.push(r);let m=D=>{let U=1;return n.kind!=="upper"&&(U*=.58+.42*Math.min(1,(D-i)/36)),n.kind!=="lower"&&(U*=.8+.2*Math.min(1,(r-D)/20)),U},_=D=>n.peg&&n.peg.bottom!==void 0?(D-n.peg.bottom)/l:n.peg&&n.peg.top!==void 0?(D-n.peg.top)/l:D/l,v=(e.ax*u+e.ay*f)/a,y=(e.bx*u+e.by*f)/a,C=t.count;for(let D of p){let U=d*m(D);t.pos.push(e.ax,D,-e.ay,e.bx,D,-e.by),t.nor.push(c,0,-h,c,0,-h);let H=_(D);t.uv.push(v,H,y,H),t.col.push(U,U,U,U,U,U)}let T=e.ax,R=-e.ay,S=e.bx,b=-(-e.by-R),E=S-T,L=b*c+E*-h>0;for(let D=0;D<p.length-1;D++){let U=C+D*2,H=U+1,z=U+2,$=U+3;L?t.idx.push(U,H,$,U,$,z):t.idx.push(U,$,H,U,z,$)}}build(){let t=this.level,e={},n=i=>e[i]||(e[i]=new Ir);for(let i of t.sectors)if(this.isDynamicSector(i))for(let r of["floor","ceil"]){if(r==="ceil"&&i.sky)continue;let o=new Ir;this.emitFlat(o,i,r,0);let a=new wt(o.toGeometry(),this.mat(r==="floor"?i.floorTex:i.ceilTex));a.castShadow=a.receiveShadow=!0,a.position.y=r==="floor"?i.floor:i.ceil,this.group.add(a),this.dynamicFlats.push({sector:i,mesh:a,which:r}),this.collidables.push(a)}else this.emitFlat(n(i.floorTex),i,"floor",i.floor),i.sky||this.emitFlat(n(i.ceilTex),i,"ceil",i.ceil);for(let i of t.lines){if(!(i.back&&(this.isDynamicSector(i.front)||this.isDynamicSector(i.back))||i.tex==="SWITCH"||!i.back&&this.isDynamicSector(i.front))){for(let o of this.wallParts(i))this.emitWall(n(o.tex),i,o);continue}if(!i.back||i.tex==="SWITCH"){let o=this.makeDynMesh();this.dynamicWalls.push({line:i,kind:"mid",mesh:o}),i.tex==="SWITCH"&&this.lineMeshes.set(i,o)}else this.dynamicWalls.push({line:i,kind:"lower",mesh:this.makeDynMesh()}),this.dynamicWalls.push({line:i,kind:"upper",mesh:this.makeDynMesh()})}for(let i of this.dynamicWalls)this.updateDynWall(i);for(let i in e){let r=new wt(e[i].toGeometry(),this.mat(i));r.castShadow=!0,r.receiveShadow=!0,r.name="lvl_"+i,this.group.add(r),this.collidables.push(r)}for(let i of t.data.decals||[]){let r=this.tex[i.tex],o=new ke({map:r.map,emissiveMap:r.emissiveMap||r.map,emissive:new Et(16777215),emissiveIntensity:1.6,roughness:.4,metalness:.2,transparent:!!r.transparent,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new fn(i.w,i.h),l=new wt(a,o);l.position.set(i.x+i.nx*.6,i.z,-(i.y+i.ny*.6)),l.lookAt(l.position.x+i.nx,i.z,l.position.z-i.ny),this.group.add(l),i.glow&&this.staticLights.push({x:i.x+i.nx*24,y:i.y+i.ny*24,z:i.z,color:i.glow,intensity:.8,distance:220})}for(let i of t.sectors)if(i.lamp&&this.staticLights.push({x:i.cx,y:i.cy,z:i.ceil-10,color:i.lamp,intensity:1.5,distance:Math.max(360,Math.sqrt(i.area)*3.2)}),i.damage&&i.floorTex==="NUKAGE"){let r=Math.sqrt(i.area);this.staticLights.push({x:i.cx,y:i.cy,z:i.floor+28,color:6094650,intensity:1.1,distance:Math.max(240,r*1.6),nukage:!0})}for(let i of t.data.lights||[])this.staticLights.push({...i})}makeDynMesh(){let t=new we,e=8;t.setAttribute("position",new Zt(new Float32Array(e*3),3)),t.setAttribute("normal",new Zt(new Float32Array(e*3),3)),t.setAttribute("uv",new Zt(new Float32Array(e*2),2)),t.setAttribute("color",new Zt(new Float32Array(e*3),3)),t.setIndex(new Cs(new Uint16Array(18),1));let n=new wt(t,this.mat("TECH"));return n.castShadow=n.receiveShadow=!0,n.frustumCulled=!1,this.group.add(n),this.collidables.push(n),n}updateDynWall(t){let e=this.wallParts(t.line).filter(f=>f.kind===t.kind),n=t.mesh;if(!e.length||e[0].z1-e[0].z0<.01){n.visible=!1;return}let i=e[0];t.override&&(i.tex=t.override);let r=new Ir;this.emitWall(r,t.line,i);let o=n.geometry,a=o.attributes.position.array,l=o.attributes.normal.array,c=o.attributes.uv.array,h=o.attributes.color.array;a.fill(0),l.fill(0),c.fill(0),h.fill(0),a.set(r.pos),l.set(r.nor),c.set(r.uv),h.set(r.col);let u=o.index.array;u.fill(0),u.set(r.idx),o.setDrawRange(0,r.idx.length),o.attributes.position.needsUpdate=o.attributes.normal.needsUpdate=o.attributes.uv.needsUpdate=o.attributes.color.needsUpdate=!0,o.index.needsUpdate=!0,o.computeBoundingSphere(),n.material=this.mat(i.tex),n.visible=!0}setLineTexture(t,e){for(let n of this.dynamicWalls)n.line===t&&(n.override=e,this.updateDynWall(n))}sectorMoved(t){for(let e of this.dynamicFlats)e.sector===t&&(e.mesh.position.y=e.which==="floor"?t.floor:t.ceil);for(let e of this.dynamicWalls)(e.line.front===t||e.line.back===t)&&this.updateDynWall(e)}};function Bf(s){let t=s.SKY.map;t.wrapS=Ln,t.wrapT=un,t.generateMipmaps=!1,t.minFilter=tn,t.needsUpdate=!0;let e=new ve({uniforms:{map:{value:t},time:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      uniform sampler2D map;
      uniform float time;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float u = atan(d.x, -d.z) / 6.2831853 + 0.5;
        float el = asin(clamp(d.y, -1.0, 1.0));
        float v = clamp((el + 0.10) / 1.05, 0.002, 0.998);
        vec3 c = texture2D(map, vec2(u * 2.0 + time * 0.0015, v)).rgb;
        // fade into the darkest top colour near zenith
        vec3 top = texture2D(map, vec2(u * 2.0, 0.995)).rgb;
        c = mix(c, top, smoothstep(0.85, 1.25, el));
        gl_FragColor = vec4(c * 1.1, 1.0);
      }`,side:Ue,depthWrite:!1,depthTest:!0,fog:!1}),n=new wt(new Xi(100,48,24),e);return n.renderOrder=-1e3,n.frustumCulled=!1,n.name="sky",n}var ji="Impact, 'Haettenschweiler', 'Arial Narrow Bold', 'Arial Black', sans-serif",da=class{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.msgs=[],this.hurts=[],this.lookDir=0,this.lookTimer=0,this.amZoom=.35,this.barCache=null,this.time=0}resize(t,e,n){this.w=t,this.h=e,this.dpr=n,this.canvas.width=Math.round(t*n),this.canvas.height=Math.round(e*n),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.barCache=null}get barHeight(){return Math.round(Math.min(this.h*.13,this.w/10))}message(t,e=4,n="#ffb070"){this.msgs.push({text:t,t:0,dur:e,color:n}),this.msgs.length>4&&this.msgs.shift()}clearMessages(){this.msgs.length=0}hurtFrom(t,e){this.hurts.push({angle:t,t:0,a:Math.min(1,.35+e/30)}),this.hurts.length>6&&this.hurts.shift()}buildBar(t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,e);r.addColorStop(0,"#5b544c"),r.addColorStop(.08,"#3d3833"),r.addColorStop(.9,"#2a2622"),r.addColorStop(1,"#16130f"),i.fillStyle=r,i.fillRect(0,0,t,e);let o=i.getImageData(0,0,t,e);for(let h=0;h<o.data.length;h+=4){let u=(Math.random()-.5)*22;o.data[h]+=u,o.data[h+1]+=u,o.data[h+2]+=u*.9}i.putImageData(o,0,0),i.globalAlpha=.12,i.strokeStyle="#000";for(let h=0;h<60;h++){i.beginPath();let u=Math.random()*t,f=Math.random()*e;i.moveTo(u,f),i.lineTo(u+Math.random()*30-15,f+Math.random()*4),i.stroke()}i.globalAlpha=1;let a=t/320,l=(h,u)=>{let f=h*a,d=(u-h)*a,p=i.createLinearGradient(0,2*a,0,e-2*a);p.addColorStop(0,"#1d1a17"),p.addColorStop(1,"#2c2824"),i.fillStyle=p,i.fillRect(f,2*a,d,e-4*a),i.strokeStyle="#0a0907",i.lineWidth=a,i.strokeRect(f+.5,2*a+.5,d-1,e-4*a-1),i.strokeStyle="rgba(255,240,220,0.18)",i.beginPath(),i.moveTo(f,e-2*a),i.lineTo(f+d,e-2*a),i.lineTo(f+d,2*a),i.stroke()};l(2,48),l(50,104),l(106,142),l(178,234),l(236,248),l(250,318),i.fillStyle="#100d0b",i.fillRect(143*a,1*a,34*a,e-1*a),i.fillStyle="#8a8076";for(let h of[1,49,105,142.5,177.5,235,249,319])for(let u of[3,e/a-3])i.beginPath(),i.arc(h*a,u*a,.7*a,0,7),i.fill();i.fillStyle="#c8c0b4",i.font=`${Math.round(5.2*a)}px ${ji}`,i.textAlign="center",i.textBaseline="alphabetic";let c=e-3.4*a;return i.fillText("AMMO",25*a,c),i.fillText("HEALTH",77*a,c),i.fillText("ARMS",124*a,c),i.fillText("ARMOR",206*a,c),i.textAlign="left",i.font=`${Math.round(4.2*a)}px ${ji}`,i.fillStyle="#c9b46c",["BULL","SHEL","RCKT","CELL"].forEach((h,u)=>i.fillText(h,252*a,(9+u*6.4)*a)),n}bigNum(t,e,n,i,r,o="#d8230e"){t.font=`${r}px ${ji}`,t.textAlign="right",t.textBaseline="alphabetic",t.fillStyle="#000",t.fillText(e,n+r*.05,i+r*.05);let a=t.createLinearGradient(0,i-r*.8,0,i);a.addColorStop(0,"#ff6a3a"),a.addColorStop(.5,o),a.addColorStop(1,"#7a0c04"),t.fillStyle=a,t.fillText(e,n,i)}faceState(t){let e=t.player,n=t.time,i={tier:0,look:this.lookDir,expr:"normal"},r=Math.max(0,e.health);return i.tier=r>=80?0:r>=60?1:r>=40?2:r>=20?3:4,e.dead?(i.expr="dead",i):(e.god&&(i.expr="god"),n-e.grinTime<1.6?i.expr="grin":n-e.lastHurtTime<.9?e.lastHurtAmount>=20?i.expr="ouch":(i.expr="pain",e.lastHurtAngle!==null&&(i.look=Math.abs(e.lastHurtAngle)<.5?0:e.lastHurtAngle>0?-1:1)):e.attackHeld>2&&(i.expr="rampage"),e.god&&i.expr!=="grin"&&(i.expr="god"),i)}drawFace(t,e,n,i,r,o){t.save(),t.beginPath(),t.rect(e,n,i,r),t.clip();let a=e+i/2,l=n+r*.55,c=o.expr==="dead",h=o.tier,u=o.look*i*.035;t.fillStyle="#2e3d22",t.beginPath(),t.ellipse(a,n+r*1.02,i*.52,r*.2,0,0,7),t.fill();let f=c?["#9a7a6a","#6a4a3e"]:["#e0a27a","#9a5a3c"],d=t.createRadialGradient(a-i*.08+u,l-r*.12,i*.05,a,l,i*.5);d.addColorStop(0,f[0]),d.addColorStop(1,f[1]),t.fillStyle=d,t.beginPath(),t.moveTo(a-i*.33,l-r*.18),t.quadraticCurveTo(a-i*.36,l-r*.48,a,l-r*.5),t.quadraticCurveTo(a+i*.36,l-r*.48,a+i*.33,l-r*.18),t.quadraticCurveTo(a+i*.34,l+r*.2,a+i*.16,l+r*.36),t.quadraticCurveTo(a,l+r*.44,a-i*.16,l+r*.36),t.quadraticCurveTo(a-i*.34,l+r*.2,a-i*.33,l-r*.18),t.fill(),t.fillStyle=f[1];for(let y of[-1,1])t.beginPath(),t.ellipse(a+y*i*.35,l-r*.04,i*.05,r*.09,0,0,7),t.fill();t.fillStyle="#4a2c16",t.beginPath(),t.moveTo(a-i*.34,l-r*.2),t.quadraticCurveTo(a-i*.38,l-r*.56,a,l-r*.56),t.quadraticCurveTo(a+i*.38,l-r*.56,a+i*.34,l-r*.2),t.quadraticCurveTo(a+i*.2,l-r*.38,a,l-r*.38),t.quadraticCurveTo(a-i*.2,l-r*.38,a-i*.34,l-r*.2),t.fill();let p=o.expr==="rampage"||o.expr==="pain"||o.expr==="ouch"||o.expr==="god";t.strokeStyle="#2a1608",t.lineWidth=r*.05,t.lineCap="round";for(let y of[-1,1]){t.beginPath();let C=a+y*i*.14+u,T=p?r*.045:-r*.01;t.moveTo(C-y*i*.1,l-r*.2),t.lineTo(C+y*i*.06-y*i*.12,l-r*.2+T),t.stroke()}let x=l-r*.09;for(let y of[-1,1]){let C=a+y*i*.13+u,T=o.expr==="pain"||o.expr==="ouch"?.45:o.expr==="rampage"?.7:1;t.fillStyle=c?"#d8c8c0":"#f2ece4",t.beginPath(),t.ellipse(C,x,i*.07,r*.04*T,0,0,7),t.fill(),c?(t.strokeStyle="#401010",t.lineWidth=r*.02,t.beginPath(),t.moveTo(C-i*.05,x-r*.02),t.lineTo(C+i*.05,x+r*.02),t.moveTo(C+i*.05,x-r*.02),t.lineTo(C-i*.05,x+r*.02),t.stroke()):(o.expr==="god"?(t.fillStyle="#ffd020",t.shadowColor="#ffcc00",t.shadowBlur=i*.15):t.fillStyle="#3a5a8a",t.beginPath(),t.arc(C+o.look*i*.035,x,r*.03*Math.max(.6,T),0,7),t.fill(),t.shadowBlur=0,t.fillStyle="#000",t.beginPath(),t.arc(C+o.look*i*.035,x,r*.013,0,7),t.fill())}t.strokeStyle="rgba(80,30,10,0.6)",t.lineWidth=r*.025,t.beginPath(),t.moveTo(a+u*.8,l-r*.06),t.lineTo(a-i*.03+u,l+r*.07),t.lineTo(a+i*.04+u,l+r*.08),t.stroke();let g=l+r*.2;if(o.expr==="grin"||o.expr==="god")t.fillStyle="#300",t.beginPath(),t.ellipse(a+u,g,i*.15,r*.05,0,0,Math.PI),t.fill(),t.fillStyle="#f4f0e0",t.fillRect(a-i*.13+u,g,i*.26,r*.025);else if(o.expr==="ouch"||c)t.fillStyle="#200",t.beginPath(),t.ellipse(a+u,g+r*.01,i*.07,r*.07,0,0,7),t.fill();else{t.strokeStyle="#5a1e10",t.lineWidth=r*.03,t.beginPath();let y=o.expr==="pain"||o.expr==="rampage"?r*.025:h*r*.006;t.moveTo(a-i*.1+u,g+y),t.quadraticCurveTo(a+u,g-y*.6,a+i*.1+u,g+y),t.stroke(),o.expr==="rampage"&&(t.fillStyle="#eee",t.fillRect(a-i*.07+u,g-r*.012,i*.14,r*.02))}let m=c?6:h,_=7,v=()=>(_=_*16807%2147483647,_/2147483647);for(let y=0;y<m;y++){let C=a+(v()-.5)*i*.55,T=l-r*.35+v()*r*.2;t.strokeStyle="rgba(150,0,0,0.85)",t.lineWidth=r*(.02+v()*.025),t.beginPath(),t.moveTo(C,T),t.quadraticCurveTo(C+(v()-.5)*i*.05,T+r*.15,C+(v()-.5)*i*.06,T+r*(.2+v()*.25)),t.stroke()}(h>=2||c)&&(t.fillStyle="rgba(90,30,70,0.35)",t.beginPath(),t.ellipse(a-i*.17+u,x+r*.04,i*.08,r*.06,0,0,7),t.fill()),(h>=3||c)&&(t.fillStyle="rgba(160,0,0,0.6)",t.beginPath(),t.ellipse(a+i*.18,l-r*.28,i*.09,r*.06,.4,0,7),t.fill()),t.restore()}draw(t,e,n){let i=this.ctx;this.time+=e;let r=this.dpr;if(i.setTransform(r,0,0,r,0,0),i.clearRect(0,0,this.w,this.h),!t)return;let o=t.player;if(this.lookTimer-=e,this.lookTimer<=0&&(this.lookTimer=.8+Math.random()*1.6,this.lookDir=Math.random()<.5?0:Math.random()<.5?-1:1),n.automap&&this.drawAutomap(t,n),n.crosshair&&!n.automap&&!o.dead){let l=this.w/2,c=(this.h-(n.showBar?this.barHeight:0))/2+(n.showBar?this.barHeight/2:0);i.strokeStyle="rgba(255,230,180,0.75)",i.lineWidth=1.5,i.beginPath(),i.moveTo(l-9,this.h/2),i.lineTo(l-4,this.h/2),i.moveTo(l+4,this.h/2),i.lineTo(l+9,this.h/2),i.moveTo(l,this.h/2-9),i.lineTo(l,this.h/2-4),i.moveTo(l,this.h/2+4),i.lineTo(l,this.h/2+9),i.stroke()}for(let l of this.hurts)l.t+=e;if(this.hurts=this.hurts.filter(l=>l.t<1.2),!n.automap){let l=this.w/2,c=this.h/2,h=Math.min(this.w,this.h)*.33;for(let u of this.hurts){let f=-u.angle-Math.PI/2,d=u.a*(1-u.t/1.2);i.strokeStyle=`rgba(255,30,10,${d})`,i.lineWidth=7,i.beginPath(),i.arc(l,c,h,f-.28,f+.28),i.stroke()}}for(let l of this.msgs)l.t+=e;this.msgs=this.msgs.filter(l=>l.t<l.dur),i.font=`${Math.round(Math.max(15,this.h*.028))}px ${ji}`,i.textAlign="left",i.textBaseline="top";let a=12;for(let l of this.msgs.slice(-3)){let c=Math.min(1,(l.dur-l.t)*2);i.globalAlpha=c,i.fillStyle="#000",i.fillText(l.text,16,a+2),i.fillStyle=l.color,i.fillText(l.text,14,a),a+=Math.max(18,this.h*.034)}i.globalAlpha=1,n.fps&&(i.font="14px monospace",i.textAlign="right",i.fillStyle="#9f9",i.fillText(n.fps+" fps",this.w-10,10)),n.showBar&&this.drawBar(t,i)}drawBar(t,e){let n=t.player,i=this.barHeight,r=i*10,o=Math.round((this.w-r)/2),a=this.h-i,l=Math.round(r*this.dpr),c=Math.round(i*this.dpr);(!this.barCache||this.barCache.width!==l)&&(this.barCache=this.buildBar(l,c)),o>0&&(e.fillStyle="#1e1b18",e.fillRect(0,a,o,i),e.fillRect(o+r,a,this.w-o-r,i)),e.drawImage(this.barCache,o,a,r,i);let h=r/320,u=a+i*.68,f=Math.round(i*.56),d=n.weapon,p={pistol:"bullets",chaingun:"bullets",shotgun:"shells"}[d];p&&this.bigNum(e,String(n.ammo[p]),o+46*h,u,f),this.bigNum(e,Math.max(0,Math.ceil(n.health))+"%",o+103*h,u,f),this.bigNum(e,Math.ceil(n.armor)+"%",o+233*h,u,f,n.armorType===2?"#3050e8":"#d8230e"),e.font=`${Math.round(7.5*h)}px ${ji}`,e.textAlign="center",e.textBaseline="middle";let x={2:n.weapons.pistol,3:n.weapons.shotgun,4:n.weapons.chaingun,5:!1,6:!1,7:!1};[2,3,4,5,6,7].forEach((_,v)=>{let y=o+(112+v%3*12)*h,C=a+(9+Math.floor(v/3)*10)*h;e.fillStyle=x[_]?"#ffd23a":"#6a6258",e.fillText(String(_),y,C)});let g=this.faceState(t);this.drawFace(e,o+143*h,a+1*h,34*h,i-1*h,g),e.strokeStyle="rgba(120,110,100,0.4)";for(let _=0;_<3;_++)e.strokeRect(o+238.5*h,a+(4+_*8)*h,7*h,6*h);e.font=`${Math.round(4.6*h)}px ${ji}`,e.textAlign="right",e.textBaseline="alphabetic",[["bullets",200],["shells",50],["rockets",50],["cells",300]].forEach(([_,v],y)=>{let C=a+(9+y*6.4)*h;e.fillStyle="#ffd23a",e.fillText(String(n.ammo[_]),o+296*h,C),e.fillText(String(v),o+316*h,C),e.fillStyle="#9a8a5a",e.fillText("/",o+302*h,C)})}drawAutomap(t,e){let n=this.ctx,i=t.player,r=t.level,o=e.showBar?this.barHeight:0,a=this.h-o;n.fillStyle="rgba(0,0,0,0.97)",n.fillRect(0,0,this.w,a),n.save(),n.beginPath(),n.rect(0,0,this.w,a),n.clip();let l=this.amZoom*Math.min(this.w,a)/700,c=this.w/2-i.x*l,h=a/2+i.y*l,u=x=>c+x*l,f=x=>h-x*l;n.strokeStyle="rgba(60,60,90,0.25)",n.lineWidth=1,n.beginPath();for(let x=Math.floor((i.x-3e3)/128)*128;x<i.x+3e3;x+=128)n.moveTo(u(x),0),n.lineTo(u(x),a);for(let x=Math.floor((i.y-3e3)/128)*128;x<i.y+3e3;x+=128)n.moveTo(0,f(x)),n.lineTo(this.w,f(x));n.stroke(),n.lineWidth=Math.max(1.5,l*2.2),n.lineCap="round";for(let x of r.lines){if(!x.seen&&!e.revealAll)continue;let g;if(!x.back)g="#e02a20";else{let m=x.front,_=x.back;if(m.secretDoor||_.secretDoor)g=e.revealAll?"#ff40ff":"#e02a20";else if(m.door||_.door)g="#e8d440";else if(m.floor!==_.floor)g="#b07840";else if(m.ceil!==_.ceil)g="#e8d440";else if(e.revealAll)g="rgba(120,120,120,0.6)";else continue}x.seen||(g="rgba(140,140,160,0.55)"),n.strokeStyle=g,n.beginPath(),n.moveTo(u(x.ax),f(x.ay)),n.lineTo(u(x.bx),f(x.by)),n.stroke()}if(e.revealThings){for(let x of t.monsters)n.fillStyle=x.dead?"#663":"#f33",n.beginPath(),n.arc(u(x.x),f(x.y),Math.max(2,x.radius*l),0,7),n.fill();for(let x of t.items)x.taken||(n.fillStyle="#ff3",n.fillRect(u(x.x)-2,f(x.y)-2,4,4))}n.save(),n.translate(u(i.x),f(i.y)),n.rotate(-i.angle),n.strokeStyle="#fff",n.lineWidth=2;let d=Math.max(8,16*l*2);n.beginPath(),n.moveTo(-d,0),n.lineTo(d,0),n.moveTo(d,0),n.lineTo(d*.4,-d*.45),n.moveTo(d,0),n.lineTo(d*.4,d*.45),n.moveTo(-d,0),n.lineTo(-d*1.3,-d*.4),n.moveTo(-d,0),n.lineTo(-d*1.3,d*.4),n.stroke(),n.restore(),n.restore(),n.font=`${Math.round(Math.max(16,this.h*.03))}px ${ji}`,n.fillStyle="#e02a20",n.textAlign="left",n.textBaseline="bottom",n.fillText(t.mapData.name,14,a-10);let p=t.stats;n.textAlign="right",n.fillText(`K ${p.kills}/${p.totalKills}   I ${p.items}/${p.totalItems}   S ${p.secrets}/${p.totalSecrets}`,this.w-14,a-10)}};var Pe=.02857142857142857,lh={zombie:{hp:20,radius:20,height:56,speed:8,stepTics:4,painChance:200,reaction:8,attack:"hitscan",pellets:1,fireAt:10*Pe,attackEnd:26*Pe,melee:!1,sight:"zombie_sight",active:"zombie_active",pain:"zombie_pain",death:"zombie_death",shot:"pistol",drop:"clip",mass:100},sergeant:{hp:30,radius:20,height:56,speed:8,stepTics:3,painChance:170,reaction:8,attack:"hitscan",pellets:3,fireAt:10*Pe,attackEnd:30*Pe,melee:!1,sight:"zombie_sight",active:"zombie_active",pain:"zombie_pain",death:"zombie_death",shot:"shotgun",drop:"shotgun",mass:100,voicePitch:.85},imp:{hp:60,radius:20,height:56,speed:8,stepTics:3,painChance:200,reaction:8,attack:"fireball",fireAt:16*Pe,attackEnd:22*Pe,melee:!0,sight:"imp_sight",active:"imp_active",pain:"imp_pain",death:"imp_death",mass:100}},Pr={fist:{slot:1,ammo:null,refire:.37,name:"fist"},pistol:{slot:2,ammo:"bullets",perShot:1,refire:.4,name:"pistol"},shotgun:{slot:3,ammo:"shells",perShot:1,refire:1,name:"shotgun"},chaingun:{slot:4,ammo:"bullets",perShot:1,refire:4*Pe,name:"chaingun"}},ch=["fist","pistol","shotgun","chaingun"],hh={bullets:200,shells:50,rockets:50,cells:300},kn=[{name:"I'm too young to die.",dmgMul:.5,ammoMul:2,bit:1},{name:"Hey, not too rough.",dmgMul:1,ammoMul:1,bit:1},{name:"Hurt me plenty.",dmgMul:1,ammoMul:1,bit:2},{name:"Ultra-Violence.",dmgMul:1,ammoMul:1,bit:4},{name:"Nightmare!",dmgMul:1,ammoMul:2,bit:4,fast:!0,respawn:!0}],uh={clip:{radius:20,msg:"Picked up a clip."},bullets:{radius:20,msg:"Picked up a box of bullets."},shells:{radius:20,msg:"Picked up 4 shotgun shells."},shellbox:{radius:20,msg:"Picked up a box of shotgun shells."},stim:{radius:20,msg:"Picked up a stimpack."},medi:{radius:20,msg:"Picked up a medikit."},hbonus:{radius:20,msg:"Picked up a health bonus.",count:!0},abonus:{radius:20,msg:"Picked up an armor bonus.",count:!0},garmor:{radius:20,msg:"Picked up the armor."},barmor:{radius:20,msg:"Picked up the MegaArmor!"},shotgun:{radius:20,msg:"You got the shotgun!"},chaingun:{radius:20,msg:"You got the chaingun!"}};var Hf={low:"Low",medium:"Medium",high:"High",ultra:"Ultra"};function Vf(s){let t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${String(e).padStart(2,"0")}`}var pa=class{constructor(t){this.game=t,this.el=document.getElementById("menu"),this.stack=[],this.capturingKey=!1,this.el.addEventListener("click",e=>{let n=e.target.closest("[data-act]");n&&(this.game.initAudio(),this.game.audio.play("switch",{volume:.4}),this.act(n.dataset.act,n.dataset.arg))})}get inSubmenu(){return this.stack.length>0}render(t,e=""){this.el.className="visible "+e,this.el.innerHTML=t;let n=this.el.querySelector("button");n&&n.focus({preventScroll:!0})}hide(){this.el.className="",this.el.innerHTML="",this.stack=[]}showLoading(t){this.render(`<div class="loading"><div class="logo small">DOOM<span>2027</span></div><p>${t}</p></div>`,"dim")}showTitle(){this.stack=[],this.screen="title",this.render(`
      <div class="title">
        <div class="logo">DOOM<span>2027</span></div>
        <div class="sub">EPISODE 1 \xB7 E1M1: HANGAR</div>
        <div class="buttons">
          <button data-act="new">New Game</button>
          <button data-act="options">Options</button>
          <button data-act="controls">Controls</button>
        </div>
        <div class="foot">A fan-made browser tribute. All graphics, sounds and music are generated procedurally.</div>
      </div>`,"title-screen")}showSkill(){this.screen="skill",this.render(`
      <div class="panel">
        <h2>Choose Skill Level</h2>
        <div class="buttons skills">
          ${kn.map((t,e)=>`<button data-act="skill" data-arg="${e}">${t.name}</button>`).join("")}
        </div>
        <button class="back" data-act="back">Back</button>
      </div>`)}showPause(){this.stack=[],this.screen="pause",this.render(`
      <div class="panel">
        <h2>Paused</h2>
        <div class="buttons">
          <button data-act="resume">Resume</button>
          <button data-act="options">Options</button>
          <button data-act="controls">Controls</button>
          <button data-act="restart">Restart Level</button>
          <button data-act="quit">Quit to Title</button>
        </div>
      </div>`,"dim")}showOptions(){let t=this.game.settings,e=(i,r)=>`<label class="row"><span>${r}</span><input type="checkbox" data-set="${i}" ${t[i]?"checked":""}></label>`,n=(i,r,o,a,l)=>`<label class="row"><span>${r}</span><input type="range" data-set="${i}" min="${o}" max="${a}" step="${l}" value="${t[i]}"><em>${t[i]}</em></label>`;this.render(`
      <div class="panel options">
        <h2>Options</h2>
        <div class="grid">
          ${n("sensitivity","Mouse sensitivity",.2,3,.05)}
          ${e("invertY","Invert mouse Y")}
          ${n("fov","Field of view",70,120,1)}
          <label class="row"><span>Graphics quality</span><select data-set="quality">${Object.keys(Hf).map(i=>`<option value="${i}" ${t.quality===i?"selected":""}>${Hf[i]}</option>`).join("")}</select></label>
          ${n("musicVol","Music volume",0,1,.05)}
          ${n("sfxVol","Sound volume",0,1,.05)}
          ${e("alwaysRun","Always run (Shift walks)")}
          ${e("autoaim","Vertical autoaim")}
          ${e("crosshair","Crosshair")}
          ${e("bob","View bobbing")}
          ${e("showFps","Show FPS")}
        </div>
        <p class="note">Light count and shadow quality fully apply on the next level start.</p>
        <button class="back" data-act="back">Back</button>
      </div>`,this.screen==="pause"?"dim":""),this.el.querySelectorAll("[data-set]").forEach(i=>{i.addEventListener("input",()=>{let r=i.dataset.set,o=i.type==="checkbox"?i.checked:i.type==="range"?parseFloat(i.value):i.value;t[r]=o;let a=i.parentElement.querySelector("em");a&&(a.textContent=o),this.game.onSettingsChanged(r)})})}showControls(){let t=[["W A S D / Arrows","Move / strafe (Alt + arrows strafes)"],["Mouse","Look and turn"],["Left click / Ctrl","Fire"],["E / Space / Right click","Use: open doors, flip switches, ride lifts"],["1 \u2013 4 / Mouse wheel","Select weapon"],["Shift","Walk (or run if always-run is off)"],["Tab","Automap  (+ / \u2212 or wheel to zoom)"],["Esc","Menu / pause"],["Shift + F","Toggle FPS counter"],["Classic cheats","iddqd, idkfa, idfa, idclip, iddt \u2026"]];this.render(`
      <div class="panel">
        <h2>Controls</h2>
        <table class="controls">${t.map(([e,n])=>`<tr><td>${e}</td><td>${n}</td></tr>`).join("")}</table>
        <button class="back" data-act="back">Back</button>
      </div>`,this.screen==="pause"?"dim":"")}showIntermission(t,e){this.screen="inter";let n=(c,h)=>h?Math.round(c/h*100):100,i={kills:n(t.kills,t.totalKills),items:n(t.items,t.totalItems),secrets:n(t.secrets,t.totalSecrets)};this.render(`
      <div class="panel inter">
        <h3>${e.name.split(":")[1].trim()}</h3>
        <h2>Finished</h2>
        <table class="stats">
          <tr><td>Kills</td><td id="i-kills">0%</td></tr>
          <tr><td>Items</td><td id="i-items">0%</td></tr>
          <tr><td>Secrets</td><td id="i-secrets">0%</td></tr>
          <tr><td>Time</td><td id="i-time">0:00</td></tr>
          <tr><td>Par</td><td>${Vf(e.par)}</td></tr>
        </table>
        <div class="buttons" id="i-buttons" style="visibility:hidden">
          <p class="note">You have conquered the Hangar. E1M2 is coming in a future update.</p>
          <button data-act="replay">Play Again</button>
          <button data-act="quit">Title Screen</button>
        </div>
      </div>`,"dim inter-screen");let r=["kills","items","secrets"],o=0,a=0,l=()=>{if(this.screen==="inter")if(o<r.length){if(a=Math.min(i[r[o]],a+2),document.getElementById("i-"+r[o]).textContent=a+"%",this.game.audio.play("pistol",{volume:.18}),a>=i[r[o]]){o++,a=0,this.game.audio.play("barrel_explode",{volume:.25}),setTimeout(l,400);return}setTimeout(l,30)}else document.getElementById("i-time").textContent=Vf(t.time),document.getElementById("i-buttons").style.visibility="visible",this.el.querySelector("#i-buttons button").focus()};setTimeout(l,600)}back(){if(this.screen==="pause"){this.game.resume();return}let t=this.stack.pop();t?t():this.game.state==="title"&&this.showTitle()}key(t){let e=[...this.el.querySelectorAll("button")],n=e.indexOf(document.activeElement);t.code==="ArrowDown"&&(t.preventDefault(),(e[n+1]||e[0])?.focus()),t.code==="ArrowUp"&&(t.preventDefault(),(e[n-1]||e[e.length-1])?.focus())}act(t,e){let n=this.game,i=this.game.state==="paused"?()=>this.showPause():()=>this.showTitle();switch(t){case"new":this.stack.push(()=>this.showTitle()),this.showSkill(),n.audio.startMusic("menu");break;case"skill":n.startGame(parseInt(e,10));break;case"options":this.stack.push(i),this.showOptions();break;case"controls":this.stack.push(i),this.showControls();break;case"back":this.back();break;case"resume":n.resume();break;case"restart":n.startGame(n.skill);break;case"replay":n.startGame(n.skill);break;case"quit":n.quitToTitle();break}}};function ma(s){let t=0;for(let e=0;e<s.length;e++){let n=s[e],i=s[(e+1)%s.length];t+=n.x*i.y-i.x*n.y}return t/2}var ga=class{constructor(t){this.data=t,this.sectors=[],this.byId={},this.lines=[],this._build()}_build(){let t=this.data;for(let u=0;u<t.sectors.length;u++){let f=t.sectors[u],d={...f,index:u,floor:f.floor,ceil:f.ceil,baseFloor:f.floor,baseCeil:f.ceil,lines:[],neighbors:[],contours:[],sky:f.ceilTex==="SKY",soundTarget:null,soundTime:-1,moving:null,bbox:[1/0,1/0,-1/0,-1/0]},p=_=>_.map(v=>({x:v[0],y:v[1],tex:v[2]||null})),x=p(f.poly);ma(x)<0&&this._reverseContour(x),d.contours.push(x),d.outer=x,d.holes=[];for(let _ of f.holes||[]){let v=p(_);ma(v)>0&&this._reverseContour(v),d.contours.push(v),d.holes.push(v)}for(let _ of x)d.bbox[0]=Math.min(d.bbox[0],_.x),d.bbox[1]=Math.min(d.bbox[1],_.y),d.bbox[2]=Math.max(d.bbox[2],_.x),d.bbox[3]=Math.max(d.bbox[3],_.y);let g=0,m=0;for(let _ of x)g+=_.x,m+=_.y;d.cx=g/x.length,d.cy=m/x.length,d.area=Math.abs(ma(x))-d.holes.reduce((_,v)=>_+Math.abs(ma(v)),0),this.sectors.push(d),this.byId[d.id]=d}let e=[],n=new Set;for(let u of this.sectors)for(let f of u.contours)for(let d of f){let p=d.x+","+d.y;n.has(p)||(n.add(p),e.push(d))}let i=[];for(let u of this.sectors)for(let f of u.contours)for(let d=0;d<f.length;d++){let p=f[d],x=f[(d+1)%f.length],g=x.x-p.x,m=x.y-p.y,_=g*g+m*m,v=[];for(let T of e){let R=(T.x-p.x)*m-(T.y-p.y)*g;if(Math.abs(R)>.001)continue;let S=((T.x-p.x)*g+(T.y-p.y)*m)/_;S>1e-6&&S<1-1e-6&&v.push(S)}v.sort((T,R)=>T-R);let y=p.x,C=p.y;for(let T of[...v,1]){let R=T===1?x.x:Math.round(p.x+g*T),S=T===1?x.y:Math.round(p.y+m*T);i.push({ax:y,ay:C,bx:R,by:S,tex:p.tex,sector:u}),y=R,C=S}}let r=new Map;for(let u of i)r.set(`${u.ax},${u.ay}>${u.bx},${u.by}`,u);let o=new Set;for(let u of i){let f=`${u.ax},${u.ay}>${u.bx},${u.by}`;if(o.has(f))continue;o.add(f);let d=`${u.bx},${u.by}>${u.ax},${u.ay}`,p=r.get(d),x=null,g=null;p&&p.sector!==u.sector&&(x=p.sector,g=p.tex,o.add(d));let m=u.bx-u.ax,_=u.by-u.ay,v=Math.hypot(m,_),y={id:this.lines.length,ax:u.ax,ay:u.ay,bx:u.bx,by:u.by,dx:m,dy:_,len:v,nx:-_/v,ny:m/v,front:u.sector,back:x,tex:u.tex,backTex:g,seen:!1};this.lines.push(y),u.sector.lines.push(y),x&&(x.lines.push(y),u.sector.neighbors.includes(x)||u.sector.neighbors.push(x),x.neighbors.includes(u.sector)||x.neighbors.push(u.sector))}let a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u of this.lines)a=Math.min(a,u.ax,u.bx),l=Math.min(l,u.ay,u.by),c=Math.max(c,u.ax,u.bx),h=Math.max(h,u.ay,u.by);this.bounds={minx:a,miny:l,maxx:c,maxy:h},this.cell=128,this.bx0=Math.floor(a/this.cell)-1,this.by0=Math.floor(l/this.cell)-1,this.bw=Math.ceil(c/this.cell)-this.bx0+2,this.bh=Math.ceil(h/this.cell)-this.by0+2,this.blockLines=Array.from({length:this.bw*this.bh},()=>[]),this.blockSectors=Array.from({length:this.bw*this.bh},()=>[]);for(let u of this.lines){let f=Math.floor((Math.min(u.ax,u.bx)-1)/this.cell)-this.bx0,d=Math.floor((Math.max(u.ax,u.bx)+1)/this.cell)-this.bx0,p=Math.floor((Math.min(u.ay,u.by)-1)/this.cell)-this.by0,x=Math.floor((Math.max(u.ay,u.by)+1)/this.cell)-this.by0;for(let g=p;g<=x;g++)for(let m=f;m<=d;m++)this.blockLines[g*this.bw+m].push(u)}for(let u of this.sectors){let f=Math.floor(u.bbox[0]/this.cell)-this.bx0,d=Math.floor(u.bbox[2]/this.cell)-this.bx0,p=Math.floor(u.bbox[1]/this.cell)-this.by0,x=Math.floor(u.bbox[3]/this.cell)-this.by0;for(let g=p;g<=x;g++)for(let m=f;m<=d;m++)this.blockSectors[g*this.bw+m].push(u)}this._lineStamp=new Uint32Array(this.lines.length),this._stamp=1;for(let u of this.sectors){if(u.door){let f=1/0;for(let d of u.neighbors)f=Math.min(f,d.ceil);u.doorTop=f-4}if(u.lift){let f=u.floor;for(let d of u.neighbors)f=Math.min(f,d.floor);u.liftLow=f,u.liftHigh=u.floor}}}_reverseContour(t){let e=t.length,n=t.map(i=>i.tex);t.reverse();for(let i=0;i<e;i++){let r=(2*e-2-i)%e;t[i].tex=n[r]}}linesNear(t,e,n,i){let r=++this._stamp,o=[],a=Math.max(0,Math.floor(t/this.cell)-this.bx0),l=Math.min(this.bw-1,Math.floor(n/this.cell)-this.bx0),c=Math.max(0,Math.floor(e/this.cell)-this.by0),h=Math.min(this.bh-1,Math.floor(i/this.cell)-this.by0);for(let u=c;u<=h;u++)for(let f=a;f<=l;f++)for(let d of this.blockLines[u*this.bw+f])this._lineStamp[d.id]!==r&&(this._lineStamp[d.id]=r,o.push(d));return o}pointInSector(t,e,n){if(e<t.bbox[0]||e>t.bbox[2]||n<t.bbox[1]||n>t.bbox[3])return!1;let i=!1;for(let r of t.contours)for(let o=0,a=r.length-1;o<r.length;a=o++){let l=r[o],c=r[a];l.y>n!=c.y>n&&e<(c.x-l.x)*(n-l.y)/(c.y-l.y)+l.x&&(i=!i)}return i}findSector(t,e,n){if(n&&this.pointInSector(n,t,e))return n;let i=Math.floor(t/this.cell)-this.bx0,r=Math.floor(e/this.cell)-this.by0;if(i>=0&&r>=0&&i<this.bw&&r<this.bh){let o=null;for(let a of this.blockSectors[r*this.bw+i])this.pointInSector(a,t,e)&&(!o||a.area<o.area)&&(o=a);if(o)return o}return n||null}heightsAt(t,e,n,i){let r=this.findSector(t,e,i),o=r?r.floor:0,a=r?r.ceil:0,l=o;for(let c of this.linesNear(t-n,e-n,t+n,e+n))c.back&&(ny(t,e,c)>=n*n||(o=Math.max(o,c.front.floor,c.back.floor),a=Math.min(a,c.front.ceil,c.back.ceil),l=Math.min(l,c.front.floor,c.back.floor)));return{sector:r,floor:o,ceil:a,drop:l}}lineBlocks(t,e,n,i,r=24){if(!t.back)return!0;let o=t.front,a=t.back,l=Math.max(o.floor,a.floor),c=Math.min(o.ceil,a.ceil);return!!(c-l<n||l-e>r||c-e<n||i&&(Math.abs(o.floor-a.floor)>24||!!o.damage!=!!a.damage))}moveCircle(t,e,n,i={}){let r=t.radius,o=[];for(let a=0;a<4;a++){let l=!1;for(let c of this.linesNear(e-r-2,n-r-2,e+r+2,n+r+2)){if(i.noclip)break;if(!this.lineBlocks(c,t.z,t.height,t.isMonster))continue;let h=Gf(((e-c.ax)*c.dx+(n-c.ay)*c.dy)/(c.len*c.len));if(h>0&&h<1){let u=(t.x-c.ax)*c.nx+(t.y-c.ay)*c.ny>=0?1:-1,f=((e-c.ax)*c.nx+(n-c.ay)*c.ny)*u;if(f>=r)continue;let d=r-f+.01;e+=c.nx*u*d,n+=c.ny*u*d}else{let u=c.ax+c.dx*h,f=c.ay+c.dy*h,d=e-u,p=n-f,x=d*d+p*p;if(x>=r*r)continue;let g=Math.sqrt(x);if(g<1e-4)continue;let m=r-g+.01;e+=d/g*m,n+=p/g*m}l=!0,o.includes(c)||o.push(c)}if(!l)break}return{x:e,y:n,blocked:o}}crossings(t,e,n,i){let r=[],o=n-t,a=i-e;for(let l of this.linesNear(Math.min(t,n),Math.min(e,i),Math.max(t,n),Math.max(e,i))){let c=o*l.dy-a*l.dx;if(Math.abs(c)<1e-9)continue;let h=l.ax-t,u=l.ay-e,f=(h*l.dy-u*l.dx)/c,d=(h*a-u*o)/c;f<0||f>1||d<0||d>1||r.push({t:f,line:l})}return r.sort((l,c)=>l.t-c.t),r}checkSight(t,e,n,i,r,o,a){let l=Math.hypot(i-t,r-e);if(l<1)return!0;let c=(a-n)/l,h=(o-n)/l;for(let u of this.crossings(t,e,i,r)){let f=u.line;if(!f.back)return!1;let d=f.front,p=f.back,x=Math.min(d.ceil,p.ceil),g=Math.max(d.floor,p.floor);if(g>=x)return!1;let m=Math.max(u.t*l,.01);if(d.floor!==p.floor&&(h=Math.max(h,(g-n)/m)),d.ceil!==p.ceil&&(c=Math.min(c,(x-n)/m)),c<=h)return!1}return!0}traceWorld(t,e,n,i,r,o,a){let l=Math.cos(i),c=Math.sin(i),h=t+l*o,u=e+c*o,f=a||this.findSector(t,e),d=(g,m)=>{if(!g)return null;if(r<0){let _=(g.floor-n)/r;if(_>=0&&_<=m)return{dist:_,kind:"floor",sector:g,nz:1}}else if(r>0){let _=(g.ceil-n)/r;if(_>=0&&_<=m)return{dist:_,kind:g.sky?"sky":"ceil",sector:g,nz:-1}}return null},p=g=>(g.x=t+l*g.dist,g.y=e+c*g.dist,g.z=n+r*g.dist,g.nx===void 0&&(g.nx=0,g.ny=0),g.nz===void 0&&(g.nz=0),g);for(let g of this.crossings(t,e,h,u)){let m=g.t*o,_=d(f,m);if(_)return p(_);let v=g.line,y=n+r*m,C=(t-v.ax)*v.nx+(e-v.ay)*v.ny>=0?1:-1,T=v.nx*C,R=v.ny*C;if(!v.back)return p({dist:m-.5,kind:"wall",line:v,nx:T,ny:R});let S=v.front===f?v.back:v.front,M=v.front,b=v.back,E=Math.min(M.ceil,b.ceil),L=Math.max(M.floor,b.floor);if(y<L)return p({dist:m-.5,kind:"wall",line:v,nx:T,ny:R});if(y>E)return M.sky&&b.sky?p({dist:m,kind:"sky",line:v}):S.sky&&y>S.ceil&&f.ceil>=S.ceil?p({dist:m,kind:"sky",line:v}):p({dist:m-.5,kind:"wall",line:v,nx:T,ny:R});f=S}let x=d(f,o);return p(x||{dist:o,kind:"none"})}noiseAlert(t,e,n){if(!t)return;let i=[t],r=new Set([t]);for(;i.length;){let o=i.pop();o.soundTarget=e,o.soundTime=n;for(let a of o.lines){if(!a.back)continue;let l=a.front===o?a.back:a.front;r.has(l)||Math.min(a.front.ceil,a.back.ceil)-Math.max(a.front.floor,a.back.floor)<=0||(r.add(l),i.push(l))}}}};function Gf(s){return s<0?0:s>1?1:s}function ny(s,t,e){let n=Gf(((s-e.ax)*e.dx+(t-e.ay)*e.dy)/(e.len*e.len)),i=e.ax+e.dx*n-s,r=e.ay+e.dy*n-t;return i*i+r*r}var Ii=class{constructor(t,e,{max:n=600,additive:i=!1,lit:r=!1}={}){this.max=n,this.count=0,this.p=[];let o=new Bo,a=new fn(1,1);o.index=a.index,o.setAttribute("position",a.attributes.position),o.setAttribute("uv",a.attributes.uv),this.aPos=new Gi(new Float32Array(n*3),3),this.aSize=new Gi(new Float32Array(n*2),2),this.aCol=new Gi(new Float32Array(n*4),4),this.aPos.setUsage(Wo),this.aSize.setUsage(Wo),this.aCol.setUsage(Wo),o.setAttribute("ipos",this.aPos),o.setAttribute("isize",this.aSize),o.setAttribute("icol",this.aCol),o.instanceCount=0,this.geo=o;let l=new ve({uniforms:{map:{value:e},fogColor:{value:new Et(0)},fogDensity:{value:0},ambient:{value:1}},vertexShader:`
        attribute vec3 ipos; attribute vec2 isize; attribute vec4 icol;
        varying vec2 vUv; varying vec4 vCol; varying float vDepth;
        void main() {
          vUv = uv; vCol = icol;
          vec4 mv = modelViewMatrix * vec4(ipos, 1.0);
          float c = cos(isize.y), s = sin(isize.y);
          vec2 o = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * isize.x;
          mv.xy += o;
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D map; uniform vec3 fogColor; uniform float fogDensity; uniform float ambient;
        varying vec2 vUv; varying vec4 vCol; varying float vDepth;
        void main() {
          vec4 t = texture2D(map, vUv);
          float fog = 1.0 - exp(-fogDensity * fogDensity * vDepth * vDepth);
          vec3 col = t.rgb * vCol.rgb * ${r?"ambient":"1.0"};
          float a = t.a * vCol.a;
          ${i?"col *= a * (1.0 - fog); gl_FragColor = vec4(col, 1.0);":"col = mix(col, fogColor, fog); gl_FragColor = vec4(col, a);"}
        }`,transparent:!0,depthWrite:!1,blending:i?mi:Pn});this.mesh=new wt(o,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?20:10,t.add(this.mesh),this.mat=l}spawn(t){let e;return this.p.length<this.max?(e={},this.p.push(e)):(e=this.p.shift(),this.p.push(e)),e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx||0,e.vy=t.vy||0,e.vz=t.vz||0,e.life=0,e.max=t.life||1,e.s0=t.size||4,e.s1=t.size1??e.s0,e.r=t.r??1,e.g=t.g??1,e.b=t.b??1,e.a0=t.alpha??1,e.a1=t.alpha1??0,e.grav=t.gravity||0,e.drag=t.drag??0,e.rot=t.rot??Math.random()*6.28,e.vrot=t.vrot||0,e.floor=t.floor??-1e9,e}update(t){let e=this.p,n=0,i=this.aPos.array,r=this.aSize.array,o=this.aCol.array;for(let a=0;a<e.length;a++){let l=e[a];if(l.life+=t,l.life>=l.max)continue;l.vy-=l.grav*t;let c=Math.exp(-l.drag*t);l.vx*=c,l.vy*=c,l.vz*=c,l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t,l.y<l.floor&&(l.y=l.floor,l.vy=0,l.vx*=.5,l.vz*=.5),l.rot+=l.vrot*t,e[n++]=l;let h=l.life/l.max,u=n-1;i[u*3]=l.x,i[u*3+1]=l.y,i[u*3+2]=l.z,r[u*2]=l.s0+(l.s1-l.s0)*h,r[u*2+1]=l.rot,o[u*4]=l.r,o[u*4+1]=l.g,o[u*4+2]=l.b,o[u*4+3]=l.a0+(l.a1-l.a0)*h}e.length=n,this.geo.instanceCount=n,this.aPos.needsUpdate=this.aSize.needsUpdate=this.aCol.needsUpdate=!0}clear(){this.p.length=0,this.geo.instanceCount=0}},xa=class s{constructor(t,e,{slots:n=10,dynamicSlots:i=6}={}){this.scene=t,this.statics=e.map(r=>({...r,color:new Et(r.color),phase:Math.random()*100,cur:1})),this.slots=[];for(let r=0;r<n;r++){let o=new ei(16777215,0,400,1.6);o.userData.assigned=null,t.add(o),this.slots.push(o)}this.dyn=[];for(let r=0;r<i;r++){let o=new ei(16777215,0,300,1.6);t.add(o),this.dyn.push({light:o,life:0,max:0,base:0,follow:null})}this.time=0}static intensityFor(t){return t.intensity*Math.pow(t.distance,1.6)*.055}flash(t,e,n,i,r,o,a,l=null){let c=this.dyn[0];for(let h of this.dyn){if(h.life>=h.max){c=h;break}h.max-h.life<c.max-c.life&&(c=h)}return c.light.position.set(t,e,n),c.light.color.set(i),c.light.distance=o,c.base=r*Math.pow(o,1.6)*.055,c.light.intensity=c.base,c.life=0,c.max=a,c.follow=l,c}update(t,e){this.time+=t;let n=this.time;for(let a of this.statics){let l=1;if(a.flicker){let f=Math.sin(n*13+a.phase)*Math.sin(n*7.3+a.phase*2)+Math.sin(n*31+a.phase);l=f>.9?.15:f>.6?.6:1}else a.nukage&&(l=.85+Math.sin(n*2.1+a.phase)*.1+Math.sin(n*5.3+a.phase)*.05);a.cur=l;let c=a.x-e.x,h=a.z-e.y,u=-a.y-e.z;a.score=Math.sqrt(c*c+h*h+u*u)-a.distance*.6}let i=this.statics.slice().sort((a,l)=>a.score-l.score).slice(0,this.slots.length),r=new Set(i),o=[];for(let a of this.slots)a.userData.assigned&&r.has(a.userData.assigned)?r.delete(a.userData.assigned):o.push(a);for(let a of r){let l=o.pop();if(!l)break;l.userData.assigned=a}for(let a of o)a.userData.assigned=null;for(let a of this.slots){let l=a.userData.assigned;if(!l){a.intensity=0;continue}a.position.set(l.x,l.z,-l.y),a.color.copy(l.color),a.distance=l.distance,a.intensity=s.intensityFor(l)*l.cur}for(let a of this.dyn){if(a.life>=a.max){a.light.intensity=0;continue}a.life+=t;let l=Math.max(0,1-a.life/a.max);a.light.intensity=a.base*l*l,a.follow&&a.light.position.copy(a.follow)}}};var ft=()=>Math.random(),Le=()=>Math.floor(Math.random()*256),ya=(s,t)=>{let e=s-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Lr=[0,1,2,3,4,5,6,7].map(s=>s*Math.PI/4),Ae=8,Zs=(s,t,e,n)=>s.set(t,n,-e),fh=new P,$s=class{constructor(t,e,n,i=0){this.world=t,this.x=e,this.y=n,this.angle=i,this.vx=0,this.vy=0,this.vz=0,this.radius=16,this.height=56,this.sector=t.level.findSector(e,n),this.z=this.sector?this.sector.floor:0,this.floorz=this.z,this.ceilz=this.z+128,this.health=1,this.solid=!0,this.shootable=!1,this.isMonster=!1,this.dead=!1,this.bleeds=!0,this.mass=100}get cz(){return this.z+this.height/2}updateHeights(){let t=this.world.level.heightsAt(this.x,this.y,this.radius,this.sector);return this.sector=t.sector||this.sector,this.floorz=t.floor,this.ceilz=t.ceil,t}tryMove(t,e,n=!1){let i=this.world.level,r=Math.max(1,Math.ceil(Math.hypot(t,e)/8)),o=t/r,a=e/r,l=[],c=null;for(let h=0;h<r;h++){let u=this.x+o,f=this.y+a;if(!n){let d=i.moveCircle(this,u,f);u=d.x,f=d.y,d.blocked.length&&(l=d.blocked);for(let p of this.world.solids){if(p===this||!p.solid||p.dead)continue;let x=u-p.x,g=f-p.y,m=this.radius+p.radius;if(Math.abs(x)>=m||Math.abs(g)>=m||this.z>=p.z+p.height||p.z>=this.z+this.height)continue;let _=Math.hypot(x,g);if(_>=m)continue;c=p;let v=_>.001?x/_:-o,y=_>.001?g/_:-a;u=p.x+v*(m+.01),f=p.y+y*(m+.01);let C=i.moveCircle(this,u,f);u=C.x,f=C.y}}this.x=u,this.y=f,this.sector=i.findSector(u,f,this.sector)||this.sector}return{blockedLines:l,hitActor:c}}applyGravity(t){if(this.z>this.floorz+.01||this.vz>0){if(this.vz-=1225*t,this.z+=this.vz*t,this.z<=this.floorz){let e=this.vz;return this.z=this.floorz,this.vz=0,e}}else this.z=this.floorz,this.vz=0;return this.z+this.height>this.ceilz&&this.ceilz-this.floorz>=this.height&&(this.z=this.ceilz-this.height,this.vz>0&&(this.vz=0)),0}},dh=class extends $s{constructor(t,e,n,i){super(t,e,n,i),this.radius=16,this.height=56,this.health=100,this.armor=0,this.armorType=0,this.pitch=0,this.viewHeight=41,this.viewOffset=0,this.deathDrop=0,this.weapons={fist:!0,pistol:!0,shotgun:!1,chaingun:!1},this.ammo={bullets:50,shells:0,rockets:0,cells:0},this.weapon="pistol",this.pendingWeapon=null,this.raise=1,this.weaponState="ready",this.cooldown=0,this.fireT=10,this.refire=0,this.flashT=0,this.punchPending=-1,this.bobPhase=0,this.bob=0,this.shootable=!0,this.damageCount=0,this.bonusCount=0,this.lastHurtAngle=null,this.lastHurtTime=-10,this.lastHurtAmount=0,this.grinTime=-10,this.attackHeld=0,this.slimeTimer=0,this.god=!1,this.noclip=!1,this.killer=null,this.landSquash=0}get eyeZ(){return this.z+this.viewHeight+this.viewOffset-this.deathDrop}update(t,e){let n=this.world,i=n.settings;if(this.dead){if(this.deathDrop=Math.min(this.viewHeight-8,this.deathDrop+t*60),this.killer&&!this.killer.dead){let y=Math.atan2(this.killer.y-this.y,this.killer.x-this.x);this.angle+=ya(y,this.angle)*Math.min(1,t*3)}this.pitch*=.95,this.updateHeights(),this.applyGravity(t),this.vx*=Math.exp(-t*4),this.vy*=Math.exp(-t*4),this.tryMove(this.vx*t,this.vy*t);return}this.angle-=e.lookX,this.pitch=Math.max(-1.25,Math.min(1.25,this.pitch-e.lookY));let r=e.run,o=e.forward*(r?583:292),a=e.strafe*(r?470:233),l=Math.cos(this.angle),c=Math.sin(this.angle),h=this.z<=this.floorz+.5,u=4.2,f=h?1:0,d=l*o+c*a,p=c*o-l*a;if(this.vx+=d*u*f*t,this.vy+=p*u*f*t,h){let y=Math.exp(-u*t);this.vx*=y,this.vy*=y}Math.hypot(this.vx,this.vy)<2&&!e.forward&&!e.strafe&&(this.vx=0,this.vy=0);let g=this.z;this.tryMove(this.vx*t,this.vy*t,this.noclip),this.updateHeights(),this.floorz>this.z&&this.floorz-this.z<=24.5&&(this.viewOffset-=this.floorz-this.z,this.z=this.floorz);let m=this.applyGravity(t);m<-280&&(this.landSquash=Math.min(16,-m/40),n.audio.play("player_land",{volume:.8})),this.z<g&&h&&g-this.z<24&&this.z<=this.floorz+.01&&(this.viewOffset+=Math.min(8,g-this.z)*.5),this.viewOffset*=Math.exp(-t*14),this.landSquash>0&&(this.landSquash=Math.max(0,this.landSquash-t*50));let _=Math.min(1,Math.hypot(this.vx,this.vy)/583)*(h?1:0);this.bob+=(_-this.bob)*Math.min(1,t*10),this.bobPhase+=t*11.5*(.4+_*.6);let v=this.sector;v&&(v.secret&&!v.secretFound&&(v.secretFound=!0,n.stats.secrets++,n.hud.message("A secret is revealed!",3,"#ffd23a"),n.audio.play("secret")),v.damage&&this.z<=this.floorz+.5?(this.slimeTimer-=t,this.slimeTimer<=0&&(this.slimeTimer=32*Pe,this.damage(v.damage,null,"slime"),n.audio.play("slime_burn",{volume:.6}))):this.slimeTimer=Math.min(this.slimeTimer,0),v.lift&&v.prevPlayerSector&&v.prevPlayerSector!==v&&v.prevPlayerSector.floor>=v.floor-1&&!v.moving&&n.activateLift(v),v!==this.lastSector&&(v.prevPlayerSector=this.lastSector,this.lastSector=v)),e.use&&n.useLines(this),this.updateWeapon(t,e),this.damageCount>0&&(this.damageCount=Math.max(0,this.damageCount-t*40)),this.bonusCount>0&&(this.bonusCount=Math.max(0,this.bonusCount-t*40)),n.pickupItems(this)}hasAmmo(t){let e=Pr[t];return!e.ammo||this.ammo[e.ammo]>=e.perShot}bestWeapon(){for(let t of["chaingun","shotgun","pistol","fist"])if(this.weapons[t]&&this.hasAmmo(t))return t;return"fist"}selectWeapon(t){!this.weapons[t]||this.dead||t===this.weapon&&!this.pendingWeapon||(this.pendingWeapon=t)}updateWeapon(t,e){let n=this.world;if(e.weaponSlot){let i=ch.find(r=>Pr[r].slot===e.weaponSlot);i&&this.selectWeapon(i)}if(e.cycle){let i=ch.filter(a=>this.weapons[a]),r=i.indexOf(this.pendingWeapon||this.weapon),o=i[(r+e.cycle+i.length)%i.length];this.selectWeapon(o)}if(this.fireT+=t,this.cooldown-=t,this.flashT>0&&(this.flashT-=t),this.punchPending>=0&&(this.punchPending-=t,this.punchPending<0&&n.punch(this)),this.weaponState==="lowering"){this.raise-=t*4.5,this.raise<=0&&(this.raise=0,this.weapon=this.pendingWeapon,this.pendingWeapon=null,this.weaponState="raising",n.audio.play("weapon_switch",{volume:.5}));return}if(this.weaponState==="raising"){this.raise+=t*4.5,this.raise>=1&&(this.raise=1,this.weaponState="ready");return}if(this.pendingWeapon&&this.cooldown<=0){this.weaponState="lowering";return}if(e.fire?this.attackHeld+=t:this.attackHeld=0,e.fire&&this.cooldown<=0){if(!this.hasAmmo(this.weapon)){let i=this.bestWeapon();i!==this.weapon&&this.selectWeapon(i);return}n.fireWeapon(this,this.weapon),this.refire++,this.cooldown=Pr[this.weapon].refire,this.fireT=0}else!e.fire&&this.cooldown<=0&&(this.refire=0)}damage(t,e,n){let i=this.world;if(!this.dead&&!(this.god&&n!=="telefrag")){if(t*=kn[i.skill].dmgMul,t=Math.max(1,Math.round(t)),this.armorType){let r=this.armorType===1?Math.floor(t/3):Math.floor(t/2);this.armor<=r&&(r=this.armor,this.armorType=0),this.armor-=r,t-=r}this.health-=t,this.damageCount=Math.min(100,this.damageCount+t*2.5),this.lastHurtTime=i.time,this.lastHurtAmount=t,e&&e!==this?(this.lastHurtAngle=ya(Math.atan2(e.y-this.y,e.x-this.x),this.angle),i.hud.hurtFrom(this.lastHurtAngle,t)):this.lastHurtAngle=null,this.health<=0?(this.health=Math.max(this.health,-99),this.dead=!0,this.killer=e,i.audio.play(this.health<-50?"gib":"player_death"),i.onPlayerDeath()):i.audio.play("player_pain",{volume:.9})}}},ph=class s extends $s{constructor(t,e,n,i,r,o){super(t,n,i,r);let a=lh[e];this.type=e,this.def=a,this.radius=a.radius,this.height=a.height,this.health=a.hp,this.mass=a.mass,this.shootable=!0,this.isMonster=!0,this.ambush=!!o,this.state="spawn",this.st=0,this.target=null,this.threshold=0,this.reaction=a.reaction,this.movedir=Ae,this.movecount=0,this.stepTimer=ft()*a.stepTics*Pe,this.lookTimer=ft()*.3,this.justAttacked=!1,this.justHit=!1,this.fired=!1,this.model=new la(e),this.model.addBloodPool(),this.walkPhase=ft()*6,this.visAngle=r,this.fast=!!kn[t.skill].fast,t.scene.add(this.model.root),this.syncModel(0),this.time=ft()*10}get speed(){return this.def.speed/(this.def.stepTics*Pe)}syncModel(t){let e=this.model;Zs(e.root.position,this.x,this.y,this.z);let n=this.state==="attack"||this.state==="melee"||this.state==="pain"?this.angle:this.movedir!==Ae&&this.state==="chase"?Lr[this.movedir]:this.angle;this.visAngle+=ya(n,this.visAngle)*Math.min(1,t*10),this.dead||(e.root.rotation.y=this.visAngle+Math.PI/2);let i="idle";this.dead?i="dead":this.state==="chase"?i="walk":this.state==="attack"?i=this.meleeAttack?"melee":"attack":this.state==="pain"&&(i="pain");let r=0;if(this.target&&this.state==="attack"){let o=this.target.cz-(this.z+40);r=Math.atan2(o,Math.hypot(this.target.x-this.x,this.target.y-this.y))*.8}this.sector&&e.setShadows(!!this.sector.sky),e.update(t,{anim:i,t:this.st,walkPhase:this.walkPhase,time:this.time,fireAt:this.fireAt,aimPitch:r})}canSee(t){return this.world.level.checkSight(this.x,this.y,this.z+this.height*.75,t.x,t.y,t.z,t.z+t.height)}lookForPlayer(t){let e=this.world.player;if(e.dead||!this.canSee(e))return!1;if(!t){let n=Math.atan2(e.y-this.y,e.x-this.x),i=Math.hypot(e.x-this.x,e.y-this.y);if(Math.abs(ya(n,this.angle))>Math.PI/2&&i>64)return!1}return this.target=e,!0}wake(){this.state="chase",this.st=0,this.world.audio.play(this.def.sight,{pos:this.pos3(),pitchVar:.08,volume:1,rate:this.def.voicePitch})}pos3(){return{x:this.x,y:this.z+40,z:-this.y}}update(t){let e=this.world;if(this.time+=t,this.st+=t,this.updateHeights(),this.floorz>this.z&&this.floorz-this.z<=24.5&&(this.z=this.floorz),this.applyGravity(t),this.dead){this.syncModel(t),this.respawnAt&&e.time>this.respawnAt&&!this.gibbed&&this.tryRespawn();return}if(this.vx||this.vy){this.tryMove(this.vx*t,this.vy*t);let n=Math.exp(-t*6);this.vx*=n,this.vy*=n,Math.abs(this.vx)+Math.abs(this.vy)<3&&(this.vx=this.vy=0)}switch(this.state){case"spawn":{if(this.lookTimer-=t,this.lookTimer<=0){this.lookTimer=10*Pe;let n=!1,i=this.sector;i&&i.soundTarget&&i.soundTime>(this.lastHeard||-1)&&(this.lastHeard=i.soundTime,(!this.ambush||this.canSee(i.soundTarget))&&(this.target=i.soundTarget,n=!0)),n||(n=this.lookForPlayer(!1)),n&&this.wake()}break}case"chase":this.chase(t);break;case"attack":this.attackState(t);break;case"pain":this.st>.2&&(this.state="chase",this.st=0);break}this.syncModel(t)}chase(t){let e=this.world;if(this.movedir!==Ae){let r=this.speed*t,o=this.x,a=this.y,l=this.tryMove(Math.cos(Lr[this.movedir])*r,Math.sin(Lr[this.movedir])*r),c=Math.hypot(this.x-o,this.y-a);if(this.walkPhase+=c*.16,c<r*.4){for(let h of l.blockedLines)e.monsterUseLine(this,h);this.newChaseDir()}}if(this.stepTimer-=t,this.stepTimer>0)return;this.stepTimer+=this.def.stepTics*Pe,this.reaction>0&&this.reaction--,this.threshold>0&&this.threshold--;let n=this.target;if(!n||n.dead||!n.shootable){if(this.target=null,this.lookForPlayer(!0))return;this.state="spawn",this.st=0,this.movedir=Ae;return}if(this.justAttacked){this.justAttacked=!1,this.fast||this.newChaseDir();return}let i=Math.hypot(n.x-this.x,n.y-this.y);if(this.def.melee&&i<44+n.radius&&Math.abs(n.z-this.z)<48&&this.canSee(n)){this.startAttack(!0);return}if((this.fast||this.movecount<=0)&&this.checkMissileRange(i)){this.startAttack(!1);return}(--this.movecount<0||this.movedir===Ae)&&this.newChaseDir(),Le()<3&&e.audio.play(this.def.active,{pos:this.pos3(),volume:.8,rate:this.def.voicePitch})}checkMissileRange(t){let e=this.target;if(!this.canSee(e))return!1;if(this.justHit)return this.justHit=!1,!0;if(this.reaction>0&&!this.fast)return!1;let n=t-64;return this.def.melee||(n-=128),n>200&&(n=200),!(Le()<n)}startAttack(t){this.state="attack",this.st=0,this.fired=!1,this.meleeAttack=t,this.fireAt=t?6*Pe:this.def.fireAt*(this.fast?.5:1),this.attackEnd=t?18*Pe:this.def.attackEnd*(this.fast?.5:1),this.faceTarget(),t&&this.world.audio.play("imp_claw",{pos:this.pos3(),volume:.8})}faceTarget(){this.target&&(this.angle=Math.atan2(this.target.y-this.y,this.target.x-this.x))}attackState(){let t=this.world,e=this.target;if(this.fired||this.faceTarget(),!this.fired&&this.st>=this.fireAt){if(this.fired=!0,!e||e.dead){this.state="chase";return}if(this.meleeAttack||this.def.melee&&Math.hypot(e.x-this.x,e.y-this.y)<44+e.radius&&this.canSee(e)){let n=(Le()%8+1)*3;Math.hypot(e.x-this.x,e.y-this.y)<44+e.radius+8&&t.damageActor(e,n,this,this)}else if(this.def.attack==="hitscan"){t.audio.play(this.def.shot,{pos:this.pos3(),volume:.9}),this.model.flash=.09;let n=this.model.firePoint(fh);t.lights.flash(n.x,n.y,n.z,16760944,1.6,260,.08);let i=this.z+32,r=Math.hypot(e.x-this.x,e.y-this.y),o=(e.cz-i)/Math.max(1,r);for(let a=0;a<this.def.pellets;a++){let l=this.angle+(Le()-Le())/255*(22.4*Math.PI/180),c=(Le()%5+1)*3;t.lineAttack(this,this.x,this.y,i,l,o,2048,c)}t.level.noiseAlert(this.sector,e,t.time)}else this.def.attack==="fireball"&&t.spawnFireball(this,e)}this.st>=this.attackEnd&&(this.state="chase",this.st=0,this.justAttacked=!0)}tryWalk(t){if(t===Ae)return!1;let e=this.world.level,n=20,i=this.x+Math.cos(Lr[t])*n,r=this.y+Math.sin(Lr[t])*n,o=e.moveCircle(this,i,r),l=Math.hypot(o.x-this.x,o.y-this.y)>n*.7;if(!l){for(let c of o.blocked)if(this.world.monsterUseLine(this,c)){l=!0;break}}if(l){for(let c of this.world.solids)if(!(c===this||c.dead||!c.solid)&&Math.hypot(o.x-c.x,o.y-c.y)<this.radius+c.radius-2&&Math.hypot(this.x-c.x,this.y-c.y)>=this.radius+c.radius-2&&c.z<this.z+this.height&&this.z<c.z+c.height){l=!1;break}}return l?(this.movedir=t,this.movecount=Le()&15,!0):!1}newChaseDir(){let t=this.target;if(!t){this.movedir=Ae;return}let e=this.movedir,n=e===Ae?Ae:(e+4)%8,i=t.x-this.x,r=t.y-this.y,o=i>10?0:i<-10?4:Ae,a=r<-10?6:r>10?2:Ae;if(o!==Ae&&a!==Ae){let c=o===0?a===2?1:7:a===2?3:5;if(c!==n&&this.tryWalk(c))return}if(Le()>200||Math.abs(r)>Math.abs(i)){let c=o;o=a,a=c}if(o===n&&(o=Ae),a===n&&(a=Ae),o!==Ae&&this.tryWalk(o)||a!==Ae&&this.tryWalk(a)||e!==Ae&&this.tryWalk(e))return;let l=ft()<.5?[0,1,2,3,4,5,6,7]:[7,6,5,4,3,2,1,0];for(let c of l)if(c!==n&&this.tryWalk(c))return;n!==Ae&&this.tryWalk(n)||(this.movedir=Ae)}damage(t,e,n){let i=this.world;if(!this.dead){if(this.health-=t,n&&n!==this){let r=Math.atan2(this.y-n.y,this.x-n.x),o=t*12.5/this.mass*35*.6;this.vx+=Math.cos(r)*o,this.vy+=Math.sin(r)*o}if(this.health<=0){this.die(e);return}this.justHit=!0,Le()<this.def.painChance&&(this.state="pain",this.st=0,i.audio.play(this.def.pain,{pos:this.pos3(),rate:this.def.voicePitch})),e&&e!==this&&(this.threshold<=0||!this.target||this.target.dead)&&e.shootable&&(this.target=e,this.threshold=100),this.state==="spawn"&&(this.state="chase"),this.reaction=0}}die(t){let e=this.world;this.dead=!0,this.solid=!1,this.shootable=!1,this.state="dead",this.st=0,this.gibbed=this.health<-this.def.hp,this.model.root.rotation.y=this.visAngle+Math.PI/2,this.gibbed?(this.model.gib(),e.audio.play("gib",{pos:this.pos3()}),e.fx.blood(this.x,this.y,this.z+30,40,1.6)):e.audio.play(this.def.death,{pos:this.pos3(),rate:this.def.voicePitch}),this.respawned||e.stats.kills++,this.def.drop&&e.spawnItem(this.def.drop,this.x,this.y,!0),kn[e.skill].respawn&&(this.respawnAt=e.time+12+ft()*8)}tryRespawn(){let t=this.world,e=this.spawn;for(let i of t.solids)if(!i.dead&&i.solid&&Math.hypot(i.x-e.x,i.y-e.y)<i.radius+this.radius){this.respawnAt=t.time+3;return}t.scene.remove(this.model.root);let n=new s(t,this.type,e.x,e.y,e.angle,e.ambush);n.spawn=e,n.respawned=!0,t.monsters.push(n),t.solids.push(n),this.respawnAt=null,t.fx.teleport(e.x,e.y,n.z)}},mh=class extends $s{constructor(t,e,n){super(t,e,n),this.radius=10,this.height=42,this.health=20,this.shootable=!0,this.bleeds=!1,this.type="barrel";let i=ha("barrel");this.model=i.group,Zs(this.model.position,e,n,this.z),this.model.rotation.y=ft()*6.28,t.scene.add(this.model),this.explodeAt=-1,this.phase=ft()*10}damage(t,e){this.dead||(this.health-=t,this.health<=0&&(this.dead=!0,this.shootable=!1,this.killer=e,this.explodeAt=this.world.time+10*Pe))}update(t){let e=this.world;if(this.explodeAt>0&&e.time>=this.explodeAt&&(this.explodeAt=-1,this.solid=!1,e.scene.remove(this.model),e.audio.play("barrel_explode",{pos:{x:this.x,y:this.z+20,z:-this.y}}),e.fx.explosion(this.x,this.y,this.z+24,1.2),e.radiusAttack(this,this.killer||this,128),this.gone=!0),!this.gone){let n=this.model.userData.slime;n&&(n.material.emissiveIntensity=1.8+Math.sin(e.time*3+this.phase)*.5),this.dead&&(this.model.position.x=this.x+(ft()-.5)*1.5)}}},gh=class extends $s{constructor(t,e,n,i){super(t,n,i),this.type=e,this.radius=16,this.height=80;let r=ha(e);this.model=r.group,Zs(this.model.position,n,i,this.z),t.scene.add(this.model)}},xh=class{constructor(t,e,n,i,r){this.world=t,this.type=e,this.x=n,this.y=i,this.dropped=!!r,this.def=uh[e],this.sector=t.level.findSector(n,i),this.z=this.sector?this.sector.floor:0;let o=ha(e);this.model=o.group,this.spin=o.spin,this.bob=o.bob,this.phase=ft()*6.28,this.vz=r?140:0,this.zoff=r?30:0,Zs(this.model.position,n,i,this.z),t.scene.add(this.model),this.taken=!1}update(t,e){(this.zoff>0||this.vz>0)&&(this.vz-=1225*t,this.zoff+=this.vz*t,this.zoff<=0&&(this.zoff=0,this.vz=0));let n=this.bob?2+Math.sin(e*2.4+this.phase)*2:0;this.model.position.y=this.z+this.zoff+n,this.spin&&(this.model.rotation.y=e*1.2+this.phase)}},yh=class{constructor(t,e,n,i,r,o,a,l){this.world=t,this.owner=e,this.x=n,this.y=i,this.z=r,this.vx=Math.cos(o)*l,this.vy=Math.sin(o)*l,this.vz=a*l,this.radius=6,this.height=8,this.sector=t.level.findSector(n,i),this.model=Of(),Zs(this.model.position,n,i,r),t.scene.add(this.model),this.light=t.lights.flash(n,r,-i,16740384,1.4,300,30,this.model.position),this.dead=!1,this.age=0}update(t){let e=this.world,n=e.level;this.age+=t;let i=Math.max(1,Math.ceil(Math.hypot(this.vx,this.vy,this.vz)*t/8));for(let o=0;o<i&&!this.dead;o++){let a=t/i,l=this.x+this.vx*a,c=this.y+this.vy*a,h=this.z+this.vz*a;for(let f of n.crossings(this.x,this.y,l,c)){let d=f.line,p=this.z+(h-this.z)*f.t;if(!d.back){this.explode(this.x+(l-this.x)*f.t,this.y+(c-this.y)*f.t,p);return}let x=Math.min(d.front.ceil,d.back.ceil),g=Math.max(d.front.floor,d.back.floor);if(p<g||p+this.height>x){if(p+this.height>x&&d.front.sky&&d.back.sky){this.vanish();return}this.explode(this.x+(l-this.x)*f.t,this.y+(c-this.y)*f.t,p);return}}this.x=l,this.y=c,this.z=h,this.sector=n.findSector(l,c,this.sector);let u=this.sector;if(u){if(this.z<u.floor){this.explode(this.x,this.y,u.floor+2);return}if(this.z+this.height>u.ceil){if(u.sky){this.vanish();return}this.explode(this.x,this.y,u.ceil-4);return}}for(let f of e.shootables()){if(f===this.owner||!f.shootable||Math.hypot(f.x-this.x,f.y-this.y)>f.radius+this.radius||this.z>f.z+f.height||this.z+this.height<f.z)continue;if(f.type&&this.owner.type===f.type){this.explode(this.x,this.y,this.z);return}let p=(Le()%8+1)*3;e.damageActor(f,p,this.owner,this),this.explode(this.x,this.y,this.z);return}}if(this.dead)return;Zs(this.model.position,this.x,this.y,this.z+4);let r=14+Math.sin(this.age*40)*2;this.model.userData.core.scale.set(r,r,1),this.model.userData.core.material.rotation=this.age*8,ft()<.8&&e.fx.trail(this.x,this.y,this.z+4)}explode(t,e,n){let i=this.world;this.dead=!0,i.scene.remove(this.model),this.light.life=this.light.max,i.audio.play("fireball_explode",{pos:{x:t,y:n,z:-e}}),i.fx.fireballHit(t,e,n)}vanish(){this.dead=!0,this.world.scene.remove(this.model),this.light.life=this.light.max}},vh=class{constructor(t){let e=t.tex,n=t.scene;this.world=t,this.smoke=new Ii(n,e.SMOKE.map,{max:500,additive:!1,lit:!0}),this.blood_=new Ii(n,e.BLOOD.map,{max:500,additive:!1,lit:!0}),this.spark=new Ii(n,e.SPARK.map,{max:400,additive:!0}),this.fire=new Ii(n,e.FIRE.map,{max:400,additive:!0}),this.flare=new Ii(n,e.FLARE.map,{max:200,additive:!0}),this.all=[this.smoke,this.blood_,this.spark,this.fire,this.flare],this.decals=[],this.decalMat=new ke({map:e.SCORCH.map,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.decalGeo=new fn(1,1)}update(t,e,n){for(let i of this.all)i.update(t),i.mat.uniforms.fogDensity.value=e,i.mat.uniforms.ambient.value=n}puff(t,e,n,i=0,r=0,o=0){for(let a=0;a<5;a++)this.spark.spawn({x:t,y:n,z:-e,vx:i*120+(ft()-.5)*200,vy:o*120+ft()*160,vz:-(r*120+(ft()-.5)*200),life:.15+ft()*.25,size:1.6,size1:.4,r:1,g:.8,b:.45,alpha:1,alpha1:0,gravity:500});for(let a=0;a<2;a++)this.smoke.spawn({x:t+i*2,y:n+o*2,z:-(e+r*2),vx:i*20+(ft()-.5)*10,vy:18+ft()*10,vz:-r*20+(ft()-.5)*10,life:.8+ft()*.6,size:5,size1:16,r:.6,g:.58,b:.55,alpha:.55,alpha1:0,drag:2,vrot:(ft()-.5)*2});this.flare.spawn({x:t,y:n,z:-e,life:.06,size:10,size1:4,r:1,g:.7,b:.3,alpha:.9,alpha1:0})}blood(t,e,n,i=10,r=1){let o=this.world.level.findSector(t,e),a=o?o.floor+.5:-1e9;for(let l=0;l<i;l++)this.blood_.spawn({x:t,y:n,z:-e,vx:(ft()-.5)*160*r,vy:ft()*140*r,vz:(ft()-.5)*160*r,life:.5+ft()*.6,size:2.5+ft()*3,size1:4+ft()*3,r:.75,g:.04,b:.03,alpha:1,alpha1:0,gravity:700,floor:a});for(let l=0;l<Math.min(3,i/3);l++)this.blood_.spawn({x:t,y:n,z:-e,vx:(ft()-.5)*30,vy:ft()*30,vz:(ft()-.5)*30,life:.4,size:6,size1:14,r:.5,g:.02,b:.02,alpha:.7,alpha1:0,gravity:50})}explosion(t,e,n,i=1){let r=this.world;r.lights.flash(t,n,-e,16744496,3.5*i,520*i,.7);for(let l=0;l<26*i;l++){let c=ft()*6.28,h=ft()*3.14-1.57,u=60+ft()*220;this.fire.spawn({x:t,y:n,z:-e,vx:Math.cos(c)*Math.cos(h)*u,vy:Math.sin(h)*u*.8+60,vz:Math.sin(c)*Math.cos(h)*u,life:.35+ft()*.45,size:18*i,size1:46*i,r:1,g:.75,b:.45,alpha:1,alpha1:0,drag:4,vrot:(ft()-.5)*4})}for(let l=0;l<14*i;l++)this.smoke.spawn({x:t+(ft()-.5)*30,y:n+ft()*20,z:-(e+(ft()-.5)*30),vx:(ft()-.5)*60,vy:30+ft()*50,vz:(ft()-.5)*60,life:1.6+ft()*1.2,size:24,size1:70,r:.22,g:.2,b:.18,alpha:.75,alpha1:0,drag:1.2,vrot:(ft()-.5)*1.5});for(let l=0;l<30*i;l++){let c=ft()*6.28,h=200+ft()*400;this.spark.spawn({x:t,y:n,z:-e,vx:Math.cos(c)*h,vy:ft()*300,vz:Math.sin(c)*h,life:.4+ft()*.6,size:2.2,size1:.5,r:1,g:.7,b:.3,alpha:1,alpha1:0,gravity:600})}this.flare.spawn({x:t,y:n,z:-e,life:.35,size:120*i,size1:200*i,r:1,g:.6,b:.25,alpha:1,alpha1:0});let o=r.player,a=Math.hypot(o.x-t,o.y-e);r.shake=Math.max(r.shake,Math.max(0,1-a/700)*14)}fireballHit(t,e,n){this.world.lights.flash(t,n,-e,16736288,2.2,300,.35);for(let i=0;i<14;i++){let r=ft()*6.28,o=40+ft()*140;this.fire.spawn({x:t,y:n,z:-e,vx:Math.cos(r)*o,vy:(ft()-.3)*o,vz:Math.sin(r)*o,life:.3+ft()*.3,size:10,size1:26,r:1,g:.55,b:.3,alpha:1,alpha1:0,drag:5})}for(let i=0;i<4;i++)this.smoke.spawn({x:t,y:n,z:-e,vx:(ft()-.5)*30,vy:25,vz:(ft()-.5)*30,life:1.2,size:12,size1:34,r:.25,g:.2,b:.18,alpha:.6,alpha1:0,drag:1});this.flare.spawn({x:t,y:n,z:-e,life:.25,size:60,size1:90,r:1,g:.45,b:.15,alpha:1,alpha1:0})}trail(t,e,n){this.fire.spawn({x:t+(ft()-.5)*3,y:n+(ft()-.5)*3,z:-(e+(ft()-.5)*3),vy:10,life:.25+ft()*.15,size:8,size1:2,r:1,g:.45,b:.15,alpha:.9,alpha1:0}),ft()<.3&&this.smoke.spawn({x:t,y:n,z:-e,vy:12,life:.7,size:5,size1:14,r:.3,g:.25,b:.22,alpha:.35,alpha1:0})}teleport(t,e,n){for(let i=0;i<40;i++){let r=ft()*6.28;this.flare.spawn({x:t+Math.cos(r)*20,y:n+ft()*56,z:-(e+Math.sin(r)*20),vy:40+ft()*60,life:.8,size:10,size1:2,r:.3,g:1,b:.4,alpha:1,alpha1:0})}}bulletHole(t,e,n,i,r,o){let a;this.decals.length<80?(a=new wt(this.decalGeo,this.decalMat),a.receiveShadow=!0,this.world.scene.add(a),this.decals.push(a)):(a=this.decals.shift(),this.decals.push(a));let l=5+ft()*3;a.scale.set(l,l,1),a.position.set(t+i*.3,n+o*.3,-(e+r*.3)),fh.set(a.position.x+i,a.position.y+o,a.position.z-r),a.lookAt(fh),a.rotateZ(ft()*6.28)}slimeSplash(t,e,n){for(let i=0;i<4;i++)this.flare.spawn({x:t+(ft()-.5)*20,y:n+2,z:-(e+(ft()-.5)*20),vy:40+ft()*40,vx:(ft()-.5)*40,vz:(ft()-.5)*40,gravity:300,life:.4,size:4,size1:2,r:.4,g:1,b:.2,alpha:.9,alpha1:0})}},va=class{constructor(t,e,n){this.ctx=t,this.tex=t.tex,this.audio=t.audio,this.hud=t.hud,this.settings=t.settings,this.skill=n,this.mapData=e,this.scene=new jn,this.scene.fog=new Eo(328707,42e-5),this.level=new ga(e),this.lr=new fa(this.level,this.tex,this.scene),this.sky=Bf(this.tex),this.scene.add(this.sky),this.time=0,this.shake=0,this.stats={kills:0,totalKills:0,items:0,totalItems:0,secrets:0,totalSecrets:0,time:0},this.stats.totalSecrets=this.level.sectors.filter(i=>i.secret).length,this.monsters=[],this.items=[],this.projectiles=[],this.barrels=[],this.decor=[],this.solids=[],this.exiting=!1,this.exited=!1,this.lineCheckIdx=0,this.setupLights(),this.spawnThings(),this.fx=new vh(this),this.lights=new xa(this.scene,this.lr.staticLights,{slots:t.settings.lightSlots||12,dynamicSlots:6})}setupLights(){let t=new Os(16774376,2.2);this.scene.add(t),this.ambient=t;let e=new ko(8425632,3154968,.35);this.scene.add(e);let n=this.mapData.sun,i=new Ns(n.color,n.intensity),r=this.level.bounds,o=(r.minx+r.maxx)/2,a=(r.miny+r.maxy)/2,l=Math.max(r.maxx-r.minx,r.maxy-r.miny)*.75,c=new P(...n.dir).normalize();i.position.set(o-c.x*2e3,0-c.y*2e3,-a-c.z*2e3),i.target.position.set(o,0,-a),this.scene.add(i.target),i.castShadow=!!this.settings.shadows;let h=this.settings.shadowSize||4096;i.shadow.mapSize.set(h,h);let u=i.shadow.camera;u.left=-l,u.right=l,u.top=l,u.bottom=-l,u.near=10,u.far=5e3,i.shadow.bias=-4e-4,i.shadow.normalBias=1.5,this.scene.add(i),this.sun=i}spawnThings(){let t=kn[this.skill].bit;for(let e of this.mapData.things){if(e.type!=="player"&&e.skill!==void 0&&!(e.skill&t))continue;let n=(e.angle||0)*Math.PI/180;if(e.type==="player")this.player=new dh(this,e.x,e.y,n);else if(lh[e.type]){let i=new ph(this,e.type,e.x,e.y,n,e.ambush);i.spawn={x:e.x,y:e.y,angle:n,ambush:e.ambush},this.monsters.push(i),this.solids.push(i),this.stats.totalKills++}else if(e.type==="barrel"){let i=new mh(this,e.x,e.y);this.barrels.push(i),this.solids.push(i)}else if(e.type==="lamp"){let i=new gh(this,"lamp",e.x,e.y);this.decor.push(i),this.solids.push(i),this.lr.staticLights.push({x:e.x,y:e.y,z:i.z+72,color:14674687,intensity:1.2,distance:380})}else uh[e.type]&&this.spawnItem(e.type,e.x,e.y,!1)}this.solids.push(this.player)}spawnItem(t,e,n,i){let r=new xh(this,t,e,n,i);return this.items.push(r),r.def.count&&!i&&this.stats.totalItems++,r}*shootables(){this.player.shootable&&!this.player.dead&&(yield this.player);for(let t of this.monsters)t.shootable&&!t.dead&&(yield t);for(let t of this.barrels)t.shootable&&!t.dead&&(yield t)}damageActor(t,e,n,i){t.dead||t.damage(e,n,i)}lineAttack(t,e,n,i,r,o,a,l,c={}){let u=this.level.traceWorld(e,n,i,r,o,a,t.sector),f=null,d=u.dist,p=Math.cos(r),x=Math.sin(r);for(let v of this.shootables()){if(v===t)continue;let y=v.x-e,C=v.y-n,T=y*p+C*x;if(T<=0||T-v.radius>d)continue;let R=y*y+C*C-T*T;if(R>v.radius*v.radius)continue;let S=T-Math.sqrt(v.radius*v.radius-R);if(S>d)continue;let M=i+o*Math.max(0,S);if(M<v.z||M>v.z+v.height){let b=T+Math.sqrt(v.radius*v.radius-R),E=i+o*b;if(!(M<v.z&&E>=v.z||M>v.z+v.height&&E<=v.z+v.height))continue}f=v,d=Math.max(0,S)}let g=e+p*d,m=n+x*d,_=i+o*d;return f?(f.bleeds?this.fx.blood(g,m,_,8,.8):this.fx.puff(g-p*4,m-x*4,_,-p,-x,0),this.damageActor(f,l,t,t),c.punch&&this.audio.play("punch_hit",{volume:.9}),{actor:f,dist:d}):u.kind==="none"||u.kind==="sky"?null:c.punch?(u.dist<a&&this.audio.play("bullet_hit",{pos:{x:u.x,y:u.z,z:-u.y},volume:.5}),null):(this.fx.puff(u.x,u.y,u.z,u.nx,u.ny,u.nz),this.fx.bulletHole(u.x,u.y,u.z,u.nx,u.ny,u.nz),ft()<.35&&this.audio.play("bullet_hit",{pos:{x:u.x,y:u.z,z:-u.y},volume:.35}),null)}aimSlope(t,e,n=2048){let i=t.z+41,r=Math.cos(e),o=Math.sin(e),a=Math.tan(t.pitch),l=null,c=1/0;for(let h of this.shootables()){if(h===t||h.type==="barrel")continue;let u=h.x-t.x,f=h.y-t.y,d=u*r+f*o;if(d<=0||d>n||Math.abs(-u*o+f*r)>h.radius+4)continue;let x=(h.cz-i)/d;Math.abs(Math.atan(x)-t.pitch)>.33||d<c&&this.level.checkSight(t.x,t.y,i,h.x,h.y,h.z,h.z+h.height)&&(l=h,c=d)}return l?(l.cz-i)/c:a}fireWeapon(t,e){let n=Pr[e],i=t.z+41;n.ammo&&(t.ammo[n.ammo]-=n.perShot),this.level.noiseAlert(t.sector,t,this.time);let r=Math.tan(t.pitch),o=c=>this.settings.autoaim?this.aimSlopeCombined(t,c,r):r,a=5.6*Math.PI/180;if(e==="fist"){t.punchPending=3*Pe,this.audio.play("punch",{volume:.6});return}let l=()=>{t.flashT=.07;let c=t.x+Math.cos(t.angle)*20,h=t.y+Math.sin(t.angle)*20;this.lights.flash(c,i-4,-h,16760944,e==="shotgun"?3.4:2.4,420,.1)};if(e==="pistol"||e==="chaingun"){this.audio.play(e==="pistol"?"pistol":"chaingun",{volume:.9}),l();let c=t.angle;t.refire>0&&(c+=(Le()-Le())/255*a);let h=5*(Le()%3+1);this.lineAttack(t,t.x,t.y,i,c,o(c),2048,h),t.kick=(t.kick||0)+(e==="pistol"?.012:.006)}else if(e==="shotgun"){this.audio.play("shotgun",{volume:1}),l();let c=o(t.angle);for(let h=0;h<7;h++){let u=t.angle+(Le()-Le())/255*a,f=5*(Le()%3+1);this.lineAttack(t,t.x,t.y,i,u,c,2048,f)}t.kick=(t.kick||0)+.035}}aimSlopeCombined(t,e,n){let i=t.z+41,r=Math.cos(e),o=Math.sin(e);for(let a of this.shootables()){if(a===t)continue;let l=a.x-t.x,c=a.y-t.y,h=l*r+c*o;if(h<=0||Math.abs(-l*o+c*r)>a.radius)continue;let f=i+n*h;if(f>=a.z&&f<=a.z+a.height)return n}return this.aimSlope(t,e)}punch(t){let e=t.angle+(Le()-Le())/255*(5.6*Math.PI/180)*.5,n=(Le()%10+1)*2,i=this.aimSlope(t,e,64),r=this.lineAttack(t,t.x,t.y,t.z+41,e,i,72,n,{punch:!0});r&&r.actor&&(t.angle=Math.atan2(r.actor.y-t.y,r.actor.x-t.x))}spawnFireball(t,e){let n=t.z+32,i=Math.atan2(e.y-t.y,e.x-t.x),r=Math.hypot(e.x-t.x,e.y-t.y),o=(kn[this.skill].fast?20:10)*35,a=(e.cz-n)/Math.max(1,r),l=new yh(this,t,t.x+Math.cos(i)*22,t.y+Math.sin(i)*22,n,i,a,o);this.projectiles.push(l),this.audio.play("fireball_launch",{pos:t.pos3()})}radiusAttack(t,e,n){for(let i of[...this.shootables()]){if(i===t)continue;let r=Math.max(0,Math.max(Math.abs(i.x-t.x),Math.abs(i.y-t.y))-i.radius);if(r>=n||!this.level.checkSight(t.x,t.y,t.z+20,i.x,i.y,i.z,i.z+i.height))continue;let o=n-r;if(this.damageActor(i,o,e,t),i===this.player){let a=Math.atan2(i.y-t.y,i.x-t.x),l=o/8*35;i.vx+=Math.cos(a)*l,i.vy+=Math.sin(a)*l}}}useLines(t){let e=this.level,n=64+t.radius,i=t.x+Math.cos(t.angle)*n,r=t.y+Math.sin(t.angle)*n;for(let o of e.crossings(t.x,t.y,i,r)){let a=o.line;if(a.tex==="SWITCH"&&a.front.exit){this.exitSwitch(a);return}let l=a.back&&(a.back.door?a.back:a.front.door?a.front:null);if(l&&l!==t.sector){this.activateDoor(l,!0);return}let c=a.back&&(a.back.lift?a.back:a.front.lift?a.front:null);if(c){this.activateLift(c);return}if(!a.back||e.lineBlocks(a,t.z,t.height,!1)){this.audio.play("noway",{volume:.8});return}}}monsterUseLine(t,e){if(!e.back)return!1;let n=e.back.door?e.back:e.front.door?e.front:null;return!n||n.secretDoor?!1:((!n.moving||n.moving.state==="closing")&&this.activateDoor(n,!1),!0)}activateDoor(t,e){let n=t.moving,i={x:t.cx,y:t.floor+64,z:-t.cy};n?n.state==="closing"?(n.state="opening",this.audio.play("door_open",{pos:i})):n.state==="open"&&e&&(n.state="closing",this.audio.play("door_close",{pos:i})):(t.moving={type:"door",state:"opening",wait:0},this.audio.play("door_open",{pos:i}))}activateLift(t){t.moving||(t.moving={type:"lift",state:"down",wait:0},this.audio.play("lift_start",{pos:{x:t.cx,y:t.floor,z:-t.cy}}))}exitSwitch(t){this.exiting||(this.exiting=!0,this.lr.setLineTexture(t,"SWITCH_ON"),this.audio.play("switch"),this.exitAt=this.time+.9)}actorsInSector(t){let e=[];for(let n of[this.player,...this.monsters])n.dead&&n!==this.player||n.x+n.radius>t.bbox[0]&&n.x-n.radius<t.bbox[2]&&n.y+n.radius>t.bbox[1]&&n.y-n.radius<t.bbox[3]&&e.push(n);return e}updateMovers(t){for(let e of this.level.sectors){let n=e.moving;if(n){if(n.type==="door")n.state==="opening"?(e.ceil=Math.min(e.doorTop,e.ceil+91*t),e.ceil>=e.doorTop&&(n.state="open",n.wait=150*Pe)):n.state==="open"?(n.wait-=t,n.wait<=0&&(this.actorsInSector(e).length?n.wait=.5:(n.state="closing",this.audio.play("door_close",{pos:{x:e.cx,y:e.floor+64,z:-e.cy}})))):n.state==="closing"&&(this.actorsInSector(e).filter(o=>!o.dead).length?(n.state="opening",this.audio.play("door_open",{pos:{x:e.cx,y:e.floor+64,z:-e.cy}})):(e.ceil=Math.max(e.floor,e.ceil-91*t),e.ceil<=e.floor&&(e.ceil=e.floor,e.moving=null))),this.lr.sectorMoved(e);else if(n.type==="lift"){let r=e.floor;n.state==="down"?(e.floor=Math.max(e.liftLow,e.floor-140*t),e.floor<=e.liftLow&&(n.state="wait",n.wait=105*Pe,this.audio.play("lift_stop",{pos:{x:e.cx,y:e.floor,z:-e.cy}}))):n.state==="wait"?(n.wait-=t,n.wait<=0&&(n.state="up",this.audio.play("lift_start",{pos:{x:e.cx,y:e.floor,z:-e.cy}}))):n.state==="up"&&(e.floor=Math.min(e.liftHigh,e.floor+140*t),e.floor>=e.liftHigh&&(e.moving=null,this.audio.play("lift_stop",{pos:{x:e.cx,y:e.floor,z:-e.cy}})));for(let o of this.actorsInSector(e))Math.abs(o.z-r)<1.5&&(o.z=e.floor);this.lr.sectorMoved(e)}}}}pickupItems(t){for(let e of this.items)e.taken||Math.abs(e.x-t.x)>e.def.radius+t.radius||Math.abs(e.y-t.y)>e.def.radius+t.radius||Math.abs(e.z-t.z)>40||this.giveItem(t,e)&&(e.taken=!0,this.scene.remove(e.model),e.def.count&&!e.dropped&&this.stats.items++)}giveItem(t,e){let n=e.type,i=kn[this.skill].ammoMul,r=(c,h)=>{if(t.ammo[c]>=hh[c])return!1;let u=t.ammo[c];return t.ammo[c]=Math.min(hh[c],t.ammo[c]+h*i),u===0&&c==="shells"&&t.weapons.shotgun&&(t.weapon==="fist"||t.weapon==="pistol")&&t.selectWeapon("shotgun"),u===0&&c==="bullets"&&t.weapon==="fist"&&t.selectWeapon(t.weapons.chaingun?"chaingun":"pistol"),!0},o=e.def.msg,a=!0,l="item_pickup";switch(n){case"clip":a=r("bullets",e.dropped?5:10);break;case"bullets":a=r("bullets",50);break;case"shells":a=r("shells",4);break;case"shellbox":a=r("shells",20);break;case"stim":t.health>=100?a=!1:t.health=Math.min(100,t.health+10);break;case"medi":t.health>=100?a=!1:(t.health<25&&(o="Picked up a medikit that you REALLY need!"),t.health=Math.min(100,t.health+25));break;case"hbonus":t.health=Math.min(200,t.health+1);break;case"abonus":t.armor=Math.min(200,t.armor+1),t.armorType||(t.armorType=1);break;case"garmor":t.armor>=100?a=!1:(t.armor=100,t.armorType=1);break;case"barmor":t.armor>=200?a=!1:(t.armor=200,t.armorType=2);break;case"shotgun":case"chaingun":{let c=t.weapons[n],h=n==="shotgun"?"shells":"bullets",u=n==="shotgun"?e.dropped?4:8:e.dropped?10:20,f=r(h,u);c&&!f?a=!1:(t.weapons[n]=!0,c||(t.selectWeapon(n),t.grinTime=this.time),l="weapon_pickup");break}default:a=!1}return a?(t.bonusCount=Math.min(60,t.bonusCount+24),this.hud.message(o),this.audio.play(l),!0):!1}onPlayerDeath(){this.hud.message("You died. Press USE or FIRE to restart.",1e9,"#ff5040"),this.deathTime=this.time}updateSeenLines(){let t=this.player,e=this.level,n=e.lines.length,i=t.eyeZ;for(let r=0;r<16;r++){let o=e.lines[this.lineCheckIdx=(this.lineCheckIdx+1)%n];if(o.seen)continue;let a=(o.ax+o.bx)/2,l=(o.ay+o.by)/2,c=a-t.x,h=l-t.y;if(Math.hypot(c,h)>2200)continue;let f=o.front.floor,d=Math.min(o.front.floor,o.back?o.back.floor:o.front.floor),p=Math.max(o.front.ceil,o.back?o.back.ceil:o.front.ceil),x=(t.x-o.ax)*o.nx+(t.y-o.ay)*o.ny>=0?1:-1,g=a+o.nx*x*2,m=l+o.ny*x*2;e.checkSight(t.x,t.y,i,g,m,d,p)&&(o.seen=!0)}}update(t,e){this.time+=t,this.exited||(this.stats.time+=t),this.updateMovers(t),this.player.update(t,e);for(let n of this.monsters)n.update(t);for(let n of this.barrels)n.update(t);for(let n of this.projectiles)n.update(t);this.projectiles=this.projectiles.filter(n=>!n.dead);for(let n of this.items)n.taken||n.update(t,this.time);this.items.length>64&&this.items.some(n=>n.taken)&&(this.items=this.items.filter(n=>!n.taken)),this.updateSeenLines(),this.exiting&&this.time>=this.exitAt&&!this.exited&&(this.exited=!0),this.shake>0&&(this.shake=Math.max(0,this.shake-t*30))}};var Dt=(s,t,e,n,i)=>i?[[s,t,i],[e,t,i],[e,n,i],[s,n,i]]:[[s,t],[e,t],[e,n],[s,n]],_a={name:"E1M1: HANGAR",par:30,sky:"SKY",sun:{dir:[-.55,-.62,.55],color:16756848,intensity:1.9},sectors:[{id:"A",poly:Dt(0,0,768,512),holes:[Dt(192,224,256,288,"SUPPORT"),Dt(512,224,576,288,"SUPPORT"),Dt(320,192,448,320)],floor:0,ceil:192,light:176,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH"},{id:"A_lamp",poly:Dt(320,192,448,320),floor:0,ceil:192,light:220,floorTex:"FLOOR",ceilTex:"CEILLIGHT",wall:"TECH",lamp:16773592},{id:"A_gap",poly:Dt(768,192,800,320),floor:0,ceil:128,light:150,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",upper:"TECH"},{id:"A_side",poly:Dt(800,128,1056,384),holes:[Dt(880,208,976,304)],floor:-16,ceil:160,light:136,floorTex:"FLOORDARK",ceilTex:"CEIL",wall:"TECH2",lower:"STEP"},{id:"A_pit",poly:Dt(880,208,976,304),floor:-40,ceil:160,light:200,floorTex:"NUKAGE",ceilTex:"CEIL",wall:"TECH2",lower:"SUPPORT",damage:5},{id:"S1",poly:Dt(320,512,448,576),floor:12,ceil:200,light:176,floorTex:"STEPTOP",ceilTex:"CEIL",wall:"TECH",lower:"STEP",upper:"TECH"},{id:"S2",poly:Dt(320,576,448,640),floor:24,ceil:208,light:168,floorTex:"STEPTOP",ceilTex:"CEIL",wall:"TECH",lower:"STEP",upper:"TECH"},{id:"S3",poly:Dt(320,640,448,704),floor:36,ceil:216,light:160,floorTex:"STEPTOP",ceilTex:"CEIL",wall:"TECH",lower:"STEP",upper:"TECH"},{id:"S4",poly:Dt(320,704,448,736),floor:48,ceil:216,light:150,floorTex:"STEPTOP",ceilTex:"CEIL",wall:"TECH",lower:"STEP",upper:"TECH"},{id:"C1",poly:Dt(320,736,448,960),holes:[Dt(352,816,416,880)],floor:48,ceil:176,light:128,floorTex:"FLOOR2",ceilTex:"CEIL",wall:"TECH",upper:"TECH"},{id:"C1_lamp",poly:Dt(352,816,416,880),floor:48,ceil:176,light:200,floorTex:"FLOOR2",ceilTex:"CEILLIGHT",wall:"TECH",lamp:14215423},{id:"D1",poly:Dt(320,960,448,976),floor:48,ceil:48,light:150,floorTex:"FLOOR2",ceilTex:"CEIL",wall:"DOORTRAK",upper:"DOOR",door:!0},{id:"B_south",poly:Dt(0,976,1024,1104),floor:48,ceil:256,light:168,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",lower:"SUPPORT"},{id:"B_poolW",poly:[[0,1104],[448,1104],[448,1328],[640,1328],[640,1472],[0,1472]],floor:16,ceil:256,light:190,floorTex:"NUKAGE",ceilTex:"CEIL",wall:"TECH",damage:5},{id:"B_walk",poly:[[448,1104],[544,1104],[544,1232],[736,1232],[736,1472],[640,1472],[640,1328],[448,1328]],floor:48,ceil:256,light:200,floorTex:"FLOORDARK",ceilTex:"CEIL",wall:"TECH",lower:"SUPPORT"},{id:"B_poolE",poly:[[544,1104],[1024,1104],[1024,1408],[928,1408],[928,1472],[736,1472],[736,1232],[544,1232]],floor:16,ceil:256,light:190,floorTex:"NUKAGE",ceilTex:"CEIL",wall:"TECH",damage:5},{id:"B_step",poly:Dt(928,1408,1024,1472),floor:32,ceil:256,light:180,floorTex:"STEPTOP",ceilTex:"CEIL",wall:"TECH",lower:"STEP"},{id:"B_north",poly:Dt(0,1472,1024,1600),floor:48,ceil:256,light:168,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",lower:"SUPPORT",upper:"TECH"},{id:"SD1",poly:Dt(-16,1504,0,1568),floor:48,ceil:48,light:150,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",upper:"TECH",door:!0,secretDoor:!0},{id:"SEC1",poly:Dt(-144,1488,-16,1584),floor:48,ceil:128,light:120,floorTex:"FLOOR2",ceilTex:"CEIL",wall:"GSTONE",secret:!0},{id:"C2",poly:Dt(1024,1488,1152,1584),floor:48,ceil:160,light:150,floorTex:"FLOOR2",ceilTex:"CEIL",wall:"TECH",upper:"TECH"},{id:"C",poly:[[1152,1280,"COMP"],[1664,1280],[1664,1792],[1152,1792]],holes:[Dt(1344,1472,1472,1600,"COMP"),Dt(1216,1344,1280,1408),Dt(1536,1664,1600,1728)],floor:48,ceil:200,light:180,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",upper:"TECH"},{id:"C_lampA",poly:Dt(1216,1344,1280,1408),floor:48,ceil:200,light:220,floorTex:"FLOOR",ceilTex:"CEILLIGHT",wall:"TECH",lamp:13693183},{id:"C_lampB",poly:Dt(1536,1664,1600,1728),floor:48,ceil:200,light:220,floorTex:"FLOOR",ceilTex:"CEILLIGHT",wall:"TECH",lamp:13693183},{id:"SD2",poly:Dt(1664,1472,1680,1536),floor:48,ceil:48,light:150,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH",upper:"TECH",door:!0,secretDoor:!0},{id:"SEC3",poly:Dt(1680,1440,1776,1568),floor:48,ceil:128,light:140,floorTex:"FLOORDARK",ceilTex:"CEIL",wall:"GSTONE",secret:!0},{id:"D2",poly:Dt(1344,1792,1472,1808),floor:48,ceil:48,light:160,floorTex:"FLOOR",ceilTex:"CEIL",wall:"DOORTRAK",upper:"DOOR",door:!0},{id:"D",poly:[[768,1808],[2048,1808],[2048,2304],[1920,2304],[1920,2432],[768,2432]],holes:[Dt(1152,2e3,1664,2240)],floor:32,ceil:384,light:190,floorTex:"RROCK",ceilTex:"SKY",wall:"ROCK",lower:"ROCK"},{id:"D_pool",poly:Dt(1152,2e3,1664,2240),floor:8,ceil:384,light:210,floorTex:"NUKAGE",ceilTex:"SKY",wall:"ROCK",damage:5},{id:"D_lift",poly:Dt(1920,2304,2048,2432),floor:96,ceil:384,light:190,floorTex:"STEPTOP",ceilTex:"SKY",wall:"ROCK",lower:"PLAT",lift:!0},{id:"D_ledge",poly:Dt(768,2432,2048,2560),floor:96,ceil:384,light:180,floorTex:"RROCK",ceilTex:"SKY",wall:"ROCK",lower:"ROCK"},{id:"SD3",poly:Dt(752,2464,768,2528),floor:96,ceil:96,light:150,floorTex:"FLOOR",ceilTex:"CEIL",wall:"ROCK",upper:"ROCK",door:!0,secretDoor:!0},{id:"SEC2",poly:Dt(656,2456,752,2536),floor:96,ceil:168,light:150,floorTex:"FLOOR2",ceilTex:"CEIL",wall:"GSTONE",secret:!0},{id:"E",poly:Dt(2048,2432,2304,2560),floor:96,ceil:208,light:112,floorTex:"FLOORDARK",ceilTex:"CEIL",wall:"TECH2",upper:"ROCK",flicker:!0},{id:"D3",poly:Dt(2304,2432,2320,2560),floor:96,ceil:96,light:140,floorTex:"FLOORDARK",ceilTex:"CEIL",wall:"DOORTRAK",upper:"DOOR",door:!0},{id:"F",poly:[[2320,2368],[2704,2368,"LITE"],[2704,2400],[2704,2656,"LITE"],[2704,2688],[2320,2688]],holes:[Dt(2416,2464,2448,2496,"SUPPORT"),Dt(2576,2464,2608,2496,"SUPPORT"),Dt(2480,2496,2544,2560)],floor:96,ceil:264,light:176,floorTex:"FLOOR",ceilTex:"CEIL",wall:"TECH2",upper:"TECH2"},{id:"F_lamp",poly:Dt(2480,2496,2544,2560),floor:96,ceil:264,light:230,floorTex:"FLOOR",ceilTex:"CEILLIGHT",wall:"TECH2",lamp:16769216},{id:"D4",poly:Dt(2448,2688,2576,2704),floor:96,ceil:96,light:160,floorTex:"FLOOR",ceilTex:"CEIL",wall:"DOORTRAK",upper:"DOOR",door:!0},{id:"X",poly:[[2448,2704],[2576,2704],[2576,2832],[2544,2832,"SWITCH"],[2480,2832],[2448,2832]],floor:96,ceil:200,light:210,floorTex:"FLOORDARK",ceilTex:"CEILLIGHT",wall:"TECH2",exit:!0,lamp:16736320}],decals:[{tex:"EXITSIGN",x:2512,y:2687.5,z:228,w:64,h:32,nx:0,ny:-1,glow:16719888},{tex:"EXITSIGN",x:2512,y:2703.5,z:176,w:48,h:24,nx:0,ny:1,glow:16719888}],lights:[{x:1600,y:2420,z:180,color:16748624,intensity:1.6,distance:700},{x:2176,y:2496,z:190,color:10535167,intensity:1.4,distance:420,flicker:!0},{x:-80,y:1536,z:112,color:8454048,intensity:.9,distance:260},{x:1728,y:1504,z:112,color:8438015,intensity:.9,distance:260},{x:704,y:2496,z:150,color:16765056,intensity:.9,distance:240}],things:[{type:"player",x:384,y:96,angle:90},{type:"lamp",x:48,y:48},{type:"lamp",x:720,y:48},{type:"lamp",x:48,y:464},{type:"lamp",x:720,y:464},{type:"hbonus",x:224,y:192},{type:"hbonus",x:224,y:320},{type:"hbonus",x:544,y:192},{type:"hbonus",x:544,y:320},{type:"clip",x:96,y:400},{type:"abonus",x:672,y:400},{type:"zombie",x:992,y:336,angle:180},{type:"zombie",x:1008,y:168,angle:180,skill:6},{type:"barrel",x:848,y:176},{type:"barrel",x:1016,y:256},{type:"barrel",x:848,y:344},{type:"stim",x:1016,y:352},{type:"abonus",x:928,y:168},{type:"abonus",x:928,y:344},{type:"clip",x:384,y:760},{type:"lamp",x:40,y:1016},{type:"lamp",x:984,y:1016},{type:"lamp",x:40,y:1560},{type:"lamp",x:984,y:1560},{type:"zombie",x:160,y:1040,angle:0},{type:"zombie",x:880,y:1048,angle:180,skill:6},{type:"zombie",x:688,y:1384,angle:270},{type:"imp",x:224,y:1544,angle:270},{type:"imp",x:832,y:1536,angle:270,skill:6},{type:"sergeant",x:512,y:1552,angle:270,skill:4},{type:"garmor",x:688,y:1440},{type:"stim",x:64,y:1064},{type:"shells",x:960,y:1536},{type:"barrel",x:136,y:1584},{type:"barrel",x:600,y:1080},{type:"medi",x:-80,y:1512},{type:"shells",x:-112,y:1560},{type:"abonus",x:-48,y:1560},{type:"shotgun",x:1408,y:1360},{type:"sergeant",x:1240,y:1712,angle:270},{type:"zombie",x:1576,y:1352,angle:180},{type:"imp",x:1600,y:1720,angle:180,skill:6},{type:"zombie",x:1216,y:1600,angle:0,skill:4},{type:"clip",x:1200,y:1320},{type:"medi",x:1616,y:1752},{type:"barrel",x:1300,y:1440},{type:"barrel",x:1520,y:1620},{type:"chaingun",x:1728,y:1504},{type:"abonus",x:1708,y:1460},{type:"abonus",x:1748,y:1548},{type:"zombie",x:920,y:1904,angle:0},{type:"zombie",x:1888,y:1936,angle:180,skill:6},{type:"sergeant",x:1408,y:2336,angle:270,skill:6},{type:"imp",x:1024,y:2504,angle:270},{type:"imp",x:1504,y:2504,angle:270,skill:6},{type:"imp",x:1824,y:2504,angle:270,skill:4},{type:"barrel",x:1120,y:1968},{type:"barrel",x:1696,y:1968},{type:"barrel",x:1120,y:2272},{type:"barrel",x:1696,y:2272},{type:"barrel",x:1408,y:1960},{type:"shells",x:1792,y:1856},{type:"stim",x:816,y:2384},{type:"clip",x:1984,y:2272},{type:"barmor",x:696,y:2496},{type:"zombie",x:2240,y:2496,angle:180,ambush:!0},{type:"hbonus",x:2112,y:2464},{type:"hbonus",x:2176,y:2464},{type:"hbonus",x:2240,y:2464},{type:"lamp",x:2352,y:2400},{type:"lamp",x:2672,y:2400},{type:"imp",x:2400,y:2624,angle:0},{type:"sergeant",x:2640,y:2560,angle:180,skill:6},{type:"zombie",x:2640,y:2416,angle:180,skill:4},{type:"imp",x:2560,y:2640,angle:180,skill:4},{type:"shellbox",x:2360,y:2640},{type:"medi",x:2672,y:2648},{type:"barrel",x:2656,y:2448}]};var Wf={low:{pixelRatio:.75,shadows:!1,shadowSize:1024,bloom:!1,msaa:0,lightSlots:6},medium:{pixelRatio:1,shadows:!0,shadowSize:2048,bloom:!0,msaa:0,lightSlots:8},high:{pixelRatio:1.25,shadows:!0,shadowSize:4096,bloom:!0,msaa:4,lightSlots:12},ultra:{pixelRatio:2,shadows:!0,shadowSize:4096,bloom:!0,msaa:4,lightSlots:16}},Xf={sensitivity:1,invertY:!1,fov:90,quality:"high",musicVol:.55,sfxVol:.9,alwaysRun:!0,autoaim:!0,crosshair:!0,bob:!0,showFps:!1};function iy(){try{return{...Xf,...JSON.parse(localStorage.getItem("doom2027.settings")||"{}")}}catch{return{...Xf}}}function qf(s){try{localStorage.setItem("doom2027.settings",JSON.stringify(s))}catch{}}var sy={uniforms:{tDiffuse:{value:null},time:{value:0},damage:{value:0},bonus:{value:0},dead:{value:0},resolution:{value:new tt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time, damage, bonus, dead; uniform vec2 resolution;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float r2 = dot(c, c);
      // subtle chromatic aberration towards the edges
      float ca = 0.0016 + damage * 0.006;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + c * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - c * ca).b;
      // Doom palette flashes: red when hurt, gold on pickups
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(lum * 1.4 + 0.12, lum * 0.15, lum * 0.1), clamp(damage, 0.0, 0.85));
      col = mix(col, col * vec3(1.15, 1.0, 0.55) + vec3(0.08, 0.06, 0.0), bonus * 0.6);
      col = mix(col, vec3(lum * 1.2 + 0.1, lum * 0.05, 0.02), dead * 0.55);
      // vignette
      col *= 1.0 - smoothstep(0.18, 0.75, r2) * 0.55;
      // film grain
      float g = hash(uv * resolution + fract(time * 13.7)) - 0.5;
      col += g * 0.035;
      gl_FragColor = vec4(col, 1.0);
    }`},_h=class{constructor(){this.settings=iy(),this.canvas=document.getElementById("view"),this.hudCanvas=document.getElementById("hud"),this.renderer=new To({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.toneMapping=Mr,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pc,this.renderer.outputColorSpace=We,this.camera=new Ne(70,1,2,9e3),this.camera.rotation.order="YXZ",this.weaponScene=new jn,this.weaponCam=new Ne(58,1,.01,10),this.wAmbient=new Os(16777215,1.5),this.wKey=new Ns(16773344,1.6),this.wKey.position.set(-.5,1,.6),this.wFlash=new ei(16756832,0,3,1.2),this.wFlash.position.set(0,0,-.5),this.weaponScene.add(this.wAmbient,this.wKey,this.wFlash),this.hud=new da(this.hudCanvas),this.audio=new oa,this.input={keys:new Set,mouseDX:0,mouseDY:0,fire:!1,usePressed:!1,slot:0,cycle:0},this.world=null,this.state="loading",this.automap=!1,this.revealAll=!1,this.revealThings=!1,this.cheatBuf="",this.fpsAcc=0,this.fpsN=0,this.fps=0,this.menu=new pa(this),this.bindInput(),window.addEventListener("resize",()=>this.resize())}async boot(){this.menu.showLoading("Generating textures\u2026"),await new Promise(r=>setTimeout(r,30));let t=performance.now(),{textures:e,update:n}=Sf(this.renderer);this.tex=e,this.texUpdate=n,Nf(e),this.viewWeapon=new ca(e),this.weaponScene.add(this.viewWeapon.root);let i=new Ls(this.renderer);this.weaponScene.environment=i.fromScene(new Jo,.04).texture,this.weaponScene.environmentIntensity=.35,console.log("textures",Math.round(performance.now()-t),"ms"),this.setupComposer(),this.resize(),this.state="title",this.newWorld(2,!0),this.menu.showTitle(),this.last=performance.now(),requestAnimationFrame(r=>this.frame(r))}get quality(){return Wf[this.settings.quality]||Wf.high}setupComposer(){let t=this.quality,e=new tt;this.renderer.getSize(e);let n=new Oe(Math.max(1,e.x),Math.max(1,e.y),{type:on,samples:t.msaa});this.composer=new $o(this.renderer,n),this.scenePass=new Sr(new jn,this.camera),this.weaponPass=new Sr(this.weaponScene,this.weaponCam),this.weaponPass.clear=!1,this.weaponPass.clearDepth=!0,this.bloom=new Vs(new tt(256,256),.55,.55,.82),this.finalPass=new Hs(sy),this.composer.addPass(this.scenePass),this.composer.addPass(this.weaponPass),this.composer.addPass(this.bloom),this.composer.addPass(this.finalPass),this.composer.addPass(new Ko),this.bloom.enabled=t.bloom,this.renderer.shadowMap.enabled=t.shadows}applyQuality(){this.composer.dispose(),this.setupComposer(),this.resize(),this.world&&(this.scenePass.scene=this.world.scene)}resize(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio||1,this.quality.pixelRatio);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e),this.finalPass.uniforms.resolution.value.set(t*n,e*n));let i=t/e;this.camera.aspect=i;let r=this.settings.fov*Math.PI/180;this.camera.fov=2*Math.atan(Math.tan(r/2)/(4/3))*180/Math.PI,this.camera.updateProjectionMatrix(),this.weaponCam.aspect=i,this.weaponCam.updateProjectionMatrix(),this.hud.resize(t,e,Math.min(2,window.devicePixelRatio||1))}disposeWorld(){this.world&&(this.world.scene.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material&&!t.isSprite){let e=Array.isArray(t.material)?t.material:[t.material];for(let n of e)n.dispose&&n.dispose()}}),this.world=null)}newWorld(t,e=!1){this.disposeWorld();let n=this.quality;this.skill=t,this.world=new va({tex:this.tex,audio:this.audio,hud:this.hud,settings:{...this.settings,...n}},_a,t),this.scenePass.scene=this.world.scene,this.attract=e,this.hud.clearMessages(),this.automap=!1,e||this.hud.message(_a.name,3,"#e02a20"),this.renderer.compile(this.world.scene,this.camera)}startGame(t){this.initAudio(),this.newWorld(t),this.state="playing",this.menu.hide(),this.audio.startMusic("level"),this.lockPointer()}initAudio(){this.audio.init(),this.audio.setMusicVolume(this.settings.musicVol),this.audio.setSfxVolume(this.settings.sfxVol)}lockPointer(){if(document.pointerLockElement!==this.canvas){let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}pause(){this.state==="playing"&&(this.state="paused",this.pausedAt=performance.now(),this.menu.showPause(),document.pointerLockElement&&document.exitPointerLock())}resume(){this.state="playing",this.menu.hide(),this.lockPointer(),this.last=performance.now()}quitToTitle(){this.state="title",document.pointerLockElement&&document.exitPointerLock(),this.newWorld(2,!0),this.menu.showTitle(),this.audio.startMusic("menu")}onSettingsChanged(t){qf(this.settings),t==="musicVol"&&this.audio.setMusicVolume(this.settings.musicVol),t==="sfxVol"&&this.audio.setSfxVolume(this.settings.sfxVol),t==="fov"&&this.resize(),t==="quality"&&this.applyQuality(),this.world&&Object.assign(this.world.settings,this.settings)}bindInput(){let t=this.input;window.addEventListener("keydown",e=>{if(this.menu.capturingKey)return;let n=e.code;if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&e.preventDefault(),n==="Escape"){this.state==="playing"?this.pause():this.state==="paused"&&!this.menu.inSubmenu?performance.now()-this.pausedAt>400&&this.resume():this.menu.back();return}if(this.state!=="playing"){this.menu.key(e);return}if(!e.repeat){if(t.keys.add(n),(n==="KeyE"||n==="Space"||n==="Enter")&&(t.usePressed=!0),n.startsWith("Digit")){let i=+n.slice(5);i>=1&&i<=7&&(t.slot=i)}n==="Tab"&&(this.automap=!this.automap),(n==="Equal"||n==="NumpadAdd")&&(this.hud.amZoom=Math.min(2,this.hud.amZoom*1.3)),(n==="Minus"||n==="NumpadSubtract")&&(this.hud.amZoom=Math.max(.08,this.hud.amZoom/1.3)),n==="KeyF"&&e.shiftKey&&(this.settings.showFps=!this.settings.showFps,qf(this.settings)),(n==="ControlLeft"||n==="ControlRight")&&(t.fire=!0),n.startsWith("Key")&&(this.cheatBuf=(this.cheatBuf+n.slice(3).toLowerCase()).slice(-12),this.checkCheats())}}),window.addEventListener("keyup",e=>{t.keys.delete(e.code),(e.code==="ControlLeft"||e.code==="ControlRight")&&(t.fire=t.mouseFire||!1)}),window.addEventListener("blur",()=>{t.keys.clear(),t.fire=!1,t.mouseFire=!1}),this.canvas.addEventListener("mousedown",e=>{if(this.state==="playing"){if(document.pointerLockElement!==this.canvas){this.lockPointer();return}e.button===0&&(t.fire=!0,t.mouseFire=!0),e.button===2&&(t.usePressed=!0)}}),window.addEventListener("mouseup",e=>{e.button===0&&(t.mouseFire=!1,t.fire=t.keys.has("ControlLeft")||t.keys.has("ControlRight"))}),window.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(t.mouseDX+=e.movementX,t.mouseDY+=e.movementY)}),window.addEventListener("wheel",e=>{if(this.state==="playing"){if(this.automap){this.hud.amZoom=Math.max(.08,Math.min(2,this.hud.amZoom*(e.deltaY>0?.85:1.18)));return}t.cycle=e.deltaY>0?1:-1}},{passive:!0}),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state==="playing"&&!this.world?.player.dead&&this.pause()})}checkCheats(){let t=this.cheatBuf,e=this.world;if(!e)return;let n=e.player,i=r=>t.endsWith(r)?(this.cheatBuf="",!0):!1;i("iddqd")?(n.god=!n.god,n.god&&(n.health=100),this.hud.message(n.god?"Degreelessness Mode On":"Degreelessness Mode Off")):i("idkfa")?(Object.assign(n.weapons,{shotgun:!0,chaingun:!0}),Object.assign(n.ammo,{bullets:200,shells:50}),n.armor=200,n.armorType=2,this.hud.message("Very Happy Ammo Added")):i("idfa")?(Object.assign(n.weapons,{shotgun:!0,chaingun:!0}),Object.assign(n.ammo,{bullets:200,shells:50}),n.armor=200,n.armorType=2,this.hud.message("Ammo (no keys) Added")):i("idclip")||i("idspispopd")?(n.noclip=!n.noclip,this.hud.message(n.noclip?"No Clipping Mode ON":"No Clipping Mode OFF")):i("iddt")?this.revealAll?this.revealThings?(this.revealAll=!1,this.revealThings=!1):this.revealThings=!0:this.revealAll=!0:i("idmypos")&&this.hud.message(`x ${Math.round(n.x)}  y ${Math.round(n.y)}  angle ${Math.round(n.angle*180/Math.PI)}`)}readInput(t){let e=this.input.keys,n=this.settings,i=this.input,r=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),o=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),a=(e.has("ArrowLeft")?1:0)-(e.has("ArrowRight")?1:0);(e.has("AltLeft")||e.has("AltRight"))&&(o-=a,a=0);let l=e.has("ShiftLeft")||e.has("ShiftRight"),c=n.alwaysRun?!l:l,h=.0022*n.sensitivity,u={forward:Math.max(-1,Math.min(1,r)),strafe:Math.max(-1,Math.min(1,o)),run:c,lookX:i.mouseDX*h-a*t*(c?3.6:2.4),lookY:i.mouseDY*h*(n.invertY?-1:1),fire:i.fire,use:i.usePressed,weaponSlot:i.slot,cycle:i.cycle};return i.mouseDX=0,i.mouseDY=0,i.usePressed=!1,i.slot=0,i.cycle=0,u}attractInput(t){return{forward:0,strafe:0,run:!1,lookX:-t*.12,lookY:0,fire:!1,use:!1,weaponSlot:0,cycle:0}}frame(t){requestAnimationFrame(i=>this.frame(i));let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.05),this.fpsAcc+=e,this.fpsN++,this.fpsAcc>.5&&(this.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);let n=this.world;if(n){if(this.state==="playing"){let i=this.readInput(e);if(n.player.dead&&n.time-n.deathTime>1&&(i.use||i.fire)){this.input.fire=!1,this.input.mouseFire=!1,this.newWorld(this.skill);return}n.update(e,i),n.exited&&this.finishLevel()}else(this.state==="title"||this.attract)&&n.update(e,this.attractInput(e));this.texUpdate(n.time),this.render(e)}}finishLevel(){this.state="intermission",document.pointerLockElement&&document.exitPointerLock(),this.audio.startMusic("intermission"),this.menu.showIntermission(this.world.stats,_a)}render(t){let e=this.world,n=e.player,i=this.camera,r=this.settings,o=r.bob&&!n.dead,a=o?Math.sin(n.bobPhase*2)*2.2*n.bob:0,l=n.eyeZ+a-n.landSquash;l>n.ceilz-4&&(l=n.ceilz-4);let c=(Math.random()-.5)*e.shake,h=(Math.random()-.5)*e.shake;i.position.set(n.x+c*.3,l+h*.3,-n.y),n.kick=(n.kick||0)*Math.exp(-t*12),i.rotation.set(n.pitch+n.kick+h*.002,n.angle-Math.PI/2+c*.002,n.dead?.25*Math.min(1,n.deathDrop/30):0),e.sky.position.copy(i.position),e.sky.material.uniforms.time.value=e.time;let u=n.sector,f=u?ua(u.light):1;e.scene.fog.density=28e-5+(1-Math.min(1,f))*5e-4,e.lights.update(t,i.position),e.fx.update(t,e.scene.fog.density,.35+Math.min(1,f)*.8),this.audio.setListener(i.position.x,i.position.y,i.position.z,i.rotation.y);let d=!n.dead&&this.state!=="title"&&!this.attract&&!this.automap;if(this.viewWeapon.root.visible=d,d){let g=this.hud.barHeight/window.innerHeight;this.viewWeapon.root.position.y=g*.36,n.swayX=(n.swayX||0)*Math.exp(-t*8);let m=o?Math.cos(n.bobPhase)*.012*n.bob:0,_=o?-Math.abs(Math.sin(n.bobPhase))*.01*n.bob:0;this.viewWeapon.update({name:n.weapon,raise:n.raise,bobX:m,bobY:_,fireT:n.fireT,flash:n.flashT>0,firing:this.input.fire&&n.weapon==="chaingun"&&n.hasAmmo("chaingun"),dt:t}),this.wAmbient.intensity=.4+Math.min(1.2,f)*1.5,this.wKey.intensity=.4+Math.min(1.2,f)*1.1,this.wFlash.intensity=n.flashT>0?6:0}let p=this.finalPass.uniforms;p.time.value=e.time,p.damage.value=Math.min(.85,n.damageCount/100),p.bonus.value=Math.min(1,n.bonusCount/60),p.dead.value=n.dead?Math.min(1,(e.time-e.deathTime)*2):0,this.composer.render(t);let x=this.state==="playing"||this.state==="paused";this.hud.draw(x?e:null,t,{automap:this.automap&&x,showBar:x,crosshair:r.crosshair,revealAll:this.revealAll,revealThings:this.revealThings,fps:r.showFps?this.fps:0})}};var Yf=new _h;window.__game=Yf;Yf.boot().catch(s=>{console.error(s),document.getElementById("menu").innerHTML=`<div class="panel"><h2>Error</h2><pre>${String(s&&s.stack||s)}</pre></div>`});})();
