import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Powerbook extends React.Component {
	render() {
		const { powerbook } = this.props;
		return (
			<div
				style={{
					fontSize: '20px',
					height: '800px',
					marginLeft: '50px',
					marginRight: '50px'
				}}
			>
                <div style={{height:'50px'}}></div>
				<div style={{height:'45px'}}></div>
				<div style={{height:'45px'}}></div>
				<div style={{height:'50px'}}> 
                    <span style={{marginLeft:'105px',marginRight:'5px'}}>{powerbook.sname}</span> 
                </div>
				<div style={{height:'190px'}}>
					<span style={{height:'30px'}}></span>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.name_1}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.type_1}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.number_1}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.phoneNumber_1}</span><br/>
				</div>
				<div style={{height:'190px',marginTop:'80px'}}>
					<span style={{height:'30px'}}></span>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.name_2}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.type_2}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.number_2}</span><br/>
					<span style={{marginLeft:'105px',marginTop:'40px',display: 'inline-block'}}>{powerbook.phoneNumber_2}</span><br/>
				</div>
				<div style={{height:'300px'}}></div>
				<div style={{height:'300px'}}></div>
			</div>
		);
	}
}
