import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, DatePicker, InputNumber, Checkbox, Select, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruShenqingshu.css';
import TextArea from 'antd/lib/input/TextArea';
import { COLLECTION_FORMATS } from '../../api/api';
const Option = Select.Option;


function LuruShenqingshu({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);

			let data = {
				"bankname": values.bankname,
				"name": values.name,
				"idtype": values.idtype,
				"idnumber": 0,
				"seal": values.seal,
				"phone": values.phone
			};
			if (!err) {
				dispatch({
					type: 'shenqingshu/creatShenqingshu',
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
					<Row className={styles.logo}></Row>
					<Row className={styles.title}>单位业务综合申请书</Row>
				</header>
				<Form onSubmit={handleSubmit} style={{ fontSize: 25 }}>
					<div className={styles.date}>
						<FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
							{getFieldDecorator('date', {
								rules: [{ required: true, message: '请输入日期！' }]
							})(
								<DatePicker className={styles.datePicker} />
							)}
						</FormItem>
					</div>
					<Row>
						<Row>
							<Col span={12}>
								<span>户名</span>
								<FormItem className={styles.formItem}>
									{getFieldDecorator('AccountName', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
							</Col>
							<Col span={12}>
								<span>账号</span>
								<FormItem className={styles.formItem} >
									{getFieldDecorator('AccountNumber', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
							</Col>
							<Col span={24}>
								<FormItem label="金额（小写)" {...{ labelCol: { span: 4 }, wrapperCol: { span: 16 } }}>
									{getFieldDecorator('money', {
										rules: [{ message: '请输入金额！' }]
									})(
										<InputNumber style={{ width: "100%" }} />
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<span>定期/通知存款业务</span>
							<Col>
								<span>提前支取,转入单位/内部账号</span>
								<FormItem className={styles.formItem} >
									{getFieldDecorator('Account', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
								<span>支取日</span>
								<FormItem className={styles.formItem} >
									{getFieldDecorator('WithdrawalDate', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
							</Col>
							<Col>
								<span>取款通知,转入单位/内部账号</span>
								<FormItem className={styles.formItem} >
									{getFieldDecorator('Account', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
								<span>支取日</span>
								<FormItem className={styles.formItem} >
									{getFieldDecorator('WithdrawalDate', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
							</Col>
							<span>取消取款通知，原通知编号</span>
							<FormItem className={styles.formItem} >
								{getFieldDecorator('Number', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
						</Row>
						<Row>
							<span>证实书/存单业务</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('idType', {
								})(
									<Select style={{ width: 200 }}>
										<Option value="网银换发">网银换发</Option>
										<Option value="结构性存款补发">结构性存款补发</Option>
										<Option value="损坏更换" >损坏更换</Option>
										<Option value="书面挂失">书面挂失</Option>
										<Option value="书面解挂" >书面解挂</Option>
										<Option value="挂失新开" >挂失新开</Option>
									</Select>
								)}
							</FormItem>
							<Col>
								<span>凭证号码</span>
								<FormItem className={styles.formItem}>
									{getFieldDecorator('VoucherNumber', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
								<span>网银流水号</span>
								<FormItem className={styles.formItem}>
									{getFieldDecorator('Liushuihao', {
									})(
										<Input className={styles.input} />
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<span>票据业务</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('idType', {
								})(
									<Select style={{ width: 200 }}>
										<Option value="挂失止付">挂失止付</Option>
										<Option value="书面解挂" >书面解挂</Option>
									</Select>
								)}
							</FormItem>
							<Col>
							<span>票据种类</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Zhonglei', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>票据号码</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Haoma', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>金额</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Jianer', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<Col>
							<span>收款人名称</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Shoukuanren', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>出票日期</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Chupiaoriqi', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>票据到期日</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Daoqiri', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<Col>
							<span>票据丧失时间</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Sangshishijian', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							
							<span>地点</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Didian', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>原因</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Yuanyin', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<Select style={{ width: 100 }}>
								<Option value="网银补打票据">网银补打票据</Option>
							</Select>
							<span>网银流水号</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Liushuihao', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
						</Row>
						<Row>
							<span>资信业务</span>
							<Col>
							<span>单位存款证明</span>
							<span>截止日期</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Jiezhiriqi', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>说明</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Shuoming', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<span>预留印鉴业务</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('business', {
								})(
									<Select style={{ width: 100 }}>
										<Option value="印鉴挂失">印鉴挂失</Option>
										<Option value="印鉴解挂">印鉴解挂</Option>
										<Option value="印鉴注销" >印鉴注销</Option>
										<Option value="印鉴变更" >印鉴变更</Option>
									</Select>
								)}
							</FormItem>
							<span>变更原因</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Biangengyuanyin', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<Col>
							<span>注销现有印鉴，建立共用关系</span>
							<span>主账号</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Zhuzhanghao', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<Col>
							<span>新建印鉴，撤销共用关系</span>
							<span>主账号</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Zhuzhanghao', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<Col>
							<span>变更共用关系</span>
							<span>原主账号</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Yuanzhanghao', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							<span>新主账号</span>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('Xinzhanghao', {
								})(
									<Input className={styles.input} />
								)}
							</FormItem>
							</Col>
							<span>变更预留印鉴，新印鉴启用日期</span>
							<div className={styles.date}>
								<FormItem label='' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
									{getFieldDecorator('date', {
										rules: [{ required: true, message: '请输入日期！' }]
									})(
										<DatePicker className={styles.datePicker} />
									)}
								</FormItem>
							</div>
							<FormItem className={styles.formItem}>
								{getFieldDecorator('business', {
								})(
									<Select style={{ width: 100 }}>
										<Option value="我司旧印鉴卡回执联已退回贵行">我司旧印鉴回执联已退回贵行</Option>
										<Option value="我司旧印鉴卡回执联已遗失，未能退回贵行，由此引起的法律、经济纠纷我司全部承担">我司旧印鉴卡回执联已遗失，未能退回贵行，由此引起的法律、经济纠纷我司全部承担</Option>
									</Select>
								)}
							</FormItem>
						</Row>
					</Row>
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
		</div >
	)
};
LuruShenqingshu = connect((state) => {
	return {
		...state.shenqingshu,
	};
})(LuruShenqingshu);

export default create()(LuruShenqingshu);
