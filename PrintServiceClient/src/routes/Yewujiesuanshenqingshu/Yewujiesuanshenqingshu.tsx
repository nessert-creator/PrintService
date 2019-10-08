import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Yewujiesuanshenqingshu({ form, record }) {
	const columns = [
		{
			title: '申请人/名称',
			dataIndex: 'designation'
		},
		{
			title: '账号',
			dataIndex: 'account'
		},
		{
			title: '联系电话',
			dataIndex: 'telephone'
		},
		{
			title: '开户/汇出行',
			dataIndex: 'account1'
		},
		{
			title: '收款人/名称',
			dataIndex: 'designation1'
		},
		{
			title: '账号',
			dataIndex: 'account2'
		},
		{
			title: '省',
			dataIndex: 'provice'

		},
		{
			title: '市',
			dataIndex: 'city'
		},
		{
			title: '开户/汇出行',
			dataIndex: 'account3'
		},
		{
			title: '币种',
			dataIndex: 'currency'
		},
		{
			title: '金额',
			dataIndex: 'money'
		},
		{
			title: '账号',
			dataIndex: 'account4'
		},
		{
			title: '国籍',
			dataIndex: 'nationality'
		},
		{
			title: '证件类型',
			dataIndex: 'type'
		},
		{
			title: '职业',
			dataIndex: 'professional'
		},
		{
			title: '证件号码',
			dataIndex: 'number'
		},
		{
			title: '附加信息',
			dataIndex: 'extra'
		}
	];
	const { getFieldDecorator } = form;
	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 12 }
	};
	const formNode = (
		<Form>
			<FormItem label="名称" {...formCol}>
				{getFieldDecorator('designation', {
					initialValue: record.designation,
					rules: [{ required: true, message: '请填写名称' }]
				})(<Input />)}
			</FormItem>
			<FormItem label="账号" {...formCol}>
				{getFieldDecorator('account', {
					initialValue: record.account
				})(<Input />)}
			</FormItem>
			<FormItem label="联系电话" {...formCol}>
				{getFieldDecorator('telephone', {
					initialValue: record.telephone
				})(<Input />)}
			</FormItem>
			<FormItem label="开户/汇出行" {...formCol}>
				{getFieldDecorator('account1', {
					initialValue: record.account1
				})(<Input />)}
			</FormItem>
			<FormItem label="名称" {...formCol}>
				{getFieldDecorator('designation1', {
					initialValue: record.designation1
				})(<Input />)}
			</FormItem>
			<FormItem label="账号" {...formCol}>
				{getFieldDecorator('account2', {
					initialValue: record.account2
				})(<Input />)}
			</FormItem>
			<FormItem label="省" {...formCol}>
				{getFieldDecorator('provice', {
					initialValue: record.provice
				})(<Input />)}
			</FormItem>
			<FormItem label="市" {...formCol}>
				{getFieldDecorator('city', {
					initialValue: record.city
				})(<Input />)}
			</FormItem>
			<FormItem label="开户/汇出行" {...formCol}>
				{getFieldDecorator('account3', {
					initialValue: record.account3
				})(<Input />)}
			</FormItem>
			<FormItem label="币种" {...formCol}>
				{getFieldDecorator('currency', {
					initialValue: record.currency
				})(<Input />)}
			</FormItem>
			<FormItem label="金额" {...formCol}>
				{getFieldDecorator('money', {
					initialValue: record.money
				})(<Input />)}
			</FormItem>
			<FormItem label="账号" {...formCol}>
				{getFieldDecorator('account4', {
					initialValue: record.account4
				})(<Input />)}
			</FormItem>
			<FormItem label="支付密码" {...formCol}>
				{getFieldDecorator('pay', {
					initialValue: record.pay
				})(<Input />)}
			</FormItem>
			<FormItem label="国籍" {...formCol}>
				{getFieldDecorator('nationality', {
					initialValue: record.nationality
				})(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type', {
					initialValue: record.type
				})(<Input />)}
			</FormItem>
			<FormItem label="职业" {...formCol}>
				{getFieldDecorator('professional', {
					initialValue: record.professional
				})(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number', {
					initialValue: record.number
				})(<Input />)}
			</FormItem>
			<FormItem label="附加信息" {...formCol}>
				{getFieldDecorator('extra', {
					initialValue: record.extra
				})(<Input />)}
			</FormItem>
		</Form>
	);
	const filters = [];

	return (
		<CRUD
			form={form}
			getAllApi={new api.YewujiesuanshenqingshuApi().appYewujiesuanshenqingshuGetAll}
			deleteApi={new api.YewujiesuanshenqingshuApi().appYewujiesuanshenqingshuDelete}
			updateApi={new api.YewujiesuanshenqingshuApi().appYewujiesuanshenqingshuUpdate}
			createApi={new api.YewujiesuanshenqingshuApi().appYewujiesuanshenqingshuCreate}
			columns={columns}
			formNode={formNode}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}
Yewujiesuanshenqingshu = connect((state) => {
	return {
		...state.crud
	};
})(Yewujiesuanshenqingshu);
export default create()(Yewujiesuanshenqingshu);
