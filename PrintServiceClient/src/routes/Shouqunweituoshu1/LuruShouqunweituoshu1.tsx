import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, DatePicker, Checkbox, Select, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruShouqunweituoshu1.css';
import TextArea from 'antd/lib/input/TextArea';
import { COLLECTION_FORMATS } from '../../api/api';
const Option = Select.Option;


function LuruShouqunweituoshu1({ dispatch, form }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);

			let data = {
				"bankName": values.bankName,
				"name": values.name,
				"idType": values.idType,
				"idNumber": values.idNumber,
				"post": values.post,
				"phone": values.phone,
				"name1": values.name1,
				"name2": values.name2,
				"idNumber2": values.idNumber2,
				"name3": values.name3,
				"idNumber3": values.idNumber3,
				"phone3": values.phone3,
				"business4": values.business4
			};
			if (!err) {
				dispatch({
					type: 'shouqunweituoshu1/creatShouqunweituoshu1',
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
								"bankName": values.bankName,
								"name": values.name,
								"idType": values.idType,
								"idNumber": values.idNumber,
								"post": values.post,
								"phone": values.phone,
								"name1": values.name1,
								"name2": values.name2,
								"idNumber2": values.idNumber2,
								"name3": values.name3,
								"idNumber3": values.idNumber3,
								"phone3": values.phone3,
								"business4": values.business4
							};

							dispatch({
									type: "print/printShouqunweituoshu1",
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
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>授权委托书（一）</Row>
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
						<span>中信银行</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('bankName', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
					</Row>
					<Row>
						兹对我单位在贵行办理账户义务及日常结算业务中相关事宜做如下授权：
					</Row>
					<Row>
						<span>(一)授权</span>
						<FormItem className={styles.formItem} >
							{getFieldDecorator('name', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>(先生/女士)</span>
						<span>证件种类:</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {
							})(
								<Select style={{ width: 200 }}>
									<Option value="居民身份证">居民身份证</Option>
									<Option value="临时身份证">临时身份证</Option>
									<Option value="中国护照" >中国护照</Option>
									<Option value="户口簿(仅供未满16周岁客户)">户口簿(仅供未满16周岁客户)</Option>
									<Option value="军官证" >军官证</Option>
									<Option value="武警证" >武警证</Option>
									<Option value="港澳居民来往内地通行证" >港澳居民来往内地通行证</Option>
									<Option value="台湾居民来往大陆通行证" >台湾居民来往大陆通行证</Option>
									<Option value="外国人永久居留身份证" >外国人永久居留身份证</Option>
									<Option value="边民出入境通行证" >边民出入境通行证</Option>
									<Option value="外国护照" >外国护照</Option>
								</Select>
							)}
						</FormItem>
						<span>证件号码：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idNumber', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>职务：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('post', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>办理账户</span>

						<FormItem className={styles.formItem}>
							{getFieldDecorator('business', {
							})(
								<Select style={{ width: 100 }}>
									<Option value="开户">开户</Option>
									<Option value="销户">销户</Option>
									<Option value="变更" >变更</Option>
								</Select>
							)}
						</FormItem>
						<span>业务</span>
					</Row>
					<Row>
						<span>(二)授权使用</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('name1', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>个人名章为我单位预留银行印鉴，预留名章样式如下：（盖章）</span>
					</Row>
					<Row>
						<span>(三)授权</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('name2', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>(先生/女士)</span>
						<span>身份证号码：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idNumber2', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span >办理单位结算凭证及支付密码的购买。授权</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('name3', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span >(先生/女士)</span>
						<span>身份证号码：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idNumber3', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span>联系电话:</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('phone3', {
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<span >办理单位大额出款电话核实。</span>
					</Row>
					<Row>
						<span>(四)办理变更后，原授权事项：</span>

						<FormItem className={styles.formItem}>
							{getFieldDecorator('business4', {
							})(
								<Select style={{ width: 100 }}>
									<Option value="并行">并行</Option>
									<Option value="废止">废止</Option>
								</Select>
							)}
						</FormItem>
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
LuruShouqunweituoshu1 = connect((state) => {
	return {
		...state.shouqunweituoshu1,
	};
})(LuruShouqunweituoshu1);

export default create()(LuruShouqunweituoshu1);
