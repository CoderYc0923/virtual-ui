import{V as o}from"./Clipboard-21994e68.js";import{d as l,o as e,b as a,j as t,g as s}from"./vue-90884f3d.js";const r={class:"w-full m-auto flex flex-col px-8 xl:w-1200 xl:px-0 box-border"},n=[t("h1",null,"测试靶场",-1),t("hr",{style:{"margin-bottom":"30px"}},null,-1),t("div",{class:"test-box relative"},[t("h4",null,"这里是测试复制测试复制测试复制"),t("textarea",{placeholder:"可以在这里粘贴",style:{width:"300px",height:"400px",border:"1px solid #333"}})],-1)],p=l({__name:"Test",setup(l){const t=()=>{alert("监听到了复制噢")},p=o=>(console.log("原有粘贴板的内容",o),o+" - VirtualUi: Make any component library you want to make.");return e((()=>{const l=new o({disableCopy:!1,onCopyCallback:t,clipboardInterceptor:p});console.log(l)})),(o,l)=>(s(),a("div",r,n))}});export{p as default};
