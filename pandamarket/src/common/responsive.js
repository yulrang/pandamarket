import React from 'react';
import {useMediaQuery} from 'react-responsive';

export function Mobile({children}){
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  
  return <>{isMobile && children}</>
}

export function PC ({children}){
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  
  return <>{isPc && children}</>
}