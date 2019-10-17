namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui201910112100 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Registrations", "Riqi_1");
            DropColumn("dbo.Registrations", "Riqi_2");
            DropColumn("dbo.Registrations", "Signature");
            DropColumn("dbo.Registrations", "Year_4");
            DropColumn("dbo.Registrations", "Month_4");
            DropColumn("dbo.Registrations", "Day_4");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Registrations", "Day_4", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Month_4", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Year_4", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Signature", c => c.String());
            AddColumn("dbo.Registrations", "Riqi_2", c => c.String());
            AddColumn("dbo.Registrations", "Riqi_1", c => c.String());
        }
    }
}
