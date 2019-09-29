import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruYewujiesuanshenqngshu.css';

function LuruYewujiesuanshenqngshu({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);
			let data = {
				"designation": values.designation,
				"account": values.account,
				"telephone": values.telephone,
				"account1": values.account1,
				"designation1": values.designation1,
				"account2": values.account2,
				"addiess": values.addiess,
				"account3": values.account3,
				"currency": values.currency,
				"money": values.money,
				"account4": values.account4,
				"pay": values.pay,
				"nationality": values.nationality,
				"type": values.type,
				"professional": values.professional,
				"number": values.number,
			};
			if (!err) {
				dispatch({
					type: 'yewujiesuanshenqingshu/createYewujiesuanshenqngshu',
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
				<header className={styles.zhongxinyinhang}>
					<span>中信银行</span><br />
					<span>CHINA CITIC BANK</span><br />
				</header>
				<header>
					<div className={styles.title}>结算业务申请书</div>
				</header>
				<section>
					<Form onSubmit={handleSubmit}>
						<div className={styles.content1}>
							<div className={styles.content3}>
								<div className={styles.dixian}>
									<Row>
										<Col span={1}>
											<div className={styles.shenqingren}>申请人</div>
										</Col>
										<Col span={11}>
											<Row>
												<Col span={6}>名称</Col>
												<Col span={18}>
													<FormItem>
														{getFieldDecorator('designation', {
															rules: [{ required: true, message: '请输入名称！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6}>账号</Col>
												<Col span={18}>
													<FormItem >
														{getFieldDecorator('account', {
															rules: [{ required: true, message: '请输出账号！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6} >联系电话</Col>
												<Col span={18}>
													<FormItem >
														{getFieldDecorator('telephone', {
															rules: [{ required: true, message: '请输入联系电话！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6}>开户/汇出行</Col>
												<Col span={18}>
													<FormItem>
														{getFieldDecorator('abstract', {
															rules: [{ required: true, message: '请输入开户/汇出行！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
										</Col>
										<Col span={1}>
											<div className={styles.shoukuanren}>收款人</div>
										</Col>
										<Col span={11}>
											<Row>
												<Col span={6}>名称</Col>
												<Col span={18}>
													<FormItem >
														{getFieldDecorator('designation1', {
															rules: [{ required: true, message: '请输入名称！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6}>账号</Col>
												<Col span={18}>
													<FormItem >
														{getFieldDecorator('account2', {
															rules: [{ required: true, message: '请输入账号！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6}>地址 </Col>
												<Col span={18}>
													<FormItem >
														{getFieldDecorator('addiess', {
															rules: [{ required: true, message: '请输入地址！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={6}>开户/汇出行</Col>
												<Col span={18}>
													<FormItem>
														{getFieldDecorator('account3', {
															rules: [{ required: true, message: '请输入开户/汇出行！' }]
														})(
															<Input className={styles.leixing} />
														)}
													</FormItem>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>
							</div>
							<div className={styles.dixian}>
								<Row>
									<Col span={1}>币种</Col>
									<Col span={4}>
										<FormItem >
											{getFieldDecorator('currency', {
												rules: [{ required: true, message: '请输入币种！' }]
											})(
												<Input className={styles.leixing} />
											)}
										</FormItem>
									</Col>
									<Col span={1}>金额</Col>
									<Col span={16}>
										<FormItem >
											{getFieldDecorator('money', {
												rules: [{ required: true, message: '请输入金额！' }]
											})(
												<Input className={styles.leixing} />
											)}
										</FormItem>
									</Col>
								</Row>
							</div>

							<div className={styles.dixian}>
								<Row>
									<Col spam={12}>
										<div className={styles.zhongxian}>
											<div >
												<div ></div>
												<span>上列款项及相关费用请从上述账户内支付。</span>
											</div>
											<div>
												<div ></div>
												<span >上列款项请从上述账户内支付，并由（账号）</span>
												<FormItem label="账号 ：" {...formCol} >
													{getFieldDecorator('account4', {
														rules: [{ required: true, message: '请输入账号！' }]
													})(
														<Input className={styles.leixing} />
													)}
												</FormItem>
												<span >账户支付相关费用。</span>
											</div>
											<span>申请人签章</span>
										</div>
									</Col>
									<Col span={12}>
										<div >
											<div className={styles.dixian}>
												<Row span={1}>
													<span >支付密码</span>
												</Row>
											</div>

											<div className={styles.dixian}>
												<Row span={4}>

													<span>现金业务请填写</span>

													<Row>
														<Col span={8}>
															<FormItem label="国籍 ：" {...formCol}>
																{getFieldDecorator('nationality', {
																	rules: [{ required: true, message: '请输入国籍！' }]
																})(
																	<Input className={styles.leixing} />
																)}
															</FormItem>

															<FormItem label="职业 ：" {...formCol}>
																{getFieldDecorator('professional', {
																	rules: [{ required: true, message: '请输入职业！' }]
																})(
																	<Input className={styles.leixing} />
																)}
															</FormItem>
														</Col>
														<Col span={14}>

															<FormItem label="证件类型 ：" {...formCol}>
																{getFieldDecorator('type', {
																	rules: [{ required: true, message: '请输入证件类型！' }]
																})(
																	<Input className={styles.leixing} />
																)}
															</FormItem>
															<FormItem label="证件号码 ：" {...formCol}>
																{getFieldDecorator('number', {
																	rules: [{ required: true, message: '请输入证件号码！' }]
																})(
																	<Input className={styles.leixing} />
																)}
															</FormItem>
														</Col>
													</Row>
												</Row>
											</div>

											<Row >
												<Col span={7}>其他附加信息及用途</Col>


											</Row>

										</div>
										<Row >
											<Col>银行打印栏：</Col>


										</Row>


									</Col>
								</Row>
							</div>


						</div>
						<Button type="primary" htmlType="submit">
							保存
							</Button>
					</Form>

				</section>


			</div>
		</div >
	);
}

LuruYewujiesuanshenqngshu = connect((state) => {
	return {
		...state.yewujiesuanshenqingshu,
	};
})(LuruYewujiesuanshenqngshu);

export default create()(LuruYewujiesuanshenqngshu);
