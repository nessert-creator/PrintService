import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Shouqunweituoshu2({ form, record }) {
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
            title: '证件类型',
            dataIndex: 'idType',
        },
        {
            title: '证件号码',
            dataIndex: 'idNumber'
        },
        {
            title: '部门',
            dataIndex: 'department'
        },
        {
            title: '职务',
            dataIndex: 'post'
        },
        {
            title: '其他',
            dataIndex: 'other'
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (
        <Form>
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
        </Form>

    );
    const filters = [
        {
            name: 'bankName',
            displayName: '银行名称',
            option: 'like'
        }
    ];

    return (
        <CRUD
            form={form}
            getAllApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2GetAll}
            deleteApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Delete}
            updateApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Update}
            createApi={new api.Shouqunweituoshu2Api().appShouqunweituoshu2Create}
            columns={columns}
            formNode={formNode}

            customColumnOption={(text, record) => (
                <span>
                    <a onClick={() => {

                        dispatch({
                            type: "print/printShouqunweituoshu2",
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

Shouqunweituoshu2 = connect((state) => {
    return {
        ...state.crud
    };
})(Shouqunweituoshu2);
export default create()(Shouqunweituoshu2);
