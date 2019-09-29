namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class zhuhang20199222157 : DbMigration
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
            
            DropTable("dbo.Yewujiesuanshenqingshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Yewujiesuanshenqingshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Yewujiesuanshenqingshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Designation = c.String(),
                        Account = c.String(),
                        telephone = c.Int(nullable: false),
                        Account1 = c.String(),
                        Designation1 = c.String(),
                        Account2 = c.String(),
                        Addiess = c.String(),
                        Account3 = c.String(),
                        Currency = c.String(),
                        money = c.Int(nullable: false),
                        Account4 = c.String(),
                        Pay = c.Int(nullable: false),
                        Nationality = c.String(),
                        Type = c.String(),
                        Professional = c.String(),
                        Number = c.String(),
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
                    { "DynamicFilter_Yewujiesuanshenqingshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Danweixinxidengjibiaos",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Danweixinxidengjibiao_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
