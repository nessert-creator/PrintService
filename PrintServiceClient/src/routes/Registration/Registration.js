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
            title: '填表日期',
            render: (t, r) => {
                return r.year_1 + "-" + r.month_1 + "-" + r.day_1;
            }
        },
        {
            title: '姓名',
            dataIndex: 'name_1'
        },
        {
            title: '姓名拼音',
            dataIndex: 'name_pinyin'
        },
        {
            title: '性别',
            dataIndex: 'gender_1'
        },
        {
            title: '国际/地区',
            dataIndex: 'nationality_1'
        },
        {
            title: '手机号码',
            dataIndex: 'phoneNumber'
        },
        {
            title: '证件类型',
            dataIndex: 'type_1'
        },
        {
            title: '证件号码',
            dataIndex: 'number_1'
        },
        {
            title: '证件有效日期',
            render: (t, r) => {
                return r.year_2 + "-" + r.month_2 + "-" + r.day_2;
            }
        },
        {
            title: '发证机关',
            dataIndex: 'license'
        },
        {
            title: '常住地址',
            render: (t, r) => {
                return r.often_address1 + r.often_address2 + r.often_address3;
            }
        },
        {
            title: '单位地址',
            render: (t, r) => {
                return r.unit_address1 + r.unit_address2 + r.unit_address3;
            }
        },
        {
            title: '职业',
            dataIndex: 'professional'
        },
        {
            title: '税收居民身份',
            dataIndex: 'tax'
        },
        {
            title: '美国纳税人识别号',
            dataIndex: 'number_2'
        },
        {
            title: '姓名',
            dataIndex: 'name_2'
        },
        {
            title: '性别',
            dataIndex: 'gender_2'
        },
        {
            title: '国际/地区',
            dataIndex: 'nationality_2'
        },
        {
            title: '证件类型',
            dataIndex: 'type_2'
        },
        {
            title: '证件号码',
            dataIndex: 'number_3'
        },
        {
            title: '证件有效日期',
            render: (t, r) => {
                return r.year_3 + "-" + r.month_3 + "-" + r.day_3;
            }
        },
        {
            title: '发证机关',
            dataIndex: 'license2'
        },
        {
            title: '手机号码',
            dataIndex: 'phoneNumber2'
        },
        {
            title: '联系地址',
            render: (t, r) => {
                return r.province + r.city + r.area;
            }
        },
        {
            title: '类型',
            dataIndex: 'type_3'
        },
        {
            title: '代理原因',
            dataIndex: 'why'
        },
        // 客户补充信息
        {
            title: '婚姻状况',
            dataIndex: 'marriage'
        },
        {
            title: '最高学历',
            dataIndex: 'record'
        },
        {
            title: '家庭电话',
            dataIndex: 'family_number'
        },
        {
            title: '行业',
            dataIndex: 'industry'
        },
        {
            title: '单位名称',
            dataIndex: 'unit_name'
        },
        {
            title: '单位电话',
            dataIndex: 'unit_number'
        },
        {
            title: '电子邮箱',
            dataIndex: 'email'
        },
        {
            title: '职务',
            dataIndex: 'professiona2'
        },
        {
            title: '感兴趣的产品',
            dataIndex: 'product'
        },
        {
            title: '辅助证件类型',
            dataIndex: 'type_4'
        },
        {
            title: '注明',
            dataIndex: 'indicate'
        },
        {
            title: '辅助证件号码',
            dataIndex: 'type_number'
        }
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
			<FormItem label="填表日期-年" {...formCol}>
				{getFieldDecorator('year_1', {
        initialValue: record.year_1
    })(<Input />)}
			</FormItem>
			<FormItem label="填表日期-月" {...formCol}>
				{getFieldDecorator('month_1', {
        initialValue: record.month_1
    })(<Input />)}
			</FormItem>
			<FormItem label="填表日期-日" {...formCol}>
				{getFieldDecorator('day_1', {
        initialValue: record && record.day_1
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_1', {
        initialValue: record && record.name_1
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名拼音" {...formCol}>
				{getFieldDecorator('name_pinyin', {
        initialValue: record && record.name_pinyin
    })(<Input />)}
			</FormItem>
			<FormItem label="性别" {...formCol}>
				{getFieldDecorator('gender_1', {
        initialValue: record && record.gender_1
    })(<Input />)}
			</FormItem>
			<FormItem label="国际/地区" {...formCol}>
				{getFieldDecorator('nationality_1', {
        initialValue: record && record.nationality_1
    })(<Input />)}
			</FormItem>
			<FormItem label="手机号码" {...formCol}>
				{getFieldDecorator('phoneNumber', {
        initialValue: record && record.phoneNumber
    })(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_1', {
        initialValue: record && record.type_1
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_1', {
        initialValue: record && record.number_1
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-年" {...formCol}>
				{getFieldDecorator('year_2', {
        initialValue: record && record.year_2
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-月" {...formCol}>
				{getFieldDecorator('month_2', {
        initialValue: record && record.month_2
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-日" {...formCol}>
				{getFieldDecorator('day_2', {
        initialValue: record && record.day_2
    })(<Input />)}
			</FormItem>
			<FormItem label="发证机关" {...formCol}>
				{getFieldDecorator('license', {
        initialValue: record && record.license
    })(<Input />)}
			</FormItem>
			<FormItem label="常住地址-省/自治区/直辖市" {...formCol}>
				{getFieldDecorator('often_address1', {
        initialValue: record && record.often_address1
    })(<Input />)}
			</FormItem>
			<FormItem label="常住地址-市/区/县" {...formCol}>
				{getFieldDecorator('often_address2', {
        initialValue: record && record.often_address2
    })(<Input />)}
			</FormItem>
			<FormItem label="常住地址-街道/小区/门牌号" {...formCol}>
				{getFieldDecorator('often_address3', {
        initialValue: record && record.often_address3
    })(<Input />)}
			</FormItem>
			<FormItem label="单位地址-省/自治区/直辖市" {...formCol}>
				{getFieldDecorator('unit_address1', {
        initialValue: record && record.unit_address1
    })(<Input />)}
			</FormItem>
			<FormItem label="单位地址-市/区/县" {...formCol}>
				{getFieldDecorator('unit_address2', {
        initialValue: record && record.unit_address2
    })(<Input />)}
			</FormItem>
			<FormItem label="单位地址-街道/小区/门牌号" {...formCol}>
				{getFieldDecorator('unit_address3', {
        initialValue: record && record.unit_address3
    })(<Input />)}
			</FormItem>
			<FormItem label="职业" {...formCol}>
				{getFieldDecorator('professional', {
        initialValue: record && record.professional
    })(<Input />)}
			</FormItem>
			<FormItem label="税收居民身份" {...formCol}>
				{getFieldDecorator('tax', {
        initialValue: record && record.tax
    })(<Input />)}
			</FormItem>
			<FormItem label="美国纳税人识别号" {...formCol}>
				{getFieldDecorator('number_2', {
        initialValue: record && record.number_2
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_2', {
        initialValue: record && record.name_2
    })(<Input />)}
			</FormItem>
			<FormItem label="性别" {...formCol}>
				{getFieldDecorator('gender_2', {
        initialValue: record && record.gender_2
    })(<Input />)}
			</FormItem>
			<FormItem label="国际/地区" {...formCol}>
				{getFieldDecorator('nationality_2', {
        initialValue: record && record.nationality_2
    })(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_2', {
        initialValue: record.type_2 && record.type_2
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_3', {
        initialValue: record && record.number_3
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-年" {...formCol}>
				{getFieldDecorator('year_3', {
        initialValue: record && record.year_3
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-月" {...formCol}>
				{getFieldDecorator('month_3', {
        initialValue: record && record.month_3
    })(<Input />)}
			</FormItem>
			<FormItem label="证件有效日期-日" {...formCol}>
				{getFieldDecorator('day_3', {
        initialValue: record && record.day_3
    })(<Input />)}
			</FormItem>
			<FormItem label="发证机关" {...formCol}>
				{getFieldDecorator('license2', {
        initialValue: record && record.license2
    })(<Input />)}
			</FormItem>
			<FormItem label="手机号码" {...formCol}>
				{getFieldDecorator('phoneNumber2', {
        initialValue: record && record.phoneNumber2
    })(<Input />)}
			</FormItem>
			<FormItem label="联系地址-省/自治区/直辖市" {...formCol}>
				{getFieldDecorator('province', {
        initialValue: record && record.province
    })(<Input />)}
			</FormItem>
			<FormItem label="联系地址-市/区/县" {...formCol}>
				{getFieldDecorator('city', {
        initialValue: record && record.city
    })(<Input />)}
			</FormItem>
			<FormItem label="联系地址-街道/小区/门牌号" {...formCol}>
				{getFieldDecorator('area', {
        initialValue: record && record.area
    })(<Input />)}
			</FormItem>
			
			<FormItem label="类型" {...formCol}>
				{getFieldDecorator('type_3', {
        initialValue: record && record.type_3
    })(<Input />)}
			</FormItem>
			<FormItem label="代理原因" {...formCol}>
				{getFieldDecorator('why', {
        initialValue: record && record.why
    })(<Input />)}
			</FormItem>
			<FormItem label="婚姻状况" {...formCol}>
				{getFieldDecorator('marriage', {
        initialValue: record && record.marriage
    })(<Input />)}
			</FormItem>
			<FormItem label="最高学历" {...formCol}>
				{getFieldDecorator('record', {
        initialValue: record && record.record
    })(<Input />)}
			</FormItem>
			<FormItem label="家庭电话" {...formCol}>
				{getFieldDecorator('family_number', {
        initialValue: record && record.family_number
    })(<Input />)}
			</FormItem>
			<FormItem label="行业" {...formCol}>
				{getFieldDecorator('industry', {
        initialValue: record && record.industry
    })(<Input />)}
			</FormItem>
			<FormItem label="单位名称" {...formCol}>
				{getFieldDecorator('unit_name', {
        initialValue: record && record.unit_name
    })(<Input />)}
			</FormItem>
			<FormItem label="单位电话" {...formCol}>
				{getFieldDecorator('unit_number', {
        initialValue: record && record.unit_number
    })(<Input />)}
			</FormItem>
			<FormItem label="电子邮箱" {...formCol}>
				{getFieldDecorator('email', {
        initialValue: record && record.email
    })(<Input />)}
			</FormItem>
			<FormItem label="职务" {...formCol}>
				{getFieldDecorator('professiona2', {
        initialValue: record && record.professiona2
    })(<Input />)}
			</FormItem>
			<FormItem label="感兴趣的产品" {...formCol}>
				{getFieldDecorator('product', {
        initialValue: record && record.product
    })(<Input />)}
			</FormItem>
			<FormItem label="辅助证件类型" {...formCol}>
				{getFieldDecorator('type_4', {
        initialValue: record && record.type_4
    })(<Input />)}
			</FormItem>
			<FormItem label="注明" {...formCol}>
				{getFieldDecorator('indicate', {
        initialValue: record && record.indicate
    })(<Input />)}
			</FormItem>
			<FormItem label="辅助证件号码" {...formCol}>
				{getFieldDecorator('type_number', {
        initialValue: record && record.type_number
    })(<Input />)}
			</FormItem>
		</Form>);
    const filters = [
        {
            name: 'name_1',
            displayName: '客户名称',
            option: 'like'
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
