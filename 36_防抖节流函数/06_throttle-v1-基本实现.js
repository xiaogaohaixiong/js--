function throttle(fn, interval, options) {
  // 1.记录上一次的开始时间
  let lastTime = 0
  let timer = null;
  
  // 2.事件触发时, 真正执行的函数
  const _throttle = function() {
    clearTimeout(timer)

    // 2.1.获取当前事件触发时的时间
    const nowTime = new Date().getTime()

    // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      // 2.3.真正触发函数
      fn()
      // 2.4.保留上次触发的时间
      lastTime = nowTime
    }
  }

  return _throttle
}
// const throttle = (fn, delay = 2000) => {
// 	let timer = null
// 	let startTime = new Date().getTime()
// 	return function() {
// 		const context = this
// 		let currentTime = new Date().getTime()
//     console.log(currentTime, startTime);
// 		clearTimeout(timer)
// 		if (currentTime - startTime >= delay) {
// 			fn.apply(context, arguments)
// 			startTime = currentTime
// 		} else {
// 			//让方法在脱离事件后也能执行一次
// 			timer = setTimeout(() => {
// 				fn.apply(context, arguments)
// 			}, delay)
// 		}
// 	}
// }
