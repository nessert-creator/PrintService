import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function Shouquanshu({ form, record }) {
    const columns = [
        {
            title: '支行名称',
            dataIndex: 'zhihang',
            sorter: true
        },
        {
            title: '授权人姓名',
            dataIndex: 'name',
            sorter: true
        },
        {
            title: '身份证号码',
            dataIndex: 'idcard',
            sorter: true,
        },
        {
            title: '手机号码',
            dataIndex: 'telephonenumber',
            sorter: true,
        },
        {
            title: '其他',
            dataIndex: 'other',
            sorter: true,
        },
        {
            title: '年',
            dataIndex: 'year',
            sorter: true,
        },
        {
            title: '月',
            dataIndex: 'month',
            sorter: true,
        },
        {
            title: '日',
            dataIndex: 'day',
            sorter: true,
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
            <FormItem label="支行名称" {...formCol}>
                {getFieldDecorator('zhihang', {
        initialValue: record.zhihang,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="授权人姓名" {...formCol}>
                {getFieldDecorator('name', {
        initialValue: record.name,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="身份证号码" {...formCol}>
                {getFieldDecorator('idcard', {
        initialValue: record.idcard,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="手机号码" {...formCol}>
                {getFieldDecorator('telephonenumber', {
        initialValue: record.telephonenumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="其他" {...formCol}>
                {getFieldDecorator('other', {
        initialValue: record.other,
        rules: [{ required: false, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="年" {...formCol}>
                {getFieldDecorator('year', {
        initialValue: record.year,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="月" {...formCol}>
                {getFieldDecorator('month', {
        initialValue: record.name,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="日" {...formCol}>
                {getFieldDecorator('day', {
        initialValue: record.name,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
            </FormItem>
        </Form>);
    const filters = [
        {
            name: 'name',
            displayName: '授权人姓名',
            option: 'like'
        },
    ];
    return (<CRUD form={form} getAllApi={new api.ShouquanshuApi().appShouquanshuGetAll} deleteApi={new api.ShouquanshuApi().appShouquanshuDelete} updateApi={new api.ShouquanshuApi().appShouquanshuUpdate} createApi={new api.ShouquanshuApi().appShouquanshuCreate} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
                    <a onClick={() => {
        dispatch({
            type: "print/printShouquanshu",
            payload: record
        });
    }}>
                        打印
                        </a>
                    <span style={{ marginLeft: '6px' }}/>
                </span>)} filterProps={{
        filters,
        searchProvide: 'sql'
    }}/>);
}
Shouquanshu = connect((state) => {
    return Object.assign({}, state.crud);
})(Shouquanshu);
export default create()(Shouquanshu);
