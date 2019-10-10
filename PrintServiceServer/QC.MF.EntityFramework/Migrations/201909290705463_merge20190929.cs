namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class merge20190929 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Danweixinxidengjibiaos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Company = c.String(),
                        Code = c.Int(nullable: false),
                        Information = c.String(),
                        Shareholders = c.String(),
                        Shareholders1 = c.String(),
                        Shareholders2 = c.String(),
                        Shareholders3 = c.String(),
                        Identity = c.String(),
                        Identity1 = c.String(),
                        Identity2 = c.String(),
                        Identity3 = c.String(),
                        Number = c.Int(nullable: false),
                        Number1 = c.Int(nullable: false),
                        Number2 = c.Int(nullable: false),
                        Number3 = c.Int(nullable: false),
                        Date = c.Int(nullable: false),
                        Date1 = c.Int(nullable: false),
                        Date2 = c.Int(nullable: false),
                        Date3 = c.Int(nullable: false),
                        Proportion = c.Int(nullable: false),
                        Proportion1 = c.Int(nullable: false),
                        Proportion2 = c.Int(nullable: false),
                        Proportion3 = c.Int(nullable: false),
                        Or = c.String(),
                        Or1 = c.String(),
                        Or2 = c.String(),
                        Or3 = c.String(),
                        Benefiviary = c.String(),
                        Type = c.String(),
                        Type1 = c.String(),
                        Type2 = c.String(),
                        Type3 = c.String(),
                        Name = c.String(),
                        Name1 = c.String(),
                        Name2 = c.String(),
                        Name3 = c.String(),
                        Identity4 = c.String(),
                        Identity5 = c.String(),
                        Identity6 = c.String(),
                        Identity7 = c.String(),
                        Numbe4 = c.Int(nullable: false),
                        Number5 = c.Int(nullable: false),
                        Number6 = c.Int(nullable: false),
                        Number7 = c.Int(nullable: false),
                        Date4 = c.Int(nullable: false),
                        Date5 = c.Int(nullable: false),
                        Date6 = c.Int(nullable: false),
                        Date7 = c.Int(nullable: false),
                        Address = c.String(),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        Address3 = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Danweixinxidengjibiao_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Jingzhangdans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Chupiaorenqc = c.String(),
                        Chupiaorenzh = c.String(),
                        Chupiaorenkhyh = c.String(),
                        Shoukuanrenqc = c.String(),
                        Shoukuanrenzh = c.String(),
                        Shoukuanrenkhyh = c.String(),
                        Renminbi = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Piaojuzhonglei = c.String(),
                        Piaojuzhangshu = c.Int(nullable: false),
                        Piaojuhaoma = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Jszhsqshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Accounttitle = c.String(),
                        Bankname = c.String(),
                        Bankcode = c.String(),
                        Account = c.String(),
                        Naturezccount = c.String(),
                        Basic = c.String(),
                        Special = c.String(),
                        General = c.String(),
                        Temporary = c.String(),
                        Personal = c.String(),
                        Accountnumber = c.String(),
                        Pinreasons = c.String(),
                        Voucher = c.String(),
                        Species = c.String(),
                        Anumberof = c.String(),
                        Allnumbers = c.String(),
                        Fillingexplanation = c.String(),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Year1 = c.Int(nullable: false),
                        Month1 = c.Int(nullable: false),
                        Day1 = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Powerbooks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Sname = c.String(),
                        Name_1 = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.String(),
                        PhoneNumber_1 = c.String(),
                        Name_2 = c.String(),
                        Type_2 = c.String(),
                        Number_2 = c.String(),
                        PhoneNumber_2 = c.String(),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Registrations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year_1 = c.Int(nullable: false),
                        Month_1 = c.Int(nullable: false),
                        Day_1 = c.Int(nullable: false),
                        Name_1 = c.String(),
                        Name_pinyin = c.String(),
                        Gender_1 = c.String(),
                        Nationality_1 = c.String(),
                        PhoneNumber = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.String(),
                        Riqi_1 = c.String(),
                        Year_2 = c.Int(nullable: false),
                        Month_2 = c.Int(nullable: false),
                        Day_2 = c.Int(nullable: false),
                        License = c.String(),
                        Often_address1 = c.String(),
                        Often_address2 = c.String(),
                        Often_address3 = c.String(),
                        Unit_address1 = c.String(),
                        Unit_address2 = c.String(),
                        Unit_address3 = c.String(),
                        Professional = c.String(),
                        Tax = c.String(),
                        Number_2 = c.String(),
                        Name_2 = c.String(),
                        Gender_2 = c.String(),
                        Nationality_2 = c.String(),
                        Type_2 = c.String(),
                        Number_3 = c.String(),
                        Riqi_2 = c.String(),
                        Year_3 = c.Int(nullable: false),
                        Month_3 = c.Int(nullable: false),
                        Day_3 = c.Int(nullable: false),
                        License2 = c.String(),
                        PhoneNumber2 = c.String(),
                        Province = c.String(),
                        City = c.String(),
                        Area = c.String(),
                        Type_3 = c.String(),
                        Why = c.String(),
                        Marriage = c.String(),
                        Record = c.String(),
                        Family_number = c.String(),
                        Industry = c.String(),
                        Unit_name = c.String(),
                        Unit_number = c.String(),
                        Email = c.String(),
                        Professiona2 = c.String(),
                        Product = c.String(),
                        Type_4 = c.String(),
                        Indicate = c.String(),
                        Type_number = c.String(),
                        Signature = c.String(),
                        Year_4 = c.Int(nullable: false),
                        Month_4 = c.Int(nullable: false),
                        Day_4 = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Registration_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouquanshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Zhihang = c.String(),
                        Name = c.String(),
                        Idcard = c.String(),
                        Telephonenumber = c.String(),
                        Other = c.String(),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                        DeleterUserId = c.Long(),
                        DeletionTime = c.DateTime(),
                        LastModificationTime = c.DateTime(),
                        LastModifierUserId = c.Long(),
                        CreationTime = c.DateTime(nullable: false),
                        CreatorUserId = c.Long(),
                    },
                annotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Shouquanshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouqunweituoshus1",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.String(),
                        Post = c.String(),
                        Seal = c.String(),
                        Phone = c.String(),
                        BingXing = c.String(),
                        FeiZhi = c.String(),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouqunweituoshus2",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.String(),
                        Department = c.String(),
                        Post = c.String(),
                        Add = c.String(),
                        BianGeng = c.String(),
                        ShanXiao = c.String(),
                        MiZhi = c.String(),
                        MiJie = c.String(),
                        QianYue = c.String(),
                        JieYue = c.String(),
                        HuanBu = c.String(),
                        ZengHao = c.String(),
                        CheXiao = c.String(),
                        XiuGai = c.String(),
                        GouMai = c.String(),
                        ShuHui = c.String(),
                        FengGu = c.String(),
                        DaoDong = c.String(),
                        ZhiHuan = c.String(),
                        BuFa = c.String(),
                        Other = c.String(),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Xianjinjiaokuandans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nian = c.String(),
                        Yue = c.String(),
                        Ri = c.String(),
                        AccountName = c.String(),
                        AccountNumber = c.String(),
                        OpeningBank = c.String(),
                        Abstract = c.String(),
                        Money = c.String(),
                        BankSpecialColumn = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Ywdlsqbiaos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Customername = c.String(),
                        Name = c.String(),
                        Certificatetype = c.String(),
                        Idnumber = c.Int(nullable: false),
                        Contactnumber = c.String(),
                        Name2 = c.String(),
                        Certificatetype2 = c.String(),
                        Idnumber2 = c.Int(nullable: false),
                        Contactnumber2 = c.String(),
                        Name1 = c.String(),
                        Certificatetype1 = c.String(),
                        Idnumber1 = c.Int(nullable: false),
                        Contactnumber1 = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Ywdlsqbiaos");
            DropTable("dbo.Xianjinjiaokuandans");
            DropTable("dbo.Shouqunweituoshus2");
            DropTable("dbo.Shouqunweituoshus1");
            DropTable("dbo.Shouquanshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Shouquanshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Registrations",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Registration_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Powerbooks",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Jszhsqshus");
            DropTable("dbo.Jingzhangdans",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Danweixinxidengjibiaos",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Danweixinxidengjibiao_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
