namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class zhangyunfei20199101553 : DbMigration
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Jingzhangdans",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Jingzhangdan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
