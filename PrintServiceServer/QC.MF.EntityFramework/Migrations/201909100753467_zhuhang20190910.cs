namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class zhuhang20190910 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Xianjinjiaokuandans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        Mouth = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        Shoukuandanwei = c.String(),
                        Kaihuhang = c.String(),
                        Shoukuanzhanghao = c.Int(nullable: false),
                        Zhaiyao = c.String(),
                        Bizhongjijine = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Yinhangzhuanyonglan = c.String(),
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
                    { "DynamicFilter_Xianjinjiaokuandan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Xianjinjiaokuandans",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Xianjinjiaokuandan_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
