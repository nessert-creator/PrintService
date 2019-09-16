namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class merge20190916 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Jingzhangdans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        Month = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Chupiaorenqc = c.String(),
                        Chupiaorenzh = c.Int(nullable: false),
                        Chupiaorenkhyh = c.String(),
                        Shoukuanrenqc = c.String(),
                        Shoukuanrenzh = c.Int(nullable: false),
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
                "dbo.Xianjinjiaokuandans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AccountName = c.String(),
                        AccountNumber = c.Int(nullable: false),
                        OpeningBank = c.String(),
                        Abstract = c.String(),
                        Money = c.String(),
                        Thousand1 = c.Int(nullable: false),
                        Hundred1 = c.Int(nullable: false),
                        Ten1 = c.Int(nullable: false),
                        TenThousand = c.Int(nullable: false),
                        Thousand2 = c.Int(nullable: false),
                        Hundred2 = c.Int(nullable: false),
                        Ten2 = c.Int(nullable: false),
                        Yuan = c.Int(nullable: false),
                        Jiao = c.Int(nullable: false),
                        Fen = c.Int(nullable: false),
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
            DropTable("dbo.Powerbooks",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
            DropTable("dbo.Jingzhangdans",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
