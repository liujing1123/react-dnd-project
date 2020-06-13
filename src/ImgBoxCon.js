/* eslint-disable */
import { useDrop } from 'react-dnd'
import React from 'react';
import ItemType from './ItemType';
import ImgBox from './ImgBox'
import InputBox from './InputBox'
function ImgBoxCon(props) {
    const [{isOver},drop] = useDrop({
      accept:[ItemType.Box,ItemType.ImgBox,ItemType.InputBox,ItemType.Input],
      drop(item,monitor){
        if(item.type==='Box'){
            props.adddropedImg(
                Object.assign({},item.info,monitor.getClientOffset())
            )
        }
        if(item.type==='ImgBox'){
            props.updatedropedImg(
                Object.assign({},item.info,monitor.getClientOffset())
            )
        }
        if(item.type==='Input'){
            props.adddropedInput(
                Object.assign({},item.info,monitor.getClientOffset())
            )
        }
        if(item.type==='InputBox'){
            props.updatedropedInput(
                Object.assign({},item.info,monitor.getClientOffset())
            )
        }
      },
      collect : monitor =>({
        isOver: monitor.isOver(),
      }),
    })
    return (
    <div 
    ref={drop}
    id='imgBoxCon'
    style={{
    width:'100%',
    height:'100%',
    position:'relative',
    backgroundColor:isOver?'#ccc':'#000',
}}>
    {props.imgList?props.imgList.map((item,index)=>{return <ImgBox key={index} info={item} getRightWidth={props.getRightWidth} imgUrl={props.imgUrl}></ImgBox>}):null}
    {props.textList?props.textList.map((item,index)=>{return <InputBox key={index} info={item}></InputBox>}):null}
</div>)
  }
  export default ImgBoxCon