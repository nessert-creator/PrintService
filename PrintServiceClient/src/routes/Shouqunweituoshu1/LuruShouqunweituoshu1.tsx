import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, DatePicker, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruShouqunweituoshu1.css';
import TextArea from 'antd/lib/input/TextArea';
import { COLLECTION_FORMATS } from '../../api/api';


function LuruShouqunweituoshu1({ dispatch, form }) {
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
					type: 'shouqunweituoshu1/creatShouqunweituoshu1',
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
					<Row className={styles.title}>授权委托书（一）</Row>
				</header>
				<Form onSubmit={handleSubmit}>
					<Row className={styles.xia}>
						<div className={styles.fudong}>中信银行</div>
						<FormItem>
							{getFieldDecorator('bankName', {
							})(
								<Input className={styles.kuan} />
							)}
						</FormItem>
					</Row>
					<Row>
						<span>兹对我单位在贵行办理账户义务及日常结算业务中相关事宜做如下授权：</span>
					</Row>
					<Row>
						<span><p className={styles.fudong}>(一)授权</p>
							<p className={`${styles.fudong} ${styles.xia}`}>(先生/女士)</p>
							<FormItem >
								{getFieldDecorator('name', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>证件种类:</p>
							<FormItem>
								{getFieldDecorator('idType', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>证件号码：</p>
							<FormItem>
								{getFieldDecorator('idNumber', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>职务：</p>
							<FormItem>
								{getFieldDecorator('Post', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p>办理业务：</p>
							<Checkbox>开户</Checkbox>
							<Checkbox>销户</Checkbox>
							<Checkbox>变更</Checkbox>
						</span>
					</Row>
					<Row>
						<span>
							<p className={`${styles.fudong} ${styles.xia}`}>(二)授权使用</p>
							<FormItem>
								{getFieldDecorator('name', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p>个人名章为我单位预留银行印鉴，预留名章样式如下：（盖章）</p>
						</span>
					</Row>
					<Row>
						<span>
							<p className={styles.fudong}>(三)授权</p>

							<p className={`${styles.fudong} ${styles.xia}`}>(先生/女士)</p>
							<FormItem>
								{getFieldDecorator('name', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>身份证号码：</p>
							<FormItem>
								{getFieldDecorator('idNumber', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={styles.fudong}>办理单位结算凭证及支付密码的购买。授权</p>
							<p className={styles.fudong}>(先生/女士)</p>
							<FormItem>
								{getFieldDecorator('name', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>身份证号码：</p>
							<FormItem>
								{getFieldDecorator('idNumber', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>联系电话:</p>
							<FormItem>
								{getFieldDecorator('phone', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={styles.fudong}>办理单位大额出款电话核实。</p>
						</span>
					</Row>
					<Row>
						<span>
							<p>(四)办理变更后，原授权事项：</p>
							<Checkbox>并行</Checkbox>
							<Checkbox>废止</Checkbox>
							<p>授权单位（公章）：</p>
							<p>法定代表人/单位负责人：<br />
								（盖章）</p>
						</span>
					</Row>
					<FormItem style={{
						marginLeft: '335px',
						width: '120px'
					}}>
						{getFieldDecorator('date', {
						})(
							<DatePicker />
						)}
					</FormItem>
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
