import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Select, Input, Button, Row, Col } from 'antd';
import styles from './LuruRegistration.css';
const FormItem = Form.Item;
const create = Form.create;
//用库
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function LuruRegistration({ dispatch, form, type_1, professional, tax, type_2, industry, product, professiona2, type_4, riqi_1, riqi_2, often_address1, unit_address1 }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);
            console.log(form);
            let data = {
                "year_1": values.Title_date.year(),
                "month_1": values.Title_date.month() + 1,
                "day_1": values.Title_date.day(),
                "name_1": values.name_1,
                "name_pinyin": values.name_pinyin,
                "gender_1": values.gender_1,
                "nationality_1": values.nationality_1,
                "phoneNumber": values.phoneNumber,
                "type_1": type_1,
                "number_1": values.number_1,
                "year_2": values.youxiaodate.year(),
                "month_2": values.youxiaodate.month() + 1,
                "day_2": values.youxiaodate.day(),
                "license": values.license,
                "often_address1": often_address1,
                "often_address2": values.often_address2,
                "often_address3": values.often_address3,
                "unit_address1": unit_address1,
                "unit_address2": values.unit_address2,
                "unit_address3": values.unit_address3,
                "professional": professional,
                "tax": tax,
                "number_2": values.number_2,
                "name_2": values.name_2,
                "gender_2": values.gender_2,
                "nationality_2": values.nationality_2,
                "type_2": type_2,
                "number_3": values.number_3,
                "year_3": values.dialirenyouxiaodate.year(),
                "month_3": values.dialirenyouxiaodate.month() + 1,
                "day_3": values.dialirenyouxiaodate.day(),
                "license2": values.license2,
                "phoneNumber2": values.phoneNumber2,
                "province": values.province,
                "city": values.city,
                "area": values.area,
                "type_3": values.type_3,
                "why": values.why,
                "marriage": values.marriage,
                "record": values.record,
                "family_number": values.family_number,
                "industry": industry,
                "unit_name": values.unit_name,
                "unit_number": values.unit_number,
                "email": values.email,
                "professiona2": professiona2,
                "product": product,
                "type_4": type_4,
                "type_number": values.type_number,
            };
            if (!err) {
                dispatch({
                    type: 'registration/createRegistration',
                    payload: data
                });
            }
        });
    }
    function handleReset() {
        form.resetFields();
    }
    function handlePrint() {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "year_1": values.Title_date.year(),
                    "month_1": values.Title_date.month() + 1,
                    "day_1": values.Title_date.day(),
                    "name_1": values.name_1,
                    "name_pinyin": values.name_pinyin,
                    "gender_1": values.gender_1,
                    "nationality_1": values.nationality_1,
                    "phoneNumber": values.phoneNumber,
                    "type_1": type_1,
                    "number_1": values.number_1,
                    "year_2": values.youxiaodate.year(),
                    "month_2": values.youxiaodate.month() + 1,
                    "day_2": values.youxiaodate.day(),
                    "license": values.license,
                    "often_address1": often_address1,
                    "often_address2": values.often_address2,
                    "often_address3": values.often_address3,
                    "unit_address1": unit_address1,
                    "unit_address2": values.unit_address2,
                    "unit_address3": values.unit_address3,
                    "professional": professional,
                    "tax": tax,
                    "number_2": values.number_2,
                    "name_2": values.name_2,
                    "gender_2": values.gender_2,
                    "nationality_2": values.nationality_2,
                    "type_2": type_2,
                    "number_3": values.number_3,
                    "year_3": values.dialirenyouxiaodate.year(),
                    "month_3": values.dialirenyouxiaodate.month() + 1,
                    "day_3": values.dialirenyouxiaodate.day(),
                    "license2": values.license2,
                    "phoneNumber2": values.phoneNumber2,
                    "province": values.province,
                    "city": values.city,
                    "area": values.area,
                    "type_3": values.type_3,
                    "why": values.why,
                    "marriage": values.marriage,
                    "record": values.record,
                    "family_number": values.family_number,
                    "industry": industry,
                    "unit_name": values.unit_name,
                    "unit_number": values.unit_number,
                    "email": values.email,
                    "professiona2": professiona2,
                    "product": product,
                    "type_4": type_4,
                    "type_number": values.type_number,
                };
                dispatch({
                    type: "print/printRegistration",
                    payload: data
                });
            }
        });
    }
    const changeOften_address1 = function (o) {
        dispatch({
            type: 'registration/setState',
            payload: { often_address1: o }
        });
    };
    const changeUnit_address1 = function (u) {
        dispatch({
            type: 'registration/setState',
            payload: { unit_address1: u }
        });
    };
    const changeType_1 = function (t) {
        dispatch({
            type: 'registration/setState',
            payload: { type_1: t }
        });
    };
    const changeType_2 = function (t2) {
        dispatch({
            type: 'registration/setState',
            payload: { type_2: t2 }
        });
    };
    const changeProfessional = function (p) {
        dispatch({
            type: 'registration/setState',
            payload: { professional: p }
        });
    };
    const changeTax = function (a) {
        dispatch({
            type: 'registration/setState',
            payload: { tax: a }
        });
    };
    const changeIndustry = function (i) {
        dispatch({
            type: 'registration/setState',
            payload: { industry: i }
        });
    };
    const changeProduct = function (p) {
        dispatch({
            type: 'registration/setState',
            payload: { product: p }
        });
    };
    const changeProfessiona2 = function (p2) {
        dispatch({
            type: 'registration/setState',
            payload: { professiona2: p2 }
        });
    };
    const changeType_4 = function (t4) {
        dispatch({
            type: 'registration/setState',
            payload: { type_4: t4 }
        });
    };
    const changeRiqi_1 = function (r1) {
        dispatch({
            type: 'registration/setState',
            payload: { riqi_1: r1 }
        });
    };
    const changeRiqi_2 = function (r) {
        dispatch({
            type: 'registration/setState',
            payload: { riqi_2: r }
        });
    };
    const formCol = {
        labelCol: { span: 3 },
        wrapperCol: { span: 12 }
    };
    const formCol_4 = {
        labelCol: { span: 3 },
        wrapperCol: { span: 6 }
    };
    const formCol_3 = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formCol_2 = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };
    return (<div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.title}>
                    <Link to="/"><Row className={styles.logo}></Row></Link>
                    <Row className={styles.title}>个人客户信息登记表</Row>
                </header>

                <section>
                    <Form onSubmit={handleSubmit}>

                        <div className={styles.date}>
                            <FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
                                {getFieldDecorator('Title_date', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
                            </FormItem>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <div className={styles.customer}>客户信息(必填)</div>
                                <div className={styles.BorderBottom}></div>
                                <Row className={styles.block}>
                                    <Col span={9}>
                                        <FormItem label='姓名' {...formCol}>
                                            {getFieldDecorator('name_1', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label='姓名拼音' {...formCol}>
                                            {getFieldDecorator('name_pinyin', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='性别' {...formCol}>
                                            {getFieldDecorator('gender_1', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="男">男</Option>
                                                    <Option value="女">女</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem label='国籍/地区' {...formCol_2}>
                                            {getFieldDecorator('nationality_1', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem label='手机号码' {...formCol_2}>
                                            {getFieldDecorator('phoneNumber', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={15}>
                                        <FormItem label='证件类型' {...formCol}>
                                            {getFieldDecorator('type_1', {})(<Select>
                                                    <Option value="居民身份证">居民身份证</Option>
                                                    <Option value="临时身份证">临时身份证</Option>
                                                    <Option value="中国护照">中国护照</Option>
                                                    <Option value="户口簿(仅供未满16周岁客户)">户口簿(仅供未满16周岁客户)</Option>
                                                    <Option value="军官证">军官证</Option>
                                                    <Option value="武警证">武警证</Option>
                                                    <Option value="港澳居民来往内地通行证">港澳居民来往内地通行证</Option>
                                                    <Option value="台湾居民来往大陆通行证">台湾居民来往大陆通行证</Option>
                                                    <Option value="外国人永久居留身份证">外国人永久居留身份证</Option>
                                                    <Option value="边民出入境通行证">边民出入境通行证</Option>
                                                    <Option value="外国护照">外国护照</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={12}>
                                        <FormItem label='证件号码' {...formCol}>
                                            {getFieldDecorator('number_1', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label='有效日期至' {...formCol_2}>
                                            {getFieldDecorator('youxiaodate', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={12}>
                                        <FormItem label='发证机关' {...formCol}>
                                            {getFieldDecorator('license', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Row style={{ fontWeight: 'bold' }}>联系地址:</Row>
                                    <Col span={15} style={{ height: '50px' }}>
                                        <span>常住地址:</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('often_address1', {})(<Input className={styles.AddressInput1}/>)}
                                        </FormItem>
                                        <span className={styles.sheng}>(省/自治区/直辖市)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('often_address2', {})(<Input className={styles.AddressInput2}/>)}
                                        </FormItem>
                                        <span className={styles.shi}>(市/区/县)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('often_address3', {})(<Input className={styles.AddressInput3}/>)}
                                        </FormItem>
                                        <span className={styles.qu}>(街道/小区/门牌号)</span>
                                    </Col>
                                    <Col span={15} style={{ height: '50px' }}>
                                        <span>单位地址:</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('unit_address1', {})(<Input className={styles.AddressInput1}/>)}
                                        </FormItem>
                                        <span className={styles.sheng}>(省/自治区/直辖市)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('unit_address2', {})(<Input className={styles.AddressInput2}/>)}
                                        </FormItem>
                                        <span className={styles.shi}>(市/区/县)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('unit_address3', {})(<Input className={styles.AddressInput3}/>)}
                                        </FormItem>
                                        <span className={styles.qu}>(街道/小区/门牌号)</span>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={10}>
                                        <FormItem label='职业' {...formCol}>
                                            {getFieldDecorator('professional', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="公务员">公务员</Option>
                                                    <Option value="军人、警察">军人、警察</Option>
                                                    <Option value="企事业单位负责人">企事业单位负责人</Option>
                                                    <Option value="群众团队、社会团队和其他成员组织人员">群众团队、社会团队和其他成员组织人员</Option>
                                                    <Option value="事业单位员工">事业单位员工</Option>
                                                    <Option value="公司员工">公司员工</Option>
                                                    <Option value="专业技术人员">专业技术人员</Option>
                                                    <Option value="服务业从业人员">服务业从业人员</Option>
                                                    <Option value="农民">农民</Option>
                                                    <Option value="学生">学生</Option>
                                                    <Option value="私营业主">私营业主</Option>
                                                    <Option value="自由职业者">自由职业者</Option>
                                                    <Option value="离退休人员">离退休人员</Option>
                                                    <Option value="外国政要、国际组织高级管理人员及其关系人">外国政要、国际组织高级管理人员及其关系人</Option>
                                                    <Option value="无职业">无职业</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={10}>
                                        <FormItem label='税收居民身份' {...formCol_2}>
                                            {getFieldDecorator('tax', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="仅为中国纳税居民">仅为中国纳税居民</Option>
                                                    <Option value="仅为非居民">仅为非居民</Option>
                                                    <Option value="既是中国税收居民又是其他国家(地区)税收居民">既是中国税收居民又是其他国家(地区)税收居民</Option>
                                                </Select>)}
                                        </FormItem>
                                        <div className={styles.note}>
                                            <span>注:1.如此处勾选“仅为非居民”或"既是中国税收居民又是其他国家(地区)税收居民"，请您填写《个人税收居民身份声明文件;</span><br />
                                            <span>  2.军人、武装警察无需填写此项</span>
                                        </div>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <div className={styles.customer}>
                                    是否为美国纳税居民
                                 </div>
                                <div className={styles.BorderBottom}></div>
                                <Row className={styles.block}>
                                    <Col>
                                        <FormItem label='美国纳税人识别号' {...formCol_2}>
                                            {getFieldDecorator('number_2', {})(<Input className={styles.input_1}/>)}
                                            <span>(如果"有",请提供美国纳税识别号)</span>
                                        </FormItem>
                                        <div className={styles.americal}>
                                            <span>注:美国纳税居民是指根据相关法规及税收协定,在美国负有纳税义务的个人。主要包括:美国国籍，或持有美国绿卡或在美国长期逗留的自然人。</span><br />
                                        </div>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <div className={styles.customer}>
                                    代理人/监护人信息(若代理人/监护人办理，则以下信息(必填)
                                 </div>
                                <div className={styles.BorderBottom}></div>
                                <Row className={styles.block}>
                                    <Col span={9}>
                                        <FormItem label='姓名' {...formCol}>
                                            {getFieldDecorator('name_2', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem label='性别' {...formCol}>
                                            {getFieldDecorator('gender_2', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="男">男</Option>
                                                    <Option value="女">女</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem label='国籍/地区' {...formCol_2}>
                                            {getFieldDecorator('nationality_2', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={7}>
                                        <FormItem label='证件类型' {...formCol_2}>
                                            {getFieldDecorator('type_2', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value=" 证件类型"> 证件类型</Option>
                                                    <Option value=" 中国护照 "> 中国护照 </Option>
                                                    <Option value=" 证件类型"> 证件类型</Option>
                                                    <Option value=" 军官证 ">   军官证 </Option>
                                                    <Option value=" 武警证"> 武警证</Option>
                                                    <Option value=" 港澳居民来往内地通行证 "> 港澳居民来往内地通行证 </Option>
                                                    <Option value=" 台湾居民来往大陆通行证"> 台湾居民来往大陆通行证</Option>
                                                    <Option value=" 外国人永久居留身份证 "> 外国人永久居留身份证 </Option>
                                                    <Option value=" 边民出入境通行证"> 边民出入境通行证</Option>
                                                    <Option value=" 外国护照 ">   外国护照 </Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row className={styles.block}>
                                    <Col span={12}>
                                        <FormItem label='证件号码' {...formCol}>
                                            {getFieldDecorator('number_3', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label='有效日期至' {...formCol_2}>
                                            {getFieldDecorator('dialirenyouxiaodate', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
                                        </FormItem>
                                    </Col>

                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row className={styles.block}>
                                    <Col span={12}>
                                        <FormItem label='发证机关' {...formCol}>
                                            {getFieldDecorator('license2', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <FormItem label='手机号码' {...formCol}>
                                            {getFieldDecorator('phoneNumber2', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Row style={{ fontWeight: 'bold' }}>联系地址:</Row>
                                    <Col span={15} style={{ height: '50px' }}>
                                        <span>常住地址:</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('province', {})(<Input className={styles.AddressInput1}/>)}
                                        </FormItem>
                                        <span className={styles.sheng}>(省/自治区/直辖市)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('city', {})(<Input className={styles.AddressInput2}/>)}
                                        </FormItem>
                                        <span className={styles.shi}>(市/区/县)</span>
                                        <FormItem label='' {...formCol_4}>
                                            {getFieldDecorator('area', {})(<Input className={styles.AddressInput3}/>)}
                                        </FormItem>
                                        <span className={styles.qu}>(街道/小区/门牌号)</span>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='类型' {...formCol}>
                                            {getFieldDecorator('type_3', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="代理人">代理人</Option>
                                                    <Option value="监护人">监护人</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={7}>
                                        <FormItem label='代理原因' {...formCol_2}>
                                            {getFieldDecorator('why', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <div className={styles.customer}>
                                    客户补充信息(选填)
                                  </div>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={8}>
                                        <FormItem label='婚姻状况' {...formCol_2}>
                                            {getFieldDecorator('marriage', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem label='最高学历' {...formCol_2}>
                                            {getFieldDecorator('record', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={8}>
                                        <FormItem label='家庭电话' {...formCol_2}>
                                            {getFieldDecorator('family_number', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='行业' {...formCol}>
                                            {getFieldDecorator('industry', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="机关事业单位">机关事业单位</Option>
                                                    <Option value="部队">部队</Option>
                                                    <Option value="国际组织">国际组织</Option>
                                                    <Option value="教育">教育</Option>
                                                    <Option value="医疗卫生业">医疗卫生业</Option>
                                                    <Option value="金融业">金融业</Option>
                                                    <Option value="律所、会计事务所等咨询业">律所、会计事务所等咨询业</Option>
                                                    <Option value="房地产业">房地产业</Option>
                                                    <Option value="通讯IT技术业">通讯IT技术业</Option>
                                                    <Option value="交通运输仓储邮政业">交通运输仓储邮政业</Option>
                                                    <Option value="水电气生产及供应业">水电气生产及供应业</Option>
                                                    <Option value="采矿业">采矿业</Option>
                                                    <Option value="制造业">制造业</Option>

                                                    <Option value="建筑业">建筑业</Option>
                                                    <Option value="农林牧渔业">农林牧渔业</Option>
                                                    <Option value="旅游业">旅游业</Option>
                                                    <Option value="制造业">批发零售业</Option>
                                                    <Option value="进出口贸易业">进出口贸易业</Option>
                                                    <Option value="住宿餐饮业">住宿餐饮业</Option>
                                                    <Option value="文化娱乐体育业">文化娱乐体育业</Option>
                                                    <Option value="租赁和商务服务业">租赁和商务服务业</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={7}>
                                        <FormItem label='单位名称' {...formCol_2}>
                                            {getFieldDecorator('unit_name', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem label='单位电话' {...formCol_2}>
                                            {getFieldDecorator('unit_number', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                    <Col span={7}>
                                        <FormItem label='电子邮箱' {...formCol_2}>
                                            {getFieldDecorator('email', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='职务' {...formCol}>
                                            {getFieldDecorator('professiona2', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="老板/CEO">老板/CEO</Option>
                                                    <Option value="高级管理人员">高级管理人员</Option>
                                                    <Option value="中层管理人员">中层管理人员</Option>
                                                    <Option value="一般职员">一般职员</Option>
                                                </Select>)}

                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='你感兴趣的产品' {...formCol_3}>
                                            {getFieldDecorator('product', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="资金">资金</Option>
                                                    <Option value="债券产品">债券产品</Option>
                                                    <Option value="保险产品">保险产品</Option>
                                                    <Option value="信托理财类">信托理财类</Option>
                                                    <Option value="银行理财类">银行理财类</Option>
                                                    <Option value="海外投资类">海外投资类</Option>
                                                    <Option value="外币类">外币类</Option>
                                                    <Option value="信托理财类">信托理财类</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='辅助证件类型' {...formCol_3}>
                                            {getFieldDecorator('type_4', {})(<Select style={{ width: 200 }} onChange={handleChange}>
                                                    <Option value="户口簿">户口簿</Option>
                                                    <Option value="中国护照">中国护照</Option>
                                                    <Option value="外国护照">外国护照</Option>
                                                    <Option value="机动车驾驶证">机动车驾驶证</Option>
                                                    <Option value="公安机关出具的户籍证明">公安机关出具的户籍证明</Option>
                                                    <Option value="社会保障卡">社会保障卡</Option>
                                                    <Option value="居住证">居住证</Option>
                                                    <Option value="在台湾居住的有效身份证明">在台湾居住的有效身份证明</Option>
                                                    <Option value="香港、澳门特别行政区居民身份证">香港、澳门特别行政区居民身份证</Option>
                                                    <Option value="外国居民身份证">外国居民身份证</Option>
                                                    <Option value="使领馆人员身份证件">使领馆人员身份证件</Option>
                                                    <Option value="完税证明">完税证明</Option>
                                                    <Option value="水电煤等缴费证明">水电煤等缴费证明</Option>
                                                </Select>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div className={styles.BorderBottom}></div>
                                <Row>
                                    <Col span={9}>
                                        <FormItem label='辅助证件号码' {...formCol_3}>
                                            {getFieldDecorator('type_number', {})(<Input className={styles.input}/>)}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Row>
                                <Col span={4}>
                                    <Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
                                </Col>

                                <Col offset={5} span={8}>
                                    <Button.Group size='large'>
                                        <Button type="primary" htmlType="submit">提交</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handlePrint(); }}>打印</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handleReset(); }}>重置</Button>
                                    </Button.Group>
                                </Col>
                            </Row>

                        </div>

                    </Form>
                </section>
            </div>
        </div>);
}
LuruRegistration = connect((state) => {
    return Object.assign({}, state.registration);
})(LuruRegistration);
export default create()(LuruRegistration);
