import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, DatePicker, Checkbox, Select, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
const Option = Select.Option;
import styles from './LuruShouqunweituoshu2.css';
function LuruShouqunweituoshu2({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);
            let data = {
                "bankname": values.bankname,
                "name": values.name,
                "idtype": values.idtype,
                "idnumber": 0,
                "seal": values.seal,
                "phone": values.phone
            };
            if (!err) {
                dispatch({
                    type: 'shouqunweituoshu2/creatShouqunweituoshu2',
                    payload: data
                });
            }
        });
    }
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    return (<div className={styles.container}>
			<div className={styles.content}>

				<header className={styles.title}>
					<Link to="/"><Row className={styles.logo}></Row></Link>
					<Row className={styles.title}>授权委托书（二）</Row>
				</header>
				<Form onSubmit={handleSubmit} style={{ fontSize: 25 }}>
					<div className={styles.date}>
						<FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
							{getFieldDecorator('date', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
						</FormItem>
					</div>
					<Row>
						<span>中信银行</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('bankName', {})(<Input className={styles.input}/>)}
						</FormItem>
					</Row>
					<Row>
						<span>我单位授权</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('name', {})(<Input className={styles.input}/>)}
						</FormItem>
						<span>，证件类型:</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
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
						<span>证件号码：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idNumber', {})(<Input className={styles.input}/>)}
						</FormItem>
						<span>部门：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('Department', {})(<Input className={styles.input}/>)}
						</FormItem>
						<span>职务：</span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('Post', {})(<Input className={styles.input}/>)}
						</FormItem>
						<span>前往贵行办理：</span>
					</Row>
					<Row>
						<Col span={6}>1、电子对账</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="增加/开立">增加/开立</Option>
									<Option value="变更">变更</Option>
									<Option value="删除/注销">删除/注销</Option>
									<Option value="密码重置">密码重置</Option>
									<Option value="密码解锁">密码解锁</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>2、自助回单卡</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="签约">签约</Option>
									<Option value="解约">解约</Option>
									<Option value="换卡/补卡">换卡/补卡</Option>
									<Option value="密码重置">密码重置</Option>
									<Option value="新增账号">新增账号</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>3、单位金融短信通</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="签约">签约</Option>
									<Option value="撤销">撤销</Option>
									<Option value="修改">修改</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>4、理财产品</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="购买">购买</Option>
									<Option value="赎回">赎回</Option>
									<Option value="风险评估">风险评估</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>5、结构性存款</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="购买">购买</Option>
									<Option value="到期冻结">到期冻结</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>6、大额存单</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="购买">购买</Option>
									<Option value="到期冻结">到期冻结</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>7、单位存款证实书</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Select style={{ width: 200 }}>
									<Option value="质押换开">质押换开</Option>
									<Option value="补发">补发</Option>
								</Select>)}
						</FormItem>
					</Row>
					<Row>
						<Col span={6}>8、单位定期存单</Col>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('idType', {})(<Checkbox>撤押更换</Checkbox>)}
						</FormItem>

					</Row>
					<Row>
						<Col span={6}>9、开立存算资信证明</Col>
					</Row>
					<Row>
						<span>10、其他 </span>
						<FormItem className={styles.formItem}>
							{getFieldDecorator('Other', {})(<Input className={styles.input}/>)}
						</FormItem>
					</Row>
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
			</div>
		</div>);
}
;
LuruShouqunweituoshu2 = connect((state) => {
    return Object.assign({}, state.shouqunweituoshu2);
})(LuruShouqunweituoshu2);
export default create()(LuruShouqunweituoshu2);
