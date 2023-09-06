import React, { useState } from 'react';
import './App.css';
import WormAvatar, { hexColor, Expression, TongueOrTeeth } from 'worm-avatar-react';
import { BlockPicker } from 'react-color';

function App() {
  const container: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '10px',
    margin: 'auto',
    width: '100%',
    textAlign: 'center',
  };

  const output: React.CSSProperties = {
    padding: '10px',

    display: 'flex',
    justifyContent: 'center',
  };

  const gridContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
  };

  const divider: React.CSSProperties = {
    borderTop: '3px dashed #bbb',
  };

  const [seed, setSeed] = useState(generateUUID());
  const [isRandom, setIsRandom] = useState(false);
  const [allowBackground, setAllowBackground] = useState(false);
  const [allowBody, setAllowBody] = useState(false);
  const [isBGGradient, setIsBGGradient] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#697689');
  const [backgroundEndColor, setBackgroundEndColor] = useState('#DCE775');

  const [isBodyGradient, setIsBodyGradient] = useState(true);
  const [bodyColor, setBodyColor] = useState('#D9E3F0');
  const [bodyEndColor, setBodyEndColor] = useState('#D9E3F0');

  const [showEar, setShowEar] = useState(false);
  const [showTeeth, setShowTeeth] = useState(false);

  function generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
  

  return (
    <div style={container}>
      <h1>Funny & Customizable Worm Avatars for your React Project</h1>
      <div style={output}>
        <WormAvatar
          size={100}
          isRandom={isRandom}
          seed={seed}
          radius={20}
          isBackgroundGradient={isBGGradient}
          backgroundStartColor={allowBackground ? hexColor(backgroundColor): ''}
          backgroundEndColor={allowBackground ? hexColor(backgroundEndColor): ''}
          bodyColorGradient={isBodyGradient}
          // bodyGradientDegree={gradientDegrees(180)}
          bodyStartColor={allowBody ? hexColor(bodyColor) :''}
          bodyEndColor={allowBody ?  hexColor(bodyEndColor) : ''}
          // backgroundGradientDegree={gradientDegrees(0)}
          mouthExpression={Expression.SAD}
          showEar={showEar}
          // earColor={hexColor('#f5af19')}
          // eyePosition={EyePosition.NORMAL}
          // eyeCount={EyeCount.TWO}
          // eyeShadeColor={hexColor('#fca311')}
          // eyePupilGradient={true}
          // eyePupilStartColor={hexColor('#fca311')}
          // eyePupilEndColor={hexColor('#ef233c')}
          showTongueOrTeeth={
            showTeeth ? TongueOrTeeth.TEETH : TongueOrTeeth.TONGUE
          }
          // tongueColor={hexColor('#004FF9')}
          // toothCount={ToothCount.TWO}
          // bodyHeight={BodyHeight.TALL}
          // bodyShape={BodyShape.THIN}
          // addShadows={false}
        />
      </div>
      <hr style={divider} />

      <div style={gridContainer}>
        <div style={{ textAlign: 'left', marginLeft: '50px' }}>
          <div>
            <label>
              Seed/Email-id/Unique Key:
              <input
                type="Seed/Email-id/Unique Key"
                value={seed}
                onChange={event => setSeed(event.currentTarget.value)}
              />
            </label>
          </div>
        </div>

        <div>
          <div style={{ textAlign: 'left', marginLeft: '50px' }}>
            <label>
              Random Worms
              <input
                type="checkbox"
                checked={isRandom}
                onChange={event => setIsRandom(!isRandom)}
              />
            </label>
          </div>
        </div>
      </div>

      <hr style={divider} />

      <div style={gridContainer}>
        <div style={{ textAlign: 'left', marginLeft: '50px' }}>
          <div>
            <label>
              Allow background colors? 
              <input
                type="checkbox"
                checked={allowBackground}
                onChange={event => setAllowBackground(!allowBackground)}
              />
            </label>
          </div>
        </div>

        <div>
          <div style={{ textAlign: 'left', marginLeft: '50px' }}>
            <label>
              Allow Body color?
              <input
                type="checkbox"
                checked={allowBody}
                onChange={event => setAllowBody(!allowBody)}
              />
            </label>
          </div>
        </div>
      </div>


      <hr style={divider} />

      <div style={gridContainer}>
        <div style={{ textAlign: 'left', marginLeft: '50px' }}>
          <div>
            <label>
              Is Background Gradient?:
              <input
                type="checkbox"
                checked={isBGGradient}
                onChange={event => setIsBGGradient(!isBGGradient)}
              />
            </label>
          </div>
          <div style={{ margin: '20px' }}>
            Start Color
            <BlockPicker
              color={backgroundColor}
              onChange={color => {
                setBackgroundColor(color.hex);
              }}
            />
          </div>

          <div
            style={{ margin: '20px', display: isBGGradient ? 'block' : 'none' }}
          >
            End Color
            <BlockPicker
              color={backgroundEndColor}
              onChange={color => {
                setBackgroundEndColor(color.hex);
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'left', marginLeft: '50px' }}>
          <div>
            <label>
              Is Body Gradient? :
              <input
                type="checkbox"
                checked={isBodyGradient}
                onChange={event => setIsBodyGradient(!isBodyGradient)}
              />
            </label>
          </div>
          <div style={{ margin: '20px' }}>
            Start Color
            <BlockPicker
              color={bodyColor}
              onChange={color => {
                setBodyColor(color.hex);
              }}
            />
          </div>

          <div
            style={{
              margin: '20px',
              display: isBodyGradient ? 'block' : 'none',
            }}
          >
            End Color
            <BlockPicker
              color={bodyEndColor}
              onChange={color => {
                setBodyEndColor(color.hex);
              }}
            />
          </div>
        </div>
      </div>

      <hr style={divider} />

      <div style={gridContainer}>
        <div style={{ textAlign: 'left', marginLeft: '50px' }}>
          <div>
            <label>
              Show Ear ?
              <input
                type="checkbox"
                checked={showEar}
                onChange={event => setShowEar(!showEar)}
              />
            </label>
          </div>
        </div>

        <div>
          <div style={{ textAlign: 'left', marginLeft: '50px' }}>
            <label>
              Show Teeth?
              <input
                type="checkbox"
                checked={showTeeth}
                onChange={event => setShowTeeth(!showTeeth)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
