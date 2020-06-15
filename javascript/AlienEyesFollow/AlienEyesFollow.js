document.querySelector('body').addEventListener('mousemove', eyeMovement);
document.querySelector('body').addEventListener('touchmove', eyeMovement);

function eyeMovement() {
  var eye = document.querySelector('.eye');
  let x = eye.getBoundingClientRect().left;
  let y = eye.getBoundingClientRect().top;
  let radian = Math.atan2(event.pageX - x, event.pageY - y);
  console.log(x);
  let rot = radian * (180 / Math.PI) * -1;
  eye.style.transform = 'rotate(' + rot + 'deg)';
}
