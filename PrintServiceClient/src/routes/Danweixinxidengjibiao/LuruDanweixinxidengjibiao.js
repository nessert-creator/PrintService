import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'dva/router';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruDanweixinxidengjibiao.css';
function LuruDanweixinxidengjibiao({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "company": values.company,
                    "code": values.code,
                    "information": values.information,
                    "shareholders": values.shareholders,
                    "shareholders1": values.shareholders1,
                    "shareholders2": values.shareholders2,
                    "shareholders3": values.shareholders3,
                    "designation1": values.designation1,
                    "identity": values.identity,
                    "identity1": values.identity1,
                    "identity2": values.identity2,
                    "identity3": values.identity3,
                    "number": values.number,
                    "number1": values.number1,
                    "number2": values.number2,
                    "number3": values.number3,
                    "date": values.date,
                    "date1": values.date1,
                    "date2": values.date2,
                    "date3": values.date3,
                    "or": values.or,
                    "or1": values.or1,
                    "or2": values.or2,
                    "or3": values.or3,
                    "benefiviary": values.benefiviary,
                    "type": values.type,
                    "type1": values.type1,
                    "type2": values.type2,
                    "type3": values.type3,
                    "name": values.name,
                    "name1": values.name1,
                    "name2": values.name2,
                    "name3": values.name3,
                    "identity4": values.identity4,
                    "identity5": values.identity5,
                    "identity6": values.identity6,
                    "identity7": values.identity7,
                    "number4": values.number4,
                    "number5": values.number5,
                    "number6": values.number6,
                    "number7": values.number7,
                    "date4": values.date4,
                    "date5": values.date5,
                    "date6": values.date6,
                    "date7": values.date7,
                    "address": values.address,
                    "address1": values.address1,
                    "address2": values.address2,
                    "address3": values.address3,
                };
                dispatch({
                    type: 'yewujiesuanshenqingshu/createYewujiesuanshenqngshu',
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
                    "company": values.company,
                    "code": values.code,
                    "information": values.information,
                    "shareholders": values.shareholders,
                    "shareholders1": values.shareholders1,
                    "shareholders2": values.shareholders2,
                    "shareholders3": values.shareholders3,
                    "designation1": values.designation1,
                    "identity": values.identity,
                    "identity1": values.identity1,
                    "identity2": values.identity2,
                    "identity3": values.identity3,
                    "number": values.number,
                    "number1": values.number1,
                    "number2": values.number2,
                    "number3": values.number3,
                    "date": values.date,
                    "date1": values.date1,
                    "date2": values.date2,
                    "date3": values.date3,
                    "ratio": values.ratio,
                    "ratio1": values.ratio1,
                    "ratio2": values.ratio2,
                    "ratio3": values.ratio3,
                    "or": values.or,
                    "or1": values.or1,
                    "or2": values.or2,
                    "or3": values.or3,
                    "benefiviary": values.benefiviary,
                    "type": values.type,
                    "type1": values.type1,
                    "type2": values.type2,
                    "type3": values.type3,
                    "name": values.name,
                    "name1": values.name1,
                    "name2": values.name2,
                    "name3": values.name3,
                    "identity4": values.identity4,
                    "identity5": values.identity5,
                    "identity6": values.identity6,
                    "identity7": values.identity7,
                    "number4": values.number4,
                    "number5": values.number5,
                    "number6": values.number6,
                    "number7": values.number7,
                    "date4": values.date4,
                    "date5": values.date5,
                    "date6": values.date6,
                    "date7": values.date7,
                    "address": values.address,
                    "address1": values.address1,
                    "address2": values.address2,
                    "address3": values.address3,
                };
                dispatch({
                    type: "print/printDanweixinxidengjibiao",
                    payload: data
                });
            }
        });
    }
    const formCol = {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 }
    };
    return (<div className={styles.container}>
			<div className={styles.content}>

				<header className={styles.title}>
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>单位信息登记表</Row>
				</header>

				<section>
					<Form onSubmit={handleSubmit}>
						<div className={styles.content1}>
							<div>
								<div>
									<Row>
										<Col span={12}>
											<FormItem label="公司名称" {...formCol}>
												{getFieldDecorator('company', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
										<Col span={12}>
											<FormItem label="社会统一信用代码" {...formCol}>
												{getFieldDecorator('code', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col className={styles.mingcheng}>股东信息</Col>
									</Row>
									<Row>
										<Col offset={1} span={5} className={styles.card}>
											<FormItem label='股东名称'>
												{getFieldDecorator('shareholders', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件类型'>
												{getFieldDecorator('identity', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件号码'>
												{getFieldDecorator('number', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='有效期限'>
												{getFieldDecorator('date', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='持股比例'>
												{getFieldDecorator('ratio', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='是否控股股东或实际控股人'>
												{getFieldDecorator('or', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
										<Col offset={1} span={5} className={styles.card}>
											<FormItem label='股东名称'>
												{getFieldDecorator('shareholders1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件类型'>
												{getFieldDecorator('identity1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件号码'>
												{getFieldDecorator('number1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='有效期限'>
												{getFieldDecorator('date1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='持股比例'>
												{getFieldDecorator('ratio1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='是否控股股东或实际控股人'>
												{getFieldDecorator('or1', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
										<Col offset={1} span={5} className={styles.card}>
											<FormItem label='股东名称'>
												{getFieldDecorator('shareholders2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件类型'>
												{getFieldDecorator('identity2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件号码'>
												{getFieldDecorator('number2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='有效期限'>
												{getFieldDecorator('date2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='持股比例'>
												{getFieldDecorator('ratio2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='是否控股股东或实际控股人'>
												{getFieldDecorator('or2', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
										<Col offset={1} span={5} className={styles.card}>
											<FormItem label='股东名称'>
												{getFieldDecorator('shareholders3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件类型'>
												{getFieldDecorator('identity3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='证件号码'>
												{getFieldDecorator('number3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='有效期限'>
												{getFieldDecorator('date3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='持股比例'>
												{getFieldDecorator('ratio3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label='是否控股股东或实际控股人'>
												{getFieldDecorator('or3', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
									</Row>
									<Row>
										<Col className={styles.mingcheng}>受益所有人信息</Col>
									</Row>
									<Row>

										<Col offset={1} span={5} className={styles.card}>
											<FormItem label="受益人类型">
												{getFieldDecorator('type', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="受益人名称">
												{getFieldDecorator('name', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件类型">
												{getFieldDecorator('identity4', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件号码">
												{getFieldDecorator('number4', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="有效期限">
												{getFieldDecorator('date4', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="地址">
												{getFieldDecorator('address', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>

										<Col offset={1} span={5} className={styles.card}>
											<FormItem label="受益人类型">
												{getFieldDecorator('type1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="受益人名称">
												{getFieldDecorator('name1', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件类型">
												{getFieldDecorator('identity5', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件号码">
												{getFieldDecorator('number5', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="有效期限">
												{getFieldDecorator('date5', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="地址">
												{getFieldDecorator('address1', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>

										<Col offset={1} span={5} className={styles.card}>
											<FormItem label="受益人类型">
												{getFieldDecorator('type2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="受益人名称">
												{getFieldDecorator('name2', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件类型">
												{getFieldDecorator('identity6', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件号码">
												{getFieldDecorator('number6', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="有效期限">
												{getFieldDecorator('date6', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="地址">
												{getFieldDecorator('address2', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>

										<Col offset={1} span={5} className={styles.card}>
											<FormItem label="受益人类型">
												{getFieldDecorator('type3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="受益人名称">
												{getFieldDecorator('name3', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件类型">
												{getFieldDecorator('identity7', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="证件号码">
												{getFieldDecorator('number7', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="有效期限">
												{getFieldDecorator('date7', {})(<Input className={styles.input}/>)}
											</FormItem>
											<FormItem label="地址">
												{getFieldDecorator('address3', {})(<Input className={styles.input}/>)}
											</FormItem>
										</Col>
									</Row>
								</div>

							</div>
						</div>

					</Form>
				</section>
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
		</div>);
}
LuruDanweixinxidengjibiao = connect((state) => {
    return Object.assign({}, state.danweixinxidengjibiao);
})(LuruDanweixinxidengjibiao);
export default create()(LuruDanweixinxidengjibiao);
