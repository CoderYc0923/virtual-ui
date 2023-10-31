export const copyCode = (copyCtx: string) => {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", copyCtx);
  input.setAttribute("readonly", "readonly");
  input.select();
  input.setSelectionRange(0, 9999);
  if (document.execCommand("copy")) {
    alert("复制成功");
    //   BlMessageFn.success!({
    //     message: '成功复制',
    //     duration: 2000
    //   })
  }
  document.body.removeChild(input);
};

export const gotoTop = () => {
  const topOffset =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (topOffset > 0) {
    window.requestAnimationFrame(gotoTop);
    window.scrollTo(0, topOffset - topOffset / 6);
  }
};

export const getRandom = (max: number, min?: any) => {
  if (isNaN(min)) min = 0;
  var num = Math.floor(Math.random() * (max - min));
  return num + min;
};

const getColor = () => {
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += getRandom(16).toString(16);
  }
  return color;
};

export const createImdElement = () => {
  var w = getRandom(300, 30);
  var h = getRandom(400, 40);
  var bg = getColor();
  var str = `width:${w}px;height:${h}px;background-color:${bg}`;
  return str
};
