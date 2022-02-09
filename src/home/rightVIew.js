import React, { useEffect, useState } from 'react'
import {toggleFull} from 'be-full';
import { useNavigate } from 'react-router-dom';

const RightView = (props) => {
    const [list, setList] = useState(props.list)
    const [isShowSimulate, setIsShowSimulate] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        console.log('组件加载完毕了，在这里可以做组件自身内容')
    })

    //当 props发生改变是，更新内容
    useEffect(() => {
        //更新list
        setList(props.list)
    }, [props.list])


    return (
        <div
            style={{
                position: 'absolute',
                background: "#000000BB",
                top: 60,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                height: "100%",
                width: 360,
                userSelect: 'none',
                pointerEvents: 'auto',
            }}>
            <div
                style={{
                    height: "90%",
                    overflowY: 'auto'
                }}>
                <div style={{
                    marginRight: 24,
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        display: 'flex',
                        width: 300,
                        height: 40,
                        marginTop: 20,
                        alignItems: 'center',
                        backgroundImage: 'linear-gradient(to right, rgba(28, 83, 112, 1), rgba(28, 83, 112, 0))'
                    }}>
                        <div style={{ fontSize: 24, fontWeight: 'bold', color: '#FFF', marginLeft: 16 }}>设备控制</div>
                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: 20
                    }}>
                        <div
                            onClick={() => {
                                let newList = list.map(item => {
                                    item.status = 0
                                    return item
                                })
                                setList(newList)
                                props.updateListCallback && props.updateListCallback(newList)
                            }}
                            style={{
                                cursor: "pointer",
                                width: 114,
                                height: 40,
                                marginRight: 16,
                                backgroundImage: 'linear-gradient(to bottom, #A7FAFF, #0EBBBE)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <div style={{ fontSize: 20, color: '#0B1017' }}>一键下架</div>
                        </div>
                        <div
                            onClick={() => {
                                let newList = list.map(item => {
                                    item.status = 1
                                    return item
                                })
                                setList(newList)
                                props.updateListCallback && props.updateListCallback(newList)
                            }}
                            style={{
                                width: 114,
                                height: 40,
                                cursor: "pointer",
                                backgroundImage: 'linear-gradient(to bottom, #A7FAFF, #0EBBBE)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <div style={{ fontSize: 20, color: '#0B1017' }}>一键上架</div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        marginTop: 20,
                        marginBottom: 6
                    }}>
                        <div style={{
                            display: 'flex',
                            marginRight: 40,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <div style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>机器名称</div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: 160,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>运行开关</div>
                        </div>
                    </div>
                    {
                        list && list.length > 0 &&
                        list.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        height: 44,
                                        marginRight: 40,
                                    }}>
                                        {
                                            item.status > 1 &&
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                marginRight: 9,
                                            }}>
                                                {
                                                    item.status > 1 &&
                                                    <img
                                                        alt=''
                                                        src={`../icon_${item.status === 0?'warning':'error'}.png`}
                                                        style={{
                                                            width: 22,
                                                            height: 22
                                                        }} />
                                                }
                                                {
                                                    item.status === 2 &&
                                                    <div
                                                        onClick={() => {
                                                            const opItem = list[index]
                                                            opItem.status = 1
                                                            let newList = list.map(item => item) //更新一次才能自动更新list
                                                            setList(newList)
                                                            props.updateListCallback && props.updateListCallback(newList)
                                                        }}
                                                        style={{
                                                            cursor: "pointer",
                                                            color: '#FF4646',
                                                            fontSize: 18,
                                                            height: 28,
                                                            marginLeft: 6,
                                                            marginBottom: -4,
                                                            borderBottom: '1px solid #FF4646'
                                                        }}></div>
                                                }
                                            </div>
                                        }
                                        <div 
                                            style={{
                                                color: item.status === 2 ? '#FF4646' : item.status === 3 ? '#FFC600' : '#FFF', 
                                                fontSize: 18,
                                                marginRight: 10 
                                        }}>{item.title}</div>
                                    </div>

                                    <div
                                        onClick={() => {
                                            const opItem = list[index]
                                            if (opItem.status === 2) return //等待上映无法操作

                                            opItem.status = opItem.status === 1 ? 0 : 1
                                            let newList = list.map(item => item) //更新一次才能自动更新list
                                            setList(newList)
                                            props.updateListCallback && props.updateListCallback(newList)
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            border: '2px solid #526283',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            width: 160,
                                            height: 32,
                                        }}>
                                        <div style={{
                                            display: 'flex',
                                            marginTop: -2,
                                            marginLeft: -2,
                                            border: item.status === 1 ? '2px solid #54E9FC' : '',
                                            borderRadius: '4px 0 0 4px',
                                            width: 80,
                                            height: 32,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <div style={{color: item.status === 1 ? '#54E9FC' : '#8394B6', fontSize: 18}}>上架</div>
                                        </div>
                                        <div style={{
                                            marginLeft: -2,
                                            marginTop: -2,
                                            marginRight: -2,
                                            display: 'flex',
                                            border: item.status === 1 ? '' : '2px solid #54E9FC',
                                            borderRadius: '0 4px 4px 0',
                                            width: 80,
                                            height: 32,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{color: item.status === 1 ? '#8394B6' : '#54E9FC', fontSize: 18}}>下架</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div style={{
                        display: 'flex',
                        width: 300,
                        height: 40,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundImage: 'linear-gradient(to right, rgba(28, 83, 112, 1), rgba(28, 83, 112, 0))'
                    }}>
                        <div style={{ fontSize: 24, fontWeight: 'bold', color: '#FFF', marginLeft: 16 }}>模拟测试</div>
                        <img
                            alt=''
                            onClick={() => {
                                setIsShowSimulate(!isShowSimulate)
                            }}
                            src={`../arrow_${isShowSimulate ? 'up' : 'down'}.png`}
                            style={{
                                cursor: "pointer",
                                width: 24,
                                height: 24,
                                marginRight: 10
                            }} />
                    </div>
                    {
                        isShowSimulate &&
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <div
                                onClick={() => {
                                    props.enterDetailCallback && props.enterDetailCallback()
                                }}
                                style={{
                                    cursor: "pointer",
                                    width: 250,
                                    height: 40,
                                    marginRight: 25,
                                    backgroundImage: 'linear-gradient(to bottom, #A7FAFF, #0EBBBE)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <div style={{ fontSize: 20, color: '#0B1017' }}>进入详情页</div>
                            </div>
                            <div
                                onClick={() => {
                                    navigate('/other/mine')
                                    // navigate('other/mine') //如果不加'/'.则是默认在当前页后面拼接这个路径
                                }}
                                style={{
                                    cursor: "pointer",
                                    width: 250,
                                    height: 40,
                                    marginTop: 10,
                                    marginRight: 25,
                                    backgroundImage: 'linear-gradient(to bottom, #A7FAFF, #0EBBBE)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <div style={{ fontSize: 20, color: '#0B1017' }}>跳转到个人页</div>
                            </div>
                            <div
                                onClick={() => {
                                    toggleFull()
                                }}
                                style={{
                                    cursor: "pointer",
                                    width: 250,
                                    height: 40,
                                    marginRight: 25,
                                    marginTop: 10,
                                    backgroundImage: 'linear-gradient(to bottom, #A7FAFF, #0EBBBE)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <div style={{ fontSize: 20, color: '#0B1017' }}>切换全屏</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RightView