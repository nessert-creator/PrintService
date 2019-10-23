import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function Shouqunweituoshu2({ form, record }) {
    const columns = [
        {
            title: '银行名称',
            dataIndex: 'bankName',
            sorter: true
        },
        {
            title: '姓名',
            dataIndex: 'name',
            sorter: true
        },
        {
            title: '证件类型',
            dataIndex: 'idtype',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'idnumber',
            sorter: true
        },
        {
            title: '部门',
            dataIndex: 'department',
            sorter: true
        },
        {
            title: '职务',
            dataIndex: 'post',
            sorter: true
        },
        {
            title: '其他',
            dataIndex: 'other',
            sorter: true
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
        initialValue: record.bankName,
        rules: [{ required: true, message: '请填写银行名称' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="姓名" {...formCol}>
                {getFieldDecorator('name', {
        initialValue: record.name,
        rules: [{ required: true, message: 'name' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="证件类型" {...formCol}>
                {getFieldDecorator('idtype', {
        initialValue: record.idtype,
        rules: [{ required: true, message: '请填写证件类型' }]
    })(<Input />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('idnumber', {
        initialValue: record.idnumber
    })(<Input />)}
            </FormItem>
            <FormItem label="部门)" {...formCol}>
                {getFieldDecorator('department', {
        initialValue: record.department,
    })(<Input />)}
            </FormItem>
            <FormItem label="职务" {...formCol}>
                {getFieldDecorator('post', {
        initialValue: record.post,
    })(<Input />)}
            </FormItem>
            <FormItem label="其他" {...formCol}>
                {getFieldDecorator('other', {
        initialValue: record.other,
    })(<Input />)}
            </FormItem>
        </Form>);
    const filters = [
        {
            name: 'bankName',
            displayName: '银行名称',
            option: 'like'
        },
        {
            name: 'name',
            displayName: '姓名',
            option: 'like'
        },
        {
            name: 'idtype',
            displayName: '证件类型',
            option: 'like'
        },
        {
            name: 'idnumber',
            displayName: '证件号码',
            option: 'like'
        },
        {
            name: 'department',
            displayName: '部门',
            option: 'like'
        },
        {
            name: 'post',
            displayName: '职务',
            option: 'like'
        },
        {
            name: 'other',
            displayName: '其他',
            option: 'like'
        },
    ];
    return (<CRUD form={form} getAllApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2GetAll} deleteApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Delete} updateApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Update} createApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Create} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
                    <a onClick={() => {
        dispatch({
            type: "print/printShouqunweituoshu2",
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
Shouqunweituoshu2 = connect((state) => {
    return Object.assign({}, state.crud);
})(Shouqunweituoshu2);
export default create()(Shouqunweituoshu2);
