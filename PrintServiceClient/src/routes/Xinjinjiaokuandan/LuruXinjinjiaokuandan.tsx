import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, DatePicker, InputNumber, Row, Col } from 'antd';
import { Link } from 'dva/router';
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
			if (!err) {
				let data = {
					"nian": values.date.year(),
					"yue": values.date.month() + 1,
					"ri": values.date.day(),
					"accountName": values.accountName,
					"accountNumber": values.accountNumber,
					"openingBank": values.openingBank,
					"abstract": values.abstract,
					"money": values.money,
					"bankSpecialColumn": values.bankSpecialColumn
				};
				dispatch({
					type: 'xinjinjiaokuandan/creatXinjinjiaokuandan',
					payload: data
				});
			}
		});
	}


	function handleReset() {
		form.resetFields();
	}

	function handlePrint() {
		form.validateFields((err, values) => {
			if (!err) {
				let data = {
					"nian": values.date.year(),
					"yue": values.date.month() + 1,
					"ri": values.date.day(),
					"accountName": values.accountName,
					"accountNumber": values.accountNumber,
					"openingBank": values.openingBank,
					"abstract": values.abstract,
					"money": values.money,
					"bankSpecialColumn": values.bankSpecialColumn
				};

				dispatch({
					type: "print/printXinjinjiaokuandan",
					payload: data
				});
			}
		});
	}

	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 12 }
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<header className={styles.title}>
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>现金交款单</Row>
				</header>

				<Form onSubmit={handleSubmit}>

					<div className={styles.date}>
						<FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
							{getFieldDecorator('date', {
								rules: [{ required: true, message: '请输入日期！' }]
							})(
								<DatePicker className={styles.datePicker} />
							)}
						</FormItem>
					</div>

					<div className={styles.waikuan}>
						<Row className={styles.kehukuan}>
							<Col className={styles.kehutianxie} span={2}>
								<div className={styles.juzhong}>客<br />户<br />填<br />写</div>
							</Col>

							<Col span={22}>
								<Row>
									<Col span={11}>
										<FormItem label="收款单位" {...formCol}>
											{getFieldDecorator('accountName', {
												rules: [{ required: true, message: '请输入收款单位！' }]
											})(
												<Input className={styles.input} />
											)}
										</FormItem>
									</Col>
									<Col span={11}>
										<FormItem label="开户行" {...formCol}>
											{getFieldDecorator('openingBank', {
												rules: [{ required: true, message: '请输入开户行！' }]
											})(
												<Input className={styles.input} />
											)}
										</FormItem>
									</Col>
								</Row>
								<Row>
									<Col span={11}>
										<FormItem label="收款账号" {...formCol}>
											{getFieldDecorator('accountNumber', {
												rules: [{ required: true, message: '请输入收款账号！' }]
											})(
												<Input className={styles.input} />
											)}
										</FormItem>
									</Col>
									<Col span={11}>
										<FormItem label="摘要" {...formCol}>
											{getFieldDecorator('abstract', {
											})(
												<Input className={styles.input} />
											)}
										</FormItem>
									</Col>
								</Row>
								<Row>
									<Col span={24}>
										<FormItem label="金额（小写)" {...{ labelCol: { span: 4 }, wrapperCol: { span: 16 } }}>
											{getFieldDecorator('money', {
												rules: [{ required: true, message: '请输入金额！' }]
											})(
												<InputNumber style={{ width: "100%" }} />
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

						</Row>
					</div>


					<div className={styles.footer}>
						<Row>
							<Col span={4}>
								<Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
							</Col>

							<Col offset={5} span={8}>
								<Button.Group size='large'>
									<Button type="primary" htmlType="submit">提交</Button>
									<Button type="primary" htmlType="button" onClick={() => { handlePrint() }}>打印</Button>
									<Button type="primary" htmlType="button" onClick={() => { handleReset() }}>重置</Button>
								</Button.Group>
							</Col>
						</Row>

					</div>
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
