import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import moment from 'moment';
import ActiveCardReceipt from './ActiveCardReceipt';
import InactiveCardReceipt from './InactiveCardReceipt';
import IOU from './IOU';
import AccountReceipt from './AccountReceipt';
import Powerbook from './Powerbook';
import Registration from './Registration';
class Print extends React.Component {
	render() {
		const { dispatch, activeCardReceipt = {}, inactiveCardReceipt = {}, iou = {}, accountReceipt={} } = this.props;

		return (
			<div>
				<Button onClick={() => {
					dispatch({
						type:"print/printRegistration"
					})
				}}>测试</Button>
				<div>
					<div style={{ width: '830px', border: '1px solid black' }}>
						<Registration registration={{year_1:"2019",
						month_1:"10",
						day_1:"24",
						name_1:"张三",
						name_pinyin:"zhang",
						gender_1:"男",
						nationality_1:"中国",
						phoneNumber:"11273521657",
						type_1:"身份证",
						consume:{realFee:100}}} />
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
