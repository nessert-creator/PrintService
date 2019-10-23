import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Select, Input, Button, Checkbox, message, Row, Col, InputNumber } from 'antd';
import styles from './LuruRegistration.css';

const FormItem = Form.Item;
const create = Form.create;
const Option = Select.Option;


import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

//性别
import { Radio } from 'antd';
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
                "riqi_1": riqi_1,
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
                "riqi_2": riqi_2,
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
                "indicate": values.indicate,
                "type_number": values.type_number,
                "signature": values.signature,
                // "year_4": values.qianmingdate.year(),
                // "month_4": values.qianmingdate.month() + 1,
                // "day_4": values.qianmingdate.day(),
            };

            if (!err) {
                dispatch({
                    type: 'registration/createRegistration',
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
    }
    const changeUnit_address1 = function (u) {
        dispatch({
            type: 'registration/setState',
            payload: { unit_address1: u }
        });
    }
    const changeType_1 = function (t) {
        dispatch({
            type: 'registration/setState',
            payload: { type_1: t }
        });
    }

    const changeType_2 = function (t2) {
        dispatch({
            type: 'registration/setState',
            payload: { type_2: t2 }
        });
    }
    const changeProfessional = function (p) {
        dispatch({
            type: 'registration/setState',
            payload: { professional: p }
        });
    }
    const changeTax = function (a) {
        dispatch({
            type: 'registration/setState',
            payload: { tax: a }
        });
    }
    const changeIndustry = function (i) {
        dispatch({
            type: 'registration/setState',
            payload: { industry: i }
        });
    }
    const changeProduct = function (p) {
        dispatch({
            type: 'registration/setState',
            payload: { product: p }
        });
    }
    const changeProfessiona2 = function (p2) {
        dispatch({
            type: 'registration/setState',
            payload: { professiona2: p2 }
        });
    }
    const changeType_4 = function (t4) {
        dispatch({
            type: 'registration/setState',
            payload: { type_4: t4 }
        });
    }
    const changeRiqi_1 = function (r1) {
        dispatch({
            type: 'registration/setState',
            payload: { riqi_1: r1 }
        });
    }
    const changeRiqi_2 = function (r) {
        dispatch({
            type: 'registration/setState',
            payload: { riqi_2: r }
        });
    }

    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };

    const formCol_1 = {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 }
    };

    const formCol_2 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
    };

    return (
        <div className={styles.container}>
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
                                })(
                                    <DatePicker className={styles.datePicker} />
                                )}
                            </FormItem>
                        </div>
                        <div className={styles.outsideborder}>
                            <div className={styles.customer}>客户信息(必填)</div>
                            <Row className={styles.block}>
                                <Col span={7}>
                                    <FormItem label='姓名' {...formCol} >
                                        {getFieldDecorator('name_1', {
                                            //rules: [{ required: true, message: '请输入姓名！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={16}>
                                    <FormItem label='姓名拼音' {...formCol} >
                                        {getFieldDecorator('name_pinyin', {
                                            //rules: [{ required: true, message: '请输入姓名拼音！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.block}>
                                <Col span={7}>
                                    <FormItem label='性别' {...formCol} >
                                        {getFieldDecorator('gender_1', {
                                            //rules: [{ required: true, message: '请输入性别！' }]
                                        })(
                                            <Radio.Group name="性别" defaultValue={1}>
                                                <Radio value={"男"}>男</Radio>
                                                <Radio value={"女"}>女</Radio>
                                            </Radio.Group>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={8}>
                                    <FormItem label='国籍/地区' {...formCol} >
                                        {getFieldDecorator('nationality_1', {
                                            //rules: [{ requRadioired: true, message: '请输入国籍/地区！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={9}>
                                    <FormItem label='手机号码' {...formCol} >
                                        {getFieldDecorator('phoneNumber', {
                                            //rules: [{ required: true, message: '请输入手机号码！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>

                                <Col span={12}>
                                    <FormItem label='证件类型' {...formCol}>
                                        {getFieldDecorator('type_1', {
                                            //rules: [{ required: true, message: '请输入证件类型！' }]
                                        })(
                                            <Select>
                                                <Option value="居民身份证">居民身份证</Option>
                                                <Option value="临时身份证">临时身份证</Option>
                                                <Option value="中国护照" >中国护照</Option>
                                                <Option value="户口簿(仅供未满16周岁客户)">户口簿(仅供未满16周岁客户)</Option>
                                                <Option value="军官证" >军官证</Option>
                                                <Option value="武警证" >武警证</Option>
                                                <Option value="港澳居民来往内地通行证" >港澳居民来往内地通行证</Option>
                                                <Option value="台湾居民来往大陆通行证" >台湾居民来往大陆通行证</Option>
                                                <Option value="外国人永久居留身份证" >外国人永久居留身份证</Option>
                                                <Option value="边民出入境通行证" >边民出入境通行证</Option>
                                                <Option value="外国护照" >外国护照</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label='证件号码' {...formCol} >
                                        {getFieldDecorator('number_1', {
                                            //rules: [{ required: true, message: '请输入证件号码！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label='证件有效期限到期日' {...formCol} >
                                        {getFieldDecorator('riqi_1', {
                                            // //rules: [{ required: false, message: '请输入证件有效期限到期日！' }]
                                        })(
                                            <Row>
                                                <Col span={17}>
                                                    <Radio onChange={() => {
                                                        changeRiqi_1(DatePicker)
                                                    }} checked={riqi_1 == DatePicker} name="证件有效期限到期日">
                                                        <FormItem label='' {...formCol} >
                                                            {getFieldDecorator('youxiaodate', {
                                                                // //rules: [{ required: false, message: '请输入证件有效期限到期日！' }]
                                                            })(
                                                                <DatePicker className={styles.DatePicker} />
                                                            )}
                                                        </FormItem>
                                                    </Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeRiqi_1("长期")
                                                    }} checked={riqi_1 == "长期"} name="证件有效期限到期日">长期</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label='发证机关' {...formCol} >
                                        {getFieldDecorator('license', {
                                            //rules: [{ required: true, message: '请输入发证机关！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col className={styles.often_address1} >

                                    <FormItem label='联系地址' {...formCol}>
                                        <Radio onChange={() => {
                                            changeOften_address1("常住地址")
                                        }} checked={often_address1 == "常住地址"} name="联系地址">
                                            <span>常住地址</span>
                                            {getFieldDecorator('often_address1', {
                                                // rules: [{ required: true, message: '请输入省/自治区/直辖市！' }]
                                            })(
                                                <Input className={styles.input} />
                                            )}
                                            <span className={styles.sheng}>省/自治区/直辖市</span>
                                        </Radio>
                                    </FormItem>
                                    <FormItem label='' {...formCol} >
                                        {getFieldDecorator('often_address2', {
                                            //  rules: [{ required: true, message: '请输入市/区/县！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                        <span className={styles.shi}>市/区/县</span>
                                    </FormItem>
                                    <FormItem label='' {...formCol} >
                                        {getFieldDecorator('often_address3', {
                                            //rules: [{ required: true, message: '请输入街道/小区/门牌号！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                        <span className={styles.qu}>街道/小区/门牌号</span>
                                    </FormItem>

                                </Col>
                                <Col className={styles.often_address2}>

                                    <FormItem label='' {...formCol} className={styles.often_addressH}>

                                        <Radio onChange={() => {
                                            changeUnit_address1("单位地址")
                                        }} checked={unit_address1 == "单位地址"} name="单位地址">
                                            < span className={styles.span} > 单位地址</span>
                                            {getFieldDecorator('unit_address1', {
                                                // rules: [{ required: true, message: '请输入省/自治区/直辖市！' }]
                                            })(
                                                <Input className={styles.input} />
                                            )}
                                            <span className={styles.sheng2}>省/自治区/直辖市</span>
                                        </Radio>
                                    </FormItem>
                                    <FormItem label='' {...formCol} className={styles.shi3}>
                                        {getFieldDecorator('unit_address2', {
                                            // rules: [{ required: true, message: '请输入市/区/县！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                        <span className={styles.shi2}>市/区/县</span>
                                    </FormItem>
                                    <FormItem label='' {...formCol} >
                                        {getFieldDecorator('unit_address3', {
                                            //rules: [{ required: true, message: '请输入市/区/县！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                        <span className={styles.qu2}>街道/小区/门牌号</span>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col >
                                    <FormItem label='职业' {...formCol} style={{ position: 'relative', left: '-624px' }}>
                                        {getFieldDecorator('professional', {
                                            //rules: [{ required: true, message: '请输入证件类型！' }]
                                        })(
                                            <Row style={{ width: '200%', position: 'relative', left: '711px', top: '-37px' }}>
                                                <Col span={2}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("公务员")
                                                    }} checked={professional == "公务员"} name="职业">公务员</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("军人、警察")
                                                    }} checked={professional == "军人、警察"} name="职业">军人、警察</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("企事业单位负责人")
                                                    }} checked={professional == "企事业单位负责人"} name="职业">企事业单位负责人</Radio>
                                                </Col>
                                                <Col span={9}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("群众团队、社会团队和其他成员组织人员")
                                                    }} checked={professional == "群众团队、社会团队和其他成员组织人员"} name="职业">群众团队、社会团队和其他成员组织人员</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("事业单位员工")
                                                    }} checked={professional == "事业单位员工"} name="职业">事业单位员工</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("公司员工")
                                                    }} checked={professional == "公司员工"} name="职业">公司员工</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("专业技术人员")
                                                    }} checked={professional == "专业技术人员"} name="职业">专业技术人员</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("服务业从业人员")
                                                    }} checked={professional == "服务业从业人员"} name="职业">服务业从业人员</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("农民")
                                                    }} checked={professional == "农民"} name="职业">农民</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("学生")
                                                    }} checked={professional == "学生"} name="职业">学生</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("私营业主")
                                                    }} checked={professional == "私营业主"} name="职业">私营业主</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("自由职业者")
                                                    }} checked={professional == "自由职业者"} name="职业">自由职业者</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("离退休人员")
                                                    }} checked={professional == "离退休人员"} name="职业">离退休人员</Radio>
                                                </Col>
                                                <Col span={10}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("外国政要、国际组织高级管理人员及其关系人")
                                                    }} checked={professional == "外国政要、国际组织高级管理人员及其关系人"} name="职业">外国政要、国际组织高级管理人员及其关系人</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProfessional("无职业")
                                                    }} checked={professional == "无职业"} name="职业">无职业</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                        <div className={styles.border_zhiye}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col >
                                    <FormItem label='税收居民身份' {...formCol_2} >
                                        {getFieldDecorator('tax', {
                                            //rules: [{ required: true, message: '请输入税收居民身份！' }]
                                        })(
                                            <Row >
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeTax("仅为中国纳税居民")
                                                    }} checked={tax == "仅为中国纳税居民"} name="税收居民身份">仅为中国纳税居民</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeTax("仅为非居民")
                                                    }} checked={tax == "仅为非居民"} name="税收居民身份">仅为非居民</Radio>
                                                </Col>
                                                <Col span={9}>
                                                    <Radio onChange={() => {
                                                        changeTax("既是中国税收居民又是其他国家(地区)税收居民")
                                                    }} checked={tax == "既是中国税收居民又是其他国家(地区)税收居民"} name="税收居民身份">既是中国税收居民又是其他国家(地区)税收居民</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                    </FormItem>
                                    <div className={styles.note}>
                                        <span>注:1.如此处勾选“仅为非居民”或"既是中国税收居民又是其他国家(地区)税收居民"，请您填写《个人税收居民身份声明文件;</span><br />
                                        <span>  2.军人、武装警察无需填写此项</span>
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.block}></div>
                            <div className={styles.block}>
                                是否为美国纳税居民(必填)
                            </div>
                            <Row className={styles.block}>
                                <Col >
                                    <FormItem label='美国纳税人识别号' {...formCol_2} >
                                        {getFieldDecorator('number_2', {
                                            //rules: [{ required: false, message: '请输入美国纳税人识别号！' }]
                                        })(
                                            <div >
                                                <Radio.Group name="美国纳税人识别号" defaultValue={1}>
                                                    <Radio value={"否"}>否</Radio>
                                                    <Radio value={"是"}>是</Radio>
                                                </Radio.Group>
                                                <span>(如选择"是",请提供美国纳税识别号:</span>
                                                <Input className={styles.input_1} />
                                            </div>
                                        )}
                                    </FormItem>
                                    <div className={styles.americal}>
                                        <span>注:美国纳税居民是指根据相关法规及税收协定,在美国负有纳税义务的个人。主要包括:美国国籍，或持有美国绿卡或在美国长期逗留的自然人。</span><br />
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.block}>
                                代理人/监护人信息(若代理人/监护人办理，则以下信息必填)
                            </div>
                            <Row className={styles.block}>
                                <Col span={7}>
                                    <FormItem label='姓名' {...formCol} >
                                        {getFieldDecorator('name_2', {
                                            //rules: [{ required: true, message: '请输入姓名！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label='性别' {...formCol} >
                                        {getFieldDecorator('gender_2', {
                                            //rules: [{ required: true, message: '请输入性别！' }]
                                        })(
                                            <Radio.Group name="radiogroup" defaultValue={1}>
                                                <Radio value={1}>男</Radio>
                                                <Radio value={2}>女</Radio>
                                            </Radio.Group>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={10}>
                                    <FormItem label='国籍/地区' {...formCol} >
                                        {getFieldDecorator('nationality_2', {
                                            //rules: [{ required: true, message: '请输入国籍/地区！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='证件类型' {...formCol}>
                                        {getFieldDecorator('type_2', {
                                            //rules: [{ required: true, message: '请输入证件类型！' }]
                                        })(
                                            <Row >
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeType_2("居民身份证")
                                                    }} checked={type_2 == "居民身份证"} name="证件类型">居民身份证</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeType_2("临时身份证")
                                                    }} checked={type_2 == "临时身份证"} name="证件类型">临时身份证</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_2("中国护照")
                                                    }} checked={type_2 == "中国护照"} name="证件类型">中国护照</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_2("军官证")
                                                    }} checked={type_2 == "军官证"} name="证件类型">军官证</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeType_2("武警证")
                                                    }} checked={type_2 == "武警证"} name="证件类型">武警证</Radio>
                                                </Col>
                                                <Col span={8}>
                                                    <Radio onChange={() => {
                                                        changeType_2("港澳居民来往内地通行证")
                                                    }} checked={type_2 == "港澳居民来往内地通行证"} name="证件类型">港澳居民来往内地通行证</Radio>
                                                </Col>
                                                <Col span={8}>
                                                    <Radio onChange={() => {
                                                        changeType_2("台湾居民来往大陆通行证")
                                                    }} checked={type_2 == "台湾居民来往大陆通行证"} name="证件类型">台湾居民来往大陆通行证</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeType_2("外国人永久居留身份证")
                                                    }} checked={type_2 == "外国人永久居留身份证"} name="证件类型">外国人永久居留身份证</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeType_2("边民出入境通行证")
                                                    }} checked={type_2 == "边民出入境通行证"} name="证件类型">边民出入境通行证</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeType_2("外国护照")
                                                    }} checked={type_2 == "外国护照"} name="证件类型">外国护照</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                        <div className={styles.border2}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col span={9}>
                                    <FormItem label='证件号码' {...formCol} >
                                        {getFieldDecorator('number_3', {
                                            //rules: [{ required: true, message: '请输入证件号码！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={14}>
                                    <FormItem label='证件有效期限到期日' {...formCol} >

                                        {getFieldDecorator('riqi_2', {
                                            // //rules: [{ required: false, message: '请输入证件有效期限到期日！' }]
                                        })(
                                            <Row>
                                                <Col span={17}>
                                                    <Radio onChange={() => {
                                                        changeRiqi_2(DatePicker)
                                                    }} checked={riqi_2 == DatePicker} name="证件有效期限到期日">
                                                        <FormItem label='' {...formCol} >
                                                            {getFieldDecorator('dialirenyouxiaodate', {
                                                                // //rules: [{ required: false, message: '请输入证件有效期限到期日！' }]
                                                            })(
                                                                <DatePicker className={styles.DatePicker} />
                                                            )}
                                                        </FormItem>
                                                    </Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeRiqi_2("长期")
                                                    }} checked={riqi_2 == "长期"} name="证件有效期限到期日">长期</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                    </FormItem>
                                </Col>

                            </Row>
                            <Row className={styles.block}>
                                <Col span={9}>
                                    <FormItem label='发证机关' {...formCol} >
                                        {getFieldDecorator('license2', {
                                            //rules: [{ required: true, message: '请输入发证机关！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label='手机号码' {...formCol} >
                                        {getFieldDecorator('phoneNumber2', {
                                            //rules: [{ required: false, message: '请输入手机号码！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col style={{ width: '50%', marginLeft: '-33px', marginTop: '15px' }}>
                                    <FormItem label='联系地址' {...formCol}>
                                        {getFieldDecorator('province', {
                                            //rules: [{ required: true, message: '请输入省/自治区/直辖市！' }]
                                        })(
                                            <Input style={{ width: '100px' }} />
                                        )}
                                        <span>省/自治区/直辖市</span>
                                    </FormItem>
                                </Col>
                                <Col style={{ width: '37%', marginLeft: '320px', marginTop: '-56px' }}>
                                    <FormItem label='' {...formCol} >
                                        {getFieldDecorator('city', {
                                            //rules: [{ required: true, message: '请输入市/区/县！' }]
                                        })(
                                            <Input style={{ width: '100px' }} />
                                        )}
                                        <span >市/区/县</span>
                                    </FormItem>
                                </Col>
                                <Col className={styles.area}>
                                    <FormItem label='' {...formCol} >
                                        {getFieldDecorator('area', {
                                            //rules: [{ required: true, message: '请输入街道/小区/门牌号！' }]
                                        })(
                                            <Input style={{ width: '100px' }} />
                                        )}
                                        <span>街道/小区/门牌号</span>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col span={9} style={{ marginLeft: '-23px' }}>
                                    <FormItem label='类型' {...formCol} >
                                        {getFieldDecorator('type_3', {
                                            //rules: [{ required: true, message: '请输入类型！' }]
                                        })(
                                            <div>
                                                <Checkbox>代理人</Checkbox>
                                                <Checkbox>监护人</Checkbox>
                                            </div>

                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col style={{ margin: '12px 0 0 -259px' }}>
                                    <FormItem label='代理原因' {...formCol} >
                                        {getFieldDecorator('why', {
                                            //rules: [{ required: true, message: '请输入代理原因！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <div className={styles.block}>
                                客户补充信息(选填)
                            </div>
                            <Row className={styles.block}>
                                <Col span={9}>
                                    <FormItem label='婚姻状况' {...formCol} >
                                        {getFieldDecorator('marriage', {
                                            //rules: [{ required: false, message: '请输入婚姻状况！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label='最高学历' {...formCol} >
                                        {getFieldDecorator('record', {
                                            //rules: [{ required: false, message: '请输入最高学历！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label='家庭电话' {...formCol} >
                                        {getFieldDecorator('family_number', {
                                            //rules: [{ required: false, message: '请输入家庭电话！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            {/* 行业 */}
                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='行业' {...formCol}>
                                        {getFieldDecorator('industry', {
                                            //rules: [{ required: false, message: '请输入行业！' }]
                                        })(
                                            <Row >
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("机关事业单位")
                                                    }} checked={industry == "机关事业单位"} name="行业">机关事业单位</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("部队")
                                                    }} checked={industry == "部队"} name="行业">部队</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("国际组织")
                                                    }} checked={industry == "国际组织"} name="行业">国际组织</Radio>
                                                </Col>
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("教育")
                                                    }} checked={industry == "教育"} name="行业">教育</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("医疗卫生业")
                                                    }} checked={industry == "医疗卫生业"} name="行业">医疗卫生业</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("金融业")
                                                    }} checked={industry == "金融业"} name="行业">金融业</Radio>
                                                </Col>
                                                <Col span={9}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("律所、会计事务所等咨询业")
                                                    }} checked={industry == "律所、会计事务所等咨询业"} name="行业">律所、会计事务所等咨询业</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("房地产业")
                                                    }} checked={industry == "房地产业"} name="行业">房地产业</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("通讯IT技术业")
                                                    }} checked={industry == "通讯IT技术业"} name="行业">通讯IT技术业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("交通运输仓储邮政业")
                                                    }} checked={industry == "交通运输仓储邮政业"} name="行业">交通运输仓储邮政业</Radio>
                                                </Col>
                                                <Col span={7}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("水电气生产及供应业")
                                                    }} checked={industry == "水电气生产及供应业"} name="行业">水电气生产及供应业</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("采矿业")
                                                    }} checked={industry == "采矿业"} name="行业">采矿业</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("制造业")
                                                    }} checked={industry == "制造业"} name="行业">制造业</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("建筑业")
                                                    }} checked={industry == "建筑业"} name="行业">建筑业</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("农林牧渔业")
                                                    }} checked={industry == "农林牧渔业"} name="行业">农林牧渔业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("旅游业")
                                                    }} checked={industry == "旅游业"} name="行业">旅游业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("批发零售业")
                                                    }} checked={industry == "批发零售业"} name="行业">批发零售业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("进出口贸易业")
                                                    }} checked={industry == "进出口贸易业"} name="行业">进出口贸易业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("住宿餐饮业")
                                                    }} checked={industry == "住宿餐饮业"} name="行业">住宿餐饮业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("文化娱乐体育业")
                                                    }} checked={industry == "文化娱乐体育业"} name="行业">文化娱乐体育业</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeIndustry("租赁和商务服务业")
                                                    }} checked={industry == "租赁和商务服务业"} name="行业">租赁和商务服务业</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                        <div className={styles.border4}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col span={9}>
                                    <FormItem label='单位名称' {...formCol} >
                                        {getFieldDecorator('unit_name', {
                                            //rules: [{ required: false, message: '请输入单位名称！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label='单位电话' {...formCol} >
                                        {getFieldDecorator('unit_number', {
                                            //rules: [{ required: false, message: '请输入单位电话！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={7}>
                                    <FormItem label='电子邮箱' {...formCol} >
                                        {getFieldDecorator('email', {
                                            //rules: [{ required: false, message: '请输入电子邮箱！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='职务' {...formCol}>
                                        {getFieldDecorator('professiona2', {
                                            //rules: [{ required: false, message: '请输入职务！' }]
                                        })(
                                            <Row>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeProfessiona2("老板/CEO")
                                                    }} checked={professiona2 == "老板/CEO"} name="职务">老板/CEO</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeProfessiona2("高级管理人员")
                                                    }} checked={professiona2 == "高级管理人员"} name="职务">高级管理人员</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeProfessiona2("中层管理人员")
                                                    }} checked={professiona2 == "中层管理人员"} name="职务">中层管理人员</Radio>
                                                </Col>
                                                <Col span={6}>
                                                    <Radio onChange={() => {
                                                        changeProfessiona2("一般职员")
                                                    }} checked={professiona2 == "一般职员"} name="职务">一般职员</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                        <div className={styles.border2}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='你感兴趣的产品' {...formCol}>
                                        {getFieldDecorator('product', {
                                            //rules: [{ required: false, message: '请输入你感兴趣的产品！' }]
                                        })(
                                            <Row >
                                                <Col span={3}>
                                                    <Radio onChange={() => {
                                                        changeProduct("资金")
                                                    }} checked={product == "资金"} name="你感兴趣的产品">资金</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProduct("债券产品")
                                                    }} checked={product == "债券产品"} name="你感兴趣的产品">债券产品</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProduct("保险产品")
                                                    }} checked={product == "保险产品"} name="你感兴趣的产品">保险产品</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeProduct("信托理财类")
                                                    }} checked={product == "信托理财类"} name="你感兴趣的产品">信托理财类</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeProduct("银行理财类")
                                                    }} checked={product == "银行理财类"} name="你感兴趣的产品">银行理财类</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeProduct("海外投资类")
                                                    }} checked={product == "海外投资类"} name="你感兴趣的产品">海外投资类</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeProduct("外币类")
                                                    }} checked={product == "外币类"} name="你感兴趣的产品">外币类</Radio>
                                                </Col>
                                                <Col span={9}>
                                                    <Radio onChange={() => {
                                                        changeProduct("其他")
                                                    }} checked={product == "其他"} name="你感兴趣的产品">其他</Radio>
                                                </Col>
                                                <span className={styles.zhuming}>(请注明):<Input style={{ width: '30%' }}></Input></span>
                                            </Row>
                                        )}
                                        <div className={styles.border2}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='辅助证件类型' {...formCol}>
                                        {getFieldDecorator('type_4', {
                                            //rules: [{ required: false, message: '请输入辅助证件类型！' }]
                                        })(
                                            <Row>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("户口簿")
                                                    }} checked={type_4 == "户口簿"} name="证件类型">户口簿</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("中国护照")
                                                    }} checked={type_4 == "中国护照"} name="证件类型">中国护照</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("外国护照")
                                                    }} checked={type_4 == "外国护照"} name="证件类型">外国护照</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeType_4("机动车驾驶证")
                                                    }} checked={type_4 == "机动车驾驶证"} name="证件类型">机动车驾驶证</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("公安机关出具的户籍证明")
                                                    }} checked={type_4 == "公安机关出具的户籍证明"} name="证件类型">公安机关出具的户籍证明</Radio>
                                                </Col>
                                                <Col span={5}>
                                                    <Radio onChange={() => {
                                                        changeType_4("社会保障卡")
                                                    }} checked={type_4 == "社会保障卡"} name="证件类型">社会保障卡</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("居住证")
                                                    }} checked={type_4 == "居住证"} name="证件类型">居住证</Radio>
                                                </Col>
                                                <Col span={8}>
                                                    <Radio onChange={() => {
                                                        changeType_4("在台湾居住的有效身份证明")
                                                    }} checked={type_4 == "在台湾居住的有效身份证明"} name="证件类型">在台湾居住的有效身份证明</Radio>
                                                </Col>
                                                <Col span={11}>
                                                    <Radio onChange={() => {
                                                        changeType_4("香港、澳门特别行政区居民身份证")
                                                    }} checked={type_4 == "香港、澳门特别行政区居民身份证"} name="证件类型">香港、澳门特别行政区居民身份证</Radio>
                                                </Col>
                                                <Col span={7}>
                                                    <Radio onChange={() => {
                                                        changeType_4("外国居民身份证")
                                                    }} checked={type_4 == "外国居民身份证"} name="证件类型">外国居民身份证</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("使领馆人员身份证件")
                                                    }} checked={type_4 == "使领馆人员身份证件"} name="证件类型">使领馆人员身份证件</Radio>
                                                </Col>
                                                <Col span={4}>
                                                    <Radio onChange={() => {
                                                        changeType_4("其他辅助身份证明文件(如完税证明、水电煤等缴费证明)")
                                                    }} checked={type_4 == "其他辅助身份证明文件(如完税证明、水电煤等缴费证明)"} name="证件类型">其他辅助身份证明文件(如完税证明、水电煤等缴费证明)</Radio>
                                                </Col>
                                            </Row>
                                        )}
                                        <div className={styles.border2}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <Col>
                                    <FormItem label='辅助证件号码' {...formCol}>
                                        {getFieldDecorator('type_number', {
                                            //rules: [{ required: false, message: '请输入辅助证件号码！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                        <div className={styles.border2}></div>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.block}>
                                <div className={styles.footer}>本人已阅读中信银行客户须知并确认以上所填信息真实。以上资料如有变更，本人将及时通知贵行进行个人信息更新。</div>
                                <Col>
                                    <FormItem label='签名' {...formCol}>
                                        {getFieldDecorator('signature', {
                                            //rules: [{ required: true, message: '请输入签名！' }]
                                        })(
                                            <Input className={styles.input} />
                                        )}
                                    </FormItem>
                                </Col>
                                {/* <Col>
                                    <FormItem label='日期' {...formCol} className={styles.day}>
                                        {getFieldDecorator('qianmingdate', {
                                            //rules: [{ required: true, message: '请输入日期！' }]
                                        })(
                                            <DatePicker />
                                        )}
                                    </FormItem>
                                </Col> */}
                            </Row>
                        </div>
                        <div className={styles.footer}>
                            <Row>
                                <Col span={4}>
                                    <Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
                                </Col>

                                <Col offset={5} span={8}>
                                    <Button.Group size='large'>
                                        <Button type="primary" htmlType="submit">提交</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handlePrint() }}>打印</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handleReset() }}>重置</Button>
                                    </Button.Group>
                                </Col>
                            </Row>

                        </div>

                    </Form>
                </section>
            </div>
        </div >
    );
}
LuruRegistration = connect((state) => {
    return {
        ...state.registration,
    };
})(LuruRegistration);

export default create()(LuruRegistration);