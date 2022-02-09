import React from 'react'
import HomeView from './home/homeVIew';
import DetailView from './detail/detailView';
import MineView from './other/mine';
import HomeDetailView from './home/homeDetailVIew';
//Browser与浏览器互动，在网址栏的地方显示路径，MemoryRouter不显示路径
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        // <MemoryRouter>
        <BrowserRouter>
            <Routes>
                {/* 默认进入页面 */}
                <Route path="/" element={<HomeView />} /> 
                <Route path="/main" >
                    <Route path="home" element={<HomeView />} />
                    <Route path="detail" element={<HomeDetailView />} />
                </Route>

                <Route path="/detail" element={<DetailView />} />

                <Route path="/other" >
                    <Route path="mine" element={<MineView />} />
                </Route>

                {/* 可以匹配全路径，找不到的时候就走着一个，可以用于匹配404 */}
                {/* <Route path='*' element={NotFound}></Route> */}
            </Routes>
        </BrowserRouter>
        // </MemoryRouter>
    )
}

export default App;
