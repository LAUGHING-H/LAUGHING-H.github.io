"use strict";(self["webpackChunkrx_ts"]=self["webpackChunkrx_ts"]||[]).push([[93],{6478:function(e,s,t){t.d(s,{Z:function(){return c}});var a=t(3396);const d={class:"navi"};function r(e,s,t,r,l,i){const o=(0,a.up)("van-nav-bar");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(o,{title:e.title,"left-text":"返回","right-text":e.rightText,fixed:e.fixed,"left-arrow":"",onClickLeft:e.back,onClickRight:e.clickRight},null,8,["title","right-text","fixed","onClickLeft","onClickRight"])])}var l=t(678),i=(0,a.aZ)({name:"Navi",props:{title:{type:String,default:""},rightText:{type:String,default:""},fixed:{type:Boolean,default:!1}},setup(e,{emit:s}){let t=(0,l.tv)(),a=()=>{t.go(-1)},d=()=>{s("click-right")};return{back:a,clickRight:d}}}),o=t(89);const n=(0,o.Z)(i,[["render",r],["__scopeId","data-v-40ff0b7a"]]);var c=n},1642:function(e,s,t){t.d(s,{Z:function(){return y}});var a=t(3396),d=t(7139);const r={class:"shopbag-item"},l={class:"shopbag-item-img"},i=["src"],o={class:"shopbag-item-content"},n={class:"shopbag-name"},c={class:"zhname-box"},u={class:"zhname one-text"},v={class:"rule one-text"},p={class:"enname one-text"},f={class:"price-count"},m={class:"price"},h={class:"count"};function _(e,s,t,_,g,w){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",l,[(0,a._)("img",{class:"auto-img",src:e.pro.small_img,alt:""},null,8,i)]),(0,a._)("div",o,[(0,a._)("div",n,[(0,a._)("div",c,[(0,a._)("div",u,(0,d.zw)(e.pro.name),1),(0,a._)("div",v,(0,d.zw)(e.pro.rule),1)]),(0,a._)("div",p,(0,d.zw)(e.pro.enname),1)]),(0,a._)("div",f,[(0,a._)("div",m,"¥"+(0,d.zw)(e.pro.price),1),(0,a._)("div",h,"x"+(0,d.zw)(e.pro.count),1)])])])}var g=(0,a.aZ)({name:"OrderPro",props:{pro:{type:Object,default(){return{}}}}}),w=t(89);const b=(0,w.Z)(g,[["render",_],["__scopeId","data-v-29d28766"]]);var y=b},9093:function(e,s,t){t.r(s),t.d(s,{default:function(){return T}});var a=t(3396),d=t(7139),r=t(9242);const l=e=>((0,a.dD)("data-v-6de83f23"),e=e(),(0,a.Cn)(),e),i={class:"order-buy"},o={class:"order-buy-box"},n={class:"order-address"},c={class:"select-address"},u={class:"arrow"},v={class:"userinfo-box"},p={class:"userinfo"},f={class:"username"},m={class:"phone"},h=(0,a.Uk)("默认"),_={class:"detail-address"},g={class:"order-product"},w=l((()=>(0,a._)("div",{class:"order-info"},"订单信息",-1))),b={class:"order-pro"},y={class:"order-total"},k={class:"order-count"},x={class:"order-money"},A=l((()=>(0,a._)("div",{class:"left-circle circle"},null,-1))),S=l((()=>(0,a._)("div",{class:"right-circle circle"},null,-1))),Z={class:"sel-address"},z=l((()=>(0,a._)("div",{class:"sel-address-title"},"选择地址",-1))),C={class:"buy-now"},D=(0,a.Uk)("立即结算");function H(e,s,t,l,H,O){const W=(0,a.up)("Navi"),I=(0,a.up)("van-icon"),B=(0,a.up)("van-tag"),L=(0,a.up)("OrderPro"),N=(0,a.up)("van-address-list"),P=(0,a.up)("van-popup"),R=(0,a.up)("van-button");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(W,{fixed:!0,title:"订单结算"}),(0,a._)("div",o,[(0,a._)("div",n,[(0,a._)("div",c,[(0,a._)("div",{class:"select-address-title",onClick:s[0]||(s[0]=(...s)=>e.selectAddress&&e.selectAddress(...s))},"选择地址"),(0,a._)("div",u,[(0,a.Wm)(I,{name:"arrow"})])]),(0,a._)("div",v,[(0,a._)("div",p,[(0,a._)("div",f,(0,d.zw)(e.userSelectAddress.name),1),(0,a._)("div",m,(0,d.zw)(e.userSelectAddress.tel),1),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(B,{round:"",color:"#0C34BA"},{default:(0,a.w5)((()=>[h])),_:1})],512),[[r.F8,e.userSelectAddress.isDefault]])]),(0,a._)("div",_,(0,d.zw)(e.userSelectAddress.address),1)])]),(0,a._)("div",g,[w,(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.buyShopbagProduct,((e,s)=>((0,a.wg)(),(0,a.iD)("div",{class:"order-pro-item",key:s},[(0,a.Wm)(L,{pro:e},null,8,["pro"])])))),128))]),(0,a._)("div",y,[(0,a._)("div",k,"共计 "+(0,d.zw)(e.count)+" 件商品",1),(0,a._)("div",x,"订单金额：¥"+(0,d.zw)(e.total),1),A,S])])]),(0,a.Wm)(P,{show:e.show,"onUpdate:show":s[2]||(s[2]=s=>e.show=s),position:"bottom",closeable:""},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[z,(0,a._)("div",null,[(0,a.Wm)(N,{modelValue:e.chosenAddressId,"onUpdate:modelValue":s[1]||(s[1]=s=>e.chosenAddressId=s),list:e.list,"default-tag-text":"默认",onAdd:e.addAddress,onSelect:e.select},null,8,["modelValue","list","onAdd","onSelect"])])])])),_:1},8,["show"]),(0,a._)("div",C,[(0,a.Wm)(R,{round:"",block:"",color:"#0C34BA",onClick:e.pay},{default:(0,a.w5)((()=>[D])),_:1},8,["onClick"])])])}t(6743);var O=t(4691),W=t(4870),I=t(6478),B=t(1642),L=t(678),N=t(6265),P=t.n(N),R=(0,a.aZ)({name:"OrderBuy",components:{Navi:I.Z,OrderPro:B.Z},setup(){let e=(0,L.tv)(),s=(0,L.yj)(),t=(0,W.iH)(!1),d=(0,W.iH)(""),r=(0,W.iH)([]),l=(0,W.iH)({tel:"",name:"",isDefault:!1,address:""}),i=(0,W.iH)([]),o=(0,W.iH)([]),n=(0,W.iH)(0),c=(0,W.iH)(0),u=()=>{e.push({name:"Address"})},v=()=>{t.value=!0},p=e=>{for(let s in l.value)l.value[s]=e[s];t.value=!1},f=()=>{P()({method:"get",url:"/findAddress"}).then((s=>{if(700===s.data.code)return(0,O.Z)(s.data.msg),void e.push({name:"Login"});2e4===s.data.code&&(s.data.result.forEach((e=>{if(e.isDefault=Boolean(e.isDefault),e.address=`${e.province}${e.city}${e.county}${e.addressDetail}`,e.isDefault){d.value=e.id;for(let s in l.value)l.value[s]=e[s]}})),r.value=s.data.result)})).catch((e=>{}))},m=()=>{P()({method:"get",url:"/commitShopcart",params:{sids:JSON.stringify(i.value)}}).then((s=>{if(700===s.data.code)return(0,O.Z)(s.data.msg),void e.push({name:"Login"});if(5e4===s.data.code){if(0===s.data.result.length)return void e.push({name:"Shopbag"});let t=0,a=0;s.data.result.forEach((e=>{t+=e.count,a+=e.count*e.price})),o.value=s.data.result,n.value=t,c.value=a}})).catch((e=>{}))},h=()=>{d.value?P()({method:"post",url:"/pay",data:{sids:JSON.stringify(i.value),phone:l.value.tel,address:l.value.address,receiver:l.value.name}}).then((s=>{(0,O.Z)(s.data.msg),700!==s.data.code?6e4===s.data.code&&setTimeout((()=>{e.push({name:"Order"})}),1e3):e.push({name:"Login"})})).catch((e=>{})):(0,O.Z)("请选择地址")};return(0,a.bv)((()=>{i.value=s.query.sids.split(/-/),f(),m()})),{show:t,chosenAddressId:d,list:r,userSelectAddress:l,sids:i,buyShopbagProduct:o,count:n,total:c,addAddress:u,selectAddress:v,select:p,pay:h}}}),U=t(89);const $=(0,U.Z)(R,[["render",H],["__scopeId","data-v-6de83f23"]]);var T=$}}]);
//# sourceMappingURL=93.8d7dabf1.js.map