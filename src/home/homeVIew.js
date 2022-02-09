import React, { useEffect, useState } from 'react';
import {toggleFull} from 'be-full';
import LeftView from './leftView';
import RightView from './rightVIew';

function HomeView() {
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([{
        id: 0,
        title: '斗罗大陆',
        text: '累计观看:',
        number: 70,
        unit: '亿次',
        status: 1, //0下架 1热播中 2等待上映
    }, {
        id: 1,
        title: '斗罗大陆',
        text: '当日观看:',
        number: 1.1,
        unit: '亿次',
        status: 1,
    }, {
        id: 1,
        title: '斗破苍穹',
        text: '累计观看:',
        number: 20,
        unit: '亿次',
        status: 1,
    }, {
        id: 1,
        title: '斗破苍穹',
        text: '当日观看:',
        number: 2,
        unit: '亿次',
        status: 1,
    }, {
        id: 2,
        title: '眷思量',
        text: '累计观看:',
        number: 30,
        unit: '亿次',
        status: 1,
    }, {
        id: 3,
        title: '迪迦奥特曼',
        text: '累计观看:',
        number: 2.1,
        unit: '亿次',
        status: 1,
    }, {
        id: 3,
        title: '迪迦奥特曼',
        text: '粉丝数:',
        number: 10.3,
        unit: '万位',
        status: 1,
    }, {
        id: 4,
        title: '海绵宝宝',
        text: '本周观看:',
        number: 9.5,
        unit: '万次',
        status: 1,
    }, {
        id: 5,
        title: '铁甲小宝',
        text: '历史观看:',
        number: 1.1,
        unit: '万次',
        status: 1,
    }, {
        id:6,
        title: '小猪佩奇',
        text: '本月观看',
        number: 10,
        unit: '万次',
        status: 1,
    }, {
        id: 6,
        title: '天线宝宝',
        text: '当日码垛总量:',
        number: 10,
        unit: '次',
        status: 1,
    }]);

    //这个相当于 componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, []) //这个集合中，如果放了某一个状态变量，当改变时会走这个useEffect

    //进入详情页
    const enterDetail = () => {
        
    }

    return (<div>{
        isLoading ? (
            <div 
                style={{ 
                    position: 'absolute', 
                    width: '100vw', 
                    height: '100vh', 
                    display: `${isLoading ? 'flex' : 'none'}`, 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: '#000000'
            }}>
                <img alt='' src="../currency_loading.gif" style={{ width: '50%' }} />
            </div>
        ) : (
            <div style={{userSelect: 'none', pointerEvents: 'none'}}>
                
                <LeftView list={list} />

                <RightView 
                    list={list} 
                    updateListCallback={(list) => {
                        setList(list)
                    }} 
                    enterDetailCallback={enterDetail}
                    />

                <div 
                    onDoubleClick={() => {
                        toggleFull()
                    }}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        backgroundImage: 'linear-gradient(to bottom, #000000DD, #000000BB)',
                        height: 60,
                        top: 0,
                        left: 0,
                        pointerEvents: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div style={{color: '#FFF'}}>奇葩电影控制台</div>
                </div>
            </div>)
        }
    </div>)
}

export default HomeView