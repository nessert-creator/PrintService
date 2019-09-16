import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
//用库
import { Select } from 'antd';

const { Option, OptGroup } = Select;
function handleChange(value) {
	console.log(`selected ${value}`);
}
import styles from './LuruPowerbook.css';

function LuruPowerbook({ dispatch, form, }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);
			let data = {
				"sname": values.sname,
				"name_1": values.name_1,
				"type_1": values.type_1,
				"number_1": values.number_1,
				"phoneNumber_1": values.phoneNumber_1,
				"name_2": values.name_2,
				"type_2": values.type_2,
				"number_2": values.number_2,
				"phoneNumber_2": values.phoneNumber_2,
			};
			if (!err) {
				dispatch({
					type: 'powerbook/createPowerbook',
					payload: data
				});
			}
		});
	}
	const formCol = {
		labelCol: { span: 3 },
		wrapperCol: { span: 12 }
	};
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<header>
					<span>中信银行</span><br />
					<span>CHINA CITIC BANK</span><br />
				</header>
				<div className={styles.title}>中信银行公司电子银行企业法定代表人授权书</div>
				<section >
					<Form onSubmit={handleSubmit}>
						<div className={styles.content1}>
							<div className={styles.service}>法定代表人授权办理人签署《中信银行公司电子银行服务协议》时填写</div>
							<FormItem label="客户名称:"{...formCol} className={styles.label_1}>
								{getFieldDecorator('sname', {
									rules: [{ required: true, message: '请输入客户名称！' }]
								})(
									<Input />
								)}
							</FormItem>
							<div className={styles.onSubmit_hr}>法定代表人信息</div>
							<FormItem label="姓名:"{...formCol} >
								{getFieldDecorator('name_1', {
									rules: [{ required: true, message: '请输入姓名！' }]
								})(
									<Input />
								)}
							</FormItem>
							<FormItem label="证件类型:"{...formCol}>
								{getFieldDecorator('type_1', {
									rules: [{ required: true, message: '请输入证件类型！' }]
								})(
									<Select defaultValue="居民身份证" style={{ width: 200 }} onChange={handleChange}>
										<OptGroup label="居民身份证">
											<Option value="居民身份证">居民身份证</Option>
											<Option value="出生证">出生证</Option>
										</OptGroup>
									</Select>,
								)}
							</FormItem>
							<FormItem label="证件号码:"{...formCol}>
								{getFieldDecorator('number_1', {
									rules: [{ required: true, message: '请输入证件号码！' }]
								})(
									<Input />
								)}
							</FormItem>
							<FormItem label="联系电话:"{...formCol}>
								{getFieldDecorator('phoneNumber_1', {
									rules: [{ required: true, message: '请输入联系电话！' }]
								})(
									<Input />
								)}
							</FormItem>
							<hr />
							<div className={styles.onSubmit_hr}>办理人信息</div>
							<FormItem label="姓名:"{...formCol}>
								{getFieldDecorator('name_2', {
									rules: [{ required: true, message: '请输入姓名！' }]
								})(
									<Input />
								)}
							</FormItem>
							<FormItem label="证件类型:"{...formCol}>
								{getFieldDecorator('type_2', {
									rules: [{ required: true, message: '请输入证件类型！' }]
								})(
									<Select defaultValue="居民身份证" style={{ width: 200 }} onChange={handleChange}>
										<OptGroup label="居民身份证">
											<Option value="居民身份证">居民身份证</Option>
											<Option value="出生证">出生证</Option>
										</OptGroup>
									</Select>,
								)}
							</FormItem>
							<FormItem label="证件号码:"{...formCol}>
								{getFieldDecorator('number_2', {
									rules: [{ required: true, message: '请输入证件号码！' }]
								})(
									<Input />
								)}
							</FormItem>
							<FormItem label="联系电话:"{...formCol}>
								{getFieldDecorator('phoneNumber_2', {
									rules: [{ required: true, message: '请输入联系电话！' }]
								})(
									<Input />
								)}
							</FormItem>
							<hr />
							<div>
								<div className={styles.cachet1}>
									<header>单位公章:</header>
									<span>法定代表人签章:</span><br />
									<span>日期:</span>
								</div>
								<div className={styles.cachet2}>
									<header>办理网点(业务公章):</header>
									<span>经办:</span><br />
									<span>复核:</span>
									<span>日期:</span>
								</div>
							</div>
						</div>

						<Button type="primary" htmlType="submit" >
							注册
					    </Button>
					</Form>
				</section>
			</div>
		</div>
	);
}
LuruPowerbook = connect((state) => {
	return {
		...state.powerbook,
	};
})(LuruPowerbook);

export default create()(LuruPowerbook);