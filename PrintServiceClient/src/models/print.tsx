import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	printJinzhangdan, PrintXinjinjiaokuandan, PrintYewujiesuanshenqingshu, PrintShouquanshu,
	PrintYwdlsqbiao, PrintPowerbook,PrintKailiApplyBook,PrintRegistration
} from './../utils/print';
import Xinjinjiaokuandan from './../routes/Print/Xinjinjiaokuandan';
import Jiangzhangdan from './../routes/Print/Jiangzhangdan';
import Yewujiesuanshenqingshu from './../routes/Print/Yewujiesuanshenqingshu';
import Shouquanshu from './../routes/Print/Shouquanshu';
import Ywdlsqbiao from './../routes/Print/Ywdlsqbiao';
import Powerbook from './../routes/Print/Powerbook';

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
		*printJinzhangdan({ payload }, { call, put }) {
			print(<Jiangzhangdan jiangzhangdan={payload} />, printJinzhangdan);
		},
		*printXinjinjiaokuandan({ payload }, { call, put }) {
			console.log(payload)
			print(<Xinjinjiaokuandan xinjinjiaokuandan={payload} />, PrintXinjinjiaokuandan);
		},
		*printYewujiesuanshenqingshu({ payload }, { call, put }) {
			console.log(payload)
			print(<Yewujiesuanshenqingshu data={payload} />, PrintYewujiesuanshenqingshu);
		},
		*printShouquanshu({ payload }, { call, put }) {
			console.log(payload)
			print(<Shouquanshu Shouquanshu={payload} />, PrintShouquanshu);
		},
		*printYwdlsqbiao({ payload }, { call, put }) {
			console.log(payload)
			print(<Ywdlsqbiao ywdlsqbiao={payload} />, PrintYwdlsqbiao);
		},
		*printPowerbook({ payload }, { call, put }) {
			console.log(payload)
			print(<Powerbook powerbook={payload} />, PrintPowerbook);
		},
		*PrintKailiApplyBook({ payload }, { call, put }) {
			console.log(payload)
			print(<KailiApplyBook kailiApplyBook={payload} />, PrintKailiApplyBook);
		},
		*PrintRegistration({ payload }, { call, put }) {
			console.log(payload)
			print(<Registration registration={payload} />, PrintRegistration);
		},
	},
	subscriptions: {}
};
