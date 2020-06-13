/* eslint-disable */
import React from 'react';
import {useDrag } from 'react-dnd';
import ItemType from './ItemType';
function ImgBox(props) {
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemType.InputBox, ...props },
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;
	return (
			<div
				className='input'
				ref={drag}
				style={{
					position:'absolute',
					top:props.info.top,
					left:props.info.left,
					// opacity,
					background:'transparent',
                    cursor: 'move',
				}}
			>
				<textarea placeholder='请输入描述...' style={{background:'transparent',border:'1px solid yellow',outline:'none'}}/>
			</div>
	);
};
export default ImgBox;
