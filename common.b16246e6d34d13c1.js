"use strict";(self.webpackChunknelson_mayorga_klym=self.webpackChunknelson_mayorga_klym||[]).push([[592],{4560:(h,a,r)=>{r.d(a,{y:()=>t});var n=r(1135),o=r(4004),s=r(8256),c=r(529);class t{constructor(e){this.http=e,this.carSelected=new n.X(null),this.carSelected$=this.carSelected.asObservable()}getCars(){return this.http.get("../../../assets/cars.json")}setCarSelected(e){this.carSelected.next(e)}filteredCars(e){return e.length>0?this.getCars().pipe((0,o.U)(_=>_.filter(C=>C.brand.toLowerCase().includes(e.toLocaleLowerCase())))):this.getCars()}}t.\u0275fac=function(e){return new(e||t)(s.LFG(c.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}}]);