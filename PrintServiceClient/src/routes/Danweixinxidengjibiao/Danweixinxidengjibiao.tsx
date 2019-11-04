import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';

function Danweixinxidengjibiao({ form, record }) {
    const columns = [
        {
            title: '公司',
            dataIndex: 'company',
        },
        {
            title: '信用代码',
            dataIndex: 'code',
        },
        {
            title: '股东名称',
            dataIndex: 'shareholders',
        },
        {
            title: '身份信息',
            dataIndex: 'identity',

        },
        {
            title: '证件号码',
            dataIndex: 'number',


        },
        {
            title: '有效期限',
            dataIndex: 'date',


        },
        {
            title: '持股比例',
            dataIndex: 'proportion',
        },
        {
            title: '是否为实际控股人',
            dataIndex: 'or',
        },
        {
            title: '股东名称',
            dataIndex: 'shareholders1',
        },
        {
            title: '身份信息',
            dataIndex: 'identity1',

        },
        {
            title: '证件号码',
            dataIndex: 'number1',


        },
        {
            title: '有效期限',
            dataIndex: 'date1',


        },
        {
            title: '持股比例',
            dataIndex: 'proportion1',
        },
        {
            title: '是否为实际控股人',
            dataIndex: 'or1',
        },
        {
            title: '股东名称',
            dataIndex: 'shareholders2',
        },
        {
            title: '身份信息',
            dataIndex: 'identity2',

        },
        {
            title: '证件号码',
            dataIndex: 'number2',


        },
        {
            title: '有效期限',
            dataIndex: 'date2',


        },
        {
            title: '持股比例',
            dataIndex: 'proportion2',
        },
        {
            title: '是否为实际控股人',
            dataIndex: 'or2',
        },
        {
            title: '股东名称',
            dataIndex: 'shareholders3',
        },
        {
            title: '身份信息',
            dataIndex: 'identity3',

        },
        {
            title: '证件号码',
            dataIndex: 'number3',


        },
        {
            title: '有效期限',
            dataIndex: 'date3',
        },
        {
            title: '持股比例',
            dataIndex: 'proportion3',
        },
        {
            title: '是否为实际控股人',
            dataIndex: 'or3',
        },
        {
            title: '受益人类型',
            dataIndex: 'type',
        },
        {
            title: '受益人名称',
            dataIndex: 'name',
        },
        {
            title: '身份信息',
            dataIndex: 'identity4',
        },
        {
            title: '证件号码',
            dataIndex: 'number4',
        },
        {
            title: '有效期限',
            dataIndex: 'date4',
        },
        {
            title: '地址',
            dataIndex: 'address'
        },
        {
            title: '受益人类型',
            dataIndex: 'type1',
        },
        {
            title: '受益人名称',
            dataIndex: 'name1',
        },
        {
            title: '身份信息',
            dataIndex: 'identity5',
        },
        {
            title: '证件号码',
            dataIndex: 'number5',
        },
        {
            title: '有效期限',
            dataIndex: 'date5'
        },
        {
            title: '地址',
            dataIndex: 'address1'
        },
        {
            title: '受益人类型',
            dataIndex: 'type2',
        },
        {
            title: '受益人名称',
            dataIndex: 'name2',
        },
        {
            title: '身份信息',
            dataIndex: 'identity6',
        },
        {
            title: '证件号码',
            dataIndex: 'number6',
        },
        {
            title: '有效期限',
            dataIndex: 'date6'
        },
        {
            title: '地址',
            dataIndex: 'address2'
        },
        {
            title: '受益人名称',
            dataIndex: 'name3',
        },
        {
            title: '受益人类型',
            dataIndex: 'type3',
        },
        {
            title: '身份信息',
            dataIndex: 'identity7',
        },
        {
            title: '证件号码',
            dataIndex: 'number7',
        },
        {
            title: '有效期限',
            dataIndex: 'date7'
        },
        {
            title: '地址',
            dataIndex: 'address3'
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (
        <Form>
            <FormItem label="公司" {...formCol}>
                {getFieldDecorator('company', {
                    initialValue: record.company,
                    rules: [{ required: true, message: '请填写名称' }]
                })(<Input />)}
            </FormItem>
            <FormItem label="社会统一信用代码" {...formCol}>
                {getFieldDecorator('code', {
                    initialValue: record.code
                })(<TextArea />)}
            </FormItem>
            <FormItem label="股东名称" {...formCol}>
                {getFieldDecorator('shareholders', {
                    initialValue: record.shareholders && record.shareholders
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity', {
                    initialValue: record.identity && record.identity
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number', {
                    initialValue: moment(record.number)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date', {
                    initialValue: moment(record.date)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="持股比例" {...formCol}>
                {getFieldDecorator('proportion', {
                    initialValue: moment(record.proportion)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="是否为实际控股人" {...formCol}>
                {getFieldDecorator('or', {
                    initialValue: moment(record.or)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="股东名称" {...formCol}>
                {getFieldDecorator('shareholders1', {
                    initialValue: record.shareholders1 && record.shareholders1
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity1', {
                    initialValue: record.identity1 && record.identity1
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number1', {
                    initialValue: moment(record.number1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date1', {
                    initialValue: moment(record.date1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="持股比例" {...formCol}>
                {getFieldDecorator('proportion1', {
                    initialValue: moment(record.proportion1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="是否为实际控股人" {...formCol}>
                {getFieldDecorator('or1', {
                    initialValue: moment(record.or1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="股东名称" {...formCol}>
                {getFieldDecorator('shareholders2', {
                    initialValue: record.shareholders2 && record.shareholders2
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity2', {
                    initialValue: record.identity2 && record.identit2
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number2', {
                    initialValue: moment(record.number2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date2', {
                    initialValue: moment(record.date2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="持股比例" {...formCol}>
                {getFieldDecorator('proportion2', {
                    initialValue: moment(record.proportion2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="是否为实际控股人" {...formCol}>
                {getFieldDecorator('or2', {
                    initialValue: moment(record.or2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="股东名称" {...formCol}>
                {getFieldDecorator('shareholders3', {
                    initialValue: record.shareholders3 && record.shareholders3
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity3', {
                    initialValue: record.identity3 && record.identity
                })(<InputNumber />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number3', {
                    initialValue: moment(record.number3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date3', {
                    initialValue: moment(record.date3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="持股比例" {...formCol}>
                {getFieldDecorator('proportion3', {
                    initialValue: moment(record.proportion3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="是否为实际控股人" {...formCol}>
                {getFieldDecorator('or3', {
                    initialValue: moment(record.or3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人类型" {...formCol}>
                {getFieldDecorator('type', {
                    initialValue: moment(record.type)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人名称" {...formCol}>
                {getFieldDecorator('name', {
                    initialValue: moment(record.name)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity4', {
                    initialValue: moment(record.identity4)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number4', {
                    initialValue: moment(record.number4)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date4', {
                    initialValue: moment(record.date4)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="地址" {...formCol}>
                {getFieldDecorator('address', {
                    initialValue: moment(record.address)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人类型" {...formCol}>
                {getFieldDecorator('type1', {
                    initialValue: moment(record.type1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人名称" {...formCol}>
                {getFieldDecorator('name1', {
                    initialValue: moment(record.name1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity5', {
                    initialValue: moment(record.identity5)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number5', {
                    initialValue: moment(record.number5)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date5', {
                    initialValue: moment(record.date5)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="地址" {...formCol}>
                {getFieldDecorator('address1', {
                    initialValue: moment(record.address1)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人类型" {...formCol}>
                {getFieldDecorator('type2', {
                    initialValue: moment(record.type2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人名称" {...formCol}>
                {getFieldDecorator('name2', {
                    initialValue: moment(record.name2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity6', {
                    initialValue: moment(record.identity6)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number6', {
                    initialValue: moment(record.number6)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date6', {
                    initialValue: moment(record.date6)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="地址" {...formCol}>
                {getFieldDecorator('address2', {
                    initialValue: moment(record.address2)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人类型" {...formCol}>
                {getFieldDecorator('type3', {
                    initialValue: moment(record.type3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="受益人名称" {...formCol}>
                {getFieldDecorator('name3', {
                    initialValue: moment(record.name3)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="身份信息" {...formCol}>
                {getFieldDecorator('identity7', {
                    initialValue: moment(record.identity7)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="证件号码" {...formCol}>
                {getFieldDecorator('number7', {
                    initialValue: moment(record.number7)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="有效期限" {...formCol}>
                {getFieldDecorator('date7', {
                    initialValue: moment(record.date7)
                })(<DatePicker />)}
            </FormItem>
            <FormItem label="地址" {...formCol}>
                {getFieldDecorator('address3', {
                    initialValue: moment(record.address3)
                })(<DatePicker />)}
            </FormItem>
        </Form>
    );
    const filters = [
        {
            name: 'company',
            displayName: '公司名称',
            option: 'like'
        }
    ];

    return (
        <CRUD
            form={form}
            getAllApi={new api.DanweixinxidengjibiaoApi().appDanweixinxidengjibiaoGetAll}
            deleteApi={new api.DanweixinxidengjibiaoApi().appDanweixinxidengjibiaoDelete}
            updateApi={new api.DanweixinxidengjibiaoApi().appDanweixinxidengjibiaoUpdate}
            createApi={new api.DanweixinxidengjibiaoApi().appDanweixinxidengjibiaoCreate}
            columns={columns}
            formNode={formNode}
			customColumnOption={(text, record) => (
				<span>
					<a onClick={() => {
						dispatch({
							type: "print/printDanweixinxidengjibiao",
							payload: record
						})
					}}>
						打印
					</a>
					<span style={{ marginLeft: '6px' }} /></span>
			)}
            filterProps={{
                filters,
                searchProvide: 'sql'
            }}
        />
    );
}

Danweixinxidengjibiao = connect((state) => {
    return {
        ...state.crud
    };
})(Danweixinxidengjibiao);
export default create()(Danweixinxidengjibiao);
