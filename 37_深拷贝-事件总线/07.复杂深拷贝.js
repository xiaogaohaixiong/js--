const _completeDeepClone = (target, map = new WeakMap()) => {
    // 基本数据类型，直接返回
    if (typeof target !== 'object' || target === null) return target
    // 函数 正则 日期 ES6新对象,执行构造题，返回新的对象
    const constructor = target.constructor
    if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
    // map标记每一个出现过的属性，避免循环引用
    if (map.get(target)) return map.get(target)
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = _completeDeepClone(target[prop], map)
      }
    }
    return cloneTarget
  }


  let obj = {
    a:'dddd',
    b:123,
    c:[1,2,3],
    d:{e:'123'},
    f:function foo (){ console.log(124)},
    g:undefined,
    h:null,
    j: new Date(),
    
  }
  obj.info = obj

  console.log(_completeDeepClone(obj));
// 辅助函数
/**
 * 将类似于数组的对象转换成数组对象。
 */

// function toArray (list, start) {
//   start = start || 0
//   let i = list.length - start
  
//   const ret = new Array(i)
//   while (i--) {
//     ret[i] = list[i + start]
//   }
//   return ret
// }

// //Vue规定引入的插件必须是对象或者函数。
// function Use (plugin) {

//   //首先检查Vue对象当前的_installedPlugins属性是否存在，
//   //如果存在，那就去判断已经注册的组件中是否包含即将要注册的组件。
//   //如果是，那么直接结束，不用继续往下执行。附带说一下。在条件不满足的情况下，
//   //Vue.use返回的不是null，而是this。注意我们是在Vue.use方法中使用this，因此this指向Vue。
//   //返回this可以使用链式调用。
  
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if (installedPlugins.indexOf(plugin) > -1) {
//     return this
//   }

//   // 每一个函数默认都有一个arguments参数，我们可以以数组下标的方式(arguments[0])，访问其中的参数,但是arguments并不是一个数组。但是接下来我们希望通过apply的方式将Vue.use的参数转嫁给plugin函数plugin.install或者plugin函数，因此必须将arguments转换成真正的数组，因为apply接收数组。
//   const args = toArray(arguments, 1)
//   console.log(args);
//   args.unshift(this)
//   if (typeof plugin.install === 'function') {
//     plugin.install.apply(plugin, args)
//   } else if (typeof plugin === 'function') {
//     plugin.apply(null, args)
//   }
  
//   // 注册完成的以后，需要将已经注册的插件备份到installedPlugins当中。
//   // 下一次重复注册的时候就直接返回。
//   installedPlugins.push(plugin)
//   return this
// }
