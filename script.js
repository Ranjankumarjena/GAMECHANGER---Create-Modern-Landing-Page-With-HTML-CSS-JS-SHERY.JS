Shery.imageEffect("#back", {
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.83,"range":[-1,1]},"zindex":{"value":-9996999,
    "range":[-9999999,9999999]},"aspect":{"value":2.165336370166731},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},
    "shapeScale":{"value":{"x":1,"y":1}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
    "shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},
    "scrollLerp":{"value":0.07},"gooey":{"value":true},
    "infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
    "noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.3,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0.01,"range":[0,0.1]},
    "noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
    gooey:true
});
function updateHeadingSizes() {
    const elems = document.querySelectorAll("#elem");
    elems.forEach((elem) => {
        const h1s = elem.querySelectorAll("h1");
        h1s.forEach((h1) => {
            // Set responsive font size
            const newSize = window.innerWidth < 768 ? '100px' : '200px'; // Adjust based on your needs
            h1.style.fontSize = newSize;
        });
    });
}

// Initial size update on load
updateHeadingSizes();
var elems = document.querySelectorAll("#elem");
elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animate = false;
    var main = document.querySelector("#main");
    main.addEventListener("click",function(){
       if(!animate) {
        animate = true;
        gsap.to(h1s[index], {
            top:"-=100%",
            ease:Expo.easeInOut,
            duraction:1,
            onComplete: function(){
                gsap.set(this. _targets[0], {top:"100%"})
                animate = false;
            },

           });
            index === h1s.length-1 ? index = 0 :  index++;
           gsap.to(h1s[index], {
            top:"-=100%",
            ease:Expo.easeInOut,
            duraction:1,
           })
       }
       
    }) 
})

window.addEventListener('resize', updateHeadingSizes);
