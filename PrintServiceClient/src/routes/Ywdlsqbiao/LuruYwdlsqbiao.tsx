import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruYwdlsqbiao.css';

function LuruYwdlsqbiao({ dispatch, form }) {
	const { getFieldDecorator } = form;
	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);

			let data = {
				"customername": values.customername,
				"clientinformation": values.clientinformation,
				"name": values.name,
				"certificatetype": values.certificatetype,
				"idnumber": values.idnumber,
				"contactnumber": values.contactnumber,
				"agentinformation": values.agentinformation,
				"name1": values.name1,
				"certificatetype1": values.certificatetype1,
				"idnumber1": values.idnumber1,
				"contactnumber1": values.contactnumber1,
				"name2": values.name2,
				"certificatetype2": values.certificatetype2,
				"idnumber2": values.idnumber2,
				"contactnumber2": values.contactnumber2,
			};

			if (!err) {
				dispatch({
					type: 'ywdlsqbiao/createywdlsqbiao',
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
					"customername": values.customername,
					"clientinformation": values.clientinformation,
					"name": values.name,
					"certificatetype": values.certificatetype,
					"idnumber": values.idnumber,
					"contactnumber": values.contactnumber,
					"agentinformation": values.agentinformation,
					"name1": values.name1,
					"certificatetype1": values.certificatetype1,
					"idnumber1": values.idnumber1,
					"contactnumber1": values.contactnumber1,
					"name2": values.name2,
					"certificatetype2": values.certificatetype2,
					"idnumber2": values.idnumber2,
					"contactnumber2": values.contactnumber2,
				};

				dispatch({
					type: "print/printYwdlsqbiao",
					payload: data
				});
			}
		});
	}

	const formCol = {
		labelCol: { span: 5 },
		wrapperCol: { span: 15 }
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<header className={styles.title}>
					<Row className={styles.logo}></Row>
					<Row className={styles.title}>中信银行公司电子银行业务代理授权表</Row>
				</header>
				<section>
					<span className={styles.sectionTitle}>操作人员用户授权代理人到柜台领取USB Key或/和密码信函时填写</span>
					<Form onSubmit={handleSubmit} className={styles.customername}  >
						<div className={styles.items}>
							<FormItem label="客户名称"{...{ labelCol: { span: 2 }, wrapperCol: { span: 20 } }} >
								{getFieldDecorator('customername', {
									rules: [{ required: true, message: '请输入客户名称！' }]
								})(
									<Input className={styles.input} />
								)}
							</FormItem>

							<Row className={styles.sectionTitle}>委托人信息</Row>
							<Row>
								<Col span={12}>
									<FormItem label="姓名"{...formCol}>
										{getFieldDecorator('name', {
											// // rules: [{ required: true, message: '请输入姓名！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件类型"{...formCol}>
										{getFieldDecorator('certificatetype', {
											// rules: [{ required: true, message: '请输入证件类型！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件号码"{...formCol}>
										{getFieldDecorator('idnumber', {
											// rules: [{ required: true, message: '请输入证件号码！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="联系电话"{...formCol}>
										{getFieldDecorator('contactnumber', {
											// rules: [{ required: true, message: '请输入联系电话！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
								</Col>
								<Col span={12}>
									<FormItem label="姓名"{...formCol}>
										{getFieldDecorator('name2', {
											// rules: [{ required: true, message: '请输入姓名！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件类型"{...formCol}>
										{getFieldDecorator('certificatetype2', {
											// rules: [{ required: true, message: '请输入证件类型！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件号码"{...formCol}>
										{getFieldDecorator('idnumber2', {
											// rules: [{ required: true, message: '请输入证件号码！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="联系电话"{...formCol}>
										{getFieldDecorator('contactnumber2', {
											// rules: [{ required: true, message: '请输入联系电话！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
								</Col>
							</Row>
							<Row className={styles.sectionTitle}>代理人信息</Row>
							<Row>
								<Col span={12} >
									<FormItem label="姓名"{...formCol}>
										{getFieldDecorator('name1', {
											// rules: [{ required: true, message: '请输入姓名！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件类型"{...formCol}>
										{getFieldDecorator('certificatetype1', {
											// rules: [{ required: true, message: '请输入证件类型！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="证件号码"{...formCol}>
										{getFieldDecorator('idnumber1', {
											// rules: [{ required: true, message: '请输入证件号码！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
									<FormItem label="联系电话"{...formCol}>
										{getFieldDecorator('contactnumber1', {
											// rules: [{ required: true, message: '请输入联系电话！' }]
										})(
											<Input className={styles.input} />
										)}
									</FormItem>
								</Col>
								<Col span={12}>
									<header className={styles.hint1}>
										<span className={styles.sectionTitle}>提示:</span>
										<span className={styles.tishi}>代理人将同时取走操作员用户的USB Key及密码信函，请慎重选择代理人员</span>
									</header>
								</Col>
							</Row>
							<Row className={styles.zhbk}>
								<Col span={12}>
									<header className={styles.sectionTitle}>单位公章:</header>
									<span className={styles.day}>日期:</span>
								</Col>
								<Col span={12}>
									<div className={styles.sectionTitle}>办理网点(业务公章）:</div>
									<div className={styles.jb}>经办:</div>
									<div>
										<Col span={10} className={styles.jb}>复核:</Col>
										<Col span={10} className={styles.jb}>日期:</Col>
									</div>
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
				</section>
			</div>
		</div >
	);
}
LuruYwdlsqbiao = connect((state) => {
	return {
		...state.ywdlsqbiao,
	};
})(LuruYwdlsqbiao);

export default create()(LuruYwdlsqbiao);

