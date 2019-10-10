namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class zhuh1029991647 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.jinzhangdans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.jinzhangdans");
        }
    }
}
