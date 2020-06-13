/* eslint-disable */
import { useDrop } from 'react-dnd'
import React from 'react';
import ItemType from './ItemType';
function DelCon(props) {
    const [{isOver},drop] = useDrop({
      accept:[ItemType.ImgBox,ItemType.InputBox],//这里要写数组形式
      drop(item,monitor){
        if(item.type==='ImgBox'){
            props.delImg(
                Object.assign({},item.info)
            )
        }
        if(item.type==='InputBox'){
          props.delInput(
              Object.assign({},item.info)
          )
      }
      },
      collect : monitor =>({
        isOver: monitor.isOver(),
      })
    })
    return <div ref={drop} style={{width:'300px',height:'200px',backgroundColor:isOver?'red':'black'}}>
</div>
  }
  export default DelCon