const DetailView = () => {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100',
            userSelect: 'none',
            pointerEvents: 'auto',
        }}>
            <div style={{color: '#000', fontSize: 48, marginTop: 20}}>我是通用详情页的标题</div>
            <div style={{color: '#000', fontSize: 24, marginTop: 100}}>我是通用详情页测试内容</div>
    </div>
    )
}

export default DetailView