// Create a timeline
// ====================
var tl = new TimelineMax();
//
// ====================

// variable
// ====================
var _figure0 = document.getElementById("figure-sl-0"),
  _figure1 = document.getElementById("figure-sl-1"),
  _figure2 = document.getElementById("figure-sl-2");

var _coins0 = document.getElementById("coins-sl-0"),
  _coins1 = document.getElementById("coins-sl-1"),
  _coins2 = document.getElementById("coins-sl-2"),
  _coins3 = document.getElementById("coins-sl-3"),
  _coins4 = document.getElementById("coins-sl-4"),
  _coins5 = document.getElementById("coins-sl-5"),
  _coins6 = document.getElementById("coins-sl-6"),
  _coins7 = document.getElementById("coins-sl-7"),
  _coins8 = document.getElementById("coins-sl-8"),
  _coinsGroup9 = document.getElementById("coins-sl-g-0"),
  _coinsGroup10 = document.getElementById("coins-sl-g-1"),
  _coinsGroup11 = document.getElementById("coins-sl-g-2"),
  _coinsGroup12 = document.getElementById("coins-sl-g-3"),
  _coinsGroup13 = document.getElementById("coins-sl-g-4"),
  _coinsGroup14 = document.getElementById("coins-sl-g-5");

var _star0 = document.getElementById("star-sl-0"),
  _star1 = document.getElementById("star-sl-1"),
  _star2 = document.getElementById("star-sl-2");

var _lineBlue0 = document.getElementById("line-sl-blue-0"),
  _lineBlue1 = document.getElementById("line-sl-blue-1"),
  _lineBlue2 = document.getElementById("line-sl-blue-2"),
  _lineBlue3 = document.getElementById("line-sl-blue-3");

var _arrow0 = document.getElementById("line-arrow-sl-0"),
  _arrow1 = document.getElementById("line-arrow-sl-1");

var _textArr0 = document.querySelectorAll(".text-sl-f"),
  _textArr1 = document.querySelectorAll(".text-sl-s");

//
// ====================


// Main opt
// ====================
tl.set("#solution-svg", {
  visibility: "visible"
});
tl.set(
  [_figure0, _figure1, _figure2], {
    transformOrigin: 'center'
  }
);
tl.set(
  [
    _coins0, _coins1, _coins2, _coins3, _coins4, _coins5, _coins6, _coins7, _coins8,
    _coinsGroup9, _coinsGroup10, _coinsGroup11, _coinsGroup12, _coinsGroup13, _coinsGroup14,
    _star0, _star1, _star2,
    _lineBlue0, _lineBlue1, _lineBlue2, _lineBlue3,
    _arrow0, _arrow1,
    _textArr0, _textArr1
  ], {
    opacity: 0
  }
);
//
// ================


// Animate
// ====================
tl
  .to(_figure0, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure0, 0.3, {scale: 1})

  .to(_coins0, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins0, 0.075, {scale: 1})

  .to(_coins1, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins1, 0.075, {scale: 1})

  .to(_star0, 0.125, {opacity: 1, scale: 1.075, ease: Power1.easeOut})
  .to(_star0, 0.075, {scale: 1})

  .fromTo(_lineBlue0, 0.45, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .staggerTo(_textArr0, 0.5, {opacity: 1}, 0.035)

  .to(_arrow0, 0.2, {opacity:1}, "-=0.035")
  .fromTo(_lineBlue1, 0.45, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"}, "-=0.2")
  .from(_arrow0, 0.45, {y: -33}, "-=0.45")

  .to(_figure1, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure1, 0.3, {scale: 1})

  .to(_coins2, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins2, 0.075, {scale: 1})

  .to(_coins3, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins3, 0.075, {scale: 1})

  .to(_coins4, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins4, 0.075, {scale: 1})

  .to(_star1, 0.125, {opacity: 1, scale: 1.075, ease: Power1.easeOut})
  .to(_star1, 0.075, {scale: 1})

  .fromTo(_lineBlue2, 0.45, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"})

  .staggerTo(_textArr1, 0.5, {opacity: 1}, 0.05)

  .to(_arrow1, 0.2, {opacity:1}, "-=0.035")
  .fromTo(_lineBlue3, 0.45, {opacity:1, drawSVG:"0%"}, {opacity:1, drawSVG:"100%"}, "-=0.2")
  .from(_arrow1, 0.45, {y: -33}, "-=0.45")

  .to(_figure2, 0.35, {opacity:1, scale: 1.15, ease: Power1.easeOut})
  .to(_figure2, 0.3, {scale: 1})

  .to(_coins5, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins5, 0.075, {scale: 1})

  .to(_coins6, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins6, 0.075, {scale: 1})

  .to(_coins7, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins7, 0.075, {scale: 1})

  .to(_coins8, 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to(_coins8, 0.075, {scale: 1})

  .to([_coinsGroup9, _coinsGroup10, _coinsGroup11, _coinsGroup12, _coinsGroup13, _coinsGroup14], 0.125, {opacity: 1, scale: 1.05, ease: Power1.easeOut})
  .to([_coinsGroup9, _coinsGroup10, _coinsGroup11, _coinsGroup12, _coinsGroup13, _coinsGroup14], 0.075, {scale: 1})

  .to(_star2, 0.125, {opacity: 1, scale: 1.075, ease: Power1.easeOut}, "-=0.125")
  .to(_star2, 0.075, {scale: 1}, "-=0.125");

//
// ====================