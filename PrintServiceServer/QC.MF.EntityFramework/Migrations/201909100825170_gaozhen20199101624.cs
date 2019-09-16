namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class gaozhen20199101624 : DbMigration
    {
        public override void Up()
        {
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
            
            DropTable("dbo.AppStartPages",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_AppStartPage_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.AppStartPages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Platform = c.Int(),
                        Width_Px = c.Int(),
                        High_Px = c.Int(),
                        Url = c.String(),
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
                    { "DynamicFilter_AppStartPage_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Ywdlsqbiaos");
        }
    }
}
