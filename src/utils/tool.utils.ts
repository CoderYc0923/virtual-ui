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
