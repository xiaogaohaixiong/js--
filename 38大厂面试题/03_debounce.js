function debounce(fn, delay, immediate = false){
    let timer = null
    let isInvoke = false

    const _debounce = function(...args){
        if(timer) clearTimeout(timer)
         // 判断是否需要立即执行
    if (immediate && !isInvoke) {
        fn.apply(this, args)
        isInvoke = true
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          fn.apply(this, args)
          isInvoke = false
        }, delay)
      }
    }
    _debounce.cancel = function() {
        if(timer) clearTimeout(timer)
        timer = null
        isInvoke = false
    }
    return _debounce
}