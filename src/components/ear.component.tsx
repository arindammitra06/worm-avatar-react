import * as React from 'react';
import { EarProps, EarSide } from '..';
import { newShade } from '../utils/all-utils';


  export const Ear: React.FC<EarProps> = ({earSide, earColor}: EarProps) => {
    
    const earShadeLight = newShade(earColor, -60);
    
    const avatarEar : React.CSSProperties = {
      position:'absolute',
      top:'-10%',
      transform:'translate(-50%)',
      width:'15px',
      height:'30px',
      background:`linear-gradient(to top, ${earColor},${earShadeLight})`,
      left : earSide === EarSide.LEFT ? '25%' : '75%',
      borderTopRightRadius: earSide === EarSide.LEFT ? '100%' : '25%',
      borderTopLeftRadius:  earSide === EarSide.RIGHT ? '100%' : '25%',
      
    };

   
    return (  <div style={avatarEar}>
                <span className="avatar-signal"></span>
              </div>
           )
  }