import React from 'react'

export default class LeftView extends React.Component {

    state = {
        list: this.props.list
    }

    //组件加载完毕时
    componentDidMount() {
        console.log('组件加载完毕了，在这里可以做组件自身内容')
    }

    //组件更新时
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.list === this.props.list) return
        
        this.setState({
            list: this.props.list
        })
    }

    //组件将要卸载时
    componentWillUnmount() {
        console.log('组件即将被释放')
    }

    render() {
        const {list} = this.props
        return (
            <div style={{
                position: 'absolute',
                backgroundColor: "#000000BB",
                top: 60,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                height: "100%",
                minWidth: 370,
                userSelect: 'none',
                pointerEvents: 'auto'
            }}>
                <div
                    style={{
                        marginTop: 20,
                        marginLeft: 24,
                        marginRight: 30,
                        display: 'flex',
                        height: "90%",
                        overflowY: 'auto'
                    }}>
                    <div style={{
                        display: 'flex',
                        minHeight: 940,
                        alignItems: 'flex-end'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                list && list.length > 0 &&
                                list.map((item, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            style={{
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'flex-end', 
                                                marginBottom: 14, 
                                                height: 80, 
                                        }}>
                                            <div style={{ fontSize: 24, color: '#A7FAFF' }}>{item.title}</div>
                                            <div style={{ fontSize: 17, color: '#FFF', marginTop: 13 , marginBottom: 8}}>{item.text}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 180, alignItems: 'flex-end' }}>
                            {
                                list && list.length > 0 &&
                                list.map((item, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            style={{ 
                                                marginLeft: 4, 
                                                display: 'flex', 
                                                alignItems: 'flex-end', 
                                                marginBottom: 13, 
                                                height: 80
                                            }}>
                                            <div style={{ color: '#50E7F9', fontSize: 64, fontFamily: 'LcdD' }}>{item.number}</div>
                                            <div style={{ color: '#FFF', fontSize: 17, marginLeft: 6, marginBottom: 8}}>{item.unit}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}