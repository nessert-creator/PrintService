import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;

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
				"name1": "values.",
				"certificatetype1": values.certificatetype1,
				"idnumber1": 0,
				"contactnumber1": values.contactnumber1,
				};
				
				if(!err) {
					dispatch({
						type: 'role/createOrUpdateRole',
						payload: data
					});
				}
			});
	}
	return (
		<div>
			<div >
				<header >
					<span>中信银行公司电子银行业务代理授权表</span>
				</header>
				<section>
					<span>操作人员用户授权代理人到柜台领取USB Key或/和密码信函时填写</span>
					<Form onSubmit={handleSubmit} >
						<FormItem>
							<span>客户名称:</span>
							{getFieldDecorator('customername', {
								rules: [{ required: true, message: '请输入客户名称！' }]
							})(
								<Input />
							)}
						</FormItem>
						<span>委托人信息</span>
						<FormItem>
							<span>姓名:</span>
							{getFieldDecorator('name', {
								rules: [{ required: true, message: '请输入姓名！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>证件类型:</span>
							{getFieldDecorator('certificatetype', {
								rules: [{ required: true, message: '请输入证件类型！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>证件号码:</span>
							{getFieldDecorator('idnumber', {
								rules: [{ required: true, message: '请输入证件号码！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>联系电话:</span>
							{getFieldDecorator(' contactnumber', {
								rules: [{ required: true, message: '请输入联系电话！' }]
							})(
								<Input />
							)}
						</FormItem>
						<span>代理人信息</span>
						<FormItem>
							<span>姓名:</span>
							{getFieldDecorator('name1', {
								rules: [{ required: true, message: '请输入姓名！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>证件类型:</span>
							{getFieldDecorator('certificatetype1', {
								rules: [{ required: true, message: '请输入证件类型！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>证件号码:</span>
							{getFieldDecorator('idnumber1', {
								rules: [{ required: true, message: '请输入证件号码！' }]
							})(
								<Input />
							)}
						</FormItem>
						<FormItem>
							<span>联系电话:</span>
							{getFieldDecorator(' contactnumber1', {
								rules: [{ required: true, message: '请输入联系电话！' }]
							})(
								<Input />
							)}
						</FormItem>
						<Button type="primary" htmlType="submit">
							注册
					</Button>
					</Form>
				</section>
			</div>
		</div>
	);
}
LuruYwdlsqbiao = connect((state) => {
	return {

	};
})(LuruYwdlsqbiao);

export default create()(LuruYwdlsqbiao);

