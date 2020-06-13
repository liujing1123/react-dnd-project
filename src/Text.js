/* eslint-disable */
import React from 'react';
import { useDrag } from 'react-dnd';
import ItemType from './ItemType';
function Text(props) {
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemType.Input},
		collect: monitor => ({//collect函数从监视器中检索每个组件的拖放状态
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;
	return (
			<div
				ref={drag}
				style={{
					width: '100px',
					height: '30px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
                    opacity,
                    cursor: 'move',
					float: 'left',
					border:'1px solid #ccc',
				}}
			>
				添加文字
			</div>
	);
};
export default Text;
