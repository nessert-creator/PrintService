using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Ywdlsqbiaos
{
    public class Ywdlsqbiao:Entity
    {
        //客户名称
        public string Customername { get; set; }
        //委托人信息
        //姓名
        public string Name { get; set; }
        //证件类型
        public string Certificatetype { get; set; }
        //证件号码
        public int Idnumber { get; set; }
        //联系电话
        public string Contactnumber { get; set; }

        //代理人信息
        //姓名
        public string Name1 { get; set; }
        //证件类型
        public string Certificatetype1 { get; set; }
        //证件号码
        public int Idnumber1 { get; set; }
        //联系电话
        public string Contactnumber1 { get; set; }
    }
}
