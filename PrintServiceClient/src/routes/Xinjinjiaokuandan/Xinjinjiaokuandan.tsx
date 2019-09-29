import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Xinjinjiaokuandan({ form, record }) {
    const columns = [
        {
            title: '年',
            dataIndex: 'nian',
            sorter: true
        },
        {
            title: '月',
            dataIndex: 'yue',
            sorter: true
        },
        {
            title: '日',
            dataIndex: 'ri',
            sorter: true
        },
        {
            title: '收款单位',
            dataIndex: 'accountName',
            sorter: true
        },
        {
            title: '收款账号',
            dataIndex: 'accountNumber',
            sorter: true
        },
        {
            title: '开户行',
            dataIndex: 'openingBank',
            sorter: true,
        },
        {
            title: '摘要',
            dataIndex: 'abstract',
            sorter: true
        },
        {
            title: '币种及金额（大写)',
            dataIndex: 'money',
            sorter: true
        },
        {
            title: '银行专用栏',
            dataIndex: 'bankSpecialColumn',
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
            <FormItem label="年" {...formCol}>
                {getFieldDecorator('nian', {
                    initialValue: record.accountname,
                    rules: [{ required: true, message: '请填写年' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="月" {...formCol}>
                {getFieldDecorator('yue', {
                    initialValue: record.accountname,
                    rules: [{ required: true, message: '请填写月' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="日" {...formCol}>
                {getFieldDecorator('ri', {
                    initialValue: record.accountname,
                    rules: [{ required: true, message: '请填写日' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="收款单位" {...formCol}>
                {getFieldDecorator('accountname', {
                    initialValue: record.accountname,
                    rules: [{ required: true, message: '请填写收款单位' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="收款账号" {...formCol}>
                {getFieldDecorator('accountnumber', {
                    initialValue: record.accountnumber,
                    rules: [{ required: true, message: '请填写收款账号' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="开户行" {...formCol}>
                {getFieldDecorator('openingbank', {
                    initialValue: record.openingbank,
                    rules: [{ required: true, message: '请填写开户行' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="摘要" {...formCol}>
                {getFieldDecorator('abstract', {
                    initialValue: record.abstract
                })(<Input />)}
            </FormItem>
            <FormItem label="币种及金额（大写)" {...formCol}>
                {getFieldDecorator('money', {
                    initialValue: record.money,
                    rules: [{ required: true, message: '请填写金额' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="银行专用栏" {...formCol}>
                {getFieldDecorator('bankSpecialColumn', {
                    initialValue: record.bankspecialcolumn
                })(<Input />)}
            </FormItem>
        </Form>
    );
    const filters = [
        {
            name: 'nian',
            displayName: '年',
            option: 'like'
        },
        {
            name: 'yue',
            displayName: '月',
            option: 'like'
        },
        {
            name: 'ri',
            displayName: '日',
            option: 'like'
        },
        {
            name: 'accountname',
            displayName: '收款单位',
            option: 'like'
        },
        {
            name: 'accountname',
            displayName: '收款账号',
            option: 'like'
        },
        {
            name: 'openingbank',
            displayName: '开户行',
            option: 'like'
        },
        {
            name: 'abstract',
            displayName: '摘要',
            option: 'like'
        },
        {
            name: 'money',
            displayName: '币种及金额（大写)',
            option: 'like'
        },
        {
            name: 'bankspecialcolumn',
            displayName: '银行专用栏',
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

            customColumnOption={(text, record) => (
                <span>
                    <a onClick={() => {

                        dispatch({
                            type: "print/printXinjinjiaokuandan",
                            payload: record
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

Xinjinjiaokuandan = connect((state) => {
    return {
        ...state.crud
    };
})(Xinjinjiaokuandan);
export default create()(Xinjinjiaokuandan);
