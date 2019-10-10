namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class fany20191001 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Yewujiesuanshenqingshus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Designation = c.String(),
                        Account = c.String(),
                        Telephone = c.Int(nullable: false),
                        Account1 = c.String(),
                        Designation1 = c.String(),
                        Account2 = c.String(),
                        Addiess = c.String(),
                        Account3 = c.String(),
                        Currency = c.String(),
                        Money = c.Int(nullable: false),
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Yewujiesuanshenqingshus",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Yewujiesuanshenqingshu_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
