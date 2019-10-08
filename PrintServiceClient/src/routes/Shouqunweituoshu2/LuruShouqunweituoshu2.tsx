import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, DatePicker, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruShouqunweituoshu2.css';
import TextArea from 'antd/lib/input/TextArea';
import { COLLECTION_FORMATS } from '../../api/api';


function LuruShouqunweituoshu2({ dispatch, form }) {
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
					type: 'shouqunweituoshu2/creatShouqunweituoshu2',
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
					<Row className={styles.title}>授权委托书（二）</Row>
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
						<span>
							<p className={`${styles.fudong} ${styles.xia}`}>我单位授权</p>
							<FormItem >
								{getFieldDecorator('name', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
							<p className={`${styles.fudong} ${styles.xia}`}>证件类型:</p>
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
							<p className={`${styles.fudong} ${styles.xia}`}>部门：</p>
							<FormItem>
								{getFieldDecorator('Department', {
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
							<p>前往贵行办理：</p>
							<p>1、电子对账</p>
							<Checkbox>增加/开立</Checkbox>
							<Checkbox>变更</Checkbox>
							<Checkbox>删除/注销</Checkbox>
							<Checkbox>密码重置</Checkbox>
							<Checkbox>密码解锁</Checkbox>
							<p>2、自助回单卡</p>
							<Checkbox>签约</Checkbox>
							<Checkbox>解约</Checkbox>
							<Checkbox>换卡/补卡</Checkbox>
							<Checkbox>密码重置</Checkbox>
							<Checkbox>新增账号</Checkbox>
							<p>3、单位金融短信通</p>
							<Checkbox>签约</Checkbox>
							<Checkbox>撤销</Checkbox>
							<Checkbox>修改</Checkbox>
							<p>4、理财产品</p>
							<Checkbox>购买</Checkbox>
							<Checkbox>赎回</Checkbox>
							<Checkbox>风险评估</Checkbox>
							<p>5、结构性存款</p>
							<Checkbox>购买</Checkbox>
							<Checkbox>到期冻结</Checkbox>
							<p>6、大额存单</p>
							<Checkbox>购买</Checkbox>
							<Checkbox>到期冻结</Checkbox>
							<p>7、单位存款证实书</p>
							<Checkbox>质押换开</Checkbox>
							<Checkbox>补发</Checkbox>
							<p>8、单位定期存单</p>
							<Checkbox>撤押更换</Checkbox>
							<p>9、开立存算资信证明</p>
							<p className={`${styles.fudong} ${styles.xia}`}>10、其他</p>
							<FormItem>
								{getFieldDecorator('Other', {
								})(
									<Input className={styles.kuan} />
								)}
							</FormItem>
						</span>
					</Row>
					<Row>
						<span>
							<p>法定代表人/单位负责人：<br />
								（盖章）</p>
						</span>
					</Row>
					<Row>
						<span>授权单位（公章）：</span>
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
LuruShouqunweituoshu2 = connect((state) => {
	return {
		...state.shouqunweituoshu2,
	};
})(LuruShouqunweituoshu2);

export default create()(LuruShouqunweituoshu2);
