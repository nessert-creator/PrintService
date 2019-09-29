namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui2019923856 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Registrations", "Riqi_1", c => c.String());
            AddColumn("dbo.Registrations", "Riqi_2", c => c.String());
            DropColumn("dbo.Registrations", "Year_2");
            DropColumn("dbo.Registrations", "Month_2");
            DropColumn("dbo.Registrations", "Day_2");
            DropColumn("dbo.Registrations", "Year_3");
            DropColumn("dbo.Registrations", "Month_3");
            DropColumn("dbo.Registrations", "Day_3");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Registrations", "Day_3", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Month_3", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Year_3", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Day_2", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Month_2", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Year_2", c => c.Int(nullable: false));
            DropColumn("dbo.Registrations", "Riqi_2");
            DropColumn("dbo.Registrations", "Riqi_1");
        }
    }
}
