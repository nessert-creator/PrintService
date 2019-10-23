import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function Bgyhjszhsqss({ form, record }) {
    const columns = [
        {
            title: '账户名称',
            dataIndex: 'customername',
            sorter: true
        },
        {
            title: '开户银行代码',
            dataIndex: 'bankcode',
            sorter: true
        },
        {
            title: '账号',
            dataIndex: 'accountnumber',
            sorter: true,
        },
        {
            title: '账户性质',
            dataIndex: 'natureofaccount',
            sorter: true
        },
        {
            title: '开户许可证核准号',
            dataIndex: 'accountopennumber',
            sorter: true
        },
        {
            title: '变更事项及变更后内容如下:',
            dataIndex: 'changesas',
            sorter: true
        },
        {
            title: '账户名称',
            dataIndex: 'customername1',
            sorter: true,
        },
        {
            title: '地址',
            dataIndex: 'id',
            sorter: true,
        },
        {
            title: '邮政编码',
            dataIndex: 'postalcodeostalcode',
            sorter: true,
        },
        {
            title: '电话',
            dataIndex: 'phonenumber',
            sorter: true,
        },
        {
            title: '注册资金金额',
            dataIndex: 'registered',
            sorter: true,
        },
        {
            title: '证明文件种类',
            dataIndex: 'typeof',
            sorter: true,
        },
        {
            title: '证明文件编号',
            dataIndex: 'documentnumber',
            sorter: true,
        },
        {
            title: '经营范围',
            dataIndex: 'businessscope',
            sorter: true,
        },
        {
            title: '法定代表人或单位负责人',
            dataIndex: 'legal',
            sorter: true,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            sorter: true,
        },
        {
            title: '证件种类',
            dataIndex: 'typedocument',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'idnumber',
            sorter: true,
        },
        {
            title: '关联企业',
            dataIndex: 'affiliated',
            sorter: true,
        },
        {
            title: '变更后的关联企业信息填列在“关联企业登记表”中',
            dataIndex: 'dengjibiao',
            sorter: true,
        },
        {
            title: '上级法人或主管单位的基本存款账户核准号',
            dataIndex: 'thesuperior',
            sorter: true,
        },
        {
            title: '上级法人或主管单位的名称',
            dataIndex: 'thename',
            sorter: true,
        },
        {
            title: '上级法人或主管单位法定代表人或单位负责人',
            dataIndex: 'headofunit',
            sorter: true,
        },
        {
            title: '姓名',
            dataIndex: 'name1',
            sorter: true,
        },
        {
            title: '证件种类',
            dataIndex: 'typedocument1',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'idnumber1',
            sorter: true,
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
			<FormItem label="账户名称" {...formCol}>
				{getFieldDecorator('customername', {
        initialValue: record.customername,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="开户银行代码" {...formCol}>
				{getFieldDecorator('bankcode', {
        initialValue: record.bankcode,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="账号" {...formCol}>
				{getFieldDecorator('accountnumber', {
        initialValue: record.accountnumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="账户性质" {...formCol}>
				{getFieldDecorator('natureofaccount', {
        initialValue: record.natureofaccount,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="开户许可证核准号" {...formCol}>
				{getFieldDecorator('accountopennumber', {
        initialValue: record.accountopennumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="变更事项及变更后内容如下:" {...formCol}>
				{getFieldDecorator('changesas', {
        initialValue: record.changesas,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="账户名称" {...formCol}>
				{getFieldDecorator('customername1', {
        initialValue: record.customername1,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="地址" {...formCol}>
				{getFieldDecorator('id', {
        initialValue: record.id,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="邮政编码" {...formCol}>
				{getFieldDecorator('postalcode', {
        initialValue: record.postalcode,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="电话" {...formCol}>
				{getFieldDecorator('phonenumber', {
        initialValue: record.phonenumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="注册资金金额" {...formCol}>
				{getFieldDecorator('registered', {
        initialValue: record.registered,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证明文件种类" {...formCol}>
				{getFieldDecorator('typeof', {
        initialValue: record.typeof,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证明文件编号" {...formCol}>
				{getFieldDecorator('documentnumber', {
        initialValue: record.documentnumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="经营范围" {...formCol}>
				{getFieldDecorator('businessscope', {
        initialValue: record.businessscope,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="法定代表人或单位负责人" {...formCol}>
				{getFieldDecorator('legal', {
        initialValue: record.legal,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name', {
        initialValue: record.name,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件种类" {...formCol}>
				{getFieldDecorator('typedocument', {
        initialValue: record.typedocument,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('idnumber', {
        initialValue: record.idnumber,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="关联企业" {...formCol}>
				{getFieldDecorator('affiliated', {
        initialValue: record.affiliated,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="变更后的关联企业信息填列在“关联企业登记表”中" {...formCol}>
				{getFieldDecorator('dengjibiao', {
        initialValue: record.dengjibiao,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="上级法人或主管单位的基本存款账户核准号" {...formCol}>
				{getFieldDecorator('thesuperior', {
        initialValue: record.thesuperior,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="上级法人或主管单位的名称" {...formCol}>
				{getFieldDecorator('thename', {
        initialValue: record.thename,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem><FormItem label="上级法人或主管单位法定代表人或单位负责人" {...formCol}>
				{getFieldDecorator('headofunit', {
        initialValue: record.headofunit,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name1', {
        initialValue: record.name1,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件种类" {...formCol}>
				{getFieldDecorator('typedocument1', {
        initialValue: record.typedocument1,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('idnumber1', {
        initialValue: record.idnumber1,
        rules: [{ required: true, message: '请填写名称' }]
    })(<Input />)}
			</FormItem>
		</Form>);
    const filters = [
        {
            name: 'name',
            displayName: '名称',
            option: 'like'
        },
    ];
    return (<CRUD form={form} getAllApi={new api.BgyhjszhsqssApi().appBgyhjszhsqssGetAll} deleteApi={new api.BgyhjszhsqssApi().appBgyhjszhsqssDelete} updateApi={new api.BgyhjszhsqssApi().appBgyhjszhsqssUpdate} createApi={new api.BgyhjszhsqssApi().appBgyhjszhsqssCreate} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
                    <a onClick={() => {
        dispatch({
            type: "print/printBgyhjszhsqss",
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
Bgyhjszhsqss = connect((state) => {
    return Object.assign({}, state.crud);
})(Bgyhjszhsqss);
export default create()(Bgyhjszhsqss);
