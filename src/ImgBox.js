/* eslint-disable */
import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import ItemType from './ItemType';
function ImgBox(props) {
	const [{ isDragging }, drag, preview] = useDrag({
		item: { type: ItemType.ImgBox, ...props },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;
	const rightWidth = props.getRightWidth()
	console.log('props.getRightWidth()',props.getRightWidth(),document.body.clientWidth)
	return (
		<i>
			{/* <DragPreviewImage style={{width:30,height:30}} connect={preview} src={require(props.info.defaultUrl + '')} /> */}
			{/* 设置拖动区域大小 */}
			<div
				className='img-gg'
				ref={drag}
				style={{
					width: props.info.width,
					height:props.info.height,
					borderRadius:10,
					position:'absolute',
					top:rightWidth<document.body.clientWidth?props.info.top:props.info.fullScreenTop,
					left:rightWidth<document.body.clientWidth?props.info.left:props.info.fullScreenLeft,
					// opacity,
					// left:props.info.left,
					// top:props.info.top,
					background:isDragging?'#fff':'',
                    cursor: 'move',
				}}
			>
				<img src={require(props.imgUrl==1?props.info.defaultUrl:props.info.realUrl)} alt="" style={{opacity, width: props.info.width,height:props.info.height}} />
			</div>
		</i>
	);
};
export default ImgBox;
