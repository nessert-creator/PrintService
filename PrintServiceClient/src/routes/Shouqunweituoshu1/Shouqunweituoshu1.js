import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function Shouqunweituoshu1({ form, record }) {
    const columns = [
        {
            title: '银行名称',
            dataIndex: 'bankName'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '证件种类',
            dataIndex: 'idType',
        },
        {
            title: '证件号码',
            dataIndex: 'idNumber'
        },
        {
            title: '职务',
            dataIndex: 'post'
        },
        {
            title: '名章',
            dataIndex: 'seal'
        },
        {
            title: '联系电话',
            dataIndex: 'phone'
        },
        {
            title: '并行',
            dataIndex: 'bingXing'
        },
        {
            title: '废止',
            dataIndex: 'feiZhi'
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
            <FormItem label="银行名称" {...formCol}>
                {getFieldDecorator('bankName', {
        initialValue: record.bankname,
        rules: [{ required: true, message: '请填写银行名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="姓名" {...formCol}>
                {getFieldDecorator('name', {
        initialValue: record.name,
        rules: [{ required: true, message: 'name' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="证件种类" {...formCol}>
                {getFieldDecorator('idType', {
        initialValue: record.idtype,
        rules: [{ required: true, message: '请填写证件种类' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('idNumber', {
        initialValue: record.idnumber
    })(<Input />)}
            </FormItem>
            <FormItem label="职务" {...formCol}>
                {getFieldDecorator('post', {
        initialValue: record.post
    })(<Input />)}
            </FormItem>
            <FormItem label="名章" {...formCol}>
                {getFieldDecorator('seal', {
        initialValue: record.seal,
    })(<Input />)}
            </FormItem>
            <FormItem label="联系电话" {...formCol}>
                {getFieldDecorator('phone', {
        initialValue: record.phone,
    })(<Input />)}
            </FormItem>
            <FormItem label="并行" {...formCol}>
                {getFieldDecorator('bingXing', {
        initialValue: record.bingXing,
    })(<Input />)}
            </FormItem>
            <FormItem label="废止" {...formCol}>
                {getFieldDecorator('feiZhi', {
        initialValue: record.feiZhi,
    })(<Input />)}
            </FormItem>
        </Form>);
    const filters = [
        {
            name: 'bankName',
            displayName: '银行名称',
            option: 'like'
        }
    ];
    return (<CRUD form={form} getAllApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1GetAll} deleteApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Delete} updateApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Update} createApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Create} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
                    <a onClick={() => {
        dispatch({
            type: "print/printShouqunweituoshu1",
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
Shouqunweituoshu1 = connect((state) => {
    return Object.assign({}, state.crud);
})(Shouqunweituoshu1);
export default create()(Shouqunweituoshu1);
