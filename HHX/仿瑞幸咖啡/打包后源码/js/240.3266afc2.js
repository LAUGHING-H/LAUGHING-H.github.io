"use strict";(self["webpackChunkrx_ts"]=self["webpackChunkrx_ts"]||[]).push([[240],{1240:function(e,l,a){a.r(l),a.d(l,{default:function(){return C}});var o=a(3396),d=a(7139),s=a(1505);const n=e=>((0,o.dD)("data-v-2143d223"),e=e(),(0,o.Cn)(),e),r={class:"forgot-box"},t={class:"login-box"},i=n((()=>(0,o._)("div",{class:"left-box"},[(0,o._)("div",{class:"logo"},[(0,o._)("img",{class:"auto-img",src:s,alt:""})]),(0,o._)("div",{class:"logo-text"},"Luckin Coffee")],-1))),u={class:"login-form"},m=n((()=>(0,o._)("div",{class:"title"},"忘记密码!",-1))),D=n((()=>(0,o._)("div",{class:"en-title"},"forgot password!",-1))),c={class:"login-form-box"},A={class:"forgot"},b={class:"login-btn"},g=(0,o.Uk)("提  交");function v(e,l,a,s,n,v){const w=(0,o.up)("van-nav-bar"),p=(0,o.up)("van-field"),I=(0,o.up)("van-button"),f=(0,o.up)("van-form");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",t,[(0,o.Wm)(w,null,{left:(0,o.w5)((()=>[i])),right:(0,o.w5)((()=>[(0,o._)("div",{class:"home-text",onClick:l[0]||(l[0]=l=>e.goPage("Home"))},"首页")])),_:1}),(0,o._)("div",u,[m,D,(0,o._)("div",c,[(0,o.Wm)(f,{onSubmit:e.commit},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{label:"手机号",placeholder:"手机号",modelValue:e.userInfo.phone,"onUpdate:modelValue":l[1]||(l[1]=l=>e.userInfo.phone=l),autocomplete:"off",rules:[{required:!0,message:"手机号必填"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确"}]},null,8,["modelValue"]),(0,o.Wm)(p,{label:"新密码",placeholder:"新密码(6-16位)",modelValue:e.userInfo.password,"onUpdate:modelValue":l[2]||(l[2]=l=>e.userInfo.password=l),type:e.isPassword?"password":"text","right-icon":e.isPassword?"closed-eye":"eye-o",onClickRightIcon:e.viewPassword,autocomplete:"off",rules:[{required:!0,message:"密码必填"},{pattern:/^[A-Za-z]\w{5,15}$/,message:"密码支持数字字母下划线组合，且必须以字母开头，6-16位"}]},null,8,["modelValue","type","right-icon","onClickRightIcon"]),(0,o.Wm)(p,{label:"邮箱",placeholder:"邮箱",modelValue:e.userInfo.email,"onUpdate:modelValue":l[3]||(l[3]=l=>e.userInfo.email=l),autocomplete:"off",rules:[{required:!0,message:"邮箱必填"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"邮箱格式不正确"}]},null,8,["modelValue","rules"]),(0,o.Wm)(p,{modelValue:e.userInfo.validCode,"onUpdate:modelValue":l[4]||(l[4]=l=>e.userInfo.validCode=l),center:"",clearable:"",label:"邮箱验证码",placeholder:"邮箱验证码(6位数字)",autocomplete:"off",rules:[{required:!0,message:"邮箱验证码必填"},{pattern:/^\d{6}$/,message:"邮箱格式不正确"}]},{button:(0,o.w5)((()=>[(0,o.Wm)(I,{size:"small",color:"#0C34BA",disabled:e.isSend,onClick:e.sendValidCode},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.text),1)])),_:1},8,["disabled","onClick"])])),_:1},8,["modelValue"]),(0,o._)("div",A,[(0,o._)("span",{class:"lo-text",onClick:l[5]||(l[5]=l=>e.goPage("Login"))},"已有账号，立即登录")]),(0,o._)("div",b,[(0,o.Wm)(I,{round:"",block:"","native-type":"submit",color:"#0C34BA"},{default:(0,o.w5)((()=>[g])),_:1})])])),_:1},8,["onSubmit"])])])])])}a(6743);var w=a(4691),p=a(4870),I=a(678),f=a(6265),T=a.n(f),V=(0,o.aZ)({setup(){let e=(0,I.tv)(),l=(0,p.iH)(!0),a=(0,p.iH)({phone:"",password:"",email:"",validCode:""}),o=(0,p.iH)("发送验证码"),d=(0,p.iH)(!1),s=l=>{e.push({name:l})},n=()=>{l.value=!l.value},r=()=>{let e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!e.test(a.validCode))return void(0,w.Z)("邮箱格式不正确");let l=120;o.value=l+"s后重新发送",d.value=!0;let s=setInterval((()=>{0==l?(clearInterval(s),d.value=!1,o.value="发送验证码"):(l--,o.value=l+"s后重新发送")}),1e3);T()({method:"POST",url:"/emailValidCode",data:{email:a.value.email}}).then((e=>{(0,w.Z)(e.data.msg)})).catch((e=>{}))},t=()=>{T()({method:"POST",url:"/checkValidCode",data:{validCode:a.value.validCode}}).then((e=>{"K001"==e.data.code&&i()})).catch((e=>{}))},i=()=>{T()({method:"POST",url:"/retrievePassword",data:{phone:a.value.phone,password:a.value.password}}).then((l=>{(0,w.Z)(l.data.msg),"L001"==l.data.code&&setTimeout((()=>{e.push({name:"Login"})}),1e3)})).catch((e=>{}))};return{isPassword:l,userInfo:a,text:o,isSend:d,goPage:s,viewPassword:n,sendValidCode:r,commit:t}}}),G=a(89);const Z=(0,G.Z)(V,[["render",v],["__scopeId","data-v-2143d223"]]);var C=Z},1505:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDhBRjkyNEQ4OEQxMUVBOTJCMUMxQjA4RDI2RUIyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDhBRjkyNUQ4OEQxMUVBOTJCMUMxQjA4RDI2RUIyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0OEFGOTIyRDg4RDExRUE5MkIxQzFCMDhEMjZFQjJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0OEFGOTIzRDg4RDExRUE5MkIxQzFCMDhEMjZFQjJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XgLlYQAAAwBQTFRFMlbRGkHD8fL0YXrY7e7wvMLV+vr7293mZHrFRGPMwcXTLVLLvMTcDTjJWXHDeorC6OntVGzBDTjHWXG+yc3Z+Pj5m6bL5ebqETvJx8nS9fb7xsrZ4ePp8PHz0NXiDDS8lqLKUm7LRGHGztLfyc7fwMbauL7UO1rBUWq/9PX2Ole5nqnNiZbE4ePmDDbEl6HB2tzir7XOYHW8KU3EDDbAeo3Meo/TVnDUkZ3G3N7iGELKboTSqbLSTGnM3+LrDTfGpK3KprHVcYbMLVDCKk/K1djiy9Dg5+jsc4O6QFzBRWG9Zn3Ob3uynKXC4uTqlabdTmOrGTu3SmbEHkfTW3TJFT7HYXSyxMbNDDW+srrVOVnJYnOtTGa7RV+0oqvKEDrGjp3OtrvO0NTe3uDmgY68wsjaPV7On6nKWm2rJkzTqrLOVGmyQl6919ndEDnC7e3vNVXIPV3JYXrKDjvTa3/Aa325HEK/DDS5sbfLj5zJASe2HUTINFfEn6rQiZa+MVXPsbjROVrOJkvJgZTTDTa+VnDEJkrBJ0m+7+/xGT/DbIPOMVXKMlXHi5vNZXm+2Nndzc/VHkbMpa/TN1nMDDa8hpbMdojGMFPHF0DJEzzHO1zLDTbCDTfE/f39/Pz8DTbDDDbDDDbCDTfC8/T1+fn61Nbf+/v76+zu1tfbiZrXZXzIMVLC9fX3hpPCrLTSuMHf4eXvF0DFrLbWzNTwp7TbjZvH1NflBh6yy83VmafSL1jd6+36gZDFlJ/D3OP2p6/NIUfFxcvf/v7+DTa5f5HPo6nHzM/bN1jGX3fKQF3WoKvOGD/Roq3NUWWw0dPc0tTbr7jUgo6ycoXDucbtFz/Cq7LJkpzPrbPJRGDRrbTMcYG2n6/c8PL6f42+tr3U3N7jDDW7GkPKzdPq6uzwsrnlq7TXm6jPd4zPDze/jZvLlp66QGDK2NznNFfM1NXhNlbAZni2DDfCxsvhDDfDtL3ek53Cgo/WlKDGyMrTyszTx8ze9vb3boHBmaPDDDS6////jV/H1wAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAYFSURBVHjarJh5XBRVHMAFBZRllM/q6hrgiIRSQBmMpgg+j10PSDzJEY/1AjUVTaVRiPBC+RhqaIo4syyHrgeYbfeB2Yl22KmVXQxZamFmWVlR85rZnYWZ2ZnZ/bTz+2Pfm7e//c77vfc73ttOUGPpxLdf3aYt8Nvnp+7WFPhJAfheU+DTBeR8TYGvFJATNAW+XIAt7xiMWdfXX2DDVHqvoX2w59rZ/gJfn0g7BrvH6nTgEb/98D6S+sY99r6FjPAb+BaobXSPFVHbVvkNNFvoAVV8fwKV5n/o2VuZLPciLkXu9x8IGymqP98dABZrAGzKc9sc+Ci4pQHwUCuqz3H1NlFaAOE7AEtydqytPpkc0c8LsDSZzjrs7E1BbnjnHTYuC+daQ6ISEJ4AWImz04NqDfYKTNAnR7FNW3RLkRIwqgJFZnGdjdT5ROnv68KjxC+JppwLtK72lxIlIEylGB1nRrODWtI+aPjgQuONKROLN+s2rVjemPonn0KOPATi2Wa+nnFEKAJhdwwrsXLZpjqdT0ILkiqyqJoaEmdYwUnSBsr2BzWw3/SnDrBxsN5I6EdDZWAfE01t4WwG+li2CXmzHmAoIxaUBGXDAhsqyK4QDgxAwT6oAoRhRsJ2jJ3YGWzFocgrLSTNyAkN6ifrLU3wu3cZsAuqAmE8QlDHuClSQ8u3MkpCH7wU0bXhmSxCn3TICxD2RwjbGAPMWJ9YTyvx0EIzzCz70oSCXcHQGxD2NtI35+7JHQ/N05WIYDQs7fyv/XC3fDv0DoRhyVvTru3csQr+ugyVwxGVl6E1bCGrOWIU9AUIe81gPyJHQnh90E1P3hvTf+PiHcJL3cmsUb4Aq44HjMjkw/tKJSZZPnDvddd3QcU4gVrm+QAcQRL05k9LXQ/jdqUAikadwuCUIzrMNR5+xejkGwd6BSYgnCap2xfpeg6J/yK6LIDl0a/G9R7OB/aLJpxwzbi8nxdgbCXvalRl99Ph7syQuPLo0d19+KdFG3QU2uGSd6gCx5s4X0ExsH1adFpudsbdMXUi17VmXjzbUivcfXKMKvA4twmo458cbg3tfS6smV58jc86QZN+XJwxqAVIAygvVgUYYeFUTGaBD7nVrU0ZhWv1tRgO+OVzC37QoAyc4/SSgHvkk3Rg6LChQ7ZMmoNLAmeJInABcKlUbnAfImCX4VYpN4eSpIozBuUE6wouQr/iNFcEAmOHTH7NI16ftUlj+wkFYPOB9njFqcJu57rpfgqS0sJTB8+VbgsepwA8IXo1TeLbmiW4qJM7L+7I84jvlGZZYNWdktWuDPWofaxzf0x6AG2nZIGDU8RqV4/L7PSsaVcJD6DQZgFwtOTVKSFStxk45GGAy+VI0yo5YL5493BJTH24ZjuCKSTx2gg5YLr45ZZeogobh+C4YtWq3iMDbCsWT3CikBc8jSIYZan+Wga4qFD0E0p0s1ivV+Mxdy2VAT5WK9IxxgiBZ3E1HoOnywBn1ojceqwwQINzUVUg0+oViGeIHKZCHUg8KAPsKypw+t9FEbLaC/BzuTUUAZEcIdCeq24xdk4GuNIhrL/nw0Ve3VN9U6pnywCPmIR78rMor8NbQBVomyADrMoWrBMdLY67kSmqflh9WS70kgTJgcyXJIb5QI2Y1yQH7C0Ago+keWs/orLRplI54AsWAfBfj0xYpAM1Ckx8jmw+rKvv0AcylbT0s6TsQqymhmJFnMbIH+RrSo8Om0GQbGW2D/9rZujJp27lt1oowWyzzPLAJqQD+LeXm5n5hKm9PGPpClXPerDdEnC718telwQHrw7mKRX694DPM3SeRlc7ifjYQCWgIds9RTDOl8t2ZCdOH5xSPiylIrz7ghyfru/XygkGP9OgDLQPwJXdRk7mAcJ1JVY6cC7kjzdgko9/MaSRM9TP2MNcrmNL8BG48aXx6sCqEufZ6vHOPgLbQrxdK0rfpp01qs3vv1naU5+O2xgkRjMgfK6YtXrrH9oBYWa6jUGTA7UDwqg1CAOKNARCGF+O7TVoCYTmuLU9NAVC+EBuqLZAaHhSY+D/k/8EGAB2nq9EgLWL1gAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=240.3266afc2.js.map