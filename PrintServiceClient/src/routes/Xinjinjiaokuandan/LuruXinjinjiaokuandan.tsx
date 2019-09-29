import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, DatePicker, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruXinjinjiaokuandan.css';
import TextArea from 'antd/lib/input/TextArea';
import { COLLECTION_FORMATS } from '../../api/api';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;



function LuruXinjinjiaokuandan({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);

			let data = {
				"accountName": values.accountName,
				"accountNumber": 0,
				"openingBank": values.openingBank,
				"abstract": values.abstract,
				"money": values.money,
				"bankSpecialColumn": values.bankSpecialColumn
			};
			if (!err) {
				dispatch({
					type: 'xinjinjiaokuandan/creatXinjinjiaokuandan',
					payload: data
				});
			}
		});
	}

	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 }
	};
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<header className={styles.title}>
					<div className={styles.logo}></div>
					<span className={styles.biaoti}>现金交款单</span>
				</header>

				<Form onSubmit={handleSubmit}>

					<FormItem style={{
						marginLeft: '335px',
						width: '120px'
					}}>
						{getFieldDecorator('date', {
						})(
							<DatePicker />
						)}
					</FormItem>
					<div className={styles.waikuan}>
						<Row className={styles.kehukuan}>
							<Col className={styles.kehutianxie} span={2}>
								<div className={styles.juzhong}>客<br />户<br />填<br />写</div>
							</Col>

							<Col span={22}>
								<Row>
									<Col className={styles.padd} span={4}>收款单位</Col>
									<Col span={7}>
										<FormItem>
											{getFieldDecorator('accountname', {
											})(
												<Input />
											)}
										</FormItem>
									</Col>
									<Col className={styles.padd} span={4}>开户行</Col>
									<Col span={7}>
										<FormItem>
											{getFieldDecorator('openingbank', {
											})(
												<Input />
											)}
										</FormItem>
									</Col>
								</Row>
								<Row>
									<Col className={styles.padd} span={4}>收款账号</Col>
									<Col span={7}>
										<FormItem>
											{getFieldDecorator('accountnumber', {
											})(
												<Input />
											)}
										</FormItem>
									</Col>
									<Col className={styles.padd} span={4}>摘要</Col>
									<Col span={7}>
										<FormItem>
											{getFieldDecorator('abstract', {
											})(
												<Input />
											)}
										</FormItem>
									</Col>
								</Row>
								<Row>
									<Col className={styles.padd} span={4}>币种及金额<br />（大写)</Col>
									<Col span={18}>
										<FormItem>
											{getFieldDecorator('money', {
											})(
												<Input />
											)}
										</FormItem>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col className={styles.kehutianxie} span={2}>
								<div className={styles.juzhong}>银<br />行<br />专<br />用<br />栏</div>
							</Col>
							<Col span={22}>
								<FormItem>
									{getFieldDecorator('BankSpecialColumn', {
									})(
										<TextArea className={styles.kuan2} />
									)}
								</FormItem>
							</Col>

						</Row>
					</div>
					<Button type="primary" htmlType="submit" className={styles.baocun}>
						保存
							</Button>
				</Form>
			</div>
		</div>
	)
};
LuruXinjinjiaokuandan = connect((state) => {
	return {
		...state.xinjinjiaokuandan,
	};
})(LuruXinjinjiaokuandan);

export default create()(LuruXinjinjiaokuandan);
