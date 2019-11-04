import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Jiangzhangdan({ form, record }) {
    const columns = [
        {
            title: '年',
            dataIndex: 'year'
        },
        {
            title: '月',
            dataIndex: 'month'
        },
        {
            title: '日',
            dataIndex: 'day'
        },
        {
            title: '出票人全称',
            dataIndex: 'chupiaorenqc'
        },
        {
            title: '出票人账号',
            dataIndex: 'chupiaorenzh'
        },
        {
            title: '出票人开户银行',
            dataIndex: 'chupiaorenkhyh'
        },
        {
            title: '收款人全称',
            dataIndex: 'shoukuanrenqc'
        },
        {
            title: '收款人账号',
            dataIndex: 'shoukuanrenzh'
        },
        {
            title: '收款人开户银行',
            dataIndex: 'shoukuanrenkhyh'
        },
        {
            title: '人民币',
            dataIndex: 'renminbi'
        },
        {
            title: '票据种类',
            dataIndex: 'piaojuzhonglei'
        },
        {
            title: '票据张数',
            dataIndex: 'piaojuzhangshu'
        },
        {
            title: '票据号码',
            dataIndex: 'piaojuhaoma'
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
                    rules: [{ required: true, message: '请填写名称' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="月" {...formCol}>
                {getFieldDecorator('month', {
                    initialValue: record.month
                })(<Input />)}
            </FormItem>
            <FormItem label="日" {...formCol}>
                {getFieldDecorator('day', {
                    initialValue: record.day,
                })(<Input />)}
            </FormItem>
            <FormItem label="出票人全称" {...formCol}>
                {getFieldDecorator('chupiaorenqc', {
                    initialValue: record.chupiaorenqc
                })(<Input />)}
            </FormItem>
            <FormItem label="出票人账号" {...formCol}>
                {getFieldDecorator('chupiaorenzh', {
                    initialValue: record.chupiaorenzh
                })(<Input />)}
            </FormItem>
            <FormItem label="出票人开户银行" {...formCol}>
                {getFieldDecorator('chupiaorenkhyh', {
                    initialValue: record.chupiaorenkhyh,
                })(<Input />)}
            </FormItem>
            <FormItem label="收款人全称" {...formCol}>
                {getFieldDecorator('shoukuanrenqc', {
                    initialValue: record.shoukuanrenqc
                })(<Input />)}
            </FormItem>
            <FormItem label="收款人账号" {...formCol}>
                {getFieldDecorator('shoukuanrenzh', {
                    initialValue: record.shpoupiaorenzh
                })(<Input />)}
            </FormItem>
            <FormItem label="收款人开户银行" {...formCol}>
                {getFieldDecorator('shoukuanrenkhyh', {
                    initialValue: record.shoukuanrenkhyh,
                })(<Input />)}
            </FormItem>
            <FormItem label="人民币" {...formCol}>
                {getFieldDecorator('renminbi', {
                    initialValue: record.renminbi,
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="票据种类" {...formCol}>
                {getFieldDecorator('piaojuzhonglei', {
                    initialValue: record.piaojuzhonglei
                })(<Input />)}
            </FormItem>
            <FormItem label="票据张数" {...formCol}>
                {getFieldDecorator('piaojuzhangshu', {
                    initialValue: record.piaojuzhangshu
                })(<Input />)}
            </FormItem>
            <FormItem label="票据号码" {...formCol}>
                {getFieldDecorator('piaojuhaoma', {
                    initialValue: record.piaojuhaoma,
                })(<Input />)}
            </FormItem>
        </Form>
    );
    const filters = [
        {
            name: 'chupiaorenqc',
            displayName: '出票人全称',
            option: 'like'
        },
        {
            name: 'shoukuanrenqc',
            displayName: '收款人全称',
            option: 'like'
        }];

    return (
        <CRUD
            form={form}
            getAllApi={new api.JingzhangdanApi().appJingzhangdanGetAll}
            deleteApi={new api.JingzhangdanApi().appJingzhangdanDelete}
            updateApi={new api.JingzhangdanApi().appJingzhangdanUpdate}
            createApi={new api.JingzhangdanApi().appJingzhangdanCreate}
            columns={columns}
            formNode={formNode}
            customColumnOption={(text, record) => (
				
				<span>
					<a onClick={() => {
						dispatch({
							type:"print/printJinzhangdan",
							payload:record
						})
					}}>
						打印
					</a>
				<span style={{marginLeft:'6px'}} /></span>
			)}
            filterProps={{
                filters,
                searchProvide: 'sql'
            }}
        />
    );
}

Jiangzhangdan = connect((state) => {
    return {
        ...state.crud
    };
})(Jiangzhangdan);
export default create()(Jiangzhangdan);
