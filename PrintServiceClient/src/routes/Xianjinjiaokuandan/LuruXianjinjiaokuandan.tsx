import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruXianjinjiaokuandan.css';


function LuruXinjinjiaokuandan({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);

			let data = {
				"accountName": values.accountName,
				"accountNumber": values.accountNumber,
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
		wrapperCol: { span: 12 }
	};
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<header className={styles.title}>
					<div className={styles.logo}></div>
					<span className={styles.biaoti}>现金交款单</span>
				</header>
				<section className={styles.neirong}>
					<Form onSubmit={handleSubmit}>
						<FormItem label="收款单位：" {...formCol}>
							{getFieldDecorator('accountname', {
								rules: [{ required: true, message: '请输入收款单位！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem label="收款账号：" {...formCol}>
							{getFieldDecorator('accountnumber', {
								rules: [{ required: true, message: '请输出收款账号！' }]
							})(
								<Input />
							)}
						</FormItem>

						<FormItem label="开户行：" {...formCol}>
							{getFieldDecorator('openingbank', {
								rules: [{ required: true, message: '请输入开户行！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem label="摘要：" {...formCol}>
							{getFieldDecorator('abstract', {
							})(
								<Input />
							)}
						</FormItem>
						<FormItem label="币种及金额（大写) ：" {...formCol}>
							{getFieldDecorator('money', {
								rules: [{ required: true, message: '请输出币种及金额（大写）！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem label="银行专用栏 ：" {...formCol}>
							{getFieldDecorator('bankspecialcolumn', {
							})(
								<Input />
							)}
						</FormItem>
						<Button type="primary" htmlType="submit" className={styles.baocun}>
							保存
					</Button>
					</Form>

				</section>

			</div>
		</div>
	);
}

LuruXinjinjiaokuandan = connect((state) => {
	return {
		...state.powerbook,
	};
})(LuruXinjinjiaokuandan);

export default create()(LuruXinjinjiaokuandan);

