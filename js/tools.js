// 匀速运动方法
function constant(obj, target, speed) {
  // 1.清除定时器
  clearInterval(obj.timer);
  // 2.判断方向
  var dir;
  if(obj.offsetLeft>target) {
    dir = -speed;
  }else if(obj.offsetLeft<target){
    dir = speed;
  }else{
    dir = 0;
  }
  obj.timer = setInterval(function() {
    obj.style.left = obj.offsetLeft + dir + 'px';
    if(Math.abs(obj.offsetLeft - target)<Math.abs(dir)) {
      clearInterval(obj.timer);
      obj.style.left = target + 'px';
      // console.log(obj.offsetLeft, target);
    }else if(Math.abs(obj.offsetLeft - target)===Math.abs(dir)){
      clearInterval(obj.timer);
      obj.style.left = obj.offsetLeft + 'px';
    }
    
  },20);
}


//  获取元素属性方法
function getStyleAttr(obj, attr) {
  if(obj.currentStyle) {  //IE/opera
    return obj.currentStyle[attr];
  }else{
    return window.getComputedStyle(obj, null)[attr];
  }
}