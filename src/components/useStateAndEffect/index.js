import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import SelectKeys from './select'

export default function UseStateAndEffect() {
    const [log1, setLog1] = useState([{
        cont: '初始化',
        id: 1,
    }])
    const [log2, setLog2] = useState([{
        cont: '初始化',
        id: 1,
    }])
    const [key, setKey] = useState('cases')
    // useEffect在render之后才会执行
    useEffect(() => {
        // console.log('useEffect执行了，key发生变化了')
        setLog1(log1.concat([{
            cont: 'useEffect执行了，key发生变化了',
            id: log1.length + 1,
        }]))
        // useEffect返回的函数，只在重新渲染后才会执行，如果第二个参数数组为空，那么只在组件unmount后才会执行
        return () => {
            console.log('重新渲染之后执行上一次渲染时返回的函数')
            // 不要在返回函数里面调用set设置方法，会出错
            // const arr = [...log2, {
            //     cont: '重新渲染之后执行上一次渲染时返回的函数',
            //     id: log2.length + 1,
            // }]
            // 在返回的函数里设置值，调用方法有时成功有时失败
            // setLog2(arr)
        }
    }, [key])
    // 只有设定的key变化了，useEffect才会执行，如果数组为空，就表示只在最开始的时候执行一次
    return (
        <div>
            <SelectKeys onChange={(e) => setKey(e.target.value)} />
            <br />
            {key}
            <Card type="inner" title="log1">
                {log1.map((item, index) => <p key={item.id}>{item.cont + item.id}</p>)}
            </Card>
            <Card type="inner" title="log2">
                {log2.map((item, index) => <p key={item.id}>{item.cont + item.id}</p>)}
            </Card>
        </div>
    )
}