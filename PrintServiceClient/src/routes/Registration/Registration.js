import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function Registration({ form, record }) {
    const columns = [
        {
            title: '年',
            dataIndex: 'year_1',
            sorter: true
        },
        {
            title: '月',
            dataIndex: 'month_1',
            sorter: true
        },
        {
            title: '日',
            dataIndex: 'day_1',
            sorter: true,
        },
        {
            title: '姓名',
            dataIndex: 'name_1',
            sorter: true,
        },
        {
            title: '姓名拼音',
            dataIndex: 'name_pinyin',
            sorter: true,
        },
        {
            title: '性别',
            dataIndex: 'gender_1',
            sorter: true,
        },
        {
            title: '国际/地区',
            dataIndex: 'nationality_1',
            sorter: true,
        },
        {
            title: '手机号码',
            dataIndex: 'phoneNumber',
            sorter: true,
        },
        {
            title: '证件类型',
            dataIndex: 'type_1',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'number_1',
            sorter: true,
        },
        {
            title: '证件有效日期',
            dataIndex: 'riqi_1',
            sorter: true,
        },
        {
            title: '年',
            dataIndex: 'year_2',
            sorter: true,
        },
        {
            title: '月',
            dataIndex: 'month_2',
            sorter: true,
        },
        {
            title: '日',
            dataIndex: 'day_2',
            sorter: true,
        },
        {
            title: '发证机关',
            dataIndex: 'license',
            sorter: true,
        },
        {
            title: '联系地址',
            dataIndex: 'often_address1',
            sorter: true,
        },
        {
            dataIndex: 'often_address2',
            sorter: true,
        },
        {
            dataIndex: 'often_address3',
            sorter: true,
        },
        {
            title: '联系地址',
            dataIndex: 'unit_address1',
            sorter: true,
        },
        {
            dataIndex: 'unit_address2',
            sorter: true,
        },
        {
            dataIndex: 'unit_address3',
            sorter: true,
        },
        {
            title: '职业',
            dataIndex: 'professional',
            sorter: true,
        },
        {
            title: '税收居民身份',
            dataIndex: 'tax',
            sorter: true,
        },
        {
            title: '美国纳税人识别号',
            dataIndex: 'number_2',
            sorter: true,
        },
        {
            title: '姓名',
            dataIndex: 'name_2',
            sorter: true,
        },
        {
            title: '性别',
            dataIndex: 'gender_2',
            sorter: true,
        },
        {
            title: '国际/地区',
            dataIndex: 'nationality_2',
            sorter: true,
        },
        {
            title: '证件类型',
            dataIndex: 'type_2',
            sorter: true,
        },
        {
            title: '证件号码',
            dataIndex: 'number_3',
            sorter: true,
        },
        {
            title: '证件有效日期',
            dataIndex: 'year_3',
            sorter: true,
        },
        {
            title: '月',
            dataIndex: 'month_3',
            sorter: true,
        },
        {
            title: '日',
            dataIndex: 'day_3',
            sorter: true,
        },
        {
            title: '发证机关',
            dataIndex: 'license2',
            sorter: true,
        },
        {
            title: '手机号码',
            dataIndex: 'phoneNumber2',
            sorter: true,
        },
        {
            title: '省/自治区/直辖市',
            dataIndex: 'province',
            sorter: true,
        },
        {
            title: '市/区/县',
            dataIndex: 'city',
            sorter: true,
        },
        {
            title: '街道/小区/门牌号',
            dataIndex: 'area',
            sorter: true,
        },
        {
            title: '类型',
            dataIndex: 'type_3',
            sorter: true,
        },
        {
            title: '代理原因',
            dataIndex: 'why',
            sorter: true,
        },
        // 客户补充信息
        {
            title: '婚姻状况',
            dataIndex: 'marriage',
            sorter: true,
        },
        {
            title: '最高学历',
            dataIndex: 'record',
            sorter: true,
        },
        {
            title: '家庭电话',
            dataIndex: 'family_number',
            sorter: true,
        },
        {
            title: '行业',
            dataIndex: 'industry',
            sorter: true,
        },
        {
            title: '单位名称',
            dataIndex: 'unit_name',
            sorter: true,
        },
        {
            title: '单位电话',
            dataIndex: 'unit_number',
            sorter: true,
        },
        {
            title: '电子邮箱',
            dataIndex: 'email',
            sorter: true,
        },
        {
            title: '职务',
            dataIndex: 'professiona2',
            sorter: true,
        },
        {
            title: '感兴趣的产品',
            dataIndex: 'product',
            sorter: true,
        },
        {
            title: '辅助证件类型',
            dataIndex: 'type_4',
            sorter: true,
        },
        {
            title: '注明',
            dataIndex: 'indicate',
            sorter: true,
        },
        {
            title: '辅助证件号码',
            dataIndex: 'type_number',
            sorter: true,
        },
        {
            title: '签名',
            dataIndex: 'signature',
            sorter: true,
        },
        {
            title: '日期(年)',
            dataIndex: 'year_4',
            sorter: true,
        },
        {
            title: '月',
            dataIndex: 'month_4',
            sorter: true,
        },
        {
            title: '日',
            dataIndex: 'day_4',
            sorter: true,
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
			<FormItem label="年" {...formCol}>
				{getFieldDecorator('year_1', {
        initialValue: record.year_1,
        rules: [{ required: true, message: '请填写年' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="月" {...formCol}>
				{getFieldDecorator('month_1', {
        initialValue: record.month_1
    })(<Input />)}
			</FormItem>
			<FormItem label="日" {...formCol}>
				{getFieldDecorator('day_1', {
        initialValue: record.location && record.day_1
    })(<Input />)}
			</FormItem>
            <FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_1', {
        initialValue: record.location && record.name_1
    })(<Input />)}
			</FormItem>
            <FormItem label="姓名拼音" {...formCol}>
				{getFieldDecorator('name_pinyin', {
        initialValue: record.location && record.name_pinyin
    })(<Input />)}
			</FormItem>
			<FormItem label="性别" {...formCol}>
				{getFieldDecorator('gender_1', {
        initialValue: record.location && record.gender_1
    })(<Input />)}
			</FormItem>
            <FormItem label="国际/地区" {...formCol}>
				{getFieldDecorator('nationality_1', {
        initialValue: record.location && record.nationality_1
    })(<Input />)}
			</FormItem>
            <FormItem label="手机号码" {...formCol}>
				{getFieldDecorator('phoneNumber', {
        initialValue: record.location && record.phoneNumber
    })(<Input />)}
			</FormItem>
            <FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_1', {
        initialValue: record.location && record.type_1
    })(<Input />)}
			</FormItem>
            <FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_1', {
        initialValue: record.location && record.number_1
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期" {...formCol}>
				{getFieldDecorator('riqi_1', {
        initialValue: record.location && record.year_2
    })(<Input />)}
			</FormItem>
            <FormItem label="年" {...formCol}>
				{getFieldDecorator('year_2', {
        initialValue: record.location && record.year_2
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('month_2', {
        initialValue: record.location && record.month_2
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('day_2', {
        initialValue: record.location && record.day_2
    })(<Input />)}
			</FormItem>
            <FormItem label="发证机关" {...formCol}>
				{getFieldDecorator('license', {
        initialValue: record.location && record.license
    })(<Input />)}
			</FormItem>
            <FormItem label="联系地址" {...formCol}>
				{getFieldDecorator('often_address1', {
        initialValue: record.location && record.often_address1
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('often_address2', {
        initialValue: record.location && record.often_address2
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('often_address3', {
        initialValue: record.location && record.often_address3
    })(<Input />)}
			</FormItem>
            <FormItem label="联系地址" {...formCol}>
				{getFieldDecorator('unit_address1', {
        initialValue: record.location && record.unit_address1
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('unit_address2', {
        initialValue: record.location && record.unit_address2
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('unit_address3', {
        initialValue: record.location && record.unit_address3
    })(<Input />)}
			</FormItem>
            <FormItem label="职业" {...formCol}>
				{getFieldDecorator('professional', {
        initialValue: record.location && record.professional
    })(<Input />)}
			</FormItem>
            <FormItem label="税收居民身份" {...formCol}>
				{getFieldDecorator('tax', {
        initialValue: record.location && record.tax
    })(<Input />)}
			</FormItem>
            <FormItem label="美国纳税人识别号" {...formCol}>
				{getFieldDecorator('number_2', {
        initialValue: record.location && record.number_2
    })(<Input />)}
			</FormItem>
            <FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_2', {
        initialValue: record.location && record.name_2
    })(<Input />)}
			</FormItem>
			<FormItem label="性别" {...formCol}>
				{getFieldDecorator('gender_2', {
        initialValue: record.location && record.gender_2
    })(<Input />)}
			</FormItem>
            <FormItem label="国际/地区" {...formCol}>
				{getFieldDecorator('nationality_2', {
        initialValue: record.location && record.nationality_2
    })(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_2', {
        initialValue: record.type_2 && record.type_2
    })(<Input />)}
			</FormItem>
            <FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_3', {
        initialValue: record.location && record.number_3
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期" {...formCol}>
				{getFieldDecorator('year_3', {
        initialValue: record.location && record.year_3
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('month_3', {
        initialValue: record.location && record.month_3
    })(<Input />)}
			</FormItem>
            <FormItem {...formCol}>
				{getFieldDecorator('day_3', {
        initialValue: record.location && record.day_3
    })(<Input />)}
			</FormItem>
            <FormItem label="发证机关" {...formCol}>
				{getFieldDecorator('license2', {
        initialValue: record.location && record.license2
    })(<Input />)}
			</FormItem>
			<FormItem label="手机号码" {...formCol}>
				{getFieldDecorator('phoneNumber2', {
        initialValue: record.location && record.phoneNumber2
    })(<Input />)}
			</FormItem>
			<FormItem label="省/自治区/直辖市" {...formCol}>
				{getFieldDecorator('province', {
        initialValue: record.location && record.province
    })(<Input />)}
			</FormItem>
			<FormItem label="市/区/县" {...formCol}>
				{getFieldDecorator('city', {
        initialValue: record.location && record.city
    })(<Input />)}
			</FormItem>
			<FormItem label="街道/小区/门牌号" {...formCol}>
				{getFieldDecorator('area', {
        initialValue: record.location && record.area
    })(<Input />)}
			</FormItem>
			
			<FormItem label="类型" {...formCol}>
				{getFieldDecorator('type_3', {
        initialValue: record.location && record.type_3
    })(<Input />)}
			</FormItem>
			<FormItem label="代理原因" {...formCol}>
				{getFieldDecorator('why', {
        initialValue: record.location && record.why
    })(<Input />)}
			</FormItem>
			<FormItem label="婚姻状况" {...formCol}>
				{getFieldDecorator('marriage', {
        initialValue: record.location && record.marriage
    })(<Input />)}
			</FormItem>
			<FormItem label="最高学历" {...formCol}>
				{getFieldDecorator('record', {
        initialValue: record.location && record.record
    })(<Input />)}
			</FormItem>
			<FormItem label="家庭电话" {...formCol}>
				{getFieldDecorator('family_number', {
        initialValue: record.location && record.family_number
    })(<Input />)}
			</FormItem>
			<FormItem label="行业" {...formCol}>
				{getFieldDecorator('industry', {
        initialValue: record.location && record.industry
    })(<Input />)}
			</FormItem>
			<FormItem label="单位名称" {...formCol}>
				{getFieldDecorator('unit_name', {
        initialValue: record.location && record.unit_name
    })(<Input />)}
			</FormItem>
			<FormItem label="单位电话" {...formCol}>
				{getFieldDecorator('unit_number', {
        initialValue: record.location && record.unit_number
    })(<Input />)}
			</FormItem>
			<FormItem label="电子邮箱" {...formCol}>
				{getFieldDecorator('email', {
        initialValue: record.location && record.email
    })(<Input />)}
			</FormItem>
			<FormItem label="职务" {...formCol}>
				{getFieldDecorator('professiona2', {
        initialValue: record.location && record.professiona2
    })(<Input />)}
			</FormItem>
			<FormItem label="感兴趣的产品" {...formCol}>
				{getFieldDecorator('product', {
        initialValue: record.location && record.product
    })(<Input />)}
			</FormItem>
			<FormItem label="辅助证件类型" {...formCol}>
				{getFieldDecorator('type_4', {
        initialValue: record.location && record.type_4
    })(<Input />)}
			</FormItem>
			<FormItem label="注明" {...formCol}>
				{getFieldDecorator('indicate', {
        initialValue: record.location && record.indicate
    })(<Input />)}
			</FormItem>
			<FormItem label="辅助证件号码" {...formCol}>
				{getFieldDecorator('type_number', {
        initialValue: record.location && record.type_number
    })(<Input />)}
			</FormItem>
			<FormItem label="签名" {...formCol}>
				{getFieldDecorator('signature', {
        initialValue: record.location && record.signature
    })(<Input />)}
			</FormItem>
			<FormItem label="日期(年)" {...formCol}>
				{getFieldDecorator('year_4', {
        initialValue: record.year_4,
        rules: [{ required: true, message: '请填写年' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="月" {...formCol}>
				{getFieldDecorator('month_4', {
        initialValue: record.month_4
    })(<Input />)}
			</FormItem>
			<FormItem label="日" {...formCol}>
				{getFieldDecorator('day_4', {
        initialValue: record.location && record.day_4
    })(<Input />)}
			</FormItem>
		</Form>);
    const filters = [
        {
            name: 'sname',
            displayName: '客户名称',
            option: 'like'
        },
        {
            name: 'creationTime',
            displayName: '添加时间',
            type: 'datetime',
            option: '>='
        },
        {
            name: 'creationTime',
            displayName: '',
            type: 'datetime',
            option: '<'
        }
    ];
    return (<CRUD form={form} getAllApi={new api.RegistrationApi().appRegistrationGetAll} deleteApi={new api.RegistrationApi().appRegistrationDelete} updateApi={new api.RegistrationApi().appRegistrationUpdate} createApi={new api.RegistrationApi().appRegistrationCreate} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
					<a onClick={() => {
        dispatch({
            type: "print/printRegistration",
            payload: record
        });
    }}>
						打印
					</a>
				<span style={{ marginLeft: '6px' }}/></span>)} filterProps={{
        filters,
        searchProvide: 'sql'
    }}/>);
}
Registration = connect((state) => {
    return Object.assign({}, state.crud);
})(Registration);
export default create()(Registration);
