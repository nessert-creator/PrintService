import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Dayin extends React.Component {
	render() {
		const { dayin } = this.props;
		return (
			<div
				style={{
					fontSize: '20px',
					lineHeight: '40px',
					marginLeft: '50px',
					marginRight: '50px'
				}}
			>
                <div>
                </div>
                <div>{Shouqunweituoshu2.accountname}</div>
                <div></div>
                <div></div>
			</div>
		);
	}
}
