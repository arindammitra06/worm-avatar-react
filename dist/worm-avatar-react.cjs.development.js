'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

var Eye = function Eye(_ref) {
  var eyePosition = _ref.eyePosition,
    eyeCount = _ref.eyeCount,
    eyeSide = _ref.eyeSide,
    eyeShadeColor = _ref.eyeShadeColor,
    showShadow = _ref.showShadow,
    eyePupilGradient = _ref.eyePupilGradient,
    eyePupilStartColor = _ref.eyePupilStartColor,
    eyePupilEndColor = _ref.eyePupilEndColor;
  var avatarEye = {
    position: 'absolute',
    top: eyePosition === exports.EyePosition.NORMAL ? '10%' : eyePosition === exports.EyePosition.TOP ? '-15%' : '5%',
    left: eyeCount === exports.EyeCount.ONE ? '45%' : eyeSide === exports.EyeSide.LEFT ? '10%' : '85%',
    width: '65px',
    height: '65px',
    background: "linear-gradient( 105deg, rgba(255, 255, 255, 1), " + eyeShadeColor + " )",
    borderRadius: '100%',
    boxShadow: showShadow ? '4px 8px 5px rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px',
    margin: '5px',
    transform: 'translateX(-50%)'
  };
  var avatarEyePupil = {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%)',
    zIndex: '100',
    borderRadius: '100%',
    background: eyePupilGradient ? "linear-gradient(135deg," + eyePupilStartColor + ", " + eyePupilEndColor + " 75%)" : "" + eyePupilStartColor
  };
  var avatarEyeBlack = {
    position: 'absolute',
    width: '55%',
    height: '55%',
    left: '50%',
    top: '25%',
    background: 'rgba(44, 47, 50, 1)',
    transform: 'translate(-50%)',
    borderRadius: '100%',
    boxShadow: showShadow ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px'
  };
  var avatarEyeReflection = {
    position: 'absolute',
    width: '7px',
    height: '7px',
    left: '25%',
    top: '10%',
    background: 'rgba(235, 235, 235, 1)',
    transform: 'translate(-50%)',
    borderRadius: '100%',
    boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.2)'
  };
  return React.createElement("div", {
    style: avatarEye
  }, React.createElement("div", {
    style: avatarEyePupil
  }, React.createElement("span", {
    style: avatarEyeBlack
  }, React.createElement("span", {
    style: avatarEyeReflection
  }))));
};

var Mouth = function Mouth(_ref) {
  var expression = _ref.expression,
    mouthColor = _ref.mouthColor;
  var avatarMeh = {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%)',
    padding: '0.2em',
    transition: '0.2s all linear',
    width: '60px',
    height: '23px',
    background: 'rgba(0,0,0,0.3)',
    border: '2px solid rgba(96,163,138,1)',
    borderRadius: '10px'
  };
  var avatarSmile = {
    position: 'absolute',
    transform: 'translate(-50%)',
    transition: '0.2s all linear',
    border: "10px solid " + mouthColor,
    left: '50%',
    top: '15%',
    width: '70px',
    height: '70px',
    background: 'transparent',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent'
  };
  var avatarSad = {
    position: 'absolute',
    transform: 'translate(-50%)',
    border: "10px solid " + mouthColor,
    left: '50%',
    top: '65%',
    width: '70px',
    height: '70px',
    background: 'transparent',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent'
  };
  var avatarWoh = {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%)',
    padding: '0.2em',
    transition: '0.2s all linear',
    width: '30px',
    height: '40px',
    background: "" + mouthColor,
    border: '5px solid #2727274a',
    borderRadius: '100%'
  };
  var avatarBlank = {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%)',
    padding: '0.2em',
    transition: '0.2s all linear',
    width: '50px',
    height: '10px',
    background: 'rgba(0,0,0,0.3)',
    border: 'rgba(243,166,222,0.5)',
    borderRadius: '10px'
  };
  return React.createElement("div", {
    style: expression === exports.Expression.HAPPY ? avatarSmile : expression === exports.Expression.SAD ? avatarSad : expression === exports.Expression.WOH ? avatarWoh : expression === exports.Expression.BLANK ? avatarBlank : avatarMeh
  });
};

var Tongue = function Tongue(_ref) {
  var tongueColor = _ref.tongueColor;
  var avatarTongue = {
    position: 'absolute',
    left: '50%',
    top: '68%',
    transform: 'translate(-50%)',
    width: '20px',
    height: '20px',
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
    background: tongueColor
  };
  return React.createElement("div", {
    style: avatarTongue
  });
};

var newShade = function newShade(hexColor, magnitude) {
  hexColor = hexColor.replace("#", "");
  if (hexColor.length === 6) {
    var decimalColor = parseInt(hexColor, 16);
    var r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    var g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    var b = (decimalColor >> 8 & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return "#" + (g | b << 8 | r << 16).toString(16);
  } else {
    return hexColor;
  }
};
var isValidHex = function isValidHex(hex) {
  return /^#(([0-9A-Fa-f]{2}){3,4}|[0-9A-Fa-f]{3})$/.test(hex);
};
var stringToHashCode = function stringToHashCode(str) {
  if (str.length === 0) return 0;
  var hash = 0;
  var _char;
  for (var i = 0; i < str.length; i++) {
    _char = str.charCodeAt(i);
    hash = (hash << 5) - hash + _char;
    hash |= 0; // Convert to 32bit integer
  }

  return Math.abs(hash);
};
function generateUUID() {
  var d = new Date().getTime();
  var d2 = typeof performance !== 'undefined' && performance.now && performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
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
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

var Ear = function Ear(_ref) {
  var earSide = _ref.earSide,
    earColor = _ref.earColor;
  var earShadeLight = newShade(earColor, -60);
  var avatarEar = {
    position: 'absolute',
    top: '-10%',
    transform: 'translate(-50%)',
    width: '15px',
    height: '30px',
    background: "linear-gradient(to top, " + earColor + "," + earShadeLight + ")",
    left: earSide === exports.EarSide.LEFT ? '25%' : '75%',
    borderTopRightRadius: earSide === exports.EarSide.LEFT ? '100%' : '25%',
    borderTopLeftRadius: earSide === exports.EarSide.RIGHT ? '100%' : '25%'
  };
  return React.createElement("div", {
    style: avatarEar
  }, React.createElement("span", {
    className: "avatar-signal"
  }));
};

var Tooth = function Tooth(_ref) {
  var toothCount = _ref.toothCount,
    toothSide = _ref.toothSide;
  var avatarTooth = {
    position: 'absolute',
    width: toothCount === exports.ToothCount.ONE ? '20px' : '10px',
    height: '10px',
    background: 'rgba(210,237,227,1)',
    borderRadius: '2px',
    top: '68%',
    transform: 'translate(-50%)',
    left: toothCount === exports.ToothCount.ONE ? '50%' : toothSide === exports.ToothSide.LEFT ? '45%' : '55%'
  };
  return React.createElement("div", {
    style: avatarTooth
  });
};

var Body = function Body(_ref) {
  var addShadows = _ref.addShadows,
    bodyHeight = _ref.bodyHeight,
    bodyShape = _ref.bodyShape,
    bodyColorGradient = _ref.bodyColorGradient,
    bodyStartColor = _ref.bodyStartColor,
    bodyEndColor = _ref.bodyEndColor,
    bodyGradientDegree = _ref.bodyGradientDegree,
    showEar = _ref.showEar,
    earColor = _ref.earColor,
    eyeCount = _ref.eyeCount,
    eyePosition = _ref.eyePosition,
    eyeShadeColor = _ref.eyeShadeColor,
    eyePupilGradient = _ref.eyePupilGradient,
    eyePupilStartColor = _ref.eyePupilStartColor,
    eyePupilEndColor = _ref.eyePupilEndColor,
    mouthColor = _ref.mouthColor,
    mouthExpression = _ref.mouthExpression,
    showTongueOrTeeth = _ref.showTongueOrTeeth,
    tongueColor = _ref.tongueColor,
    toothCount = _ref.toothCount;
  var avatarBody = {
    left: '50%',
    top: bodyHeight === exports.BodyHeight.TALL ? '55%' : '65%',
    transform: 'translate(-50%, -50%)',
    width: bodyShape === exports.BodyShape.THIN ? '50%' : '80%',
    height: bodyHeight === exports.BodyHeight.TALL ? '90%' : '80%',
    boxShadow: addShadows ? 'rgba(0, 0, 0, 0.5) 6px 0px 15px 0px' : 'rgba(0, 0, 0, 0.5) 0px 0px 0px 0px',
    position: 'relative',
    borderRadius: bodyShape === exports.BodyShape.THIN ? '0px' : '90%',
    borderTopLeftRadius: bodyShape === exports.BodyShape.THIN ? '50px' : '90%',
    borderTopRightRadius: bodyShape === exports.BodyShape.THIN ? '50px' : '90%',
    background: bodyColorGradient ? "linear-gradient( " + bodyGradientDegree + "deg, " + bodyStartColor + ", " + bodyEndColor + ")" : bodyStartColor
  };
  return React.createElement("div", {
    style: avatarBody
  }, showEar && React.createElement(React.Fragment, null, React.createElement(Ear, {
    earSide: exports.EarSide.LEFT,
    earColor: earColor
  }), React.createElement(Ear, {
    earSide: exports.EarSide.RIGHT,
    earColor: earColor
  })), eyeCount === exports.EyeCount.ONE && React.createElement(Eye, {
    showShadow: addShadows,
    eyeSide: exports.EyeSide.LEFT,
    eyePosition: eyePosition,
    eyeCount: exports.EyeCount.ONE,
    eyeShadeColor: eyeShadeColor,
    eyePupilGradient: eyePupilGradient,
    eyePupilStartColor: eyePupilStartColor,
    eyePupilEndColor: eyePupilEndColor
  }), eyeCount === exports.EyeCount.TWO && React.createElement(React.Fragment, null, React.createElement(Eye, {
    showShadow: addShadows,
    eyeSide: exports.EyeSide.LEFT,
    eyePosition: eyePosition,
    eyeCount: exports.EyeCount.TWO,
    eyeShadeColor: eyeShadeColor,
    eyePupilGradient: eyePupilGradient,
    eyePupilStartColor: eyePupilStartColor,
    eyePupilEndColor: eyePupilEndColor
  }), React.createElement(Eye, {
    showShadow: addShadows,
    eyeSide: exports.EyeSide.RIGHT,
    eyePosition: eyePosition,
    eyeCount: exports.EyeCount.TWO,
    eyeShadeColor: eyeShadeColor,
    eyePupilGradient: eyePupilGradient,
    eyePupilStartColor: eyePupilStartColor,
    eyePupilEndColor: eyePupilEndColor
  })), React.createElement(Mouth, {
    expression: mouthExpression,
    mouthColor: mouthColor
  }), showTongueOrTeeth === exports.TongueOrTeeth.NONE ? React.createElement(React.Fragment, null) : showTongueOrTeeth === exports.TongueOrTeeth.TONGUE ? React.createElement(Tongue, {
    tongueColor: tongueColor
  }) : showTongueOrTeeth === exports.TongueOrTeeth.TEETH ? React.createElement(React.Fragment, null, toothCount === exports.ToothCount.ONE ? React.createElement(Tooth, {
    toothCount: toothCount,
    toothSide: exports.ToothSide.LEFT
  }) : React.createElement(React.Fragment, null, React.createElement(Tooth, {
    toothCount: toothCount,
    toothSide: exports.ToothSide.LEFT
  }), React.createElement(Tooth, {
    toothCount: toothCount,
    toothSide: exports.ToothSide.RIGHT
  }))) : React.createElement(React.Fragment, null));
};

var eyeShadeColors = ["#7E57C2", "#1B5E20", "#3E2723", "#455A64", "#AD1457", "#D1C4E9", "#FFEE58", "#8C9EFF", "#FBC02D", "#673AB7", "#9FA8DA", "#EF6C00", "#FFD740", "#C8E6C9", "#4527A0", "#303F9F", "#64DD17", "#BA68C8", "#01579B", "#B3E5FC", "#F8BBD0", "#FF80AB", "#00695C", "#EC407A", "#880E4F", "#F5F5F5", "#F57F17", "#00E5FF", "#1A237E", "#424242", "#FBE9E7", "#F9A825", "#E0F2F1", "#BCAAA4", "#8BC34A", "#69F0AE", "#1DE9B6", "#D32F2F", "#AFB42B", "#64B5F6", "#E8EAF6", "#FFC107", "#EF9A9A", "#00BCD4", "#C6FF00", "#00B8D4", "#80D8FF", "#81C784", "#26A69A", "#E64A19", "#BF360C", "#4CAF50", "#E6EE9C", "#00838F", "#8D6E63", "#80DEEA", "#DCE775", "#D4E157", "#FFC400", "#4DD0E1", "#9E9E9E", "#EF5350", "#651FFF", "#E53935", "#FFE57F", "#FFFF8D", "#5E35B1", "#C2185B", "#FFF176", "#FF8F00", "#00BFA5", "#7B1FA2", "#FFE082", "#FF9E80", "#AEEA00", "#FF1744", "#311B92", "#FFB300", "#F57C00", "#EDE7F6", "#2E7D32", "#FFFF00", "#40C4FF", "#5D4037", "#B2EBF2", "#FFEA00", "#42A5F5", "#558B2F", "#FFF9C4", "#FFAB91", "#EEFF41", "#607D8B", "#66BB6A", "#E0E0E0", "#FFF8E1", "#0288D1", "#D500F9", "#7C4DFF", "#9CCC65", "#A5D6A7", "#F48FB1", "#6200EA", "#448AFF", "#EFEBE9", "#E57373", "#FF7043", "#B2DFDB", "#FF5252", "#FFCDD2", "#64FFDA", "#039BE5", "#00C853", "#212121", "#FFD180", "#80CBC4", "#5C6BC0", "#CDDC39", "#DD2C00", "#0277BD", "#00ACC1", "#FFCC80", "#2962FF", "#795548", "#536DFE", "#E1F5FE", "#B71C1C", "#8E24AA", "#F1F8E9", "#A7FFEB", "#006064", "#D7CCC8", "#7CB342", "#4DB6AC", "#4A148C", "#FFF3E0", "#D50000", "#CFD8DC", "#A1887F", "#E0F7FA", "#AB47BC", "#EEEEEE", "#827717", "#F4FF81", "#0097A7", "#FF9100", "#E040FB", "#90A4AE", "#1565C0", "#FFA000", "#BDBDBD", "#FB8C00", "#FF8A80", "#FCE4EC", "#E65100", "#00B0FF", "#F3E5F5", "#33691E", "#26C6DA", "#9C27B0", "#00E676", "#76FF03", "#1E88E5", "#00796B", "#004D40", "#FFD600", "#F9FBE7", "#29B6F6", "#546E7A", "#C62828", "#D81B60", "#C5CAE9", "#388E3C", "#FF6D00", "#FFAB40", "#ECEFF1", "#FFECB3", "#82B1FF", "#EA80FC", "#1976D2", "#CCFF90", "#90CAF9", "#37474F", "#6D4C41", "#E91E63", "#E3F2FD", "#B2FF59", "#FF3D00", "#757575", "#C5E1A5", "#CE93D8", "#FFF59D", "#FF6F00", "#3D5AFE", "#18FFFF", "#3F51B5", "#FFA726", "#512DA8", "#FFE0B2", "#FFCCBC", "#6A1B9A", "#FFFDE7", "#FF6E40", "#3949AB", "#BBDEFB", "#263238", "#9575CD", "#B388FF", "#2979FF", "#AED581", "#283593", "#304FFE", "#FFAB00", "#7986CB", "#FFEBEE", "#FDD835", "#F4511E", "#C51162", "#B9F6CA", "#78909C", "#FF8A65", "#E8F5E9", "#F44336", "#FF9800", "#FFB74D", "#03A9F4", "#43A047", "#B0BEC5", "#4E342E", "#FFCA28", "#D84315", "#E1BEE7", "#616161", "#DCEDC8", "#00897B", "#0091EA", "#4FC3F7", "#689F38", "#9E9D24", "#0D47A1", "#F06292", "#84FFFF", "#2196F3", "#009688", "#F0F4C3", "#FF4081", "#FAFAFA", "#F50057", "#AA00FF", "#FFEB3B", "#FF5722", "#FFD54F", "#81D4FA", "#C0CA33", "#B39DDB"];
var mouthColors = ["#FFCDD2", "#00B8D4", "#E53935", "#B2FF59", "#8E24AA", "#FFF59D", "#00BFA5", "#5C6BC0", "#82B1FF", "#E8EAF6", "#B39DDB", "#78909C", "#FB8C00", "#FF6F00", "#FFD54F", "#43A047", "#827717", "#FFAB40", "#7986CB", "#1DE9B6", "#E65100", "#9C27B0", "#00ACC1", "#0288D1", "#FAFAFA", "#FFFDE7", "#90CAF9", "#6D4C41", "#0091EA", "#9FA8DA", "#EFEBE9", "#FF8A80", "#A7FFEB", "#F48FB1", "#FCE4EC", "#E0F2F1", "#FFEA00", "#FFCCBC", "#E1BEE7", "#A5D6A7", "#84FFFF", "#AEEA00", "#448AFF", "#00B0FF", "#29B6F6", "#FFAB91", "#4A148C", "#2962FF", "#00E676", "#4527A0", "#AA00FF", "#EEFF41", "#E6EE9C", "#E8F5E9", "#F9A825", "#8BC34A", "#D50000", "#FF9800", "#E91E63", "#0277BD", "#F50057", "#ECEFF1", "#424242", "#880E4F", "#C0CA33", "#CE93D8", "#C51162", "#F5F5F5", "#DCE775", "#BA68C8", "#FFC107", "#00E5FF", "#9E9D24", "#E1F5FE", "#EC407A", "#CCFF90", "#304FFE", "#AFB42B", "#03A9F4", "#7E57C2", "#006064", "#00695C", "#D1C4E9", "#3D5AFE", "#FF9E80", "#311B92", "#FFCA28", "#FF1744", "#455A64", "#8C9EFF", "#FF80AB", "#FFEB3B", "#EF9A9A", "#689F38", "#7C4DFF", "#F3E5F5", "#FFFF00", "#004D40", "#3E2723", "#FFCC80", "#FF5252", "#4CAF50", "#2979FF", "#C5E1A5", "#795548", "#FF8A65", "#FF3D00", "#9575CD", "#6200EA", "#FFB300", "#616161", "#BDBDBD", "#D4E157", "#BF360C", "#6A1B9A", "#F4511E", "#B0BEC5", "#00BCD4", "#76FF03", "#F0F4C3", "#E040FB", "#D81B60", "#558B2F", "#512DA8", "#80D8FF", "#00897B", "#B71C1C", "#FFEE58", "#26A69A", "#FF5722", "#FFF9C4", "#1E88E5", "#DCEDC8", "#FFFF8D", "#D84315", "#009688", "#FFA000", "#EF5350", "#D500F9", "#B9F6CA", "#42A5F5", "#EA80FC", "#7CB342", "#66BB6A", "#757575", "#D32F2F", "#1A237E", "#EDE7F6", "#FFF8E1", "#B2DFDB", "#FFA726", "#F9FBE7", "#FFEBEE", "#B388FF", "#3949AB", "#1B5E20", "#EF6C00", "#FF9100", "#F57F17", "#40C4FF", "#64FFDA", "#81C784", "#D7CCC8", "#FFC400", "#AD1457", "#C2185B", "#BBDEFB", "#5E35B1", "#4FC3F7", "#FFF176", "#FFB74D", "#FFAB00", "#C5CAE9", "#B2EBF2", "#0D47A1", "#26C6DA", "#E0F7FA", "#1976D2", "#FF4081", "#E0E0E0", "#80DEEA", "#C6FF00", "#FDD835", "#283593", "#01579B", "#FF7043", "#CFD8DC", "#4DB6AC", "#303F9F", "#F06292", "#90A4AE", "#4E342E", "#0097A7", "#FBE9E7", "#F57C00", "#FFE0B2", "#F44336", "#9CCC65", "#00838F", "#673AB7", "#FBC02D", "#EEEEEE", "#F1F8E9", "#FF6E40", "#536DFE", "#FFECB3", "#388E3C", "#64DD17", "#FFF3E0", "#CDDC39", "#FFD740", "#4DD0E1", "#263238", "#9E9E9E", "#E3F2FD", "#E57373", "#00C853", "#33691E", "#651FFF", "#E64A19", "#C62828", "#FFE57F", "#212121", "#2E7D32", "#7B1FA2", "#00796B", "#FF6D00", "#37474F", "#81D4FA", "#BCAAA4", "#039BE5", "#3F51B5", "#A1887F", "#80CBC4", "#1565C0", "#69F0AE", "#FFE082", "#2196F3", "#FFD600", "#AED581", "#18FFFF", "#8D6E63", "#F8BBD0", "#5D4037", "#546E7A", "#F4FF81", "#64B5F6", "#DD2C00", "#FFD180", "#AB47BC", "#B3E5FC", "#FF8F00", "#C8E6C9", "#607D8B"];
var tongueColors = ["#1565C0", "#FF8A65", "#7986CB", "#009688", "#01579B", "#E53935", "#C8E6C9", "#F5F5F5", "#2196F3", "#00695C", "#F48FB1", "#FFC107", "#1B5E20", "#8BC34A", "#FFCCBC", "#BBDEFB", "#304FFE", "#3949AB", "#C0CA33", "#FFCA28", "#42A5F5", "#E1F5FE", "#9C27B0", "#FFECB3", "#424242", "#F9FBE7", "#6A1B9A", "#B71C1C", "#4A148C", "#0D47A1", "#FFEA00", "#FFF8E1", "#FF7043", "#006064", "#651FFF", "#E57373", "#0277BD", "#DCEDC8", "#80DEEA", "#D4E157", "#FFF9C4", "#AB47BC", "#607D8B", "#D50000", "#263238", "#64B5F6", "#EFEBE9", "#C51162", "#7CB342", "#26A69A", "#D7CCC8", "#FFAB40", "#F57C00", "#FF1744", "#FF6E40", "#00E5FF", "#C5CAE9", "#FFD54F", "#0091EA", "#78909C", "#AFB42B", "#E0E0E0", "#81D4FA", "#1DE9B6", "#EEFF41", "#C6FF00", "#448AFF", "#1976D2", "#1A237E", "#BA68C8", "#388E3C", "#FF6F00", "#5E35B1", "#FF9100", "#4DD0E1", "#E3F2FD", "#FFE082", "#D84315", "#FFF3E0", "#DCE775", "#FCE4EC", "#673AB7", "#82B1FF", "#43A047", "#FFFDE7", "#CDDC39", "#F4FF81", "#7B1FA2", "#A7FFEB", "#FF3D00", "#80CBC4", "#536DFE", "#FFAB91", "#FFA000", "#FFF176", "#DD2C00", "#EC407A", "#FFEE58", "#558B2F", "#64FFDA", "#00B0FF", "#F0F4C3", "#6200EA", "#E1BEE7", "#2979FF", "#B388FF", "#81C784", "#C5E1A5", "#AEEA00", "#E6EE9C", "#FFE0B2", "#00E676", "#2E7D32", "#9FA8DA", "#FFD740", "#B2FF59", "#26C6DA", "#37474F", "#F9A825", "#F1F8E9", "#FF5252", "#BDBDBD", "#CE93D8", "#E8EAF6", "#4527A0", "#1E88E5", "#00897B", "#FFC400", "#FFEB3B", "#90CAF9", "#311B92", "#F3E5F5", "#FFB74D", "#CFD8DC", "#BCAAA4", "#FF5722", "#E040FB", "#5D4037", "#9CCC65", "#C62828", "#5C6BC0", "#4E342E", "#004D40", "#80D8FF", "#18FFFF", "#00BFA5", "#76FF03", "#B0BEC5", "#00BCD4", "#00ACC1", "#FF8A80", "#E64A19", "#66BB6A", "#7E57C2", "#FBE9E7", "#E8F5E9", "#FFCC80", "#FFCDD2", "#8C9EFF", "#039BE5", "#00B8D4", "#EA80FC", "#00796B", "#EF9A9A", "#795548", "#AED581", "#FFEBEE", "#FB8C00", "#EEEEEE", "#FFB300", "#E0F2F1", "#303F9F", "#F8BBD0", "#EDE7F6", "#00C853", "#03A9F4", "#827717", "#4CAF50", "#FDD835", "#0288D1", "#D32F2F", "#546E7A", "#EF6C00", "#33691E", "#2962FF", "#FF8F00", "#3F51B5", "#FF9800", "#B3E5FC", "#689F38", "#69F0AE", "#AA00FF", "#FF4081", "#616161", "#C2185B", "#BF360C", "#B2EBF2", "#F44336", "#B2DFDB", "#AD1457", "#FFFF8D", "#7C4DFF", "#F06292", "#B9F6CA", "#8D6E63", "#512DA8", "#4FC3F7", "#757575", "#E65100", "#0097A7", "#F57F17", "#6D4C41", "#FFE57F", "#EF5350", "#3E2723", "#CCFF90", "#00838F", "#FF6D00", "#880E4F", "#D500F9", "#3D5AFE", "#90A4AE", "#A5D6A7", "#B39DDB", "#F50057", "#212121", "#FFD180", "#F4511E", "#FFAB00", "#64DD17", "#40C4FF", "#FAFAFA", "#9575CD", "#9E9E9E", "#E0F7FA", "#FF9E80", "#8E24AA", "#FFA726", "#FBC02D", "#D81B60", "#84FFFF", "#ECEFF1", "#FFFF00", "#29B6F6", "#9E9D24", "#455A64", "#D1C4E9", "#FFF59D", "#E91E63", "#283593", "#FF80AB", "#A1887F", "#FFD600", "#4DB6AC"];
var earColors = ["#2979FF", "#E91E63", "#424242", "#C5E1A5", "#AA00FF", "#80D8FF", "#9C27B0", "#4DB6AC", "#FFFF00", "#18FFFF", "#AB47BC", "#0288D1", "#7C4DFF", "#81C784", "#455A64", "#6A1B9A", "#FFC107", "#F3E5F5", "#F1F8E9", "#5E35B1", "#29B6F6", "#EEFF41", "#0277BD", "#8C9EFF", "#FF6E40", "#BBDEFB", "#CE93D8", "#7986CB", "#FF7043", "#00E676", "#E64A19", "#311B92", "#E040FB", "#FFFF8D", "#FFE57F", "#AED581", "#00BFA5", "#B9F6CA", "#512DA8", "#FFEBEE", "#FFFDE7", "#F9FBE7", "#283593", "#FFF8E1", "#6200EA", "#FFCA28", "#FFEE58", "#D32F2F", "#FFB74D", "#37474F", "#F4FF81", "#2962FF", "#AFB42B", "#90CAF9", "#FFAB91", "#D4E157", "#26C6DA", "#84FFFF", "#689F38", "#2E7D32", "#7B1FA2", "#FFF59D", "#616161", "#8E24AA", "#E8F5E9", "#BDBDBD", "#00897B", "#C0CA33", "#795548", "#9E9E9E", "#D7CCC8", "#FFF9C4", "#FF9800", "#F57C00", "#1A237E", "#EF6C00", "#0D47A1", "#03A9F4", "#0091EA", "#ECEFF1", "#E0F2F1", "#E1F5FE", "#F06292", "#004D40", "#CFD8DC", "#9E9D24", "#B388FF", "#FF80AB", "#3949AB", "#B71C1C", "#FBC02D", "#82B1FF", "#6D4C41", "#DCEDC8", "#FFE0B2", "#FDD835", "#F57F17", "#3E2723", "#DD2C00", "#039BE5", "#81D4FA", "#AEEA00", "#7E57C2", "#4CAF50", "#00796B", "#EF9A9A", "#D1C4E9", "#009688", "#4527A0", "#B3E5FC", "#80CBC4", "#BA68C8", "#FF8A65", "#FF8A80", "#00838F", "#F44336", "#D81B60", "#E53935", "#FFA000", "#4FC3F7", "#FFD600", "#C5CAE9", "#42A5F5", "#FFB300", "#F50057", "#1976D2", "#A1887F", "#FB8C00", "#F0F4C3", "#FFEA00", "#FF5722", "#FFC400", "#FBE9E7", "#33691E", "#3D5AFE", "#757575", "#1E88E5", "#BCAAA4", "#546E7A", "#2196F3", "#FFAB40", "#EF5350", "#D500F9", "#EC407A", "#C51162", "#BF360C", "#E0F7FA", "#FFD54F", "#00695C", "#1DE9B6", "#5C6BC0", "#E3F2FD", "#A5D6A7", "#B2DFDB", "#FFCC80", "#69F0AE", "#CDDC39", "#E57373", "#212121", "#C8E6C9", "#00ACC1", "#9CCC65", "#8BC34A", "#FFAB00", "#E0E0E0", "#C2185B", "#651FFF", "#FF4081", "#FFD180", "#40C4FF", "#4DD0E1", "#00B8D4", "#8D6E63", "#EDE7F6", "#FF5252", "#90A4AE", "#FFD740", "#F48FB1", "#FF6D00", "#1B5E20", "#CCFF90", "#E65100", "#607D8B", "#FF1744", "#78909C", "#B0BEC5", "#7CB342", "#B2FF59", "#304FFE", "#76FF03", "#448AFF", "#00E5FF", "#536DFE", "#FF9100", "#B2EBF2", "#FF3D00", "#FFCDD2", "#FFF3E0", "#FFE082", "#FFECB3", "#EFEBE9", "#9FA8DA", "#673AB7", "#F5F5F5", "#827717", "#FF8F00", "#00B0FF", "#EEEEEE", "#B39DDB", "#3F51B5", "#26A69A", "#5D4037", "#D50000", "#FFA726", "#E6EE9C", "#66BB6A", "#80DEEA", "#64DD17", "#EA80FC", "#FFCCBC", "#9575CD", "#880E4F", "#FAFAFA", "#FFF176", "#FFEB3B", "#C6FF00", "#1565C0", "#A7FFEB", "#00C853", "#4A148C", "#D84315", "#F4511E", "#00BCD4", "#4E342E", "#388E3C", "#64B5F6", "#FCE4EC", "#E8EAF6", "#0097A7", "#64FFDA", "#263238", "#43A047", "#F8BBD0", "#F9A825", "#558B2F", "#FF6F00", "#DCE775", "#303F9F", "#006064", "#E1BEE7", "#AD1457", "#FF9E80", "#01579B", "#C62828"];
var backgroundGradients = [["#dd5e89", "#f7bb97"], ["#b92b27", "#1565C0"], ["#DA22FF", "#9733EE"], ["#EB3349", "#F45C43"], ["#00c6ff", "#0072ff"], ["#4776E6", "#8E54E9"], ["#c79081", "#dfa579"], ["#f43b47", "#453a94"], ["#FFE000", "#799F0C"], ["#02aab0", "#00cdac"], ["#fccb90", "#d57eeb"], ["#accbee", "#e7f0fd"], ["#6a85b6", "#bac8e0"], ["#4facfe", "#00f2fe"], ["#dcb0ed", "#99c99c"], ["#0250c5", "#d43f8d"], ["#a3bded", "#6991c7"], ["#2b5876", "#4e4376"], ["#00c6fb", "#005bea"], ["#ebbba7", "#cfc7f8"], ["#11998e", "#38ef7d"], ["#ff9966", "#ff5e62"], ["#9be15d", "#00e3ae"], ["#ee9ca7", "#ffdde1"], ["#614385", "#516395"], ["#f3e7e9", "#e3eeff"], ["#868f96", "#596164"], ["#ebc0fd", "#d9ded8"], ["#667eea", "#764ba2"], ["#2193b0", "#6dd5ed"], ["#2af598", "#009efd"], ["#7028e4", "#e5b2ca"], ["#1A2980", "#26D0CE"], ["#0ba360", "#3cba92"], ["#0fd850", "#f9f047"], ["#1e3c72", "#2a5298"], ["#4364F7", "#6FB1FC"], ["#ece9e6", "#ffffff"], ["#eacda3", "#d6ae7b"], ["#a18cd1", "#fbc2eb"], ["#ff0844", "#ffb199"], ["#aa076b", "#61045f"], ["#EDE574", "#E1F5C4"], ["#06beb6", "#48b1bf"], ["#ddd6f3", "#faaca8"], ["#fddb92", "#d1fdff"], ["#ff5858", "#f09819"], ["#36d1dc", "#5b86e5"], ["#42275a", "#734b6d"], ["#00416A", "#E4E5E6"], ["#e9defa", "#fbfcdb"], ["#29323c", "#485563"], ["#ff6e7f", "#bfe9ff"], ["#40e0d0", "#ff0080"], ["#c71d6f", "#d09693"], ["#eb3349", "#f45c43"], ["#feada6", "#f5efef"], ["#000428", "#004e92"], ["#4481eb", "#04befe"], ["#5ee7df", "#b490ca"], ["#ffecd2", "#fcb69f"], ["#8baaaa", "#ae8b9c"], ["#f794a4", "#fdd6bd"], ["#603813", "#b29f94"], ["#9795f0", "#fbc8d4"], ["#fdfbfb", "#ebedee"], ["#48c6ef", "#6f86d6"], ["#2b5876", "#4e4376"], ["#43e97b", "#38f9d7"], ["#fad0c4", "#ffd1ff"], ["#d4fc79", "#96e6a1"], ["#cc2b5e", "#753a88"], ["#bdc3c7", "#2c3e50"], ["#209cff", "#68e0cf"], ["#2193b0", "#6dd5ed"], ["#43cea2", "#185a9d"], ["#fdcbf1", "#e6dee9"], ["#e6e9f0", "#eef1f5"], ["#fbc2eb", "#a6c1ee"], ["#56ab2f", "#a8e063"], ["#cfd9df", "#e2ebf0"], ["#de6262", "#ffb88c"], ["#e6dada", "#274046"], ["#ed6ea0", "#ec8c69"], ["#e8198b", "#c7eafd"], ["#090909", "#202020"], ["#96deda", "#50c9c3"], ["#874da2", "#c43a30"], ["#e52d27", "#b31217"], ["#ddd6f3", "#faaca8"], ["#96fbc4", "#f9f586"], ["#00cdac", "#8ddad5"], ["#ff9a9e", "#fecfef"], ["#ff512f", "#dd2476"], ["#D31027", "#EA384D"], ["#abecd6", "#fbed96"], ["#6e45e2", "#88d3ce"], ["#fa709a", "#fee140"], ["#16A085", "#F4D03F"], ["#a8edea", "#fed6e3"], ["#fdfcfb", "#e2d1c3"], ["#232526", "#414345"], ["#88d3ce", "#6e45e2"], ["#FF8008", "#FFC837"], ["#d558c8", "#24d292"], ["#c1dfc4", "#deecdd"], ["#89f7fe", "#66a6ff"], ["#a8caba", "#5d4157"], ["#d9afd9", "#97d9e1"], ["#2193b0", "#6dd5ed"], ["#02AAB0", "#00CDAC"], ["#16a085", "#f4d03f"], ["#ffe259", "#ffa751"], ["#f83600", "#f9d423"], ["#9890e3", "#b1f4cf"], ["#fff1eb", "#ace0f9"], ["#5f72bd", "#9b23ea"], ["#bdc3c7", "#2c3e50"], ["#434343", "#000000"], ["#373B44", "#4286f4"], ["#74ebd5", "#9face6"], ["#cc208e", "#6713d2"], ["#c471f5", "#fa71cd"], ["#f77062", "#fe5196"], ["#1D976C", "#93F9B9"], ["#6a11cb", "#2575fc"], ["#1488CC", "#2B32B2"], ["#bdc2e8", "#e6dee9"], ["#e0c3fc", "#8ec5fc"], ["#ff9a9e", "#fad0c4"], ["#141e30", "#243b55"], ["#f093fb", "#f5576c"], ["#a7a6cb", "#8989ba"], ["#30cfd0", "#330867"], ["#f6d365", "#fda085"], ["#dad4ec", "#f3e7e9"], ["#ec008c", "#fc6767"], ["#eecda3", "#ef629f"], ["#ee9ca7", "#ffdde1"], ["#a6c0fe", "#f68084"], ["#3e5151", "#3e5151"], ["#FF512F", "#DD2476"], ["#e6b980", "#eacda3"], ["#536976", "#292E49"], ["#93a5cf", "#e4efe9"], ["#cc2b5e", "#753a88"], ["#ffc3a0", "#ffafbd"], ["#F09819", "#EDDE5D"], ["#d299c2", "#fef9d7"], ["#b721ff", "#21d4fd"], ["#ee9ca7", "#ffdde1"], ["#92fe9d", "#00c9ff"], ["#84fab0", "#8fd3f4"], ["#09203f", "#537895"], ["#37ecba", "#72afd3"], ["#348F50", "#56B4D3"], ["#cd9cf2", "#f6f3ff"], ["#ff758c", "#ff7eb3"], ["#a1c4fd", "#c2e9fb"], ["#13547a", "#80d0c7"], ["#16222A", "#3A6073"], ["#ffafbd", "#ffc3a0"], ["#FF512F", "#F09819"], ["#799F0C", "#ACBB78"], ["#b3ffab", "#12fff7"], ["#64b3f4", "#c2e59c"]];
var bodyGradients = [["#1D976C", "#93F9B9"], ["#d4fc79", "#96e6a1"], ["#cc2b5e", "#753a88"], ["#48c6ef", "#6f86d6"], ["#536976", "#292E49"], ["#874da2", "#c43a30"], ["#84fab0", "#8fd3f4"], ["#abecd6", "#fbed96"], ["#ff5858", "#f09819"], ["#09203f", "#537895"], ["#cd9cf2", "#f6f3ff"], ["#FFE000", "#799F0C"], ["#e52d27", "#b31217"], ["#2193b0", "#6dd5ed"], ["#ffecd2", "#fcb69f"], ["#a1c4fd", "#c2e9fb"], ["#868f96", "#596164"], ["#56ab2f", "#a8e063"], ["#e6dada", "#274046"], ["#89f7fe", "#66a6ff"], ["#bdc3c7", "#2c3e50"], ["#F09819", "#EDDE5D"], ["#a3bded", "#6991c7"], ["#fa709a", "#fee140"], ["#13547a", "#80d0c7"], ["#e6b980", "#eacda3"], ["#96deda", "#50c9c3"], ["#348F50", "#56B4D3"], ["#141e30", "#243b55"], ["#ff0844", "#ffb199"], ["#ff6e7f", "#bfe9ff"], ["#00cdac", "#8ddad5"], ["#0250c5", "#d43f8d"], ["#2193b0", "#6dd5ed"], ["#ee9ca7", "#ffdde1"], ["#aa076b", "#61045f"], ["#f6d365", "#fda085"], ["#000428", "#004e92"], ["#ff9a9e", "#fad0c4"], ["#cc2b5e", "#753a88"], ["#eb3349", "#f45c43"], ["#accbee", "#e7f0fd"], ["#d558c8", "#24d292"], ["#ff512f", "#dd2476"], ["#DA22FF", "#9733EE"], ["#b92b27", "#1565C0"], ["#f43b47", "#453a94"], ["#f3e7e9", "#e3eeff"], ["#090909", "#202020"], ["#43e97b", "#38f9d7"], ["#c1dfc4", "#deecdd"], ["#232526", "#414345"], ["#f83600", "#f9d423"], ["#FF8008", "#FFC837"], ["#4481eb", "#04befe"], ["#00c6ff", "#0072ff"], ["#fbc2eb", "#a6c1ee"], ["#6a11cb", "#2575fc"], ["#ec008c", "#fc6767"], ["#43cea2", "#185a9d"], ["#40e0d0", "#ff0080"], ["#ffe259", "#ffa751"], ["#fdcbf1", "#e6dee9"], ["#D31027", "#EA384D"], ["#fff1eb", "#ace0f9"], ["#eacda3", "#d6ae7b"], ["#96fbc4", "#f9f586"], ["#ece9e6", "#ffffff"], ["#c471f5", "#fa71cd"], ["#dad4ec", "#f3e7e9"], ["#ffafbd", "#ffc3a0"], ["#de6262", "#ffb88c"], ["#f794a4", "#fdd6bd"], ["#0fd850", "#f9f047"], ["#9be15d", "#00e3ae"], ["#4364F7", "#6FB1FC"], ["#ffc3a0", "#ffafbd"], ["#373B44", "#4286f4"], ["#06beb6", "#48b1bf"], ["#f093fb", "#f5576c"], ["#fccb90", "#d57eeb"], ["#88d3ce", "#6e45e2"], ["#e8198b", "#c7eafd"], ["#2b5876", "#4e4376"], ["#00c6fb", "#005bea"], ["#feada6", "#f5efef"], ["#16A085", "#F4D03F"], ["#5ee7df", "#b490ca"], ["#c79081", "#dfa579"], ["#FF512F", "#DD2476"], ["#fdfbfb", "#ebedee"], ["#7028e4", "#e5b2ca"], ["#EDE574", "#E1F5C4"], ["#1e3c72", "#2a5298"], ["#02aab0", "#00cdac"], ["#cfd9df", "#e2ebf0"], ["#d9afd9", "#97d9e1"], ["#cc208e", "#6713d2"], ["#ebc0fd", "#d9ded8"], ["#37ecba", "#72afd3"], ["#30cfd0", "#330867"], ["#eecda3", "#ef629f"], ["#2af598", "#009efd"], ["#b3ffab", "#12fff7"], ["#e0c3fc", "#8ec5fc"], ["#3e5151", "#3e5151"], ["#ee9ca7", "#ffdde1"], ["#ddd6f3", "#faaca8"], ["#667eea", "#764ba2"], ["#dcb0ed", "#99c99c"], ["#434343", "#000000"], ["#ff9966", "#ff5e62"], ["#fad0c4", "#ffd1ff"], ["#a8caba", "#5d4157"], ["#1488CC", "#2B32B2"], ["#36d1dc", "#5b86e5"], ["#603813", "#b29f94"], ["#11998e", "#38ef7d"], ["#EB3349", "#F45C43"], ["#42275a", "#734b6d"], ["#93a5cf", "#e4efe9"], ["#ddd6f3", "#faaca8"], ["#209cff", "#68e0cf"], ["#a18cd1", "#fbc2eb"], ["#00416A", "#E4E5E6"], ["#92fe9d", "#00c9ff"], ["#a8edea", "#fed6e3"], ["#bdc3c7", "#2c3e50"], ["#1A2980", "#26D0CE"], ["#e9defa", "#fbfcdb"], ["#64b3f4", "#c2e59c"], ["#02AAB0", "#00CDAC"], ["#74ebd5", "#9face6"], ["#16222A", "#3A6073"], ["#2193b0", "#6dd5ed"], ["#2b5876", "#4e4376"], ["#4776E6", "#8E54E9"], ["#fddb92", "#d1fdff"], ["#16a085", "#f4d03f"], ["#0ba360", "#3cba92"], ["#dd5e89", "#f7bb97"], ["#9890e3", "#b1f4cf"], ["#bdc2e8", "#e6dee9"], ["#d299c2", "#fef9d7"], ["#799F0C", "#ACBB78"], ["#8baaaa", "#ae8b9c"], ["#a7a6cb", "#8989ba"], ["#fdfcfb", "#e2d1c3"], ["#6e45e2", "#88d3ce"], ["#29323c", "#485563"], ["#ff758c", "#ff7eb3"], ["#f77062", "#fe5196"], ["#ee9ca7", "#ffdde1"], ["#614385", "#516395"], ["#e6e9f0", "#eef1f5"], ["#4facfe", "#00f2fe"], ["#5f72bd", "#9b23ea"], ["#6a85b6", "#bac8e0"], ["#c71d6f", "#d09693"], ["#b721ff", "#21d4fd"], ["#ff9a9e", "#fecfef"], ["#FF512F", "#F09819"], ["#9795f0", "#fbc8d4"], ["#ed6ea0", "#ec8c69"], ["#ebbba7", "#cfc7f8"], ["#a6c0fe", "#f68084"]];
var pupilGradients = [["#cc2b5e", "#753a88"], ["#eecda3", "#ef629f"], ["#ee9ca7", "#ffdde1"], ["#9795f0", "#fbc8d4"], ["#F09819", "#EDDE5D"], ["#1A2980", "#26D0CE"], ["#96deda", "#50c9c3"], ["#e6b980", "#eacda3"], ["#c71d6f", "#d09693"], ["#0250c5", "#d43f8d"], ["#fbc2eb", "#a6c1ee"], ["#aa076b", "#61045f"], ["#2af598", "#009efd"], ["#dad4ec", "#f3e7e9"], ["#614385", "#516395"], ["#348F50", "#56B4D3"], ["#b3ffab", "#12fff7"], ["#88d3ce", "#6e45e2"], ["#ff5858", "#f09819"], ["#ebbba7", "#cfc7f8"], ["#84fab0", "#8fd3f4"], ["#f43b47", "#453a94"], ["#fdcbf1", "#e6dee9"], ["#8baaaa", "#ae8b9c"], ["#64b3f4", "#c2e59c"], ["#16A085", "#F4D03F"], ["#92fe9d", "#00c9ff"], ["#ff512f", "#dd2476"], ["#ddd6f3", "#faaca8"], ["#eb3349", "#f45c43"], ["#232526", "#414345"], ["#fa709a", "#fee140"], ["#e8198b", "#c7eafd"], ["#f83600", "#f9d423"], ["#cfd9df", "#e2ebf0"], ["#f794a4", "#fdd6bd"], ["#6a85b6", "#bac8e0"], ["#ebc0fd", "#d9ded8"], ["#f3e7e9", "#e3eeff"], ["#ee9ca7", "#ffdde1"], ["#40e0d0", "#ff0080"], ["#accbee", "#e7f0fd"], ["#ffafbd", "#ffc3a0"], ["#fff1eb", "#ace0f9"], ["#fad0c4", "#ffd1ff"], ["#e0c3fc", "#8ec5fc"], ["#43e97b", "#38f9d7"], ["#4481eb", "#04befe"], ["#1D976C", "#93F9B9"], ["#7028e4", "#e5b2ca"], ["#ddd6f3", "#faaca8"], ["#f093fb", "#f5576c"], ["#9be15d", "#00e3ae"], ["#3e5151", "#3e5151"], ["#D31027", "#EA384D"], ["#DA22FF", "#9733EE"], ["#ff9966", "#ff5e62"], ["#000428", "#004e92"], ["#434343", "#000000"], ["#0ba360", "#3cba92"], ["#11998e", "#38ef7d"], ["#ec008c", "#fc6767"], ["#4facfe", "#00f2fe"], ["#ff9a9e", "#fecfef"], ["#37ecba", "#72afd3"], ["#a6c0fe", "#f68084"], ["#5ee7df", "#b490ca"], ["#FF512F", "#F09819"], ["#EDE574", "#E1F5C4"], ["#799F0C", "#ACBB78"], ["#00c6fb", "#005bea"], ["#fdfbfb", "#ebedee"], ["#ffc3a0", "#ffafbd"], ["#42275a", "#734b6d"], ["#ffecd2", "#fcb69f"], ["#603813", "#b29f94"], ["#FF512F", "#DD2476"], ["#874da2", "#c43a30"], ["#74ebd5", "#9face6"], ["#868f96", "#596164"], ["#00c6ff", "#0072ff"], ["#c1dfc4", "#deecdd"], ["#56ab2f", "#a8e063"], ["#ee9ca7", "#ffdde1"], ["#2193b0", "#6dd5ed"], ["#00cdac", "#8ddad5"], ["#6e45e2", "#88d3ce"], ["#5f72bd", "#9b23ea"], ["#a7a6cb", "#8989ba"], ["#a3bded", "#6991c7"], ["#36d1dc", "#5b86e5"], ["#ffe259", "#ffa751"], ["#dd5e89", "#f7bb97"], ["#c79081", "#dfa579"], ["#02aab0", "#00cdac"], ["#2193b0", "#6dd5ed"], ["#96fbc4", "#f9f586"], ["#d9afd9", "#97d9e1"], ["#dcb0ed", "#99c99c"], ["#29323c", "#485563"], ["#667eea", "#764ba2"], ["#f77062", "#fe5196"], ["#d558c8", "#24d292"], ["#b721ff", "#21d4fd"], ["#a8caba", "#5d4157"], ["#bdc2e8", "#e6dee9"], ["#43cea2", "#185a9d"], ["#fddb92", "#d1fdff"], ["#4364F7", "#6FB1FC"], ["#fccb90", "#d57eeb"], ["#ff9a9e", "#fad0c4"], ["#48c6ef", "#6f86d6"], ["#090909", "#202020"], ["#de6262", "#ffb88c"], ["#EB3349", "#F45C43"], ["#ece9e6", "#ffffff"], ["#16222A", "#3A6073"], ["#a18cd1", "#fbc2eb"], ["#6a11cb", "#2575fc"], ["#e6e9f0", "#eef1f5"], ["#fdfcfb", "#e2d1c3"], ["#1488CC", "#2B32B2"], ["#30cfd0", "#330867"], ["#09203f", "#537895"], ["#cc208e", "#6713d2"], ["#e9defa", "#fbfcdb"], ["#373B44", "#4286f4"], ["#93a5cf", "#e4efe9"], ["#2b5876", "#4e4376"], ["#ff758c", "#ff7eb3"], ["#9890e3", "#b1f4cf"], ["#2b5876", "#4e4376"], ["#bdc3c7", "#2c3e50"], ["#141e30", "#243b55"], ["#eacda3", "#d6ae7b"], ["#06beb6", "#48b1bf"], ["#ff6e7f", "#bfe9ff"], ["#13547a", "#80d0c7"], ["#c471f5", "#fa71cd"], ["#abecd6", "#fbed96"], ["#cd9cf2", "#f6f3ff"], ["#4776E6", "#8E54E9"], ["#cc2b5e", "#753a88"], ["#a8edea", "#fed6e3"], ["#FF8008", "#FFC837"], ["#d4fc79", "#96e6a1"], ["#feada6", "#f5efef"], ["#209cff", "#68e0cf"], ["#0fd850", "#f9f047"], ["#d299c2", "#fef9d7"], ["#b92b27", "#1565C0"], ["#536976", "#292E49"], ["#a1c4fd", "#c2e9fb"], ["#f6d365", "#fda085"], ["#e6dada", "#274046"], ["#ff0844", "#ffb199"], ["#1e3c72", "#2a5298"], ["#ed6ea0", "#ec8c69"], ["#FFE000", "#799F0C"], ["#00416A", "#E4E5E6"], ["#bdc3c7", "#2c3e50"], ["#2193b0", "#6dd5ed"], ["#e52d27", "#b31217"], ["#16a085", "#f4d03f"], ["#02AAB0", "#00CDAC"], ["#89f7fe", "#66a6ff"]];

var gradientDegrees = function gradientDegrees(value) {
  if (value < 0 || value > 360) {
    throw new Error("The value " + value + " is not a valid degree");
  }
  return value;
};
var hexColor = function hexColor(value) {
  if (!isValidHex(value)) {
    throw new Error("The value " + value + " is not a valid Hex Color Code");
  }
  return value;
};
(function (BodyShape) {
  BodyShape[BodyShape["THIN"] = 0] = "THIN";
  BodyShape[BodyShape["FAT"] = 1] = "FAT";
})(exports.BodyShape || (exports.BodyShape = {}));
(function (BodyHeight) {
  BodyHeight[BodyHeight["NORMAL"] = 0] = "NORMAL";
  BodyHeight[BodyHeight["TALL"] = 1] = "TALL";
})(exports.BodyHeight || (exports.BodyHeight = {}));
(function (EyeSide) {
  EyeSide[EyeSide["LEFT"] = 0] = "LEFT";
  EyeSide[EyeSide["RIGHT"] = 1] = "RIGHT";
})(exports.EyeSide || (exports.EyeSide = {}));
(function (EyePosition) {
  EyePosition[EyePosition["TOP"] = 0] = "TOP";
  EyePosition[EyePosition["NORMAL"] = 1] = "NORMAL";
})(exports.EyePosition || (exports.EyePosition = {}));
(function (EyeCount) {
  EyeCount[EyeCount["ONE"] = 0] = "ONE";
  EyeCount[EyeCount["TWO"] = 1] = "TWO";
})(exports.EyeCount || (exports.EyeCount = {}));
(function (Expression) {
  Expression[Expression["HAPPY"] = 0] = "HAPPY";
  Expression[Expression["SAD"] = 1] = "SAD";
  Expression[Expression["MEH"] = 2] = "MEH";
  Expression[Expression["WOH"] = 3] = "WOH";
  Expression[Expression["BLANK"] = 4] = "BLANK";
})(exports.Expression || (exports.Expression = {}));
(function (TongueOrTeeth) {
  TongueOrTeeth[TongueOrTeeth["NONE"] = 0] = "NONE";
  TongueOrTeeth[TongueOrTeeth["TONGUE"] = 1] = "TONGUE";
  TongueOrTeeth[TongueOrTeeth["TEETH"] = 2] = "TEETH";
})(exports.TongueOrTeeth || (exports.TongueOrTeeth = {}));
(function (ToothCount) {
  ToothCount[ToothCount["ONE"] = 0] = "ONE";
  ToothCount[ToothCount["TWO"] = 1] = "TWO";
})(exports.ToothCount || (exports.ToothCount = {}));
(function (ToothSide) {
  ToothSide[ToothSide["LEFT"] = 0] = "LEFT";
  ToothSide[ToothSide["RIGHT"] = 1] = "RIGHT";
})(exports.ToothSide || (exports.ToothSide = {}));
(function (EarSide) {
  EarSide[EarSide["LEFT"] = 0] = "LEFT";
  EarSide[EarSide["RIGHT"] = 1] = "RIGHT";
})(exports.EarSide || (exports.EarSide = {}));
var options = {
  backgroundColor: backgroundGradients,
  backgroundGradientDegree: [0, 45, 60, 90, 105, 135, 180, 210, 245, 270, 300, 330, 360],
  bodyHeight: [exports.BodyHeight.NORMAL, exports.BodyHeight.TALL],
  bodyShape: [exports.BodyShape.THIN, exports.BodyShape.FAT],
  bodyColor: bodyGradients,
  bodyGradientDegree: [0, 45, 60, 90, 105, 135, 180, 210, 245, 270, 300, 330, 360],
  showEar: [true, false],
  earColor: earColors,
  eyeCount: [exports.EyeCount.ONE, exports.EyeCount.TWO],
  eyePosition: [exports.EyePosition.NORMAL, exports.EyePosition.TOP],
  eyeShadeColor: eyeShadeColors,
  eyePupilGradient: [true, false],
  eyePupilColor: pupilGradients,
  mouthColor: mouthColors,
  mouthExpression: [exports.Expression.HAPPY, exports.Expression.SAD, exports.Expression.BLANK, exports.Expression.MEH, exports.Expression.WOH],
  showTongueOrTeeth: [exports.TongueOrTeeth.NONE, exports.TongueOrTeeth.TEETH, exports.TongueOrTeeth.TONGUE],
  tongueColor: tongueColors,
  toothCount: [exports.ToothCount.ONE, exports.ToothCount.TWO]
};
var WormAvatar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(WormAvatar, _React$Component);
  function WormAvatar() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = WormAvatar.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      _this$props$seed = _this$props.seed,
      seed = _this$props$seed === void 0 ? null : _this$props$seed,
      _this$props$isRandom = _this$props.isRandom,
      isRandom = _this$props$isRandom === void 0 ? false : _this$props$isRandom,
      _this$props$radius = _this$props.radius,
      radius = _this$props$radius === void 0 ? 20 : _this$props$radius,
      _this$props$isBackgro = _this$props.isBackgroundGradient,
      isBackgroundGradient = _this$props$isBackgro === void 0 ? true : _this$props$isBackgro,
      backgroundStartColor = _this$props.backgroundStartColor,
      backgroundEndColor = _this$props.backgroundEndColor,
      backgroundGradientDegree = _this$props.backgroundGradientDegree,
      _this$props$addShadow = _this$props.addShadows,
      addShadows = _this$props$addShadow === void 0 ? true : _this$props$addShadow,
      bodyHeight = _this$props.bodyHeight,
      bodyShape = _this$props.bodyShape,
      _this$props$bodyColor = _this$props.bodyColorGradient,
      bodyColorGradient = _this$props$bodyColor === void 0 ? true : _this$props$bodyColor,
      bodyStartColor = _this$props.bodyStartColor,
      bodyEndColor = _this$props.bodyEndColor,
      bodyGradientDegree = _this$props.bodyGradientDegree,
      showEar = _this$props.showEar,
      earColor = _this$props.earColor,
      eyeCount = _this$props.eyeCount,
      eyePosition = _this$props.eyePosition,
      eyeShadeColor = _this$props.eyeShadeColor,
      _this$props$eyePupilG = _this$props.eyePupilGradient,
      eyePupilGradient = _this$props$eyePupilG === void 0 ? true : _this$props$eyePupilG,
      eyePupilStartColor = _this$props.eyePupilStartColor,
      eyePupilEndColor = _this$props.eyePupilEndColor,
      mouthColor = _this$props.mouthColor,
      mouthExpression = _this$props.mouthExpression,
      showTongueOrTeeth = _this$props.showTongueOrTeeth,
      tongueColor = _this$props.tongueColor,
      toothCount = _this$props.toothCount;
    if (isRandom) {
      var ranDomUUID = generateUUID();
      var hashSeed = stringToHashCode(ranDomUUID);
      console.log('Printing hash seed :' + hashSeed);
      //Process Background Color
      var _this$processProps = this.processProps(isBackgroundGradient, backgroundStartColor, hashSeed, backgroundEndColor, backgroundGradientDegree, bodyHeight, bodyShape, bodyColorGradient, bodyStartColor, bodyEndColor, bodyGradientDegree, showEar, earColor, eyeCount, eyePosition, eyeShadeColor, eyePupilGradient, eyePupilStartColor, eyePupilEndColor, mouthColor, mouthExpression, showTongueOrTeeth, tongueColor, toothCount);
      backgroundStartColor = _this$processProps.backgroundStartColor;
      backgroundEndColor = _this$processProps.backgroundEndColor;
      backgroundGradientDegree = _this$processProps.backgroundGradientDegree;
      bodyHeight = _this$processProps.bodyHeight;
      bodyShape = _this$processProps.bodyShape;
      bodyStartColor = _this$processProps.bodyStartColor;
      bodyEndColor = _this$processProps.bodyEndColor;
      bodyGradientDegree = _this$processProps.bodyGradientDegree;
      showEar = _this$processProps.showEar;
      earColor = _this$processProps.earColor;
      eyeCount = _this$processProps.eyeCount;
      eyePosition = _this$processProps.eyePosition;
      eyeShadeColor = _this$processProps.eyeShadeColor;
      eyePupilStartColor = _this$processProps.eyePupilStartColor;
      eyePupilEndColor = _this$processProps.eyePupilEndColor;
      mouthColor = _this$processProps.mouthColor;
      mouthExpression = _this$processProps.mouthExpression;
      showTongueOrTeeth = _this$processProps.showTongueOrTeeth;
      tongueColor = _this$processProps.tongueColor;
      toothCount = _this$processProps.toothCount;
    } else if (seed !== null && seed.trim() !== '') {
      var _hashSeed = stringToHashCode(seed);
      console.log('Printing hash seed :' + _hashSeed);
      //Process Background Color
      var _this$processProps2 = this.processProps(isBackgroundGradient, backgroundStartColor, _hashSeed, backgroundEndColor, backgroundGradientDegree, bodyHeight, bodyShape, bodyColorGradient, bodyStartColor, bodyEndColor, bodyGradientDegree, showEar, earColor, eyeCount, eyePosition, eyeShadeColor, eyePupilGradient, eyePupilStartColor, eyePupilEndColor, mouthColor, mouthExpression, showTongueOrTeeth, tongueColor, toothCount);
      backgroundStartColor = _this$processProps2.backgroundStartColor;
      backgroundEndColor = _this$processProps2.backgroundEndColor;
      backgroundGradientDegree = _this$processProps2.backgroundGradientDegree;
      bodyHeight = _this$processProps2.bodyHeight;
      bodyShape = _this$processProps2.bodyShape;
      bodyStartColor = _this$processProps2.bodyStartColor;
      bodyEndColor = _this$processProps2.bodyEndColor;
      bodyGradientDegree = _this$processProps2.bodyGradientDegree;
      showEar = _this$processProps2.showEar;
      earColor = _this$processProps2.earColor;
      eyeCount = _this$processProps2.eyeCount;
      eyePosition = _this$processProps2.eyePosition;
      eyeShadeColor = _this$processProps2.eyeShadeColor;
      eyePupilStartColor = _this$processProps2.eyePupilStartColor;
      eyePupilEndColor = _this$processProps2.eyePupilEndColor;
      mouthColor = _this$processProps2.mouthColor;
      mouthExpression = _this$processProps2.mouthExpression;
      showTongueOrTeeth = _this$processProps2.showTongueOrTeeth;
      tongueColor = _this$processProps2.tongueColor;
      toothCount = _this$processProps2.toothCount;
    }
    var avatar = {
      width: "200px",
      height: "200px",
      borderRadius: radius + "px",
      overflow: 'hidden',
      opacity: 1,
      background: isBackgroundGradient ? "linear-gradient( " + backgroundGradientDegree + "deg, " + backgroundStartColor + ", " + backgroundEndColor + ")" : backgroundStartColor
    };
    console.log(avatar);
    return React.createElement("div", {
      style: avatar
    }, React.createElement(Body, {
      radius: radius,
      isBackgroundGradient: isBackgroundGradient,
      backgroundStartColor: backgroundStartColor,
      backgroundEndColor: backgroundEndColor,
      backgroundGradientDegree: backgroundGradientDegree,
      addShadows: addShadows,
      bodyHeight: bodyHeight,
      bodyShape: bodyShape,
      bodyColorGradient: bodyColorGradient,
      bodyStartColor: bodyStartColor,
      bodyEndColor: bodyEndColor,
      bodyGradientDegree: bodyGradientDegree,
      showEar: showEar,
      eyeCount: eyeCount,
      eyePosition: eyePosition,
      eyeShadeColor: eyeShadeColor,
      eyePupilGradient: eyePupilGradient,
      eyePupilStartColor: eyePupilStartColor,
      eyePupilEndColor: eyePupilEndColor,
      mouthColor: mouthColor,
      mouthExpression: mouthExpression,
      showTongueOrTeeth: showTongueOrTeeth,
      tongueColor: tongueColor,
      toothCount: toothCount,
      earColor: earColor,
      isRandom: isRandom
    }));
  };
  _proto.processProps = function processProps(isBackgroundGradient, backgroundStartColor, hashSeed, backgroundEndColor, backgroundGradientDegree, bodyHeight, bodyShape, bodyColorGradient, bodyStartColor, bodyEndColor, bodyGradientDegree, showEar, earColor, eyeCount, eyePosition, eyeShadeColor, eyePupilGradient, eyePupilStartColor, eyePupilEndColor, mouthColor, mouthExpression, showTongueOrTeeth, tongueColor, toothCount) {
    var _earColor, _eyeShadeColor, _mouthColor, _tongueColor;
    if (isBackgroundGradient) {
      var _backgroundStartColor;
      if (backgroundStartColor === null || backgroundStartColor !== null && ((_backgroundStartColor = backgroundStartColor) == null ? void 0 : _backgroundStartColor.trim()) === '' || !isValidHex(backgroundStartColor)) {
        var index = hashSeed % options.backgroundColor.length;
        console.log('Background Color index :' + index);
        backgroundStartColor = options.backgroundColor[index][0];
        backgroundEndColor = options.backgroundColor[index][1];
        console.log('Background Color Start :' + backgroundStartColor);
        console.log('Background Color End :' + backgroundEndColor);
      } else {
        backgroundEndColor = backgroundStartColor;
      }
      console.log('backgroundGradientDegree :' + backgroundGradientDegree);
      if (backgroundGradientDegree === null || backgroundGradientDegree === undefined) {
        var _index = hashSeed % options.backgroundGradientDegree.length;
        backgroundGradientDegree = gradientDegrees(options.backgroundGradientDegree[_index]);
      }
      console.log('backgroundGradientDegree :' + backgroundGradientDegree);
    } else {
      var _backgroundStartColor2;
      if (backgroundStartColor === null || backgroundStartColor !== null && ((_backgroundStartColor2 = backgroundStartColor) == null ? void 0 : _backgroundStartColor2.trim()) === '' || !isValidHex(backgroundStartColor)) {
        var _index2 = hashSeed % options.backgroundColor.length;
        backgroundStartColor = options.backgroundColor[_index2][0];
      }
    }
    //Process Body 
    if (bodyHeight === null || bodyHeight === undefined) {
      var _index3 = hashSeed % options.bodyHeight.length;
      bodyHeight = options.bodyHeight[_index3];
    }
    if (bodyShape === null || bodyShape === undefined) {
      var _index4 = hashSeed % options.bodyShape.length;
      bodyShape = options.bodyShape[_index4];
    }
    console.log('bodyColorGradient :' + bodyColorGradient);
    if (bodyColorGradient) {
      var _bodyStartColor;
      if (bodyStartColor === null || bodyStartColor === undefined || bodyStartColor !== null && ((_bodyStartColor = bodyStartColor) == null ? void 0 : _bodyStartColor.trim()) === '' || !isValidHex(bodyStartColor)) {
        var _index5 = hashSeed % options.bodyColor.length;
        bodyStartColor = options.bodyColor[_index5][0];
        bodyEndColor = options.bodyColor[_index5][1];
        console.log('bodyStartColor :' + bodyStartColor);
        console.log('bodyEndColor :' + bodyEndColor);
      } else {
        bodyEndColor = bodyStartColor;
      }
      if (bodyGradientDegree === null || bodyGradientDegree === undefined) {
        var _index6 = hashSeed % options.bodyGradientDegree.length;
        bodyGradientDegree = gradientDegrees(options.bodyGradientDegree[_index6]);
      }
    } else {
      var _bodyStartColor2;
      if (bodyStartColor === null || bodyStartColor !== null && ((_bodyStartColor2 = bodyStartColor) == null ? void 0 : _bodyStartColor2.trim()) === '' || !isValidHex(bodyStartColor)) {
        var _index7 = hashSeed % options.bodyColor.length;
        bodyStartColor = options.bodyColor[_index7][0];
      }
    }
    //Process Ear
    if (showEar === null || showEar === undefined) {
      var _index8 = hashSeed % options.showEar.length;
      showEar = options.showEar[_index8];
    }
    //Ear Color
    if (earColor === null || earColor === undefined || earColor !== null && ((_earColor = earColor) == null ? void 0 : _earColor.trim()) === '' || !isValidHex(earColor)) {
      var _index9 = hashSeed % options.earColor.length;
      earColor = options.earColor[_index9];
    }
    //Eye Count
    if (eyeCount === null || eyeCount === undefined) {
      var _index10 = hashSeed % options.eyeCount.length;
      eyeCount = options.eyeCount[_index10];
    }
    //Eye Position
    if (eyePosition === null || eyePosition === undefined) {
      var _index11 = hashSeed % options.eyePosition.length;
      eyePosition = options.eyePosition[_index11];
    }
    //Eye Shade
    if (eyeShadeColor === null || eyeShadeColor === undefined || eyeShadeColor !== null && ((_eyeShadeColor = eyeShadeColor) == null ? void 0 : _eyeShadeColor.trim()) === '' || !isValidHex(eyeShadeColor)) {
      var _index12 = hashSeed % options.eyeShadeColor.length;
      eyeShadeColor = options.eyeShadeColor[_index12];
    }
    //Eye Pupil Color
    console.log('eyePupilGradient ' + eyePupilGradient);
    if (eyePupilGradient) {
      var _eyePupilStartColor;
      if (eyePupilStartColor === null || eyePupilStartColor === undefined || eyePupilStartColor !== null && ((_eyePupilStartColor = eyePupilStartColor) == null ? void 0 : _eyePupilStartColor.trim()) === '' || !isValidHex(eyePupilStartColor)) {
        var _index13 = hashSeed % options.eyePupilColor.length;
        eyePupilStartColor = options.backgroundColor[_index13][0];
        eyePupilEndColor = options.backgroundColor[_index13][1];
      } else {
        eyePupilEndColor = eyePupilStartColor;
      }
    } else {
      var _eyePupilStartColor2;
      if (eyePupilStartColor === null || eyePupilStartColor !== null && ((_eyePupilStartColor2 = eyePupilStartColor) == null ? void 0 : _eyePupilStartColor2.trim()) === '' || !isValidHex(eyePupilStartColor)) {
        var _index14 = hashSeed % options.eyePupilColor.length;
        eyePupilStartColor = options.eyePupilColor[_index14][0];
      }
    }
    //Mouth Color
    if (mouthColor === null || mouthColor === undefined || mouthColor !== null && ((_mouthColor = mouthColor) == null ? void 0 : _mouthColor.trim()) === '' || !isValidHex(mouthColor)) {
      var _index15 = hashSeed % options.mouthColor.length;
      mouthColor = options.eyeShadeColor[_index15];
    }
    //Expression
    if (mouthExpression === null || mouthExpression === undefined) {
      var _index16 = hashSeed % options.mouthExpression.length;
      mouthExpression = options.mouthExpression[_index16];
    }
    //Teeth Or Tongue
    if (showTongueOrTeeth === null || showTongueOrTeeth === undefined) {
      var _index17 = hashSeed % options.showTongueOrTeeth.length;
      showTongueOrTeeth = options.showTongueOrTeeth[_index17];
    }
    //Tongue Color
    if (tongueColor === null || tongueColor === undefined || tongueColor !== null && ((_tongueColor = tongueColor) == null ? void 0 : _tongueColor.trim()) === '' || !isValidHex(tongueColor)) {
      var _index18 = hashSeed % options.tongueColor.length;
      tongueColor = options.tongueColor[_index18];
    }
    //Tongue Count
    if (toothCount === null || toothCount === undefined) {
      var _index19 = hashSeed % options.earColor.length;
      toothCount = options.toothCount[_index19];
    }
    return {
      backgroundStartColor: backgroundStartColor,
      backgroundEndColor: backgroundEndColor,
      backgroundGradientDegree: backgroundGradientDegree,
      bodyHeight: bodyHeight,
      bodyShape: bodyShape,
      bodyStartColor: bodyStartColor,
      bodyEndColor: bodyEndColor,
      bodyGradientDegree: bodyGradientDegree,
      showEar: showEar,
      earColor: earColor,
      eyeCount: eyeCount,
      eyePosition: eyePosition,
      eyeShadeColor: eyeShadeColor,
      eyePupilStartColor: eyePupilStartColor,
      eyePupilEndColor: eyePupilEndColor,
      mouthColor: mouthColor,
      mouthExpression: mouthExpression,
      showTongueOrTeeth: showTongueOrTeeth,
      tongueColor: tongueColor,
      toothCount: toothCount
    };
  };
  return WormAvatar;
}(React.Component);

exports.default = WormAvatar;
exports.gradientDegrees = gradientDegrees;
exports.hexColor = hexColor;
//# sourceMappingURL=worm-avatar-react.cjs.development.js.map
