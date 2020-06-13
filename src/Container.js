/* eslint-disable */
import React, { Component } from 'react'
import Box from './Box'
import ImgBoxCon from './ImgBoxCon'
import DelCon from './DelCon'
import Text from './Text'
export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dragIteminfo: [{
                typeid: 1,
                width: 20,
                height: 20,
                name: 'item1',
                defaultUrl: './images/p1-1.png',
                realUrl: './images/p1-2.png'
            },
            {
                typeid: 2,
                width: 20,
                height: 20,
                name: 'item2',
                defaultUrl: './images/p2-1.png',
                realUrl: './images/p2-2.png'
            },
            {
                typeid: 3,
                width: 20,
                height: 20,
                name: 'item3',
                defaultUrl: './images/p3-1.png',
                realUrl: './images/p3-2.png'
            }],
            imgList: [],
            isSmallSize: true,
            showItemType: 'all',
            textList: [],
            initialSzie:20,
            imgUrl:1
        }
    }

    componentDidMount(){
        let bodyWidth = document.body.clientWidth
        this.setState({
            bodyWidth:bodyWidth
        })
    }

    getRightWidth=()=>{
        let rightSideWidth = this.refs.right.clientWidth
        return rightSideWidth
    }

    adddropedImg = (val) => {
        console.log('adddropedImg',val,document.body.scrollHeight,document.body.clientWidth)
        let initialSzie =this.state.initialSzie
        let state = { ...this.state }
        // 图片非全屏显示时
        let left = val.x - document.body.clientWidth * 0.2 - val.width / 2
        let top = val.y - val.height / 2
        // let fullScreenLeft = (val.x - document.body.clientWidth * 0.2 - val.width / 2) / document.body.clientWidth * 0.8
        let fullScreenLeft = (val.x - document.body.clientWidth * 0.2 - val.width / 2) / document.body.clientWidth * 0.8
        let fullScreenTop = (val.y - val.height / 2) / document.body.clientHeight
        
        // 图片是插入的img
        // let percentLeft =(((val.x - val.LeftPosition- document.body.clientWidth * 0.2)/val.imgWidth)*100).toFixed(2) + '%'
        // let percentTop =(((val.y-val.topPosition)/val.imgHeight)*100).toFixed(2) + '%'

        state.imgList.push(
            Object.assign({}, val, {
                width: this.state.isSmallSize ? initialSzie * 1 : initialSzie * 2,
                height: this.state.isSmallSize ? initialSzie * 1 : initialSzie * 2,
                id: new Date().getTime(),
                // left:percentLeft,
                // top:percentTop,
                left,
                top,
                fullScreenLeft: (fullScreenLeft * 100).toFixed(2) + '%',
                fullScreenTop: (fullScreenTop * 100).toFixed(2) + '%',
            })
        )
        this.setState({
            ...state
        })
        
    }

    showItemType = (typeid) => {
        this.setState({
            showItemType: typeid
        })
    }

    updatedropedImg = (val) => {
        this.getRightWidth()
        console.log('updatedropedImg',val)
        let state = {
            ...this.state
        }
        state.imgList.forEach(item => {
            if (val.id == item.id) {
                // item.left =(((val.x - val.LeftPosition- document.body.clientWidth * 0.2)/val.imgWidth)*100).toFixed(2) + '%'
                // item.top =(((val.y-val.topPosition)/val.imgHeight)*100).toFixed(2) + '%'
                // 图片是插入的img
                // item.left =(((val.x - val.LeftPosition)/val.imgWidth)*100).toFixed(2) + '%'
                // item.top =(((val.y-val.topPosition)/val.imgHeight)*100).toFixed(2) + '%'

                item.left = val.x - document.body.clientWidth*0.2- val.width / 2
                item.top = val.y - val.height / 2

                // 左侧隐藏右侧图片全屏显示时使用这个
                let fullScreenLeft = (val.x - val.width / 2) / document.body.clientWidth
                let fullScreenTop = (val.y - val.height / 2) / document.body.clientHeight
                item.fullScreenLeft = (fullScreenLeft * 100).toFixed(2) + '%',
                item.fullScreenTop = (fullScreenTop * 100).toFixed(2) + '%',
                this.setState({
                    ...state
                })
            }
        })
    }

    delImg = (val) => {
        let state = {
            ...this.state
        }
        state.imgList.forEach((item, index) => {
            if (val.id === item.id) {
                state.imgList.splice(index, 1)
                this.setState({
                    ...state,
                })
            }
        })
    }

    itemCount = (typeid) => {
        const dropList = []
        this.state.imgList.forEach(item => {
            if (item.typeid == typeid) {
                dropList.push(item)
            }
        })
        return dropList.length
    }

    resize = () => {
        if (!this.state.imgList) {
            return
        }
        this.setState({
            isSmallSize: !this.state.isSmallSize
        }, () => {
            let state = {
                ...this.state
            }
            state.imgList.forEach((item, index) => {
                if (this.state.isSmallSize) {
                    item.width = this.state.initialSzie,
                    item.height = this.state.initialSzie
                } else {
                    item.width =this.state.initialSzie*2,
                    item.height = this.state.initialSzie*2
                }
                this.setState({
                    ...state
                })
            })
        })
    }

    adddropedInput = (val) => {
        let state = {
            ...this.state
        }
        let left = val.x - 300 - 70
        let top = val.y - 20
        state.textList.push(
            Object.assign({}, val, {
                id: this.state.textList.length,//new Date().getTime()
                left,
                top
            })
        )
        this.setState({
            ...state
        })
    }

    updatedropedInput = (val) => {
        let state = {
            ...this.state
        }
        state.textList.forEach(item => {
            if (val.id === item.id) {
                item.left = val.x - 300 - 70,
                    item.top = val.y - 20
                this.setState({
                    ...state
                })
            }
        })
    }

    delInput = (val) => {
        let state = {
            ...this.state
        }
        state.textList.forEach((item, index) => {
            if (val.id === item.id) {
                state.textList.splice(index, 1)
                this.setState({
                    ...state,
                })
            }
        })
    }

    render() {
        const filterList = []
        this.state.imgList.forEach(item => {
            if (this.state.showItemType == 'all' || this.state.showItemType == item.typeid) {
                filterList.push(item)
            }
        })
        return (
            <div className='container' style={{ display: 'flex', width: '100vh', height: '100vh', flex: 1 }} >
                <div className='left' style={{ width: '20%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: 200, display:'flex', flexWrap: 'wrap' }}>
                        {
                            this.state.dragIteminfo.map((item, index) => {
                                var num = this.itemCount(item.typeid)
                                return <div key={item.typeid} style={{ width: 100, height: 100, border: '1px solid #ccc' }}>
                                    <Box key={index} info={item} num={num} />
                                </div>
                            })
                        }
                    </div>
                    <div style={{ width: '100%', height: 100, display: 'flex', flexWrap: 'wrap' }}>
                        {
                            this.state.dragIteminfo.map((item, index) => {
                                return <button onClick={this.showItemType.bind(this, item.typeid)} key={item.typeid} style={{ width: 100, height: 30, cursor: 'pointer', outline: 'none' }}>
                                    只显示{index+1}
                                </button>
                            })
                        }
                        <div onClick={this.showItemType.bind(this, 'all')} style={{ width: 100, height: 30, border: '1px solid #ccc', cursor: 'pointer' }}> 全部显示</div>
                        <Text></Text>
                        <div onClick={()=>{this.setState({imgUrl:1})}} style={{width: 100, height: 30, border: '1px solid #ccc',cursor:'pointer'}}>橙色</div>
                        <div onClick={()=>{this.setState({imgUrl:2})}} style={{width: 100, height: 30, border: '1px solid #ccc',cursor:'pointer'}}>蓝色</div>
                        <div onClick={this.resize} style={{ width: 80, height: 30,lineHeight:'30px',textAlign:'center', border: '1px solid #ccc', cursor: 'pointer' }}>更改尺寸</div>
                    </div>
                    <DelCon delImg={this.delImg} delInput={this.delInput} />
                </div>
                {/* <div style={{width:10}} onClick={this.showLeft}>显示</div> */}
                <div className='right' ref='right' style={{ flex: 1, height: '100%' }}>
                    <ImgBoxCon
                        getRightWidth={this.getRightWidth}
                        adddropedImg={this.adddropedImg}
                        imgList={filterList}
                        imgUrl={this.state.imgUrl}
                        updatedropedImg={this.updatedropedImg}
                        textList={this.state.textList}
                        adddropedInput={this.adddropedInput}
                        updatedropedInput={this.updatedropedInput}>
                    </ImgBoxCon>
                </div>
            </div>
        )
    }
}