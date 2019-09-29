using Abp.AutoMapper;
using QC.MF.danweixinxidengjibiao;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Danweixinxidengjibiaos.Dto
{
    [AutoMap(typeof(Danweixinxidengjibiao))]
    public class CreateDanweixinxidengjibiaoDto
    {
        public string Company { get; set; }
        //公司
        public int Code { get; set; }
        //社会统一信用代码
        public string Information { get; set; }
        //股东信息
        public string Shareholders { get; set; }
        //股东名称
        public string Shareholders1 { get; set; }
        //股东名称
        public string Shareholders2 { get; set; }
        //股东名称
        public string Shareholders3 { get; set; }
        //股东名称
        public string Identity { get; set; }
        //身份信息
        public string Identity1 { get; set; }
        //身份信息
        public string Identity2 { get; set; }
        //身份信息
        public string Identity3 { get; set; }
        //身份信息
        public int Number { get; set; }
        //证件号码
        public int Number1 { get; set; }
        //证件号码
        public int Number2 { get; set; }
        //证件号码
        public int Number3 { get; set; }
        //证件号码
        public int Date { get; set; }
        //有效期限
        public int Date1 { get; set; }
        //有效期限
        public int Date2 { get; set; }
        //有效期限
        public int Date3 { get; set; }
        //有效期限
        public int Proportion { get; set; }
        //持股比例
        public int Proportion1 { get; set; }
        //持股比例
        public int Proportion2 { get; set; }
        //持股比例
        public int Proportion3 { get; set; }
        //持股比例、
        public string Or { get; set; }
        //是否为实际控股人
        public string Or1 { get; set; }
        //是否为实际控股人
        public string Or2 { get; set; }
        //是否为实际控股人
        public string Or3 { get; set; }
        //是否为实际控股人
        public string Benefiviary { get; set; }
        //受益人信息
        public string Type { get; set; }
        //受益人类型
        public string Type1 { get; set; }
        //受益人类型
        public string Type2 { get; set; }
        //受益人类型
        public string Type3 { get; set; }
        //受益人类型
        public string Name { get; set; }
        //受益人名称
        public string Name1 { get; set; }
        //受益人名称
        public string Name2 { get; set; }
        //受益人名称
        public string Name3 { get; set; }
        //受益人名称
        public string Identity4 { get; set; }
        //身份信息
        public string Identity5 { get; set; }
        //身份信息
        public string Identity6 { get; set; }
        //身份信息
        public string Identity7 { get; set; }
        //身份信息
        public int Number4 { get; set; }
        //证件号码
        public int Number5 { get; set; }
        //证件号码
        public int Number6 { get; set; }
        //证件号码
        public int Number7 { get; set; }
        //证件号码
        public int Date4 { get; set; }
        //有效期限
        public int Date5 { get; set; }
        //有效期限
        public int Date6 { get; set; }
        //有效期限
        public int Date7 { get; set; }
        //有效期限
        public string Address { get; set; }
        //地址
        public string Address1 { get; set; }
        //地址
        public string Address2 { get; set; }
        //地址
        public string Address3 { get; set; }
        //地址
    }
}
