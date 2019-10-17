import React from 'react';
export default class KailiApplyBook extends React.Component {
    render() {
        const { kailiApplyBook } = this.props;
        return (<div style={{
            fontSize: '20px',
            height: '2847px',
            marginLeft: '50px',
            marginRight: '50px'
        }}>
				<div style={{ height: '50px' }}></div>
				<div style={{ height: '50px' }}></div>
				<div style={{ height: '30px', float: 'right' }}>
					<div style={{ width: '10%', float: 'left', paddingRight: '64px' }}>{registration.year_1}</div>
					<div style={{ width: '10%', float: 'left', paddingRight: '48px' }}>{registration.month_1}</div>
					<div style={{ width: '10%', float: 'left' }}>{registration.day_1}</div>
				</div>
				<div>
					<div style={{ height: '25px', clear: 'both' }}></div>
					<div style={{ height: '55px' }}>
						<div style={{ width: '40%', float: 'left', paddingLeft: '202px' }}>{registration.name_1}</div>
						<div style={{ width: '40%', float: 'left', paddingLeft: '184px' }}>{registration.name_pinyin}</div>
					</div>
					<div style={{ height: '55px' }}>
						<div style={{ width: '30%', float: 'left', paddingLeft: '161px' }}>{registration.gender_1}</div>
						<div style={{ width: '33%', float: 'left', paddingLeft: '100px' }}>{registration.nationality_1}</div>
						<div style={{ width: '22%', float: 'left', paddingLeft: '145px' }}>{registration.phoneNumber}</div>
					</div>
					<div style={{ height: '55px' }}>
						<div>{kailiApplyBook.type_1}</div>
					</div>
					<div style={{ height: '55px' }}>
						<div style={{ float: 'left', marginRight: '50px' }}>{registration.number_1}</div>
						<div style={{ width: '10%', float: 'left', paddingRight: '64px' }}>{registration.year_2}</div>
						<div style={{ width: '10%', float: 'left', paddingRight: '48px' }}>{registration.month_2}</div>
						<div style={{ width: '10%', float: 'left' }}>{registration.day_2}</div>
					</div>
					<div style={{ height: '55px' }}>
						<div>{kailiApplyBook.license}</div>
					</div>
					<div style={{ height: '55px' }}>
						<div>{kailiApplyBook.license}</div>
					</div>
				</div>

			</div>);
    }
}
