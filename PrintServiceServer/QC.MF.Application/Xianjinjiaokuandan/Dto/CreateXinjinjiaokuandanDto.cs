using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan.Dto
{
    [AutoMap(typeof(QC.MF.Xianjinjiaokuandans.Xianjinjiaokuandan))]
    public class CreateXinjinjiaokuandanDto
    {

        ///客户填写
        //收款单位
        public string AccountName { get; set; }
        //收款账号
        public int AccountNumber { get; set; }
        //开户行
        public string OpeningBank { get; set; }
        //摘要
        public string Abstract { get; set; }
        //币种及金额（大写）
        public string Money { get; set; }
        //千
        public int Thousand1 { get; set; }
        //百
        public int Hundred1 { get; set; }
        //十
        public int Ten1 { get; set; }
        //万
        public int TenThousand { get; set; }
        //千
        public int Thousand2 { get; set; }
        //百
        public int Hundred2 { get; set; }
        //十
        public int Ten2 { get; set; }
        //元
        public int Yuan { get; set; }
        //角
        public int Jiao { get; set; }
        //分
        public int Fen { get; set; }

        //银行专用栏
        public string BankSpecialColumn { get; set; }
    }
}
