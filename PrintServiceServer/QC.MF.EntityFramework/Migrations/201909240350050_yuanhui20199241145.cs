namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui20199241145 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Registrations", "Year_2", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Month_2", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Day_2", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Registrations", "Day_2");
            DropColumn("dbo.Registrations", "Month_2");
            DropColumn("dbo.Registrations", "Year_2");
        }
    }
}
