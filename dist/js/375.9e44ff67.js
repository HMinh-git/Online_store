"use strict";(self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[]).push([[375],{7375:function(t,s,a){a.r(s),a.d(s,{default:function(){return lt}});var e=a(6768),i=a(4232),r=a(8770);const d=(0,e.Lk)("br",null,null,-1),c={class:"container"},l=(0,e.Lk)("h1",{style:{"text-align":"center"}},"Products",-1),o={class:"container-fluid bg-trasparent my-4 p-3",style:{position:"relative"}},n={key:0,class:"row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"},h={class:"card1 h-100 shadow-sm"},u={href:"#"},p=["src","onClick"],P={class:"label-top shadow-sm"},g={class:"text-white",href:"#"},b={class:"card-body"},m={class:"clearfix mb-3"},k={class:"float-start badge rounded-pill bg-success"},f={class:"float-end"},v=["onClick"],y={class:"card-title"},A=["onClick"],L={class:"d-grid gap-2 my-4"},x=["onClick"],C=(0,e.Fv)('<div class="clearfix mb-1"><span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span><span class="float-end"><i class="far fa-heart" style="cursor:pointer;"></i></span></div>',1),D={key:1,class:"d-flex justify-content-center"},G=(0,e.Lk)("div",{class:"spinner-border",role:"status"},[(0,e.Lk)("span",{class:"sr-only"},"Loading...")],-1),V=[G],E={key:0,"aria-label":"Page navigation example"},J={class:"pagination justify-content-center"},w=(0,e.Lk)("a",{class:"page-link",href:"#"},"Previous",-1),N=[w],B=["onClick"],M=(0,e.Lk)("a",{class:"page-link",href:"#"},"Next",-1),F=[M],H={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},X={class:"modal-dialog"},T={class:"modal-content",style:{border:"black"}},U=(0,e.Lk)("div",{class:"modal-header",style:{background:"#242121",color:"white"}},[(0,e.Lk)("div",{class:"r",style:{display:"flex",margin:"auto"}},[(0,e.Lk)("img",{src:r,style:{height:"31px"}}),(0,e.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"}," Product added to cart successfully ")])],-1),I={class:"modal-body",style:{display:"flex"}},K={class:"card mb-3",style:{"max-width":"540px"}},Q={class:"row g-0"},O={class:"col-md-4"},j=["src"],Y={class:"col-md-8"},Z={class:"card-body"},z={class:"card-title"},R={class:"card-text"},q=(0,e.Lk)("br",null,null,-1),S={class:"card-text"},W={class:"card-text"},_={class:"modal-footer"},$=(0,e.Lk)("button",{type:"button",id:"close",class:"btn btn-dark","data-bs-dismiss":"modal"}," Continue shopping ",-1);function tt(t,s,a,r,G,w){return(0,e.uX)(),(0,e.CE)(e.FK,null,[d,(0,e.Lk)("div",c,[l,(0,e.Lk)("div",o,[0==G.loading?((0,e.uX)(),(0,e.CE)("div",n,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(G.products,(t=>((0,e.uX)(),(0,e.CE)("div",{class:"col hp",key:t.name},[(0,e.Lk)("div",h,[(0,e.Lk)("a",u,[(0,e.Lk)("img",{src:t.image,class:"card1-img-top",alt:"product.title",onClick:s=>w.GoToDetails(t.name)},null,8,p)]),(0,e.Lk)("div",P,[(0,e.Lk)("a",g,(0,i.v_)(t.brand),1)]),(0,e.Lk)("div",b,[(0,e.Lk)("div",m,[(0,e.Lk)("span",k,(0,i.v_)(t.price)+"DT",1),(0,e.Lk)("span",f,[(0,e.Lk)("a",{href:"#",class:"small text-muted text-uppercase aff-link",onClick:s=>w.GoToDetails(t.name)},"More ",8,v)])]),(0,e.Lk)("h5",y,[(0,e.Lk)("a",{target:"_blank",onClick:s=>w.GoToDetails(t.name)},(0,i.v_)(t.description),9,A)]),(0,e.Lk)("div",L,[(0,e.Lk)("button",{"data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:s=>(w.addToCart(t),w.getData(t.name,t.brand,t.price,t.description,t.image,t.key)),class:"btn btn-warning bold-btn"}," add to cart ",8,x)]),C])])])))),128))])):((0,e.uX)(),(0,e.CE)("div",D,V))]),0==G.loadingPagination?((0,e.uX)(),(0,e.CE)("nav",E,[(0,e.Lk)("ul",J,[G.DesablePrevious?((0,e.uX)(),(0,e.CE)("li",{key:0,class:"page-item",onClick:s[0]||(s[0]=(...t)=>w.Previous&&w.Previous(...t))},N)):(0,e.Q3)("",!0),((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(G.ProductsNumber,(t=>((0,e.uX)(),(0,e.CE)("li",{class:"page-item",key:t},[(0,e.Lk)("a",{class:"page-link",href:"#",onClick:s=>w.LoadPage(t)},(0,i.v_)(t),9,B)])))),128)),0==G.DesableNext?((0,e.uX)(),(0,e.CE)("li",{key:1,class:"page-item",onClick:s[1]||(s[1]=(...t)=>w.Next&&w.Next(...t))},F)):(0,e.Q3)("",!0)])])):(0,e.Q3)("",!0)]),(0,e.Lk)("div",H,[(0,e.Lk)("div",X,[(0,e.Lk)("div",T,[U,(0,e.Lk)("div",I,[(0,e.Lk)("div",K,[(0,e.Lk)("div",Q,[(0,e.Lk)("div",O,[(0,e.Lk)("img",{src:G.dataProduct.image,class:"img-fluid rounded-start",alt:"..."},null,8,j)]),(0,e.Lk)("div",Y,[(0,e.Lk)("div",Z,[(0,e.Lk)("h5",z,(0,i.v_)(G.dataProduct.name),1),(0,e.Lk)("h6",R,(0,i.v_)(G.dataProduct.brand),1),q,(0,e.Lk)("h6",S,"Price : "+(0,i.v_)(G.dataProduct.price)+" DT",1),(0,e.Lk)("p",W," There are "+(0,i.v_)(t.$store.state.count)+" items in your cart. ",1)])])])])]),(0,e.Lk)("div",_,[$,(0,e.Lk)("button",{type:"submit",class:"btn btn-dark",onClick:s[2]||(s[2]=(...t)=>w.Gotocart&&w.Gotocart(...t))}," Order ")])])])])],64)}var st=a(5557),at=a(228);const et=(0,st.aU)(),it=(0,st.P)((0,st.rJ)(et,"products"));var rt={name:"ProductsView",data(){return{dataProduct:{name:"",price:0,image:"",brand:"",description:"",key:""},products:[],loading:!0,loadingPagination:!0,lastVisible:"",firstVisible:"",ProductsNumber:0,ProductsPerPage:4,currentPage:1,DesableNext:!1,DesablePrevious:!0,name:""}},created(){(0,st.aQ)(it,(t=>{t.forEach((()=>{this.ProductsNumber++})),this.ProductsNumber%this.ProductsPerPage==0?this.ProductsNumber=parseInt(this.ProductsNumber/this.ProductsPerPage):this.ProductsNumber=parseInt(this.ProductsNumber/this.ProductsPerPage)+1,this.loadingPagination=!1}));const t=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.AB)(this.ProductsPerPage));this.DesablePrevious=!1,(0,st.GG)(t).then((t=>{t.forEach((t=>{this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price}),this.loading=!1})),this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage],this.lastVisible=t.docs[t.docs.length-1];const s=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.HM)(this.lastVisible),(0,st.AB)(1));(0,st.GG)(s).then((t=>{t.forEach((t=>{this.name=t.data().name}))}))}))},methods:{addToCart(t){this.$store.commit("addToCart",t)},getData(t,s,a,e,i,r){this.dataProduct.name=t,this.dataProduct.brand=s,this.dataProduct.price=a,this.dataProduct.description=e,this.dataProduct.image=i,this.dataProduct.key=r},Gotocart(){at.A.push("/cart"),document.getElementById("close").click()},GoToDetails(t){this.$router.push({name:"details",params:{id:t}})},Next(){this.loading=!0,this.currentPage++,console.log(this.currentPage);const t=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.HM)(this.lastVisible),(0,st.AB)(this.ProductsPerPage));(0,st.GG)(t).then((t=>{this.products=[],this.name="",t.forEach((t=>{this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})})),this.DesablePrevious=!0,this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage];const s=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.HM)(this.lastVisible),(0,st.AB)(1));(0,st.GG)(s).then((t=>{t.forEach((t=>{this.name=t.data().name})),""==this.name?this.DesableNext=!0:console.log(this.name)})),this.loading=!1}))},Previous(){this.loading=!0,this.currentPage--;const t=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.rf)(this.firstVisible));(0,st.GG)(t).then((t=>{this.products=[],this.name="",this.DesableNext=!1,this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage],t.docs.length-this.ProductsPerPage==0&&(this.DesablePrevious=!1);const s=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.EO)(this.firstVisible),(0,st.FD)(this.lastVisible));(0,st.GG)(s).then((t=>{t.forEach((t=>{this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})}))})),this.loading=!1}))},async LoadPage(t){if(this.ProductsNumber==t&&(this.DesableNext=!0,this.DesablePrevious=!0),1==t&&(this.DesablePrevious=!1),t>this.currentPage){this.loading=!0,this.DesablePrevious=!0;let s=t-this.currentPage;for(let t=1;t<s;t++){const t=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.HM)(this.lastVisible),(0,st.AB)(this.ProductsPerPage));await(0,st.GG)(t).then((t=>{this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage]}))}const a=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.HM)(this.lastVisible),(0,st.AB)(this.ProductsPerPage));await(0,st.GG)(a).then((t=>{this.products=[],this.name="",t.forEach((t=>{this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})})),this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage]})),this.loading=!1,this.currentPage=t}else if(t<this.currentPage){this.loading=!0,this.DesableNext=!1;let s=this.currentPage-t;const a=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.rf)(this.firstVisible));(0,st.GG)(a).then((t=>{this.products=[],this.DesableNext=!1,this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-s*this.ProductsPerPage],t.docs.length-this.ProductsPerPage==0&&(this.DesablePrevious=!1);const a=(0,st.P)((0,st.rJ)(et,"products"),(0,st.My)("price"),(0,st.EO)(this.firstVisible),(0,st.AB)(this.ProductsPerPage));(0,st.GG)(a).then((t=>{t.forEach((t=>{this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})})),this.lastVisible=t.docs[t.docs.length-1],this.firstVisible=t.docs[t.docs.length-this.ProductsPerPage]})),this.loading=!1})),this.loading=!1,this.currentPage=t}}}},dt=a(1241);const ct=(0,dt.A)(rt,[["render",tt]]);var lt=ct},8770:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAC8klEQVRYCe2Yz4tNYRjHz5kZk2mYJCKKJEmaEqXIwmLKzpSsqGn+AGXHxuJmpRQpC2pKKWos1SwsxEJCWaDJQmSS1FDDRH7OvD7vzZ0Zl3POc673HO897/P2/b7vOfd93ud5vt/TvXPnRpEOdUAdUAfUAXVAHVAH1AF1QB1QByrkgDHmuGWFJMmlILwGG6hFIQ1ULxTPbR21KISB1L+J5+U6alGVBxLte54lESOV1Y/ktCfPtrnJ1FVJAxCWJf4ZMctDFf8e8VtCFT+D+MFQxaPdnAhZ/FUciCtnAKKyPvAIMQ+YekIV/xrxa0IV/wXxu0IVj3YzFLL4syGLH+PxdxZmAMkPwRG4pLAiTYmplfWPDSF1vGBe0XTc3S3Jt8KP0GKCaW9U8KCG5E8dYWaKaXNh7ZC8F47DhZjl5hzsLqIweaXifxC7r4ge5nJS4JJJHo/Z6p8LdnBBPql4Qs0xByXTU1DlDEzDNJvDkYNBHul7nlAzylTO11wKnYZZuEFAy9++OJvnyd8jfrEDz2UpKBbDCzALkwTsl2Wdj+JMHvGviF89f7qkK4p2wCtQgssE9UpaIy6P+E/Eb5fkLSSG4p3wGpTgKUE70hphP494ws3htHyl7NFFNxyDEnwnyIr84xvar9dZxDhVikBJEVrugbeMfNwldGMjN9fWFBYxrhPZ0TjvxUpDffA+lOIDgUMwr/gnnFnqhejmJmhsGXwIi8JbEm9oruvVPQ2uhOPQNeznx4BXYpOaQfla+By6xNGkel6+jvJ18CV0gYteisxqCuWb4Bv4L7jN4UVZtbzdp/l++A62ggkOrfJWnLQxROyE0zAP7A8u26Q1vI9D+W5oRbFkYpaIA96LytsgogbgZ5iFk3lzt008ygfhN5iEUTbithHUSqMIPAjt73csv+ERd6X9ytxK787OIHQYzsAGJrlY76xAOyRC8BFo8ZVpj089d5XRTBzH5xHeR60pru+wKtQBdUAdUAfUAXVAHVAH/rcDPwH3G4ZuOaB7iAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=375.9e44ff67.js.map