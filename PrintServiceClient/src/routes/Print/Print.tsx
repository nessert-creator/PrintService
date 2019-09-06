import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import moment from 'moment';
import ActiveCardReceipt from './ActiveCardReceipt';
import InactiveCardReceipt from './InactiveCardReceipt';
import IOU from './IOU';
import AccountReceipt from './AccountReceipt';

class Print extends React.Component {
	render() {
		const { dispatch, activeCardReceipt = {}, inactiveCardReceipt = {}, iou = {}, accountReceipt={} } = this.props;

		return (
			<div>
				<Button onClick={() => {}}>测试</Button>
				<div>
					<div style={{ width: '220px', border: '1px solid black' }}>
						<ActiveCardReceipt activeCardReceipt={activeCardReceipt} />
					</div>
					<div style={{ width: '220px', border: '1px solid black' }}>
						<InactiveCardReceipt inactiveCardReceipt={inactiveCardReceipt} />
					</div>
					<div style={{ width: '830px', border: '1px solid black' }}>
						<IOU iou={iou} />
					</div>
					<div style={{ width: '220px', border: '1px solid black' }}>
						<AccountReceipt accountReceipt={accountReceipt} />
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
