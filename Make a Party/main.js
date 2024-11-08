var $f1 = $("#flowers1 path"),
  $f2 = $("#flowers2 path"),
  $sk1 = $("#sk1"),
  $sk2 = $("#sk2"),
  $glitch = $("#glitch"),
  $gear = $("#gear"),
  $tv = $("#tv path, #tv circle, #tv ellipse"),
  $radio = $("#radio path, #radio circle"),
  isFF = !!window.sidebar;

TweenMax.set(
  $(
    "#flowers1, #radio, #burst, #magnolia, #flowers2, #starfish, #berries1, #berries2, #berries3, #skulls, #tv, #glitch, #shadow, #lights"
  ),
  {
    visibility: "visible",
  }
);

TweenMax.set($gear, {
  transformOrigin: "50% 50%",
});

TweenMax.set($sk1, {
  x: -20,
});

TweenMax.set($sk2, {
  x: 18,
});

if (!isFF) {
  TweenMax.to($("#reel1"), 4, {
    rotation: 360,
    repeat: -1,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
  });
  TweenMax.to($("#reel2, #knob"), 4, {
    rotation: 360,
    repeat: -1,
    transformOrigin: "50% 50%",
    ease: Linear.easeNone,
  });
  TweenMax.to($("#needle1, #needle2"), 1, {
    rotation: 60,
    repeat: -1,
    transformOrigin: "50% 100%",
    ease: Elastic.easeIn,
  });
}
TweenMax.fromTo(
  $glitch,
  1,
  {
    drawSVG: "-20 0",
  },
  {
    drawSVG: "100% 110%",
    repeat: -1,
    ease: Circ.easeOut,
  }
);
TweenMax.fromTo(
  $sk1,
  0.5,
  {
    y: 10,
    rotation: 0,
  },
  {
    transformOrigin: "0% 100%",
    y: 15,
    rotation: 20,
    repeat: -1,
    delay: 0.3,
    yoyo: true,
    ease: Back.easeOut,
  }
);
TweenMax.fromTo(
  $sk2,
  0.5,
  {
    y: 10,
    rotation: 0,
  },
  {
    transformOrigin: "100% 100%",
    y: 20,
    rotation: 15,
    repeat: -1,
    yoyo: true,
    ease: Back.easeOut,
  }
);

// the first scene
function sceneOne() {
  var tl = new TimelineMax();

  tl.add("start");
  tl.staggerFromTo(
    $f1,
    0.3,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: Back.easeOut,
    },
    0.05,
    "start"
  );
  tl.fromTo(
    $("#shadow"),
    18,
    {
      scale: 0,
      opacity: 0,
      transformOrigin: "0% 50%",
    },
    {
      scale: 1,
      opacity: 0.5,
      ease: Power4.easeOut,
    },
    "start"
  );
  tl.staggerFromTo(
    $radio,
    0.7,
    {
      scale: 0,
      rotation: 100,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    0.05,
    "start+=1"
  );
  tl.fromTo(
    $("#b1 path"),
    10,
    {
      drawSVG: "0 0",
    },
    {
      drawSVG: true,
      ease: Circ.easeOut,
    },
    "start+=3"
  );
  tl.fromTo(
    $("#b2 path"),
    10,
    {
      drawSVG: "0 0",
    },
    {
      drawSVG: true,
      ease: Circ.easeOut,
    },
    "start+=3.5"
  );
  tl.fromTo(
    $("#magnolia"),
    0.7,
    {
      scale: 0,
      transformOrigin: "50% 100%",
    },
    {
      scale: 1,
      ease: Back.easeOut,
    },
    "start+=4"
  );
  tl.staggerFromTo(
    $f2,
    0.7,
    {
      scale: 0,
      transformOrigin: "50% 50%",
      rotation: -30,
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    0.01,
    "start+=3"
  );
  tl.staggerFromTo(
    $("#lights path"),
    0.75,
    {
      scale: 0,
      opacity: 0,
      transformOrigin: "50% 50%",
      rotation: -30,
    },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: Back.easeOut,
    },
    0.15,
    "start"
  );
  tl.staggerFromTo(
    $("#berries1 path"),
    1,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: Elastic.easeOut,
    },
    0.05,
    "start+=6"
  );
  tl.staggerFromTo(
    $("#berries2 path"),
    1,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: Elastic.easeOut,
    },
    0.05,
    "start+=7"
  );
  tl.staggerFromTo(
    $("#berries3 path"),
    1,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: Elastic.easeOut,
    },
    0.05,
    "start+=8"
  );
  tl.fromTo(
    $("#starfish"),
    0.7,
    {
      scale: 0,
      rotation: -100,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    "start+=4"
  );
  tl.staggerFromTo(
    $tv,
    0.7,
    {
      scale: 0,
      rotation: 100,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    0.05,
    "start+=5"
  );
  tl.fromTo(
    $glitch,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    "start+=6"
  );
  tl.fromTo(
    $sk1,
    1.25,
    {
      scale: 0,
      rotation: 500,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    "start+=6"
  );
  tl.fromTo(
    $sk2,
    1.25,
    {
      scale: 0,
      rotation: -500,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      rotation: 0,
      ease: Back.easeOut,
    },
    "start+=6.5"
  );

  return tl;
}

var master = new TimelineMax({ paused: true });
master.add(sceneOne(), "scene1");

//master.seek("scene1");

Draggable.create($gear, {
  type: "rotation",
  bounds: {
    minRotation: 0,
    maxRotation: 360,
  },
  onDrag: function () {
    master.progress(this.rotation / 360);
  },
});

$(document).on("click", "#button", function (evt) {
  master.progress(0);
  master.restart();
});
