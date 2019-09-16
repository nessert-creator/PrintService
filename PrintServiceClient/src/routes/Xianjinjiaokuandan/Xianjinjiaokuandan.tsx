import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Xianjinjiaokuandan({ form, record }) {
	const columns = [
		{
			title: '年',
			dataIndex: 'year',
			sorter: true
		},
		{
			title: '月',
			dataIndex: 'month',
			sorter: true
		},
		{
			title: '日',
			dataIndex: 'day',
			sorter: true,
		},
		{
			title: '收款单位',
			dataIndex: 'shoukuandanwei',
			sorter: true
		},
		{
			title: '开户行',
			dataIndex: 'kaihuhang',
			sorter: true
		},
		{
			title: '收款账号',
			dataIndex: 'shoukuanzhanghao',
			sorter: true,
		},
		{
			title: '摘要',
			dataIndex: 'zhaiyao',
			sorter: true,
		},
		{
			title: '币种及金额',
			dataIndex: 'bizhongjijine',
			sorter: true,
		},
		{
			title: '银行专用栏',
			dataIndex: 'yinhangzhuanyonglan',
			sorter: true,
		},
	];
	const { getFieldDecorator } = form;
	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 12 }
	};
	const formNode = (
		<Form>
			<FormItem label="年" {...formCol}>
				{getFieldDecorator('year', {
					initialValue: record.year,
					rules: [ { required: true, message: '请填写名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="月" {...formCol}>
				{getFieldDecorator('month', {
					initialValue: record.month,
				})(<Input />)}
			</FormItem>
			<FormItem label="日" {...formCol}>
				{getFieldDecorator('day', {
					initialValue: record.day,
				})(<Input />)}
			</FormItem>
			<FormItem label="收款单位" {...formCol}>
				{getFieldDecorator('shoukuandanwei', {
					initialValue: record.shoukuandanwei,
				})(<Input />)}
			</FormItem>
			<FormItem label="开户行" {...formCol}>
				{getFieldDecorator('kaihuhang', {
					initialValue: record.kaihuhang,
				})(<Input />)}
			</FormItem>
			<FormItem label="收款账号" {...formCol}>
				{getFieldDecorator('shoukuanzhanghao', {
					initialValue: record.shoukuanzhanghao,
				})(<Input />)}
			</FormItem>
			<FormItem label="摘要" {...formCol}>
				{getFieldDecorator('zhaiyao', {
					initialValue: record.zhaiyao,
				})(<Input />)}
			</FormItem>
			<FormItem label="币种及金额" {...formCol}>
				{getFieldDecorator('bizhongjijine', {
					initialValue: record.bizhongjijine,
				})(<Input />)}
			</FormItem>
			<FormItem label="银行专用栏" {...formCol}>
				{getFieldDecorator('yinhangzhuanyonglan', {
					initialValue: record.yinhangzhuanyonglan,
				})(<Input />)}
			</FormItem>
		</Form>
	);
	const filters = [
		{
			name: '年',
			displayName: 'year',
			option: 'like'
		},
		{
			name: '月',
			displayName: 'month',
			option: 'like'
		},
		{
			name: '日',
			displayName: 'day',
			option: 'like'
		},
	];

	return (
		<CRUD
			form={form}
			getAllApi={new api.XianjinjiaokuandanApi().appXianjinjiaokuandanGetAll}
			deleteApi={new api.XianjinjiaokuandanApi().appXianjinjiaokuandanDelete}
			updateApi={new api.XianjinjiaokuandanApi().appXianjinjiaokuandanUpdate}
			createApi={new api.XianjinjiaokuandanApi().appXianjinjiaokuandanCreate}
			columns={columns}
			formNode={formNode}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}

Xianjinjiaokuandan = connect((state) => {
	return {
		...state.crud
	};
})(Xianjinjiaokuandan);
export default create()(Xianjinjiaokuandan);
