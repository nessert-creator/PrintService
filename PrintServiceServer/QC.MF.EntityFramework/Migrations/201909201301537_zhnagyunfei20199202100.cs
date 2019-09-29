namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class zhnagyunfei20199202100 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Shouquanshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Zhihang = c.String(),
                        Name = c.String(),
                        Idcard = c.String(),
                        Telephonenumber = c.Int(nullable: false),
                        Other = c.String(),
                        Year = c.Int(nullable: false),
                        month = c.Int(nullable: false),
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Shouquanshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Shouquanshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
