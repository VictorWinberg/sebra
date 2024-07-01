const p=(n,t)=>t.reduce((r,a)=>(a in n&&(r[a]=n[a]),r),{}),s=(n,t)=>new Map(n.map(r=>[r[t],r]));export{p,s as t};
