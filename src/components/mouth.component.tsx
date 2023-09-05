import * as React from 'react';
import { Expression, MouthProps } from '..';


  export const Mouth: React.FC<MouthProps> = ({expression, mouthColor}: MouthProps) => {
    
    
    const avatarMeh : React.CSSProperties = {
      position: 'absolute',
      left: '50%',
      top: '65%',
      transform: 'translate(-50%)',
      padding: '0.2em',
      transition: '0.2s all linear',
      width:'60px',
      height:'23px',
      background:'rgba(0,0,0,0.3)',
      border:'2px solid rgba(96,163,138,1)',
      borderRadius:'10px',
      
    };

    const avatarSmile : React.CSSProperties = {
      position: 'absolute',
      transform: 'translate(-50%)',
      transition: '0.2s all linear',
      border:`10px solid ${mouthColor}`,
      left: '50%',
      top:'15%',
      width:'70px',
      height:'70px',
      background:'transparent',
      borderRadius:'50%',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor:'transparent',
    };

    const avatarSad : React.CSSProperties = {
      position: 'absolute',
      transform: 'translate(-50%)',
      border:`10px solid ${mouthColor}`,
      left: '50%',
      top:'65%',
      width:'70px',
      height:'70px',
      background:'transparent',
      borderRadius:'50%',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor:'transparent',
    };

    const avatarWoh : React.CSSProperties = {
      position: 'absolute',
      left: '50%',
      top: '65%',
      transform: 'translate(-50%)',
      padding: '0.2em',
      transition: '0.2s all linear',
      width:'30px',
      height:'40px',
      background:`${mouthColor}`,
      border:'5px solid #2727274a',
      borderRadius:'100%',
    };
    
    const avatarBlank : React.CSSProperties = {
      position: 'absolute',
      left: '50%',
      top: '65%',
      transform: 'translate(-50%)',
      padding: '0.2em',
      transition: '0.2s all linear',
      width:'50px',
      height:'10px',
      background:'rgba(0,0,0,0.3)',
      border:'rgba(243,166,222,0.5)',
      borderRadius:'10px',
    };
    
    return (<div style={expression===Expression.HAPPY ? avatarSmile 
                        : expression===Expression.SAD ? avatarSad 
                        : expression===Expression.WOH ? avatarWoh
                        : expression===Expression.BLANK ? avatarBlank 
                        : avatarMeh }></div>)
  }