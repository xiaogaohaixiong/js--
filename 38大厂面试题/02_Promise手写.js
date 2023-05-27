let PEDDING = 'pedding';
let FULFILLED = 'fulfilled';
let REJECTED = 'rejected';
class MyPromise{
    /**
     * 创建一个Promise
     * @parms { Function } executor 任务执行器，立即执行
    */
    constructor(executor){
        this._status = PEDDING;
        this._value = undefined;
        executor(this._resolve.bind(this), this._reject.bind(this))
    }

    /**
     * @param {string} newStatus 新状态
     * @param {any} newValue 相关数据
     */
    _ChangeStatus(newStatus, newValue){
        if(this._status !== PEDDING){
            return
        }
        this._status = newStatus;
        this._value = newValue
    }

    /**
     * 标记当前任务完成
     * @param {any} data 任务完成的相关数据
     */
    _resolve(data){
        // 改变状态和数据
        this._ChangeStatus(FULFILLED,data)
    }

    /**
     * 标记当前任务失败
     * @param {any} reason 任务完成的相关数据
     */
    _reject(reason){
          // 改变状态和数据
          this._ChangeStatus(REJECTED,reason)
    }
}

new MyPromise((resolve, reject) => {
    resolve(1)
    reject(123)
})