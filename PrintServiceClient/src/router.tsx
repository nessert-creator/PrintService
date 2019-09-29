import React from 'react';
import { Router, Route } from 'dva/router';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import IndexPage from './routes/IndexPage';
import User from './routes/User/User';
import Home from './routes/Home/Home';
import AuditLog from './routes/AuditLog/AuditLog';
import Configuration from './routes/Configuration/Configuration';
import MenuList from './routes/Menu/MenuList';
import OrganizationList from './routes/Organization/OrganizationList';
import Register from './routes/Register/Register';
import RegisterByEmail from './routes/RegisterByEmail/RegisterByEmail';
import Emailregister from './routes/Emailregister/Emailregister';
import Activation from './routes/Activation/Activation';
import Echartall from './routes/Echartall/Echartall';
import Sendemail from './routes/Activation/Modal/Sendemail';
import Active from './routes/Activation/Modal/Active';
import Actsucess from './routes/Activation/Modal/Actsucess';
import Confirmsucess from './routes/Activation/Modal/Confirmsucess';
import Showregister from './routes/Emailregister/Modal/Showregister';
import Sucessregister from './routes/Emailregister/Modal/Sucessregister';
import Callsucess from './routes/Emailregister/Modal/Callsucess';
import Findpass from './routes/Findpass/Findpass';
import Backknow from './routes/Findpass/Modal/Backknow';
import Callback from './routes/Findpass/Modal/Callback';
import Rentbyemail from './routes/Findpass/Modal/Rentbyemail';
import Backsucess from './routes/Findpass/Modal/Backsucess';
import Role from './routes/Role/Role';
import Notification from './routes/Notification/Notification';
import Editor from './routes/Editor/Editor';
import ThirdPartyBinding from './routes/ThirdPartyBinding/ThirdPartyBinding';
import BindingLoginUser from './routes/ThirdPartyBinding/BindingLoginUser';
import QRLogin from './routes/Activation/Modal/QRLogin';
import AuditLogCRUDDemo from './routes/AuditLogCRUDDemo/AuditLog';
import Demo from './routes/Demo/Demo';
import GetsetDemo from './routes/GetsetDemo/GetsetDemo';
import UserCRUDDemo from './routes/UserCRUDDemo/User';
import AppEdition from './routes/AppEdition/AppEdition';
import AppStartPage from './routes/AppStartPage/AppStartPage';
import Print from './routes/Print/Print';
import Xinjinjiaokuandan from './routes/Xinjinjiaokuandan/Xinjinjiaokuandan';
import LuruXinjinjiaokuandan from './routes/Xinjinjiaokuandan/LuruXinjinjiaokuandan';
import Jiangzhangdan from './routes/Jiangzhangdan/Jiangzhangdan';
import Lurujiangzhangdan from './routes/Jiangzhangdan/Lurujiangzhangdan';
import Powerbook from './routes/Powerbook/Powerbook';
import LuruPowerbook from './routes/Powerbook/LuruPowerbook';
import LuruRegistration from './routes/Registration/LuruRegistration';
import Registration from './routes/Registration/Registration';
import Ywdlsqbiao from './routes/Ywdlsqbiao/Ywdlsqbiao';
import LuruYwdlsqbiao from './routes/Ywdlsqbiao/LuruYwdlsqbiao';
import Jszhsqshu from './routes/Jszhsqshu/Jszhsqshu';
import LuruJszhsqshu from './routes/Jszhsqshu/LuruJszhsqshu';
import Yewujiesuanshenqingshu from './routes/Yewujiesuanshenqingshu/Yewujiesuanshenqingshu';
import LuruYewujiesuanshenqngshu from './routes/Yewujiesuanshenqingshu/LuruYewujiesuanshenqngshu';
import Danweixinxidengjibiao from './routes/Danweixinxidengjibiao/Danweixinxidengjibiao';
import LuruDanweixinxidengjibiao from './routes/Danweixinxidengjibiao/LuruDanweixinxidengjibiao';
import Shouquanshu from './routes/Shouquanshu/Shouquanshu';
import LuruShouquanshu from './routes/Shouquanshu/LuruShouquanshu';
/**
 * router.js
 * Created by 李廷旭 on 2017/9/5 12:39
 * 描述: 路由
 */
export default function RouterConfig({ history }) {
	return (
		<LocaleProvider locale={zhCN}>
			<Router history={history}>
				<Route path="/" component={IndexPage} />
				<Route path="/register" component={Register} />
				<Route path="/registerByEmail" component={RegisterByEmail} />
				<Route path="/thirdpartybinding" component={ThirdPartyBinding} />
				<Route path="/binding" component={BindingLoginUser} />
				<Route path="/emailregister" component={Emailregister}>
					<Route path="/showres" component={Showregister} />
					<Route path="/sucess" component={Sucessregister} />
					<Route path="/callsucess" component={Callsucess} />
				</Route>
				<Route path="/" component={Activation}>
					<Route path="/sendemail" component={Sendemail} />
					<Route path="/active" component={Active} />
					<Route path="/actsucess" component={Actsucess} />
					<Route path="/confirm" component={Confirmsucess} />
					<Route path="/qrLogin" component={QRLogin} />
				</Route>
				<Route path="/" component={Findpass}>
					<Route path="/backknow" component={Backknow} />
					<Route path="/callback" component={Callback} />
					<Route path="/resetpassword" component={Rentbyemail} />
					<Route path="/backsucess" component={Backsucess} />
				</Route>
				<Route path="/" component={Home}>
					<Route path="/echartall" component={Echartall} />
					<Route path="/user" component={User} />
					<Route path="/role" component={Role} />
					<Route path="/auditLog" component={AuditLog} />
					<Route path="/configuration" component={Configuration} />
					<Route path="/menu" component={MenuList} />
					<Route path="/organization" component={OrganizationList} />
					<Route path="/notification" component={Notification} />
					<Route path="/editor" component={Editor} />
					<Route path="/auditLogCRUDDemo" component={AuditLogCRUDDemo} />
					<Route path="/demo" component={Demo} />
					<Route path="/getsetDemo" component={GetsetDemo} />
					<Route path="/userCRUDDemo" component={UserCRUDDemo} />
					<Route path="/appEdition" component={AppEdition} />
					<Route path="/appStartPage" component={AppStartPage} />
					<Route path="/print" component={Print} />
					<Route path="/xinjinjiaokuandan" component={Xinjinjiaokuandan} />
					<Route path="/jiangzhangdan" component={Jiangzhangdan} />
					<Route path="/powerbook" component={Powerbook} />
					<Route path="/registration" component={Registration} />
					<Route path="/ywdlsqbiao" component={Ywdlsqbiao} />
					<Route path="/jszhsqshu" component={Jszhsqshu} />
					<Route path="/yewujiesuanshenqingshu" component={Yewujiesuanshenqingshu} />
					<Route path="/danweixinxidengjibiao" component={Danweixinxidengjibiao} />
					<Route path="/shouquanshu" component={Shouquanshu} />
				</Route>

				<Route path="/LuruXinjinjiaokuandan" component={LuruXinjinjiaokuandan} />
				<Route path="/lurujiangzhangdan" component={Lurujiangzhangdan} />
				<Route path="/luruPowerbook" component={LuruPowerbook} />
				<Route path="/luruRegistration" component={LuruRegistration} />
				<Route path="/luruYwdlsqbiao" component={LuruYwdlsqbiao} />
				<Route path="/luruJszhsqshu" component={LuruJszhsqshu} />
				<Route path="/luruYewujiesuanshenqngshu" component={LuruYewujiesuanshenqngshu} />
				<Route path="/luruDanweixinxidengjibiao" component={LuruDanweixinxidengjibiao} />

				<Route path="/lurushouquanshu" component={LuruShouquanshu} />
			</Router>
		</LocaleProvider>
	);
}
