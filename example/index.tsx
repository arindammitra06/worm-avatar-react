import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WormAvatar, { BodyHeight, BodyShape, Expression, EyeCount, EyePosition, TongueOrTeeth, ToothCount,  gradientDegrees, hexColor } from '../.';

const App = () => {
  return (
    <div>
      <WormAvatar  
          isRandom={true}
          //seed='arindammitra06@gmail.com'
          radius={20} 
          // isBackgroundGradient={true}
          // backgroundStartColor={hexColor('#C9FFBF')}
          // backgroundEndColor={hexColor('#FFAFBD')}
          // backgroundGradientDegree={gradientDegrees(0)}
          // mouthExpression={Expression.MEH} 
          // showEar={true}
          // bodyColorGradient={true}
          // bodyGradientDegree={gradientDegrees(180)}
          // bodyStartColor={hexColor('#004FF9')}
          // bodyEndColor={hexColor('#FFF94C')}
          // earColor={hexColor('#f5af19')}
          // eyePosition={EyePosition.NORMAL}
          // eyeCount={EyeCount.TWO}
          // eyeShadeColor={hexColor('#fca311')}
          // eyePupilGradient={true}
          // eyePupilStartColor={hexColor('#fca311')}
          // eyePupilEndColor={hexColor('#ef233c')}
          // showTongueOrTeeth={TongueOrTeeth.TEETH}
          // tongueColor={hexColor('#004FF9')}
          // toothCount={ToothCount.TWO}
          // bodyHeight={BodyHeight.TALL} 
          // bodyShape={BodyShape.THIN} 
          // addShadows={false}
          />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
