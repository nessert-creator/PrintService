namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui20199102337 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Powerbooks",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Sname = c.String(),
                        Name_1 = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.Int(nullable: false),
                        PhoneNumber_1 = c.Int(nullable: false),
                        Name_2 = c.String(),
                        Type_2 = c.String(),
                        Number_2 = c.Int(nullable: false),
                        PhoneNumber_2 = c.Int(nullable: false),
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Powerbooks",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Powerbook_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
