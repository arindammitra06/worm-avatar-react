import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WormAvatar, {
  BodyHeight,
  BodyShape,
  Expression,
  EyeCount,
  EyePosition,
  TongueOrTeeth,
  ToothCount,
  gradientDegrees,
  hexColor,
} from '../.';
import { useState } from 'react';
import { BlockPicker } from 'react-color';

const App = () => {
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

  const [seed, setSeed] = useState('worm-avatar-react');
  const [isRandom, setIsRandom] = useState(false);
  const [isBGGradient, setIsBGGradient] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#697689');
  const [backgroundEndColor, setBackgroundEndColor] = useState('#DCE775');

  const [isBodyGradient, setIsBodyGradient] = useState(true);
  const [bodyColor, setBodyColor] = useState('#D9E3F0');
  const [bodyEndColor, setBodyEndColor] = useState('#D9E3F0');

  const [showEar, setShowEar] = useState(false);
  const [showTeeth, setShowTeeth] = useState(false);

  return (
    <div style={container}>
      <h2>Funny & Customizable Worm Avatars for your react project</h2>
      <div style={output}>
        <WormAvatar
          isRandom={isRandom}
          seed={seed}
          radius={20}
          isBackgroundGradient={isBGGradient}
          backgroundStartColor={hexColor(backgroundColor)}
          backgroundEndColor={hexColor(backgroundEndColor)}
          bodyColorGradient={isBodyGradient}
          // bodyGradientDegree={gradientDegrees(180)}
          bodyStartColor={hexColor(bodyColor)}
          bodyEndColor={hexColor(bodyEndColor)}
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
};

ReactDOM.render(<App />, document.getElementById('root'));
