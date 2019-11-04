import React from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const create = Form.create;
const FormItem = Form.Item;
const { TextArea } = Input;
import * as api from '../../api/api';
import CRUD from '../CRUD/CRUD';
function KailiApplyBook({ form, record }) {
    const columns = [
        {
            title: '存款人名称',
            dataIndex: 'sname'
        },
        {
            title: '电话',
            dataIndex: 'phoneNumber'
        },
        {
            title: '地址',
            dataIndex: 'address'
        },
        {
            title: '邮编',
            dataIndex: 'postCode'
        },
        {
            title: '存款人类别',
            dataIndex: 'depositorsType'
        },
        {
            title: '组织机构代码',
            dataIndex: 'organization'
        },
        {
            title: '法定代表人或单位负责人',
            dataIndex: 'fadingAndDanwei'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '证件类型',
            dataIndex: 'paperType'
        },
        {
            title: '证件号码',
            dataIndex: 'paperNumber'
        },
        {
            title: '行业分类',
            dataIndex: 'industry'
        },
        {
            title: '注册资金',
            dataIndex: 'zijin'
        },
        {
            title: '地区代码',
            dataIndex: 'addressDaima'
        },
        {
            title: '经营范围',
            dataIndex: 'business'
        },
        {
            title: '证明文件种类',
            dataIndex: 'paperWenjian'
        },
        {
            title: '证明文件编号',
            dataIndex: 'paperBianhao'
        },
        {
            title: '税务登记证',
            dataIndex: 'tax'
        },
        {
            title: '账户性质',
            dataIndex: 'zhangHuNature'
        },
        {
            title: '资金性质',
            dataIndex: 'ziJiNature'
        },
        {
            title: '有效日期',
            render: (t, r) => {
                return r.year + "-" + r.moth + "-" + r.day;
            }
        },
        {
            title: '上级法人或主管单位名称',
            dataIndex: 'directorName'
        },
        {
            title: '基本存款账户开户许可证核准号',
            dataIndex: 'cunkuanZhangHu'
        },
        {
            title: '组织机构代码',
            dataIndex: 'zuZhiJiGou'
        },
        {
            title: '法定代表人或单位负责人',
            dataIndex: 'fadingDaiBiao'
        },
        {
            title: ' 姓名',
            dataIndex: 'fadingDaiBiaoName'
        },
        {
            title: '证件种类',
            dataIndex: 'fadingDaiBiaoType'
        },
        {
            title: '证件号码',
            dataIndex: 'fadingDaiBiaoNumber'
        },
    ];
    const { getFieldDecorator } = form;
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formNode = (<Form>
			<FormItem label="存款人名称" {...formCol}>
				{getFieldDecorator('sname', {
        initialValue: record.sname,
        rules: [{ required: true, message: '请填写存款人名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="电话" {...formCol}>
				{getFieldDecorator('phoneNumber', {
        initialValue: record.phoneNumber,
        rules: [{ required: true, message: '请填写电话' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="地址" {...formCol}>
				{getFieldDecorator('address', {
        initialValue: record.address,
        rules: [{ required: true, message: '请填写地址' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="邮编" {...formCol}>
				{getFieldDecorator('postCode', {
        initialValue: record.postCode,
        rules: [{ required: true, message: '请填写邮编' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="存款人类别" {...formCol}>
				{getFieldDecorator('depositorsType', {
        initialValue: record.depositorsType,
        rules: [{ required: true, message: '请填写存款人类别' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="组织机构代码" {...formCol}>
				{getFieldDecorator('organization', {
        initialValue: record.organization,
        rules: [{ required: true, message: '请填写组织机构代码' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="法定代表人或单位负责人" {...formCol}>
				{getFieldDecorator('fadingAndDanwei', {
        initialValue: record.fadingAndDanwei,
        rules: [{ required: true, message: '请填写法定代表人或单位负责人' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name', {
        initialValue: record.name,
        rules: [{ required: true, message: '请填写姓名' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('paperType', {
        initialValue: record.paperType,
        rules: [{ required: true, message: '请填写证件类型' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('paperNumber', {
        initialValue: record.paperNumber,
        rules: [{ required: true, message: '请填写证件号码' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="行业分类" {...formCol}>
				{getFieldDecorator('industry', {
        initialValue: record.industry,
        rules: [{ required: true, message: '请填写行业分类' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="注册资金" {...formCol}>
				{getFieldDecorator('zijin', {
        initialValue: record.zijin,
        rules: [{ required: true, message: '请填写注册资金' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="地区代码" {...formCol}>
				{getFieldDecorator('addressDaima', {
        initialValue: record.addressDaima,
        rules: [{ required: true, message: '请填写地区代码' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="经营范围" {...formCol}>
				{getFieldDecorator('business', {
        initialValue: record.business,
        rules: [{ required: true, message: '请填写经营范围' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证明文件种类" {...formCol}>
				{getFieldDecorator('paperWenjian', {
        initialValue: record.paperWenjian,
        rules: [{ required: true, message: '请填写证明文件种类' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证明文件编号" {...formCol}>
				{getFieldDecorator('paperBianhao', {
        initialValue: record.paperBianhao,
        rules: [{ required: true, message: '请填写地区证明文件编号' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="税务登记证" {...formCol}>
				{getFieldDecorator('tax', {
        initialValue: record.tax,
        rules: [{ required: true, message: '请填写税务登记证' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="账户性质" {...formCol}>
				{getFieldDecorator('zhangHuNature', {
        initialValue: record.zhangHuNature,
        rules: [{ required: true, message: '请填写账户性质' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="资金性质" {...formCol}>
				{getFieldDecorator('ziJiNature', {
        initialValue: record.ziJiNature,
        rules: [{ required: true, message: '请填写资金性质' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="年" {...formCol}>
				{getFieldDecorator('year', {
        initialValue: record.year,
        rules: [{ required: true, message: '请填写年' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="月" {...formCol}>
				{getFieldDecorator('moth', {
        initialValue: record.moth,
        rules: [{ required: true, message: '请填写月' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="日" {...formCol}>
				{getFieldDecorator('day', {
        initialValue: record.day,
        rules: [{ required: true, message: '请填写日' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="上级法人或主管单位名称" {...formCol}>
				{getFieldDecorator('directorName', {
        initialValue: record.directorName,
        rules: [{ required: true, message: '请填写上级法人或主管单位名称' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="基本存款账户开户许可证核准号" {...formCol}>
				{getFieldDecorator('cunkuanZhangHu', {
        initialValue: record.cunkuanZhangHu,
        rules: [{ required: true, message: '请填写基本存款账户开户许可证核准号' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="组织机构代码" {...formCol}>
				{getFieldDecorator('zuZhiJiGou', {
        initialValue: record.zuZhiJiGou,
        rules: [{ required: true, message: '请填写组织机构代码' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="法定代表人或单位负责人" {...formCol}>
				{getFieldDecorator('fadingDaiBiao', {
        initialValue: record.fadingDaiBiao,
        rules: [{ required: true, message: '请填写法定代表人或单位负责人' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('fadingDaiBiaoName', {
        initialValue: record.fadingDaiBiaoName,
        rules: [{ required: true, message: '请填写姓名' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件种类" {...formCol}>
				{getFieldDecorator('fadingDaiBiaoType', {
        initialValue: record.fadingDaiBiaoType,
        rules: [{ required: true, message: '请填写证件种类' }]
    })(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('fadingDaiBiaoNumber', {
        initialValue: record.fadingDaiBiaoNumber,
        rules: [{ required: true, message: '请填写证件号码' }]
    })(<Input />)}
			</FormItem>
		</Form>);
    const filters = [
        {
            name: 'sname',
            displayName: '存款人名称',
            option: 'like'
        }
    ];
    return (<CRUD form={form} getAllApi={new api.KailiApplyBookApi().appKailiApplyBookGetAll} deleteApi={new api.KailiApplyBookApi().appKailiApplyBookDelete} updateApi={new api.KailiApplyBookApi().appKailiApplyBookUpdate} createApi={new api.KailiApplyBookApi().appKailiApplyBookCreate} columns={columns} formNode={formNode} customColumnOption={(text, record) => (<span>
					<a onClick={() => {
        dispatch({
            type: "print/printKailiApplyBook",
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
KailiApplyBook = connect((state) => {
    return Object.assign({}, state.crud);
})(KailiApplyBook);
export default create()(KailiApplyBook);
