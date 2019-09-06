import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import IOU from './IOU';
class Print extends React.Component {
    render() {
        const { dispatch, activeCardReceipt = {}, inactiveCardReceipt = {}, iou = {}, accountReceipt = {} } = this.props;
        return (<div>
				<Button onClick={() => {
            dispatch({
                type: "print/printIOU"
            });
        }}>测试</Button>
				<div>
					<div style={{ width: '830px', border: '1px solid black' }}>
						<IOU iou={{ endCoachSchoolName: "", usedTimeSubFeeTime: "", consume: { realFee: 100 } }}/>
					</div>
				</div>
			</div>);
    }
}
Print = connect((state) => {
    return Object.assign({}, state.print);
})(Print);
export default Print;
