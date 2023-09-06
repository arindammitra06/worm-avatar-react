
<h2  align="center">
Worm-Avatar-React</h2>

  

  

**Create Funny Worm Avatars for your React projects in seconds...** 
Create Random Worm Avatars or use with unique keys like email address. Highly customizable and easy to integrate.

Click to try out interactive [demo](https://worm-avatar-react.netlify.app/)

  

 <p align="center">

<img width="100%" alt=" Worm-Avatar-React" src="https://raw.githubusercontent.com/arindammitra06/worm-avatar-react/main/screenshots/screenshot.png">

</p> 

  
  

---

  
  
  

## Getting started

  

### Installation

  
  
  

```

npm i worm-avatar-react

```

  

### Basic example

  

```javascript

import  React  from  'react'

import { render } from  'react-dom'

import  ReactGiphySearchbox  from  'react-giphy-search-picker'

  

const  App = () => (

<WormAvatar
	isRandom={true/false}
	seed={'unique-id/email-id'}
	radius={20}
	//isBackgroundGradient={isBGGradient}
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

)

render(<App  />, document.getElementById("root"))

```


### Props

seed = 'email-id@domain.com',
isRandom = false,
radius = 20,
isBackgroundGradient = true,
backgroundStartColor,
backgroundEndColor,
backgroundGradientDegree,
addShadows = true,
bodyHeight,
bodyShape,
bodyColorGradient = true,
bodyStartColor,
bodyEndColor,
bodyGradientDegree,
showEar,
earColor,
eyeCount,
eyePosition,
eyeShadeColor,
eyePupilGradient = true,
eyePupilStartColor,
eyePupilEndColor,
mouthColor,
mouthExpression,
showTongueOrTeeth,
tongueColor,
toothCount,

Inspired from the original codepen [here](https://codepen.io/akhil_001/pen/MWYjBgJ)

## License

Apache License 2.0