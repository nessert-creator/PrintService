import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { message } from 'antd';
import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil';
import { PrintReceipt, PrintIOU, PrintJiangzhangdan, PrintShouquanshu} from './../utils/print';
import ActiveCardReceipt from './../routes/Print/ActiveCardReceipt';
import InactiveCardReceipt from './../routes/Print/InactiveCardReceipt';
import IOU from './../routes/Print/IOU';
import AccountReceipt from './../routes/Print/AccountReceipt';
import Jiangzhangdan from './../routes/Print/Jiangzhangdan';
import Shouquanshu from './../routes/Print/Shouquanshu';

function print(reactElement, printFunction) {
	let div = document.createElement('div');
	document.body.appendChild(div);

	ReactDOM.render(reactElement, div);
	printFunction(div.innerHTML);

	const unmountResult = ReactDOM.unmountComponentAtNode(div);
	if (unmountResult && div.parentNode) {
		div.parentNode.removeChild(div);
	}
}

export default {
	namespace: 'print',
	state: {
		activeCardReceipt: {},
		inactiveCardReceipt: { consume: {} },
		iou: { endCoachSchoolName: '青才驾校', usedTimeSubFeeTime: 1, consume: { realFee: 200 } }
	},
	reducers: {
		setState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	},
	effects: {
		*printActiveCardReceipt({ payload }, { call, put }) {
			const { success, result } = yield call(
				...createApiAuthParam({
					method: new api.PrintApi().appPrintPrintStartReceipt,
					payload: payload
				})
			);
			if (success) {
				print(<ActiveCardReceipt activeCardReceipt={result} />, PrintReceipt);
			}
		},
		*printInactiveCardReceipt({ payload }, { call, put }) {
			const { success, result } = yield call(
				...createApiAuthParam({
					method: new api.PrintApi().appPrintPrintEndReceipt,
					payload: payload
				})
			);
			if (success) {
				print(<InactiveCardReceipt inactiveCardReceipt={result} />, PrintReceipt);
			}
		},
		*printIOU({ payload }, { call, put }) {
			// const { success, result } = yield call(
			// 	...createApiAuthParam({
			// 		method: new api.PrintApi().appPrintPrintIOU,
			// 		payload: payload
			// 	})
			// );
			// if (success) {
			let result = { endCoachSchoolName: '青才驾校', usedTimeSubFeeTime: 1, consume: { realFee: 200 } };
			print(<IOU iou={result} />, PrintIOU);
			// }
		},
		*printJiangzhangdan({ payload }, { call, put }) {
			print(<Jiangzhangdan jiangzhangdan={payload} />, PrintJiangzhangdan);
		},
		*printShouquanshu({ payload }, { call, put }) {
			print(<Shouquanshu Shouquanshu={payload} />, PrintShouquanshu);
		},
		*printAccountReceipt({ payload }, { select }) {
			payload.receipt.examinationCenterName = yield select(state => state.indexpage.setting.systemName);
			print(<AccountReceipt accountReceipt={payload.receipt} />, PrintReceipt);
		},
	},
	subscriptions: {}
};
