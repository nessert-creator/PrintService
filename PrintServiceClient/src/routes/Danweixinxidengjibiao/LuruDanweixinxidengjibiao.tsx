import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
import { Link } from 'dva/router';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruDanweixinxidengjibiao.css';

function LuruDanweixinxidengjibiao({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);
			let data = {
				"company": values.company,
				"code": values.code,
				"information": values.information,
				"shareholders": values.shareholders,
				"shareholders1": values.shareholders1,
				"shareholders2": values.shareholders2,
				"shareholders3": values.shareholders3,
				"designation1": values.designation1,
				"identity": values.identity,
				"identity1": values.identity1,
				"identity2": values.identity2,
				"identity3": values.identity3,
				"number": values.number,
				"number1": values.number1,
				"number2": values.number2,
				"number3": values.number3,
				"date": values.date,
				"date1": values.date1,
				"date2": values.date2,
				"date3": values.date3,
				"or": values.or,
				"or1": values.or1,
				"or2": values.or2,
				"or3": values.or3,
				"benefiviary": values.benefiviary,
				"type": values.type,
				"type1": values.type1,
				"type2": values.type2,
				"type3": values.type3,
				"name": values.name,
				"name1": values.name1,
				"name2": values.name2,
				"name3": values.name3,
				"identity4": values.identity4,
				"identity5": values.identity5,
				"identity6": values.identity6,
				"identity7": values.identity7,
				"number4": values.number4,
				"number5": values.number5,
				"number6": values.number6,
				"number7": values.number7,
				"date4": values.date4,
				"date5": values.date5,
				"date6": values.date6,
				"date7": values.date7,
				"address": values.address,
				"address1": values.address1,
				"address2": values.address2,
				"address3": values.address3,
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

				<header className={styles.title}>
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>单位信息登记表</Row>
				</header>

				<section>
					<Form onSubmit={handleSubmit}>
						<div className={styles.content1}>
							<div className={styles.content3}>
								<div className={styles.dixian}>
									<div className={styles.dixian}>
										<Row>
											<Col span={4} className={styles.mingcheng}>公司名称</Col>
											<Col span={6}>
												<FormItem>
													{getFieldDecorator('designation', {
														rules: [{ required: true, message: '请输入名称！' }]
													})(
														<Input className={styles.leixing} />
													)}
												</FormItem>
											</Col>
											<Col span={8} className={styles.mingcheng}>社会统一信用代码</Col>
											<Col span={6}>
												<FormItem>
													{getFieldDecorator('abstract', {
														rules: [{ required: true, message: '' }]
													})(
														<Input className={styles.leixing} />
													)}
												</FormItem>
											</Col>
										</Row>
									</div>
									<div className={styles.dixian}>
										<Row>
											<Col span={4} className={styles.mingcheng}>股东信息</Col>
											<Col span={20}>
												<FormItem>
													{getFieldDecorator('designation', {
														rules: [{ required: true, message: '请输入股东信息！' }]
													})(
														<Input className={styles.leixing} />
													)}
												</FormItem>
											</Col>

										</Row>
									</div>
									<div>
										<Row className={styles.dixian}>
											<Col span={4} className={styles.mingcheng} >股东名称</Col>
											<Col span={3} className={styles.mingcheng}>证件类型</Col>
											<Col span={4} className={styles.mingcheng}>证件号码</Col>
											<Col span={3} className={styles.mingcheng}>有效期限</Col>
											<Col span={2} className={styles.mingcheng}>持股比例</Col>
											<Col span={6} className={styles.mingcheng}>是否控股股东或实际控股人</Col>
										</Row>
									</div>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入股东名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入持股比例' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: ' ' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入股东名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入持股比例' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: ' ' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入股东名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入持股比例' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: ' ' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入股东名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入持股比例' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: ' ' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col >受益人所有信息
										<FormItem>
												{getFieldDecorator('designation', {
													rules: [{ required: true, message: '请输入受益人所有信息！' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>受益人类型</Col>
										<Col>受益人名称</Col>
										<Col>证件类型</Col>
										<Col>证件号码</Col>
										<Col>有效期限</Col>
										<Col>地址</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入受益人名称' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件类型' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '请输入证件号码' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '有效期限' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
										</Col>
										<Col>
											<FormItem>
												{getFieldDecorator('abstract', {
													rules: [{ required: true, message: '有请输入地址' }]
												})(
													<Input className={styles.leixing} />
												)}
											</FormItem>
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

							</div>
						</div>

					</Form>
				</section>
			</div>
		</div >
	);
}
LuruDanweixinxidengjibiao = connect((state) => {
	return {
		...state.danweixinxidengjibiao,
	};
})(LuruDanweixinxidengjibiao);

export default create()(LuruDanweixinxidengjibiao);

