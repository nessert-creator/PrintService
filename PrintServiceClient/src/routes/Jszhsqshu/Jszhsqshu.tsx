import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Jszhsqshu({ form, record }) {
    const columns = [
        {
            title: '账户名称',
            dataIndex: 'accounttitle',
            sorter: true
        },
        {
            title: '开户银行名称',
            dataIndex: 'bankname',
            sorter: true
        },
        {
            title: '开户银行代码',
            dataIndex: 'bankcode',
            sorter: true
        },
        {
            title: '账号',
            dataIndex: 'account',
            sorter: true
        },
        {
            title: '账户性质',
            dataIndex: 'naturezccount',
            sorter: true
        },
        // {
        //     title: '基本',
        //     dataIndex: 'basic',
        //     sorter: true
        // },
        // {
        //     title: '专用',
        //     dataIndex: 'special',
        //     sorter: true
        // },
        // {
        //     title: '一般',
        //     dataIndex: 'general',
        //     sorter: true
        // },
        // {
        //     title: '临时',
        //     dataIndex: 'temporary',
        //     sorter: true
        // },
        // {
        //     title: '个人',
        //     dataIndex: 'personal',
        //     sorter: true
        // },
        {
            title: '开户许可证核准号',
            dataIndex: 'accountnumber',
            sorter: true
        },
        {
            title: '销户原因',
            dataIndex: 'pinreasons',
            sorter: true
        },
        {
            title: '交回空白重要凭证',
            dataIndex: 'voucher',
            sorter: true
        },
        {
            title: '种类',
            dataIndex: 'species',
            sorter: true
        },
        {
            title: '张（份）数',
            dataIndex: 'anumberof',
            sorter: true
        },
        {
            title: '起讫号码',
            dataIndex: 'allnumbers',
            sorter: true
        },
        {
            title: '填写说明',
            dataIndex: 'fillingexplanation',
            sorter: true
        },
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
            sorter: true
        },
        {
            title: '年',
            dataIndex: 'year1',
            sorter: true
        },
        {
            title: '月',
            dataIndex: 'month1',
            sorter: true
        },
        {
            title: '日',
            dataIndex: 'day1',
            sorter: true
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
        <FormItem label="账户名称" {...formCol}>
            {getFieldDecorator('accounttitle', {
                initialValue: record.Accounttitle,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="开户银行名称" {...formCol}>
            {getFieldDecorator('bankname', {
                initialValue: record.Bankname,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="开户银行代码" {...formCol}>
            {getFieldDecorator('bankcode', {
                initialValue: record.Bankcode,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="账号" {...formCol}>
            {getFieldDecorator('account', {
                initialValue: record.Account,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="账户性质" {...formCol}>
            {getFieldDecorator('naturezccount', {
                initialValue: record.Naturezccount,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        {/* <FormItem label="基本" {...formCol}>
            {getFieldDecorator('basic', {
                initialValue: record.Basic,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="专用" {...formCol}>
            {getFieldDecorator('special', {
                initialValue: record.Special,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="一般" {...formCol}>
            {getFieldDecorator('general', {
                initialValue: record.General,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="临时" {...formCol}>
            {getFieldDecorator('temporary', {
                initialValue: record.Temporary,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="个人" {...formCol}>
            {getFieldDecorator('personal', {
                initialValue: record.Personal,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem> */}
        <FormItem label="开户许可证核准号" {...formCol}>
            {getFieldDecorator('accountnumber', {
                initialValue: record.Accountnumber,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="销户原因" {...formCol}>
            {getFieldDecorator('pinreasons', {
                initialValue: record.Pinreasons,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="交回空白重要凭证" {...formCol}>
            {getFieldDecorator('voucher', {
                initialValue: record.voucher,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="种类" {...formCol}>
            {getFieldDecorator('species', {
                initialValue: record.Species,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="张（份）数" {...formCol}>
            {getFieldDecorator('anumberof', {
                initialValue: record.Anumberof,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="起讫号码" {...formCol}>
            {getFieldDecorator('allnumbers', {
                initialValue: record.Allnumbers,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="填写说明" {...formCol}>
            {getFieldDecorator('fillingexplanation', {
                initialValue: record.Fillingexplanation,
                rules: [{ required: true, message: '请填写名称' }]
            })(<Input />)}
        </FormItem>
        <FormItem label="年" {...formCol}>
                {getFieldDecorator('year', {
                    rules: [{ required: true, message: '请输入年！' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="月" {...formCol}>
                {getFieldDecorator('month', {
                    rules: [{ required: true, message: '请输入月！' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="日" {...formCol}>
                {getFieldDecorator('day', {
                    rules: [{ required: true, message: '请输入日！' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="年" {...formCol}>
                {getFieldDecorator('year1', {
                    rules: [{ required: true, message: '请输入年！' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="月" {...formCol}>
                {getFieldDecorator('month1', {
                    rules: [{ required: true, message: '请输入月！' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="日" {...formCol}>
                {getFieldDecorator('day1', {
                    rules: [{ required: true, message: '请输入日！' }]
                })(<Input />)}
            </FormItem>
 </Form >
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
        getAllApi={new api.JszhsqshuApi().appJszhsqshuGetAll}
        deleteApi={new api.JszhsqshuApi().appJszhsqshuDelete}
        updateApi={new api.JszhsqshuApi().appJszhsqshuUpdate}
        createApi={new api.JszhsqshuApi().appJszhsqshuCreate}
        columns={columns}
        formNode={formNode}

        customColumnOption={(text, record) => (
            <span>
                <a onClick={() => {
                    dispatch({
                        type: "print/printJszhsqshu",
                        payload:record
                    })
                }}>
                    打印
                    </a>
                <span style={{ marginLeft: '6px' }} />
            </span>
        )}
        filterProps={{
            filters,
            searchProvide: 'sql'
        }}
    />
);
}

Jszhsqshu = connect((state) => {
return {
    ...state.crud
};
})(Jszhsqshu);
export default create()(Jszhsqshu);