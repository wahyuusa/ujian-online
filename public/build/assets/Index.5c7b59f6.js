import{L as f}from"./Admin.1c18bed6.js";import{H as u,r as x,a as v,o as a,c as o,b as w,w as p,d as t,e as y,f as N,s as j,F as _,p as m,t as e,g as h,h as k,i as d}from"./app.0ab53681.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const U={layout:f,components:{Head:u},props:{errors:Object,exams:Array,grades:Array},setup(){const n=x({exam_id:new URL(document.location).searchParams.get("exam_id")});return{form:n,filter:()=>{k.Inertia.get("/admin/reports/filter",{exam_id:n.exam_id})}}}},g=t("title",null,"Laporan Nilai Ujian - Aplikasi Ujian Online",-1),A={class:"container-fluid mb-5 mt-5"},S={class:"row"},V={class:"col-md-12"},C={class:"card border-0 shadow mb-4"},D={class:"card-body"},F=t("h5",null,[t("i",{class:"fa fa-filter"}),d(" Filter Nilai Ujian")],-1),H=t("hr",null,null,-1),O={class:"row"},B={class:"col-md-9"},E=t("label",{class:"control-label",for:"name"},"Ujian",-1),P=["value"],I={key:0,class:"alert alert-danger mt-2"},K=t("div",{class:"col-md-3"},[t("label",{class:"form-label fw-bold text-white"},"*"),t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[t("i",{class:"fa fa-filter"}),d(" Filter")])],-1),M={key:0,class:"card border-0 shadow"},R={class:"card-body"},T={class:"row"},W=t("div",{class:"col-md-9 col-12"},[t("h5",{class:"mt-2"},[t("i",{class:"fa fa-chart-line"}),d(" Laporan Nilai Ujian")])],-1),X={class:"col-md-3 col-12"},q=["href"],z=t("i",{class:"fa fa-file-excel"},null,-1),G=d(" DOWNLOAD EXCEL"),J=[z,G],Q=t("hr",null,null,-1),Y={class:"table-responsive"},Z={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},$=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0"},"Nama Siswa"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Pelajaran"),t("th",{class:"border-0"},"Nilai")])],-1),tt=t("div",{class:"mt-2"},null,-1),st={class:"fw-bold text-center"},et={class:"text-center"},at={class:"fw-bold text-center"};function ot(n,l,i,r,lt,it){const b=v("Head");return a(),o(_,null,[w(b,null,{default:p(()=>[g]),_:1}),t("div",A,[t("div",S,[t("div",V,[t("div",C,[t("div",D,[F,H,t("form",{onSubmit:l[1]||(l[1]=y((...s)=>r.filter&&r.filter(...s),["prevent"]))},[t("div",O,[t("div",B,[E,N(t("select",{class:"form-select","onUpdate:modelValue":l[0]||(l[0]=s=>r.form.exam_id=s)},[(a(!0),o(_,null,m(i.exams,(s,c)=>(a(),o("option",{key:c,value:s.id},e(s.title)+" \u2014 Kelas : "+e(s.classroom.title)+" \u2014 Pelajaran : "+e(s.lesson.title),9,P))),128))],512),[[j,r.form.exam_id]]),i.errors.exam_id?(a(),o("div",I,e(i.errors.exam_id),1)):h("",!0)]),K])],32)])]),i.grades.length>0?(a(),o("div",M,[t("div",R,[t("div",T,[W,t("div",X,[t("a",{href:`/admin/reports/export?exam_id=${r.form.exam_id}`,target:"_blank",class:"btn btn-success btn-md border-0 shadow w-100 text-white"},J,8,q)])]),Q,t("div",Y,[t("table",Z,[$,tt,t("tbody",null,[(a(!0),o(_,null,m(i.grades,(s,c)=>(a(),o("tr",{key:s.id},[t("td",st,e(c+1),1),t("td",null,e(s.exam.title),1),t("td",null,e(s.exam_session.title),1),t("td",null,e(s.student.name),1),t("td",et,e(s.exam.classroom.title),1),t("td",null,e(s.exam.lesson.title),1),t("td",at,e(s.grade),1)]))),128))])])])])])):h("",!0)])])])],64)}const ct=L(U,[["render",ot]]);export{ct as default};
