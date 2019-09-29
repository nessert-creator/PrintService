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
			dataIndex: 'designation',
			sorter: true
		},
		{
			title: '账号',
			dataIndex: 'account',
			sorter: true
		},
		{
			title: '联系电话',
			dataIndex: 'telephone',
			sorter: true,
			
		},
		{
			title: '开户/汇出行',
			dataIndex: 'account1',
			sorter: true
		},
		{
			title: '收款人/名称',
			dataIndex: 'designation1',
			sorter: true
		},
		{
			title: '账号',
			dataIndex: 'account2',
			sorter: true
		},
		{
			title: '地址',
			dataIndex: 'address',
			sorter: true,
			
		},
		{
			title: '开户/汇出行',
			dataIndex: 'account3',
			sorter: true,
			
		},
		{
			title: '币种',
			dataIndex: 'currency',
			sorter: true,
			
		},
		{
			title: '金额',
			dataIndex: 'currency',
			sorter: true,
			
		},
		{
			title: '账号',
			dataIndex: 'account4',
			sorter: true,
			
		},
		{
			title: '支付密码',
			dataIndex: 'pay',
			sorter: true,
			
		},
		{
			title: '国籍',
			dataIndex: 'nationality',
			sorter: true,
			
		},
		{
			title: '证件类型',
			dataIndex: 'type',
			sorter: true,
			
		},
		{
			title: '职业',
			dataIndex: 'professional',
			sorter: true,
			
		},
		{
			title: '证件号码',
			dataIndex: 'number',
			sorter: true,
			
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
					rules: [ { required: true, message: '请填写名称' } ]
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
					initialValue: record.account1 && record.account1
				})(<Input />)}
			</FormItem>
			<FormItem label="名称" {...formCol}>
				{getFieldDecorator('designation1', {
					initialValue: record.designation1 && record.designation1
				})(<Input />)}
			</FormItem>
			<FormItem label="账号" {...formCol}>
				{getFieldDecorator('account2', {
					initialValue: record.account2 && record.account2
				})(<Input />)}
			</FormItem>
            <FormItem label="地址" {...formCol}>
				{getFieldDecorator('addiess', {
					initialValue: record.address && record.address
				})(<Input />)}
			</FormItem>
            <FormItem label="开户/汇出行" {...formCol}>
				{getFieldDecorator('account3', {
					initialValue: record.account3 && record.account3
				})(<Input />)}
			</FormItem>
            <FormItem label="币种" {...formCol}>
				{getFieldDecorator('currency', {
					initialValue: record.currency && record.currency
				})(<Input />)}
			</FormItem>
            <FormItem label="金额" {...formCol}>
				{getFieldDecorator('money', {
					initialValue: record.money && record.money
				})(<Input />)}
			</FormItem>
            <FormItem label="账号" {...formCol}>
				{getFieldDecorator('account4', {
					initialValue: record.account4 && record.account4
				})(<Input />)}
			</FormItem>
            <FormItem label="支付密码" {...formCol}>
				{getFieldDecorator('pay', {
					initialValue: record.pay && record.pay
				})(<Input />)}
			</FormItem>
            <FormItem label="国籍" {...formCol}>
				{getFieldDecorator('nationality', {
					initialValue: record.nationality && record.nationality
				})(<Input />)}
			</FormItem>
            <FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type', {
					initialValue: record.type && record.type
				})(<Input />)}
			</FormItem>
            <FormItem label="职业" {...formCol}>
				{getFieldDecorator('professional', {
					initialValue: record.professional && record.professional
				})(<Input />)}
			</FormItem>
            <FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number', {
					initialValue: record.number && record.number
				})(<Input />)}
			</FormItem>
		</Form>
	);
	const filters = [
		{
			name: 'name',
			displayName: '名称',
			option: 'like'
		},
		{
			name: 'creationTime',
			displayName: '添加时间',
			type: 'datetime',
			option: '>='
		},
		{
			name: 'creationTime',
			displayName: '',
			type: 'datetime',
			option: '<'
		}
	];

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
