function round(a,b,c){var d,e,f,g;if(b|=0,d=Math.pow(10,b),a*=d,g=a>0|-(a<0),f=a%1===.5*g,e=Math.floor(a),f)switch(c){case"2":case"PHP_ROUND_HALF_DOWN":a=e+(g<0);break;case"3":case"PHP_ROUND_HALF_EVEN":a=e+e%2*g;break;case"4":case"PHP_ROUND_HALF_ODD":a=e+!(e%2);break;default:a=e+(g>0)}return(f?a:Math.round(a))/d}