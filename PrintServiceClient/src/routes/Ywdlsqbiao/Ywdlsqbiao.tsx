import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Ywdlsqbiao({ form, record }) {
	const columns = [
		{
			title: '委托人信息',
			dataIndex: 'Clientinformation',
			sorter: true
		},
		{
			title: '客户名称',
			dataIndex: 'customername',
			sorter: true
		},
		{
			title: '姓名',
			dataIndex: 'name',
			sorter: true
		},
		{
			title: '证件类型',
			dataIndex: 'certificatetype',
			sorter: true,
			
		},
		{
			title: '证件号码',
			dataIndex: 'idnumber',
			sorter: true
		},
		{
			title: '联系电话',
			dataIndex: 'contactnumber',
			sorter: true
		},
		{
			title: '代理人信息',
			dataIndex: 'Agentinformation',
			sorter: true
		},
		{
			title: '姓名',
			dataIndex: 'name1',
			sorter: true
		},
		{
			title: '证件类型',
			dataIndex: 'certificatetype1',
			sorter: true,
			
		},
		{
			title: '证件号码',
			dataIndex: 'idnumber1',
			sorter: true,
			
		},
		{
			title: '联系电话',
			dataIndex: 'contactnumber1',
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
			<FormItem label="客户名称" {...formCol}>
				{getFieldDecorator('customername', {
					initialValue: record.customername,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name', {
					initialValue: record.name,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('certificatetype', {
					initialValue: record.certificatetype,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('idnumber', {
					initialValue: record.idnumber,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="联系电话" {...formCol}>
				{getFieldDecorator('contactnumber', {
					initialValue: record.contactnumber,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name1', {
					initialValue: record.name1,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('certificatetype1', {
					initialValue: record.certificatetype1,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('idnumber1', {
					initialValue: record.idnumber1,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="联系电话" {...formCol}>
				{getFieldDecorator('contactnumber1', {
					initialValue: record.contactnumber1,
					rules: [ { required: true, message: '请填写名称' } ]
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
	];

	return (
		<CRUD
			form={form}
			getAllApi={new api.YwdlsqbiaoApi().appYwdlsqbiaoGetAll}
			deleteApi={new api.YwdlsqbiaoApi().appYwdlsqbiaoDelete}
			updateApi={new api.YwdlsqbiaoApi().appYwdlsqbiaoUpdate}
			createApi={new api.YwdlsqbiaoApi().appYwdlsqbiaoCreate}
			deleteBatchApi={new api.DemoApi().appYwdlsqbiaoDeleteBatch}
			columns={columns}
			formNode={formNode}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}

Ywdlsqbiao = connect((state) => {
	return {
		...state.crud
	};
})(Ywdlsqbiao);
export default create()(Ywdlsqbiao);
