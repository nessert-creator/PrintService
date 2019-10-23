import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Shenqingshu({ form, record }) {
    const columns = [
        {
            title: '户名',
            dataIndex: 'AccountName',
            sorter: true
        },
        {
            title: '账号',
            dataIndex: 'AccountNumber',
            sorter: true
        },
        {
            title: '币种及金额（大写）',
            dataIndex: 'Money',
            sorter: true,
        },
        {
            title: '提前支取,转入单位/内部账号',
            dataIndex: 'Account',
            sorter: true
        },
        {
            title: '支取日',
            dataIndex: 'WithdrawalDate',
            sorter: true
        },
        {
            title: '取消取款通知原通知编号',
            dataIndex: 'Number',
            sorter: true
        },
        {
            title: '凭证号码',
            dataIndex: 'VoucherNumber',
            sorter: true
        },
        {
            title: '网银流水号',
            dataIndex: 'Liushuihao',
            sorter: true
        },
        {
            title: '票据种类',
            dataIndex: 'Zhonglei',
            sorter: true
        },
        {
            title: '票据号码',
            dataIndex: 'Haoma',
            sorter: true
        },
        {
            title: '金额',
            dataIndex: 'Jianer',
            sorter: true
        },
        {
            title: '收款人名称',
            dataIndex: 'Shoukuanren',
            sorter: true
        },
        {
            title: '出票日期',
            dataIndex: 'Chupiaoriqi',
            sorter: true
        },
        {
            title: '票据到期日',
            dataIndex: 'Daoqiri',
            sorter: true
        },
        {
            title: '票据丧失时间',
            dataIndex: 'Sangshishijian',
            sorter: true
        },
        {
            title: '地点',
            dataIndex: 'Didian',
            sorter: true
        },
        {
            title: '原因',
            dataIndex: 'Yuanyin',
            sorter: true
        },
        {
            title: '截止日期',
            dataIndex: 'Jiezhiriqi',
            sorter: true
        },
        {
            title: '说明',
            dataIndex: 'Shuoming',
            sorter: true
        },
        {
            title: '变更原因',
            dataIndex: 'Biangengyuanyin',
            sorter: true
        },
        {
            title: '主账号',
            dataIndex: 'Zhuzhanghao',
            sorter: true
        },
        {
            title: '原主账号',
            dataIndex: 'Yuanzhanghao',
            sorter: true
        },
        {
            title: '新主账号',
            dataIndex: 'Xinzhanghao',
            sorter: true
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (
        <Form>
            <FormItem label="户名" {...formCol}>
                {getFieldDecorator('AccountName', {
                    initialValue: record.AccountName,
                    rules: [{ required: true, message: '请填写户名' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="账号" {...formCol}>
                {getFieldDecorator('AccountNumber', {
                    initialValue: record.AccountNumber,
                    rules: [{ required: true, message: '请填写账号' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="币种及金额（大写）" {...formCol}>
                {getFieldDecorator('Money', {
                    initialValue: record.Money,
                    rules: [{ required: true, message: '请填写金额' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="提前支取,转入单位/内部账号" {...formCol}>
                {getFieldDecorator('Account', {
                    initialValue: record.Account
                })(<Input />)}
            </FormItem>
            <FormItem label="支取日" {...formCol}>
                {getFieldDecorator('WithdrawalDate', {
                    initialValue: record.WithdrawalDate
                })(<Input />)}
            </FormItem>
            <FormItem label="取消取款通知原通知编号" {...formCol}>
                {getFieldDecorator('Number', {
                    initialValue: record.Number,
                })(<Input />)}
            </FormItem>
            <FormItem label="凭证号码" {...formCol}>
                {getFieldDecorator('VoucherNumber', {
                    initialValue: record.VoucherNumber,
                })(<Input />)}
            </FormItem>
            <FormItem label="网银流水号" {...formCol}>
                {getFieldDecorator('Liushuihao', {
                    initialValue: record.Liushuihao,
                })(<Input />)}
            </FormItem>
            <FormItem label="票据种类" {...formCol}>
                {getFieldDecorator('Zhonglei', {
                    initialValue: record.Zhonglei,
                })(<Input />)}
            </FormItem>
            <FormItem label="票据号码" {...formCol}>
                {getFieldDecorator('Haoma', {
                    initialValue: record.Haoma,
                })(<Input />)}
            </FormItem>
            <FormItem label="金额" {...formCol}>
                {getFieldDecorator('Jianer', {
                    initialValue: record.feiZhi,
                })(<Input />)}
            </FormItem>
            <FormItem label="收款人名称" {...formCol}>
                {getFieldDecorator('Shoukuanren', {
                    initialValue: record.Shoukuanren,
                })(<Input />)}
            </FormItem>
            <FormItem label="出票日期" {...formCol}>
                {getFieldDecorator('Chupiaoriqi', {
                    initialValue: record.Chupiaoriqi,
                })(<Input />)}
            </FormItem>
            <FormItem label="票据到期日" {...formCol}>
                {getFieldDecorator('Daoqiri', {
                    initialValue: record.Daoqiri,
                })(<Input />)}
            </FormItem>
            <FormItem label="票据丧失时间" {...formCol}>
                {getFieldDecorator('Sangshishijian', {
                    initialValue: record.feiZhi,
                })(<Input />)}
            </FormItem>
            <FormItem label="地点" {...formCol}>
                {getFieldDecorator('Didian', {
                    initialValue: record.Didian,
                })(<Input />)}
            </FormItem>
            <FormItem label="原因" {...formCol}>
                {getFieldDecorator('Yuanyin', {
                    initialValue: record.Yuanyin,
                })(<Input />)}
            </FormItem>
            <FormItem label="截止日期" {...formCol}>
                {getFieldDecorator('Jiezhiriqi', {
                    initialValue: record.Jiezhiriqi,
                })(<Input />)}
            </FormItem>
            <FormItem label="说明" {...formCol}>
                {getFieldDecorator('Shuoming', {
                    initialValue: record.Shuoming,
                })(<Input />)}
            </FormItem>
            <FormItem label="变更原因" {...formCol}>
                {getFieldDecorator('Biangengyuanyin', {
                    initialValue: record.Biangengyuanyin,
                })(<Input />)}
            </FormItem>
            <FormItem label="主账号" {...formCol}>
                {getFieldDecorator('Zhuzhanghao', {
                    initialValue: record.Zhuzhanghao,
                })(<Input />)}
            </FormItem>
            <FormItem label="原主账号" {...formCol}>
                {getFieldDecorator('Xinzhanghao', {
                    initialValue: record.Xinzhanghao,
                })(<Input />)}
            </FormItem>
            <FormItem label="新主账号" {...formCol}>
                {getFieldDecorator('Yuanzhanghao', {
                    initialValue: record.Yuanzhanghao,
                })(<Input />)}
            </FormItem>
        </Form>
    );
    const filters = [
        {
            name: 'AccountName',
            displayName: '户名',
            option: 'like'
        },
        {
            name: 'AccountNumber',
            displayName: '账号',
            option: 'like'
        },
        {
            name: 'Money',
            displayName: '币种及金额（大写）',
            option: 'like'
        },
        {
            name: 'Account',
            displayName: '提前支取,转入单位/内部账号',
            option: 'like'
        },
        {
            name: 'WithdrawalDate',
            displayName: '支取日',
            option: 'like'
        },
        {
            name: 'Number',
            displayName: '取消取款通知原通知编号',
            option: 'like'
        },
        {
            name: 'VoucherNumber',
            displayName: '凭证号码',
            option: 'like'
        },
        {
            name: 'Liushuihao',
            displayName: '网银流水号',
            option: 'like'
        },
        {
            name: 'Zhonglei',
            displayName: '票据种类',
            option: 'like'
        },
        {
            name: 'Haoma',
            displayName: '票据号码',
            option: 'like'
        },
        {
            name: 'Jianer',
            displayName: '金额',
            option: 'like'
        },
        {
            name: 'Shoukuanren',
            displayName: '收款人名称',
            option: 'like'
        },
        {
            name: 'Chupiaoriqi',
            displayName: '出票日期',
            option: 'like'
        },
        {
            name: 'Daoqiri',
            displayName: '票据到期日',
            option: 'like'
        },
        {
            name: 'Sangshishijian',
            displayName: '票据丧失时间',
            option: 'like'
        },
        {
            name: 'Didian',
            displayName: '地点',
            option: 'like'
        },
        {
            name: 'Yuanyin',
            displayName: '原因',
            option: 'like'
        },
        {
            name: 'Jiezhiriqi',
            displayName: '截止日期',
            option: 'like'
        },
        {
            name: 'Shuoming',
            displayName: '说明',
            option: 'like'
        },
        {
            name: 'Biangengyuanyin',
            displayName: '变更原因',
            option: 'like'
        },
        {
            name: 'Zhuzhanghao',
            displayName: '主账号',
            option: 'like'
        },
        {
            name: 'Yuanzhanghao',
            displayName: '原主账号',
            option: 'like'
        },
        {
            name: 'Xinzhanghao',
            displayName: '新主账号',
            option: 'like'
        },
    ];

    return (
        <CRUD
            form={form}
            getAllApi={new api.ShenqingshuApi().appShenqingshuGetAll}
            deleteApi={new api.ShenqingshuApi().appShenqingshuDelete}
            updateApi={new api.ShenqingshuApi().appShenqingshuUpdate}
            createApi={new api.ShenqingshuApi().appShenqingshuCreate}
            columns={columns}
            formNode={formNode}

            customColumnOption={(text, record) => (
                <span>
                    <a onClick={() => {

                        dispatch({
                            type: "print/printShenqingshu",
                            payload:record
                        })
                    }}
                    >
                        打印
            </a>
                    <span style={{ marginLeft: '6px' }} />
                </ span >
            )}
            filterProps={{
                filters,
                searchProvide: 'sql'
            }}
        />
    );
}

Shenqingshu = connect((state) => {
    return {
        ...state.crud
    };
})(Shenqingshu);
export default create()(Shenqingshu);
