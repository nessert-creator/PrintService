import React from 'react';
import { connect } from 'dva';
import { Form, DatePicker, Input, Button, Row, Col, InputNumber } from 'antd';
import { Link } from 'dva/router';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruYewujiesuanshenqngshu.css';
import { injectIntl } from 'react-intl';
function LuruYewujiesuanshenqngshu({ dispatch, form, intl }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                    "designation": values.designation,
                    "account": values.account,
                    "telephone": values.telephone,
                    "account1": values.account1,
                    "designation1": values.designation1,
                    "account2": values.account2,
                    "provice": values.provice,
                    "city": values.city,
                    "account3": values.account3,
                    "currency": values.currency,
                    "money": values.money,
                    "account4": values.account4,
                    "pay": values.pay,
                    "nationality": values.nationality,
                    "type": values.type,
                    "professional": values.professional,
                    "number": values.number,
                    "extra": values.extra
                };
                dispatch({
                    type: 'yewujiesuanshenqingshu/createYewujiesuanshenqngshu',
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
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                    "designation": values.designation,
                    "account": values.account,
                    "telephone": values.telephone,
                    "account1": values.account1,
                    "designation1": values.designation1,
                    "account2": values.account2,
                    "provice": values.provice,
                    "city": values.city,
                    "account3": values.account3,
                    "currency": values.currency,
                    "money": values.money,
                    "account4": values.account4,
                    "pay": values.pay,
                    "nationality": values.nationality,
                    "type": values.type,
                    "professional": values.professional,
                    "number": values.number,
                    "extra": values.extra
                };
                dispatch({
                    type: "print/printYewujiesuanshenqingshu",
                    payload: data
                });
            }
        });
    }
    const formCol = {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
    };
    const formCol1 = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };
    return (<div className={styles.container}>
			<div className={styles.content}>

				<header className={styles.title}>
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>结算业务申请书</Row>
				</header>
				<section>
					<Form onSubmit={handleSubmit}>
						<div className={styles.date}>
							<FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
								{getFieldDecorator('date', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
							</FormItem>
						</div>

						<div className={styles.content1}>
							<div className={styles.content3}>
								<div className={styles.block}>
									<Row>
										<Col span={1}>
											<div className={styles.renyuanxinxi}>申请人</div>
										</Col>
										<Col span={11}>
											<Row>
												<Col span={24}>
													<FormItem label='名称' {...formCol}>
														{getFieldDecorator('designation', {
        rules: [{ required: true, message: '请输入名称！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='账号' {...formCol}>
														{getFieldDecorator('account', {
        rules: [{ required: true, message: '请输出账号！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='联系电话' {...formCol}>
														{getFieldDecorator('telephone', {
        rules: [{ required: true, message: '请输入联系电话！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='开户/汇出行' {...formCol}>
														{getFieldDecorator('account1', {
        rules: [{ required: true, message: '请输入开户/汇出行！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
										</Col>
										<Col span={1}>
											<div className={styles.renyuanxinxi}>收款人</div>
										</Col>
										<Col span={11}>
											<Row>
												<Col span={24}>
													<FormItem label='名称' {...formCol}>
														{getFieldDecorator('designation1', {
        rules: [{ required: true, message: '请输入名称！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='账号' {...formCol}>
														{getFieldDecorator('account2', {
        rules: [{ required: true, message: '请输入账号！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='省' {...formCol}>
														{getFieldDecorator('provice', {
        rules: [{ required: true, message: '请输入地址！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
													<FormItem label='市' {...formCol}>
														{getFieldDecorator('city', {
        rules: [{ required: true, message: '请输入地址！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
											<Row>
												<Col span={24}>
													<FormItem label='开户/汇出行' {...formCol}>
														{getFieldDecorator('account3', {
        rules: [{ required: true, message: '请输入开户/汇出行！' }]
    })(<Input className={styles.input}/>)}
													</FormItem>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>
							</div>
							<div className={styles.block}>
								<Row>
									<Col span={5}>
										<FormItem label='币种' {...formCol}>
											{getFieldDecorator('currency', {
        rules: [{ required: true, message: '请输入币种！' }]
    })(<Input className={styles.input}/>)}
										</FormItem>
									</Col>
									<Col span={17}>
										<FormItem label='金额' {...formCol}>
											{getFieldDecorator('money', {
        rules: [{ required: true, message: '请输入金额！' }]
    })(<InputNumber className={styles.inputNumber}/>)}
										</FormItem>
									</Col>
								</Row>
							</div>

							<div className={styles.block}>
								<Row>
									<Col span={6}>
										<div className={styles.zhongxian}>
											<div>
												<div></div>
												<span>上列款项及相关费用请从上述账户内支付。</span>
											</div>
											<div>
												<span>上列款项请从上述账户内支付，并由（账号）</span>
												<FormItem>
													{getFieldDecorator('account4', {})(<Input className={styles.input}/>)}
												</FormItem>
												<span>账户支付相关费用。</span>
											</div>
										</div>
									</Col>
									<Col offset={2} span={16}>
										<div>
											<div className={styles.dixian}>
												<Row>
													支付密码
												</Row>
												<Row>

													<span>现金业务请填写</span>

													<Row>
														<Col span={8}>
															<FormItem label="国籍 ：" {...formCol1}>
																{getFieldDecorator('nationality', {})(<Input className={styles.input}/>)}
															</FormItem>

															<FormItem label="职业 ：" {...formCol1}>
																{getFieldDecorator('professional', {})(<Input className={styles.input}/>)}
															</FormItem>
														</Col>
														<Col span={14}>

															<FormItem label="证件类型 ：" {...formCol1}>
																{getFieldDecorator('type', {})(<Input className={styles.input}/>)}
															</FormItem>
															<FormItem label="证件号码 ：" {...formCol1}>
																{getFieldDecorator('number', {})(<Input className={styles.input}/>)}
															</FormItem>
														</Col>
													</Row>
												</Row>
											</div>

											<Row>
												<div>其他附加信息及用途</div>
												<FormItem>
													{getFieldDecorator('extra', {})(<Input.TextArea rows={3}/>)}
												</FormItem>
											</Row>
										</div>
									</Col>
								</Row>
							</div>

						</div>
						<div className={styles.footer}>
							<Row>
								<Col span={4}>
									<Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
								</Col>

								<Col offset={5} span={8}>
									<Button.Group size='large'>
										<Button type="primary" htmlType="submit">提交</Button>
										<Button type="primary" htmlType="button" onClick={() => { handlePrint(); }}>打印</Button>
										<Button type="primary" htmlType="button" onClick={() => { handleReset(); }}>重置</Button>
									</Button.Group>
								</Col>
							</Row>

						</div>
					</Form>

				</section>


			</div>
		</div>);
}
LuruYewujiesuanshenqngshu = connect((state) => {
    return Object.assign({}, state.yewujiesuanshenqingshu);
})(LuruYewujiesuanshenqngshu);
export default create()(injectIntl(LuruYewujiesuanshenqngshu));
