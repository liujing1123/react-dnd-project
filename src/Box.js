/* eslint-disable */
import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import ItemType from './ItemType';
function Box(props) {
	const [{ isDragging }, drag, preview] = useDrag({
		item: { type: ItemType.Box, ...props },
		collect: monitor => ({//collect函数从监视器中检索每个组件的拖放状态
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;
	return (
		<i>
			<DragPreviewImage connect={preview} src={require(props.info.defaultUrl + '')} />
			{/* 设置拖动区域大小 */}
			<div
				ref={drag}
				style={{
					width: '100px',
					height: '100px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
                    opacity,
                    cursor: 'move',
                    float: 'left',
				}}
			>
				<img src={require(props.info.defaultUrl + '')} alt="" style={{ width: '50px' }} />
				{props.num}个
			</div>
		</i>
	);
};
export default Box;
