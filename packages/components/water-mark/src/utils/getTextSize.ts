/**
 * @description 根据文字和字号，计算该文字在网页上的宽度和高度
 * @param text 文字内容
 * @param fontSize 字号
 * @returns 文字的宽高
 */

type rType = {
  width: number;
  height: number;
};

export const getTextSize: (
  text: string,
  fontSize: number
) => rType = (text, fontSize) => {
  const result: rType = {
    width: 0,
    height: 0
  }

  const span = document.createElement('span')
  result.width = span.offsetWidth;
  result.height = span.offsetWidth

  span.style.visibility = 'hidden'
  span.style.fontSize = fontSize + 'px'
  document.body.appendChild(span)

  span.textContent ? (span.textContent = text) : (span.innerText = text)

  result.width = span.offsetWidth - result.width
  result.height = span.offsetHeight - result.height

  span.parentNode?.removeChild(span)
  return result
};
