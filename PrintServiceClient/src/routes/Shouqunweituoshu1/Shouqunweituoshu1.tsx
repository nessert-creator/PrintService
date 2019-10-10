import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Shouqunweituoshu1({ form, record }) {
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
            title: '证件种类',
            dataIndex: 'idType',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'idNumber',
            sorter: true
        },
        {
            title: '职务',
            dataIndex: 'post',
            sorter: true
        },
        {
            title: '名章',
            dataIndex: 'seal',
            sorter: true
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            sorter: true
        },
        {
            title: '并行',
            dataIndex: 'bingXing',
            sorter: true
        },
        {
            title: '废止',
            dataIndex: 'feiZhi',
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
        </Form>
    );
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
            name: 'idType',
            displayName: '证件种类',
            option: 'like'
        },
        {
            name: 'idNumber',
            displayName: '证件号码',
            option: 'like'
        },
        {
            name: 'post',
            displayName: '职务',
            option: 'like'
        },
        {
            name: 'seal',
            displayName: '名章',
            option: 'like'
        },
        {
            name: 'phone',
            displayName: '联系电话',
            option: 'like'
        },
        {
            name: 'bingXing',
            displayName: '并行',
            option: 'like'
        },
        {
            name: 'feiZhi',
            displayName: '废止',
            option: 'like'
        },
    ];

    return (
        <CRUD
            form={form}
            getAllApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1GetAll}
            deleteApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Delete}
            updateApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Update}
            createApi={new api.Shouqunweituoshu1Api().appShouqunweituoshu1Create}
            columns={columns}
            formNode={formNode}

            customColumnOption={(text, record) => (
                <span>
                    <a onClick={() => {

                        dispatch({
                            type: "print/printShouqunweituoshu1",
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

Shouqunweituoshu1 = connect((state) => {
    return {
        ...state.crud
    };
})(Shouqunweituoshu1);
export default create()(Shouqunweituoshu1);