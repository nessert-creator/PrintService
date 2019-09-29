import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import moment from 'moment';
import ActiveCardReceipt from './ActiveCardReceipt';
import InactiveCardReceipt from './InactiveCardReceipt';
import IOU from './IOU';
import AccountReceipt from './AccountReceipt';
import Jiangzhangdan from './Jiangzhangdan';

class Print extends React.Component {
	render() {
		const { dispatch, activeCardReceipt = {}, inactiveCardReceipt = {}, iou = {}, accountReceipt={} } = this.props;

		return (
			<div>
				<Button onClick={() => {
					dispatch({
						type:"print/printIOU"
					})
				}}>测试</Button>
				<div>
					<div style={{ width: '830px', border: '1px solid black' }}>
						<Jiangzhangdan jiangzhangdan={{"id":3,"year":2019,"month":9,"day":20,"chupiaorenqc":"zmy","chupiaorenzh":654321,"chupiaorenkhyh":"中信银行","shoukuanrenqc":"袁辉","shoukuanrenzh":0,"shoukuanrenkhyh":"中信银行","renminbi":1000000.00,"piaojuzhonglei":"发票","piaojuzhangshu":5,"piaojuhaoma":52461}} />
					</div>
				</div>
			</div>
		);
	}
}

Print = connect((state) => {
	return {
		...state.print
	};
})(Print);
export default Print;
