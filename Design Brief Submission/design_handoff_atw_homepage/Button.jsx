import React from 'react';
export function Button({variant='primary',size='md',disabled,children,onClick,type='button'}){
  const pad={sm:'8px 18px',md:'12px 26px',lg:'16px 34px'}[size];
  const fs={sm:'11px',md:'12px',lg:'13px'}[size];
  const base={fontFamily:'var(--font-sans)',fontWeight:600,letterSpacing:'var(--tracking-label)',textTransform:'uppercase',fontSize:fs,padding:pad,borderRadius:'var(--radius-pill)',cursor:disabled?'default':'pointer',opacity:disabled?.45:1,transition:'background var(--dur-fast) var(--ease-out),opacity var(--dur-fast) var(--ease-out)',border:'1px solid transparent'};
  const styles={
    primary:{...base,background:'var(--accent)',color:'var(--accent-ink)'},
    secondary:{...base,background:'transparent',color:'var(--text-body)',border:'1px solid var(--border-strong)'},
    inverse:{...base,background:'var(--surface-inverse)',color:'var(--text-inverse)'},
    ghost:{...base,background:'transparent',color:'var(--text-body)',textTransform:'none',letterSpacing:'.01em',fontWeight:500,fontSize:size==='sm'?'13px':'14px',padding:'4px 0',borderRadius:0}
  };
  const [hover,setHover]=React.useState(false);
  const s={...styles[variant]};
  if(hover&&!disabled){if(variant==='primary')s.background='var(--accent-hover)';if(variant==='secondary')s.background='var(--cream-300)';if(variant==='inverse')s.background='var(--green-800)';if(variant==='ghost')s.color='var(--link-hover)';}
  return <button type={type} disabled={disabled} onClick={onClick} style={s} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>{children}{variant==='ghost'&&<span style={{marginLeft:6}}>→</span>}</button>;
}