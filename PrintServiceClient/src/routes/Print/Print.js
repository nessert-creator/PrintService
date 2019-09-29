import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Ywdlsqbiao from './Ywdlsqbiao';
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
						<Ywdlsqbiao ywdlsqbiao={{ "id": 2, customername: "中信", name: "娃哈哈", certificatetype: "身份证", idnumber: 123456789, contactnumber: "999999999", name2: "真果粒", certificatetype2: "身份证", idnumber2: "65498", contactnumber2: "000000", name1: "爽歪歪", certificatetype1: "身份证", idnumber1: "987654321", contactnumber1: "88888888" }}/>
					</div>
				</div>
			</div>);
    }
}
Print = connect((state) => {
    return Object.assign({}, state.print);
})(Print);
export default Print;
