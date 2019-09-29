namespace QC.MF.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Infrastructure.Annotations;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui20199192125 : DbMigration
    {
        public override void Up()
        {
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
                        Nationality_1 = c.String(),
                        PhoneNumber = c.String(),
                        Type_1 = c.String(),
                        Number_1 = c.String(),
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
                        Nationality_2 = c.String(),
                        Type_2 = c.String(),
                        Number_3 = c.String(),
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Registrations",
                removedAnnotations: new Dictionary<string, object>
                {
                    { "DynamicFilter_Registration_SoftDelete", "EntityFramework.DynamicFilters.DynamicFilterDefinition" },
                });
        }
    }
}
