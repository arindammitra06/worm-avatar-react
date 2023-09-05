import * as React from 'react';
import { TongueProps } from '..';


  export const Tongue: React.FC<TongueProps> = ({tongueColor}: TongueProps) => {
    
    
    const avatarTongue : React.CSSProperties = {
      position:'absolute',
      left:'50%',
      top:'68%',
      transform:'translate(-50%)',
      width:'20px',
      height:'20px',
      borderBottomLeftRadius:'100%',
      borderBottomRightRadius:'100%',
      background : tongueColor,
      
    };
    
    return (<div style={avatarTongue} />)
  }